import { genreCatalog } from '@/lib/genres/catalog';
import { t, type Locale } from '@/i18n/utils';
import { en } from './copy/en';
import { es } from './copy/es';
import { fr } from './copy/fr';
import { pt } from './copy/pt';
import { ru } from './copy/ru';
import { zh } from './copy/zh';
import { GRIDS } from './grids';
import type { GenrePatternCopyMap, GenrePatternSet, LocaleLaneCopy, PatternLaneId } from './types';

export { hits } from './hits';
export type {
  GenreDrumPattern,
  GenrePatternFaq,
  GenrePatternSet,
  PatternLane,
} from './types';

const COPY: Record<Locale, GenrePatternCopyMap> = { en, ru, es, fr, pt, zh };

const LANES: LocaleLaneCopy = {
  en: {
    kick: { label: 'Kick', name: 'Kick' },
    clap: { label: 'Clap', name: 'Clap' },
    ch: { label: 'CH', name: 'Closed hat' },
    oh: { label: 'OH', name: 'Open hat' },
  },
  ru: {
    kick: { label: 'Kick', name: 'Кик' },
    clap: { label: 'Clap', name: 'Хлопок' },
    ch: { label: 'CH', name: 'Закрытый хэт' },
    oh: { label: 'OH', name: 'Открытый хэт' },
  },
  es: {
    kick: { label: 'Kick', name: 'Kick' },
    clap: { label: 'Clap', name: 'Clap' },
    ch: { label: 'CH', name: 'Hat cerrado' },
    oh: { label: 'OH', name: 'Hat abierto' },
  },
  fr: {
    kick: { label: 'Kick', name: 'Kick' },
    clap: { label: 'Clap', name: 'Clap' },
    ch: { label: 'CH', name: 'Hat fermé' },
    oh: { label: 'OH', name: 'Hat ouvert' },
  },
  pt: {
    kick: { label: 'Kick', name: 'Kick' },
    clap: { label: 'Clap', name: 'Clap' },
    ch: { label: 'CH', name: 'Hat fechado' },
    oh: { label: 'OH', name: 'Hat aberto' },
  },
  zh: {
    kick: { label: 'Kick', name: '底鼓' },
    clap: { label: 'Clap', name: '拍手' },
    ch: { label: 'CH', name: '闭镲' },
    oh: { label: 'OH', name: '开镲' },
  },
};

export function getGenrePatternSet(slug: string, locale: Locale): GenrePatternSet | null {
  const grid = GRIDS[slug];
  const copy = COPY[locale]?.[slug];
  const genre = genreCatalog.find((item) => item.slug === slug);
  if (!grid || !copy || !genre) return null;

  const name = genre.name[locale];
  const lanes = LANES[locale];

  return {
    title: copy.title,
    lead: copy.lead,
    disclaimer: copy.disclaimer,
    meter: t(locale, 'genres.patternMeter'),
    resolution: t(locale, 'genres.patternResolution'),
    pageTitle: t(locale, 'genres.patternPageTitle', { name, min: genre.bpmMin, max: genre.bpmMax }),
    pageDescription: t(locale, 'genres.patternPageDescription', { name, min: genre.bpmMin, max: genre.bpmMax }),
    heading: t(locale, 'genres.heading', { name }),
    searchFaqs: copy.faqs,
    patterns: grid.patterns.map((pattern, index) => {
      const text = copy.patterns[index];
      if (!text) {
        throw new Error(`Missing pattern copy for ${slug}/${locale}[${index}]`);
      }
      return {
        id: pattern.id,
        name: text.name,
        summary: text.summary,
        lanes: pattern.lanes.map((lane) => ({
          id: lane.id,
          steps: lane.steps,
          ...(lanes[lane.id as PatternLaneId] ?? { label: lane.id, name: lane.id }),
        })),
      };
    }),
  };
}

export function resolveGenrePatternSeo(
  slug: string,
  locale: Locale,
  fallback: { title: string; description: string; heading: string },
): { title: string; description: string; heading: string; hasPattern: boolean; patternTitle?: string } {
  const set = getGenrePatternSet(slug, locale);
  return {
    title: set?.pageTitle ?? fallback.title,
    description: set?.pageDescription ?? fallback.description,
    heading: set?.heading ?? fallback.heading,
    hasPattern: Boolean(set),
    patternTitle: set?.title,
  };
}

export function laneHitList(lane: { steps: boolean[] }): number[] {
  return lane.steps.flatMap((on, index) => (on ? [index + 1] : []));
}
