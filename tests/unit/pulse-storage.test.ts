import { beforeEach, describe, expect, it } from 'vitest';
import {
  formatPulseLine,
  loadPulseLog,
  removePulseReading,
  savePulseReading,
} from '@/lib/pulse/storage';

function createMemoryStorage(): Storage {
  const map = new Map<string, string>();
  return {
    get length() {
      return map.size;
    },
    clear: () => map.clear(),
    getItem: (key: string) => map.get(key) ?? null,
    setItem: (key: string, value: string) => {
      map.set(key, String(value));
    },
    removeItem: (key: string) => {
      map.delete(key);
    },
    key: (index: number) => [...map.keys()][index] ?? null,
  };
}

describe('pulse storage', () => {
  beforeEach(() => {
    Object.defineProperty(globalThis, 'localStorage', {
      value: createMemoryStorage(),
      configurable: true,
    });
  });

  it('saves name — bpm lines', () => {
    const list = savePulseReading('Alex', 72.4);
    expect(list).toHaveLength(1);
    expect(list[0].name).toBe('Alex');
    expect(list[0].bpm).toBe(72);
    expect(formatPulseLine(list[0])).toBe('Alex — 72 BPM');
    expect(loadPulseLog()).toHaveLength(1);
  });

  it('ignores blank names', () => {
    expect(savePulseReading('   ', 80)).toHaveLength(0);
  });

  it('removes by id', () => {
    const [first] = savePulseReading('Sam', 90);
    savePulseReading('Pat', 88);
    const next = removePulseReading(first.id);
    expect(next.map((i) => i.name)).toEqual(['Pat']);
  });
});
