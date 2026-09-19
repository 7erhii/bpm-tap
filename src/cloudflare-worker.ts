import { handleContactHttp, isContactApiPath } from './lib/contact/http';

type AssetFetcher = { fetch: (request: Request) => Promise<Response> };

export default {
  async fetch(request: Request, env: Record<string, unknown>): Promise<Response> {
    const pathname = new URL(request.url).pathname;
    if (isContactApiPath(pathname)) {
      return handleContactHttp(request, env as Record<string, string | undefined>);
    }
    return (env.ASSETS as AssetFetcher).fetch(request);
  },
};
