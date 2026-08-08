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

/** Compact local stamp for saved readings, e.g. `8 Aug, 20:31`. */
export function formatPulseCapturedAt(iso: string, locale?: string): string {
  const parsed = new Date(iso);
  if (Number.isNaN(parsed.getTime())) return '';
  try {
    return new Intl.DateTimeFormat(locale || undefined, {
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

/** Display line: `Alex — 72 BPM · 8 Aug, 20:31` */
export function formatPulseLine(item: PulseLogItem, unit = 'BPM', locale?: string): string {
  const when = formatPulseCapturedAt(item.capturedAt, locale);
  return when ? `${item.name} — ${item.bpm} ${unit} · ${when}` : `${item.name} — ${item.bpm} ${unit}`;
}
