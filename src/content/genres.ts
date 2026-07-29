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
  es: GenreLocaleCopy;
  fr: GenreLocaleCopy;
  pt: GenreLocaleCopy;
}

type GenreExtra = {
  related: string[];
  en: Omit<GenreLocaleCopy, 'name'>;
  ru: Omit<GenreLocaleCopy, 'name'>;
  es: Omit<GenreLocaleCopy, 'name'>;
  fr: Omit<GenreLocaleCopy, 'name'>;
  pt: Omit<GenreLocaleCopy, 'name'>;
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
    es: {
      summary:
        'Energía de club con four-on-the-floor. El house clásico suele estar entre 120 y 130 BPM para grooves estables en la pista.',
      subgenres: ['Deep House', 'Tech House', 'Progressive House', 'Afro House', 'Disco House'],
      examples: ['Daft Punk — One More Time (~123 BPM)', 'Fisher — Losing It (~125 BPM)', 'Disclosure — Latch (~122 BPM)'],
      tip: 'Toca el kick en cada pulso; si el pad marca ~60–65, probablemente estás en half-time — usa ×2.',
    },
    fr: {
      summary:
        'Énergie club en four-on-the-floor. Le house classique se situe généralement entre 120 et 130 BPM pour des grooves réguliers sur la piste.',
      subgenres: ['Deep House', 'Tech House', 'Progressive House', 'Afro House', 'Disco House'],
      examples: ['Daft Punk — One More Time (~123 BPM)', 'Fisher — Losing It (~125 BPM)', 'Disclosure — Latch (~122 BPM)'],
      tip: 'Tapez sur le kick à chaque temps ; si le pad affiche ~60–65, vous êtes probablement en half-time — utilisez ×2.',
    },
    pt: {
      summary:
        'Energia de clube com four-on-the-floor. O house clássico costuma ficar entre 120 e 130 BPM para grooves estáveis na pista.',
      subgenres: ['Deep House', 'Tech House', 'Progressive House', 'Afro House', 'Disco House'],
      examples: ['Daft Punk — One More Time (~123 BPM)', 'Fisher — Losing It (~125 BPM)', 'Disclosure — Latch (~122 BPM)'],
      tip: 'Toque o kick a cada tempo; se o pad mostrar ~60–65, você provavelmente está em half-time — use ×2.',
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
    es: {
      summary:
        'Impulso hipnótico y contundente. El techno suele caer entre 125 y 140 BPM según la intensidad peak-time.',
      subgenres: ['Peak-time Techno', 'Minimal', 'Industrial Techno', 'Melodic Techno', 'Hard Techno'],
      examples: ['Charlotte de Witte — Heart of Mine (~138 BPM)', 'Amelie Lens — Follow (~132 BPM)', 'Carl Cox classics (~128–135 BPM)'],
      tip: 'Ancla al kick. Los temas warehouse pueden sentirse más lentos que la cuadrícula — confirma con el metrónomo.',
    },
    fr: {
      summary:
        'Pulsation entraînante et hypnotique. Le techno se situe souvent entre 125 et 140 BPM selon l’intensité peak-time.',
      subgenres: ['Peak-time Techno', 'Minimal', 'Industrial Techno', 'Melodic Techno', 'Hard Techno'],
      examples: ['Charlotte de Witte — Heart of Mine (~138 BPM)', 'Amelie Lens — Follow (~132 BPM)', 'Carl Cox classics (~128–135 BPM)'],
      tip: 'Verrouillez-vous sur le kick. Les morceaux warehouse peuvent sembler plus lents que la grille — confirmez avec le métronome.',
    },
    pt: {
      summary:
        'Pulso hipnótico e contundente. O techno costuma ficar entre 125 e 140 BPM conforme a intensidade peak-time.',
      subgenres: ['Peak-time Techno', 'Minimal', 'Industrial Techno', 'Melodic Techno', 'Hard Techno'],
      examples: ['Charlotte de Witte — Heart of Mine (~138 BPM)', 'Amelie Lens — Follow (~132 BPM)', 'Carl Cox classics (~128–135 BPM)'],
      tip: 'Trave no kick. Faixas warehouse podem parecer mais lentas que a grade — confirme com o metrônomo.',
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
    es: {
      summary: 'Builds elevadores y frases largas. Los tempos de trance suelen estar cerca de 130–145 BPM.',
      subgenres: ['Uplifting', 'Psytrance', 'Tech Trance', 'Vocal Trance', 'Progressive Trance'],
      examples: ['Armin van Buuren anthems (~138 BPM)', 'Above & Beyond — Sun & Moon (~128–132 BPM)', 'Classic Tiësto peak-time (~140 BPM)'],
      tip: 'Las frases son largas — toca 8–12 kicks antes de confiar en la lectura.',
    },
    fr: {
      summary: 'Montées énergiques et phrases longues. Les tempos trance se situent couramment autour de 130–145 BPM.',
      subgenres: ['Uplifting', 'Psytrance', 'Tech Trance', 'Vocal Trance', 'Progressive Trance'],
      examples: ['Armin van Buuren anthems (~138 BPM)', 'Above & Beyond — Sun & Moon (~128–132 BPM)', 'Classic Tiësto peak-time (~140 BPM)'],
      tip: 'Les phrases sont longues — tapez 8–12 kicks avant de faire confiance à la lecture.',
    },
    pt: {
      summary: 'Builds elevadores e frases longas. Os tempos de trance costumam ficar perto de 130–145 BPM.',
      subgenres: ['Uplifting', 'Psytrance', 'Tech Trance', 'Vocal Trance', 'Progressive Trance'],
      examples: ['Armin van Buuren anthems (~138 BPM)', 'Above & Beyond — Sun & Moon (~128–132 BPM)', 'Classic Tiësto peak-time (~140 BPM)'],
      tip: 'As frases são longas — toque 8–12 kicks antes de confiar na leitura.',
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
      examples: ['Pendulum — Propane Nightmares (~174 BPM)', 'Netsky liquid vibes (~174 BPM)', 'Классические amen-роллеры (~170–175 BPM)'],
      tip: 'Если тапаешь snare в half-time feel, увидишь ~85 — жми ×2 для «письменного» темпа DnB.',
    },
    es: {
      summary: 'Velocidad breakbeat. El DnB suele estar entre 160 y 180 BPM — rápido, pero a menudo se siente en half-time.',
      subgenres: ['Liquid', 'Neurofunk', 'Jump-Up', 'Jungle', 'Drumstep'],
      examples: ['Pendulum — Propane Nightmares (~174 BPM)', 'Netsky liquid vibes (~174 BPM)', 'Classic amen rollers (~170–175 BPM)'],
      tip: 'Si tocas el snare con sensación half-time, puedes ver ~85 — usa ×2 para el tempo escrito de DnB.',
    },
    fr: {
      summary: 'Vélocité breakbeat. Le DnB se situe typiquement entre 160 et 180 BPM — rapide, mais souvent ressenti en half-time.',
      subgenres: ['Liquid', 'Neurofunk', 'Jump-Up', 'Jungle', 'Drumstep'],
      examples: ['Pendulum — Propane Nightmares (~174 BPM)', 'Netsky liquid vibes (~174 BPM)', 'Classic amen rollers (~170–175 BPM)'],
      tip: 'Si vous tapez le snare en « half-time feel », vous pouvez voir ~85 — utilisez ×2 pour le tempo noté du DnB.',
    },
    pt: {
      summary: 'Velocidade breakbeat. O DnB costuma ficar entre 160 e 180 BPM — rápido, mas muitas vezes sentido em half-time.',
      subgenres: ['Liquid', 'Neurofunk', 'Jump-Up', 'Jungle', 'Drumstep'],
      examples: ['Pendulum — Propane Nightmares (~174 BPM)', 'Netsky liquid vibes (~174 BPM)', 'Classic amen rollers (~170–175 BPM)'],
      tip: 'Se você tocar o snare com sensação half-time, pode ver ~85 — use ×2 para o tempo escrito do DnB.',
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
    es: {
      summary: 'A menudo se nota alrededor de 140 BPM con una sensación half-time que se lee más cerca de 70 BPM.',
      subgenres: ['Brostep', 'Deep Dubstep', 'Riddim', 'Melodic Dubstep', 'UK Garage cousins'],
      examples: ['Skrillex-era peak drops (~140 BPM)', 'Burial night-bus moods (~140 half-time)', 'Modern riddim (~140 BPM)'],
      tip: 'Decide si quieres el 140 escrito o el ~70 sentido — usa ÷2 / ×2 tras un tap estable.',
    },
    fr: {
      summary: 'Souvent noté autour de 140 BPM avec un ressenti half-time qui se lit plutôt vers 70 BPM.',
      subgenres: ['Brostep', 'Deep Dubstep', 'Riddim', 'Melodic Dubstep', 'UK Garage cousins'],
      examples: ['Skrillex-era peak drops (~140 BPM)', 'Burial night-bus moods (~140 half-time)', 'Modern riddim (~140 BPM)'],
      tip: 'Décidez si vous voulez le 140 noté ou le ~70 ressenti — utilisez ÷2 / ×2 après un tap stable.',
    },
    pt: {
      summary: 'Costuma ser notado em torno de 140 BPM com sensação half-time que se lê mais perto de 70 BPM.',
      subgenres: ['Brostep', 'Deep Dubstep', 'Riddim', 'Melodic Dubstep', 'UK Garage cousins'],
      examples: ['Skrillex-era peak drops (~140 BPM)', 'Burial night-bus moods (~140 half-time)', 'Modern riddim (~140 BPM)'],
      tip: 'Decida se quer o 140 escrito ou o ~70 sentido — use ÷2 / ×2 após um tap estável.',
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
    es: {
      summary: 'Rolls de hi-hat sobre un bajo pesado. El trap moderno suele cuadrar entre 130 y 160 BPM (o half-time ~65–80).',
      subgenres: ['Atlanta Trap', 'Rage', 'Latin Trap', 'Drill', 'Cloud Trap'],
      examples: ['Metro Boomin-type 808 records (~140 BPM)', 'Travis Scott arena energy (~150 BPM)', 'Drill pockets (~140 half-time feel)'],
      tip: 'Los hats engañan — toca el pulso del kick/808 y confirma con ×2 si caíste en half-time.',
    },
    fr: {
      summary: 'Roulés de hi-hat sur une basse lourde. Le trap moderne se cale souvent entre 130 et 160 BPM (ou half-time ~65–80).',
      subgenres: ['Atlanta Trap', 'Rage', 'Latin Trap', 'Drill', 'Cloud Trap'],
      examples: ['Metro Boomin-type 808 records (~140 BPM)', 'Travis Scott arena energy (~150 BPM)', 'Drill pockets (~140 half-time feel)'],
      tip: 'Les chapeaux peuvent tromper — tapez le pulse kick/808, puis confirmez avec ×2 si vous êtes en half-time.',
    },
    pt: {
      summary: 'Rolls de hi-hat sobre um grave pesado. O trap moderno costuma ficar entre 130 e 160 BPM (ou half-time ~65–80).',
      subgenres: ['Atlanta Trap', 'Rage', 'Latin Trap', 'Drill', 'Cloud Trap'],
      examples: ['Metro Boomin-type 808 records (~140 BPM)', 'Travis Scott arena energy (~150 BPM)', 'Drill pockets (~140 half-time feel)'],
      tip: 'Os hats enganam — toque o pulso do kick/808 e confirme com ×2 se caiu em half-time.',
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
    es: {
      summary: 'Pocket y swing. Muchos temas de hip-hop están entre 80 y 100 BPM (o variantes en double-time).',
      subgenres: ['Boom Bap', 'Trap-influenced', 'West Coast', 'Lo-fi Hip Hop', 'Conscious'],
      examples: ['Classic boom-bap around ~90 BPM', 'J Dilla pocket feels (~88–96 BPM)', 'Modern radio rap often ~90–100 or double-time'],
      tip: 'Si los hats se sienten el doble de rápidos que tus taps, quizá necesites ×2 para la cuadrícula del DAW.',
    },
    fr: {
      summary: 'Pocket et swing. Beaucoup de morceaux hip-hop se situent entre 80 et 100 BPM (ou des variantes en double-time).',
      subgenres: ['Boom Bap', 'Trap-influenced', 'West Coast', 'Lo-fi Hip Hop', 'Conscious'],
      examples: ['Classic boom-bap around ~90 BPM', 'J Dilla pocket feels (~88–96 BPM)', 'Modern radio rap often ~90–100 or double-time'],
      tip: 'Si les chapeaux semblent deux fois plus rapides que vos taps, essayez ×2 pour la grille du DAW.',
    },
    pt: {
      summary: 'Pocket e swing. Muitas faixas de hip-hop ficam entre 80 e 100 BPM (ou variantes em double-time).',
      subgenres: ['Boom Bap', 'Trap-influenced', 'West Coast', 'Lo-fi Hip Hop', 'Conscious'],
      examples: ['Classic boom-bap around ~90 BPM', 'J Dilla pocket feels (~88–96 BPM)', 'Modern radio rap often ~90–100 or double-time'],
      tip: 'Se os hats parecerem o dobro de rápidos que seus toques, talvez precise de ×2 para a grade do DAW.',
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
    es: {
      summary: 'Tempos medios aptos para radio. El pop moderno suele agruparse entre 90 y 120 BPM.',
      subgenres: ['Dance Pop', 'Synth Pop', 'Indie Pop', 'K-Pop midtempo', 'Ballad'],
      examples: ['The Weeknd-type midtempo hits (~90–110 BPM)', 'Dance-pop choruses (~110–120 BPM)', 'Ballads often ~60–80 felt'],
      tip: 'Toca el backbeat del snare si el patrón del kick está sincopado — luego cruza con el metrónomo.',
    },
    fr: {
      summary: 'Tempos moyens radio-friendly. Le pop moderne se regroupe souvent entre 90 et 120 BPM.',
      subgenres: ['Dance Pop', 'Synth Pop', 'Indie Pop', 'K-Pop midtempo', 'Ballad'],
      examples: ['The Weeknd-type midtempo hits (~90–110 BPM)', 'Dance-pop choruses (~110–120 BPM)', 'Ballads often ~60–80 felt'],
      tip: 'Tapez le backbeat de la caisse claire si le kick est syncopé — puis vérifiez avec le métronome.',
    },
    pt: {
      summary: 'Tempos médios para rádio. O pop moderno costuma se agrupar entre 90 e 120 BPM.',
      subgenres: ['Dance Pop', 'Synth Pop', 'Indie Pop', 'K-Pop midtempo', 'Ballad'],
      examples: ['The Weeknd-type midtempo hits (~90–110 BPM)', 'Dance-pop choruses (~110–120 BPM)', 'Ballads often ~60–80 felt'],
      tip: 'Toque o backbeat da caixa se o padrão do kick estiver sincopado — depois confira com o metrônomo.',
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
    es: {
      summary: 'De himnos mid-tempo a riffs más rápidos. El rock suele abarcar 100–140 BPM.',
      subgenres: ['Classic Rock', 'Indie Rock', 'Punk', 'Alternative', 'Hard Rock'],
      examples: ['Arena anthems ~110–120 BPM', 'Punk burners ~160+ (outside this guide’s core band)', 'Indie midtempo ~100–115 BPM'],
      tip: 'Los fills del baterista pueden desestabilizar el tap — prioriza kick/snare durante 8–12 compases.',
    },
    fr: {
      summary: 'Des hymnes mid-tempo aux riffs plus rapides. Le rock couvre couramment 100–140 BPM.',
      subgenres: ['Classic Rock', 'Indie Rock', 'Punk', 'Alternative', 'Hard Rock'],
      examples: ['Arena anthems ~110–120 BPM', 'Punk burners ~160+ (outside this guide’s core band)', 'Indie midtempo ~100–115 BPM'],
      tip: 'Les fills du batteur peuvent fausser le tap — privilégiez kick/snare pendant 8–12 mesures.',
    },
    pt: {
      summary: 'De hinos mid-tempo a riffs mais rápidos. O rock costuma abranger 100–140 BPM.',
      subgenres: ['Classic Rock', 'Indie Rock', 'Punk', 'Alternative', 'Hard Rock'],
      examples: ['Arena anthems ~110–120 BPM', 'Punk burners ~160+ (outside this guide’s core band)', 'Indie midtempo ~100–115 BPM'],
      tip: 'Fills do baterista podem instabilizar o tap — priorize kick/snare por 8–12 compassos.',
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
    es: {
      summary: 'De stomps de groove metal a thrash cercano al blast. Muchos temas de metal caen entre 120 y 180 BPM.',
      subgenres: ['Groove Metal', 'Thrash', 'Metalcore', 'Prog Metal', 'Doom (slower outliers)'],
      examples: ['Groove stomps ~120–140 BPM', 'Thrash gallops often ~160–180 BPM', 'Breakdowns may feel half-time'],
      tip: 'El double-kick puede leerse al doble — toca el pulso del snare si la cuadrícula se siente el doble de rápida.',
    },
    fr: {
      summary: 'Des stomps groove metal au thrash proche du blast. Beaucoup de morceaux metal se situent entre 120 et 180 BPM.',
      subgenres: ['Groove Metal', 'Thrash', 'Metalcore', 'Prog Metal', 'Doom (slower outliers)'],
      examples: ['Groove stomps ~120–140 BPM', 'Thrash gallops often ~160–180 BPM', 'Breakdowns may feel half-time'],
      tip: 'Le double-kick peut doubler la lecture — tapez le pulse du snare si la grille semble deux fois plus rapide.',
    },
    pt: {
      summary: 'De stomps de groove metal a thrash próximo do blast. Muitas faixas de metal ficam entre 120 e 180 BPM.',
      subgenres: ['Groove Metal', 'Thrash', 'Metalcore', 'Prog Metal', 'Doom (slower outliers)'],
      examples: ['Groove stomps ~120–140 BPM', 'Thrash gallops often ~160–180 BPM', 'Breakdowns may feel half-time'],
      tip: 'O double-kick pode dobrar a leitura — toque o pulso do snare se a grade parecer o dobro de rápida.',
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
    es: {
      summary: 'Swing polvoriento y calma de study beat. El lo-fi hip-hop suele respirar entre 70 y 90 BPM.',
      subgenres: ['Lo-fi Hip Hop', 'Chillhop', 'Jazzhop', 'Study Beats', 'Bedroom Beats'],
      examples: ['Classic chillhop playlists ~75–85 BPM', 'Jazzy sample loops ~80 BPM', 'Rainy-night beats ~70–78 BPM'],
      tip: 'El swing desiguala los taps — haz más toques (10–16) antes de copiar el BPM.',
    },
    fr: {
      summary: 'Swing poussiéreux et calme study beat. Le lo-fi hip-hop respire généralement entre 70 et 90 BPM.',
      subgenres: ['Lo-fi Hip Hop', 'Chillhop', 'Jazzhop', 'Study Beats', 'Bedroom Beats'],
      examples: ['Classic chillhop playlists ~75–85 BPM', 'Jazzy sample loops ~80 BPM', 'Rainy-night beats ~70–78 BPM'],
      tip: 'Le swing rend les taps irréguliers — faites plus de taps (10–16) avant de copier le BPM.',
    },
    pt: {
      summary: 'Swing suave e calma de study beat. O lo-fi hip-hop costuma respirar entre 70 e 90 BPM.',
      subgenres: ['Lo-fi Hip Hop', 'Chillhop', 'Jazzhop', 'Study Beats', 'Bedroom Beats'],
      examples: ['Classic chillhop playlists ~75–85 BPM', 'Jazzy sample loops ~80 BPM', 'Rainy-night beats ~70–78 BPM'],
      tip: 'O swing deixa os toques irregulares — faça mais toques (10–16) antes de copiar o BPM.',
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
    es: {
      summary: 'Pulso lento o tempo implícito. Las piezas ambient suelen respirar entre 60 y 90 BPM — si es que pulsan.',
      subgenres: ['Dark Ambient', 'Ambient Techno', 'Drone', 'New Age adjacent', 'Cinematic Ambient'],
      examples: ['Brian Eno-style pads (pulse optional)', 'Ambient techno around ~80–100 BPM', 'Film drones with no strict grid'],
      tip: 'Si no hay kick claro, toca un motivo repetido — o omite el BPM y trabaja a oído.',
    },
    fr: {
      summary: 'Pulsation lente ou tempo implicite. Les morceaux ambient respirent souvent entre 60 et 90 BPM — s’ils pulsent du tout.',
      subgenres: ['Dark Ambient', 'Ambient Techno', 'Drone', 'New Age adjacent', 'Cinematic Ambient'],
      examples: ['Brian Eno-style pads (pulse optional)', 'Ambient techno around ~80–100 BPM', 'Film drones with no strict grid'],
      tip: 'Sans kick net, tapez un motif répétitif — ou ignorez le BPM et travaillez à l’oreille.',
    },
    pt: {
      summary: 'Pulso lento ou tempo implícito. Peças ambient costumam respirar entre 60 e 90 BPM — se pulsam.',
      subgenres: ['Dark Ambient', 'Ambient Techno', 'Drone', 'New Age adjacent', 'Cinematic Ambient'],
      examples: ['Brian Eno-style pads (pulse optional)', 'Ambient techno around ~80–100 BPM', 'Film drones with no strict grid'],
      tip: 'Se não houver kick claro, toque um motivo repetido — ou pule o BPM e trabalhe de ouvido.',
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
    es: {
      summary: 'Rebote dembow. El reggaeton suele fijarse alrededor de 90–100 BPM.',
      subgenres: ['Classic Dembow', 'Latin Trap blend', 'Old-school Reggaeton', 'Pop Reggaeton', 'Dembow Dominicano'],
      examples: ['Daddy Yankee-era dembow ~95 BPM', 'Modern Latin hits ~90–98 BPM', 'Club reggaeton ~96–100 BPM'],
      tip: 'Toca el pulso dembow «boom-ch-boom-chick», no cada tick del hi-hat.',
    },
    fr: {
      summary: 'Rebond dembow. Le reggaeton se verrouille typiquement autour de 90–100 BPM.',
      subgenres: ['Classic Dembow', 'Latin Trap blend', 'Old-school Reggaeton', 'Pop Reggaeton', 'Dembow Dominicano'],
      examples: ['Daddy Yankee-era dembow ~95 BPM', 'Modern Latin hits ~90–98 BPM', 'Club reggaeton ~96–100 BPM'],
      tip: 'Tapez le pulse dembow « boom-ch-boom-chick », pas chaque tick de hi-hat.',
    },
    pt: {
      summary: 'Balanço dembow. O reggaeton costuma travar em torno de 90–100 BPM.',
      subgenres: ['Classic Dembow', 'Latin Trap blend', 'Old-school Reggaeton', 'Pop Reggaeton', 'Dembow Dominicano'],
      examples: ['Daddy Yankee-era dembow ~95 BPM', 'Modern Latin hits ~90–98 BPM', 'Club reggaeton ~96–100 BPM'],
      tip: 'Toque o pulso dembow «boom-ch-boom-chick», não cada tick do hi-hat.',
    },
  },
  afrobeat: {
    related: ['house', 'reggaeton', 'pop'],
    en: {
      summary: 'Polyrhythmic groove with dancefloor lift. Modern Afrobeats/Afrobeat club tracks often sit around 100–130 BPM.',
      subgenres: ['Afrobeats', 'Afro House', 'Highlife-influenced', 'Amapiano-adjacent', 'Afrofusion'],
      examples: ['Wizkid / Burna Boy midtempo hits (~100–110 BPM)', 'Afro house floors ~120–125 BPM', 'Percussion-led club cuts ~115–128 BPM'],
      tip: 'Percussion is dense — lock to the kick or clap pattern you would count in.',
    },
    ru: {
      summary: 'Полиритмия и танцпол. Современный Afrobeats/Afrobeat часто около 100–130 BPM.',
      subgenres: ['Afrobeats', 'Afro House', 'Highlife', 'Amapiano-adjacent', 'Afrofusion'],
      examples: ['Midtempo Wizkid / Burna Boy ~100–110 BPM', 'Afro house ~120–125 BPM', 'Перкуссионные club-каты ~115–128 BPM'],
      tip: 'Перкуссии много — лови кик или хлопок, который реально считаешь.',
    },
    es: {
      summary: 'Groove polirítmico con empuje de pista. Los temas club de Afrobeats/Afrobeat moderno suelen estar entre 100 y 130 BPM.',
      subgenres: ['Afrobeats', 'Afro House', 'Highlife-influenced', 'Amapiano-adjacent', 'Afrofusion'],
      examples: ['Wizkid / Burna Boy midtempo hits (~100–110 BPM)', 'Afro house floors ~120–125 BPM', 'Percussion-led club cuts ~115–128 BPM'],
      tip: 'La percusión es densa — ancla al kick o al patrón de palmas con el que contarías.',
    },
    fr: {
      summary: 'Groove polyrythmique avec lift de piste. Les morceaux club Afrobeats/Afrobeat modernes se situent souvent entre 100 et 130 BPM.',
      subgenres: ['Afrobeats', 'Afro House', 'Highlife-influenced', 'Amapiano-adjacent', 'Afrofusion'],
      examples: ['Wizkid / Burna Boy midtempo hits (~100–110 BPM)', 'Afro house floors ~120–125 BPM', 'Percussion-led club cuts ~115–128 BPM'],
      tip: 'La percussion est dense — verrouillez-vous sur le kick ou le pattern de claps que vous compteriez.',
    },
    pt: {
      summary: 'Groove polirrítmico com impulso de pista. Faixas club de Afrobeats/Afrobeat moderno costumam ficar entre 100 e 130 BPM.',
      subgenres: ['Afrobeats', 'Afro House', 'Highlife-influenced', 'Amapiano-adjacent', 'Afrofusion'],
      examples: ['Wizkid / Burna Boy midtempo hits (~100–110 BPM)', 'Afro house floors ~120–125 BPM', 'Percussion-led club cuts ~115–128 BPM'],
      tip: 'A percussão é densa — trave no kick ou no padrão de palmas que você contaria.',
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
    es: {
      summary: 'Samples cortados y swing de bed-squeak. El jersey club suele vivir cerca de 130–140 BPM.',
      subgenres: ['Classic Jersey', 'Baltimore Club cousin', 'Club / Bed Squeak', 'Hybrid Club', 'UK Club edits'],
      examples: ['DJ Sliink-type energy ~140 BPM', 'Viral club edits ~132–138 BPM', 'Chopped vocal tools ~134–140 BPM'],
      tip: 'El swing es irregular — sigue tocando a través de los chops hasta que la confianza diga Stable.',
    },
    fr: {
      summary: 'Samples découpés et swing bed-squeak. Le jersey club vit souvent autour de 130–140 BPM.',
      subgenres: ['Classic Jersey', 'Baltimore Club cousin', 'Club / Bed Squeak', 'Hybrid Club', 'UK Club edits'],
      examples: ['DJ Sliink-type energy ~140 BPM', 'Viral club edits ~132–138 BPM', 'Chopped vocal tools ~134–140 BPM'],
      tip: 'Le swing est irrégulier — continuez à taper à travers les chops jusqu’à ce que la confiance affiche Stable.',
    },
    pt: {
      summary: 'Samples cortados e swing bed-squeak. O jersey club costuma viver perto de 130–140 BPM.',
      subgenres: ['Classic Jersey', 'Baltimore Club cousin', 'Club / Bed Squeak', 'Hybrid Club', 'UK Club edits'],
      examples: ['DJ Sliink-type energy ~140 BPM', 'Viral club edits ~132–138 BPM', 'Chopped vocal tools ~134–140 BPM'],
      tip: 'O swing é irregular — continue tocando pelos chops até a confiança mostrar Stable.',
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
    es: {
      summary: 'Energía drift y cowbell. El drift phonk suele ir desde los 130 hasta territorios más altos de 150–160 BPM.',
      subgenres: ['Drift Phonk', 'Lo-fi Phonk', 'House Phonk', 'Cowbell Phonk', 'Memphis-inspired'],
      examples: ['Drift phonk racetrack edits ~140–160 BPM', 'Cowbell club tools ~140 BPM', 'Slower Memphis-inspired beds ~120–130'],
      tip: 'La cowbell puede sentirse como double-time — toca el kick de abajo y ajusta con ÷2/×2.',
    },
    fr: {
      summary: 'Énergie drift et cowbell. Le drift phonk se situe souvent des années 130 vers des territoires plus hauts de 150–160 BPM.',
      subgenres: ['Drift Phonk', 'Lo-fi Phonk', 'House Phonk', 'Cowbell Phonk', 'Memphis-inspired'],
      examples: ['Drift phonk racetrack edits ~140–160 BPM', 'Cowbell club tools ~140 BPM', 'Slower Memphis-inspired beds ~120–130'],
      tip: 'La cowbell peut sembler en double-time — tapez le kick en dessous, puis ajustez avec ÷2/×2.',
    },
    pt: {
      summary: 'Energia drift e cowbell. O drift phonk costuma ir dos 130 até territórios mais altos de 150–160 BPM.',
      subgenres: ['Drift Phonk', 'Lo-fi Phonk', 'House Phonk', 'Cowbell Phonk', 'Memphis-inspired'],
      examples: ['Drift phonk racetrack edits ~140–160 BPM', 'Cowbell club tools ~140 BPM', 'Slower Memphis-inspired beds ~120–130'],
      tip: 'A cowbell pode parecer double-time — toque o kick por baixo e ajuste com ÷2/×2.',
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
    es: {
      summary: 'Golpes reverse-bass y energía de festival. El hardstyle suele fijarse alrededor de 150–160 BPM.',
      subgenres: ['Raw Hardstyle', 'Euphoric Hardstyle', 'Hardcore adjacent', 'Dubstyle', 'Early Hardstyle'],
      examples: ['Festival anthems ~150 BPM', 'Raw kicks ~150–155 BPM', 'Euphoric builds ~150 BPM'],
      tip: 'El kick es enorme — toca cada kick, no la decoración reverse-bass entre golpes.',
    },
    fr: {
      summary: 'Coups reverse-bass et énergie festival. Le hardstyle se verrouille typiquement autour de 150–160 BPM.',
      subgenres: ['Raw Hardstyle', 'Euphoric Hardstyle', 'Hardcore adjacent', 'Dubstyle', 'Early Hardstyle'],
      examples: ['Festival anthems ~150 BPM', 'Raw kicks ~150–155 BPM', 'Euphoric builds ~150 BPM'],
      tip: 'Le kick est énorme — tapez chaque kick, pas la décoration reverse-bass entre les coups.',
    },
    pt: {
      summary: 'Golpes reverse-bass e energia de festival. O hardstyle costuma travar em torno de 150–160 BPM.',
      subgenres: ['Raw Hardstyle', 'Euphoric Hardstyle', 'Hardcore adjacent', 'Dubstyle', 'Early Hardstyle'],
      examples: ['Festival anthems ~150 BPM', 'Raw kicks ~150–155 BPM', 'Euphoric builds ~150 BPM'],
      tip: 'O kick é enorme — toque cada kick, não a decoração reverse-bass entre os golpes.',
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
    es: {
      summary: 'Swing, rubato y tempos amplios. El jazz abarca útilmente unos 80–160 BPM según balada o swing up-tempo.',
      subgenres: ['Swing', 'Bebop', 'Jazz Ballad', 'Fusion', 'Acid Jazz'],
      examples: ['Ballads ~60–80 felt', 'Medium swing ~120–140', 'Bebop burners often faster'],
      tip: 'Toca el walk de negras, no cada octava con swing — el swing simula un BPM «irregular».',
    },
    fr: {
      summary: 'Swing, rubato et tempos larges. Le jazz couvre utilement environ 80–160 BPM selon ballade ou swing up-tempo.',
      subgenres: ['Swing', 'Bebop', 'Jazz Ballad', 'Fusion', 'Acid Jazz'],
      examples: ['Ballads ~60–80 felt', 'Medium swing ~120–140', 'Bebop burners often faster'],
      tip: 'Tapez la marche en noires, pas chaque croche swingée — le swing fausse un BPM « irrégulier ».',
    },
    pt: {
      summary: 'Swing, rubato e tempos amplos. O jazz abrange utilmente cerca de 80–160 BPM conforme balada ou swing up-tempo.',
      subgenres: ['Swing', 'Bebop', 'Jazz Ballad', 'Fusion', 'Acid Jazz'],
      examples: ['Ballads ~60–80 felt', 'Medium swing ~120–140', 'Bebop burners often faster'],
      tip: 'Toque a caminhada em semínimas, não cada colcheia com swing — o swing simula um BPM «irregular».',
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
    es: {
      summary: 'Música de baile guiada por la clave. La salsa suele contarse rápido en la cuadrícula — unos 180–220 BPM — aunque los bailarines sienten un pulso más lento.',
      subgenres: ['Salsa Dura', 'Salsa Romántica', 'Timba', 'Mambo-influenced', 'Casino'],
      examples: ['Classic salsa dura ~200 BPM written', 'Romantic salsa often a touch slower', 'Timba can push the upper range'],
      tip: 'Si tu tap cae en ~95–110, quizá sientes la mitad del tempo escrito — prueba ×2 para la notación en el DAW.',
    },
    fr: {
      summary: 'Musique de danse guidée par la clave. La salsa se compte souvent vite sur la grille — environ 180–220 BPM — tandis que les danseurs ressentent une pulsation plus lente.',
      subgenres: ['Salsa Dura', 'Salsa Romántica', 'Timba', 'Mambo-influenced', 'Casino'],
      examples: ['Classic salsa dura ~200 BPM written', 'Romantic salsa often a touch slower', 'Timba can push the upper range'],
      tip: 'Si votre tap tombe vers ~95–110, vous ressentez peut-être la moitié du tempo noté — essayez ×2 pour la notation DAW.',
    },
    pt: {
      summary: 'Música de dança guiada pela clave. A salsa costuma ser contada rápido na grade — cerca de 180–220 BPM — embora os dançarinos sintam um pulso mais lento.',
      subgenres: ['Salsa Dura', 'Salsa Romántica', 'Timba', 'Mambo-influenced', 'Casino'],
      examples: ['Classic salsa dura ~200 BPM written', 'Romantic salsa often a touch slower', 'Timba can push the upper range'],
      tip: 'Se seu tap cair em ~95–110, você pode estar sentindo metade do tempo escrito — tente ×2 para notação no DAW.',
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
    es: {
      summary: 'Groove romántico liderado por guitarra. La bachata moderna suele estar alrededor de 120–140 BPM.',
      subgenres: ['Traditional Bachata', 'Bachata Sensual', 'Urban Bachata', 'Bachatón', 'Pop Bachata'],
      examples: ['Aventura-era hits ~130 BPM', 'Sensual bachata ~120–128 BPM', 'Urban fusions ~128–140 BPM'],
      tip: 'Toca el pulso de güira/guitarra al que pisarías — no cada ghost note.',
    },
    fr: {
      summary: 'Groove romantique mené par la guitare. La bachata moderne se situe couramment autour de 120–140 BPM.',
      subgenres: ['Traditional Bachata', 'Bachata Sensual', 'Urban Bachata', 'Bachatón', 'Pop Bachata'],
      examples: ['Aventura-era hits ~130 BPM', 'Sensual bachata ~120–128 BPM', 'Urban fusions ~128–140 BPM'],
      tip: 'Tapez le pulse güira/guitare sur lequel vous danseriez — pas chaque ghost note.',
    },
    pt: {
      summary: 'Groove romântico liderado pela guitarra. A bachata moderna costuma ficar em torno de 120–140 BPM.',
      subgenres: ['Traditional Bachata', 'Bachata Sensual', 'Urban Bachata', 'Bachatón', 'Pop Bachata'],
      examples: ['Aventura-era hits ~130 BPM', 'Sensual bachata ~120–128 BPM', 'Urban fusions ~128–140 BPM'],
      tip: 'Toque o pulso de güira/guitarra no qual você pisaria — não cada ghost note.',
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
    es: {
      summary: 'Elevación del coro y pocket. Muchas canciones gospel están entre 60 y 100 BPM, con el praise up-tempo empujando más arriba.',
      subgenres: ['Traditional Gospel', 'Contemporary Gospel', 'Gospel Choir', 'Praise & Worship', 'Gospel Blues'],
      examples: ['Slow worship beds ~60–75 BPM', 'Choir drive ~80–95 BPM', 'Uptempo praise can exceed 100'],
      tip: 'Los órganos y las palmas pueden ocultar el downbeat — encuentra primero el bajo/kick.',
    },
    fr: {
      summary: 'Lift du chœur et pocket. Beaucoup de chansons gospel se situent entre 60 et 100 BPM, le praise up-tempo poussant plus haut.',
      subgenres: ['Traditional Gospel', 'Contemporary Gospel', 'Gospel Choir', 'Praise & Worship', 'Gospel Blues'],
      examples: ['Slow worship beds ~60–75 BPM', 'Choir drive ~80–95 BPM', 'Uptempo praise can exceed 100'],
      tip: 'Les orgues et les claps peuvent masquer le downbeat — trouvez d’abord la basse/le kick.',
    },
    pt: {
      summary: 'Elevação do coral e pocket. Muitas músicas gospel ficam entre 60 e 100 BPM, com praise up-tempo indo mais alto.',
      subgenres: ['Traditional Gospel', 'Contemporary Gospel', 'Gospel Choir', 'Praise & Worship', 'Gospel Blues'],
      examples: ['Slow worship beds ~60–75 BPM', 'Choir drive ~80–95 BPM', 'Uptempo praise can exceed 100'],
      tip: 'Órgãos e palmas podem esconder o downbeat — encontre primeiro o baixo/kick.',
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
    es: {
      summary: 'Grooves centrados en la historia, de baladas a two-step. El country suele abarcar unos 80–120 BPM.',
      subgenres: ['Country Ballad', 'Bro-Country', 'Outlaw', 'Country Pop', 'Bluegrass-influenced'],
      examples: ['Ballads ~70–85 BPM', 'Radio country-pop ~90–110 BPM', 'Two-step feel often ~100–120'],
      tip: 'El snare train-beat puede sentirse al doble — toca el bajo/kick para el tempo de la canción.',
    },
    fr: {
      summary: 'Grooves axés sur l’histoire, des ballades au two-step. Le country couvre couramment environ 80–120 BPM.',
      subgenres: ['Country Ballad', 'Bro-Country', 'Outlaw', 'Country Pop', 'Bluegrass-influenced'],
      examples: ['Ballads ~70–85 BPM', 'Radio country-pop ~90–110 BPM', 'Two-step feel often ~100–120'],
      tip: 'Le snare train-beat peut sembler doubler — tapez la basse/le kick pour le tempo du morceau.',
    },
    pt: {
      summary: 'Grooves centrados na história, de baladas a two-step. O country costuma abranger cerca de 80–120 BPM.',
      subgenres: ['Country Ballad', 'Bro-Country', 'Outlaw', 'Country Pop', 'Bluegrass-influenced'],
      examples: ['Ballads ~70–85 BPM', 'Radio country-pop ~90–110 BPM', 'Two-step feel often ~100–120'],
      tip: 'O snare train-beat pode parecer o dobro — toque o baixo/kick para o tempo da música.',
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
    es: { name: core.name.es, ...extra.es },
    fr: { name: core.name.fr, ...extra.fr },
    pt: { name: core.name.pt, ...extra.pt },
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
