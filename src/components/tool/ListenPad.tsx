import type { CSSProperties } from 'react';
import { Mic } from './icons';

interface Props {
  listening: boolean;
  title: string;
  hint: string;
  level: number;
  /** Live BPM estimate — rings pulse once per beat when set */
  bpm?: number | null;
  /** Mic spectrum bars for the slim EQ ribbon (replaces second LCD) */
  spectrum?: number[];
  onToggle: () => void;
}

function beatPeriodSec(bpm: number | null | undefined): number {
  if (bpm == null || !Number.isFinite(bpm) || bpm < 40 || bpm > 300) return 1.2;
  return 60 / bpm;
}

/** Round mic button + slim EQ ribbon — primary Listen gesture. */
export function ListenPad({
  listening,
  title,
  hint,
  level,
  bpm,
  spectrum = [],
  onToggle,
}: Props) {
  const style = {
    ['--listen-level']: String(Math.min(1, Math.max(0, level))),
    ['--listen-beat']: `${beatPeriodSec(bpm)}s`,
  } as CSSProperties;

  const bars =
    spectrum.length > 0 ? spectrum : Array.from({ length: 16 }, () => (listening ? 0.12 : 0.08));

  return (
    <div className="listen-round">
      <button
        type="button"
        className={`listen-round__btn${listening ? ' is-live' : ''}${listening && bpm != null ? ' is-tempo' : ''}`}
        aria-label={title}
        aria-pressed={listening}
        onMouseDown={(e) => e.preventDefault()}
        onClick={onToggle}
        style={style}
      >
        <span className="listen-round__ring" aria-hidden="true" />
        <span className="listen-round__ring listen-round__ring--late" aria-hidden="true" />
        <span className="listen-round__core" aria-hidden="true">
          <Mic size={32} />
        </span>
      </button>
      <p className="listen-round__title">{title}</p>
      <p className="listen-round__hint">{hint}</p>
      <div
        className={`eq-ribbon${listening ? ' is-live' : ''}`}
        aria-hidden="true"
      >
        {bars.map((v, i) => (
          <i
            key={i}
            style={{ height: `${Math.round(Math.max(0.08, Math.min(1, v)) * 100)}%` }}
          />
        ))}
      </div>
    </div>
  );
}
