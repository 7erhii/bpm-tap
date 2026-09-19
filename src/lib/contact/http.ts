import { BODY_MAX } from './limits';
import { clientIp, contactDeliveryFromEnv, handleContactPost } from './handler';

const jsonHeaders = { 'content-type': 'application/json; charset=utf-8' };

export function isContactApiPath(pathname: string): boolean {
  return pathname === '/api/contact' || pathname === '/api/contact/';
}

export async function handleContactHttp(
  request: Request,
  env: Record<string, string | undefined>,
): Promise<Response> {
  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204 });
  }
  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ ok: false, error: 'invalid' }), {
      status: 405,
      headers: jsonHeaders,
    });
  }

  const length = Number(request.headers.get('content-length') ?? '0');
  if (length > BODY_MAX) {
    return new Response(JSON.stringify({ ok: false, error: 'invalid' }), {
      status: 413,
      headers: jsonHeaders,
    });
  }

  const body = await request.json().catch(() => null);
  const result = await handleContactPost({
    body,
    ip: clientIp(request.headers),
    ...contactDeliveryFromEnv(env),
  });

  return new Response(JSON.stringify(result.body), {
    status: result.status,
    headers: jsonHeaders,
  });
}
