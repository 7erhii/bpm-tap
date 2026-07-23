import { weekId, type BoardEntry } from './week';

const SCORE_KEY = 'bpm-tap:speed-week';
const HANDLE_KEY = 'bpm-tap:handle';

export interface WeekScore {
  week: string;
  ms: number;
  bpm: number;
  at: string;
}

function safeParseScore(raw: string | null): WeekScore | null {
  if (!raw) return null;
  try {
    const data = JSON.parse(raw) as WeekScore;
    if (!data || typeof data.week !== 'string') return null;
    if (!Number.isFinite(data.ms) || data.ms < 200 || data.ms > 120000) return null;
    if (!Number.isFinite(data.bpm) || data.bpm < 30 || data.bpm > 300) return null;
    return data;
  } catch {
    return null;
  }
}

export function loadHandle(): string {
  if (typeof localStorage === 'undefined') return '';
  try {
    return (localStorage.getItem(HANDLE_KEY) ?? '').trim().slice(0, 18);
  } catch {
    return '';
  }
}

export function saveHandle(handle: string): string {
  const next = handle.trim().slice(0, 18);
  try {
    if (next) localStorage.setItem(HANDLE_KEY, next);
    else localStorage.removeItem(HANDLE_KEY);
  } catch {
    // ignore
  }
  return next;
}

export function loadWeekScore(week = weekId()): WeekScore | null {
  if (typeof localStorage === 'undefined') return null;
  try {
    const score = safeParseScore(localStorage.getItem(SCORE_KEY));
    if (!score || score.week !== week) return null;
    return score;
  } catch {
    return null;
  }
}

/** Keep only a faster (lower ms) score for the current week. */
export function submitWeekScore(ms: number, bpm: number, week = weekId()): WeekScore | null {
  if (!Number.isFinite(ms) || ms < 200 || ms > 120000) return null;
  if (!Number.isFinite(bpm) || bpm < 30 || bpm > 300) return null;
  const roundedMs = Math.round(ms);
  const roundedBpm = Math.round(bpm);
  const prev = loadWeekScore(week);
  if (prev && prev.ms <= roundedMs) return prev;
  const next: WeekScore = {
    week,
    ms: roundedMs,
    bpm: roundedBpm,
    at: new Date().toISOString(),
  };
  try {
    localStorage.setItem(SCORE_KEY, JSON.stringify(next));
  } catch {
    // ignore
  }
  return next;
}

export function youEntry(score: WeekScore | null, handle: string): BoardEntry | null {
  if (!score) return null;
  return {
    id: 'you',
    handle: handle || 'You',
    ms: score.ms,
    bpm: score.bpm,
    you: true,
  };
}
