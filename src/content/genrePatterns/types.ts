import type { Locale } from '@/i18n/utils';

export const PATTERN_STEPS = 16;

export type PatternLaneId = 'kick' | 'clap' | 'ch' | 'oh';

export interface PatternLaneGrid {
  id: PatternLaneId;
  steps: boolean[];
}

export interface PatternGrid {
  id: string;
  lanes: PatternLaneGrid[];
}

export interface GenrePatternGrids {
  patterns: [PatternGrid, PatternGrid];
}

export interface PatternLane {
  id: string;
  label: string;
  name: string;
  steps: boolean[];
}

export interface GenreDrumPattern {
  id: string;
  name: string;
  summary: string;
  lanes: PatternLane[];
}

export interface GenrePatternFaq {
  q: string;
  a: string;
}

export interface GenrePatternSet {
  title: string;
  lead: string;
  disclaimer: string;
  meter: string;
  resolution: string;
  patterns: GenreDrumPattern[];
  pageTitle?: string;
  pageDescription?: string;
  heading?: string;
  searchFaqs?: GenrePatternFaq[];
}

export interface PatternCopyPair {
  name: string;
  summary: string;
}

export interface GenrePatternCopy {
  title: string;
  lead: string;
  disclaimer: string;
  faqs: [GenrePatternFaq, GenrePatternFaq];
  patterns: [PatternCopyPair, PatternCopyPair];
}

export type GenrePatternCopyMap = Record<string, GenrePatternCopy>;
export type GenrePatternGridMap = Record<string, GenrePatternGrids>;
export type LaneCopyMap = Record<PatternLaneId, { label: string; name: string }>;
export type LocaleLaneCopy = Record<Locale, LaneCopyMap>;
