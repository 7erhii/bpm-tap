import type { GenrePatternCopyMap } from '../types';

export const en: GenrePatternCopyMap = {
  house: {
    title: 'House rhythm · 16-step drum pattern',
    lead: 'BPM is only how fast. Next is the beat: a typical house drum pattern you can program in any DAW — kick, clap, hats, one bar of 16ths.',
    disclaimer: 'Popular starting grids — don’t freeze on them. House lives in the skip and the hats, not in copying this 1:1.',
    faqs: [
      {
        q: 'What is a typical house rhythm?',
        a: 'Most house sits on a four-on-the-floor kick at 120–130 BPM, claps on 2 and 4, and hats on the offbeats. The grids here are a starting drum pattern, not the only house beat.',
      },
      {
        q: 'How do I program a house drum pattern?',
        a: 'Set the DAW to 4/4 at around 125 BPM, 16th-note steps. Put kicks on every beat, claps on 2 and 4, then add closed hats. Change the skip and the hats so you are not stuck on the starter rhythm.',
      },
    ],
    patterns: [
      {
        name: 'Four-on-the-floor',
        summary:
          'The house backbone. Kick on every beat, clap on 2 and 4, closed hats on the offbeats, open hat into the next downbeat.',
      },
      {
        name: 'Disco skip',
        summary: 'Same claps, extra kick on the 16th before 2 and 4. That’s the jack a lot of disco / filtered house uses.',
      },
    ],
  },
  techno: {
    title: 'Techno rhythm · 16-step drum pattern',
    lead: 'BPM is only the speed. Then comes the beat: a typical techno drum pattern you can program in any DAW — kick, clap, hats, one bar of 16ths. The hypnotic part is a four-on-the-floor kick and those offbeat hats.',
    disclaimer: 'Popular starting grids — don’t freeze on them. Techno lives in the grind and the offbeat hats, not in copying this 1:1.',
    faqs: [
      {
        q: 'What is a typical techno rhythm?',
        a: 'Most techno sits on a four-on-the-floor kick at 125–140 BPM, claps on 2 and 4, and 8th hats. The first grid here is that floor pattern — a starting drum pattern, not the only techno beat.',
      },
      {
        q: 'How do I program a techno drum pattern?',
        a: 'Set the DAW to 4/4 at around 132 BPM, 16th-note steps. Put kicks on every beat, claps on 2 and 4, then add 8th hats. Change the hats and a kick so you are not stuck on the starter rhythm.',
      },
    ],
    patterns: [
      {
        name: 'Four-on-the-floor',
        summary:
          'The techno backbone. Kick on every beat, clap on 2 and 4, closed hats on the 8ths, open hat into the next downbeat.',
      },
      {
        name: 'Offbeat hats',
        summary:
          'Same kicks and claps. Closed hats on the even 16ths, open hats on the offbeat 8ths — that is the techno tick.',
      },
    ],
  },
  trance: {
    title: 'Trance rhythm · 16-step drum pattern',
    lead: 'BPM only sets the speed. Next is the beat: a typical trance drum pattern you can program in any DAW — kick, clap, hats, one bar of 16ths. Trance leans on a four-on-the-floor kick and a snare roll that lifts the bar.',
    disclaimer: 'Popular starting grids — don’t freeze on them. Trance lives in the lift and the snare roll, not in copying this 1:1.',
    faqs: [
      {
        q: 'What is a typical trance rhythm?',
        a: 'Most trance sits on a four-on-the-floor kick at 130–145 BPM, with offbeat hats and a clap on 2 and 4. The first grid here is that floor pattern, not the only trance beat.',
      },
      {
        q: 'How do I program a trance drum pattern?',
        a: 'Set the DAW to 4/4 at around 138 BPM, 16th-note steps. Put kicks on every beat, then offbeat 8th hats. Change the hats and the roll so you are not stuck on the starter rhythm.',
      },
    ],
    patterns: [
      {
        name: 'Four-on-the-floor',
        summary:
          'Kick on every beat, clap on 2 and 4, closed hats on the offbeat 8ths, open hats on the + of 2 and 4.',
      },
      {
        name: 'Snare roll',
        summary:
          'Same floor kick. The clap lane rolls the last four 16ths of the bar — a starter build into the next downbeat.',
      },
    ],
  },
  'drum-and-bass': {
    title: 'Drum & Bass rhythm · 16-step drum pattern',
    lead: 'BPM is only how fast the clock runs. Then the beat: a typical drum and bass drum pattern you can program in any DAW — kick, clap, hats, one bar of 16ths. The feel is two-step: snare on 3, not a four-floor kick.',
    disclaimer: 'Popular starting grids — don’t freeze on them. Drum & Bass lives in the two-step skip and the break, not in copying this 1:1.',
    faqs: [
      {
        q: 'What is a typical drum and bass rhythm?',
        a: 'Most drum and bass sits on a two-step at 160–180 BPM: kick on 1 and the & of 3, snare on 3. The first grid here is that two-step idea, not a full amen break.',
      },
      {
        q: 'How do I program a drum and bass drum pattern?',
        a: 'Set the DAW to 4/4 at around 174 BPM, 16th-note steps. Put a kick on 1 and the & of 3, clap on 3, then hats. Change the kicks and hats so you are not stuck on the starter rhythm.',
      },
    ],
    patterns: [
      {
        name: 'Two-step',
        summary:
          'Kick on 1 and the & of 3, snare / clap on 3. Classic two-step in one bar of 16ths.',
      },
      {
        name: 'Amen sketch',
        summary:
          'Extra kicks and claps sketching a breakbeat. A starter amen idea, not a sampled break.',
      },
    ],
  },
  dubstep: {
    title: 'Dubstep rhythm · 16-step drum pattern',
    lead: 'BPM is only a number. Then comes the beat: a typical dubstep drum pattern you can program in any DAW — kick, clap, hats, one bar of 16ths. The drop is half-time: snare on 3, not on 2 and 4.',
    disclaimer: 'Popular starting grids — don’t freeze on them. Dubstep lives in the half-time drop, not in copying this 1:1.',
    faqs: [
      {
        q: 'What is a typical dubstep rhythm?',
        a: 'Most dubstep sits in half-time at 135–145 BPM: kick on 1, clap on 3. The first grid here is that half-time idea, not the only dubstep beat.',
      },
      {
        q: 'How do I program a dubstep drum pattern?',
        a: 'Set the DAW to 4/4 at around 140 BPM, 16th-note steps. Put a kick on 1 and a clap on 3, then hats. Change the kicks around that clap so you are not stuck on the starter rhythm.',
      },
    ],
    patterns: [
      {
        name: 'Half-time',
        summary:
          'Kick on 1, clap on 3. That half-time snare is the dubstep drop feel, not a four-on-the-floor kick.',
      },
      {
        name: 'Wobble kick',
        summary:
          'Clap still on 3. Extra kicks on the & of 2 and the & of 3 wrap the snare — a simple wobble-kick sketch.',
      },
    ],
  },
  trap: {
    title: 'Trap rhythm · 16-step drum pattern',
    lead: 'BPM is just the speed. Next is the beat: a typical trap drum pattern you can program in any DAW — kick, clap, hats, one bar of 16ths. Trap bounce is 808 kicks plus a hat roll at the end of the bar.',
    disclaimer: 'Popular starting grids — don’t freeze on them. Trap lives in the 808 bounce and the hat roll, not in copying this 1:1.',
    faqs: [
      {
        q: 'What is a typical trap rhythm?',
        a: 'Most trap sits on a bounce grid at 130–160 BPM: 808 kicks off the four-floor, claps on 2 and 4, hats rolling late in the bar. The first pattern here is that bounce idea.',
      },
      {
        q: 'How do I program a trap drum pattern?',
        a: 'Set the DAW to 4/4 at around 140 BPM, 16th-note steps. Place 808 kicks on 1, the a of 2, and the & of 3, claps on 2 and 4, then a hat roll. Change the hats and kicks so you are not stuck on the starter rhythm.',
      },
    ],
    patterns: [
      {
        name: 'Bounce',
        summary:
          '808 kicks on 1, the a of 2, and the & of 3. Clap on 2 and 4, then a hat roll on the last 16ths of the bar.',
      },
      {
        name: '808 roll',
        summary:
          'More 808 kicks, closed hats on every 16th, open hat on the + of 2. A busier trap drum pattern.',
      },
    ],
  },
  'hip-hop': {
    title: 'Hip Hop rhythm · 16-step drum pattern',
    lead: 'BPM is only the pocket’s speed. Then the beat: a typical hip hop drum pattern you can program in any DAW — kick, clap, hats, one bar of 16ths. Boom bap is kick on 1 and the & of 3, snare on 2 and 4.',
    disclaimer: 'Popular starting grids — don’t freeze on them. Hip Hop lives in the pocket and the snare, not in copying this 1:1.',
    faqs: [
      {
        q: 'What is a typical hip hop rhythm?',
        a: 'Most hip hop sits on boom bap at 80–100 BPM: kick on 1 and the & of 3, snare on 2 and 4. The first grid here is that boom bap idea, not the only hip hop beat.',
      },
      {
        q: 'How do I program a hip hop drum pattern?',
        a: 'Set the DAW to 4/4 at around 90 BPM, 16th-note steps. Put a kick on 1 and the & of 3, claps on 2 and 4, then sparse hats. Change the kicks and hats so you are not stuck on the starter rhythm.',
      },
    ],
    patterns: [
      {
        name: 'Boom bap',
        summary:
          'Kick on 1 and the & of 3, snare on 2 and 4. Classic boom bap in one bar of 16ths.',
      },
      {
        name: 'Bounce',
        summary:
          'Same snares, extra kicks on the a of 2, on 3, and on the last 16th. A bouncier hip hop drum pattern.',
      },
    ],
  },
  pop: {
    title: 'Pop rhythm · 16-step drum pattern',
    lead: 'BPM tells you speed, not the groove. Next is the beat: a typical pop drum pattern you can program in any DAW — kick, clap, hats, one bar of 16ths. Radio pop is a backbeat: snare on 2 and 4, kick pushing the bars.',
    disclaimer: 'Popular starting grids — don’t freeze on them. Pop lives in the backbeat and the chorus lift, not in copying this 1:1.',
    faqs: [
      {
        q: 'What is a typical pop rhythm?',
        a: 'Most pop sits on a backbeat at 90–120 BPM: snare on 2 and 4, kick on 1, the & of 2, and 3. The first grid here is that backbeat idea.',
      },
      {
        q: 'How do I program a pop drum pattern?',
        a: 'Set the DAW to 4/4 at around 105 BPM, 16th-note steps. Put that backbeat kick, claps on 2 and 4, then hats. Change the hats and kicks so you are not stuck on the starter rhythm.',
      },
    ],
    patterns: [
      {
        name: 'Backbeat',
        summary:
          'Kick on 1, the & of 2, and 3. Clap on 2 and 4 — a radio-pop drum pattern.',
      },
      {
        name: 'Four-on-the-floor',
        summary:
          'Pop with a four-on-the-floor kick, clap on 2 and 4, hats filling the bar. A club-pop starter grid.',
      },
    ],
  },
  rock: {
    title: 'Rock rhythm · 16-step drum pattern',
    lead: 'BPM is only how fast the band is counting. Then the beat: a typical rock drum pattern you can program in any DAW — kick, clap, hats, one bar of 16ths. Rock is a backbeat: kick on 1 and 3, snare on 2 and 4.',
    disclaimer: 'Popular starting grids — don’t freeze on them. Rock lives in the backbeat and the drive, not in copying this 1:1.',
    faqs: [
      {
        q: 'What is a typical rock rhythm?',
        a: 'Most rock sits on a backbeat at 100–140 BPM: kick on 1 and 3, snare on 2 and 4, 8th hats. The first grid here is that backbeat idea.',
      },
      {
        q: 'How do I program a rock drum pattern?',
        a: 'Set the DAW to 4/4 at around 120 BPM, 16th-note steps. Put kicks on 1 and 3, claps on 2 and 4, then 8th hats. Change the hats and extra kicks so you are not stuck on the starter rhythm.',
      },
    ],
    patterns: [
      {
        name: 'Backbeat',
        summary:
          'Kick on 1 and 3, snare on 2 and 4, closed hats on the 8ths. The rock backbone.',
      },
      {
        name: 'Drive',
        summary:
          'Extra kicks, hats on the 16ths, open hats on 2+ and 4+. A busier rock drum pattern.',
      },
    ],
  },
  metal: {
    title: 'Metal rhythm · 16-step drum pattern',
    lead: 'BPM is only the speed of the count. Next is the beat: a typical metal drum pattern you can program in any DAW — kick, clap, hats, one bar of 16ths. Metal is double kick and gallop, not a lazy backbeat.',
    disclaimer: 'Popular starting grids — don’t freeze on them. Metal lives in the double kick and the gallop, not in copying this 1:1.',
    faqs: [
      {
        q: 'What is a typical metal rhythm?',
        a: 'Most metal sits on double kick at 120–180 BPM, snare on 2 and 4. The first grid here is 8th kicks — a starting drum pattern, not a full blast beat.',
      },
      {
        q: 'How do I program a metal drum pattern?',
        a: 'Set the DAW to 4/4 at around 150 BPM, 16th-note steps. Put kicks on the 8ths, claps on 2 and 4, then hats. Change the kick runs so you are not stuck on the starter rhythm.',
      },
    ],
    patterns: [
      {
        name: 'Double kick',
        summary:
          'Kicks on every 8th, snare on 2 and 4. A starter double-kick metal drum pattern.',
      },
      {
        name: 'Gallop',
        summary:
          '16th gallop kicks with snare on 2 and 4. Change the run so you are not stuck on this grid.',
      },
    ],
  },
  'lo-fi': {
    title: 'Lo-fi rhythm · 16-step drum pattern',
    lead: 'BPM is only how slow the loop feels. Then the beat: a typical lo-fi drum pattern you can program in any DAW — kick, clap, hats, one bar of 16ths. Lo-fi is dusty boom bap with space, not busy hats.',
    disclaimer: 'Popular starting grids — don’t freeze on them. Lo-fi lives in the dust and the lazy pocket, not in copying this 1:1.',
    faqs: [
      {
        q: 'What is a typical lo-fi rhythm?',
        a: 'Most lo-fi sits on a dusty boom bap at 70–90 BPM: few kicks, sparse hats, clap on 2 and 4. The first grid here is that dusty idea.',
      },
      {
        q: 'How do I program a lo-fi drum pattern?',
        a: 'Set the DAW to 4/4 at around 80 BPM, 16th-note steps. Put a kick on 1 and a late kick, claps on 2 and 4, then sparse hats. Change the hats and kicks so you are not stuck on the starter rhythm.',
      },
    ],
    patterns: [
      {
        name: 'Dusty boom bap',
        summary:
          'Kick on 1 and the e of 3, sparse hats, clap on 2 and 4. Dusty boom bap, not a busy loop.',
      },
      {
        name: 'Lazy skip',
        summary:
          'Kicks on 1, the & of 2, and the & of 3. Lazy skip — leave space.',
      },
    ],
  },
  ambient: {
    title: 'Ambient rhythm · 16-step drum pattern',
    lead: 'BPM is only a slow clock. Then the beat: a typical ambient drum pattern you can program in any DAW — kick, clap, hats, one bar of 16ths. Ambient is a pulse with space, often no backbeat at all.',
    disclaimer: 'Popular starting grids — don’t freeze on them. Ambient lives in space, not in copying this 1:1.',
    faqs: [
      {
        q: 'What is a typical ambient rhythm?',
        a: 'Most ambient barely marks time at 60–90 BPM: a kick on 1, almost no clap. The first grid here is that pulse idea, not a dance beat.',
      },
      {
        q: 'How do I program an ambient drum pattern?',
        a: 'Set the DAW to 4/4 at around 70 BPM, 16th-note steps. Put a kick on 1, a hat on 3, an open hat on the last 16th. Change the hits so you are not stuck on the starter rhythm.',
      },
    ],
    patterns: [
      {
        name: 'Pulse',
        summary:
          'Only a kick on 1, a hat on 3, open hat on the last 16th. No clap. A pulse, not a groove you dance to.',
      },
      {
        name: 'Wide',
        summary: 'Kick on 1 and 4, clap on 3. Wider hits, still sparse.',
      },
    ],
  },
  reggaeton: {
    title: 'Reggaeton rhythm · 16-step drum pattern',
    lead: 'BPM is only how fast the dembow walks. Next is the beat: a typical reggaeton drum pattern you can program in any DAW — kick, clap, hats, one bar of 16ths. Dembow is the spine: kicks on 1, the & of 2, and the & of 3.',
    disclaimer: 'Popular starting grids — don’t freeze on them. Reggaeton lives in the dembow, not in copying this 1:1.',
    faqs: [
      {
        q: 'What is a typical reggaeton rhythm?',
        a: 'Most reggaeton sits on dembow at 90–100 BPM: kicks on 1, the & of 2, and the & of 3, claps on 2 and 4. The first grid here is that dembow spine.',
      },
      {
        q: 'How do I program a reggaeton drum pattern?',
        a: 'Set the DAW to 4/4 at around 95 BPM, 16th-note steps. Put those three dembow kicks, claps on 2 and 4, then hats. Change the hats and a kick so you are not stuck on the starter rhythm.',
      },
    ],
    patterns: [
      {
        name: 'Dembow',
        summary:
          'Kicks on 1, the & of 2, and the & of 3. Clap on 2 and 4. That is the dembow spine.',
      },
      {
        name: 'Bounce',
        summary:
          'Same dembow kicks and claps, busier hats. A bounce variant — still not a four-floor kick.',
      },
    ],
  },
  afrobeat: {
    title: 'Afrobeat rhythm · 16-step drum pattern',
    lead: 'BPM is only the dance speed. Then the beat: a typical afrobeat drum pattern you can program in any DAW — kick, clap, hats, one bar of 16ths. The kick follows a clave grouping, and highlife hats keep it moving.',
    disclaimer: 'Popular starting grids — don’t freeze on them. Afrobeat lives in the clave and the highlife hats, not in copying this 1:1.',
    faqs: [
      {
        q: 'What is a typical afrobeat rhythm?',
        a: 'Most afrobeat sits around 100–130 BPM with a clave-like kick, clap on 2 and 4, and busy hats. The first grid here is that clave-kick idea.',
      },
      {
        q: 'How do I program an afrobeat drum pattern?',
        a: 'Set the DAW to 4/4 at around 115 BPM, 16th-note steps. Group the kicks like a clave, claps on 2 and 4, then highlife hats. Change the hats and kicks so you are not stuck on the starter rhythm.',
      },
    ],
    patterns: [
      {
        name: 'Clave kick',
        summary:
          'Kicks grouped like a clave, clap on 2 and 4, hats ticking the bar. A starter afrobeat drum pattern.',
      },
      {
        name: 'Highlife',
        summary:
          'Brighter, skippier hats over the same clave idea. Highlife energy — still a four-lane sketch.',
      },
    ],
  },
  'jersey-club': {
    title: 'Jersey Club rhythm · 16-step drum pattern',
    lead: 'BPM is only how fast the chop runs. Next is the beat: a typical jersey club drum pattern you can program in any DAW — kick, clap, hats, one bar of 16ths. Jersey club is clustered kicks, not four-on-the-floor.',
    disclaimer: 'Popular starting grids — don’t freeze on them. Jersey Club lives in the clustered kicks, not in copying this 1:1.',
    faqs: [
      {
        q: 'What is a typical jersey club rhythm?',
        a: 'Most jersey club sits at 130–140 BPM with kicks chopped across the bar (1, the a of 1, the & of 2, the e of 3, and 4). The first grid here is that club-kick idea.',
      },
      {
        q: 'How do I program a jersey club drum pattern?',
        a: 'Set the DAW to 4/4 at around 135 BPM, 16th-note steps. Cluster the kicks, add claps and hats, then keep the chops. Change the hats and kicks so you are not stuck on the starter rhythm.',
      },
    ],
    patterns: [
      {
        name: 'Club kick',
        summary:
          'Kicks clustered on 1, the a of 1, the & of 2, the e of 3, and 4. That chop is the jersey club spine.',
      },
      {
        name: 'Bounce',
        summary:
          'Same idea, busier kick and hat hits. Keep the clusters — do not spread them into four-on-the-floor.',
      },
    ],
  },
  phonk: {
    title: 'Phonk rhythm · 16-step drum pattern',
    lead: 'BPM is only the drift speed. Then the beat: a typical phonk drum pattern you can program in any DAW — kick, clap, hats, one bar of 16ths. Memphis phonk is trap-like, with a cowbell tick (open hat stands in).',
    disclaimer: 'Popular starting grids — don’t freeze on them. Phonk lives in the cowbell and the drift, not in copying this 1:1.',
    faqs: [
      {
        q: 'What is a typical phonk rhythm?',
        a: 'Most phonk sits at 130–160 BPM on a Memphis grid: trap-like kicks and claps, cowbell on the a of 1 and the a of 3. The first pattern here is that Memphis idea.',
      },
      {
        q: 'How do I program a phonk drum pattern?',
        a: 'Set the DAW to 4/4 at around 140 BPM, 16th-note steps. Lay a trap-like kick and clap, put open hats where a cowbell would sit, then hats. Change the hats and kicks so you are not stuck on the starter rhythm.',
      },
    ],
    patterns: [
      {
        name: 'Memphis',
        summary:
          'Trap-like kicks and claps. Open hat stands in for the cowbell on the a of 1 and the a of 3 — a Memphis phonk sketch.',
      },
      {
        name: 'Drift',
        summary:
          'Hats on a four-on-the-floor pulse. Drift phonk — even hats, same dark pocket.',
      },
    ],
  },
  hardstyle: {
    title: 'Hardstyle rhythm · 16-step drum pattern',
    lead: 'BPM is only how hard the clock hits. Next is the beat: a typical hardstyle drum pattern you can program in any DAW — kick, clap, hats, one bar of 16ths. The kick is reverse bass; this grid is still four-on-the-floor hits.',
    disclaimer: 'Popular starting grids — don’t freeze on them. Hardstyle lives in the reverse-bass punch, not in copying this 1:1.',
    faqs: [
      {
        q: 'What is a typical hardstyle rhythm?',
        a: 'Most hardstyle sits on a four-on-the-floor kick at 150–160 BPM, clap on 2 and 4. The first grid here is that reverse-bass kick idea — hits only, not the sound design.',
      },
      {
        q: 'How do I program a hardstyle drum pattern?',
        a: 'Set the DAW to 4/4 at around 150 BPM, 16th-note steps. Put kicks on every beat, claps on 2 and 4, then driving hats. Change the hats and a kick so you are not stuck on the starter rhythm.',
      },
    ],
    patterns: [
      {
        name: 'Reverse-bass kick',
        summary:
          'Four-on-the-floor kick — in hardstyle that kick is reverse bass, even if this grid is only the hits. Clap on 2 and 4.',
      },
      {
        name: 'Hat drive',
        summary:
          'Same kicks, busier hats driving the 16ths. Change the hats so you are not stuck on the starter rhythm.',
      },
    ],
  },
  jazz: {
    title: 'Jazz rhythm · 16-step drum pattern',
    lead: 'BPM is only a wide clock. Then the beat: a typical jazz drum pattern you can program in any DAW — kick, clap, hats, one bar of 16ths. Hats stand in for the ride. This grid is straight 16ths, not real swing.',
    disclaimer: 'Popular starting grids — don’t freeze on them. Jazz lives in the ride and the time, not in copying this 1:1.',
    faqs: [
      {
        q: 'What is a typical jazz rhythm?',
        a: 'Jazz BPM is wide, about 80–160. A common starting idea is ride time: hats standing in for the ride, light kick, snare as comp. The first grid here is that ride-time sketch, not real swing.',
      },
      {
        q: 'How do I program a jazz drum pattern?',
        a: 'Set the DAW to 4/4 at around 120 BPM, 16th-note steps. Put hats where a ride would go, then a light kick and clap. Change the hats and kicks so you are not stuck on the starter rhythm.',
      },
    ],
    patterns: [
      {
        name: 'Ride time',
        summary:
          'Hats stand in for the ride. A 4/4 time pattern, not real swing — this grid cannot swing the 16ths.',
      },
      {
        name: 'Ballad',
        summary:
          'Sparser kicks and hats. A ballad sketch at the slow end of jazz BPM.',
      },
    ],
  },
  salsa: {
    title: 'Salsa rhythm · 16-step drum pattern',
    lead: 'BPM is only how fast the tumbao walks. Next is the beat: a typical salsa drum pattern you can program in any DAW — kick, clap, hats, one bar of 16ths. This is a starter grid, not full salsa percussion.',
    disclaimer: 'Popular starting grids — don’t freeze on them. Salsa lives in the tumbao and the percussion conversation, not in copying this 1:1.',
    faqs: [
      {
        q: 'What is a typical salsa rhythm?',
        a: 'Most salsa sits on tumbao at 180–220 BPM. The first grid here sketches that tumbao with kick, clap, and hats — not congas, cascara, and piano.',
      },
      {
        q: 'How do I program a salsa drum pattern?',
        a: 'Set the DAW to 4/4 at around 200 BPM, 16th-note steps. Sketch a tumbao with kicks and claps, then hats. Change the kicks and hats so you are not stuck on the starter rhythm.',
      },
    ],
    patterns: [
      {
        name: 'Tumbao',
        summary:
          'A starter tumbao kick-and-clap grid, not full salsa percussion. Congas, cascara, and piano are not in these four lanes.',
      },
      {
        name: 'Mambo',
        summary:
          'A mambo-leaning starter grid. Still not a full percussion section — move the kicks, do not copy this 1:1.',
      },
    ],
  },
  bachata: {
    title: 'Bachata rhythm · 16-step drum pattern',
    lead: 'BPM is only the dance speed. Then the beat: a typical bachata drum pattern you can program in any DAW — kick, clap, hats, one bar of 16ths. Bachata counts 1-2-3, then the clap on 4.',
    disclaimer: 'Popular starting grids — don’t freeze on them. Bachata lives in the 1-2-3 guitar pulse, not in copying this 1:1.',
    faqs: [
      {
        q: 'What is a typical bachata rhythm?',
        a: 'Most bachata sits on a 1-2-3-tap feel at 120–140 BPM, with the clap on 4. The first grid here is that count, not a full guitar arrangement.',
      },
      {
        q: 'How do I program a bachata drum pattern?',
        a: 'Set the DAW to 4/4 at around 130 BPM, 16th-note steps. Hit 1, 2, and 3, clap on 4, then hats. Change the hats and kicks so you are not stuck on the starter rhythm.',
      },
    ],
    patterns: [
      {
        name: '1-2-3-tap',
        summary:
          'Hits on 1, 2, and 3, then the clap on 4. That 1-2-3-tap is the bachata count in this grid.',
      },
      {
        name: 'Syncopated',
        summary:
          'Same count, extra offbeat kicks and hats. A syncopated bachata drum pattern.',
      },
    ],
  },
  gospel: {
    title: 'Gospel rhythm · 16-step drum pattern',
    lead: 'BPM is only how fast the choir is moving. Next is the beat: a typical gospel drum pattern you can program in any DAW — kick, clap, hats, one bar of 16ths. Gospel is church clap on 2 and 4, with a kick pickup into 3.',
    disclaimer: 'Popular starting grids — don’t freeze on them. Gospel lives in the clap and the shout, not in copying this 1:1.',
    faqs: [
      {
        q: 'What is a typical gospel rhythm?',
        a: 'Most gospel sits on a church clap at 60–100 BPM: snare / clap on 2 and 4, kick picking up into 3. The first grid here is that church-clap idea.',
      },
      {
        q: 'How do I program a gospel drum pattern?',
        a: 'Set the DAW to 4/4 at around 80 BPM, 16th-note steps. Put claps on 2 and 4, a kick pickup into 3, then hats. Change the hats and kicks so you are not stuck on the starter rhythm.',
      },
    ],
    patterns: [
      {
        name: 'Church clap',
        summary:
          'Clap on 2 and 4, with a kick pickup into 3. Church clap feel in one bar of 16ths.',
      },
      {
        name: 'Shout',
        summary:
          'Busier kicks and hats into the shout. Turn it up, then leave space again.',
      },
    ],
  },
  country: {
    title: 'Country rhythm · 16-step drum pattern',
    lead: 'BPM is only how fast the train is rolling. Then the beat: a typical country drum pattern you can program in any DAW — kick, clap, hats, one bar of 16ths. Country is a train beat: snare on 2 and 4, hats on every 16th.',
    disclaimer: 'Popular starting grids — don’t freeze on them. Country lives in the train beat and the two-step, not in copying this 1:1.',
    faqs: [
      {
        q: 'What is a typical country rhythm?',
        a: 'Most country sits on a train beat at 80–120 BPM: snare on 2 and 4, hats on every 16th, no open hat. The first grid here is that train-beat idea.',
      },
      {
        q: 'How do I program a country drum pattern?',
        a: 'Set the DAW to 4/4 at around 100 BPM, 16th-note steps. Put snare on 2 and 4, hats on every 16th, then add kicks. Change the kicks and hats so you are not stuck on the starter rhythm.',
      },
    ],
    patterns: [
      {
        name: 'Train beat',
        summary:
          'Snare on 2 and 4, closed hats on every 16th, no open hat. The country train beat.',
      },
      {
        name: 'Two-step',
        summary:
          'Kick on 1 and the & of 3. Country two-step — keep the snare on 2 and 4.',
      },
    ],
  },
};
