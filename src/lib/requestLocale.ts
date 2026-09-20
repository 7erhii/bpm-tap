const LOCALES = ['en', 'ru', 'es', 'fr', 'pt', 'zh'] as const;
export type RequestLocale = (typeof LOCALES)[number];
const DEFAULT_LOCALE: RequestLocale = 'en';

function isLocale(value: string): value is RequestLocale {
  return (LOCALES as readonly string[]).includes(value);
}

export function localeFromCookie(cookieHeader: string | null): RequestLocale | null {
  const match = String(cookieHeader ?? '').match(/(?:^|; )locale=([^;]+)/);
  if (!match?.[1]) return null;
  try {
    const value = decodeURIComponent(match[1].trim()).toLowerCase();
    return isLocale(value) ? value : null;
  } catch {
    return null;
  }
}

export function localeFromAcceptLanguage(header: string | null): RequestLocale | null {
  const parts = String(header ?? '').split(',');
  for (const part of parts) {
    const code = part.trim().split(';')[0]?.split('-')[0]?.toLowerCase();
    if (code && isLocale(code)) return code;
  }
  return null;
}

export function localeFromRequest(request: Request): RequestLocale {
  return (
    localeFromCookie(request.headers.get('cookie')) ||
    localeFromAcceptLanguage(request.headers.get('accept-language')) ||
    DEFAULT_LOCALE
  );
}

export function isBareOriginPath(pathname: string): boolean {
  return pathname === '/' || pathname === '';
}
