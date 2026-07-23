export type NoteKind = 'straight' | 'dotted' | 'triplet';

export interface NoteDuration {
  id: string;
  labelKey: string;
  kind: NoteKind;
  division: number;
  ms: number;
}

const baseNotes = [
  { id: 'whole', labelKey: 'note.whole', division: 1 },
  { id: 'half', labelKey: 'note.half', division: 2 },
  { id: 'quarter', labelKey: 'note.quarter', division: 4 },
  { id: 'eighth', labelKey: 'note.eighth', division: 8 },
  { id: 'sixteenth', labelKey: 'note.sixteenth', division: 16 },
];

function roundMs(ms: number): number {
  return Math.round(ms * 10) / 10;
}

export function noteDurationsFromBpm(bpm: number): NoteDuration[] {
  if (!Number.isFinite(bpm) || bpm <= 0) return [];
  const quarter = 60000 / bpm;
  const whole = quarter * 4;
  const out: NoteDuration[] = [];

  for (const note of baseNotes) {
    const straight = whole / note.division;
    out.push({
      id: note.id,
      labelKey: note.labelKey,
      kind: 'straight',
      division: note.division,
      ms: roundMs(straight),
    });
    out.push({
      id: `${note.id}-dotted`,
      labelKey: `${note.labelKey}.dotted`,
      kind: 'dotted',
      division: note.division,
      ms: roundMs(straight * 1.5),
    });
    out.push({
      id: `${note.id}-triplet`,
      labelKey: `${note.labelKey}.triplet`,
      kind: 'triplet',
      division: note.division,
      ms: roundMs(straight * (2 / 3)),
    });
  }

  return out;
}
