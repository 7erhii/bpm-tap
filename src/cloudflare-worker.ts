import { handleContactHttp, isContactApiPath } from './lib/contact/http';
import { isBareOriginPath, localeFromRequest } from './lib/requestLocale';

type AssetFetcher = { fetch: (request: Request) => Promise<Response> };

function assets(env: Record<string, unknown>): AssetFetcher {
  return env.ASSETS as AssetFetcher;
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
    // Hashed /_astro/* files are served by the asset layer (see wrangler
    // run_worker_first). Never answer a missing stylesheet with another file
    // and status 200: the service worker precaches that body under the hashed
    // URL and the whole site stays unstyled.
    return assets(env).fetch(request);
  },
};
