import type { Confidence } from '@/lib/bpm/types';

export interface TempoCandidate {
  bpm: number;
  score: number;
}

export interface TempoEstimate {
  bpm: number | null;
  confidence: Confidence;
  candidates: TempoCandidate[];
  /** 0–1 smoothed mic level */
  signalLevel: number;
  /** Seconds of audio analyzed in the current window */
  analyzedSec: number;
}

export type ListenStatus =
  | 'idle'
  | 'requesting'
  | 'listening'
  | 'denied'
  | 'unsupported'
  | 'error';

export interface ListenFrame {
  /** 0–1 mic level */
  level: number;
  /** Normalized spectrum bars for UI (low → high), length ~24 */
  spectrum: number[];
}

export interface ListenSessionHandlers {
  onEstimate: (estimate: TempoEstimate) => void;
  onStatus?: (status: ListenStatus, detail?: string) => void;
  /** Fired ~every hop while listening — for spectrum / level UI */
  onFrame?: (frame: ListenFrame) => void;
}
