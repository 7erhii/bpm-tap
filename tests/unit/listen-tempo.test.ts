import { describe, expect, it } from 'vitest';
import {
  autocorrelation,
  estimateTempoFromOnset,
  syntheticOnsetPulse,
  tempoSalience,
} from '../../src/lib/listen/tempo';

describe('listen tempo estimation', () => {
  it('autocorrelation peaks at lag 0', () => {
    const ac = autocorrelation([1, 0, 1, 0, 1, 0, 1, 0]);
    expect(ac[0]).toBeCloseTo(1, 5);
  });

  it('detects ~120 BPM from steady synthetic onsets', () => {
    const fps = 86;
    const onset = syntheticOnsetPulse(8, 0.5, fps, 0.01);
    const estimate = estimateTempoFromOnset(onset, {
      fps,
      signalLevel: 0.4,
      analyzedSec: 8,
    });
    expect(estimate.bpm).not.toBeNull();
    expect(estimate.bpm!).toBeGreaterThan(115);
    expect(estimate.bpm!).toBeLessThan(125);
    expect(['medium', 'high']).toContain(estimate.confidence);
  });

  it('detects ~128 BPM', () => {
    const fps = 86;
    const interval = 60 / 128;
    const onset = syntheticOnsetPulse(9, interval, fps, 0.015);
    const estimate = estimateTempoFromOnset(onset, {
      fps,
      signalLevel: 0.35,
      analyzedSec: 9,
    });
    expect(estimate.bpm).not.toBeNull();
    expect(Math.abs(estimate.bpm! - 128)).toBeLessThan(3);
  });

  it('returns no BPM for silence / flat onset', () => {
    const fps = 86;
    const onset = new Float32Array(Math.round(fps * 6));
    const estimate = estimateTempoFromOnset(onset, {
      fps,
      signalLevel: 0.01,
      analyzedSec: 6,
    });
    expect(estimate.bpm).toBeNull();
    expect(estimate.confidence).toBe('none');
  });

  it('tempoSalience is higher at the true period than a random tempo', () => {
    const fps = 80;
    const onset = syntheticOnsetPulse(6, 0.5, fps, 0);
    const acorr = autocorrelation(onset);
    const at120 = tempoSalience(acorr, 120, fps);
    const at97 = tempoSalience(acorr, 97, fps);
    expect(at120).toBeGreaterThan(at97);
  });
});
