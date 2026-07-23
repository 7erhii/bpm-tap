import { describe, expect, it } from 'vitest';
import { noteDurationsFromBpm } from '../../src/lib/delay/noteDurations';

describe('noteDurationsFromBpm', () => {
  it('computes quarter note ms at 120 BPM', () => {
    const rows = noteDurationsFromBpm(120);
    const quarter = rows.find((r) => r.id === 'quarter');
    expect(quarter?.ms).toBe(500);
  });

  it('includes dotted and triplet variants', () => {
    const rows = noteDurationsFromBpm(120);
    expect(rows.some((r) => r.id === 'quarter-dotted')).toBe(true);
    expect(rows.some((r) => r.id === 'quarter-triplet')).toBe(true);
  });
});
