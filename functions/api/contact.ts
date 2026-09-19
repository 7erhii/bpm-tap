import { BODY_MAX } from '../../src/lib/contact/limits';
import { clientIp, contactDeliveryFromEnv, handleContactPost } from '../../src/lib/contact/handler';

const jsonHeaders = { 'content-type': 'application/json; charset=utf-8' };

export async function onRequestPost(context: {
  request: Request;
  env: Record<string, string | undefined>;
}) {
  const length = Number(context.request.headers.get('content-length') ?? '0');
  if (length > BODY_MAX) {
    return new Response(JSON.stringify({ ok: false, error: 'invalid' }), {
      status: 413,
      headers: jsonHeaders,
    });
  }

  const body = await context.request.json().catch(() => null);
  const result = await handleContactPost({
    body,
    ip: clientIp(context.request.headers),
    ...contactDeliveryFromEnv(context.env),
  });

  return new Response(JSON.stringify(result.body), {
    status: result.status,
    headers: jsonHeaders,
  });
}
