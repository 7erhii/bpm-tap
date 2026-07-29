import { Hand, Mic } from './icons';

interface Props {
  mode: 'tap' | 'listen';
  labels: { tap: string; listen: string };
  onChange: (mode: 'tap' | 'listen') => void;
}

/** Single primary intent — Tap vs Listen. Home-ready control. */
export function ModeSwitch({ mode, labels, onChange }: Props) {
  return (
    <div className="mode-switch" role="tablist" aria-label="BPM input mode">
      <button
        type="button"
        role="tab"
        className={`mode-switch__btn${mode === 'tap' ? ' is-active' : ''}`}
        aria-selected={mode === 'tap'}
        onMouseDown={(e) => e.preventDefault()}
        onClick={() => onChange('tap')}
      >
        <Hand size={16} />
        {labels.tap}
      </button>
      <button
        type="button"
        role="tab"
        className={`mode-switch__btn${mode === 'listen' ? ' is-active' : ''}`}
        aria-selected={mode === 'listen'}
        onMouseDown={(e) => e.preventDefault()}
        onClick={() => onChange('listen')}
      >
        <Mic size={16} />
        {labels.listen}
      </button>
    </div>
  );
}
