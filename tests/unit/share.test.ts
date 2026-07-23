import { describe, expect, it } from 'vitest';
import { buildShareUrl, clampBpm, parseBpmParam } from '../../src/lib/share/url';

describe('share helpers', () => {
  it('parses valid bpm params', () => {
    expect(parseBpmParam('128')).toBe(128);
    expect(parseBpmParam('30')).toBe(30);
    expect(parseBpmParam('300')).toBe(300);
  });

  it('rejects invalid bpm params', () => {
    expect(parseBpmParam('29')).toBeNull();
    expect(parseBpmParam('301')).toBeNull();
    expect(parseBpmParam('nope')).toBeNull();
    expect(parseBpmParam(null)).toBeNull();
  });

  it('builds share urls', () => {
    expect(buildShareUrl('/en/', 128, 'https://bpm-tap.com')).toBe('/en/?bpm=128');
  });

  it('clamps via round then range', () => {
    expect(clampBpm(127.6)).toBe(128);
    expect(clampBpm(10)).toBeNull();
  });
});
