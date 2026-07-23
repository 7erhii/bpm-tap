import { beforeEach, describe, expect, it } from 'vitest';
import {
  addFavorite,
  loadFavorites,
  toggleFavorite,
  updateFavorite,
} from '../../src/lib/favorites/storage';

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

describe('favorites storage', () => {
  beforeEach(() => {
    Object.defineProperty(globalThis, 'localStorage', {
      value: createMemoryStorage(),
      configurable: true,
    });
  });

  it('saves bpm with meter', () => {
    addFavorite(128, '3/4');
    expect(loadFavorites()).toEqual([{ bpm: 128, meter: '3/4' }]);
  });

  it('treats same bpm different meter as separate favorites', () => {
    addFavorite(128, '4/4');
    addFavorite(128, '3/4');
    expect(loadFavorites()).toHaveLength(2);
  });

  it('migrates legacy number favorites to 4/4', () => {
    localStorage.setItem('bpm-tap:favorites', JSON.stringify([120, 90]));
    expect(loadFavorites()).toEqual([
      { bpm: 120, meter: '4/4' },
      { bpm: 90, meter: '4/4' },
    ]);
  });

  it('toggles preset off', () => {
    addFavorite(100, '6/8');
    toggleFavorite(100, '6/8');
    expect(loadFavorites()).toEqual([]);
  });

  it('updates a preset in place', () => {
    addFavorite(120, '4/4');
    addFavorite(90, '3/4');
    // newest-first: [90, 120]
    updateFavorite({ bpm: 120, meter: '4/4' }, { bpm: 128, meter: '6/8' });
    expect(loadFavorites()).toEqual([
      { bpm: 90, meter: '3/4' },
      { bpm: 128, meter: '6/8' },
    ]);
  });

  it('dedupes when update collides with an existing preset', () => {
    addFavorite(120, '4/4');
    addFavorite(90, '3/4');
    updateFavorite({ bpm: 90, meter: '3/4' }, { bpm: 120, meter: '4/4' });
    expect(loadFavorites()).toEqual([{ bpm: 120, meter: '4/4' }]);
  });
});
