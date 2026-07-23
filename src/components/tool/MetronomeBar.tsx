import { getMeter, METERS, type TimeSignatureId } from '@/lib/metronome/scheduler';
import { Pause, Play } from './icons';

interface Props {
  meterId: TimeSignatureId;
  activeBeat: number | null;
  running: boolean;
  disabled: boolean;
  labels: {
    start: string;
    stop: string;
    meter: string;
    accentHint: string;
  };
  onToggle: () => void;
  onMeterChange: (id: TimeSignatureId) => void;
}

export function MetronomeBar({
  meterId,
  activeBeat,
  running,
  disabled,
  labels,
  onToggle,
  onMeterChange,
}: Props) {
  const meter = getMeter(meterId);

  return (
    <div className="metro-bar">
      <div className="metro-bar__top">
        <button
          type="button"
          className={`btn${running ? ' btn--accent' : ''}`}
          onClick={onToggle}
          disabled={disabled && !running}
        >
          {running ? <Pause size={16} /> : <Play size={16} />}
          {running ? labels.stop : labels.start}
        </button>
        <label className="meter-select">
          <span>{labels.meter}</span>
          <select
            value={meterId}
            onChange={(e) => onMeterChange(e.target.value as TimeSignatureId)}
          >
            {METERS.map((m) => (
              <option key={m.id} value={m.id}>
                {m.id}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="beat-dots" aria-hidden="true">
        {Array.from({ length: meter.beatsPerBar }, (_, i) => (
          <span
            key={i}
            className={`beat-dot${meter.accents.includes(i) ? ' is-accent' : ''}${activeBeat === i ? ' is-on' : ''}`}
          />
        ))}
      </div>
      <p className="metro-hint">{labels.accentHint}</p>
    </div>
  );
}
