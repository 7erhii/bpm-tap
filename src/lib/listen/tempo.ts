import type { Confidence } from '@/lib/bpm/types';
import type { TempoCandidate, TempoEstimate } from './types';

const MIN_BPM = 60;
const MAX_BPM = 200;
/** Prefer common dance/pop feel when scores are close */
const PREFERRED_MIN = 70;
const PREFERRED_MAX = 160;

export interface EstimateOptions {
  minBpm?: number;
  maxBpm?: number;
  /** Frames (onset hops) per second */
  fps: number;
  signalLevel?: number;
  analyzedSec?: number;
}

function clamp(n: number, lo: number, hi: number): number {
  return Math.max(lo, Math.min(hi, n));
}

function roundBpm(value: number): number {
  return Math.round(value * 10) / 10;
}

/** Normalize and center, then lag-0–normalized autocorrelation. */
export function autocorrelation(values: ArrayLike<number>): Float64Array {
  const n = values.length;
  const out = new Float64Array(n);
  if (n < 2) return out;

  let sum = 0;
  for (let i = 0; i < n; i += 1) sum += values[i];
  const mean = sum / n;

  const centered = new Float64Array(n);
  for (let i = 0; i < n; i += 1) centered[i] = values[i] - mean;

  for (let lag = 0; lag < n; lag += 1) {
    let acc = 0;
    const count = n - lag;
    for (let i = 0; i < count; i += 1) {
      acc += centered[i] * centered[i + lag];
    }
    out[lag] = count > 0 ? acc / count : 0;
  }

  const norm = out[0];
  if (norm > 1e-12) {
    for (let i = 0; i < n; i += 1) out[i] /= norm;
  }
  return out;
}

function sampleAcorr(acorr: Float64Array, lag: number): number {
  if (lag <= 0 || lag >= acorr.length - 1) return 0;
  const i0 = Math.floor(lag);
  const i1 = i0 + 1;
  const t = lag - i0;
  return acorr[i0] * (1 - t) + acorr[i1] * t;
}

/**
 * Comb-enhanced tempo salience (Ellis-style): score period τ plus harmonics.
 * Higher = stronger periodic onset energy at that tempo.
 */
export function tempoSalience(
  acorr: Float64Array,
  bpm: number,
  fps: number,
): number {
  const period = (60 / bpm) * fps;
  if (period < 1 || period >= acorr.length) return 0;

  // Weights emphasize the fundamental, then 2× / 3× / 4× beat subdivisions
  const weights = [1, 0.5, 0.33, 0.25];
  let score = 0;
  for (let k = 1; k <= weights.length; k += 1) {
    const lag = period * k;
    if (lag >= acorr.length - 1) break;
    score += weights[k - 1] * Math.max(0, sampleAcorr(acorr, lag));
  }
  return score;
}

function mergeNearby(candidates: TempoCandidate[], radius = 1.5): TempoCandidate[] {
  const sorted = [...candidates].sort((a, b) => b.score - a.score);
  const merged: TempoCandidate[] = [];
  for (const c of sorted) {
    const near = merged.find((m) => Math.abs(m.bpm - c.bpm) <= radius);
    if (!near) {
      merged.push({ ...c });
    } else if (c.score > near.score) {
      near.bpm = c.bpm;
      near.score = c.score;
    }
  }
  return merged.sort((a, b) => b.score - a.score);
}

function preferenceBoost(bpm: number): number {
  if (bpm >= PREFERRED_MIN && bpm <= PREFERRED_MAX) return 1.08;
  if (bpm < MIN_BPM + 5 || bpm > MAX_BPM - 10) return 0.92;
  return 1;
}

/**
 * Resolve octave confusion: if 2× or ½× of the top score is nearly as strong,
 * prefer the candidate inside the preferred musical range.
 */
function pickPrimary(candidates: TempoCandidate[]): TempoCandidate | null {
  if (candidates.length === 0) return null;
  const top = candidates[0];
  const related = candidates.filter((c) => {
    const ratio = c.bpm / top.bpm;
    return (
      c !== top &&
      (Math.abs(ratio - 2) < 0.06 ||
        Math.abs(ratio - 0.5) < 0.06 ||
        Math.abs(ratio - 1.5) < 0.06 ||
        Math.abs(ratio - 2 / 3) < 0.06)
    );
  });

  let best = top;
  for (const alt of related) {
    if (alt.score < top.score * 0.72) continue;
    const topIn = top.bpm >= PREFERRED_MIN && top.bpm <= PREFERRED_MAX;
    const altIn = alt.bpm >= PREFERRED_MIN && alt.bpm <= PREFERRED_MAX;
    if (altIn && !topIn) best = alt;
    else if (altIn === topIn && alt.score > best.score * 0.95 && alt.bpm < best.bpm) {
      // Prefer slower feel when tied (less double-time false positives)
      best = alt;
    }
  }
  return best;
}

function confidenceFrom(
  primary: TempoCandidate | null,
  second: TempoCandidate | null,
  analyzedSec: number,
  signalLevel: number,
): Confidence {
  if (!primary || analyzedSec < 2.5 || signalLevel < 0.04) return 'none';
  if (analyzedSec < 4 || signalLevel < 0.08) return 'low';

  const dominance = second && second.score > 0 ? primary.score / second.score : 3;
  const strength = primary.score;

  if (analyzedSec >= 7 && strength >= 0.55 && dominance >= 1.18 && signalLevel >= 0.12) {
    return 'high';
  }
  if (analyzedSec >= 5 && strength >= 0.4 && dominance >= 1.08) {
    return 'medium';
  }
  if (strength >= 0.28) return 'low';
  return 'none';
}

/**
 * Estimate BPM from a hop-synchronous onset-strength curve.
 * Pure / testable — no Web Audio.
 */
export function estimateTempoFromOnset(
  onset: ArrayLike<number>,
  options: EstimateOptions,
): TempoEstimate {
  const fps = options.fps;
  const minBpm = options.minBpm ?? MIN_BPM;
  const maxBpm = options.maxBpm ?? MAX_BPM;
  const signalLevel = options.signalLevel ?? 0;
  const analyzedSec = options.analyzedSec ?? onset.length / fps;

  const empty: TempoEstimate = {
    bpm: null,
    confidence: 'none',
    candidates: [],
    signalLevel,
    analyzedSec,
  };

  if (onset.length < fps * 2 || fps <= 0) return empty;

  const acorr = autocorrelation(onset);
  const scored: TempoCandidate[] = [];

  // 0.5 BPM grid is enough for mic estimates; salience is interpolated in lag space
  for (let bpm = minBpm; bpm <= maxBpm; bpm += 0.5) {
    const raw = tempoSalience(acorr, bpm, fps);
    if (raw <= 0) continue;
    scored.push({
      bpm: roundBpm(bpm),
      score: raw * preferenceBoost(bpm),
    });
  }

  const candidates = mergeNearby(scored).slice(0, 5);
  // Re-sort after merge using raw-ish scores already stored
  candidates.sort((a, b) => b.score - a.score);

  const primary = pickPrimary(candidates);
  if (!primary) return empty;

  // Put primary first in the list for UI
  const ordered = [
    primary,
    ...candidates.filter((c) => Math.abs(c.bpm - primary.bpm) > 0.2),
  ].slice(0, 5);

  const confidence = confidenceFrom(
    primary,
    ordered[1] ?? null,
    analyzedSec,
    signalLevel,
  );

  return {
    bpm: confidence === 'none' ? null : roundBpm(primary.bpm),
    confidence,
    candidates: ordered.map((c) => ({
      bpm: roundBpm(c.bpm),
      score: Math.round(c.score * 1000) / 1000,
    })),
    signalLevel,
    analyzedSec,
  };
}

/** Build a synthetic onset curve with impulses every `intervalSec` (for tests). */
export function syntheticOnsetPulse(
  durationSec: number,
  intervalSec: number,
  fps: number,
  noise = 0.02,
): Float64Array {
  const n = Math.round(durationSec * fps);
  const out = new Float64Array(n);
  const period = intervalSec * fps;
  for (let i = 0; i < n; i += 1) {
    const phase = i % period;
    const spike = phase < 1.2 ? 1 - phase / 1.2 : 0;
    out[i] = spike + (Math.random() * 2 - 1) * noise;
  }
  return out;
}

export function clampSignalLevel(rms: number): number {
  // Mic RMS is typically tiny; map into a usable 0–1 meter
  return clamp(Math.sqrt(Math.max(0, rms)) * 4.5, 0, 1);
}
