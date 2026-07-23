export type Confidence = 'none' | 'low' | 'medium' | 'high';
export type EngineStatus = 'idle' | 'measuring' | 'stable';
export type ReadingSource = 'tap' | 'share' | 'manual';
export type BpmFactor = 0.5 | 1 | 2;

export interface EngineSnapshot {
  status: EngineStatus;
  tapCount: number;
  rawBpm: number | null;
  bpm: number | null;
  factor: BpmFactor;
  confidence: Confidence;
  deviationBpm: number | null;
  inRange: boolean;
  source: ReadingSource;
}

export interface TapEngineOptions {
  minTapsToDisplay?: number;
  windowSize?: number;
  staleGapMs?: number;
  minBpm?: number;
  maxBpm?: number;
  stableTapCount?: number;
}
