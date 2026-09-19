import type { GenrePatternGridMap } from './types';
import { hits } from './hits';

/**
 * Language-independent 16-step drum grids. Lane ids must be kick | clap | ch | oh.
 * House four-on-the-floor + disco skip are the approved prototype — do not change them.
 */
export const GRIDS: GenrePatternGridMap = {
  house: {
    patterns: [
      {
        id: 'house-four-on-the-floor',
        lanes: [
          { id: 'kick', steps: hits(1, 5, 9, 13) },
          { id: 'clap', steps: hits(5, 13) },
          { id: 'ch', steps: hits(3, 7, 11) },
          { id: 'oh', steps: hits(15) },
        ],
      },
      {
        id: 'house-disco-skip',
        lanes: [
          { id: 'kick', steps: hits(1, 4, 5, 9, 12, 13) },
          { id: 'clap', steps: hits(5, 13) },
          { id: 'ch', steps: hits(1, 3, 5, 7, 9, 11, 13, 15) },
          { id: 'oh', steps: hits(8, 16) },
        ],
      },
    ],
  },
  // techno
  techno: {
    patterns: [
      {
        id: 'techno-four-floor',
        lanes: [
          { id: 'kick', steps: hits(1, 5, 9, 13) },
          { id: 'clap', steps: hits(5, 13) },
          { id: 'ch', steps: hits(1, 3, 5, 7, 9, 11, 13) },
          { id: 'oh', steps: hits(15) },
        ],
      },
      {
        id: 'techno-offbeat',
        lanes: [
          { id: 'kick', steps: hits(1, 5, 9, 13) },
          { id: 'clap', steps: hits(5, 13) },
          { id: 'ch', steps: hits(2, 4, 6, 8, 10, 12, 14, 16) },
          { id: 'oh', steps: hits(3, 7, 11, 15) },
        ],
      },
    ],
  },
  // trance
  trance: {
    patterns: [
      {
        id: 'trance-four',
        lanes: [
          { id: 'kick', steps: hits(1, 5, 9, 13) },
          { id: 'clap', steps: hits(5, 13) },
          { id: 'ch', steps: hits(3, 7, 11, 15) },
          { id: 'oh', steps: hits(8, 16) },
        ],
      },
      {
        id: 'trance-build',
        lanes: [
          { id: 'kick', steps: hits(1, 5, 9, 13) },
          { id: 'clap', steps: hits(5, 13, 14, 15, 16) },
          { id: 'ch', steps: hits(1, 3, 5, 7, 9, 11, 13) },
          { id: 'oh', steps: hits(15) },
        ],
      },
    ],
  },
  // drum-and-bass
  'drum-and-bass': {
    patterns: [
      {
        id: 'dnb-two-step',
        lanes: [
          { id: 'kick', steps: hits(1, 11) },
          { id: 'clap', steps: hits(9) },
          { id: 'ch', steps: hits(1, 3, 5, 7, 9, 11, 13, 15) },
          { id: 'oh', steps: hits(8, 16) },
        ],
      },
      {
        id: 'dnb-amen',
        lanes: [
          { id: 'kick', steps: hits(1, 3, 8, 11) },
          { id: 'clap', steps: hits(5, 9, 13) },
          { id: 'ch', steps: hits(1, 3, 5, 7, 9, 11, 13, 15) },
          { id: 'oh', steps: hits(4, 12) },
        ],
      },
    ],
  },
  // dubstep
  dubstep: {
    patterns: [
      {
        id: 'dubstep-half',
        lanes: [
          { id: 'kick', steps: hits(1) },
          { id: 'clap', steps: hits(9) },
          { id: 'ch', steps: hits(1, 5, 9, 13) },
          { id: 'oh', steps: hits(7, 15) },
        ],
      },
      {
        id: 'dubstep-wobble',
        lanes: [
          { id: 'kick', steps: hits(1, 7, 11) },
          { id: 'clap', steps: hits(9) },
          { id: 'ch', steps: hits(3, 7, 11, 15) },
          { id: 'oh', steps: hits(16) },
        ],
      },
    ],
  },
  // trap
  trap: {
    patterns: [
      {
        id: 'trap-bounce',
        lanes: [
          { id: 'kick', steps: hits(1, 8, 11) },
          { id: 'clap', steps: hits(5, 13) },
          { id: 'ch', steps: hits(1, 3, 5, 7, 9, 11, 13, 14, 15, 16) },
          { id: 'oh', steps: hits(12) },
        ],
      },
      {
        id: 'trap-808',
        lanes: [
          { id: 'kick', steps: hits(1, 4, 7, 11, 14) },
          { id: 'clap', steps: hits(5, 13) },
          { id: 'ch', steps: hits(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16) },
          { id: 'oh', steps: hits(8) },
        ],
      },
    ],
  },
  // hip-hop
  'hip-hop': {
    patterns: [
      {
        id: 'hiphop-boom-bap',
        lanes: [
          { id: 'kick', steps: hits(1, 11) },
          { id: 'clap', steps: hits(5, 13) },
          { id: 'ch', steps: hits(1, 3, 5, 7, 9, 11, 13, 15) },
          { id: 'oh', steps: hits(8, 16) },
        ],
      },
      {
        id: 'hiphop-bounce',
        lanes: [
          { id: 'kick', steps: hits(1, 8, 9, 16) },
          { id: 'clap', steps: hits(5, 13) },
          { id: 'ch', steps: hits(3, 7, 11, 15) },
          { id: 'oh', steps: hits(14) },
        ],
      },
    ],
  },
  // pop
  pop: {
    patterns: [
      {
        id: 'pop-backbeat',
        lanes: [
          { id: 'kick', steps: hits(1, 8, 9) },
          { id: 'clap', steps: hits(5, 13) },
          { id: 'ch', steps: hits(1, 3, 5, 7, 9, 11, 13, 15) },
          { id: 'oh', steps: hits(12, 16) },
        ],
      },
      {
        id: 'pop-four',
        lanes: [
          { id: 'kick', steps: hits(1, 5, 9, 13) },
          { id: 'clap', steps: hits(5, 13) },
          { id: 'ch', steps: hits(3, 7, 11, 15) },
          { id: 'oh', steps: hits(8) },
        ],
      },
    ],
  },
  // rock
  rock: {
    patterns: [
      {
        id: 'rock-backbeat',
        lanes: [
          { id: 'kick', steps: hits(1, 9) },
          { id: 'clap', steps: hits(5, 13) },
          { id: 'ch', steps: hits(1, 3, 5, 7, 9, 11, 13, 15) },
          { id: 'oh', steps: hits(16) },
        ],
      },
      {
        id: 'rock-drive',
        lanes: [
          { id: 'kick', steps: hits(1, 8, 9, 16) },
          { id: 'clap', steps: hits(5, 13) },
          { id: 'ch', steps: hits(1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15) },
          { id: 'oh', steps: hits(8, 16) },
        ],
      },
    ],
  },
  // metal
  metal: {
    patterns: [
      {
        id: 'metal-double',
        lanes: [
          { id: 'kick', steps: hits(1, 3, 5, 7, 9, 11, 13, 15) },
          { id: 'clap', steps: hits(5, 13) },
          { id: 'ch', steps: hits(1, 3, 5, 7, 9, 11, 13, 15) },
          { id: 'oh', steps: hits(16) },
        ],
      },
      {
        id: 'metal-gallop',
        lanes: [
          { id: 'kick', steps: hits(1, 2, 4, 5, 6, 8, 9, 10, 12, 13, 14, 16) },
          { id: 'clap', steps: hits(5, 13) },
          { id: 'ch', steps: hits(1, 3, 5, 7, 9, 11, 13, 15) },
          { id: 'oh', steps: hits(8) },
        ],
      },
    ],
  },
  // lo-fi
  'lo-fi': {
    patterns: [
      {
        id: 'lofi-dusty',
        lanes: [
          { id: 'kick', steps: hits(1, 10) },
          { id: 'clap', steps: hits(5, 13) },
          { id: 'ch', steps: hits(3, 7, 11, 15) },
          { id: 'oh', steps: hits(8) },
        ],
      },
      {
        id: 'lofi-lazy',
        lanes: [
          { id: 'kick', steps: hits(1, 7, 11) },
          { id: 'clap', steps: hits(5, 13) },
          { id: 'ch', steps: hits(1, 5, 9, 13) },
          { id: 'oh', steps: hits(16) },
        ],
      },
    ],
  },
  // ambient
  ambient: {
    patterns: [
      {
        id: 'ambient-pulse',
        lanes: [
          { id: 'kick', steps: hits(1) },
          { id: 'clap', steps: hits() },
          { id: 'ch', steps: hits(9) },
          { id: 'oh', steps: hits(16) },
        ],
      },
      {
        id: 'ambient-wide',
        lanes: [
          { id: 'kick', steps: hits(1, 13) },
          { id: 'clap', steps: hits(9) },
          { id: 'ch', steps: hits(5) },
          { id: 'oh', steps: hits(8, 16) },
        ],
      },
    ],
  },
  // reggaeton
  reggaeton: {
    patterns: [
      {
        id: 'reggaeton-dembow',
        lanes: [
          { id: 'kick', steps: hits(1, 7, 11) },
          { id: 'clap', steps: hits(5, 13) },
          { id: 'ch', steps: hits(3, 8, 11, 15) },
          { id: 'oh', steps: hits(16) },
        ],
      },
      {
        id: 'reggaeton-bounce',
        lanes: [
          { id: 'kick', steps: hits(1, 8, 11, 14) },
          { id: 'clap', steps: hits(5, 13) },
          { id: 'ch', steps: hits(1, 3, 5, 7, 9, 11, 13, 15) },
          { id: 'oh', steps: hits(4, 12) },
        ],
      },
    ],
  },
  // afrobeat
  afrobeat: {
    patterns: [
      {
        id: 'afrobeat-clave',
        lanes: [
          { id: 'kick', steps: hits(1, 6, 9, 11) },
          { id: 'clap', steps: hits(5, 13) },
          { id: 'ch', steps: hits(1, 3, 4, 7, 9, 11, 12, 15) },
          { id: 'oh', steps: hits(8, 16) },
        ],
      },
      {
        id: 'afrobeat-highlife',
        lanes: [
          { id: 'kick', steps: hits(1, 4, 9, 12) },
          { id: 'clap', steps: hits(5, 13) },
          { id: 'ch', steps: hits(2, 4, 6, 8, 10, 12, 14, 16) },
          { id: 'oh', steps: hits(7, 15) },
        ],
      },
    ],
  },
  // jersey-club
  'jersey-club': {
    patterns: [
      {
        id: 'jersey-kick',
        lanes: [
          { id: 'kick', steps: hits(1, 4, 7, 10, 13) },
          { id: 'clap', steps: hits(5, 13) },
          { id: 'ch', steps: hits(3, 7, 11, 15) },
          { id: 'oh', steps: hits(8, 16) },
        ],
      },
      {
        id: 'jersey-bounce',
        lanes: [
          { id: 'kick', steps: hits(1, 3, 7, 9, 13, 15) },
          { id: 'clap', steps: hits(5, 13) },
          { id: 'ch', steps: hits(2, 4, 6, 8, 10, 12, 14, 16) },
          { id: 'oh', steps: hits(11) },
        ],
      },
    ],
  },
  // phonk
  phonk: {
    patterns: [
      {
        id: 'phonk-memphis',
        lanes: [
          { id: 'kick', steps: hits(1, 8, 11) },
          { id: 'clap', steps: hits(5, 13) },
          { id: 'ch', steps: hits(1, 3, 5, 7, 9, 11, 13, 15) },
          { id: 'oh', steps: hits(4, 12) },
        ],
      },
      {
        id: 'phonk-drift',
        lanes: [
          { id: 'kick', steps: hits(1, 5, 9, 13) },
          { id: 'clap', steps: hits(5, 13) },
          { id: 'ch', steps: hits(3, 7, 11, 15) },
          { id: 'oh', steps: hits(8, 16) },
        ],
      },
    ],
  },
  // hardstyle
  hardstyle: {
    patterns: [
      {
        id: 'hardstyle-kick',
        lanes: [
          { id: 'kick', steps: hits(1, 5, 9, 13) },
          { id: 'clap', steps: hits(5, 13) },
          { id: 'ch', steps: hits(3, 7, 11) },
          { id: 'oh', steps: hits(15) },
        ],
      },
      {
        id: 'hardstyle-hats',
        lanes: [
          { id: 'kick', steps: hits(1, 5, 9, 13) },
          { id: 'clap', steps: hits(5, 13) },
          { id: 'ch', steps: hits(1, 2, 3, 4, 9, 10, 11, 12) },
          { id: 'oh', steps: hits(8, 16) },
        ],
      },
    ],
  },
  // jazz
  jazz: {
    patterns: [
      {
        id: 'jazz-ride',
        lanes: [
          { id: 'kick', steps: hits(1, 11) },
          { id: 'clap', steps: hits(5, 13) },
          { id: 'ch', steps: hits(1, 3, 5, 7, 9, 11, 13, 15) },
          { id: 'oh', steps: hits(4, 8, 12, 16) },
        ],
      },
      {
        id: 'jazz-ballad',
        lanes: [
          { id: 'kick', steps: hits(1) },
          { id: 'clap', steps: hits(9) },
          { id: 'ch', steps: hits(5, 13) },
          { id: 'oh', steps: hits(16) },
        ],
      },
    ],
  },
  // salsa
  salsa: {
    patterns: [
      {
        id: 'salsa-tumbao',
        lanes: [
          { id: 'kick', steps: hits(1, 8, 9) },
          { id: 'clap', steps: hits(5, 13) },
          { id: 'ch', steps: hits(1, 4, 7, 9, 12, 15) },
          { id: 'oh', steps: hits(3, 11) },
        ],
      },
      {
        id: 'salsa-mambo',
        lanes: [
          { id: 'kick', steps: hits(1, 9) },
          { id: 'clap', steps: hits(5, 8, 13, 16) },
          { id: 'ch', steps: hits(3, 7, 11, 15) },
          { id: 'oh', steps: hits(6, 14) },
        ],
      },
    ],
  },
  // bachata
  bachata: {
    patterns: [
      {
        id: 'bachata-basic',
        lanes: [
          { id: 'kick', steps: hits(1, 5, 9) },
          { id: 'clap', steps: hits(13) },
          { id: 'ch', steps: hits(1, 3, 5, 7, 9, 11, 13, 15) },
          { id: 'oh', steps: hits(16) },
        ],
      },
      {
        id: 'bachata-sync',
        lanes: [
          { id: 'kick', steps: hits(1, 5, 8, 9) },
          { id: 'clap', steps: hits(13) },
          { id: 'ch', steps: hits(3, 7, 11, 15) },
          { id: 'oh', steps: hits(12, 16) },
        ],
      },
    ],
  },
  // gospel
  gospel: {
    patterns: [
      {
        id: 'gospel-clap',
        lanes: [
          { id: 'kick', steps: hits(1, 8, 9) },
          { id: 'clap', steps: hits(5, 13) },
          { id: 'ch', steps: hits(1, 3, 5, 7, 9, 11, 13, 15) },
          { id: 'oh', steps: hits(16) },
        ],
      },
      {
        id: 'gospel-shout',
        lanes: [
          { id: 'kick', steps: hits(1, 4, 7, 9, 12, 15) },
          { id: 'clap', steps: hits(5, 13) },
          { id: 'ch', steps: hits(3, 7, 11, 15) },
          { id: 'oh', steps: hits(8, 16) },
        ],
      },
    ],
  },
  // country
  country: {
    patterns: [
      {
        id: 'country-train',
        lanes: [
          { id: 'kick', steps: hits(1, 9) },
          { id: 'clap', steps: hits(5, 13) },
          { id: 'ch', steps: hits(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16) },
          { id: 'oh', steps: hits() },
        ],
      },
      {
        id: 'country-two-step',
        lanes: [
          { id: 'kick', steps: hits(1, 11) },
          { id: 'clap', steps: hits(5, 13) },
          { id: 'ch', steps: hits(1, 3, 5, 7, 9, 11, 13, 15) },
          { id: 'oh', steps: hits(8, 16) },
        ],
      },
    ],
  },
};
