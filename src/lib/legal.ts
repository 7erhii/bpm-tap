import { HTML_LANG, localizedPath, type Locale } from '@/i18n/utils';
import type { ContactSource } from '@/lib/contact/types';

export type { ContactSource };

export const LEGAL_UPDATED_ISO = '2026-09-17';

export function formatLegalDate(locale: Locale, iso = LEGAL_UPDATED_ISO): string {
  const [year, month, day] = iso.split('-').map(Number);
  return new Intl.DateTimeFormat(HTML_LANG[locale], {
    dateStyle: 'long',
    timeZone: 'UTC',
  }).format(new Date(Date.UTC(year, month - 1, day)));
}

export function isPulseLegalRequest(url: URL): boolean {
  return url.searchParams.get('from') === 'pulse';
}

export function contactSourceFromUrl(url: URL): ContactSource {
  return isPulseLegalRequest(url) ? 'pulse' : 'bpm-tap';
}

export function legalHref(locale: Locale, slug: 'privacy' | 'terms' | 'contact', fromPulse = false): string {
  const path = localizedPath(locale, slug);
  return fromPulse ? `${path}?from=pulse` : path;
}
