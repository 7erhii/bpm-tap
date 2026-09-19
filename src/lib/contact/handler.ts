import type { ContactSource } from './types';
import { EMAIL_MAX, MESSAGE_MAX, MESSAGE_MIN, NAME_MAX } from './limits';

const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const DEFAULT_FROM = 'BPM Tap <onboarding@resend.dev>';
const DEFAULT_TO = 'bpmtapcom@gmail.com';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SOURCES = new Set<ContactSource>(['bpm-tap', 'pulse']);

const hits = new Map<string, number[]>();

export type ContactErrorCode = 'invalid' | 'rate_limit' | 'config' | 'email';

export interface ContactRequestBody {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  source?: unknown;
  locale?: unknown;
  website?: unknown;
}

export interface ContactResult {
  status: number;
  body: { ok: boolean; error?: ContactErrorCode; missing?: string[] };
}

export interface ContactDeliveryConfig {
  resendApiKey: string | undefined;
  resendFrom: string | undefined;
  contactToEmail: string | undefined;
}

export function contactDeliveryFromEnv(env: Record<string, string | undefined>): ContactDeliveryConfig {
  return {
    resendApiKey: env.RESEND_API_KEY,
    resendFrom: env.RESEND_FROM,
    contactToEmail: env.CONTACT_TO_EMAIL,
  };
}

export function parseContactBody(raw: unknown): ContactRequestBody | null {
  if (!raw || typeof raw !== 'object') return null;
  return raw as ContactRequestBody;
}

function asString(value: unknown, max: number): string {
  if (typeof value !== 'string') return '';
  return value.replace(/\r\n/g, '\n').trim().slice(0, max);
}

function pruneHits(ip: string, now: number): number[] {
  const next = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  hits.set(ip, next);
  return next;
}

export function formatContactEmail(input: {
  name: string;
  email: string;
  message: string;
  source: ContactSource;
  locale: string;
}): { subject: string; text: string } {
  const product = input.source === 'pulse' ? 'Pulse' : 'BPM Tap';
  const name = input.name || '—';
  return {
    subject: `BPM Tap contact · ${product}`,
    text: [
      'BPM Tap · contact',
      '',
      `Source: BPM Tap`,
      `Product: ${product}`,
      `Locale: ${input.locale}`,
      `Name: ${name}`,
      `Email: ${input.email}`,
      '',
      input.message,
    ].join('\n'),
  };
}

export async function handleContactPost(opts: {
  body: unknown;
  ip: string;
  resendApiKey: string | undefined;
  resendFrom?: string | undefined;
  contactToEmail: string | undefined;
  fetchImpl?: typeof fetch;
}): Promise<ContactResult> {
  const json = parseContactBody(opts.body);
  if (!json) return { status: 400, body: { ok: false, error: 'invalid' } };

  // Honeypot: pretend success so bots don't retry.
  if (asString(json.website, 200)) {
    return { status: 200, body: { ok: true } };
  }

  const name = asString(json.name, NAME_MAX);
  const email = asString(json.email, EMAIL_MAX).toLowerCase();
  const message = asString(json.message, MESSAGE_MAX);
  const locale = asString(json.locale, 8).toLowerCase() || 'en';
  const source = asString(json.source, 16) as ContactSource;

  if (!EMAIL_RE.test(email) || message.length < MESSAGE_MIN || !SOURCES.has(source)) {
    return { status: 400, body: { ok: false, error: 'invalid' } };
  }

  const now = Date.now();
  const ip = opts.ip || 'unknown';
  const recent = pruneHits(ip, now);
  if (recent.length >= MAX_PER_WINDOW) {
    return { status: 429, body: { ok: false, error: 'rate_limit' } };
  }
  recent.push(now);
  hits.set(ip, recent);

  const apiKey = opts.resendApiKey?.trim();
  const to = opts.contactToEmail?.trim() || DEFAULT_TO;
  if (!apiKey) {
    return { status: 503, body: { ok: false, error: 'config', missing: ['RESEND_API_KEY'] } };
  }

  const from = opts.resendFrom?.trim() || DEFAULT_FROM;
  const { subject, text } = formatContactEmail({ name, email, message, source, locale });
  const fetchImpl = opts.fetchImpl ?? fetch;

  try {
    const response = await fetchImpl('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        authorization: `Bearer ${apiKey}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject,
        text,
      }),
    });
    if (!response.ok) {
      return { status: 502, body: { ok: false, error: 'email' } };
    }
  } catch {
    return { status: 502, body: { ok: false, error: 'email' } };
  }

  return { status: 200, body: { ok: true } };
}

export function clientIp(headers: Headers): string {
  return (
    headers.get('cf-connecting-ip') ||
    headers.get('x-nf-client-connection-ip') ||
    headers.get('x-real-ip') ||
    headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    'unknown'
  );
}
