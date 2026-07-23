/** Canonical production origin — keep in sync with `astro.config.mjs` `site`. */
export const SITE_ORIGIN = 'https://bpm-tap.com';

export function absoluteUrl(path: string): string {
  const origin = SITE_ORIGIN.replace(/\/$/, '');
  if (!path || path === '/') return `${origin}/`;
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${origin}${normalized}`;
}
