const MIN = 30;
const MAX = 300;

export function clampBpm(value: number): number | null {
  if (!Number.isFinite(value)) return null;
  const rounded = Math.round(value);
  if (rounded < MIN || rounded > MAX) return null;
  return rounded;
}

export function parseBpmParam(raw: string | null | undefined): number | null {
  if (raw == null || raw.trim() === '') return null;
  return clampBpm(Number(raw));
}

export function buildShareUrl(pathname: string, bpm: number, origin?: string): string {
  const clamped = clampBpm(bpm);
  const base = origin ?? (typeof window !== 'undefined' ? window.location.origin : '');
  const url = new URL(pathname, base || 'https://bpm-tap.com');
  if (clamped != null) url.searchParams.set('bpm', String(clamped));
  return url.pathname + url.search;
}

export function displayBpmInteger(bpm: number): string {
  return String(Math.round(bpm));
}
