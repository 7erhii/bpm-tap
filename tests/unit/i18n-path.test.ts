import { describe, expect, it } from 'vitest';
import { DEFAULT_LOCALE, detectLocaleFromPath } from '../../src/i18n/utils';
import en from '../../src/i18n/en.json';
import ru from '../../src/i18n/ru.json';
import es from '../../src/i18n/es.json';
import fr from '../../src/i18n/fr.json';
import pt from '../../src/i18n/pt.json';
import zh from '../../src/i18n/zh.json';

describe('detectLocaleFromPath', () => {
  it('reads the locale prefix', () => {
    expect(detectLocaleFromPath('/ru/nope/')).toBe('ru');
    expect(detectLocaleFromPath('/zh/guides/missing/')).toBe('zh');
    expect(detectLocaleFromPath('/en/')).toBe('en');
  });

  it('falls back for unknown or 404 paths', () => {
    expect(detectLocaleFromPath('/404')).toBe(DEFAULT_LOCALE);
    expect(detectLocaleFromPath('/not-a-locale/x/')).toBe(DEFAULT_LOCALE);
    expect(detectLocaleFromPath('/')).toBe(DEFAULT_LOCALE);
  });
});

describe('i18n catalogs', () => {
  it('keeps the same keys in every locale', () => {
    const expected = Object.keys(en).sort();
    for (const catalog of [ru, es, fr, pt, zh]) {
      expect(Object.keys(catalog).sort()).toEqual(expected);
    }
  });
});
