/** ISO week key like 2026-W30 — board resets each Monday (UTC). */
export function weekId(date = new Date()): string {
  const utc = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
  const day = utc.getUTCDay() || 7;
  utc.setUTCDate(utc.getUTCDate() + 4 - day);
  const yearStart = new Date(Date.UTC(utc.getUTCFullYear(), 0, 1));
  const week = Math.ceil(((utc.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
  return `${utc.getUTCFullYear()}-W${String(week).padStart(2, '0')}`;
}

/** Milliseconds until next Monday 00:00 UTC. */
export function msUntilNextWeek(date = new Date()): number {
  const day = date.getUTCDay(); // 0 Sun … 6 Sat
  const daysUntilMonday = day === 0 ? 1 : day === 1 ? 7 : 8 - day;
  const next = new Date(
    Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + daysUntilMonday),
  );
  return Math.max(0, next.getTime() - date.getTime());
}

function hashString(input: string): number {
  let h = 2166136261;
  for (let i = 0; i < input.length; i += 1) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function mulberry32(seed: number): () => number {
  let t = seed;
  return () => {
    t += 0x6d2b79f5;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r ^= r + Math.imul(r ^ (r >>> 7), 61 | r);
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

const HANDLES = [
  'NeonKick',
  '808Ghost',
  'TapeDeck',
  'ClubMouse',
  'SubZero',
  'PolyRhythm',
  'Sidechain',
  'VelvetHat',
  'Gridlock',
  'LoFiPilot',
];

export interface BoardEntry {
  id: string;
  handle: string;
  /** Time to reach a stable (high confidence) reading — lower is better */
  ms: number;
  bpm: number;
  you?: boolean;
}

/** Fun weekly “rivals” — deterministic per week, not real people. */
export function seededRivals(week: string, count = 6): BoardEntry[] {
  const rand = mulberry32(hashString(`bpm-speed:${week}`));
  const used = new Set<number>();
  const out: BoardEntry[] = [];
  while (out.length < count) {
    const idx = Math.floor(rand() * HANDLES.length);
    if (used.has(idx)) continue;
    used.add(idx);
    // ~1.8s … 6.5s to stabilize — beatable but spicy
    const ms = Math.round(1800 + rand() * 4700);
    const bpm = Math.round(88 + rand() * 100);
    out.push({
      id: `bot-${week}-${idx}`,
      handle: HANDLES[idx],
      ms,
      bpm,
    });
  }
  return out.sort((a, b) => a.ms - b.ms);
}
