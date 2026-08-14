import { useEffect, useState } from 'react';
import {
  clearPulseLog,
  formatPulseCapturedAt,
  loadPulseLog,
  removePulseReading,
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
  clearAll: string;
  privacyNote: string;
}

interface Props {
  labels: PulseSaveLabels;
  /** Bump after an external save (quick bar) so the list reloads. */
  logRevision?: number;
  /** BCP-47 locale for date/time formatting (defaults to browser). */
  locale?: string;
}

export function PulseSaveLog({ labels, logRevision = 0, locale }: Props) {
  const [items, setItems] = useState<PulseLogItem[]>([]);

  useEffect(() => {
    setItems(loadPulseLog());
  }, [logRevision]);

  const onClearAll = () => {
    if (items.length === 0) return;
    setItems(clearPulseLog());
  };

  return (
    <section className="pulse-save" aria-labelledby="pulse-saved-h">
      <div className="pulse-save__head">
        <h2 id="pulse-saved-h" className="pulse-save__title">
          {labels.title}
        </h2>
        {items.length > 0 ? (
          <button type="button" className="pulse-save__clear" onClick={onClearAll}>
            {labels.clearAll}
          </button>
        ) : null}
      </div>

      {items.length === 0 ? (
        <p className="pulse-save__empty">{labels.empty}</p>
      ) : (
        <ul className="pulse-save__list">
          {items.map((item) => {
            const when = formatPulseCapturedAt(item.capturedAt, locale);
            return (
              <li key={item.id}>
                <b>{item.name}</b>
                <span className="pulse-save__bpm">
                  {item.bpm}
                  <span className="pulse-save__unit"> {labels.unit}</span>
                </span>
                {when ? <time dateTime={item.capturedAt}>{when}</time> : null}
                <button
                  type="button"
                  className="pulse-save__remove"
                  onClick={() => setItems(removePulseReading(item.id))}
                  aria-label={`${labels.remove}: ${item.name}`}
                >
                  {labels.remove}
                </button>
              </li>
            );
          })}
        </ul>
      )}

      <p className="pulse-save__note">{labels.privacyNote}</p>
    </section>
  );
}
