import { clampSignalLevel, estimateTempoFromOnset } from './tempo';
import type { ListenSessionHandlers, ListenStatus, TempoEstimate } from './types';

const FFT_SIZE = 2048;
const HOP_MS = 12;
const WINDOW_SEC = 8;
const ESTIMATE_EVERY_MS = 450;
/** Use lower spectrum bins — kicks / bass pulse dominate tempo */
const FLUX_BIN_START = 1;
const FLUX_BIN_END = 48;
/** UI spectrum: map a wider audible band into N bars */
const SPEC_BIN_START = 2;
const SPEC_BIN_END = 180;
const SPEC_BARS = 24;

export interface ListenSession {
  start: () => Promise<void>;
  stop: () => void;
  getStatus: () => ListenStatus;
}

function supportsMic(): boolean {
  return (
    typeof window !== 'undefined' &&
    typeof navigator !== 'undefined' &&
    !!navigator.mediaDevices?.getUserMedia &&
    typeof AudioContext !== 'undefined'
  );
}

/**
 * Live mic → bass-weighted spectral flux → tempo estimate.
 * Audio never leaves the browser (AnalyserNode only).
 */
export function createListenSession(handlers: ListenSessionHandlers): ListenSession {
  let status: ListenStatus = 'idle';
  let ctx: AudioContext | null = null;
  let stream: MediaStream | null = null;
  let analyser: AnalyserNode | null = null;
  let source: MediaStreamAudioSourceNode | null = null;
  let silent: GainNode | null = null;
  let hopTimer: number | null = null;
  let estimateTimer: number | null = null;

  let prevMag: Float32Array | null = null;
  let onset: number[] = [];
  let levelEma = 0;
  let frames = 0;
  const fps = 1000 / HOP_MS;
  const maxFrames = Math.round(WINDOW_SEC * fps);

  const freqDb = new Float32Array(FFT_SIZE / 2);
  const timeDomain = new Float32Array(FFT_SIZE);
  const spectrumEma = new Float32Array(SPEC_BARS);

  function setStatus(next: ListenStatus, detail?: string) {
    status = next;
    handlers.onStatus?.(next, detail);
  }

  function buildSpectrumBars(): number[] {
    const binEnd = Math.min(SPEC_BIN_END, freqDb.length - 1);
    const binCount = Math.max(1, binEnd - SPEC_BIN_START + 1);
    const out: number[] = [];
    for (let b = 0; b < SPEC_BARS; b += 1) {
      const i0 = SPEC_BIN_START + Math.floor((b / SPEC_BARS) * binCount);
      const i1 = SPEC_BIN_START + Math.floor(((b + 1) / SPEC_BARS) * binCount);
      let peak = -140;
      for (let i = i0; i < i1; i += 1) {
        const db = freqDb[i];
        if (Number.isFinite(db) && db > peak) peak = db;
      }
      // Map roughly -90..-25 dB → 0..1
      const norm = Math.max(0, Math.min(1, (peak + 90) / 65));
      spectrumEma[b] = spectrumEma[b] * 0.55 + norm * 0.45;
      out.push(spectrumEma[b]);
    }
    return out;
  }

  function cleanupNodes() {
    if (hopTimer != null) {
      window.clearInterval(hopTimer);
      hopTimer = null;
    }
    if (estimateTimer != null) {
      window.clearInterval(estimateTimer);
      estimateTimer = null;
    }
    try {
      source?.disconnect();
    } catch {
      /* ignore */
    }
    try {
      analyser?.disconnect();
    } catch {
      /* ignore */
    }
    try {
      silent?.disconnect();
    } catch {
      /* ignore */
    }
    source = null;
    analyser = null;
    silent = null;
    if (stream) {
      for (const track of stream.getTracks()) track.stop();
      stream = null;
    }
    if (ctx) {
      void ctx.close();
      ctx = null;
    }
    prevMag = null;
    onset = [];
    frames = 0;
    levelEma = 0;
    spectrumEma.fill(0);
  }

  function tickHop() {
    if (!analyser) return;

    analyser.getFloatFrequencyData(freqDb);
    analyser.getFloatTimeDomainData(timeDomain);

    let energy = 0;
    for (let i = 0; i < timeDomain.length; i += 1) {
      const s = timeDomain[i];
      energy += s * s;
    }
    const rms = Math.sqrt(energy / timeDomain.length);
    const level = clampSignalLevel(rms);
    levelEma = levelEma === 0 ? level : levelEma * 0.85 + level * 0.15;

    const binEnd = Math.min(FLUX_BIN_END, freqDb.length - 1);
    const mag = new Float32Array(binEnd - FLUX_BIN_START + 1);
    let flux = 0;
    for (let bin = FLUX_BIN_START; bin <= binEnd; bin += 1) {
      const db = freqDb[bin];
      // dB → linear; floor silence
      const linear = Number.isFinite(db) ? Math.pow(10, db / 20) : 0;
      const idx = bin - FLUX_BIN_START;
      mag[idx] = linear;
      if (prevMag) {
        const delta = linear - prevMag[idx];
        if (delta > 0) {
          // Slight bass emphasis (lower bins weigh more)
          const w = 1.35 - (idx / mag.length) * 0.55;
          flux += delta * w;
        }
      }
    }
    prevMag = mag;

    // Soft noise gate — ignore tiny flux when room is quiet
    const gated = levelEma < 0.035 ? 0 : Math.max(0, flux);
    onset.push(gated);
    if (onset.length > maxFrames) onset.shift();
    frames += 1;

    handlers.onFrame?.({
      level: levelEma,
      spectrum: buildSpectrumBars(),
    });
  }

  function publishEstimate() {
    const analyzedSec = onset.length / fps;
    const estimate: TempoEstimate = estimateTempoFromOnset(onset, {
      fps,
      signalLevel: levelEma,
      analyzedSec,
    });
    handlers.onEstimate(estimate);
  }

  async function start() {
    if (status === 'listening' || status === 'requesting') return;
    if (!supportsMic()) {
      setStatus('unsupported');
      return;
    }

    cleanupNodes();
    setStatus('requesting');

    try {
      stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: false,
          noiseSuppression: false,
          autoGainControl: true,
          channelCount: 1,
        },
        video: false,
      });
    } catch (err) {
      const name = err instanceof DOMException ? err.name : '';
      if (name === 'NotAllowedError' || name === 'PermissionDeniedError') {
        setStatus('denied');
      } else {
        setStatus('error', name || 'getUserMedia failed');
      }
      cleanupNodes();
      return;
    }

    try {
      ctx = new AudioContext();
      await ctx.resume();
      source = ctx.createMediaStreamSource(stream);
      analyser = ctx.createAnalyser();
      analyser.fftSize = FFT_SIZE;
      analyser.smoothingTimeConstant = 0;
      // Keep graph alive without audible monitor (avoids feedback)
      silent = ctx.createGain();
      silent.gain.value = 0;
      source.connect(analyser);
      analyser.connect(silent);
      silent.connect(ctx.destination);

      setStatus('listening');
      hopTimer = window.setInterval(tickHop, HOP_MS);
      estimateTimer = window.setInterval(publishEstimate, ESTIMATE_EVERY_MS);
      // First publish after a short buffer fill
      window.setTimeout(publishEstimate, 1200);
    } catch (err) {
      setStatus('error', err instanceof Error ? err.message : 'AudioContext failed');
      cleanupNodes();
    }
  }

  function stop() {
    cleanupNodes();
    setStatus('idle');
    handlers.onEstimate({
      bpm: null,
      confidence: 'none',
      candidates: [],
      signalLevel: 0,
      analyzedSec: 0,
    });
    handlers.onFrame?.({ level: 0, spectrum: Array.from({ length: SPEC_BARS }, () => 0) });
  }

  return {
    start,
    stop,
    getStatus: () => status,
  };
}
