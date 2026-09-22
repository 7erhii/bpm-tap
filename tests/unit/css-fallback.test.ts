import { describe, expect, it } from 'vitest';
import worker from '../../src/cloudflare-worker';

function assetsEnv(fetchImpl: (request: Request) => Promise<Response>) {
  return { ASSETS: { fetch: fetchImpl } };
}

describe('hashed css is not replaced', () => {
  it('passes a missing stylesheet through unchanged', async () => {
    const env = assetsEnv(async () => new Response('missing', { status: 404 }));
    const res = await worker.fetch(new Request('https://bpm-tap.com/_astro/gone.css'), env);
    expect(res.status).toBe(404);
    expect(await res.text()).toBe('missing');
    expect(res.headers.get('cache-control') ?? '').not.toMatch(/max-age=600/);
  });

  it('passes an existing stylesheet through unchanged', async () => {
    const env = assetsEnv(async () => new Response('real{}', { status: 200, headers: { 'content-type': 'text/css' } }));
    const res = await worker.fetch(new Request('https://bpm-tap.com/_astro/app.css'), env);
    expect(res.status).toBe(200);
    expect(await res.text()).toBe('real{}');
  });
});
