import en from './en.json';
import ru from './ru.json';

export type Locale = 'en' | 'ru';
export type Messages = typeof en;

const catalogs: Record<Locale, Messages> = { en, ru };

export function isLocale(value: string): value is Locale {
  return value === 'en' || value === 'ru';
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
