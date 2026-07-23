import type { Confidence } from './types';

export function coefficientOfVariation(intervals: number[]): number | null {
  if (intervals.length < 2) return null;
  const mean = intervals.reduce((a, b) => a + b, 0) / intervals.length;
  if (mean <= 0) return null;
  const variance =
    intervals.reduce((sum, value) => sum + (value - mean) ** 2, 0) / intervals.length;
  return Math.sqrt(variance) / mean;
}

export function deviationFromMean(intervals: number[]): number | null {
  if (intervals.length < 2) return null;
  const mean = intervals.reduce((a, b) => a + b, 0) / intervals.length;
  if (mean <= 0) return null;
  const bpm = 60000 / mean;
  const cv = coefficientOfVariation(intervals);
  if (cv == null) return null;
  return Math.max(0.1, Math.round(bpm * cv * 10) / 10);
}

export function confidenceFromStats(
  tapCount: number,
  intervals: number[],
  stableTapCount: number,
): Confidence {
  if (tapCount < 3 || intervals.length === 0) return 'none';
  const cv = coefficientOfVariation(intervals);
  if (cv == null) return 'low';

  if (tapCount >= stableTapCount && cv <= 0.035) return 'high';
  if (tapCount >= 5 && cv <= 0.07) return 'medium';
  return 'low';
}
