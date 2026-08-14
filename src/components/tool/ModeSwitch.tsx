import { Hand, Mic } from './icons';

interface Props {
  mode: 'tap' | 'listen';
  labels: { tap: string; listen: string };
  onChange: (mode: 'tap' | 'listen') => void;
  /** Fixed-height hint under the switch (V6 reading zone). */
  hint?: string;
  hintWarn?: boolean;
}

/** Segmented Tap | Listen control — sits above the BPM number. */
export function ModeSwitch({ mode, labels, onChange, hint, hintWarn = false }: Props) {
  return (
    <div className="modes">
      <div className="mode-switch" role="radiogroup" aria-label="How to find the tempo">
        <button
          type="button"
          role="radio"
          className={`mode-switch__btn${mode === 'tap' ? ' is-active' : ''}`}
          aria-checked={mode === 'tap'}
          onMouseDown={(e) => e.preventDefault()}
          onClick={() => onChange('tap')}
        >
          <Hand size={15} />
          <span>{labels.tap}</span>
        </button>
        <button
          type="button"
          role="radio"
          className={`mode-switch__btn${mode === 'listen' ? ' is-active' : ''}`}
          aria-checked={mode === 'listen'}
          onMouseDown={(e) => e.preventDefault()}
          onClick={() => onChange('listen')}
        >
          <Mic size={15} />
          <span>{labels.listen}</span>
        </button>
      </div>
      {hint != null ? (
        <p className={`modes__hint${hintWarn ? ' is-warn' : ''}`}>{hint}</p>
      ) : null}
    </div>
  );
}
