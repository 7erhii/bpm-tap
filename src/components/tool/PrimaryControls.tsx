import { METERS, type TimeSignatureId } from '@/lib/metronome/scheduler';
import { Copy, Link2, Pause, Play, RotateCcw, Save, Star } from './icons';
import { PulseModeSwitch } from './PulseModeSwitch';

interface PulseSaveBar {
  name: string;
  namePlaceholder: string;
  saveLabel: string;
  savedLabel: string;
  needBpm: string;
  justSaved: boolean;
  canSave: boolean;
  onNameChange: (value: string) => void;
  onSave: () => void;
}

interface Props {
  labels: {
    reset: string;
    half: string;
    double: string;
    copy: string;
    copied: string;
    share: string;
    fullscreen: string;
    exitFullscreen: string;
    save?: string;
    saved?: string;
    metronomeStart?: string;
    metronomeStop?: string;
    /** Accessible name for the meter select (no visible label in quick bar). */
    meter?: string;
  };
  canUseBpm: boolean;
  copied: boolean;
  fullscreen: boolean;
  /** Kept for callers; Copy no longer shows the BPM numeral (compact bar). */
  bpm?: number | null;
  showSave?: boolean;
  showFactor?: boolean;
  showShare?: boolean;
  /** V6 quick bar: icon-first layout with optional metronome toggle. */
  variant?: 'default' | 'quick';
  isFavorite?: boolean;
  metroOn?: boolean;
  meterId?: TimeSignatureId;
  onReset: () => void;
  onHalf: () => void;
  onDouble: () => void;
  onCopy: () => void;
  onShare: () => void;
  onToggleFullscreen: () => void;
  onToggleFavorite?: () => void;
  onMetronome?: () => void;
  onMeterChange?: (id: TimeSignatureId) => void;
  /** Pulse: name + Save group like pulse-1-vitals. */
  pulseSave?: PulseSaveBar | null;
  /** Pulse: Light/Dark switch at the end of the quick bar. */
  pulseTheme?: {
    label: string;
    lightLabel: string;
    darkLabel: string;
  } | null;
}

export function PrimaryControls({
  labels,
  canUseBpm,
  copied,
  showSave = false,
  showFactor = true,
  showShare = true,
  variant = 'default',
  isFavorite = false,
  metroOn = false,
  meterId = '4/4',
  onReset,
  onHalf,
  onDouble,
  onCopy,
  onShare,
  onToggleFavorite,
  onMetronome,
  onMeterChange,
  pulseSave = null,
  pulseTheme = null,
}: Props) {
  if (variant === 'quick') {
    const copyWord = copied ? labels.copied : labels.copy;
    const pulseBar = !!pulseSave;

    return (
      <div className="controls controls--quick" role="toolbar" aria-label="Result actions">
        {pulseBar ? null : (
          <button
            type="button"
            className={`btn btn--primary${canUseBpm ? '' : ' is-muted'}`}
            onMouseDown={(event) => event.preventDefault()}
            onClick={onCopy}
            disabled={!canUseBpm}
          >
            <Copy size={17} />
            <span className="btn__label">{copyWord}</span>
          </button>
        )}
        {onMetronome ? (
          <button
            type="button"
            className="btn btn--icon"
            aria-label={metroOn ? labels.metronomeStop ?? 'Stop' : labels.metronomeStart ?? 'Metronome'}
            aria-pressed={metroOn}
            onMouseDown={(event) => event.preventDefault()}
            onClick={onMetronome}
            disabled={!canUseBpm && !metroOn}
          >
            {metroOn ? <Pause size={16} /> : <Play size={14} className="ico-play" />}
          </button>
        ) : null}
        {onMeterChange ? (
          <label className="meter-select meter-select--bar">
            <span className="sr-only">{labels.meter ?? 'Time signature'}</span>
            <select
              value={meterId}
              aria-label={labels.meter ?? 'Time signature'}
              onChange={(e) => onMeterChange(e.target.value as TimeSignatureId)}
            >
              {METERS.map((m) => (
                <option key={m.id} value={m.id}>
                  {m.id}
                </option>
              ))}
            </select>
          </label>
        ) : null}
        {showSave && labels.save && labels.saved ? (
          <button
            type="button"
            className={`btn btn--icon${isFavorite ? ' is-fav' : ''}`}
            onMouseDown={(event) => event.preventDefault()}
            onClick={onToggleFavorite}
            disabled={!canUseBpm && !isFavorite}
            aria-pressed={isFavorite}
            aria-label={isFavorite ? labels.saved : labels.save}
            title={isFavorite ? labels.saved : labels.save}
          >
            <Star size={17} fill={isFavorite ? 'currentColor' : 'none'} />
          </button>
        ) : null}
        {pulseBar ? (
          <button
            type="button"
            className={`btn btn--copy${canUseBpm ? '' : ' is-muted'}${copied ? ' is-ok' : ''}`}
            onMouseDown={(event) => event.preventDefault()}
            onClick={onCopy}
            disabled={!canUseBpm}
          >
            <Copy size={17} />
            <span className="btn__label">{copyWord}</span>
          </button>
        ) : null}
        <button
          type="button"
          className="btn btn--icon"
          aria-label={labels.reset}
          onMouseDown={(event) => event.preventDefault()}
          onClick={onReset}
        >
          <RotateCcw size={17} />
        </button>
        {showShare && !pulseBar ? (
          <button
            type="button"
            className="btn btn--icon btn--ghost"
            aria-label={labels.share}
            onMouseDown={(event) => event.preventDefault()}
            onClick={onShare}
            disabled={!canUseBpm}
          >
            <Link2 size={17} />
          </button>
        ) : null}
        {pulseTheme ? (
          <PulseModeSwitch
            label={pulseTheme.label}
            lightLabel={pulseTheme.lightLabel}
            darkLabel={pulseTheme.darkLabel}
          />
        ) : null}
        {pulseSave ? (
          <div className={`save${pulseSave.canSave ? '' : ' is-idle'}`}>
            <label className="sr-only" htmlFor="pulse-save-name">
              {pulseSave.namePlaceholder}
            </label>
            <input
              className="save__name"
              id="pulse-save-name"
              type="text"
              name="pulse-name"
              maxLength={40}
              autoComplete="name"
              placeholder={pulseSave.namePlaceholder}
              value={pulseSave.name}
              disabled={!pulseSave.canSave}
              onChange={(e) => pulseSave.onNameChange(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  pulseSave.onSave();
                }
              }}
            />
            <button
              type="button"
              className={`btn btn--primary${pulseSave.canSave ? '' : ' is-muted'}`}
              disabled={!pulseSave.canSave || !pulseSave.name.trim()}
              title={!pulseSave.canSave ? pulseSave.needBpm : undefined}
              onMouseDown={(event) => event.preventDefault()}
              onClick={pulseSave.onSave}
            >
              <Save size={17} />
              <span className="btn__label">
                {pulseSave.justSaved ? pulseSave.savedLabel : pulseSave.saveLabel}
              </span>
            </button>
          </div>
        ) : null}
      </div>
    );
  }

  return (
    <div className="controls" role="toolbar" aria-label="BPM controls">
      <button
        type="button"
        className="btn"
        onMouseDown={(event) => event.preventDefault()}
        onClick={onReset}
      >
        <RotateCcw size={16} />
        {labels.reset}
      </button>
      {showFactor ? (
        <>
          <button
            type="button"
            className="btn"
            onMouseDown={(event) => event.preventDefault()}
            onClick={onHalf}
            disabled={!canUseBpm}
          >
            {labels.half}
          </button>
          <button
            type="button"
            className="btn"
            onMouseDown={(event) => event.preventDefault()}
            onClick={onDouble}
            disabled={!canUseBpm}
          >
            {labels.double}
          </button>
        </>
      ) : null}
      <button
        type="button"
        className="btn btn--accent"
        onMouseDown={(event) => event.preventDefault()}
        onClick={onCopy}
        disabled={!canUseBpm}
      >
        <Copy size={16} />
        {copied ? labels.copied : labels.copy}
      </button>
      {showSave && labels.save && labels.saved ? (
        <button
          type="button"
          className={`btn${isFavorite ? ' is-fav' : ''}`}
          onMouseDown={(event) => event.preventDefault()}
          onClick={onToggleFavorite}
          disabled={!canUseBpm && !isFavorite}
          aria-pressed={isFavorite}
          title={isFavorite ? labels.saved : labels.save}
        >
          <Star size={16} fill={isFavorite ? 'currentColor' : 'none'} />
          {isFavorite ? labels.saved : labels.save}
        </button>
      ) : null}
      {showShare ? (
        <button
          type="button"
          className="btn btn--ghost"
          onMouseDown={(event) => event.preventDefault()}
          onClick={onShare}
          disabled={!canUseBpm}
        >
          <Link2 size={16} />
          {labels.share}
        </button>
      ) : null}
    </div>
  );
}
