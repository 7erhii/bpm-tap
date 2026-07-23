import { useEffect, useState } from 'react';
import {
  formatPulseLine,
  loadPulseLog,
  removePulseReading,
  savePulseReading,
  type PulseLogItem,
} from '@/lib/pulse/storage';
import './pulse-save.css';

export interface PulseSaveLabels {
  title: string;
  namePlaceholder: string;
  save: string;
  saved: string;
  empty: string;
  remove: string;
  needBpm: string;
  unit: string;
}

interface Props {
  bpm: number | null;
  canSave: boolean;
  labels: PulseSaveLabels;
}

export function PulseSaveLog({ bpm, canSave, labels }: Props) {
  const [name, setName] = useState('');
  const [items, setItems] = useState<PulseLogItem[]>([]);
  const [justSaved, setJustSaved] = useState(false);

  useEffect(() => {
    setItems(loadPulseLog());
  }, []);

  const onSave = () => {
    if (!canSave || bpm == null || !name.trim()) return;
    setItems(savePulseReading(name, bpm));
    setJustSaved(true);
    window.setTimeout(() => setJustSaved(false), 1200);
  };

  return (
    <section className="pulse-save" aria-label={labels.title}>
      <h2 className="pulse-save__title">{labels.title}</h2>
      <div className="pulse-save__form">
        <label className="pulse-save__field">
          <span className="sr-only">{labels.namePlaceholder}</span>
          <input
            type="text"
            name="pulse-name"
            maxLength={40}
            autoComplete="name"
            placeholder={labels.namePlaceholder}
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                onSave();
              }
            }}
          />
        </label>
        <button
          type="button"
          className="btn btn--accent"
          disabled={!canSave || !name.trim()}
          onClick={onSave}
          title={!canSave ? labels.needBpm : undefined}
        >
          {justSaved ? labels.saved : labels.save}
        </button>
      </div>

      {items.length === 0 ? (
        <p className="pulse-save__empty">{labels.empty}</p>
      ) : (
        <ul className="pulse-save__list">
          {items.map((item) => (
            <li key={item.id}>
              <span>{formatPulseLine(item, labels.unit)}</span>
              <button
                type="button"
                className="pulse-save__remove"
                onClick={() => setItems(removePulseReading(item.id))}
                aria-label={`${labels.remove}: ${item.name}`}
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
