import { useEffect, useRef, useState } from 'react';

interface Props {
  title: string;
  hint: string;
  onTap: () => void;
  pulseToken: number;
  /** Render hint under the pad instead of inside the button face. */
  hintBelow?: boolean;
}

/**
 * Mobile Safari is unreliable with React pointer/click combos on a large pad:
 * ghost clicks, scroll cancellation, and passive listeners cause missed or
 * double-counted taps. Bind native non-passive touchstart + mousedown instead.
 */
export function TapTarget({ title, hint, onTap, pulseToken, hintBelow = false }: Props) {
  const [pulse, setPulse] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const onTapRef = useRef(onTap);
  const lastTapAt = useRef(0);

  onTapRef.current = onTap;

  useEffect(() => {
    if (!pulseToken) return;
    setPulse(true);
    const id = window.setTimeout(() => setPulse(false), 110);
    return () => window.clearTimeout(id);
  }, [pulseToken]);

  useEffect(() => {
    const el = buttonRef.current;
    if (!el) return;

    const fireTap = () => {
      const now = performance.now();
      // Collapse only true duplicate deliveries (touch + compatibility mouse).
      if (now - lastTapAt.current < 35) return;
      lastTapAt.current = now;
      onTapRef.current();
    };

    const onTouchStart = (event: TouchEvent) => {
      // One finger = one beat. Extra contacts are ignored.
      if (event.touches.length !== 1) return;
      // Non-passive: stop scroll + synthetic mouse so we count exactly once.
      event.preventDefault();
      fireTap();
    };

    const onMouseDown = (event: MouseEvent) => {
      if (event.button !== 0) return;
      // Skip compatibility mouse events that some WebViews still emit after touch.
      if (performance.now() - lastTapAt.current < 35) return;
      event.preventDefault();
      fireTap();
    };

    // Keyboard activation (Enter) when the pad is focused — Space is handled globally.
    const onClick = (event: MouseEvent) => {
      if (event.detail !== 0) return; // real pointer clicks already counted above
      fireTap();
    };

    el.addEventListener('touchstart', onTouchStart, { passive: false });
    el.addEventListener('mousedown', onMouseDown);
    el.addEventListener('click', onClick);
    return () => {
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('mousedown', onMouseDown);
      el.removeEventListener('click', onClick);
    };
  }, []);

  return (
    <div className={`tap-pad-wrap${hintBelow ? ' tap-pad-wrap--hint-below' : ''}`}>
      <button
        ref={buttonRef}
        type="button"
        className={`tap-pad${pulse ? ' is-pulse' : ''}`}
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
