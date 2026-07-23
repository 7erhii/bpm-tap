export type TimeSignatureId =
  | '4/4'
  | '3/4'
  | '2/4'
  | '5/4'
  | '6/8'
  | '7/8'
  | '9/8'
  | '12/8';

export interface Meter {
  id: TimeSignatureId;
  beatsPerBar: number;
  /** Beat indices (0-based) that get accent clicks */
  accents: number[];
}

export const METERS: Meter[] = [
  { id: '4/4', beatsPerBar: 4, accents: [0] },
  { id: '3/4', beatsPerBar: 3, accents: [0] },
  { id: '2/4', beatsPerBar: 2, accents: [0] },
  { id: '5/4', beatsPerBar: 5, accents: [0] },
  { id: '6/8', beatsPerBar: 6, accents: [0, 3] },
  { id: '7/8', beatsPerBar: 7, accents: [0, 3] },
  { id: '9/8', beatsPerBar: 9, accents: [0, 3, 6] },
  { id: '12/8', beatsPerBar: 12, accents: [0, 3, 6, 9] },
];

export function getMeter(id: TimeSignatureId): Meter {
  return METERS.find((m) => m.id === id) ?? METERS[0];
}

export type BeatCallback = (beatIndex: number, accent: boolean) => void;

export interface MetronomeHandle {
  start: (bpm: number, meterId?: TimeSignatureId) => Promise<void>;
  stop: () => void;
  setBpm: (bpm: number) => void;
  setMeter: (meterId: TimeSignatureId) => void;
  setOnBeat: (cb: BeatCallback | null) => void;
  isRunning: () => boolean;
}

export function createMetronome(): MetronomeHandle {
  let ctx: AudioContext | null = null;
  let timer: number | null = null;
  let nextNoteTime = 0;
  let currentBpm = 120;
  let meter = getMeter('4/4');
  let beatInBar = 0;
  let running = false;
  let onBeat: BeatCallback | null = null;
  const scheduleAhead = 0.1;
  const lookAheadMs = 25;

  function ensureContext() {
    if (!ctx) ctx = new AudioContext();
    return ctx;
  }

  function scheduleClick(time: number, accent: boolean) {
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.frequency.value = accent ? 1400 : 900;
    const peak = accent ? 0.42 : 0.22;
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.exponentialRampToValueAtTime(peak, time + 0.001);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + (accent ? 0.07 : 0.045));
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(time);
    osc.stop(time + 0.08);
  }

  function scheduler() {
    if (!ctx || !running) return;
    const secondsPerBeat = 60 / currentBpm;
    while (nextNoteTime < ctx.currentTime + scheduleAhead) {
      const index = beatInBar % meter.beatsPerBar;
      const isAccent = meter.accents.includes(index);
      scheduleClick(nextNoteTime, isAccent);
      const delayMs = Math.max(0, (nextNoteTime - ctx.currentTime) * 1000);
      const beatIndex = index;
      const accentFlag = isAccent;
      window.setTimeout(() => onBeat?.(beatIndex, accentFlag), delayMs);
      nextNoteTime += secondsPerBeat;
      beatInBar += 1;
    }
    timer = window.setTimeout(scheduler, lookAheadMs);
  }

  return {
    async start(bpm: number, meterId: TimeSignatureId = meter.id) {
      const audio = ensureContext();
      if (audio.state === 'suspended') await audio.resume();
      currentBpm = Math.max(30, Math.min(300, bpm));
      meter = getMeter(meterId);
      beatInBar = 0;
      running = true;
      nextNoteTime = audio.currentTime + 0.05;
      if (timer != null) window.clearTimeout(timer);
      scheduler();
    },
    stop() {
      running = false;
      beatInBar = 0;
      if (timer != null) {
        window.clearTimeout(timer);
        timer = null;
      }
    },
    setBpm(bpm: number) {
      currentBpm = Math.max(30, Math.min(300, bpm));
    },
    setMeter(meterId: TimeSignatureId) {
      meter = getMeter(meterId);
      beatInBar = 0;
    },
    setOnBeat(cb) {
      onBeat = cb;
    },
    isRunning: () => running,
  };
}
