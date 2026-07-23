import { useEffect, useId, useRef, useState } from 'react';
import type { FavoritePreset } from '@/lib/favorites/storage';
import { METERS, type TimeSignatureId } from '@/lib/metronome/scheduler';
import { Check, X } from './icons';

interface Props {
  favorites: FavoritePreset[];
  currentBpm: number | null;
  currentMeter: TimeSignatureId;
  labels: {
    title: string;
    empty: string;
    edit: string;
    done: string;
    remove: string;
    saveEdit: string;
    bpm: string;
    meter: string;
    manageHint: string;
  };
  onSelect: (preset: FavoritePreset) => void;
  onRemove: (preset: FavoritePreset) => void;
  onUpdate: (from: FavoritePreset, to: FavoritePreset) => void;
}

function presetKey(preset: FavoritePreset): string {
  return `${preset.bpm}-${preset.meter}`;
}

export function FavoritesBar({
  favorites,
  currentBpm,
  currentMeter,
  labels,
  onSelect,
  onRemove,
  onUpdate,
}: Props) {
  const [managing, setManaging] = useState(false);
  const [editingKey, setEditingKey] = useState<string | null>(null);
  const [draftBpm, setDraftBpm] = useState('');
  const [draftMeter, setDraftMeter] = useState<TimeSignatureId>('4/4');
  const bpmFieldId = useId();
  const longPressTimer = useRef<number | null>(null);
  const longPressed = useRef(false);

  useEffect(() => {
    if (favorites.length === 0) {
      setManaging(false);
      setEditingKey(null);
    }
  }, [favorites.length]);

  useEffect(() => {
    if (!managing) setEditingKey(null);
  }, [managing]);

  const clearLongPress = () => {
    if (longPressTimer.current != null) {
      window.clearTimeout(longPressTimer.current);
      longPressTimer.current = null;
    }
  };

  const beginEdit = (preset: FavoritePreset) => {
    setManaging(true);
    setEditingKey(presetKey(preset));
    setDraftBpm(String(preset.bpm));
    setDraftMeter(preset.meter);
  };

  const commitEdit = (from: FavoritePreset) => {
    const bpm = Math.round(Number(draftBpm));
    if (!Number.isFinite(bpm) || bpm < 30 || bpm > 300) return;
    onUpdate(from, { bpm, meter: draftMeter });
    setEditingKey(null);
  };

  return (
    <section className={`favorites panel${managing ? ' is-managing' : ''}`}>
      <div className="favorites__head">
        <h2>{labels.title}</h2>
        {favorites.length > 0 ? (
          <button
            type="button"
            className={`favorites__mode${managing ? ' is-active' : ''}`}
            onClick={() => setManaging((v) => !v)}
            aria-pressed={managing}
          >
            {managing ? labels.done : labels.edit}
          </button>
        ) : null}
      </div>

      {favorites.length === 0 ? (
        <p className="muted">{labels.empty}</p>
      ) : (
        <>
          {managing ? <p className="favorites__hint muted">{labels.manageHint}</p> : null}
          <div className="favorites__chips" role={managing ? 'list' : undefined}>
            {favorites.map((preset) => {
              const key = presetKey(preset);
              const active =
                currentBpm != null &&
                Math.round(currentBpm) === preset.bpm &&
                currentMeter === preset.meter;
              const isEditing = managing && editingKey === key;

              if (isEditing) {
                return (
                  <form
                    key={key}
                    className="fav-editor"
                    role="listitem"
                    onSubmit={(event) => {
                      event.preventDefault();
                      commitEdit(preset);
                    }}
                  >
                    <label className="fav-editor__bpm" htmlFor={bpmFieldId}>
                      <span className="sr-only">{labels.bpm}</span>
                      <input
                        id={bpmFieldId}
                        type="number"
                        inputMode="numeric"
                        min={30}
                        max={300}
                        value={draftBpm}
                        onChange={(event) => setDraftBpm(event.target.value)}
                        autoFocus
                      />
                    </label>
                    <label className="fav-editor__meter">
                      <span className="sr-only">{labels.meter}</span>
                      <select
                        value={draftMeter}
                        onChange={(event) =>
                          setDraftMeter(event.target.value as TimeSignatureId)
                        }
                      >
                        {METERS.map((meter) => (
                          <option key={meter.id} value={meter.id}>
                            {meter.id}
                          </option>
                        ))}
                      </select>
                    </label>
                    <button
                      type="submit"
                      className="fav-editor__btn fav-editor__btn--save"
                      aria-label={labels.saveEdit}
                      title={labels.saveEdit}
                    >
                      <Check size={15} />
                    </button>
                    <button
                      type="button"
                      className="fav-editor__btn fav-editor__btn--remove"
                      aria-label={labels.remove}
                      title={labels.remove}
                      onClick={() => {
                        onRemove(preset);
                        setEditingKey(null);
                      }}
                    >
                      <X size={15} />
                    </button>
                  </form>
                );
              }

              return (
                <div
                  key={key}
                  className={`fav-chip-wrap${managing ? ' is-managing' : ''}${active ? ' is-active' : ''}`}
                  role={managing ? 'listitem' : undefined}
                >
                  <button
                    type="button"
                    className={`fav-chip${active ? ' is-active' : ''}${managing ? ' is-managing' : ''}`}
                    onClick={() => {
                      if (longPressed.current) {
                        longPressed.current = false;
                        return;
                      }
                      if (managing) beginEdit(preset);
                      else onSelect(preset);
                    }}
                    onPointerDown={() => {
                      if (managing) return;
                      longPressed.current = false;
                      clearLongPress();
                      longPressTimer.current = window.setTimeout(() => {
                        longPressed.current = true;
                        beginEdit(preset);
                      }, 480);
                    }}
                    onPointerUp={clearLongPress}
                    onPointerLeave={clearLongPress}
                    onPointerCancel={clearLongPress}
                    onContextMenu={(event) => {
                      event.preventDefault();
                      beginEdit(preset);
                    }}
                  >
                    <span className="fav-chip__bpm">{preset.bpm}</span>
                    <span className="fav-chip__meter">{preset.meter}</span>
                  </button>
                  {managing ? (
                    <button
                      type="button"
                      className="fav-chip__remove"
                      aria-label={`${labels.remove} ${preset.bpm} ${preset.meter}`}
                      onClick={() => onRemove(preset)}
                    >
                      <X size={12} />
                    </button>
                  ) : null}
                </div>
              );
            })}
          </div>
        </>
      )}
    </section>
  );
}
