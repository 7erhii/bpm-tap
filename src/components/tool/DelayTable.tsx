import { noteDurationsFromBpm } from '@/lib/delay/noteDurations';

interface Props {
  bpm: number | null;
  title: string;
  labels: Record<string, string>;
  emptyLabel: string;
}

export function DelayTable({ bpm, title, labels, emptyLabel }: Props) {
  const rows = bpm == null ? [] : noteDurationsFromBpm(bpm).filter((n) =>
    ['quarter', 'eighth', 'quarter-dotted', 'eighth-dotted', 'quarter-triplet', 'eighth-triplet'].includes(n.id),
  );

  return (
    <section className="panel">
      <h2>{title}</h2>
      {bpm == null ? (
        <p className="muted">{emptyLabel}</p>
      ) : (
        <table className="delay-table">
          <thead>
            <tr>
              <th>Note</th>
              <th>ms</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id}>
                <td>{labels[row.labelKey] ?? row.id}</td>
                <td>{row.ms}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => navigator.clipboard?.writeText(String(row.ms))}
                  >
                    {labels['control.copy'] ?? 'Copy'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
}
