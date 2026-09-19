import { handleContactHttp } from '../../src/lib/contact/http';

export async function onRequestPost(context: {
  request: Request;
  env: Record<string, string | undefined>;
}) {
  return handleContactHttp(context.request, context.env);
}
