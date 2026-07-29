import { confidenceFromStats, deviationFromMean } from './confidence';
import type {
  BpmFactor,
  EngineSnapshot,
  ReadingSource,
  TapEngineOptions,
} from './types';

const defaults = {
  minTapsToDisplay: 3,
  windowSize: 8,
  staleGapMs: 2000,
  minBpm: 30,
  maxBpm: 300,
  stableTapCount: 8,
};

function roundBpm(value: number): number {
  return Math.round(value * 10) / 10;
}

function applyFactor(raw: number, factor: BpmFactor): number {
  return roundBpm(raw * factor);
}

export function createTapEngine(options: TapEngineOptions = {}) {
  const config = { ...defaults, ...options };
  let taps: number[] = [];
  let factor: BpmFactor = 1;
  let source: ReadingSource = 'tap';
  let hydratedBpm: number | null = null;

  function intervalsFromTaps(list: number[]): number[] {
    const intervals: number[] = [];
    for (let i = 1; i < list.length; i += 1) {
      intervals.push(list[i] - list[i - 1]);
    }
    return intervals.slice(-config.windowSize);
  }

  function snapshot(): EngineSnapshot {
    if (hydratedBpm != null && taps.length === 0) {
      const bpm = roundBpm(hydratedBpm * factor);
      return {
        status: 'idle',
        tapCount: 0,
        rawBpm: hydratedBpm,
        bpm,
        factor,
        confidence: 'none',
        deviationBpm: null,
        inRange: bpm >= config.minBpm && bpm <= config.maxBpm,
        source,
      };
    }

    const intervals = intervalsFromTaps(taps);
    const tapCount = taps.length;
    let rawBpm: number | null = null;

    if (tapCount >= config.minTapsToDisplay && intervals.length > 0) {
      const mean = intervals.reduce((a, b) => a + b, 0) / intervals.length;
      rawBpm = mean > 0 ? roundBpm(60000 / mean) : null;
    }

    const bpm = rawBpm == null ? null : applyFactor(rawBpm, factor);
    const confidence =
      rawBpm == null
        ? 'none'
        : confidenceFromStats(tapCount, intervals, config.stableTapCount);
    const status =
      tapCount === 0
        ? 'idle'
        : confidence === 'high'
          ? 'stable'
          : 'measuring';

    return {
      status,
      tapCount,
      rawBpm,
      bpm,
      factor,
      confidence,
      deviationBpm: rawBpm == null ? null : deviationFromMean(intervals),
      inRange:
        bpm == null ? true : bpm >= config.minBpm && bpm <= config.maxBpm,
      source: taps.length > 0 ? 'tap' : source,
    };
  }

  return {
    tap(atMs: number = performance.now()): EngineSnapshot {
      const last = taps[taps.length - 1];
      if (last != null && atMs - last > config.staleGapMs) {
        taps = [];
      }
      hydratedBpm = null;
      source = 'tap';
      taps = [...taps, atMs];
      return snapshot();
    },
    reset(): EngineSnapshot {
      taps = [];
      factor = 1;
      hydratedBpm = null;
      source = 'tap';
      return snapshot();
    },
    setFactor(next: BpmFactor): EngineSnapshot {
      factor = next;
      return snapshot();
    },
    half(): EngineSnapshot {
      factor = factor === 2 ? 1 : 0.5;
      return snapshot();
    },
    double(): EngineSnapshot {
      factor = factor === 0.5 ? 1 : 2;
      return snapshot();
    },
    hydrateBpm(
      bpm: number,
      nextSource: 'share' | 'manual' | 'listen' = 'share',
    ): EngineSnapshot {
      taps = [];
      factor = 1;
      hydratedBpm = roundBpm(bpm);
      source = nextSource;
      return snapshot();
    },
    getSnapshot: snapshot,
  };
}

export type TapEngine = ReturnType<typeof createTapEngine>;
