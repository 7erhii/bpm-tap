import type { GenrePatternCopyMap } from '../types';

export const zh: GenrePatternCopyMap = {
  house: {
    title: 'House BPM · 16 步鼓点',
    lead: 'BPM 只说明有多快。接下来是拍：一段典型 house 鼓点，可在任何 DAW 里编 — 底鼓、拍手、踩镲，一小节十六分音符。',
    disclaimer: '这是常见起步网格，别死守。House 活在 skip 和踩镲里，而不是 1:1 照抄。',
    faqs: [
      {
        q: '典型的 house 节奏是什么样的？',
        a: '多数 house 在 120–130 BPM 上用 four-on-the-floor 底鼓，2 和 4 拍手，弱拍踩镲。这里的网格是起步 drum pattern，不是唯一的 house 鼓点。',
      },
      {
        q: '怎么编一段 house 鼓点？',
        a: 'DAW 设 4/4，大约 125 BPM，十六分音符步进。每拍底鼓，2 和 4 拍手，再加闭镲。改 skip 和踩镲，别停在起始节奏上。',
      },
    ],
    patterns: [
      {
        name: 'Four-on-the-floor',
        summary: 'House 骨架。每拍底鼓，2 和 4 拍手，弱拍闭镲，开镲接到下一小节强拍。',
      },
      {
        name: 'Disco skip',
        summary: '拍手不变，在 2 和 4 前的十六分音符再加一脚底鼓。不少 disco / filtered house 用这个 jack。',
      },
    ],
  },
  techno: {
    title: 'Techno BPM · 16 步鼓点',
    lead: 'BPM 只说明有多快。接下来是拍：一段典型 techno 鼓点，可在任何 DAW 里编 — 每拍底鼓、拍手、弱拍踩镲，一小节十六分音符。',
    disclaimer: '这是常见起步网格，别死守。Techno 活在催眠的踩镲里，而不是 1:1 照抄。',
    faqs: [
      {
        q: '典型的 Techno 节奏是什么样的？',
        a: '多数 techno 在 125–140 BPM 上用 four-on-the-floor 底鼓，2 和 4 拍手，弱拍踩镲。这里的网格是起步 drum pattern，不是唯一的 techno 鼓点。',
      },
      {
        q: '怎么编一段 Techno 鼓点？',
        a: 'DAW 设 4/4，大约 132 BPM，十六分音符步进。每拍底鼓，2 和 4 拍手，再加踩镲。改闭镲和开镲，别停在起始节奏上。',
      },
    ],
    patterns: [
      {
        name: 'Four-on-the-floor',
        summary: 'Techno 骨架。每拍底鼓，2 和 4 拍手，八分音符踩镲，开镲接到下一小节强拍。',
      },
      {
        name: 'Offbeat hats',
        summary: '底鼓和拍手不变。闭镲打在偶数十六分音符上，开镲打在弱拍八分音符上。',
      },
    ],
  },
  trance: {
    title: 'Trance BPM · 16 步鼓点',
    lead: 'BPM 只说明有多快。接下来是拍：一段典型 trance 鼓点，可在任何 DAW 里编 — four-on-the-floor 底鼓、弱拍踩镲、军鼓滚奏，一小节十六分音符。',
    disclaimer: '这是常见起步网格，别死守。Trance 活在滚奏和铺垫里，而不是 1:1 照抄。',
    faqs: [
      {
        q: '典型的 Trance 节奏是什么样的？',
        a: '多数 trance 在 130–145 BPM 上用 four-on-the-floor 底鼓，弱拍八分音符踩镲，小节末尾军鼓滚奏。这里的网格是起步 drum pattern，不是唯一的 trance 鼓点。',
      },
      {
        q: '怎么编一段 Trance 鼓点？',
        a: 'DAW 设 4/4，大约 138 BPM，十六分音符步进。每拍底鼓，弱拍踩镲，再在最后四个十六分音符上加 clap 滚奏。改滚奏，别停在起始节奏上。',
      },
    ],
    patterns: [
      {
        name: 'Four-on-the-floor',
        summary: '每拍底鼓，弱拍八分音符闭镲，2 和 4 的「and」上开镲。',
      },
      {
        name: 'Snare roll',
        summary: '骨架不变，小节最后四个十六分音符加 clap / 军鼓滚奏 — trance 铺垫的起步写法。',
      },
    ],
  },
  'drum-and-bass': {
    title: 'Drum & Bass BPM · 16 步鼓点',
    lead: 'BPM 只说明有多快。接下来是拍：一段典型 drum & bass 鼓点，可在任何 DAW 里编 — two-step、第 3 拍拍手、Amen 碎拍，一小节十六分音符。',
    disclaimer: '这是常见起步网格，别死守。Drum & Bass 活在碎拍和 skip 里，而不是 1:1 照抄。',
    faqs: [
      {
        q: '典型的 Drum & Bass 节奏是什么样的？',
        a: '多数 drum & bass 在 160–180 BPM 走 two-step：底鼓在 1 和 11，拍手在 9（第 3 拍）。这里的网格是起步 drum pattern，不是唯一的 DnB 鼓点。',
      },
      {
        q: '怎么编一段 Drum & Bass 鼓点？',
        a: 'DAW 设 4/4，大约 174 BPM，十六分音符步进。底鼓放 1 和 11，拍手放 9，再给碎拍加点料。改额外的底鼓，别停在起始节奏上。',
      },
    ],
    patterns: [
      {
        name: 'Two-step',
        summary: 'DnB 骨架。底鼓在 1 和 11，clap / 军鼓在 9 — 也就是第 3 拍。网格很快，身体常按半速点头。',
      },
      {
        name: 'Amen sketch',
        summary: '再加几脚底鼓和拍手，勾一笔 Amen 碎拍。这是草稿，不是整段 break。',
      },
    ],
  },
  dubstep: {
    title: 'Dubstep BPM · 16 步鼓点',
    lead: 'BPM 只说明有多快。接下来是拍：一段典型 dubstep 鼓点，可在任何 DAW 里编 — 底鼓在 1、拍手在 3、半速体感，一小节十六分音符。',
    disclaimer: '这是常见起步网格，别死守。Dubstep 活在半速的空隙里，而不是 1:1 照抄。',
    faqs: [
      {
        q: '典型的 Dubstep 节奏是什么样的？',
        a: '多数 dubstep 按 135–145 BPM 写成半速：底鼓在 1，拍手在 3。这里的网格是起步 drum pattern，不是唯一的 dubstep 鼓点。',
      },
      {
        q: '怎么编一段 Dubstep 鼓点？',
        a: 'DAW 设 4/4，大约 140 BPM，十六分音符步进。底鼓放 1，拍手放 9（第 3 拍），踩镲把格子撑住。在拍手前后加底鼓，别停在起始节奏上。',
      },
    ],
    patterns: [
      {
        name: 'Half-time',
        summary: '干净的 dubstep drop。底鼓在 1，拍手在 9 — 第 3 拍。一小节两下，剩下的是空气。',
      },
      {
        name: 'Wobble kick',
        summary: '第 3 拍拍手不变，再在 7 和 11 加底鼓。这就是推着半速走的 wobble。',
      },
    ],
  },
  trap: {
    title: 'Trap BPM · 16 步鼓点',
    lead: 'BPM 只说明有多快。接下来是拍：一段典型 trap 鼓点，可在任何 DAW 里编 — 808 底鼓、2 和 4 拍手、踩镲滚奏，一小节十六分音符。',
    disclaimer: '这是常见起步网格，别死守。Trap 活在 808 和踩镲滚奏里，而不是 1:1 照抄。',
    faqs: [
      {
        q: '典型的 Trap 节奏是什么样的？',
        a: '当代 trap 多在 130–160 BPM：808 底鼓在 1、8、11，2 和 4 拍手，小节末尾踩镲滚奏。这里的网格是起步 drum pattern，不是唯一的 trap 鼓点。',
      },
      {
        q: '怎么编一段 Trap 鼓点？',
        a: 'DAW 设 4/4，大约 140 BPM，十六分音符步进。808 放 1、8、11，2 和 4 拍手，再加一段 hat roll。把 808 编得更密，别停在起始节奏上。',
      },
    ],
    patterns: [
      {
        name: 'Bounce',
        summary: '808 在 1、8、11，2 和 4 拍手，小节末尾踩镲滚奏。基础 trap bounce。',
      },
      {
        name: '808 roll',
        summary: '更多 808 底鼓，闭镲铺满十六分音符，2 的「and」上开镲。更忙，更重。',
      },
    ],
  },
  'hip-hop': {
    title: 'Hip Hop BPM · 16 步鼓点',
    lead: 'BPM 只说明有多快。接下来是拍：一段典型 Hip Hop 鼓点，可在任何 DAW 里编 — boom bap、底鼓和拍手的 pocket，一小节十六分音符。',
    disclaimer: '这是常见起步网格，别死守。Hip Hop 活在 pocket 里，而不是 1:1 照抄。',
    faqs: [
      {
        q: '典型的 Hip Hop 节奏是什么样的？',
        a: '不少 Hip Hop 在 80–100 BPM 走 boom bap：底鼓在 1 和第 3 拍的「and」，军鼓 / 拍手在 2 和 4。这里的网格是起步 drum pattern，不是唯一的 hip-hop 鼓点。',
      },
      {
        q: '怎么编一段 Hip Hop 鼓点？',
        a: 'DAW 设 4/4，大约 90 BPM，十六分音符步进。底鼓放 1 和 11，2 和 4 拍手，踩镲少而轻。再加几脚底鼓，别停在起始节奏上。',
      },
    ],
    patterns: [
      {
        name: 'Boom bap',
        summary: '底鼓在 1 和 11（第 3 拍的「and」），clap / 军鼓在 2 和 4。经典 boom bap pocket。',
      },
      {
        name: 'Bounce',
        summary: '反拍不变，再在 8、9、16 加底鼓。bounce 更明显，走路感少一点。',
      },
    ],
  },
  pop: {
    title: 'Pop BPM · 16 步鼓点',
    lead: 'BPM 只说明有多快。接下来是拍：一段典型流行鼓点，可在任何 DAW 里编 — 电台反拍、底鼓、拍手、踩镲，一小节十六分音符。',
    disclaimer: '这是常见起步网格，别死守。流行活在反拍和副歌里，而不是 1:1 照抄。',
    faqs: [
      {
        q: '典型的 Pop 节奏是什么样的？',
        a: '当代流行多在 90–120 BPM，2 和 4 拍手，底鼓在 1、2 的「and」和第 3 拍。这里的网格是起步 drum pattern，不是唯一的流行鼓点。',
      },
      {
        q: '怎么编一段 Pop 鼓点？',
        a: 'DAW 设 4/4，大约 105 BPM，十六分音符步进。2 和 4 拍手，底鼓从 1 起再加几下，然后踩镲。换成 four-on-the-floor，别停在起始节奏上。',
      },
    ],
    patterns: [
      {
        name: 'Backbeat',
        summary: '底鼓在 1、2 的「and」和第 3 拍，2 和 4 拍手。流行电台反拍。',
      },
      {
        name: 'Four-on-the-floor',
        summary: '每拍底鼓，2 和 4 拍手。偏舞池的流行，比主歌更 club。',
      },
    ],
  },
  rock: {
    title: 'Rock BPM · 16 步鼓点',
    lead: 'BPM 只说明有多快。接下来是拍：一段典型摇滚鼓点，可在任何 DAW 里编 — 底鼓 1 和 3、军鼓 2 和 4、八分音符踩镲，一小节十六分音符。',
    disclaimer: '这是常见起步网格，别死守。摇滚活在军鼓反拍里，而不是 1:1 照抄。',
    faqs: [
      {
        q: '典型的 Rock 节奏是什么样的？',
        a: '摇滚多在 100–140 BPM：底鼓在 1 和 3，军鼓 / 拍手在 2 和 4，踩镲走八分音符。这里的网格是起步 drum pattern，不是唯一的摇滚鼓点。',
      },
      {
        q: '怎么编一段 Rock 鼓点？',
        a: 'DAW 设 4/4，大约 120 BPM，十六分音符步进。底鼓放 1 和 3，2 和 4 拍手，踩镲走八分。再加底鼓和十六分踩镲，别停在起始节奏上。',
      },
    ],
    patterns: [
      {
        name: 'Backbeat',
        summary: '底鼓在 1 和 3，clap / 军鼓在 2 和 4，闭镲走八分音符。基础摇滚拍。',
      },
      {
        name: 'Drive',
        summary: '底鼓更密，踩镲改十六分音符，2 和 4 的「and」上开镲。推力更大。',
      },
    ],
  },
  metal: {
    title: 'Metal BPM · 16 步鼓点',
    lead: 'BPM 只说明有多快。接下来是拍：一段典型金属鼓点，可在任何 DAW 里编 — 双底鼓、2 和 4 军鼓、疾驰型，一小节十六分音符。',
    disclaimer: '这是常见起步网格，别死守。金属活在双底鼓和疾驰里，而不是 1:1 照抄。',
    faqs: [
      {
        q: '典型的 Metal 节奏是什么样的？',
        a: '不少金属落在 120–180 BPM，双踩八分音符底鼓，军鼓在 2 和 4。这里的网格是起步 drum pattern，不是唯一的金属鼓点。',
      },
      {
        q: '怎么编一段 Metal 鼓点？',
        a: 'DAW 设 4/4，大约 150 BPM，十六分音符步进。双底鼓走八分，2 和 4 拍手。再换成十六分疾驰，别停在起始节奏上。',
      },
    ],
    patterns: [
      {
        name: 'Double kick',
        summary: '八分音符双底鼓，clap / 军鼓在 2 和 4。直给的金属踏步。',
      },
      {
        name: 'Gallop',
        summary: '同一军鼓下面，底鼓改成十六分疾驰。thrash 疾驰的起步型。',
      },
    ],
  },
  'lo-fi': {
    title: 'Lo-fi BPM · 16 步鼓点',
    lead: 'BPM 只说明有多快。接下来是拍：一段典型 lo-fi 鼓点，可在任何 DAW 里编 — 带灰的 boom bap、稀疏踩镲，一小节十六分音符。',
    disclaimer: '这是常见起步网格，别死守。Lo-fi 活在灰尘感和懒 skip 里，而不是 1:1 照抄。',
    faqs: [
      {
        q: '典型的 Lo-fi 节奏是什么样的？',
        a: 'Lo-fi hip-hop 常在 70–90 BPM 呼吸，空的 boom bap，踩镲很轻。这里的网格是起步 drum pattern，不是唯一的 lo-fi 鼓点。',
      },
      {
        q: '怎么编一段 Lo-fi 鼓点？',
        a: 'DAW 设 4/4，大约 80 BPM，十六分音符步进。底鼓要疏，反拍拍手，踩镲松一点。把 skip 挪开，别停在起始节奏上。',
      },
    ],
    patterns: [
      {
        name: 'Dusty boom bap',
        summary: '底鼓在 1 和 10，踩镲稀疏，反拍拍手。敲得少，空气多。',
      },
      {
        name: 'Lazy skip',
        summary: '底鼓在 1、7、11。更懒 — study beat 那种 skip。',
      },
    ],
  },
  ambient: {
    title: 'Ambient BPM · 16 步鼓点',
    lead: 'BPM 只说明有多快。接下来是拍：一段典型 Ambient 鼓点，可在任何 DAW 里编 — 一下底鼓脉冲、几乎没有拍手，一小节十六分音符。',
    disclaimer: '这是常见起步网格，别死守。Ambient 活在空间和脉冲里，而不是 1:1 照抄。',
    faqs: [
      {
        q: '典型的 Ambient 节奏是什么样的？',
        a: '如果听得见脉冲，Ambient 常在 60–90 BPM 呼吸：底鼓只在 1，很少或没有拍手。这里的网格是起步 drum pattern，不是唯一的氛围鼓点。',
      },
      {
        q: '怎么编一段 Ambient 鼓点？',
        a: 'DAW 设 4/4，大约 70 BPM，十六分音符步进。底鼓放 1，踩镲放 3，小节末开镲。把脉冲拉宽，别停在起始节奏上。',
      },
    ],
    patterns: [
      {
        name: 'Pulse',
        summary: '底鼓只在 1，踩镲在 3，开镲在最后一颗十六分音符。没有拍手。',
      },
      {
        name: 'Wide',
        summary: '底鼓在 1 和 4，拍手在 3。稍宽一点，仍然很空。',
      },
    ],
  },
  reggaeton: {
    title: 'Reggaeton BPM · 16 步鼓点',
    lead: 'BPM 只说明有多快。接下来是拍：一段典型 reggaeton 鼓点，可在任何 DAW 里编 — dembow、底鼓、拍手、踩镲，一小节十六分音符。',
    disclaimer: '这是常见起步网格，别死守。Reggaeton 活在 dembow 里，而不是 1:1 照抄。',
    faqs: [
      {
        q: '典型的 Reggaeton 节奏是什么样的？',
        a: 'Reggaeton 多锁在 90–100 BPM 的 dembow：底鼓在 1、7、11，2 和 4 拍手。这里的网格是起步 drum pattern，不是唯一的 reggaeton 鼓点。',
      },
      {
        q: '怎么编一段 Reggaeton 鼓点？',
        a: 'DAW 设 4/4，大约 95 BPM，十六分音符步进。底鼓放 1、7、11，2 和 4 拍手，再加踩镲。改 bounce，别停在起始节奏上。',
      },
    ],
    patterns: [
      {
        name: 'Dembow',
        summary: 'Reggaeton 的脊梁。底鼓在 1、7、11，2 和 4 拍手。这就是 dembow。',
      },
      {
        name: 'Bounce',
        summary: 'dembow 骨架不变，踩镲和底鼓稍密一点。更偏俱乐部 bounce。',
      },
    ],
  },
  afrobeat: {
    title: 'Afrobeat BPM · 16 步鼓点',
    lead: 'BPM 只说明有多快。接下来是拍：一段典型 afrobeat 鼓点，可在任何 DAW 里编 — clave 式底鼓、highlife 踩镲，一小节十六分音符。',
    disclaimer: '这是常见起步网格，别死守。Afrobeat 活在 clave 和打击乐里，而不是 1:1 照抄。',
    faqs: [
      {
        q: '典型的 Afrobeat 节奏是什么样的？',
        a: '舞池向的 afrobeat / afrobeats 常在 100–130 BPM，底鼓按简化 clave 切分，踩镲较亮。这里的网格是起步 drum pattern，不是唯一的 afrobeat 鼓点。',
      },
      {
        q: '怎么编一段 Afrobeat 鼓点？',
        a: 'DAW 设 4/4，大约 115 BPM，十六分音符步进。先铺 clave 底鼓，拍手少一点，踩镲走 highlife。挪底鼓，别停在起始节奏上。',
      },
    ],
    patterns: [
      {
        name: 'Clave kick',
        summary: '底鼓跟着简化 clave 走，不是 four-on-the-floor。切分才是律动。',
      },
      {
        name: 'Highlife',
        summary: '踩镲更开，highlife 那种 bounce。仍是起步 — 不是整套现场打击乐。',
      },
    ],
  },
  'jersey-club': {
    title: 'Jersey Club BPM · 16 步鼓点',
    lead: 'BPM 只说明有多快。接下来是拍：一段典型 Jersey Club 鼓点，可在任何 DAW 里编 — 成簇的底鼓、拍手、踩镲，一小节十六分音符。',
    disclaimer: '这是常见起步网格，别死守。Jersey Club 活在成簇的底鼓里，而不是 1:1 照抄。',
    faqs: [
      {
        q: '典型的 Jersey Club 节奏是什么样的？',
        a: 'Jersey Club 常在 130–140 BPM，底鼓簇在 1、4、7、10、13。这里的网格是起步 drum pattern，不是唯一的 jersey 鼓点。',
      },
      {
        q: '怎么编一段 Jersey Club 鼓点？',
        a: 'DAW 设 4/4，大约 135 BPM，十六分音符步进。底鼓放 1、4、7、10、13，再把 bounce 加密。改底鼓，别停在起始节奏上。',
      },
    ],
    patterns: [
      {
        name: 'Club kick',
        summary: '底鼓簇在 1、4、7、10、13。十六步格子上的 jersey 3-3-2。',
      },
      {
        name: 'Bounce',
        summary: '同一思路，底鼓和踩镲更忙。采样切开之后的 club bounce。',
      },
    ],
  },
  phonk: {
    title: 'Phonk BPM · 16 步鼓点',
    lead: 'BPM 只说明有多快。接下来是拍：一段典型 phonk 鼓点，可在任何 DAW 里编 — Memphis bounce、开镲当 cowbell，一小节十六分音符。',
    disclaimer: '这是常见起步网格，别死守。Phonk 活在 cowbell 和 drift 里，而不是 1:1 照抄。',
    faqs: [
      {
        q: '典型的 Phonk 节奏是什么样的？',
        a: 'Drift phonk 常从 130 走到 160 BPM，trap / Memphis 律动，开镲打在 4 和 12 充当 cowbell。这里的网格是起步 drum pattern，不是唯一的 phonk 鼓点。',
      },
      {
        q: '怎么编一段 Phonk 鼓点？',
        a: 'DAW 设 4/4，大约 140 BPM，十六分音符步进。按 trap 铺底鼓拍手，开镲放 4 和 12。drift 可把踩镲改成 four-on-the-floor，别停在起始节奏上。',
      },
    ],
    patterns: [
      {
        name: 'Memphis',
        summary: '底鼓和拍手偏 trap，开镲在 4 和 12 当 cowbell。Memphis 骨架。',
      },
      {
        name: 'Drift',
        summary: '踩镲更 four-on-the-floor，cowbell 还在。赛道感的 drift phonk。',
      },
    ],
  },
  hardstyle: {
    title: 'Hardstyle BPM · 16 步鼓点',
    lead: 'BPM 只说明有多快。接下来是拍：一段典型 hardstyle 鼓点，可在任何 DAW 里编 — 每拍 reverse-bass 底鼓、往前推的踩镲，一小节十六分音符。',
    disclaimer: '这是常见起步网格，别死守。Hardstyle 活在 reverse-bass 的冲击里，而不是 1:1 照抄。',
    faqs: [
      {
        q: '典型的 Hardstyle 节奏是什么样的？',
        a: 'Hardstyle 多锁在 150–160 BPM，reverse-bass 底鼓 four-on-the-floor，踩镲往前推。这里的网格是起步 drum pattern，不是唯一的 hardstyle 鼓点。',
      },
      {
        q: '怎么编一段 Hardstyle 鼓点？',
        a: 'DAW 设 4/4，大约 150 BPM，十六分音符步进。每拍底鼓（按 reverse-bass 来想），2 和 4 拍手，再加踩镲。改踩镲的 drive，别停在起始节奏上。',
      },
    ],
    patterns: [
      {
        name: 'Reverse-bass kick',
        summary: 'Four-on-the-floor 底鼓 — 音色上是 reverse-bass。2 和 4 拍手。格子简单，底鼓包办一切。',
      },
      {
        name: 'Hat drive',
        summary: '同样的 reverse-bass，踩镲更密，把音乐节往前推。kick 上面的 drive。',
      },
    ],
  },
  jazz: {
    title: 'Jazz BPM · 16 步鼓点',
    lead: 'BPM 只说明有多快。接下来是拍：一段典型爵士鼓点，可在任何 DAW 里编 — 踩镲代替 ride、底鼓、拍手，一小节十六分音符。这不是真正的 swing。',
    disclaimer: '这是常见起步网格，别死守。爵士活在 ride 和 swing 里，而不是 1:1 照抄一排直踩镲。',
    faqs: [
      {
        q: '典型的 Jazz 节奏是什么样的？',
        a: '爵士跨度大，大约 80–160 BPM，从抒情到快速摇摆都有。这里用踩镲代替 ride — 不是真正的 swing。这些网格只是起步 drum pattern。',
      },
      {
        q: '怎么编一段 Jazz 鼓点？',
        a: 'DAW 设 4/4，速度在 80 到 160 之间自选，十六分音符步进。踩镲按 ride time 走，底鼓轻，拍手少。再减到抒情，别停在起始节奏上。',
      },
    ],
    patterns: [
      {
        name: 'Ride time',
        summary: '闭镲代替 ride，底鼓和拍手都轻。直格子 — 不是真正的爵士 swing。',
      },
      {
        name: 'Ballad',
        summary: '更疏，体感更慢。仍然用踩镲代替 ride，不是完整爵士鼓组。',
      },
    ],
  },
  salsa: {
    title: 'Salsa BPM · 16 步鼓点',
    lead: 'BPM 只说明有多快。接下来是拍：一段典型 salsa 鼓点，可在任何 DAW 里编 — tumbao、底鼓、拍手、踩镲，一小节十六分音符。只是起步，不是整套打击乐。',
    disclaimer: '这是常见起步网格，别死守。Salsa 活在 tumbao 和整组打击乐里，而不是 1:1 照抄四条轨道。',
    faqs: [
      {
        q: '典型的 Salsa 节奏是什么样的？',
        a: '按网格算，salsa 数得很快，大约 180–220 BPM，核心是 tumbao。这里的网格是起步 drum pattern — 不是康加、timbales 和 campana。',
      },
      {
        q: '怎么编一段 Salsa 鼓点？',
        a: 'DAW 设 4/4，大约 200 BPM，十六分音符步进。用底鼓勾 tumbao，拍手做标记，踩镲少一点。再试 mambo，别以为这就是整组打击乐。',
      },
    ],
    patterns: [
      {
        name: 'Tumbao',
        summary: '用 kick / clap / hats 勾 tumbao 骨架。DAW 起步，不是完整 salsa 打击乐。',
      },
      {
        name: 'Mambo',
        summary: '稍密一点，带 mambo 感觉。仍是起步网格，不是乐队。',
      },
    ],
  },
  bachata: {
    title: 'Bachata BPM · 16 步鼓点',
    lead: 'BPM 只说明有多快。接下来是拍：一段典型 bachata 鼓点，可在任何 DAW 里编 — 1-2-3，第 4 拍拍手，一小节十六分音符。',
    disclaimer: '这是常见起步网格，别死守。Bachata 活在 1-2-3-tap 里，而不是 1:1 照抄。',
    faqs: [
      {
        q: '典型的 Bachata 节奏是什么样的？',
        a: '当代 bachata 常在 120–140 BPM：三步之后，第 4 拍拍手。这里的网格是起步 drum pattern，不是唯一的 bachata 鼓点。',
      },
      {
        q: '怎么编一段 Bachata 鼓点？',
        a: 'DAW 设 4/4，大约 130 BPM，十六分音符步进。底鼓点出 1-2-3，第 4 拍拍手。再给踩镲和底鼓加点切分，别停在起始节奏上。',
      },
    ],
    patterns: [
      {
        name: '1-2-3-tap',
        summary: '底鼓在 1、2、3，拍手在 4。就是会跟着迈的那个数拍。',
      },
      {
        name: 'Syncopated',
        summary: '第 4 拍拍手不变，底鼓和踩镲稍切分。更都市，底下仍是 1-2-3。',
      },
    ],
  },
  gospel: {
    title: 'Gospel BPM · 16 步鼓点',
    lead: 'BPM 只说明有多快。接下来是拍：一段典型 gospel 鼓点，可在任何 DAW 里编 — 2 和 4 的教堂拍手、pocket 里的底鼓，一小节十六分音符。',
    disclaimer: '这是常见起步网格，别死守。Gospel 活在教堂拍手里，而不是 1:1 照抄。',
    faqs: [
      {
        q: '典型的 Gospel 节奏是什么样的？',
        a: '很多 gospel 在 60–100 BPM，2 和 4 教堂拍手，底鼓拾到第 3 拍。这里的网格是起步 drum pattern，不是唯一的 gospel 鼓点。',
      },
      {
        q: '怎么编一段 Gospel 鼓点？',
        a: 'DAW 设 4/4，大约 80 BPM，十六分音符步进。2 和 4 拍手，底鼓带一脚拾到 3。再加密到 shout，别停在起始节奏上。',
      },
    ],
    patterns: [
      {
        name: 'Church clap',
        summary: 'clap / 军鼓在 2 和 4，底鼓带一脚拾到 3。教堂拍手撑起律动。',
      },
      {
        name: 'Shout',
        summary: '底鼓和拍手更密，赞美歌能量。同一反拍，更多 shout。',
      },
    ],
  },
  country: {
    title: 'Country BPM · 16 步鼓点',
    lead: 'BPM 只说明有多快。接下来是拍：一段典型乡村鼓点，可在任何 DAW 里编 — train beat、2 和 4 军鼓、铺满十六分的踩镲，一小节。',
    disclaimer: '这是常见起步网格，别死守。Country 活在 train beat 和 two-step 里，而不是 1:1 照抄。',
    faqs: [
      {
        q: '典型的 Country 节奏是什么样的？',
        a: '乡村乐常在 80–120 BPM：军鼓在 2 和 4，闭镲打满每个十六分（train beat），或 two-step 底鼓在 1 和 11。这里的网格是起步 drum pattern，不是唯一的乡村鼓点。',
      },
      {
        q: '怎么编一段 Country 鼓点？',
        a: 'DAW 设 4/4，大约 100 BPM，十六分音符步进。2 和 4 拍手，闭镲铺满每个十六分，不要开镲。再换成 two-step（底鼓 1 和 11），别停在起始节奏上。',
      },
    ],
    patterns: [
      {
        name: 'Train beat',
        summary: 'clap / 军鼓在 2 和 4，闭镲打在每一颗十六分音符上，没有开镲。乡村 train beat。',
      },
      {
        name: 'Two-step',
        summary: '底鼓在 1 和 11，反拍不变。会跟着跳的 two-step。',
      },
    ],
  },
};
