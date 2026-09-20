import { handleContactHttp, isContactApiPath } from './lib/contact/http';
import { isBareOriginPath, localeFromRequest } from './lib/requestLocale';

type AssetFetcher = { fetch: (request: Request) => Promise<Response> };

function assets(env: Record<string, unknown>): AssetFetcher {
  return env.ASSETS as AssetFetcher;
}

export async function fallbackMissingCss(request: Request, env: Record<string, unknown>): Promise<Response | null> {
  const url = new URL(request.url);
  if (!url.pathname.startsWith('/_astro/') || !url.pathname.endsWith('.css')) return null;
  const found = await assets(env).fetch(request);
  if (found.ok) return found;
  const fallback = await assets(env).fetch(new Request(new URL('/root.css', url.origin), request));
  if (!fallback.ok) return found;
  return new Response(fallback.body, {
    status: 200,
    headers: {
      'content-type': 'text/css; charset=utf-8',
      'cache-control': 'public, max-age=600',
    },
  });
}

export default {
  async fetch(request: Request, env: Record<string, unknown>): Promise<Response> {
    const url = new URL(request.url);
    if (isBareOriginPath(url.pathname)) {
      const locale = localeFromRequest(request);
      return new Response(null, {
        status: 302,
        headers: {
          location: `/${locale}/`,
          vary: 'Accept-Language, Cookie',
        },
      });
    }
    if (isContactApiPath(url.pathname)) {
      return handleContactHttp(request, env as Record<string, string | undefined>);
    }
    const css = await fallbackMissingCss(request, env);
    if (css) return css;
    return assets(env).fetch(request);
  },
};
