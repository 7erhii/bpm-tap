import { useEffect, useRef, useState } from 'react';
import { Check, MusicNote, Pause, Play } from '@/components/tool/icons';
import {
  encodePatternMidi,
  midiBlob,
  midiFilename,
  triggerMidiDownload,
} from '@/lib/genres/patternMidi';
import {
  isPatternPreviewRunning,
  startPatternPreview,
  stopPatternPreview,
  subscribePatternPreview,
  type PreviewLane,
} from '@/lib/genres/patternPreview';
import './genre-pattern-play.css';

interface Props {
  id: string;
  name: string;
  bpm: number;
  lanes: PreviewLane[];
  playLabel?: string;
  stopLabel?: string;
  playAria?: string;
  stopAria?: string;
  midiLabel?: string;
  midiDone?: string;
  midiAria?: string;
}

export default function GenrePatternPlay({
  id,
  name,
  bpm,
  lanes,
  playLabel = 'Play',
  stopLabel = 'Stop',
  playAria,
  stopAria,
  midiLabel = 'MIDI',
  midiDone = 'Saved .mid',
  midiAria,
}: Props) {
  const btnRef = useRef<HTMLButtonElement>(null);
  const [playing, setPlaying] = useState(false);
  const [midiSaved, setMidiSaved] = useState(false);

  useEffect(() => {
    const paint = (step: number | null) => {
      const root = btnRef.current?.closest<HTMLElement>('.pattern');
      if (!root) return;
      root.classList.toggle('is-playing', step != null);
      root.querySelectorAll<HTMLElement>('[data-step]').forEach((cell) => {
        cell.classList.toggle('is-now', step != null && Number(cell.dataset.step) === step);
      });
    };

    const unsub = subscribePatternPreview((state) => {
      const active = state.id === id;
      setPlaying(active);
      paint(active ? state.step : null);
    });

    return () => {
      unsub();
      if (isPatternPreviewRunning(id)) stopPatternPreview();
      paint(null);
    };
  }, [id]);

  async function toggle() {
    if (playing) {
      stopPatternPreview();
      return;
    }
    await startPatternPreview(id, bpm, lanes);
  }

  function midiFile() {
    return {
      bytes: encodePatternMidi(name, bpm, lanes),
      filename: midiFilename(id, bpm),
    };
  }

  function downloadMidi() {
    const file = midiFile();
    triggerMidiDownload(file.bytes, file.filename);
    setMidiSaved(true);
    window.setTimeout(() => setMidiSaved(false), 2200);
  }

  function onMidiDragStart(event: React.DragEvent<HTMLButtonElement>) {
    const file = midiFile();
    const blobFile = new File([midiBlob(file.bytes)], file.filename, { type: 'audio/midi' });
    const url = URL.createObjectURL(blobFile);
    event.dataTransfer.effectAllowed = 'copy';
    event.dataTransfer.setData('text/plain', file.filename);
    event.dataTransfer.setData('text/uri-list', url);
    event.dataTransfer.setData('DownloadURL', `audio/midi:${file.filename}:${url}`);
    try {
      event.dataTransfer.items.add(blobFile);
    } catch {
      /* some browsers only accept DownloadURL */
    }
    event.currentTarget.addEventListener('dragend', () => URL.revokeObjectURL(url), { once: true });
  }

  return (
    <div className="pattern-actions">
      <button
        ref={btnRef}
        type="button"
        className="pattern-play"
        aria-pressed={playing}
        aria-label={playing ? (stopAria ?? `Stop ${name} preview`) : (playAria ?? `Play ${name} at ${bpm} BPM`)}
        onClick={() => void toggle()}
      >
        {playing ? <Pause /> : <Play />}
        <span>{playing ? stopLabel : playLabel}</span>
      </button>

      <button
        type="button"
        className="pattern-daw pattern-daw--midi"
        draggable
        aria-label={midiAria ?? `Download ${name} MIDI clip`}
        title="Download or drag onto a MIDI track"
        onClick={downloadMidi}
        onDragStart={onMidiDragStart}
      >
        {midiSaved ? <Check /> : <MusicNote />}
        <span>{midiSaved ? midiDone : midiLabel}</span>
      </button>
    </div>
  );
}
