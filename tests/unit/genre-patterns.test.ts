import { describe, expect, it } from 'vitest';
import { getGenrePatternSet, hits, laneHitList } from '../../src/content/genrePatterns';
import { genreCatalog } from '../../src/lib/genres/catalog';
import { LOCALES } from '../../src/i18n/utils';

describe('hits', () => {
  it('marks 1-based steps on a 16-grid', () => {
    expect(hits(1, 5, 9, 13)).toEqual([
      true,
      false,
      false,
      false,
      true,
      false,
      false,
      false,
      true,
      false,
      false,
      false,
      true,
      false,
      false,
      false,
    ]);
  });
});

describe('getGenrePatternSet', () => {
  it('returns two house EN grids with 16-step lanes', () => {
    const set = getGenrePatternSet('house', 'en');
    expect(set?.patterns).toHaveLength(2);
    for (const pattern of set?.patterns ?? []) {
      expect(pattern.lanes.length).toBeGreaterThan(0);
      for (const lane of pattern.lanes) {
        expect(lane.steps).toHaveLength(16);
      }
    }
  });

  it('localizes house without leaking English-only copy', () => {
    const ru = getGenrePatternSet('house', 'ru');
    expect(ru).not.toBeNull();
    expect(ru?.heading).toBe('House BPM');
    expect(ru?.title).toMatch(/ритм/i);
    expect(ru?.title.toLowerCase()).not.toBe(getGenrePatternSet('house', 'en')?.title.toLowerCase());
  });

  it('keeps House BPM as the page heading and rhythm as the pattern title', () => {
    const set = getGenrePatternSet('house', 'en');
    expect(set?.heading).toBe('House BPM');
    expect(set?.pageTitle?.toLowerCase()).toContain('bpm');
    expect(set?.title.toLowerCase()).toContain('rhythm');
    expect(set?.title.toLowerCase()).toContain('drum pattern');
    expect(set?.searchFaqs?.some((item) => /rhythm|drum pattern/i.test(item.q))).toBe(true);
  });

  it('keeps the four-on-the-floor kick on every beat', () => {
    const floor = getGenrePatternSet('house', 'en')?.patterns[0];
    const kick = floor?.lanes.find((lane) => lane.id === 'kick');
    expect(kick ? laneHitList(kick) : []).toEqual([1, 5, 9, 13]);
  });

  it('covers every catalog genre in every locale with two 16-step patterns', () => {
    for (const genre of genreCatalog) {
      for (const locale of LOCALES) {
        const set = getGenrePatternSet(genre.slug, locale);
        expect(set, `${genre.slug}/${locale}`).not.toBeNull();
        expect(set?.patterns, `${genre.slug}/${locale}`).toHaveLength(2);
        expect(set?.heading).toBe(`${genre.name[locale]} BPM`);
        expect(JSON.stringify(set).toLowerCase()).not.toMatch(/tap[\s-]?tempo/);
        for (const pattern of set?.patterns ?? []) {
          expect(pattern.lanes.map((lane) => lane.id).sort()).toEqual(['ch', 'clap', 'kick', 'oh']);
          for (const lane of pattern.lanes) {
            expect(lane.steps).toHaveLength(16);
          }
        }
      }
    }
  });
});

describe('pattern preview voices', () => {
  it('chokes closed hat when open hat hits the same step', async () => {
    const { voicesAtStep, sixteenthSeconds } = await import('../../src/lib/genres/patternPreview');
    const lanes = [
      { id: 'kick', steps: hits(1) },
      { id: 'ch', steps: hits(1) },
      { id: 'oh', steps: hits(1) },
    ];
    expect(voicesAtStep(lanes, 0).sort()).toEqual(['kick', 'oh']);
    expect(sixteenthSeconds(120)).toBeCloseTo(0.125);
  });
});
