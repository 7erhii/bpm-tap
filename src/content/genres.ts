import { genreCatalog } from '@/lib/genres/catalog';

export interface GenreLocaleCopy {
  name: string;
  summary: string;
  subgenres: string[];
  examples: string[];
  tip: string;
}

export interface Genre {
  slug: string;
  bpmMin: number;
  bpmMax: number;
  order: number;
  related: string[];
  en: GenreLocaleCopy;
  ru: GenreLocaleCopy;
}

type GenreExtra = {
  related: string[];
  en: Omit<GenreLocaleCopy, 'name'>;
  ru: Omit<GenreLocaleCopy, 'name'>;
};

const extras: Record<string, GenreExtra> = {
  house: {
    related: ['techno', 'trance', 'jersey-club', 'pop'],
    en: {
      summary:
        'Four-on-the-floor club energy. Classic house usually sits around 120–130 BPM for steady dancefloor grooves.',
      subgenres: ['Deep House', 'Tech House', 'Progressive House', 'Afro House', 'Disco House'],
      examples: ['Daft Punk — One More Time (~123 BPM)', 'Fisher — Losing It (~125 BPM)', 'Disclosure — Latch (~122 BPM)'],
      tip: 'Tap the kick every beat; if the pad reads ~60–65, you are likely in half-time — use ×2.',
    },
    ru: {
      summary:
        'Чёткий four-on-the-floor для танцпола. Классический house обычно живёт в диапазоне 120–130 BPM.',
      subgenres: ['Deep House', 'Tech House', 'Progressive House', 'Afro House', 'Disco House'],
      examples: ['Daft Punk — One More Time (~123 BPM)', 'Fisher — Losing It (~125 BPM)', 'Disclosure — Latch (~122 BPM)'],
      tip: 'Тапай по кику на каждую долю; если видишь ~60–65 — скорее half-time, жми ×2.',
    },
  },
  techno: {
    related: ['house', 'trance', 'hardstyle'],
    en: {
      summary:
        'Driving and hypnotic. Techno often lands between 125 and 140 BPM depending on peak-time intensity.',
      subgenres: ['Peak-time Techno', 'Minimal', 'Industrial Techno', 'Melodic Techno', 'Hard Techno'],
      examples: ['Charlotte de Witte — Heart of Mine (~138 BPM)', 'Amelie Lens — Follow (~132 BPM)', 'Carl Cox classics (~128–135 BPM)'],
      tip: 'Lock to the kick. Warehouse tracks can feel slower than the grid — confirm with the metronome.',
    },
    ru: {
      summary:
        'Гипнотичный и плотный пульс. Techno чаще всего между 125 и 140 BPM — от warehouse до peak-time.',
      subgenres: ['Peak-time Techno', 'Minimal', 'Industrial Techno', 'Melodic Techno', 'Hard Techno'],
      examples: ['Charlotte de Witte — Heart of Mine (~138 BPM)', 'Amelie Lens — Follow (~132 BPM)', 'Классика Carl Cox (~128–135 BPM)'],
      tip: 'Держись кика. Warehouse может ощущаться медленнее сетки — проверь метрономом.',
    },
  },
  trance: {
    related: ['techno', 'house', 'hardstyle'],
    en: {
      summary: 'Uplifting builds and long phrases. Trance tempos commonly sit near 130–145 BPM.',
      subgenres: ['Uplifting', 'Psytrance', 'Tech Trance', 'Vocal Trance', 'Progressive Trance'],
      examples: ['Armin van Buuren anthems (~138 BPM)', 'Above & Beyond — Sun & Moon (~128–132 BPM)', 'Classic Tiësto peak-time (~140 BPM)'],
      tip: 'Phrase length is long — tap 8–12 kicks before trusting the reading.',
    },
    ru: {
      summary: 'Длинные фразы и подъёмы. Trance обычно держится около 130–145 BPM.',
      subgenres: ['Uplifting', 'Psytrance', 'Tech Trance', 'Vocal Trance', 'Progressive Trance'],
      examples: ['Гимны Armin van Buuren (~138 BPM)', 'Above & Beyond — Sun & Moon (~128–132 BPM)', 'Peak-time Tiësto (~140 BPM)'],
      tip: 'Фразы длинные — натапай 8–12 киков, прежде чем доверять цифре.',
    },
  },
  'drum-and-bass': {
    related: ['dubstep', 'trap', 'hardstyle'],
    en: {
      summary: 'Breakbeat velocity. DnB is typically 160–180 BPM — fast, but often felt in half-time.',
      subgenres: ['Liquid', 'Neurofunk', 'Jump-Up', 'Jungle', 'Drumstep'],
      examples: ['Pendulum — Propane Nightmares (~174 BPM)', 'Netsky liquid vibes (~174 BPM)', 'Classic amen rollers (~170–175 BPM)'],
      tip: 'If you tap the snare “half-time feel” you may see ~85 — use ×2 for the written DnB tempo.',
    },
    ru: {
      summary: 'Быстрый breakbeat. DnB обычно 160–180 BPM, хотя ощущаться может в half-time.',
      subgenres: ['Liquid', 'Neurofunk', 'Jump-Up', 'Jungle', 'Drumstep'],
      examples: ['Pendulum — Propane Nightmares (~174 BPM)', 'Liquid Netsky (~174 BPM)', 'Классические amen-роллеры (~170–175 BPM)'],
      tip: 'Если тапаешь snare в half-time feel, увидишь ~85 — жми ×2 для «письменного» темпа DnB.',
    },
  },
  dubstep: {
    related: ['trap', 'drum-and-bass', 'phonk'],
    en: {
      summary: 'Often notated around 140 BPM with a half-time feel that reads closer to 70 BPM.',
      subgenres: ['Brostep', 'Deep Dubstep', 'Riddim', 'Melodic Dubstep', 'UK Garage cousins'],
      examples: ['Skrillex-era peak drops (~140 BPM)', 'Burial night-bus moods (~140 half-time)', 'Modern riddim (~140 BPM)'],
      tip: 'Decide whether you want written 140 or felt ~70 — use ÷2 / ×2 after a stable tap.',
    },
    ru: {
      summary: 'Часто пишут около 140 BPM, но half-time ощущение ближе к 70 BPM.',
      subgenres: ['Brostep', 'Deep Dubstep', 'Riddim', 'Melodic Dubstep', 'UK Garage'],
      examples: ['Пиковые дропы эпохи Skrillex (~140 BPM)', 'Night-bus настроение Burial (~140 half-time)', 'Современный riddim (~140 BPM)'],
      tip: 'Реши: нужен письменный 140 или ощущаемые ~70 — после стабильного тапа жми ÷2 / ×2.',
    },
  },
  trap: {
    related: ['hip-hop', 'phonk', 'dubstep', 'pop'],
    en: {
      summary: 'Hi-hat rolls over a heavy low end. Modern trap often grids at 130–160 BPM (or half-time ~65–80).',
      subgenres: ['Atlanta Trap', 'Rage', 'Latin Trap', 'Drill', 'Cloud Trap'],
      examples: ['Metro Boomin-type 808 records (~140 BPM)', 'Travis Scott arena energy (~150 BPM)', 'Drill pockets (~140 half-time feel)'],
      tip: 'Hats can trick you — tap the kick/808 pulse, then confirm with ×2 if you landed in half-time.',
    },
    ru: {
      summary: 'Мелкие хэты и тяжёлый низ. Современный trap часто 130–160 BPM (или half-time ~65–80).',
      subgenres: ['Atlanta Trap', 'Rage', 'Latin Trap', 'Drill', 'Cloud Trap'],
      examples: ['808-записи в духе Metro Boomin (~140 BPM)', 'Arena-energy Travis Scott (~150 BPM)', 'Drill-карманы (~140 half-time)'],
      tip: 'Хэты сбивают — тапай пульс кика/808, потом ×2, если попал в half-time.',
    },
  },
  'hip-hop': {
    related: ['trap', 'pop', 'lo-fi'],
    en: {
      summary: 'Pocket and swing. Many hip-hop records sit between 80 and 100 BPM (or double-time cousins).',
      subgenres: ['Boom Bap', 'Trap-influenced', 'West Coast', 'Lo-fi Hip Hop', 'Conscious'],
      examples: ['Classic boom-bap around ~90 BPM', 'J Dilla pocket feels (~88–96 BPM)', 'Modern radio rap often ~90–100 or double-time'],
      tip: 'If hats feel twice as fast as your taps, you may want ×2 for the DAW grid.',
    },
    ru: {
      summary: 'Грув и swing. Многие hip-hop треки — 80–100 BPM (или double-time варианты).',
      subgenres: ['Boom Bap', 'Trap-influenced', 'West Coast', 'Lo-fi Hip Hop', 'Conscious'],
      examples: ['Классический boom-bap ~90 BPM', 'Карман J Dilla (~88–96 BPM)', 'Современный radio rap часто ~90–100 или double-time'],
      tip: 'Если хэты вдвое быстрее тапов — для сетки DAW может понадобиться ×2.',
    },
  },
  pop: {
    related: ['house', 'hip-hop', 'rock', 'country'],
    en: {
      summary: 'Radio-friendly mid tempos. Modern pop often clusters between 90 and 120 BPM.',
      subgenres: ['Dance Pop', 'Synth Pop', 'Indie Pop', 'K-Pop midtempo', 'Ballad'],
      examples: ['The Weeknd-type midtempo hits (~90–110 BPM)', 'Dance-pop choruses (~110–120 BPM)', 'Ballads often ~60–80 felt'],
      tip: 'Tap the snare backbeat if the kick pattern is syncopated — then cross-check with the metronome.',
    },
    ru: {
      summary: 'Радио-friendly mid tempo. Современный pop часто между 90 и 120 BPM.',
      subgenres: ['Dance Pop', 'Synth Pop', 'Indie Pop', 'K-Pop midtempo', 'Ballad'],
      examples: ['Midtempo в духе The Weeknd (~90–110 BPM)', 'Dance-pop припевы (~110–120 BPM)', 'Баллады часто ~60–80 по ощущению'],
      tip: 'Если кик синкопирован — тапай snare на бэкбит и сверь с метрономом.',
    },
  },
  rock: {
    related: ['metal', 'pop', 'country'],
    en: {
      summary: 'From mid-tempo anthems to uptempo riffs. Rock commonly spans 100–140 BPM.',
      subgenres: ['Classic Rock', 'Indie Rock', 'Punk', 'Alternative', 'Hard Rock'],
      examples: ['Arena anthems ~110–120 BPM', 'Punk burners ~160+ (outside this guide’s core band)', 'Indie midtempo ~100–115 BPM'],
      tip: 'Drummer fills can wobble a tap reading — prefer kick/snare for 8–12 bars.',
    },
    ru: {
      summary: 'От mid-tempo гимнов до быстрых риффов. Rock часто в диапазоне 100–140 BPM.',
      subgenres: ['Classic Rock', 'Indie Rock', 'Punk', 'Alternative', 'Hard Rock'],
      examples: ['Arena-гимны ~110–120 BPM', 'Punk часто быстрее ядра этого гида', 'Indie midtempo ~100–115 BPM'],
      tip: 'Филы барабанщика шатают тап — держись кика/снейра 8–12 тактов.',
    },
  },
  metal: {
    related: ['rock', 'hardstyle', 'drum-and-bass'],
    en: {
      summary: 'From groove metal stomps to blast-adjacent thrash. Many metal songs land between 120 and 180 BPM.',
      subgenres: ['Groove Metal', 'Thrash', 'Metalcore', 'Prog Metal', 'Doom (slower outliers)'],
      examples: ['Groove stomps ~120–140 BPM', 'Thrash gallops often ~160–180 BPM', 'Breakdowns may feel half-time'],
      tip: 'Double-kick can read double — tap the snare pulse if the grid feels twice as fast.',
    },
    ru: {
      summary: 'От groove-металла до треша. Многие треки — 120–180 BPM.',
      subgenres: ['Groove Metal', 'Thrash', 'Metalcore', 'Prog Metal', 'Doom (медленнее)'],
      examples: ['Groove-стопы ~120–140 BPM', 'Thrash-галопы часто ~160–180 BPM', 'Breakdown’ы могут быть half-time'],
      tip: 'Double-kick может удвоить чтение — тапай пульс снейра, если сетка «вдвое быстрее».',
    },
  },
  'lo-fi': {
    related: ['hip-hop', 'ambient', 'jazz', 'pop'],
    en: {
      summary: 'Dusty swing and study-beat calm. Lo-fi hip-hop usually breathes between 70 and 90 BPM.',
      subgenres: ['Lo-fi Hip Hop', 'Chillhop', 'Jazzhop', 'Study Beats', 'Bedroom Beats'],
      examples: ['Classic chillhop playlists ~75–85 BPM', 'Jazzy sample loops ~80 BPM', 'Rainy-night beats ~70–78 BPM'],
      tip: 'Swing makes taps uneven — take more taps (10–16) before copying BPM.',
    },
    ru: {
      summary: 'Пыльный swing и спокойный study-бит. Lo-fi hip-hop обычно 70–90 BPM.',
      subgenres: ['Lo-fi Hip Hop', 'Chillhop', 'Jazzhop', 'Study Beats', 'Bedroom Beats'],
      examples: ['Классические chillhop-плейлисты ~75–85 BPM', 'Jazz-семплы ~80 BPM', 'Ночные биты ~70–78 BPM'],
      tip: 'Swing делает тапы неровными — набери 10–16 ударов перед Copy.',
    },
  },
  ambient: {
    related: ['lo-fi', 'gospel', 'trance'],
    en: {
      summary: 'Slow pulse or implied tempo. Ambient pieces often breathe between 60 and 90 BPM — if they pulse at all.',
      subgenres: ['Dark Ambient', 'Ambient Techno', 'Drone', 'New Age adjacent', 'Cinematic Ambient'],
      examples: ['Brian Eno-style pads (pulse optional)', 'Ambient techno around ~80–100 BPM', 'Film drones with no strict grid'],
      tip: 'If there is no clear kick, tap a repeating motif — or skip BPM and work by feel.',
    },
    ru: {
      summary: 'Медленный или едва заметный пульс. Ambient часто 60–90 BPM — если темп вообще явный.',
      subgenres: ['Dark Ambient', 'Ambient Techno', 'Drone', 'New Age', 'Cinematic Ambient'],
      examples: ['Пэды в духе Brian Eno (пульс не обязателен)', 'Ambient techno ~80–100 BPM', 'Саундтрек-дроны без жёсткой сетки'],
      tip: 'Нет кика — тапай повторяющийся мотив или работай без BPM.',
    },
  },
  reggaeton: {
    related: ['afrobeat', 'bachata', 'hip-hop', 'pop'],
    en: {
      summary: 'Dembow bounce. Reggaeton typically locks around 90–100 BPM.',
      subgenres: ['Classic Dembow', 'Latin Trap blend', 'Old-school Reggaeton', 'Pop Reggaeton', 'Dembow Dominicano'],
      examples: ['Daddy Yankee-era dembow ~95 BPM', 'Modern Latin hits ~90–98 BPM', 'Club reggaeton ~96–100 BPM'],
      tip: 'Tap the dembow “boom-ch-boom-chick” pulse, not every hi-hat tick.',
    },
    ru: {
      summary: 'Dembow-грув. Reggaeton обычно держится около 90–100 BPM.',
      subgenres: ['Classic Dembow', 'Latin Trap blend', 'Old-school Reggaeton', 'Pop Reggaeton', 'Dembow Dominicano'],
      examples: ['Dembow эпохи Daddy Yankee ~95 BPM', 'Современные Latin-хиты ~90–98 BPM', 'Club reggaeton ~96–100 BPM'],
      tip: 'Тапай пульс dembow, а не каждый тик хэта.',
    },
  },
  afrobeat: {
    related: ['house', 'reggaeton', 'pop'],
    en: {
      summary: 'Polyrhythmic groove with dancefloor lift. Modern Afrobeats/Afrobeat club tracks often sit around 100–130 BPM.',
      subgenres: ['Afrobeats', 'Afro House', 'Highlife-influenced', 'Amapiano-adjacent', 'Afrofusion'],
      examples: ['Wizkid / Burna Boy midtempo hits ~100–110 BPM', 'Afro house floors ~120–125 BPM', 'Percussion-led club cuts ~115–128 BPM'],
      tip: 'Percussion is dense — lock to the kick or clap pattern you would count in.',
    },
    ru: {
      summary: 'Полиритмия и танцпол. Современный Afrobeats/Afrobeat часто около 100–130 BPM.',
      subgenres: ['Afrobeats', 'Afro House', 'Highlife', 'Amapiano-adjacent', 'Afrofusion'],
      examples: ['Midtempo Wizkid / Burna Boy ~100–110 BPM', 'Afro house ~120–125 BPM', 'Перкуссионные club-каты ~115–128 BPM'],
      tip: 'Перкуссии много — лови кик или хлопок, который реально считаешь.',
    },
  },
  'jersey-club': {
    related: ['house', 'phonk', 'trap'],
    en: {
      summary: 'Chopped samples and bed-squeak swing. Jersey club often lives near 130–140 BPM.',
      subgenres: ['Classic Jersey', 'Baltimore Club cousin', 'Club / Bed Squeak', 'Hybrid Club', 'UK Club edits'],
      examples: ['DJ Sliink-type energy ~140 BPM', 'Viral club edits ~132–138 BPM', 'Chopped vocal tools ~134–140 BPM'],
      tip: 'The swing is uneven — keep tapping through chops until confidence says Stable.',
    },
    ru: {
      summary: 'Нарезанные семплы и характерный swing. Jersey club часто около 130–140 BPM.',
      subgenres: ['Classic Jersey', 'Baltimore Club', 'Bed Squeak', 'Hybrid Club', 'UK Club edits'],
      examples: ['Энергия в духе DJ Sliink ~140 BPM', 'Вирусные club-эдиты ~132–138 BPM', 'Нарезанный вокал ~134–140 BPM'],
      tip: 'Swing неровный — тапай через нарезы, пока не будет Stable.',
    },
  },
  phonk: {
    related: ['trap', 'jersey-club', 'hip-hop', 'dubstep'],
    en: {
      summary: 'Drift and cowbell energy. Drift phonk frequently sits from the 130s into higher 150–160 BPM territory.',
      subgenres: ['Drift Phonk', 'Lo-fi Phonk', 'House Phonk', 'Cowbell Phonk', 'Memphis-inspired'],
      examples: ['Drift phonk racetrack edits ~140–160 BPM', 'Cowbell club tools ~140 BPM', 'Slower Memphis-inspired beds ~120–130'],
      tip: 'Cowbell can feel like double-time — tap the kick underneath, then adjust with ÷2/×2.',
    },
    ru: {
      summary: 'Drift и cowbell. Drift phonk часто от ~130 до 150–160 BPM.',
      subgenres: ['Drift Phonk', 'Lo-fi Phonk', 'House Phonk', 'Cowbell Phonk', 'Memphis-inspired'],
      examples: ['Drift phonk для “трассы” ~140–160 BPM', 'Cowbell club tools ~140 BPM', 'Более медленный Memphis-inspired ~120–130'],
      tip: 'Cowbell может звучать как double-time — тапай кик и крути ÷2/×2.',
    },
  },
  hardstyle: {
    related: ['trance', 'techno', 'metal'],
    en: {
      summary: 'Reverse-bass punches and festival energy. Hardstyle typically locks around 150–160 BPM.',
      subgenres: ['Raw Hardstyle', 'Euphoric Hardstyle', 'Hardcore adjacent', 'Dubstyle', 'Early Hardstyle'],
      examples: ['Festival anthems ~150 BPM', 'Raw kicks ~150–155 BPM', 'Euphoric builds ~150 BPM'],
      tip: 'The kick is huge — tap every kick, not the reverse-bass decoration between hits.',
    },
    ru: {
      summary: 'Reverse-bass и фестивальная энергия. Hardstyle обычно 150–160 BPM.',
      subgenres: ['Raw Hardstyle', 'Euphoric Hardstyle', 'Hardcore adjacent', 'Dubstyle', 'Early Hardstyle'],
      examples: ['Фестивальные гимны ~150 BPM', 'Raw-кики ~150–155 BPM', 'Euphoric-подъёмы ~150 BPM'],
      tip: 'Кик огромный — тапай каждый кик, а не украшения reverse-bass между ударами.',
    },
  },
  jazz: {
    related: ['lo-fi', 'gospel', 'pop', 'ambient'],
    en: {
      summary: 'Swing, rubato, and wide tempos. Jazz usefully spans about 80–160 BPM depending on ballad vs up-tempo swing.',
      subgenres: ['Swing', 'Bebop', 'Jazz Ballad', 'Fusion', 'Acid Jazz'],
      examples: ['Ballads ~60–80 felt', 'Medium swing ~120–140', 'Bebop burners often faster'],
      tip: 'Tap the quarter-note walk, not every swung eighth — swing will fake “uneven” BPM.',
    },
    ru: {
      summary: 'Swing, rubato и широкий разброс. Практичный ориентир — около 80–160 BPM (баллада vs up-tempo).',
      subgenres: ['Swing', 'Bebop', 'Jazz Ballad', 'Fusion', 'Acid Jazz'],
      examples: ['Баллады ~60–80 по ощущению', 'Medium swing ~120–140', 'Bebop часто быстрее'],
      tip: 'Тапай четверти “шага”, не каждый swung eighth — swing ломает ровность.',
    },
  },
  salsa: {
    related: ['bachata', 'afrobeat', 'pop'],
    en: {
      summary: 'Clave-driven dance music. Salsa is often counted fast on the grid — about 180–220 BPM — while dancers feel a slower pulse.',
      subgenres: ['Salsa Dura', 'Salsa Romántica', 'Timba', 'Mambo-influenced', 'Casino'],
      examples: ['Classic salsa dura ~200 BPM written', 'Romantic salsa often a touch slower', 'Timba can push the upper range'],
      tip: 'If your tap lands ~95–110, you may be feeling half the written tempo — try ×2 for DAW notation.',
    },
    ru: {
      summary: 'Музыка на clavé. Salsa часто считают быстро на сетке — около 180–220 BPM — хотя танцоры чувствуют более медленный пульс.',
      subgenres: ['Salsa Dura', 'Salsa Romántica', 'Timba', 'Mambo', 'Casino'],
      examples: ['Классическая salsa dura ~200 BPM на сетке', 'Романтическая salsa чуть медленнее', 'Timba может быть наверху диапазона'],
      tip: 'Если натапал ~95–110 — возможно half от письменного темпа; для DAW попробуй ×2.',
    },
  },
  bachata: {
    related: ['reggaeton', 'salsa', 'pop'],
    en: {
      summary: 'Guitar-led romantic groove. Modern bachata commonly sits around 120–140 BPM.',
      subgenres: ['Traditional Bachata', 'Bachata Sensual', 'Urban Bachata', 'Bachatón', 'Pop Bachata'],
      examples: ['Aventura-era hits ~130 BPM', 'Sensual bachata ~120–128 BPM', 'Urban fusions ~128–140 BPM'],
      tip: 'Tap the güira/guitar pulse you would step to — not every ghost note.',
    },
    ru: {
      summary: 'Гитарный романтический грув. Современная bachata обычно 120–140 BPM.',
      subgenres: ['Traditional Bachata', 'Bachata Sensual', 'Urban Bachata', 'Bachatón', 'Pop Bachata'],
      examples: ['Хиты эпохи Aventura ~130 BPM', 'Sensual bachata ~120–128 BPM', 'Urban-слияния ~128–140 BPM'],
      tip: 'Тапай пульс güira/гитары, под который шагаешь — не каждый ghost note.',
    },
  },
  gospel: {
    related: ['jazz', 'pop', 'country', 'ambient'],
    en: {
      summary: 'Choir lift and pocket. Many gospel songs sit between 60 and 100 BPM, with uptempo praise pushing higher.',
      subgenres: ['Traditional Gospel', 'Contemporary Gospel', 'Gospel Choir', 'Praise & Worship', 'Gospel Blues'],
      examples: ['Slow worship beds ~60–75 BPM', 'Choir drive ~80–95 BPM', 'Uptempo praise can exceed 100'],
      tip: 'Organs and claps can disguise the downbeat — find the bass/kick first.',
    },
    ru: {
      summary: 'Хор и карман. Многие gospel-песни — 60–100 BPM; быстрый praise бывает выше.',
      subgenres: ['Traditional Gospel', 'Contemporary Gospel', 'Gospel Choir', 'Praise & Worship', 'Gospel Blues'],
      examples: ['Медленный worship ~60–75 BPM', 'Хоровой драйв ~80–95 BPM', 'Быстрый praise может быть выше 100'],
      tip: 'Орган и хлопки маскируют долю — сначала найди бас/кик.',
    },
  },
  country: {
    related: ['rock', 'pop', 'gospel', 'hip-hop'],
    en: {
      summary: 'Story-first grooves from ballads to two-step. Country commonly spans about 80–120 BPM.',
      subgenres: ['Country Ballad', 'Bro-Country', 'Outlaw', 'Country Pop', 'Bluegrass-influenced'],
      examples: ['Ballads ~70–85 BPM', 'Radio country-pop ~90–110 BPM', 'Two-step feel often ~100–120'],
      tip: 'Train-beat snare can feel double — tap the bass/kick for the song tempo.',
    },
    ru: {
      summary: 'От баллад до two-step. Country обычно около 80–120 BPM.',
      subgenres: ['Country Ballad', 'Bro-Country', 'Outlaw', 'Country Pop', 'Bluegrass-influenced'],
      examples: ['Баллады ~70–85 BPM', 'Radio country-pop ~90–110 BPM', 'Two-step часто ~100–120'],
      tip: 'Train-beat на снейре может казаться double — тапай бас/кик.',
    },
  },
};

export const genres: Genre[] = genreCatalog.map((core) => {
  const extra = extras[core.slug];
  if (!extra) {
    throw new Error(`Missing genre copy for ${core.slug}`);
  }
  return {
    slug: core.slug,
    bpmMin: core.bpmMin,
    bpmMax: core.bpmMax,
    order: core.order,
    related: extra.related,
    en: { name: core.name.en, ...extra.en },
    ru: { name: core.name.ru, ...extra.ru },
  };
});

export function getGenre(slug: string): Genre | undefined {
  return genres.find((g) => g.slug === slug);
}

export function relatedGenres(genre: Genre): Genre[] {
  return genre.related
    .map((slug) => getGenre(slug))
    .filter((g): g is Genre => Boolean(g));
}
