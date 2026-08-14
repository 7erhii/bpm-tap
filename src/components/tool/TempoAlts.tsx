interface Props {
  bpm: number | null;
  feelsOffLabel: string;
  halfLabel: string;
  doubleLabel: string;
  onHalf: () => void;
  onDouble: () => void;
}

/** Half / double chips showing the actual alternate BPMs. */
export function TempoAlts({
  bpm,
  feelsOffLabel,
  halfLabel,
  doubleLabel,
  onHalf,
  onDouble,
}: Props) {
  if (bpm == null) return null;
  const half = Math.round(bpm / 2);
  const double = Math.round(bpm * 2);

  return (
    <div className="alts">
      <span className="alts__hint">{feelsOffLabel}</span>
      <button
        type="button"
        className="chip"
        aria-label={halfLabel}
        onMouseDown={(e) => e.preventDefault()}
        onClick={onHalf}
      >
        {half}
      </button>
      <button
        type="button"
        className="chip"
        aria-label={doubleLabel}
        onMouseDown={(e) => e.preventDefault()}
        onClick={onDouble}
      >
        {double}
      </button>
    </div>
  );
}
