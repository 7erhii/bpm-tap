import { describe, expect, it } from 'vitest';
import {
  isBareOriginPath,
  localeFromAcceptLanguage,
  localeFromCookie,
  localeFromRequest,
} from '../../src/lib/requestLocale';

describe('requestLocale', () => {
  it('reads locale cookie', () => {
    expect(localeFromCookie('locale=ru; path=/')).toBe('ru');
    expect(localeFromCookie('other=1; locale=zh')).toBe('zh');
    expect(localeFromCookie('locale=de')).toBe(null);
  });

  it('picks the first supported Accept-Language tag', () => {
    expect(localeFromAcceptLanguage('ru-RU,ru;q=0.9,en;q=0.8')).toBe('ru');
    expect(localeFromAcceptLanguage('de, fr-FR;q=0.8')).toBe('fr');
    expect(localeFromAcceptLanguage('de-DE')).toBe(null);
  });

  it('prefers cookie over Accept-Language', () => {
    const request = new Request('https://bpm-tap.com/', {
      headers: { cookie: 'locale=pt', 'accept-language': 'ru' },
    });
    expect(localeFromRequest(request)).toBe('pt');
  });

  it('treats only the site root as the locale redirect path', () => {
    expect(isBareOriginPath('/')).toBe(true);
    expect(isBareOriginPath('/en/')).toBe(false);
  });
});
