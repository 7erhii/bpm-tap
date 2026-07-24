import { Copy, Expand, Link2, RotateCcw, Shrink, Star } from './icons';

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
  };
  canUseBpm: boolean;
  copied: boolean;
  fullscreen: boolean;
  showSave?: boolean;
  showFactor?: boolean;
  isFavorite?: boolean;
  onReset: () => void;
  onHalf: () => void;
  onDouble: () => void;
  onCopy: () => void;
  onShare: () => void;
  onToggleFullscreen: () => void;
  onToggleFavorite?: () => void;
}

export function PrimaryControls({
  labels,
  canUseBpm,
  copied,
  fullscreen,
  showSave = false,
  showFactor = true,
  isFavorite = false,
  onReset,
  onHalf,
  onDouble,
  onCopy,
  onShare,
  onToggleFullscreen,
  onToggleFavorite,
}: Props) {
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
      <button
        type="button"
        className="btn btn--ghost"
        onMouseDown={(event) => event.preventDefault()}
        onClick={onToggleFullscreen}
      >
        {fullscreen ? <Shrink size={16} /> : <Expand size={16} />}
        {fullscreen ? labels.exitFullscreen : labels.fullscreen}
      </button>
    </div>
  );
}
