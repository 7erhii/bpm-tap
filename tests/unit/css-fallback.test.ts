import { describe, expect, it } from 'vitest';
import { fallbackMissingCss } from '../../src/cloudflare-worker';

function assetsEnv(fetchImpl: (request: Request) => Promise<Response>) {
  return { ASSETS: { fetch: fetchImpl } };
}

describe('fallbackMissingCss', () => {
  it('ignores non-css requests', async () => {
    const env = assetsEnv(async () => new Response('nope', { status: 500 }));
    expect(await fallbackMissingCss(new Request('https://bpm-tap.com/'), env)).toBeNull();
    expect(await fallbackMissingCss(new Request('https://bpm-tap.com/_astro/app.js'), env)).toBeNull();
  });

  it('passes through hashed css that exists', async () => {
    const env = assetsEnv(async () => new Response('ok{}', { status: 200, headers: { 'content-type': 'text/css' } }));
    const res = await fallbackMissingCss(new Request('https://bpm-tap.com/_astro/app.css'), env);
    expect(res?.ok).toBe(true);
    expect(await res?.text()).toBe('ok{}');
  });

  it('serves /root.css when hashed css is missing', async () => {
    const env = assetsEnv(async (request) => {
      const path = new URL(request.url).pathname;
      if (path === '/root.css') {
        return new Response('body{color:#e8eaef}', { status: 200, headers: { 'content-type': 'text/css' } });
      }
      return new Response('missing', { status: 404 });
    });
    const res = await fallbackMissingCss(new Request('https://bpm-tap.com/_astro/gone.css'), env);
    expect(res?.status).toBe(200);
    expect(res?.headers.get('content-type')).toMatch(/text\/css/);
    expect(await res?.text()).toBe('body{color:#e8eaef}');
  });
});
