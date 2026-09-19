import { useEffect, useState, type FormEvent } from 'react';
import type { ContactSource } from '@/lib/contact/types';
import { EMAIL_MAX, MESSAGE_MAX, MESSAGE_MIN, NAME_MAX } from '@/lib/contact/limits';
import './contact-form.css';

export interface ContactFormLabels {
  name: string;
  email: string;
  message: string;
  submit: string;
  sending: string;
  success: string;
  error: string;
  optional: string;
  sourceBpm: string;
  sourcePulse: string;
}

interface Props {
  locale: string;
  source: ContactSource;
  labels: ContactFormLabels;
}

type Status = 'idle' | 'sending' | 'success' | 'error';

function sourceFromSearch(fallback: ContactSource): ContactSource {
  if (typeof window === 'undefined') return fallback;
  return new URLSearchParams(window.location.search).get('from') === 'pulse' ? 'pulse' : 'bpm-tap';
}

export function ContactForm({ locale, source: fallbackSource, labels }: Props) {
  const [status, setStatus] = useState<Status>('idle');
  const [source, setSource] = useState<ContactSource>(fallbackSource);

  useEffect(() => {
    setSource(sourceFromSearch(fallbackSource));
  }, [fallbackSource]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === 'sending') return;

    const form = event.currentTarget;
    const data = new FormData(form);
    const tagged = sourceFromSearch(source);
    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          name: String(data.get('name') ?? ''),
          email: String(data.get('email') ?? ''),
          message: String(data.get('message') ?? ''),
          website: String(data.get('website') ?? ''),
          source: tagged,
          locale,
        }),
      });
      const payload = (await response.json().catch(() => null)) as { ok?: boolean } | null;
      if (!response.ok || !payload?.ok) {
        setStatus('error');
        return;
      }
      form.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <p className="contact-form__source">{source === 'pulse' ? labels.sourcePulse : labels.sourceBpm}</p>

      <label className="sr-only" htmlFor="contact-website">
        Website
        <input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </label>

      <label className="contact-form__field">
        <span>
          {labels.name} <span className="contact-form__optional">{labels.optional}</span>
        </span>
        <input name="name" type="text" maxLength={NAME_MAX} autoComplete="name" />
      </label>

      <label className="contact-form__field">
        <span>{labels.email}</span>
        <input name="email" type="email" required maxLength={EMAIL_MAX} autoComplete="email" />
      </label>

      <label className="contact-form__field">
        <span>{labels.message}</span>
        <textarea
          name="message"
          required
          minLength={MESSAGE_MIN}
          maxLength={MESSAGE_MAX}
          rows={7}
        />
      </label>

      <div className="contact-form__row">
        <button className="contact-form__submit" type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? labels.sending : labels.submit}
        </button>
        {status === 'success' ? <p className="contact-form__ok">{labels.success}</p> : null}
        {status === 'error' ? <p className="contact-form__err">{labels.error}</p> : null}
      </div>
    </form>
  );
}
