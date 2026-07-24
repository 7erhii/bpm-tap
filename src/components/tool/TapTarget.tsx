import { useEffect, useRef, useState } from 'react';

interface Props {
  title: string;
  hint: string;
  onTap: () => void;
  pulseToken: number;
  /** Render hint under the pad instead of inside the button face. */
  hintBelow?: boolean;
}

export function TapTarget({ title, hint, onTap, pulseToken, hintBelow = false }: Props) {
  const [pulse, setPulse] = useState(false);
  /** Suppress the compatibility `click` after a pointer-handled tap (avoid double count). */
  const ignoreClickUntil = useRef(0);

  useEffect(() => {
    if (!pulseToken) return;
    setPulse(true);
    const id = window.setTimeout(() => setPulse(false), 110);
    return () => window.clearTimeout(id);
  }, [pulseToken]);

  const fireTap = () => {
    ignoreClickUntil.current = performance.now() + 500;
    onTap();
  };

  return (
    <div className={`tap-pad-wrap${hintBelow ? ' tap-pad-wrap--hint-below' : ''}`}>
      <button
        type="button"
        className={`tap-pad${pulse ? ' is-pulse' : ''}`}
        onPointerDown={(event) => {
          if (event.button !== 0) return;
          // iOS Safari: preventDefault on touch pointerdown can swallow the gesture /
          // suppress follow-up input. Only block default for mouse (focus + ghost click).
          if (event.pointerType === 'mouse' && event.cancelable) {
            event.preventDefault();
          }
          fireTap();
        }}
        onClick={() => {
          if (performance.now() < ignoreClickUntil.current) return;
          fireTap();
        }}
        aria-label={title}
      >
        <span className="tap-pad__chassis" aria-hidden="true">
          <span className="tap-pad__screw tap-pad__screw--tl" />
          <span className="tap-pad__screw tap-pad__screw--tr" />
          <span className="tap-pad__screw tap-pad__screw--bl" />
          <span className="tap-pad__screw tap-pad__screw--br" />
          <span className="tap-pad__bay" />
          <span className="tap-pad__plunger">
            <span className="tap-pad__surface" />
          </span>
        </span>
        <span className="tap-pad__content">
          <span className="tap-pad__title">{title}</span>
          {!hintBelow ? <span className="tap-pad__hint">{hint}</span> : null}
        </span>
      </button>
      {hintBelow ? <p className="tap-pad__hint-below">{hint}</p> : null}
    </div>
  );
}
