import type { Confidence } from '@/lib/bpm/types';

interface Props {
  level: Confidence;
  label: string;
  deviationBpm?: number | null;
  /** Show V6 confidence meter bar (music skin). */
  showMeter?: boolean;
}

const METER_PCT: Record<Confidence, number> = {
  none: 0,
  low: 35,
  medium: 65,
  high: 100,
};

export function ConfidenceCue({
  level,
  label,
  deviationBpm = null,
  showMeter = false,
}: Props) {
  const suffix =
    deviationBpm != null && level !== 'none' ? ` · ±${deviationBpm}` : '';
  const pct = METER_PCT[level];

  return (
    <div className={`confidence${showMeter ? ' confidence--meter' : ''}`} data-level={level}>
      {showMeter ? (
        <div
          className="confidence__track"
          role="progressbar"
          aria-label="Reading confidence"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={pct}
        >
          <span className="confidence__fill" style={{ width: `${pct}%` }} />
        </div>
      ) : null}
      <p className="confidence__label">
        {label}
        {suffix}
      </p>
    </div>
  );
}
