import type { CSSProperties } from 'react';
import type { TapPadStage } from './TapTarget';

interface Props {
  stage: TapPadStage;
  /** Beat period in seconds — drives `--beat`. */
  beatSec?: number;
  /** Bumps on each tap so CSS animation restarts in phase. */
  pulseToken: number;
}

/**
 * Decorative heart under the BPM readout. Idle breathes slowly;
 * counting/stable beat at the measured rate (`--beat`).
 */
export function PulseBeatHeart({ stage, beatSec, pulseToken }: Props) {
  const beat = beatSec != null && beatSec > 0 ? beatSec : 0.833;
  const style = { ['--beat']: `${beat}s` } as CSSProperties;
  const animKey = `${beat.toFixed(4)}-${pulseToken}-${stage}`;

  return (
    <div
      className={`pulse-beat-heart is-${stage}`}
      style={style}
      aria-hidden="true"
    >
      <svg
        key={animKey}
        className="pulse-beat-heart__svg"
        viewBox="0 0 24 24"
        focusable="false"
      >
        <path d="M12 20.7 4.6 13.4a4.8 4.8 0 0 1 0-6.8 4.8 4.8 0 0 1 6.8 0l.6.6.6-.6a4.8 4.8 0 0 1 6.8 0 4.8 4.8 0 0 1 0 6.8z" />
      </svg>
    </div>
  );
}
