import { useEffect, useState } from 'react';

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

  useEffect(() => {
    if (!pulseToken) return;
    setPulse(true);
    const id = window.setTimeout(() => setPulse(false), 110);
    return () => window.clearTimeout(id);
  }, [pulseToken]);

  return (
    <div className={`tap-pad-wrap${hintBelow ? ' tap-pad-wrap--hint-below' : ''}`}>
      <button
        type="button"
        className={`tap-pad${pulse ? ' is-pulse' : ''}`}
        onPointerDown={(event) => {
          event.preventDefault();
          onTap();
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
