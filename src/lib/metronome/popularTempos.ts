/** Curated practice tempos — midpoints of popular genre ranges. */
export interface PopularTempo {
  bpm: number;
  genreSlug: string;
  label: { en: string; ru: string; zh: string };
}

export const popularTempos: PopularTempo[] = [
  { bpm: 80, genreSlug: 'hip-hop', label: { en: 'Hip Hop', ru: 'Hip Hop', zh: '嘻哈' } },
  { bpm: 95, genreSlug: 'reggaeton', label: { en: 'Reggaeton', ru: 'Reggaeton', zh: '雷鬼顿' } },
  { bpm: 110, genreSlug: 'pop', label: { en: 'Pop', ru: 'Pop', zh: '流行' } },
  { bpm: 120, genreSlug: 'house', label: { en: 'House', ru: 'House', zh: 'House' } },
  { bpm: 128, genreSlug: 'techno', label: { en: 'Techno', ru: 'Techno', zh: 'Techno' } },
  { bpm: 140, genreSlug: 'dubstep', label: { en: 'Dubstep', ru: 'Dubstep', zh: 'Dubstep' } },
  { bpm: 174, genreSlug: 'drum-and-bass', label: { en: 'Drum & Bass', ru: 'DnB', zh: 'Drum & Bass' } },
];
