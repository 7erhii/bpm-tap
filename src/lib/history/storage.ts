export type HistorySource = 'tap' | 'share';

export interface HistoryItem {
  id: string;
  bpm: number;
  capturedAt: string;
  source: HistorySource;
  locale?: 'en' | 'ru';
}

const KEY = 'bpm-tap:history';
const MAX = 10;

function safeParse(raw: string | null): HistoryItem[] {
  if (!raw) return [];
  try {
    const data = JSON.parse(raw) as unknown;
    if (!Array.isArray(data)) return [];
    return data
      .filter((item): item is HistoryItem => {
        return (
          !!item &&
          typeof item === 'object' &&
          typeof (item as HistoryItem).id === 'string' &&
          typeof (item as HistoryItem).bpm === 'number' &&
          typeof (item as HistoryItem).capturedAt === 'string'
        );
      })
      .slice(0, MAX);
  } catch {
    return [];
  }
}

export function loadHistory(): HistoryItem[] {
  if (typeof localStorage === 'undefined') return [];
  try {
    return safeParse(localStorage.getItem(KEY));
  } catch {
    return [];
  }
}

export function saveHistoryItem(item: Omit<HistoryItem, 'id' | 'capturedAt'> & Partial<HistoryItem>): HistoryItem[] {
  const nextItem: HistoryItem = {
    id: item.id ?? `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    bpm: Math.round(item.bpm),
    capturedAt: item.capturedAt ?? new Date().toISOString(),
    source: item.source,
    locale: item.locale,
  };

  const prev = loadHistory();
  const deduped =
    prev[0] && prev[0].bpm === nextItem.bpm && Date.now() - Date.parse(prev[0].capturedAt) < 5000
      ? prev
      : [nextItem, ...prev].slice(0, MAX);

  try {
    localStorage.setItem(KEY, JSON.stringify(deduped));
  } catch {
    // quota / private mode — ignore
  }
  return deduped;
}

export function clearHistory(): void {
  try {
    localStorage.removeItem(KEY);
  } catch {
    // ignore
  }
}
