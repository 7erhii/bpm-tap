import { describe, expect, it, vi } from 'vitest';
import { formatContactEmail, handleContactPost } from '../../src/lib/contact/handler';

const valid = {
  name: 'Alex',
  email: 'alex@example.com',
  message: 'The delay table looks off at 87 BPM.',
  source: 'bpm-tap',
  locale: 'en',
  website: '',
};

const delivery = {
  resendApiKey: 're_test',
  contactToEmail: 'ops@example.com',
};

describe('formatContactEmail', () => {
  it('always tags BPM Tap and names the product', () => {
    const bpm = formatContactEmail({
      name: 'Alex',
      email: 'a@b.c',
      message: 'Hi',
      source: 'bpm-tap',
      locale: 'en',
    });
    expect(bpm.subject).toBe('BPM Tap contact · BPM Tap');
    expect(bpm.text).toContain('Source: BPM Tap');
    expect(bpm.text).toContain('Product: BPM Tap');

    const pulse = formatContactEmail({
      name: '',
      email: 'a@b.c',
      message: 'Hi',
      source: 'pulse',
      locale: 'ru',
    });
    expect(pulse.subject).toBe('BPM Tap contact · Pulse');
    expect(pulse.text).toContain('Source: BPM Tap');
    expect(pulse.text).toContain('Product: Pulse');
    expect(pulse.text).toContain('Locale: ru');
    expect(pulse.text).toContain('Name: —');
  });
});

describe('handleContactPost', () => {
  it('rejects a short message', async () => {
    const result = await handleContactPost({
      body: { ...valid, message: 'hey' },
      ip: '1.1.1.1',
      ...delivery,
    });
    expect(result.status).toBe(400);
    expect(result.body.error).toBe('invalid');
  });

  it('swallows honeypot submissions', async () => {
    const fetchImpl = vi.fn();
    const result = await handleContactPost({
      body: { ...valid, website: 'http://spam.test' },
      ip: '2.2.2.2',
      ...delivery,
      fetchImpl: fetchImpl as unknown as typeof fetch,
    });
    expect(result.status).toBe(200);
    expect(result.body.ok).toBe(true);
    expect(fetchImpl).not.toHaveBeenCalled();
  });

  it('returns config when Resend env is missing', async () => {
    const result = await handleContactPost({
      body: valid,
      ip: '3.3.3.3',
      resendApiKey: '',
      contactToEmail: '',
    });
    expect(result.status).toBe(503);
    expect(result.body.error).toBe('config');
  });

  it('posts a Resend payload for a valid Pulse message', async () => {
    const fetchImpl = vi.fn(async () => new Response('{"id":"1"}', { status: 200 }));
    const result = await handleContactPost({
      body: { ...valid, source: 'pulse', locale: 'es' },
      ip: '4.4.4.4',
      ...delivery,
      fetchImpl: fetchImpl as unknown as typeof fetch,
    });
    expect(result.status).toBe(200);
    expect(fetchImpl).toHaveBeenCalledOnce();
    const [url, init] = fetchImpl.mock.calls[0];
    expect(url).toBe('https://api.resend.com/emails');
    const headers = (init as RequestInit).headers as Record<string, string>;
    expect(headers.authorization).toBe('Bearer re_test');
    const sent = JSON.parse(String((init as RequestInit).body));
    expect(sent.to).toEqual(['ops@example.com']);
    expect(sent.from).toBe('BPM Tap <onboarding@resend.dev>');
    expect(sent.reply_to).toBe('alex@example.com');
    expect(sent.subject).toBe('BPM Tap contact · Pulse');
    expect(sent.text).toContain('Product: Pulse');
    expect(sent.text).toContain('Source: BPM Tap');
  });
});
