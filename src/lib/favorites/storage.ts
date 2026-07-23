import { METERS, type TimeSignatureId } from '@/lib/metronome/scheduler';

export interface FavoritePreset {
  bpm: number;
  meter: TimeSignatureId;
}

const KEY = 'bpm-tap:favorites';
const MAX = 5;

const VALID_METERS = new Set<string>(METERS.map((m) => m.id));

function isMeter(value: unknown): value is TimeSignatureId {
  return typeof value === 'string' && VALID_METERS.has(value);
}

function normalizePreset(item: unknown): FavoritePreset | null {
  if (typeof item === 'number') {
    const bpm = Math.round(item);
    if (!Number.isFinite(bpm) || bpm < 30 || bpm > 300) return null;
    return { bpm, meter: '4/4' };
  }
  if (!item || typeof item !== 'object') return null;
  const bpm = Math.round(Number((item as FavoritePreset).bpm));
  const meter = (item as FavoritePreset).meter;
  if (!Number.isFinite(bpm) || bpm < 30 || bpm > 300) return null;
  return { bpm, meter: isMeter(meter) ? meter : '4/4' };
}

function samePreset(a: FavoritePreset, b: FavoritePreset): boolean {
  return a.bpm === b.bpm && a.meter === b.meter;
}

function safeParse(raw: string | null): FavoritePreset[] {
  if (!raw) return [];
  try {
    const data = JSON.parse(raw) as unknown;
    if (!Array.isArray(data)) return [];
    const out: FavoritePreset[] = [];
    for (const item of data) {
      const preset = normalizePreset(item);
      if (!preset) continue;
      if (out.some((p) => samePreset(p, preset))) continue;
      out.push(preset);
      if (out.length >= MAX) break;
    }
    return out;
  } catch {
    return [];
  }
}

function persist(next: FavoritePreset[]): FavoritePreset[] {
  try {
    localStorage.setItem(KEY, JSON.stringify(next));
  } catch {
    // ignore
  }
  return next;
}

export function loadFavorites(): FavoritePreset[] {
  if (typeof localStorage === 'undefined') return [];
  try {
    return safeParse(localStorage.getItem(KEY));
  } catch {
    return [];
  }
}

export function addFavorite(bpm: number, meter: TimeSignatureId): FavoritePreset[] {
  const preset: FavoritePreset = { bpm: Math.round(bpm), meter };
  const prev = loadFavorites().filter((p) => !samePreset(p, preset));
  return persist([preset, ...prev].slice(0, MAX));
}

export function removeFavorite(bpm: number, meter: TimeSignatureId): FavoritePreset[] {
  const preset: FavoritePreset = { bpm: Math.round(bpm), meter };
  return persist(loadFavorites().filter((p) => !samePreset(p, preset)));
}

export function isFavorite(bpm: number, meter: TimeSignatureId): boolean {
  const preset = { bpm: Math.round(bpm), meter };
  return loadFavorites().some((p) => samePreset(p, preset));
}

export function toggleFavorite(bpm: number, meter: TimeSignatureId): FavoritePreset[] {
  return isFavorite(bpm, meter)
    ? removeFavorite(bpm, meter)
    : addFavorite(bpm, meter);
}

/** Replace a saved preset in place; merges if the new value already exists. */
export function updateFavorite(
  from: FavoritePreset,
  to: FavoritePreset,
): FavoritePreset[] {
  const nextPreset: FavoritePreset = {
    bpm: Math.round(to.bpm),
    meter: isMeter(to.meter) ? to.meter : '4/4',
  };
  if (!Number.isFinite(nextPreset.bpm) || nextPreset.bpm < 30 || nextPreset.bpm > 300) {
    return loadFavorites();
  }

  const prev = loadFavorites();
  const fromIdx = prev.findIndex((p) => samePreset(p, from));
  if (fromIdx < 0) return prev;

  if (samePreset(from, nextPreset)) return prev;

  const withoutFrom = prev.filter((_, i) => i !== fromIdx);
  const deduped = withoutFrom.filter((p) => !samePreset(p, nextPreset));
  const insertAt = Math.min(fromIdx, deduped.length);
  const next = [...deduped];
  next.splice(insertAt, 0, nextPreset);
  return persist(next.slice(0, MAX));
}
