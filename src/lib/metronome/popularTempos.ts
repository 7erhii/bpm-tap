/** Curated practice tempos — midpoints of popular genre ranges. */
export interface PopularTempo {
  bpm: number;
  genreSlug: string;
  label: { en: string; ru: string };
}

export const popularTempos: PopularTempo[] = [
  { bpm: 80, genreSlug: 'hip-hop', label: { en: 'Hip Hop', ru: 'Hip Hop' } },
  { bpm: 95, genreSlug: 'reggaeton', label: { en: 'Reggaeton', ru: 'Reggaeton' } },
  { bpm: 110, genreSlug: 'pop', label: { en: 'Pop', ru: 'Pop' } },
  { bpm: 120, genreSlug: 'house', label: { en: 'House', ru: 'House' } },
  { bpm: 128, genreSlug: 'techno', label: { en: 'Techno', ru: 'Techno' } },
  { bpm: 140, genreSlug: 'dubstep', label: { en: 'Dubstep', ru: 'Dubstep' } },
  { bpm: 174, genreSlug: 'drum-and-bass', label: { en: 'Drum & Bass', ru: 'DnB' } },
];
