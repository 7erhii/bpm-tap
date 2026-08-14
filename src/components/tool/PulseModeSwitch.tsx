import { useEffect, useState } from 'react';

type PulseMode = 'light' | 'dark';

interface Props {
  label: string;
  lightLabel: string;
  darkLabel: string;
}

function readMode(): PulseMode {
  if (typeof document === 'undefined') return 'light';
  return document.documentElement.getAttribute('data-pulse-mode') === 'dark'
    ? 'dark'
    : 'light';
}

function writeMode(mode: PulseMode) {
  document.documentElement.setAttribute('data-pulse-mode', mode);
  document.cookie =
    'pulse-mode=' + encodeURIComponent(mode) + ';path=/;max-age=31536000;samesite=lax';
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', mode === 'dark' ? '#0b0c10' : '#e11d48');
}

/** Light / Dark control for the pulse quick bar. Cookie: `pulse-mode`. */
export function PulseModeSwitch({ label, lightLabel, darkLabel }: Props) {
  const [mode, setMode] = useState<PulseMode>('light');

  useEffect(() => {
    setMode(readMode());
  }, []);

  const apply = (next: PulseMode) => {
    writeMode(next);
    setMode(next);
  };

  return (
    <div className="pulse-mode pulse-mode--bar" role="group" aria-label={label}>
      <button
        type="button"
        className={`pulse-mode__btn${mode === 'light' ? ' is-on' : ''}`}
        aria-pressed={mode === 'light'}
        onMouseDown={(e) => e.preventDefault()}
        onClick={() => apply('light')}
      >
        {lightLabel}
      </button>
      <button
        type="button"
        className={`pulse-mode__btn${mode === 'dark' ? ' is-on' : ''}`}
        aria-pressed={mode === 'dark'}
        onMouseDown={(e) => e.preventDefault()}
        onClick={() => apply('dark')}
      >
        {darkLabel}
      </button>
    </div>
  );
}
