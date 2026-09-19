import { BODY_MAX } from '../../src/lib/contact/limits';
import { clientIp, contactDeliveryFromEnv, handleContactPost } from '../../src/lib/contact/handler';

const jsonHeaders = { 'content-type': 'application/json; charset=utf-8' };

export async function handler(event: {
  httpMethod?: string;
  headers?: Record<string, string | undefined>;
  body?: string | null;
}) {
  if (event.httpMethod && event.httpMethod !== 'POST') {
    return { statusCode: 405, headers: jsonHeaders, body: JSON.stringify({ ok: false, error: 'invalid' }) };
  }

  if ((event.body?.length ?? 0) > BODY_MAX) {
    return { statusCode: 413, headers: jsonHeaders, body: JSON.stringify({ ok: false, error: 'invalid' }) };
  }

  let parsed: unknown = null;
  try {
    parsed = event.body ? JSON.parse(event.body) : null;
  } catch {
    parsed = null;
  }

  const headers = new Headers();
  for (const [key, value] of Object.entries(event.headers ?? {})) {
    if (value) headers.set(key, value);
  }

  const result = await handleContactPost({
    body: parsed,
    ip: clientIp(headers),
    ...contactDeliveryFromEnv(process.env),
  });

  return {
    statusCode: result.status,
    headers: jsonHeaders,
    body: JSON.stringify(result.body),
  };
}
