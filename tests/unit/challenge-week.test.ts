import { beforeEach, describe, expect, it } from 'vitest';
import { loadWeekScore, submitWeekScore } from '../../src/lib/challenge/storage';
import { seededRivals, weekId } from '../../src/lib/challenge/week';

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

describe('weekId', () => {
  it('formats ISO-like week keys', () => {
    expect(weekId(new Date('2026-07-22T12:00:00Z'))).toMatch(/^\d{4}-W\d{2}$/);
  });
});

describe('seededRivals', () => {
  it('is stable for the same week', () => {
    expect(seededRivals('2026-W30')).toEqual(seededRivals('2026-W30'));
  });

  it('changes across weeks', () => {
    expect(seededRivals('2026-W30')[0]?.handle).not.toEqual(
      seededRivals('2026-W31')[0]?.handle,
    );
  });
});

describe('submitWeekScore', () => {
  beforeEach(() => {
    Object.defineProperty(globalThis, 'localStorage', {
      value: createMemoryStorage(),
      configurable: true,
    });
  });

  it('keeps only a faster score', () => {
    submitWeekScore(4000, 120, '2026-W30');
    submitWeekScore(5000, 130, '2026-W30');
    expect(loadWeekScore('2026-W30')?.ms).toBe(4000);
    submitWeekScore(2500, 118, '2026-W30');
    expect(loadWeekScore('2026-W30')).toMatchObject({ ms: 2500, bpm: 118 });
  });
});
