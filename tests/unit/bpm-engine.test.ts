import { describe, expect, it } from 'vitest';
import { createTapEngine } from '../../src/lib/bpm/engine';

describe('createTapEngine', () => {
  it('stays idle until min taps', () => {
    const engine = createTapEngine();
    engine.tap(0);
    engine.tap(500);
    const snap = engine.getSnapshot();
    expect(snap.bpm).toBeNull();
    expect(snap.confidence).toBe('none');
  });

  it('computes ~120 BPM from steady 500ms intervals', () => {
    const engine = createTapEngine();
    let t = 0;
    for (let i = 0; i < 10; i += 1) {
      engine.tap(t);
      t += 500;
    }
    const snap = engine.getSnapshot();
    expect(snap.bpm).toBeCloseTo(120, 0);
    expect(snap.confidence).toBe('high');
    expect(snap.status).toBe('stable');
  });

  it('resets after stale gap', () => {
    const engine = createTapEngine({ staleGapMs: 2000 });
    engine.tap(0);
    engine.tap(500);
    engine.tap(1000);
    const afterStale = engine.tap(4000);
    expect(afterStale.tapCount).toBe(1);
    expect(afterStale.bpm).toBeNull();
  });

  it('supports half and double factors', () => {
    const engine = createTapEngine();
    let t = 0;
    for (let i = 0; i < 8; i += 1) {
      engine.tap(t);
      t += 500;
    }
    expect(engine.half().bpm).toBeCloseTo(60, 0);
    expect(engine.double().bpm).toBeCloseTo(120, 0);
    expect(engine.double().bpm).toBeCloseTo(240, 0);
  });

  it('hydrates share BPM without taps', () => {
    const engine = createTapEngine();
    const snap = engine.hydrateBpm(128, 'share');
    expect(snap.bpm).toBe(128);
    expect(snap.source).toBe('share');
    expect(snap.confidence).toBe('none');
  });

  it('hydrates manual BPM without taps', () => {
    const engine = createTapEngine();
    const snap = engine.hydrateBpm(123, 'manual');
    expect(snap.bpm).toBe(123);
    expect(snap.source).toBe('manual');
    expect(snap.inRange).toBe(true);
  });

  it('hydrates listen BPM without taps', () => {
    const engine = createTapEngine();
    const snap = engine.hydrateBpm(128, 'listen');
    expect(snap.bpm).toBe(128);
    expect(snap.source).toBe('listen');
  });
});
