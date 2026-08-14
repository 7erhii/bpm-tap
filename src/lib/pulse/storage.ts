export interface PulseLogItem {
  id: string;
  name: string;
  bpm: number;
  capturedAt: string;
}

const KEY = 'bpm-tap:pulse-log';
const MAX = 20;
const NAME_MAX = 40;

function clampName(raw: string): string {
  return raw.trim().slice(0, NAME_MAX);
}

function safeParse(raw: string | null): PulseLogItem[] {
  if (!raw) return [];
  try {
    const data = JSON.parse(raw) as unknown;
    if (!Array.isArray(data)) return [];
    return data
      .filter((item): item is PulseLogItem => {
        return (
          !!item &&
          typeof item === 'object' &&
          typeof (item as PulseLogItem).id === 'string' &&
          typeof (item as PulseLogItem).name === 'string' &&
          typeof (item as PulseLogItem).bpm === 'number' &&
          typeof (item as PulseLogItem).capturedAt === 'string'
        );
      })
      .slice(0, MAX);
  } catch {
    return [];
  }
}

/** Compact local stamp, e.g. `today 09:14` / `yesterday 20:02` / `8 Aug, 20:31`. */
export function formatPulseCapturedAt(iso: string, locale?: string): string {
  const parsed = new Date(iso);
  if (Number.isNaN(parsed.getTime())) return '';

  const loc = locale || undefined;
  try {
    const time = new Intl.DateTimeFormat(loc, {
      hour: '2-digit',
      minute: '2-digit',
    }).format(parsed);

    const now = new Date();
    const startToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const startThat = new Date(parsed.getFullYear(), parsed.getMonth(), parsed.getDate());
    const dayDiff = Math.round((startToday.getTime() - startThat.getTime()) / 86_400_000);

    if (dayDiff === 0 || dayDiff === 1) {
      const relative = new Intl.RelativeTimeFormat(loc, { numeric: 'auto' }).format(
        -dayDiff,
        'day',
      );
      return `${relative} ${time}`;
    }

    return new Intl.DateTimeFormat(loc, {
      day: 'numeric',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit',
    }).format(parsed);
  } catch {
    return parsed.toLocaleString();
  }
}

export function loadPulseLog(): PulseLogItem[] {
  if (typeof localStorage === 'undefined') return [];
  try {
    return safeParse(localStorage.getItem(KEY));
  } catch {
    return [];
  }
}

export function savePulseReading(name: string, bpm: number): PulseLogItem[] {
  const cleanName = clampName(name);
  const rounded = Math.round(bpm);
  if (!cleanName || !Number.isFinite(rounded)) return loadPulseLog();

  const nextItem: PulseLogItem = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    name: cleanName,
    bpm: rounded,
    capturedAt: new Date().toISOString(),
  };

  const next = [nextItem, ...loadPulseLog()].slice(0, MAX);
  try {
    localStorage.setItem(KEY, JSON.stringify(next));
  } catch {
    // quota / private mode
  }
  return next;
}

export function removePulseReading(id: string): PulseLogItem[] {
  const next = loadPulseLog().filter((item) => item.id !== id);
  try {
    localStorage.setItem(KEY, JSON.stringify(next));
  } catch {
    // ignore
  }
  return next;
}

export function clearPulseLog(): PulseLogItem[] {
  try {
    localStorage.removeItem(KEY);
  } catch {
    // ignore
  }
  return [];
}

/** Display line: `Alex — 72 BPM · 8 Aug, 20:31` */
export function formatPulseLine(item: PulseLogItem, unit = 'BPM', locale?: string): string {
  const when = formatPulseCapturedAt(item.capturedAt, locale);
  return when ? `${item.name} — ${item.bpm} ${unit} · ${when}` : `${item.name} — ${item.bpm} ${unit}`;
}
