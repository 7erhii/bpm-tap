import en from './en.json';
import ru from './ru.json';
import es from './es.json';
import fr from './fr.json';
import pt from './pt.json';
import zh from './zh.json';

export type Locale = 'en' | 'ru' | 'es' | 'fr' | 'pt' | 'zh';
export type Messages = typeof en;

export const LOCALES: Locale[] = ['en', 'ru', 'es', 'fr', 'pt', 'zh'];
export const DEFAULT_LOCALE: Locale = 'en';

export const LOCALE_LABELS: Record<Locale, string> = {
  en: 'EN',
  ru: 'RU',
  es: 'ES',
  fr: 'FR',
  pt: 'PT',
  zh: '中文',
};

export const LOCALE_NAMES: Record<Locale, string> = {
  en: 'English',
  ru: 'Русский',
  es: 'Español',
  fr: 'Français',
  pt: 'Português',
  zh: '简体中文',
};

export const OG_LOCALE: Record<Locale, string> = {
  en: 'en_US',
  ru: 'ru_RU',
  es: 'es_ES',
  fr: 'fr_FR',
  pt: 'pt_BR',
  zh: 'zh_CN',
};

/** html[lang] / hreflang values (region-specific where it helps crawlers). */
export const HTML_LANG: Record<Locale, string> = {
  en: 'en',
  ru: 'ru',
  es: 'es',
  fr: 'fr',
  pt: 'pt',
  zh: 'zh-CN',
};

const catalogs: Record<Locale, Messages> = { en, ru, es, fr, pt, zh };

export function isLocale(value: string): value is Locale {
  return LOCALES.includes(value as Locale);
}

export function getMessages(locale: Locale): Messages {
  return catalogs[locale] ?? catalogs.en;
}

export function t(locale: Locale, key: keyof Messages, vars?: Record<string, string | number>): string {
  let value: string = getMessages(locale)[key] ?? catalogs.en[key] ?? String(key);
  if (vars) {
    for (const [k, v] of Object.entries(vars)) {
      value = value.replace(`{${k}}`, String(v));
    }
  }
  return value;
}

export function localizedPath(locale: Locale, path = ''): string {
  const clean = path.replace(/^\/+/, '').replace(/\/+$/, '');
  return clean ? `/${locale}/${clean}/` : `/${locale}/`;
}

/** Match browser Accept-Language to the best supported locale. */
export function detectLocaleFromHeader(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) return DEFAULT_LOCALE;

  const parsed = acceptLanguage
    .split(',')
    .map((part) => {
      const [tag, ...params] = part.trim().split(';');
      const qParam = params.find((p) => p.trim().startsWith('q='));
      const q = qParam ? Number.parseFloat(qParam.split('=')[1] ?? '1') : 1;
      return { tag: tag.trim().toLowerCase(), q };
    })
    .sort((a, b) => b.q - a.q);

  for (const { tag } of parsed) {
    const primary = tag.split('-')[0];
    if (isLocale(tag)) return tag;
    if (isLocale(primary)) return primary;
  }

  return DEFAULT_LOCALE;
}

export function localePathRegex(): RegExp {
  return new RegExp(`^/(${LOCALES.join('|')})`);
}
