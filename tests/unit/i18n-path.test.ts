import { describe, expect, it } from 'vitest';
import { DEFAULT_LOCALE, detectLocaleFromPath } from '../../src/i18n/utils';

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
