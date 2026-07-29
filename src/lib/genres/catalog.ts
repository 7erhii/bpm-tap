/** Slim genre rows for the client tap tool — names + BPM only, no summaries. */
export interface GenreCore {
  slug: string;
  bpmMin: number;
  bpmMax: number;
  order: number;
  name: { en: string; ru: string; es: string; fr: string; pt: string };
}

export const genreCatalog: GenreCore[] = [
  { slug: 'house', bpmMin: 120, bpmMax: 130, order: 1, name: { en: 'House', ru: 'House', es: 'House', fr: 'House', pt: 'House' } },
  { slug: 'techno', bpmMin: 125, bpmMax: 140, order: 2, name: { en: 'Techno', ru: 'Techno', es: 'Techno', fr: 'Techno', pt: 'Techno' } },
  { slug: 'trance', bpmMin: 130, bpmMax: 145, order: 3, name: { en: 'Trance', ru: 'Trance', es: 'Trance', fr: 'Trance', pt: 'Trance' } },
  {
    slug: 'drum-and-bass',
    bpmMin: 160,
    bpmMax: 180,
    order: 4,
    name: { en: 'Drum & Bass', ru: 'Drum & Bass', es: 'Drum & Bass', fr: 'Drum & Bass', pt: 'Drum & Bass' },
  },
  { slug: 'dubstep', bpmMin: 135, bpmMax: 145, order: 5, name: { en: 'Dubstep', ru: 'Dubstep', es: 'Dubstep', fr: 'Dubstep', pt: 'Dubstep' } },
  { slug: 'trap', bpmMin: 130, bpmMax: 160, order: 6, name: { en: 'Trap', ru: 'Trap', es: 'Trap', fr: 'Trap', pt: 'Trap' } },
  { slug: 'hip-hop', bpmMin: 80, bpmMax: 100, order: 7, name: { en: 'Hip Hop', ru: 'Hip Hop', es: 'Hip Hop', fr: 'Hip Hop', pt: 'Hip Hop' } },
  { slug: 'pop', bpmMin: 90, bpmMax: 120, order: 8, name: { en: 'Pop', ru: 'Pop', es: 'Pop', fr: 'Pop', pt: 'Pop' } },
  { slug: 'rock', bpmMin: 100, bpmMax: 140, order: 9, name: { en: 'Rock', ru: 'Rock', es: 'Rock', fr: 'Rock', pt: 'Rock' } },
  { slug: 'metal', bpmMin: 120, bpmMax: 180, order: 10, name: { en: 'Metal', ru: 'Metal', es: 'Metal', fr: 'Metal', pt: 'Metal' } },
  { slug: 'lo-fi', bpmMin: 70, bpmMax: 90, order: 11, name: { en: 'Lo-fi', ru: 'Lo-fi', es: 'Lo-fi', fr: 'Lo-fi', pt: 'Lo-fi' } },
  { slug: 'ambient', bpmMin: 60, bpmMax: 90, order: 12, name: { en: 'Ambient', ru: 'Ambient', es: 'Ambient', fr: 'Ambient', pt: 'Ambient' } },
  {
    slug: 'reggaeton',
    bpmMin: 90,
    bpmMax: 100,
    order: 13,
    name: { en: 'Reggaeton', ru: 'Reggaeton', es: 'Reggaeton', fr: 'Reggaeton', pt: 'Reggaeton' },
  },
  { slug: 'afrobeat', bpmMin: 100, bpmMax: 130, order: 14, name: { en: 'Afrobeat', ru: 'Afrobeat', es: 'Afrobeat', fr: 'Afrobeat', pt: 'Afrobeat' } },
  {
    slug: 'jersey-club',
    bpmMin: 130,
    bpmMax: 140,
    order: 15,
    name: { en: 'Jersey Club', ru: 'Jersey Club', es: 'Jersey Club', fr: 'Jersey Club', pt: 'Jersey Club' },
  },
  { slug: 'phonk', bpmMin: 130, bpmMax: 160, order: 16, name: { en: 'Phonk', ru: 'Phonk', es: 'Phonk', fr: 'Phonk', pt: 'Phonk' } },
  {
    slug: 'hardstyle',
    bpmMin: 150,
    bpmMax: 160,
    order: 17,
    name: { en: 'Hardstyle', ru: 'Hardstyle', es: 'Hardstyle', fr: 'Hardstyle', pt: 'Hardstyle' },
  },
  { slug: 'jazz', bpmMin: 80, bpmMax: 160, order: 18, name: { en: 'Jazz', ru: 'Jazz', es: 'Jazz', fr: 'Jazz', pt: 'Jazz' } },
  { slug: 'salsa', bpmMin: 180, bpmMax: 220, order: 19, name: { en: 'Salsa', ru: 'Salsa', es: 'Salsa', fr: 'Salsa', pt: 'Salsa' } },
  { slug: 'bachata', bpmMin: 120, bpmMax: 140, order: 20, name: { en: 'Bachata', ru: 'Bachata', es: 'Bachata', fr: 'Bachata', pt: 'Bachata' } },
  { slug: 'gospel', bpmMin: 60, bpmMax: 100, order: 21, name: { en: 'Gospel', ru: 'Gospel', es: 'Gospel', fr: 'Gospel', pt: 'Gospel' } },
  { slug: 'country', bpmMin: 80, bpmMax: 120, order: 22, name: { en: 'Country', ru: 'Country', es: 'Country', fr: 'Country', pt: 'Country' } },
];
