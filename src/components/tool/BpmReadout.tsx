import { Heart, Metronome, MusicNote, Timer } from './icons';

export type IdleMark = 'dash' | 'heart' | 'dot' | 'note' | 'timer' | 'metronome';

interface Props {
  bpm: number | null;
  unit: string;
  placeholder: string;
  idleMark?: IdleMark;
  live?: boolean;
  outOfRange?: boolean;
  outOfRangeLabel?: string;
}

function IdleGlyph({ mark, placeholder }: { mark: IdleMark; placeholder: string }) {
  switch (mark) {
    case 'heart':
      return (
        <span className="bpm-value__mark bpm-value__mark--icon" aria-hidden="true">
          <Heart size={72} />
        </span>
      );
    case 'dot':
      return <span className="bpm-value__mark bpm-value__mark--dot" aria-hidden="true" />;
    case 'note':
      return (
        <span className="bpm-value__mark bpm-value__mark--icon" aria-hidden="true">
          <MusicNote size={72} />
        </span>
      );
    case 'timer':
      return (
        <span className="bpm-value__mark bpm-value__mark--icon" aria-hidden="true">
          <Timer size={72} />
        </span>
      );
    case 'metronome':
      return (
        <span className="bpm-value__mark bpm-value__mark--icon" aria-hidden="true">
          <Metronome size={72} />
        </span>
      );
    default:
      return <>{placeholder}</>;
  }
}

export function BpmReadout({
  bpm,
  unit,
  placeholder,
  idleMark = 'dash',
  live = false,
  outOfRange = false,
  outOfRangeLabel,
}: Props) {
  return (
    <div className="bpm-readout" aria-live="polite">
      <div
        className={`bpm-value${live ? ' is-live' : ''}${bpm == null ? ' is-idle' : ''}`}
      >
        {bpm == null ? (
          <IdleGlyph mark={idleMark} placeholder={placeholder} />
        ) : (
          Math.round(bpm)
        )}
      </div>
      <div className="bpm-unit">{unit}</div>
      {outOfRange && outOfRangeLabel ? (
        <div className="muted">{outOfRangeLabel}</div>
      ) : null}
    </div>
  );
}
