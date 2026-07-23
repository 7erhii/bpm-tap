import type { HistoryItem } from '@/lib/history/storage';

interface Props {
  title: string;
  emptyLabel: string;
  items: HistoryItem[];
}

export function HistoryList({ title, emptyLabel, items }: Props) {
  return (
    <section className="panel">
      <h2>{title}</h2>
      {items.length === 0 ? (
        <p className="muted">{emptyLabel}</p>
      ) : (
        <ul className="history-list">
          {items.map((item) => (
            <li key={item.id}>
              <strong>{item.bpm}</strong>
              <span>{new Date(item.capturedAt).toLocaleTimeString()}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
