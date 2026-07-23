import { genreCatalog, type GenreCore } from '@/lib/genres/catalog';

export interface GenreMatch {
  genre: GenreCore;
  distance: number;
  inRange: boolean;
}

/** Rank genres by closeness of BPM to each genre's midpoint / range. */
export function closestGenres(bpm: number, limit = 3): GenreMatch[] {
  if (!Number.isFinite(bpm)) return [];

  return genreCatalog
    .map((genre) => {
      const mid = (genre.bpmMin + genre.bpmMax) / 2;
      const inRange = bpm >= genre.bpmMin && bpm <= genre.bpmMax;
      const distance = inRange
        ? Math.abs(bpm - mid) * 0.25
        : bpm < genre.bpmMin
          ? genre.bpmMin - bpm
          : bpm - genre.bpmMax;
      return { genre, distance, inRange };
    })
    .sort((a, b) => a.distance - b.distance || a.genre.order - b.genre.order)
    .slice(0, limit);
}

export function suggestedBpmForGenre(genre: Pick<GenreCore, 'bpmMin' | 'bpmMax'>): number {
  return Math.round((genre.bpmMin + genre.bpmMax) / 2);
}
