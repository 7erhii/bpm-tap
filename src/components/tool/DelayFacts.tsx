interface Props {
  bpm: number | null;
}

/** Compact 1/4 · 1/8 · 1/16 ms row when a BPM is set. */
export function DelayFacts({ bpm }: Props) {
  if (bpm == null || !(bpm > 0)) return null;
  const quarter = 60000 / bpm;
  const rows = [
    { label: '1/4', ms: Math.round(quarter) },
    { label: '1/8', ms: Math.round(quarter * 0.5) },
    { label: '1/16', ms: Math.round(quarter * 0.25) },
  ];

  return (
    <dl className="facts">
      {rows.map((row) => (
        <div key={row.label}>
          <dt>{row.label}</dt>
          <dd>
            {row.ms}
            <i>ms</i>
          </dd>
        </div>
      ))}
    </dl>
  );
}
