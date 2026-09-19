import { PATTERN_STEPS } from './types';

/** 1-based step numbers → 16-length hit mask. */
export function hits(...steps: number[]): boolean[] {
  const grid = Array.from({ length: PATTERN_STEPS }, () => false);
  for (const step of steps) {
    if (step < 1 || step > PATTERN_STEPS) {
      throw new RangeError(`Step ${step} is outside 1–${PATTERN_STEPS}`);
    }
    grid[step - 1] = true;
  }
  return grid;
}
