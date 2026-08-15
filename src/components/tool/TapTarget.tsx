import { useEffect, useRef, useState, type CSSProperties } from 'react';

export type TapPadStage = 'idle' | 'counting' | 'stable' | 'listen';

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
  /** Visual skin — music = V6 flat pad; pulse = P1 rose flat pad. */
  variant?: 'music' | 'pulse';
  stage?: TapPadStage;
  /** Beat period in seconds — drives `--beat` / `--bar` flash. */
  beatSec?: number;
  spectrum?: number[];
  listening?: boolean;
  /** Stable reading: pad flashes as visual metronome. */
  showFlash?: boolean;
  /** Live beat index while audible metronome runs (0-based). */
  activeBeat?: number | null;
  /** Beats per bar for pad dots (default 4). */
  beatCount?: number;
  sub?: string;
  subTouch?: string;
}

const SCROLL_CANCEL_PX = 10;
const LEVEL_BARS = 11;

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
  variant = 'pulse',
  stage = 'idle',
  beatSec,
  spectrum,
  listening = false,
  showFlash = false,
  activeBeat = null,
  beatCount = 4,
  sub,
  subTouch,
}: Props) {
  const [pulse, setPulse] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const hitRef = useRef<HTMLSpanElement>(null);
  const onTapRef = useRef(onTap);
  const lastTapAt = useRef(0);
  const scrollSafeRef = useRef(scrollSafe);
  const touchHint = hintTouch ?? hint;
  const music = variant === 'music';
  const pulseFlat = variant === 'pulse';
  const flatPad = music || pulseFlat;

  onTapRef.current = onTap;
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
      if (!wasTap) return;
      // Confirmed tap: block the ghost click that some WebViews still emit.
      event.preventDefault();
      fireTap();
    };

    // Browser aborted the gesture (often to take over scrolling) — never count as a tap.
    const onTouchCancel = (event: TouchEvent) => {
      if (!track) return;
      const ended = Array.from(event.changedTouches).some((t) => t.identifier === track!.id);
      if (!ended) return;
      track = null;
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

    // Pointer taps land on the pad-face hit layer (not the chassis frame).
    hit.addEventListener('touchstart', onTouchStart, { passive: false });
    hit.addEventListener('touchmove', onTouchMove, { passive: true });
    hit.addEventListener('touchend', finishTouch, { passive: false });
    hit.addEventListener('touchcancel', onTouchCancel, { passive: true });
    hit.addEventListener('mousedown', onMouseDown);
    // Keyboard still activates the <button>.
    button.addEventListener('click', onClick);
    return () => {
      hit.removeEventListener('touchstart', onTouchStart);
      hit.removeEventListener('touchmove', onTouchMove);
      hit.removeEventListener('touchend', finishTouch);
      hit.removeEventListener('touchcancel', onTouchCancel);
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

  if (flatPad) {
    const beat = beatSec != null && beatSec > 0 ? beatSec : music ? 0.469 : 0.833;
    const style = {
      ['--beat']: `${beat}s`,
      ['--bar']: `${beat * 4}s`,
    } as CSSProperties;

    const liveSpectrum = spectrum && spectrum.length > 0;
    const bars = liveSpectrum
      ? spectrum.slice(0, LEVEL_BARS)
      : Array.from({ length: LEVEL_BARS }, () => 0.16);
    // Upsample/downsample to LEVEL_BARS
    const levelBars =
      bars.length === LEVEL_BARS
        ? bars
        : Array.from({ length: LEVEL_BARS }, (_, i) => {
            const src = Math.floor((i / LEVEL_BARS) * bars.length);
            return bars[src] ?? 0.16;
          });

    const subDesk = sub ?? hint;
    const subMobile = subTouch ?? hintTouch ?? subDesk;
    const dots = Math.max(1, Math.min(12, Math.round(beatCount) || 4));
    const metroLive = activeBeat != null;
    // Restart CSS beat phase when tempo or a fresh tap lands
    const beatAnimKey = `${beat.toFixed(4)}-${pulseToken}`;
    const padClass = music ? 'tap-pad--music' : 'tap-pad--pulse';
    const wrapClass = music ? 'tap-pad-wrap--music' : 'tap-pad-wrap--pulse';

    return (
      <div
        className={`tap-pad-wrap ${wrapClass} stage-${stage}${
          scrollSafe ? ' tap-pad-wrap--scroll-safe' : ''
        }`}
      >
        <button
          ref={buttonRef}
          type="button"
          className={`tap-pad ${padClass} is-${stage}${pulse ? ' is-pulse' : ''}${
            showFlash ? ' is-flash' : ''
          }${listening ? ' is-listening' : ''}${metroLive ? ' is-metro' : ''}${
            scrollSafe ? ' tap-pad--scroll-safe' : ''
          }`}
          aria-label={title}
          aria-pressed={listening || undefined}
          style={style}
        >
          {music ? (
            <>
              <span className="pad__flash" aria-hidden="true" />
              <span className="pad__flash pad__flash--one" aria-hidden="true" />
              <span className="pad__breath" aria-hidden="true" />
              <span className="pad__beats" aria-hidden="true" key={beatAnimKey}>
                {Array.from({ length: dots }, (_, i) => (
                  <i
                    key={i}
                    className={`${i === 0 ? 'is-one' : ''}${activeBeat === i ? ' is-on' : ''}`.trim()}
                  />
                ))}
              </span>
              <span
                className={`pad__level${liveSpectrum ? ' is-live' : ''}`}
                aria-hidden="true"
              >
                {levelBars.map((v, i) => (
                  <i
                    key={i}
                    style={
                      liveSpectrum
                        ? { transform: `scaleY(${Math.max(0.16, Math.min(1, v))})` }
                        : undefined
                    }
                  />
                ))}
              </span>
            </>
          ) : (
            <span className="pad__glow" aria-hidden="true" />
          )}
          {/* Full-pad hit target for flat skins */}
          <span ref={hitRef} className="tap-pad__hit tap-pad__hit--full" aria-hidden="true" />
          <span className="pad__label">{title}</span>
          <span className="pad__sub">
            <span className="pad__sub-desk">{subDesk}</span>
            <span className="pad__sub-touch">{subMobile}</span>
          </span>
        </button>
      </div>
    );
  }

  return (
    <div
      className={`tap-pad-wrap${hintBelow ? ' tap-pad-wrap--hint-below' : ''}${
        scrollSafe ? ' tap-pad-wrap--scroll-safe' : ''
      }`}
    >
      <button
        ref={buttonRef}
        type="button"
        className={`tap-pad${pulse ? ' is-pulse' : ''}${
          scrollSafe ? ' tap-pad--scroll-safe' : ''
        }`}
        aria-label={title}
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
