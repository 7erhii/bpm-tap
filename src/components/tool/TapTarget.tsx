import { useEffect, useRef, useState } from 'react';

interface Props {
  title: string;
  hint: string;
  /** Shorter touch-device hint (no “any key”). Falls back to `hint`. */
  hintTouch?: string;
  onTap: () => void;
  pulseToken: number;
  /** Render hint under the pad instead of inside the button face. */
  hintBelow?: boolean;
  /**
   * Pulse / long-content mode: don’t steal scroll.
   * Tap fires on touchend only if the finger barely moved.
   * Hit target is the pad face only (inset), not the chassis frame.
   */
  scrollSafe?: boolean;
  /** Ignore further taps (e.g. stable pulse reading until Reset). */
  locked?: boolean;
}

const SCROLL_CANCEL_PX = 12;

/**
 * Mobile Safari is unreliable with React pointer/click combos on a large pad:
 * ghost clicks, scroll cancellation, and passive listeners cause missed or
 * double-counted taps. Bind native non-passive touchstart + mousedown instead.
 */
export function TapTarget({
  title,
  hint,
  hintTouch,
  onTap,
  pulseToken,
  hintBelow = false,
  scrollSafe = false,
  locked = false,
}: Props) {
  const [pulse, setPulse] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const hitRef = useRef<HTMLSpanElement>(null);
  const onTapRef = useRef(onTap);
  const lastTapAt = useRef(0);
  const lockedRef = useRef(locked);
  const scrollSafeRef = useRef(scrollSafe);
  const touchHint = hintTouch ?? hint;

  onTapRef.current = onTap;
  lockedRef.current = locked;
  scrollSafeRef.current = scrollSafe;

  useEffect(() => {
    if (!pulseToken) return;
    setPulse(true);
    const id = window.setTimeout(() => setPulse(false), 110);
    return () => window.clearTimeout(id);
  }, [pulseToken]);

  useEffect(() => {
    const button = buttonRef.current;
    const hit = hitRef.current;
    if (!button || !hit) return;

    const fireTap = () => {
      if (lockedRef.current) return;
      const now = performance.now();
      // Collapse only true duplicate deliveries (touch + compatibility mouse).
      if (now - lastTapAt.current < 35) return;
      lastTapAt.current = now;
      onTapRef.current();
    };

    type TouchTrack = {
      id: number;
      x: number;
      y: number;
      cancelled: boolean;
    };
    let track: TouchTrack | null = null;

    const onTouchStart = (event: TouchEvent) => {
      if (lockedRef.current) return;
      // One finger = one beat. Extra contacts are ignored.
      if (event.touches.length !== 1) return;
      const touch = event.touches[0];
      if (!touch) return;

      if (scrollSafeRef.current) {
        // Allow the page to scroll if this gesture becomes a drag.
        track = {
          id: touch.identifier,
          x: touch.clientX,
          y: touch.clientY,
          cancelled: false,
        };
        return;
      }

      // Music tap: non-passive stop scroll + synthetic mouse so we count once.
      event.preventDefault();
      fireTap();
    };

    const onTouchMove = (event: TouchEvent) => {
      if (!track || !scrollSafeRef.current) return;
      const touch = Array.from(event.touches).find((t) => t.identifier === track!.id);
      if (!touch) return;
      const dx = touch.clientX - track.x;
      const dy = touch.clientY - track.y;
      if (dx * dx + dy * dy > SCROLL_CANCEL_PX * SCROLL_CANCEL_PX) {
        track.cancelled = true;
      }
    };

    const finishTouch = (event: TouchEvent) => {
      if (!track) return;
      const ended = Array.from(event.changedTouches).some((t) => t.identifier === track!.id);
      if (!ended) return;
      const wasTap = !track.cancelled;
      track = null;
      if (!wasTap || lockedRef.current) return;
      // Confirmed tap: block the ghost click that some WebViews still emit.
      event.preventDefault();
      fireTap();
    };

    const onMouseDown = (event: MouseEvent) => {
      if (lockedRef.current) return;
      if (event.button !== 0) return;
      // Skip compatibility mouse events that some WebViews still emit after touch.
      if (performance.now() - lastTapAt.current < 35) return;
      event.preventDefault();
      fireTap();
    };

    // Keyboard activation (Enter) when the pad is focused — Space is handled globally.
    const onClick = (event: MouseEvent) => {
      if (lockedRef.current) return;
      if (event.detail !== 0) return; // real pointer clicks already counted above
      fireTap();
    };

    // Pointer taps land on the pad-face hit layer (not the chassis frame).
    hit.addEventListener('touchstart', onTouchStart, { passive: false });
    hit.addEventListener('touchmove', onTouchMove, { passive: true });
    hit.addEventListener('touchend', finishTouch, { passive: false });
    hit.addEventListener('touchcancel', finishTouch, { passive: false });
    hit.addEventListener('mousedown', onMouseDown);
    // Keyboard still activates the <button>.
    button.addEventListener('click', onClick);
    return () => {
      hit.removeEventListener('touchstart', onTouchStart);
      hit.removeEventListener('touchmove', onTouchMove);
      hit.removeEventListener('touchend', finishTouch);
      hit.removeEventListener('touchcancel', finishTouch);
      hit.removeEventListener('mousedown', onMouseDown);
      button.removeEventListener('click', onClick);
    };
  }, []);

  const hintNode = (
    <span className="tap-pad__hint">
      <span className="tap-pad__hint-desk">{hint}</span>
      <span className="tap-pad__hint-touch">{touchHint}</span>
    </span>
  );

  return (
    <div
      className={`tap-pad-wrap${hintBelow ? ' tap-pad-wrap--hint-below' : ''}${
        scrollSafe ? ' tap-pad-wrap--scroll-safe' : ''
      }`}
    >
      <button
        ref={buttonRef}
        type="button"
        className={`tap-pad${pulse ? ' is-pulse' : ''}${locked ? ' is-locked' : ''}${
          scrollSafe ? ' tap-pad--scroll-safe' : ''
        }`}
        aria-label={title}
        aria-disabled={locked || undefined}
      >
        <span className="tap-pad__chassis" aria-hidden="true">
          <span className="tap-pad__bay" />
          <span className="tap-pad__plunger">
            <span className="tap-pad__surface" />
          </span>
        </span>
        {/* Invisible hit target: pad face only, inset 5px past the plunger edge */}
        <span ref={hitRef} className="tap-pad__hit" aria-hidden="true" />
        <span className="tap-pad__content">
          <span className="tap-pad__title">{title}</span>
          {!hintBelow ? hintNode : null}
        </span>
      </button>
      {hintBelow ? <p className="tap-pad__hint-below">{hintNode}</p> : null}
    </div>
  );
}
