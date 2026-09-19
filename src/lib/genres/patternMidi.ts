import type { PreviewLane } from '@/lib/genres/patternPreview';
import { PATTERN_STEPS } from '@/content/genrePatterns/types';

/** Ticks per quarter note. A 16th is PPQ / 4 = 24. */
export const MIDI_PPQ = 96;
export const MIDI_TICKS_16TH = MIDI_PPQ / 4;
export const MIDI_TICKS_BAR = MIDI_TICKS_16TH * PATTERN_STEPS;

/** GM drum channel (1-based 10). */
export const MIDI_DRUM_CHANNEL = 9;

/** General MIDI percussion map — C1 kick in Ableton, C3 kick in FL Studio. */
export const GM_DRUM_NOTES = {
  kick: 36,
  clap: 39,
  ch: 42,
  oh: 46,
} as const;

const NOTE_DURATION: Record<keyof typeof GM_DRUM_NOTES, number> = {
  kick: 12,
  clap: 12,
  ch: 8,
  oh: 48,
};

const NOTE_VELOCITY: Record<keyof typeof GM_DRUM_NOTES, number> = {
  kick: 110,
  clap: 100,
  ch: 80,
  oh: 92,
};

export type GmDrumVoice = keyof typeof GM_DRUM_NOTES;

export type PatternMidiLane = PreviewLane;

interface TimedBytes {
  tick: number;
  order: number;
  bytes: number[];
}

function clampBpm(bpm: number): number {
  if (!Number.isFinite(bpm)) return 120;
  return Math.min(300, Math.max(30, Math.round(bpm)));
}

function vlq(value: number): number[] {
  if (!Number.isInteger(value) || value < 0) {
    throw new RangeError(`MIDI VLQ out of range: ${value}`);
  }
  const bytes = [value & 0x7f];
  let rest = value >>> 7;
  while (rest > 0) {
    bytes.unshift((rest & 0x7f) | 0x80);
    rest >>>= 7;
  }
  return bytes;
}

function u16(value: number): number[] {
  return [(value >> 8) & 0xff, value & 0xff];
}

function u32(value: number): number[] {
  return [(value >> 24) & 0xff, (value >> 16) & 0xff, (value >> 8) & 0xff, value & 0xff];
}

function asciiBytes(value: string): number[] {
  return [...value].map((char) => char.charCodeAt(0) & 0x7f);
}

function tempoBytes(bpm: number): number[] {
  const micros = Math.round(60_000_000 / clampBpm(bpm));
  return [(micros >> 16) & 0xff, (micros >> 8) & 0xff, micros & 0xff];
}

function voiceFor(id: string): GmDrumVoice | null {
  if (id === 'kick' || id === 'clap' || id === 'ch' || id === 'oh') return id;
  if (id === 'snare') return 'clap';
  return null;
}

function collectHits(lanes: PatternMidiLane[]): TimedBytes[] {
  const events: TimedBytes[] = [];
  let order = 0;
  for (const lane of lanes) {
    const voice = voiceFor(lane.id);
    if (!voice) continue;
    const note = GM_DRUM_NOTES[voice];
    const duration = NOTE_DURATION[voice];
    const velocity = NOTE_VELOCITY[voice];
    const steps = Array.isArray(lane.steps) ? lane.steps : [];
    steps.forEach((on, index) => {
      if (!on || index >= PATTERN_STEPS) return;
      const start = index * MIDI_TICKS_16TH;
      const end = Math.min(MIDI_TICKS_BAR, start + duration);
      events.push({
        tick: start,
        order: order++,
        bytes: [0x90 | MIDI_DRUM_CHANNEL, note, velocity],
      });
      events.push({
        tick: end,
        order: order++,
        bytes: [0x80 | MIDI_DRUM_CHANNEL, note, 0],
      });
    });
  }
  return events;
}

function encodeTrack(bpm: number, name: string, lanes: PatternMidiLane[]): number[] {
  const title = name.replace(/[^\x20-\x7E]+/g, ' ').trim().slice(0, 32) || 'drum pattern';
  const timed: TimedBytes[] = [
    { tick: 0, order: -4, bytes: [0xff, 0x03, title.length, ...asciiBytes(title)] },
    { tick: 0, order: -3, bytes: [0xff, 0x51, 0x03, ...tempoBytes(bpm)] },
    { tick: 0, order: -2, bytes: [0xff, 0x58, 0x04, 0x04, 0x02, 0x18, 0x08] },
    ...collectHits(lanes),
    { tick: MIDI_TICKS_BAR, order: Number.MAX_SAFE_INTEGER, bytes: [0xff, 0x2f, 0x00] },
  ];

  timed.sort((a, b) => a.tick - b.tick || a.order - b.order);

  const body: number[] = [];
  let lastTick = 0;
  for (const event of timed) {
    body.push(...vlq(event.tick - lastTick), ...event.bytes);
    lastTick = event.tick;
  }
  return body;
}

/** One-bar Type-0 SMF on GM channel 10. Drop the file on a MIDI track. */
export function encodePatternMidi(name: string, bpm: number, lanes: PatternMidiLane[]): Uint8Array {
  const track = encodeTrack(bpm, name, lanes);
  const bytes = [
    ...asciiBytes('MThd'),
    ...u32(6),
    ...u16(0),
    ...u16(1),
    ...u16(MIDI_PPQ),
    ...asciiBytes('MTrk'),
    ...u32(track.length),
    ...track,
  ];
  return Uint8Array.from(bytes);
}

export function midiFilename(id: string, bpm: number): string {
  const slug = id
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 48);
  return `${slug || 'drum-pattern'}-${clampBpm(bpm)}bpm.mid`;
}

function toArrayBuffer(bytes: Uint8Array): ArrayBuffer {
  return bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength) as ArrayBuffer;
}

export function midiBlob(bytes: Uint8Array): Blob {
  return new Blob([toArrayBuffer(bytes)], { type: 'audio/midi' });
}

export function triggerMidiDownload(bytes: Uint8Array, filename: string) {
  const url = URL.createObjectURL(midiBlob(bytes));
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.rel = 'noopener';
  document.body.append(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1500);
}
