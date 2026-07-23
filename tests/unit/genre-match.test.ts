import { describe, expect, it } from 'vitest';
import { closestGenres, suggestedBpmForGenre } from '../../src/lib/genres/match';
import { genres } from '../../src/content/genres';

describe('closestGenres', () => {
  it('prefers in-range genres for house tempo', () => {
    const matches = closestGenres(124, 3);
    expect(matches[0]?.inRange).toBe(true);
    expect(['house', 'techno', 'trance']).toContain(matches[0]?.genre.slug);
  });

  it('returns suggestions outside exact ranges', () => {
    const matches = closestGenres(55, 2);
    expect(matches.length).toBeGreaterThan(0);
    expect(matches[0]?.genre.slug).toBe('ambient');
  });
});

describe('suggestedBpmForGenre', () => {
  it('returns midpoint', () => {
    const house = genres.find((g) => g.slug === 'house')!;
    expect(suggestedBpmForGenre(house)).toBe(125);
  });
});
