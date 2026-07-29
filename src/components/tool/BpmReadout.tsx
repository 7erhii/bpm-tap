import { useEffect, useRef, useState } from 'react';
import type { Confidence } from '@/lib/bpm/types';
import { clampBpm } from '@/lib/share/url';
import { ConfidenceCue } from './ConfidenceCue';

export type IdleMark = 'dash' | 'heart' | 'dot' | 'note' | 'timer' | 'metronome';

interface Props {
  bpm: number | null;
  unit: string;
  placeholder: string;
  idleMark?: IdleMark;
  live?: boolean;
  outOfRange?: boolean;
  outOfRangeLabel?: string;
  confidenceLevel?: Confidence;
  confidenceLabel?: string;
  deviationBpm?: number | null;
  editable?: boolean;
  enterLabel?: string;
  onCommitBpm?: (bpm: number) => void;
}

/** Tiny 8-bit idle sprite for the LCD when no BPM yet. */
function IdlePixelAnim({ mark }: { mark: IdleMark }) {
  if (mark === 'dot' || mark === 'heart') {
    return (
      <span className="bpm-pixel-pulse" aria-hidden="true">
        <span className="bpm-pixel-pulse__block" />
      </span>
    );
  }

  return (
    <span className="bpm-pixel-eq" aria-hidden="true">
      <i />
      <i />
      <i />
      <i />
    </span>
  );
}

function displayValue(bpm: number | null): string {
  return bpm == null ? '' : String(Math.round(bpm));
}

function digitsOnly(raw: string): string {
  return raw.replace(/[^\d]/g, '').slice(0, 3);
}

export function BpmReadout({
  bpm,
  unit,
  placeholder,
  idleMark = 'dash',
  live = false,
  outOfRange = false,
  outOfRangeLabel,
  confidenceLevel = 'none',
  confidenceLabel,
  deviationBpm = null,
  editable = false,
  enterLabel = 'BPM',
  onCommitBpm,
}: Props) {
  const editRef = useRef<HTMLDivElement>(null);
  const blurTimer = useRef<number | null>(null);
  const [focused, setFocused] = useState(false);
  const showIdleAnim = editable && bpm == null && !focused;

  useEffect(() => {
    if (focused || !editRef.current) return;
    editRef.current.textContent = displayValue(bpm);
  }, [bpm, focused]);

  useEffect(() => {
    if (!focused || !editRef.current) return;
    const el = editRef.current;
    el.focus();
    const selection = window.getSelection();
    if (!selection) return;
    const range = document.createRange();
    range.selectNodeContents(el);
    selection.removeAllRanges();
    selection.addRange(range);
  }, [focused]);

  useEffect(() => {
    return () => {
      if (blurTimer.current != null) window.clearTimeout(blurTimer.current);
    };
  }, []);

  const commitFromDom = () => {
    const el = editRef.current;
    if (!el) return;
    const next = clampBpm(Number(digitsOnly(el.textContent ?? '')));
    if (next == null) {
      el.textContent = displayValue(bpm);
      return;
    }
    el.textContent = String(next);
    if (bpm == null || Math.round(bpm) !== next) {
      onCommitBpm?.(next);
    }
  };

  return (
    <div className="bpm-readout" aria-live="polite">
      <div className={`bpm-display${focused ? ' is-editing' : ''}${live ? ' is-live' : ''}`}>
        <div className="bpm-display__screen">
          <span className="bpm-display__label">{unit}</span>
          {editable ? (
            <div className="bpm-value-slot">
              {showIdleAnim ? (
                <button
                  type="button"
                  className="bpm-value bpm-value--idle-anim"
                  aria-label={enterLabel}
                  onMouseDown={(event) => {
                    // Keep click from stealing focus before we open the editor.
                    event.preventDefault();
                    if (blurTimer.current != null) {
                      window.clearTimeout(blurTimer.current);
                      blurTimer.current = null;
                    }
                    setFocused(true);
                  }}
                >
                  <IdlePixelAnim mark={idleMark} />
                </button>
              ) : null}
              <div
                ref={editRef}
                className={`bpm-value bpm-value--editable${live && !focused ? ' is-live' : ''}${
                  focused ? ' is-editing' : ''
                }${showIdleAnim ? ' is-covered' : ''}`}
                role="textbox"
                aria-label={enterLabel}
                aria-multiline="false"
                aria-hidden={showIdleAnim}
                contentEditable
                suppressContentEditableWarning
                data-placeholder={placeholder}
                onFocus={() => {
                  if (blurTimer.current != null) {
                    window.clearTimeout(blurTimer.current);
                    blurTimer.current = null;
                  }
                  setFocused(true);
                }}
                onBlur={() => {
                  // Defer so toolbar button clicks are not cancelled by the re-render.
                  blurTimer.current = window.setTimeout(() => {
                    blurTimer.current = null;
                    if (editRef.current && document.activeElement === editRef.current) return;
                    setFocused(false);
                    commitFromDom();
                  }, 0);
                }}
                onKeyDown={(event) => {
                  if (event.key === 'Enter') {
                    event.preventDefault();
                    event.currentTarget.blur();
                    return;
                  }
                  if (event.key === 'Escape') {
                    event.preventDefault();
                    event.currentTarget.textContent = displayValue(bpm);
                    event.currentTarget.blur();
                    return;
                  }
                  if (
                    event.metaKey ||
                    event.ctrlKey ||
                    event.altKey ||
                    event.key === 'Backspace' ||
                    event.key === 'Delete' ||
                    event.key === 'Tab' ||
                    event.key === 'ArrowLeft' ||
                    event.key === 'ArrowRight' ||
                    event.key === 'ArrowUp' ||
                    event.key === 'ArrowDown' ||
                    event.key === 'Home' ||
                    event.key === 'End'
                  ) {
                    return;
                  }
                  if (!/^\d$/.test(event.key)) {
                    event.preventDefault();
                    return;
                  }
                  const current = digitsOnly(event.currentTarget.textContent ?? '');
                  if (current.length >= 3 && !window.getSelection()?.toString()) {
                    event.preventDefault();
                  }
                }}
                onPaste={(event) => {
                  event.preventDefault();
                  const pasted = digitsOnly(event.clipboardData.getData('text'));
                  document.execCommand('insertText', false, pasted);
                }}
              />
            </div>
          ) : (
            <div
              className={`bpm-value${live ? ' is-live' : ''}${bpm == null ? ' is-idle' : ''}`}
            >
              {bpm == null ? (
                <IdlePixelAnim mark={idleMark} />
              ) : (
                Math.round(bpm)
              )}
            </div>
          )}
        </div>
      </div>

      <div className="bpm-meta">
        {outOfRange && outOfRangeLabel ? (
          <span className="bpm-flag">{outOfRangeLabel}</span>
        ) : null}
        {/* Idle edit hint only when not live — live listen/tap must show status cue */}
        {editable && bpm == null && !focused && !live ? (
          <span className="bpm-edit-hint">{enterLabel}</span>
        ) : confidenceLabel ? (
          <ConfidenceCue
            level={confidenceLevel}
            label={confidenceLabel}
            deviationBpm={deviationBpm}
          />
        ) : null}
      </div>
    </div>
  );
}
