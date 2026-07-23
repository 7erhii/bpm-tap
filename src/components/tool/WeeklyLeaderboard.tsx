import { useEffect, useMemo, useState } from 'react';
import {
  loadHandle,
  loadWeekScore,
  saveHandle,
  submitWeekScore,
  youEntry,
  type WeekScore,
} from '@/lib/challenge/storage';
import { msUntilNextWeek, seededRivals, weekId, type BoardEntry } from '@/lib/challenge/week';
import './tool.css';

export interface WeeklyLeaderboardLabels {
  title: string;
  blurb: string;
  week: string;
  resets: string;
  you: string;
  handlePlaceholder: string;
  empty: string;
  ms: string;
  funNote: string;
}

interface Props {
  labels: WeeklyLeaderboardLabels;
}

function formatMs(ms: number): string {
  return `${(ms / 1000).toFixed(2)}s`;
}

function mergeBoard(rivals: BoardEntry[], you: BoardEntry | null): BoardEntry[] {
  const rows = you ? [...rivals.filter((r) => !r.you), you] : [...rivals];
  return rows.sort((a, b) => a.ms - b.ms || b.bpm - a.bpm).slice(0, 8);
}

export function WeeklyLeaderboard({ labels }: Props) {
  const week = useMemo(() => weekId(), []);
  const rivals = useMemo(() => seededRivals(week), [week]);
  const [handle, setHandle] = useState('');
  const [score, setScore] = useState<WeekScore | null>(null);
  const [resetIn, setResetIn] = useState(() => msUntilNextWeek());

  useEffect(() => {
    setHandle(loadHandle());
    setScore(loadWeekScore(week));
  }, [week]);

  useEffect(() => {
    const onScore = (event: Event) => {
      const detail = (event as CustomEvent<{ ms: number; bpm: number }>).detail;
      if (!detail) return;
      const next = submitWeekScore(detail.ms, detail.bpm, week);
      if (next) setScore(next);
    };
    window.addEventListener('bpm-tap:speed-score', onScore);
    return () => window.removeEventListener('bpm-tap:speed-score', onScore);
  }, [week]);

  useEffect(() => {
    const id = window.setInterval(() => setResetIn(msUntilNextWeek()), 60_000);
    return () => window.clearInterval(id);
  }, []);

  const board = useMemo(() => {
    const you = youEntry(score, handle || labels.you);
    return mergeBoard(rivals, you);
  }, [rivals, score, handle, labels.you]);

  const resetLabel = useMemo(() => {
    const hours = Math.floor(resetIn / 3_600_000);
    const days = Math.floor(hours / 24);
    if (days >= 1) return labels.resets.replace('{when}', `${days}d`);
    return labels.resets.replace('{when}', `${Math.max(1, hours)}h`);
  }, [resetIn, labels.resets]);

  return (
    <section className="weekly-board panel">
      <div className="weekly-board__head">
        <div>
          <h2>{labels.title}</h2>
          <p className="weekly-board__blurb">{labels.blurb}</p>
        </div>
        <div className="weekly-board__meta">
          <span>{labels.week.replace('{week}', week)}</span>
          <span>{resetLabel}</span>
        </div>
      </div>

      <label className="weekly-board__handle">
        <span className="sr-only">{labels.handlePlaceholder}</span>
        <input
          type="text"
          maxLength={18}
          placeholder={labels.handlePlaceholder}
          value={handle}
          onChange={(event) => {
            const next = event.target.value.slice(0, 18);
            setHandle(next);
            saveHandle(next);
          }}
        />
      </label>

      {board.length === 0 ? (
        <p className="muted">{labels.empty}</p>
      ) : (
        <ol className="weekly-board__list">
          {board.map((row, index) => (
            <li key={row.id} className={row.you ? 'is-you' : undefined}>
              <span className="weekly-board__rank">{index + 1}</span>
              <span className="weekly-board__name">
                {row.handle}
                {row.you && row.handle !== labels.you ? <em> · {labels.you}</em> : null}
              </span>
              <span className="weekly-board__bpm">{row.bpm}</span>
              <span className="weekly-board__time">
                {formatMs(row.ms)}
                <small>{labels.ms}</small>
              </span>
            </li>
          ))}
        </ol>
      )}

      <p className="weekly-board__note muted">{labels.funNote}</p>
    </section>
  );
}

export default WeeklyLeaderboard;
