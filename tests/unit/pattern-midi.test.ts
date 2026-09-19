import { describe, expect, it } from 'vitest';
import { getGenrePatternSet, hits } from '../../src/content/genrePatterns';
import { genreCatalog } from '../../src/lib/genres/catalog';
import { suggestedBpmForGenre } from '../../src/lib/genres/match';
import {
  encodePatternMidi,
  GM_DRUM_NOTES,
  midiFilename,
  MIDI_PPQ,
  MIDI_TICKS_BAR,
} from '../../src/lib/genres/patternMidi';

const houseFloor = [
  { id: 'kick', name: 'Kick', steps: hits(1, 5, 9, 13) },
  { id: 'clap', name: 'Clap', steps: hits(5, 13) },
  { id: 'ch', name: 'Closed hat', steps: hits(3, 7, 11) },
  { id: 'oh', name: 'Open hat', steps: hits(15) },
];

function countNoteOns(bytes: Uint8Array, note: number): number {
  let count = 0;
  for (let i = 0; i < bytes.length - 2; i += 1) {
    if (bytes[i] === 0x99 && bytes[i + 1] === note && bytes[i + 2] > 0) count += 1;
  }
  return count;
}

describe('pattern MIDI', () => {
  it('writes a type-0 one-bar SMF with GM drum notes', () => {
    const bytes = encodePatternMidi('Four-on-the-floor', 125, houseFloor);
    const header = String.fromCharCode(...bytes.slice(0, 4));
    const track = String.fromCharCode(...bytes.slice(14, 18));
    expect(header).toBe('MThd');
    expect(track).toBe('MTrk');
    expect((bytes[8] << 8) | bytes[9]).toBe(0);
    expect((bytes[10] << 8) | bytes[11]).toBe(1);
    expect((bytes[12] << 8) | bytes[13]).toBe(MIDI_PPQ);
    expect(countNoteOns(bytes, GM_DRUM_NOTES.kick)).toBe(4);
    expect(countNoteOns(bytes, GM_DRUM_NOTES.clap)).toBe(2);
    expect(countNoteOns(bytes, GM_DRUM_NOTES.ch)).toBe(3);
    expect(countNoteOns(bytes, GM_DRUM_NOTES.oh)).toBe(1);
    expect(bytes.slice(-3)).toEqual(Uint8Array.from([0xff, 0x2f, 0x00]));
  });

  it('names the file from the pattern id and tempo', () => {
    expect(midiFilename('house-four-on-the-floor', 125)).toBe('house-four-on-the-floor-125bpm.mid');
    expect(midiFilename('drum-and-bass-breakbeat', 170)).toBe('drum-and-bass-breakbeat-170bpm.mid');
  });

  it('encodes every catalog genre pattern as a one-bar SMF', () => {
    for (const genre of genreCatalog) {
      const set = getGenrePatternSet(genre.slug, 'en');
      expect(set, genre.slug).not.toBeNull();
      const bpm = suggestedBpmForGenre(genre);
      for (const pattern of set?.patterns ?? []) {
        const bytes = encodePatternMidi(pattern.name, bpm, pattern.lanes);
        expect(String.fromCharCode(...bytes.slice(0, 4)), pattern.id).toBe('MThd');
        expect(countNoteOns(bytes, GM_DRUM_NOTES.kick) + countNoteOns(bytes, GM_DRUM_NOTES.clap) + countNoteOns(bytes, GM_DRUM_NOTES.ch) + countNoteOns(bytes, GM_DRUM_NOTES.oh), pattern.id).toBeGreaterThan(0);
        expect(midiFilename(pattern.id, bpm)).toMatch(/\.mid$/);
      }
    }
  });

  it('keeps the clip exactly one bar long', () => {
    expect(MIDI_TICKS_BAR).toBe(384);
  });
});
