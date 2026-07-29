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
        'Four-on-the-floor club music. Classic house usually sits around 120–130 BPM. A steady dancefloor groove.',
      subgenres: ['Deep House', 'Tech House', 'Progressive House', 'Afro House', 'Disco House'],
      examples: ['Daft Punk. One More Time (~123 BPM)', 'Fisher. Losing It (~125 BPM)', 'Disclosure. Latch (~122 BPM)'],
      tip: 'Tap the kick every beat. If the pad reads ~60–65, you’re probably in half-time. Hit ×2.',
    },
    ru: {
      summary:
        'Four-on-the-floor на танцпол. Классический house обычно сидит в 120–130 BPM. Ровный кик, без суеты.',
      subgenres: ['Deep House', 'Tech House', 'Progressive House', 'Afro House', 'Disco House'],
      examples: ['Daft Punk. One More Time (~123 BPM)', 'Fisher. Losing It (~125 BPM)', 'Disclosure. Latch (~122 BPM)'],
      tip: 'Тапай кик на каждую долю. Если на экране ~60–65. Ты в half-time, жми ×2.',
    },
    es: {
      summary: 'Kick en cada negra, groove de club. El house clásico suele vivir entre 120 y 130 BPM.',
      subgenres: ['Deep House', 'Tech House', 'Progressive House', 'Afro House', 'Disco House'],
      examples: ['Daft Punk. One More Time (~123 BPM)', 'Fisher. Losing It (~125 BPM)', 'Disclosure. Latch (~122 BPM)'],
      tip: 'Toca el kick en cada tiempo. Si el pad marca ~60–65, casi seguro estás en half-time. Dale a ×2.',
    },
    fr: {
      summary: 'Four-on-the-floor pour la piste. Le house classique tourne souvent autour de 120–130 BPM.',
      subgenres: ['Deep House', 'Tech House', 'Progressive House', 'Afro House', 'Disco House'],
      examples: ['Daft Punk. One More Time (~123 BPM)', 'Fisher. Losing It (~125 BPM)', 'Disclosure. Latch (~122 BPM)'],
      tip: 'Tapez le kick à chaque temps. Si le pad affiche ~60–65, vous êtes probablement en half-time. Essayez ×2.',
    },
    pt: {
      summary:
        'Four-on-the-floor de pista. House clássico costuma ficar entre 120 e 130 BPM. Groove firme, sem pressa.',
      subgenres: ['Deep House', 'Tech House', 'Progressive House', 'Afro House', 'Disco House'],
      examples: ['Daft Punk. One More Time (~123 BPM)', 'Fisher. Losing It (~125 BPM)', 'Disclosure. Latch (~122 BPM)'],
      tip: 'Toque o kick em cada tempo. Se o pad mostrar ~60–65, você está em half-time. Aperte ×2.',
    },
  },
  techno: {
    related: ['house', 'trance', 'hardstyle'],
    en: {
      summary:
        'Driving and hypnotic. Techno usually lands between 125 and 140 BPM, depending how peak-time it gets.',
      subgenres: ['Peak-time Techno', 'Minimal', 'Industrial Techno', 'Melodic Techno', 'Hard Techno'],
      examples: ['Charlotte de Witte. Heart of Mine (~138 BPM)', 'Amelie Lens. Follow (~132 BPM)', 'Carl Cox classics (~128–135 BPM)'],
      tip: 'Lock to the kick. Warehouse tracks can feel slower than the grid. Check with the metronome.',
    },
    ru: {
      summary: 'Плотный ритм, мало лишнего. Techno чаще всего 125–140 BPM. От warehouse до peak-time.',
      subgenres: ['Peak-time Techno', 'Minimal', 'Industrial Techno', 'Melodic Techno', 'Hard Techno'],
      examples: ['Charlotte de Witte. Heart of Mine (~138 BPM)', 'Amelie Lens. Follow (~132 BPM)', 'Классика Carl Cox (~128–135 BPM)'],
      tip: 'Держись кика. Warehouse иногда ощущается медленнее сетки. Сверь с метрономом.',
    },
    es: {
      summary:
        'Ritmo hipnótico y directo. El techno suele estar entre 125 y 140 BPM, según lo peak-time que vaya.',
      subgenres: ['Peak-time Techno', 'Minimal', 'Industrial Techno', 'Melodic Techno', 'Hard Techno'],
      examples: ['Charlotte de Witte. Heart of Mine (~138 BPM)', 'Amelie Lens. Follow (~132 BPM)', 'Clásicos de Carl Cox (~128–135 BPM)'],
      tip: 'Agárrate al kick. Los temas warehouse a veces se sienten más lentos que la rejilla. Comprueba con el metrónomo.',
    },
    fr: {
      summary:
        'Rythme dense et hypnotique. Le techno tombe souvent entre 125 et 140 BPM, selon l’intensité.',
      subgenres: ['Peak-time Techno', 'Minimal', 'Industrial Techno', 'Melodic Techno', 'Hard Techno'],
      examples: ['Charlotte de Witte. Heart of Mine (~138 BPM)', 'Amelie Lens. Follow (~132 BPM)', 'Classiques Carl Cox (~128–135 BPM)'],
      tip: 'Restez collé au kick. Les tracks warehouse peuvent sembler plus lentes que la grille. Vérifiez au métronome.',
    },
    pt: {
      summary:
        'Ritmo denso e hipnótico. Techno costuma cair entre 125 e 140 BPM, do warehouse ao peak-time.',
      subgenres: ['Peak-time Techno', 'Minimal', 'Industrial Techno', 'Melodic Techno', 'Hard Techno'],
      examples: ['Charlotte de Witte. Heart of Mine (~138 BPM)', 'Amelie Lens. Follow (~132 BPM)', 'Clássicos Carl Cox (~128–135 BPM)'],
      tip: 'Fique no kick. Faixa warehouse pode parecer mais lenta que a grade. Confira no metrônomo.',
    },
  },
  trance: {
    related: ['techno', 'house', 'hardstyle'],
    en: {
      summary: 'Long phrases and big builds. Trance tempos commonly sit near 130–145 BPM.',
      subgenres: ['Uplifting', 'Psytrance', 'Tech Trance', 'Vocal Trance', 'Progressive Trance'],
      examples: ['Armin van Buuren anthems (~138 BPM)', 'Above & Beyond. Sun & Moon (~128–132 BPM)', 'Classic Tiësto peak-time (~140 BPM)'],
      tip: 'Phrases run long. Tap 8–12 kicks before you trust the number.',
    },
    ru: {
      summary: 'Длинные фразы и подъёмы. Trance обычно около 130–145 BPM.',
      subgenres: ['Uplifting', 'Psytrance', 'Tech Trance', 'Vocal Trance', 'Progressive Trance'],
      examples: ['Гимны Armin van Buuren (~138 BPM)', 'Above & Beyond. Sun & Moon (~128–132 BPM)', 'Peak-time Tiësto (~140 BPM)'],
      tip: 'Фразы длинные. Натапай 8–12 киков, прежде чем верить цифре.',
    },
    es: {
      summary: 'Builds largos y frases amplias. El trance suele ir cerca de 130–145 BPM.',
      subgenres: ['Uplifting', 'Psytrance', 'Tech Trance', 'Vocal Trance', 'Progressive Trance'],
      examples: ['Himnos de Armin van Buuren (~138 BPM)', 'Above & Beyond. Sun & Moon (~128–132 BPM)', 'Tiësto peak-time clásico (~140 BPM)'],
      tip: 'Las frases son largas. Toca 8–12 kicks antes de fiarte del número.',
    },
    fr: {
      summary: 'Longues phrases et montées. Le trance se situe souvent vers 130–145 BPM.',
      subgenres: ['Uplifting', 'Psytrance', 'Tech Trance', 'Vocal Trance', 'Progressive Trance'],
      examples: ['Hymnes Armin van Buuren (~138 BPM)', 'Above & Beyond. Sun & Moon (~128–132 BPM)', 'Peak-time Tiësto (~140 BPM)'],
      tip: 'Les phrases sont longues. Tapez 8–12 kicks avant de faire confiance au chiffre.',
    },
    pt: {
      summary: 'Builds longos e frases largas. Trance costuma ficar perto de 130–145 BPM.',
      subgenres: ['Uplifting', 'Psytrance', 'Tech Trance', 'Vocal Trance', 'Progressive Trance'],
      examples: ['Hinos Armin van Buuren (~138 BPM)', 'Above & Beyond. Sun & Moon (~128–132 BPM)', 'Tiësto peak-time clássico (~140 BPM)'],
      tip: 'As frases são longas. Toque 8–12 kicks antes de confiar no número.',
    },
  },
  'drum-and-bass': {
    related: ['dubstep', 'trap', 'hardstyle'],
    en: {
      summary:
        'Fast breakbeats. DnB is typically 160–180 BPM. Quick on the grid, but often felt in half-time.',
      subgenres: ['Liquid', 'Neurofunk', 'Jump-Up', 'Jungle', 'Drumstep'],
      examples: ['Pendulum. Propane Nightmares (~174 BPM)', 'Netsky liquid vibes (~174 BPM)', 'Classic amen rollers (~170–175 BPM)'],
      tip: 'If you tap the snare half-time feel you may see ~85. Hit ×2 for the written DnB tempo.',
    },
    ru: {
      summary: 'Быстрый breakbeat. DnB обычно 160–180 BPM, хотя тело часто кивает в half-time.',
      subgenres: ['Liquid', 'Neurofunk', 'Jump-Up', 'Jungle', 'Drumstep'],
      examples: ['Pendulum. Propane Nightmares (~174 BPM)', 'Netsky liquid vibes (~174 BPM)', 'Классические amen-роллеры (~170–175 BPM)'],
      tip: 'Если тапаешь snare в half-time feel, увидишь ~85. Жми ×2, чтобы получить «письменный» темп DnB.',
    },
    es: {
      summary: 'Breakbeat rápido. El DnB suele ir a 160–180 BPM, aunque a menudo se siente en half-time.',
      subgenres: ['Liquid', 'Neurofunk', 'Jump-Up', 'Jungle', 'Drumstep'],
      examples: ['Pendulum. Propane Nightmares (~174 BPM)', 'Netsky liquid vibes (~174 BPM)', 'Amen rollers clásicos (~170–175 BPM)'],
      tip: 'Si tocas el snare en half-time, verás ~85. Usa ×2 para el tempo escrito de DnB.',
    },
    fr: {
      summary:
        'Breakbeat rapide. Le DnB tourne typiquement à 160–180 BPM. Vite, mais souvent ressenti en half-time.',
      subgenres: ['Liquid', 'Neurofunk', 'Jump-Up', 'Jungle', 'Drumstep'],
      examples: ['Pendulum. Propane Nightmares (~174 BPM)', 'Netsky liquid (~174 BPM)', 'Amen rollers classiques (~170–175 BPM)'],
      tip: 'Si vous tapez le snare en half-time, vous verrez ~85. Utilisez ×2 pour le tempo « écrit » du DnB.',
    },
    pt: {
      summary:
        'Breakbeat rápido. DnB costuma ficar entre 160 e 180 BPM. Mas muita gente sente em half-time.',
      subgenres: ['Liquid', 'Neurofunk', 'Jump-Up', 'Jungle', 'Drumstep'],
      examples: ['Pendulum. Propane Nightmares (~174 BPM)', 'Netsky liquid (~174 BPM)', 'Amen rollers clássicos (~170–175 BPM)'],
      tip: 'Se você tocar o snare no feel half-time, pode ver ~85. Use ×2 para o tempo escrito do DnB.',
    },
  },
  dubstep: {
    related: ['trap', 'drum-and-bass', 'phonk'],
    en: {
      summary: 'Often written around 140 BPM with a half-time feel that reads closer to 70.',
      subgenres: ['Brostep', 'Deep Dubstep', 'Riddim', 'Melodic Dubstep', 'UK Garage cousins'],
      examples: ['Skrillex-era peak drops (~140 BPM)', 'Burial night-bus moods (~140 half-time)', 'Modern riddim (~140 BPM)'],
      tip: 'Decide if you want written 140 or felt ~70. Use ÷2 / ×2 after a stable tap.',
    },
    ru: {
      summary: 'На сетке часто ~140 BPM, а по ощущению ближе к 70. Half-time грув.',
      subgenres: ['Brostep', 'Deep Dubstep', 'Riddim', 'Melodic Dubstep', 'UK Garage'],
      examples: ['Пиковые дропы эпохи Skrillex (~140 BPM)', 'Night-bus настроение Burial (~140 half-time)', 'Современный riddim (~140 BPM)'],
      tip: 'Реши заранее: нужен письменный 140 или ощущаемые ~70. После стабильного тапа жми ÷2 / ×2.',
    },
    es: {
      summary: 'Suele escribirse alrededor de 140 BPM, con un half-time que se siente más cerca de 70.',
      subgenres: ['Brostep', 'Deep Dubstep', 'Riddim', 'Melodic Dubstep', 'UK Garage'],
      examples: ['Drops de la era Skrillex (~140 BPM)', 'Ambiente night-bus de Burial (~140 half-time)', 'Riddim actual (~140 BPM)'],
      tip: 'Decide si quieres el 140 escrito o el ~70 sentido. Usa ÷2 / ×2 cuando el tap esté estable.',
    },
    fr: {
      summary: 'Souvent noté autour de 140 BPM, avec un feeling half-time plus proche de 70 BPM.',
      subgenres: ['Brostep', 'Deep Dubstep', 'Riddim', 'Melodic Dubstep', 'UK Garage'],
      examples: ['Drops peak époque Skrillex (~140 BPM)', 'Ambiance night-bus Burial (~140 half-time)', 'Riddim actuel (~140 BPM)'],
      tip: 'Choisissez : 140 écrit ou ~70 ressenti. Après un tap stable, basculez avec ÷2 / ×2.',
    },
    pt: {
      summary: 'Em geral se escreve perto de 140 BPM, com feel half-time que se lê perto de 70.',
      subgenres: ['Brostep', 'Deep Dubstep', 'Riddim', 'Melodic Dubstep', 'UK Garage'],
      examples: ['Drops da era Skrillex (~140 BPM)', 'Burial night-bus (~140 half-time)', 'Riddim atual (~140 BPM)'],
      tip: 'Decida: 140 na grade ou ~70 no corpo. Depois de um tap estável, use ÷2 / ×2.',
    },
  },
  trap: {
    related: ['hip-hop', 'phonk', 'dubstep', 'pop'],
    en: {
      summary:
        'Hi-hat rolls over a heavy low end. Modern trap often grids at 130–160 BPM (or half-time ~65–80).',
      subgenres: ['Atlanta Trap', 'Rage', 'Latin Trap', 'Drill', 'Cloud Trap'],
      examples: ['Metro Boomin-type 808 records (~140 BPM)', 'Travis Scott arena energy (~150 BPM)', 'Drill pockets (~140 half-time feel)'],
      tip: 'Hats can trick you. Tap the kick/808 beat, then ×2 if you landed in half-time.',
    },
    ru: {
      summary: 'Мелкие хэты, тяжёлый низ. Современный trap часто 130–160 BPM (или half-time ~65–80).',
      subgenres: ['Atlanta Trap', 'Rage', 'Latin Trap', 'Drill', 'Cloud Trap'],
      examples: ['808-записи в духе Metro Boomin (~140 BPM)', 'Arena-energy Travis Scott (~150 BPM)', 'Drill-карманы (~140 half-time)'],
      tip: 'Хэты сбивают с толку. Тапай долю кика/808. И ×2, если попал в half-time.',
    },
    es: {
      summary: 'Hi-hats rápidos y bajo gordo. El trap moderno suele ir a 130–160 BPM (o half-time ~65–80).',
      subgenres: ['Atlanta Trap', 'Rage', 'Latin Trap', 'Drill', 'Cloud Trap'],
      examples: ['Temas 808 al estilo Metro Boomin (~140 BPM)', 'Travis Scott de arena (~150 BPM)', 'Drill (~140 con feel half-time)'],
      tip: 'Los hats engañan. Toca el ritmo del kick/808 y confirma con ×2 si caíste en half-time.',
    },
    fr: {
      summary:
        'Hi-hats rapides sur un grave lourd. Le trap moderne se cale souvent à 130–160 BPM (ou half-time ~65–80).',
      subgenres: ['Atlanta Trap', 'Rage', 'Latin Trap', 'Drill', 'Cloud Trap'],
      examples: ['808 façon Metro Boomin (~140 BPM)', 'Énergie arena Travis Scott (~150 BPM)', 'Pockets drill (~140 half-time)'],
      tip: 'Les hats trompent. Tapez le rythme du kick/808, puis ×2 si vous êtes tombé en half-time.',
    },
    pt: {
      summary:
        'Hats rápidos em cima de um grave pesado. Trap moderno costuma ir de 130 a 160 BPM (ou half-time ~65–80).',
      subgenres: ['Atlanta Trap', 'Rage', 'Latin Trap', 'Drill', 'Cloud Trap'],
      examples: ['808 no estilo Metro Boomin (~140 BPM)', 'Travis Scott arena (~150 BPM)', 'Drill (~140 half-time)'],
      tip: 'Hats enganam. Toque o ritmo do kick/808. Se caiu em half-time, ×2.',
    },
  },
  'hip-hop': {
    related: ['trap', 'pop', 'lo-fi'],
    en: {
      summary: 'Pocket and swing. A lot of hip-hop sits between 80 and 100 BPM (or double-time cousins).',
      subgenres: ['Boom Bap', 'Trap-influenced', 'West Coast', 'Lo-fi Hip Hop', 'Conscious'],
      examples: ['Classic boom-bap around ~90 BPM', 'J Dilla pocket feels (~88–96 BPM)', 'Modern radio rap often ~90–100 or double-time'],
      tip: 'If hats feel twice as fast as your taps, you may want ×2 for the DAW grid.',
    },
    ru: {
      summary: 'Карман и swing. Много hip-hop сидит в 80–100 BPM. Или в double-time вариантах рядом.',
      subgenres: ['Boom Bap', 'Trap-influenced', 'West Coast', 'Lo-fi Hip Hop', 'Conscious'],
      examples: ['Классический boom-bap ~90 BPM', 'Карман J Dilla (~88–96 BPM)', 'Современный radio rap часто ~90–100 или double-time'],
      tip: 'Если хэты вдвое быстрее твоих тапов. Для сетки DAW может понадобиться ×2.',
    },
    es: {
      summary: 'Pocket y swing. Mucho hip-hop vive entre 80 y 100 BPM (o variantes en double-time).',
      subgenres: ['Boom Bap', 'Trap-influenced', 'West Coast', 'Lo-fi Hip Hop', 'Conscious'],
      examples: ['Boom-bap clásico ~90 BPM', 'Pocket J Dilla (~88–96 BPM)', 'Rap de radio actual ~90–100 o double-time'],
      tip: 'Si los hats van el doble de rápido que tus taps, quizá necesites ×2 para la rejilla del DAW.',
    },
    fr: {
      summary:
        'Pocket et swing. Beaucoup de hip-hop tourne entre 80 et 100 BPM (ou des cousins en double-time).',
      subgenres: ['Boom Bap', 'Trap-influenced', 'West Coast', 'Lo-fi Hip Hop', 'Conscious'],
      examples: ['Boom-bap classique ~90 BPM', 'Pocket J Dilla (~88–96 BPM)', 'Rap radio actuel souvent ~90–100 ou double-time'],
      tip: 'Si les hats semblent deux fois plus rapides que vos taps, essayez ×2 pour la grille DAW.',
    },
    pt: {
      summary: 'Pocket e swing. Muito hip-hop fica entre 80 e 100 BPM (ou o dobro na grade).',
      subgenres: ['Boom Bap', 'Trap-influenced', 'West Coast', 'Lo-fi Hip Hop', 'Conscious'],
      examples: ['Boom-bap clássico ~90 BPM', 'Pocket J Dilla (~88–96 BPM)', 'Rap de rádio atual ~90–100 ou double-time'],
      tip: 'Se os hats parecerem o dobro dos seus toques, pode precisar de ×2 para a grade do DAW.',
    },
  },
  pop: {
    related: ['house', 'hip-hop', 'rock', 'country'],
    en: {
      summary: 'Mid tempos that sit well on radio. Modern pop often clusters between 90 and 120 BPM.',
      subgenres: ['Dance Pop', 'Synth Pop', 'Indie Pop', 'K-Pop midtempo', 'Ballad'],
      examples: ['The Weeknd-type midtempo hits (~90–110 BPM)', 'Dance-pop choruses (~110–120 BPM)', 'Ballads often ~60–80 felt'],
      tip: 'If the kick is syncopated, tap the snare backbeat. Then check with the metronome.',
    },
    ru: {
      summary: 'Средние темпы под радио. Современный pop часто между 90 и 120 BPM.',
      subgenres: ['Dance Pop', 'Synth Pop', 'Indie Pop', 'K-Pop midtempo', 'Ballad'],
      examples: ['Midtempo в духе The Weeknd (~90–110 BPM)', 'Dance-pop припевы (~110–120 BPM)', 'Баллады часто ~60–80 по ощущению'],
      tip: 'Кик синкопирован? Тапай snare на бэкбит и сверь с метрономом.',
    },
    es: {
      summary: 'Tempos medios de radio. El pop actual suele agruparse entre 90 y 120 BPM.',
      subgenres: ['Dance Pop', 'Synth Pop', 'Indie Pop', 'K-Pop midtempo', 'Ballad'],
      examples: ['Hits midtempo al estilo The Weeknd (~90–110 BPM)', 'Estribillos dance-pop (~110–120 BPM)', 'Baladas a menudo ~60–80 sentido'],
      tip: 'Si el kick va sincopado, toca el backbeat del snare. Luego cruza con el metrónomo.',
    },
    fr: {
      summary: 'Tempos moyens radio. Le pop actuel se regroupe souvent entre 90 et 120 BPM.',
      subgenres: ['Dance Pop', 'Synth Pop', 'Indie Pop', 'K-Pop midtempo', 'Ballad'],
      examples: ['Hits midtempo façon The Weeknd (~90–110 BPM)', 'Refrains dance-pop (~110–120 BPM)', 'Ballades souvent ~60–80 ressentis'],
      tip: 'Si le kick est syncopé, tapez le backbeat de la caisse claire. Puis vérifiez au métronome.',
    },
    pt: {
      summary: 'Tempos médios de rádio. Pop atual costuma se agrupar entre 90 e 120 BPM.',
      subgenres: ['Dance Pop', 'Synth Pop', 'Indie Pop', 'K-Pop midtempo', 'Ballad'],
      examples: ['Hits midtempo no estilo The Weeknd (~90–110 BPM)', 'Refrões dance-pop (~110–120 BPM)', 'Baladas ~60–80 no feel'],
      tip: 'Se o kick estiver sincopado, toque o backbeat da caixa. Depois confira no metrônomo.',
    },
  },
  rock: {
    related: ['metal', 'pop', 'country'],
    en: {
      summary: 'From mid-tempo anthems to faster riffs. Rock commonly spans 100–140 BPM.',
      subgenres: ['Classic Rock', 'Indie Rock', 'Punk', 'Alternative', 'Hard Rock'],
      examples: ['Arena anthems ~110–120 BPM', 'Punk burners ~160+ (outside this guide’s core band)', 'Indie midtempo ~100–115 BPM'],
      tip: 'Drummer fills can wobble a tap reading. Stick to kick/snare for 8–12 bars.',
    },
    ru: {
      summary: 'От mid-tempo гимнов до быстрых риффов. Rock часто 100–140 BPM.',
      subgenres: ['Classic Rock', 'Indie Rock', 'Punk', 'Alternative', 'Hard Rock'],
      examples: ['Arena-гимны ~110–120 BPM', 'Punk часто быстрее ядра этого гида', 'Indie midtempo ~100–115 BPM'],
      tip: 'Филы барабанщика шатают тап. Держись кика и снейра 8–12 тактов.',
    },
    es: {
      summary: 'Desde himnos mid-tempo hasta riffs más rápidos. El rock suele cubrir 100–140 BPM.',
      subgenres: ['Classic Rock', 'Indie Rock', 'Punk', 'Alternative', 'Hard Rock'],
      examples: ['Himnos de arena ~110–120 BPM', 'Punk a menudo más rápido que este rango (~160+)', 'Indie midtempo ~100–115 BPM'],
      tip: 'Los fills del batería desestabilizan el tap. Quédate en kick/snare durante 8–12 compases.',
    },
    fr: {
      summary: 'Des hymnes mid-tempo aux riffs plus rapides. Le rock couvre souvent 100–140 BPM.',
      subgenres: ['Classic Rock', 'Indie Rock', 'Punk', 'Alternative', 'Hard Rock'],
      examples: ['Hymnes arena ~110–120 BPM', 'Punk souvent plus vite que cette plage', 'Indie midtempo ~100–115 BPM'],
      tip: 'Les fills du batteur font bouger le tap. Tenez-vous au kick/snare sur 8–12 mesures.',
    },
    pt: {
      summary: 'De hino mid-tempo a riff mais rápido. Rock costuma cobrir 100–140 BPM.',
      subgenres: ['Classic Rock', 'Indie Rock', 'Punk', 'Alternative', 'Hard Rock'],
      examples: ['Hinos de arena ~110–120 BPM', 'Punk costuma passar de 160 (fora do núcleo desta faixa)', 'Indie midtempo ~100–115 BPM'],
      tip: 'Fill de bateria bagunça o tap. Fique no kick/snare por 8–12 compassos.',
    },
  },
  metal: {
    related: ['rock', 'hardstyle', 'drum-and-bass'],
    en: {
      summary: 'From groove stomps to thrash gallops. A lot of metal lands between 120 and 180 BPM.',
      subgenres: ['Groove Metal', 'Thrash', 'Metalcore', 'Prog Metal', 'Doom (slower outliers)'],
      examples: ['Groove stomps ~120–140 BPM', 'Thrash gallops often ~160–180 BPM', 'Breakdowns may feel half-time'],
      tip: 'Double-kick can read double. Tap the snare beat if the grid feels twice as fast.',
    },
    ru: {
      summary: 'От groove-стопов до треша. Многие треки, 120–180 BPM.',
      subgenres: ['Groove Metal', 'Thrash', 'Metalcore', 'Prog Metal', 'Doom (медленнее)'],
      examples: ['Groove-стопы ~120–140 BPM', 'Thrash-галопы часто ~160–180 BPM', 'Breakdown’ы могут быть half-time'],
      tip: 'Double-kick легко удваивает чтение. Тапай долю снейра, если сетка «вдвое быстрее».',
    },
    es: {
      summary: 'Desde groove metal hasta thrash. Muchos temas de metal caen entre 120 y 180 BPM.',
      subgenres: ['Groove Metal', 'Thrash', 'Metalcore', 'Prog Metal', 'Doom (más lento)'],
      examples: ['Stomps de groove ~120–140 BPM', 'Galopes thrash a menudo ~160–180 BPM', 'Los breakdowns pueden sentirse half-time'],
      tip: 'El double-kick puede leerse al doble. Toca el ritmo del snare si la rejilla se siente el doble de rápida.',
    },
    fr: {
      summary: 'Du groove metal au thrash. Beaucoup de metal tombe entre 120 et 180 BPM.',
      subgenres: ['Groove Metal', 'Thrash', 'Metalcore', 'Prog Metal', 'Doom (plus lent)'],
      examples: ['Stomps groove ~120–140 BPM', 'Galops thrash souvent ~160–180 BPM', 'Breakdowns parfois en half-time'],
      tip: 'Le double-kick peut doubler la lecture. Tapez le rythme du snare si la grille semble deux fois trop rapide.',
    },
    pt: {
      summary: 'Do stomp de groove metal ao thrash. Muita faixa de metal cai entre 120 e 180 BPM.',
      subgenres: ['Groove Metal', 'Thrash', 'Metalcore', 'Prog Metal', 'Doom (mais lento)'],
      examples: ['Groove stomps ~120–140 BPM', 'Galopes thrash ~160–180 BPM', 'Breakdowns podem parecer half-time'],
      tip: 'Double-kick pode dobrar a leitura. Toque o ritmo do snare se a grade parecer o dobro.',
    },
  },
  'lo-fi': {
    related: ['hip-hop', 'ambient', 'jazz', 'pop'],
    en: {
      summary: 'Dusty swing, study-beat calm. Lo-fi hip-hop usually sits between 70 and 90 BPM.',
      subgenres: ['Lo-fi Hip Hop', 'Chillhop', 'Jazzhop', 'Study Beats', 'Bedroom Beats'],
      examples: ['Classic chillhop playlists ~75–85 BPM', 'Jazzy sample loops ~80 BPM', 'Rainy-night beats ~70–78 BPM'],
      tip: 'Swing makes taps uneven. Take more taps (10–16) before copying BPM.',
    },
    ru: {
      summary: 'Пыльный swing и спокойный study-бит. Lo-fi hip-hop обычно 70–90 BPM.',
      subgenres: ['Lo-fi Hip Hop', 'Chillhop', 'Jazzhop', 'Study Beats', 'Bedroom Beats'],
      examples: ['Классические chillhop-плейлисты ~75–85 BPM', 'Jazz-семплы ~80 BPM', 'Ночные биты ~70–78 BPM'],
      tip: 'Swing делает тапы неровными. Набери 10–16 ударов, потом копируй.',
    },
    es: {
      summary: 'Swing suave y bit de estudio. El lo-fi hip-hop suele ir entre 70 y 90 BPM.',
      subgenres: ['Lo-fi Hip Hop', 'Chillhop', 'Jazzhop', 'Study Beats', 'Bedroom Beats'],
      examples: ['Playlists chillhop clásicas ~75–85 BPM', 'Loops con sample jazz ~80 BPM', 'Beats de noche lluviosa ~70–78 BPM'],
      tip: 'El swing deja los taps irregulares. Haz más toques (10–16) antes de copiar el BPM.',
    },
    fr: {
      summary: 'Swing poussiéreux, calme study beat. Le lo-fi hip-hop respire souvent entre 70 et 90 BPM.',
      subgenres: ['Lo-fi Hip Hop', 'Chillhop', 'Jazzhop', 'Study Beats', 'Bedroom Beats'],
      examples: ['Playlists chillhop classiques ~75–85 BPM', 'Loops jazz ~80 BPM', 'Beats de soirée pluvieuse ~70–78 BPM'],
      tip: 'Le swing rend les taps irréguliers. Prenez 10–16 taps avant de copier le BPM.',
    },
    pt: {
      summary: 'Swing sujo e beat calmo. Lo-fi hip-hop costuma respirar entre 70 e 90 BPM.',
      subgenres: ['Lo-fi Hip Hop', 'Chillhop', 'Jazzhop', 'Study Beats', 'Bedroom Beats'],
      examples: ['Playlists chillhop clássicas ~75–85 BPM', 'Loops com sample de jazz ~80 BPM', 'Beats de noite chuvosa ~70–78 BPM'],
      tip: 'Swing deixa o tap irregular. Faça 10–16 toques antes de copiar o BPM.',
    },
  },
  ambient: {
    related: ['lo-fi', 'gospel', 'trance'],
    en: {
      summary:
        'Slow beat, or barely any. Ambient pieces often breathe between 60 and 90 BPM, if there’s a clear beat at all.',
      subgenres: ['Dark Ambient', 'Ambient Techno', 'Drone', 'New Age adjacent', 'Cinematic Ambient'],
      examples: ['Brian Eno-style pads (tempo optional)', 'Ambient techno around ~80–100 BPM', 'Film drones with no strict grid'],
      tip: 'No clear kick? Tap a repeating motif, or skip BPM and work by feel.',
    },
    ru: {
      summary: 'Медленный или едва заметный ритм. Ambient часто 60–90 BPM. Если темп вообще явный.',
      subgenres: ['Dark Ambient', 'Ambient Techno', 'Drone', 'New Age', 'Cinematic Ambient'],
      examples: ['Пэды в духе Brian Eno (темп не обязателен)', 'Ambient techno ~80–100 BPM', 'Саундтрек-дроны без жёсткой сетки'],
      tip: 'Нет кика. Тапай повторяющийся мотив. Или работай без BPM, по ощущению.',
    },
    es: {
      summary:
        'Ritmo lento o apenas sugerido. El ambient suele respirar entre 60 y 90 BPM. Si es que hay ritmo claro.',
      subgenres: ['Dark Ambient', 'Ambient Techno', 'Drone', 'New Age', 'Cinematic Ambient'],
      examples: ['Pads al estilo Brian Eno (tempo opcional)', 'Ambient techno ~80–100 BPM', 'Drones de cine sin rejilla fija'],
      tip: 'Si no hay kick claro, toca un motivo que se repita, o olvídate del BPM y trabaja a oído.',
    },
    fr: {
      summary:
        'Rythme lent, ou presque pas de tempo. L’ambient respire souvent entre 60 et 90 BPM. Quand le tempo est clair.',
      subgenres: ['Dark Ambient', 'Ambient Techno', 'Drone', 'New Age', 'Cinematic Ambient'],
      examples: ['Pads façon Brian Eno (tempo optionnel)', 'Ambient techno ~80–100 BPM', 'Drones de film sans grille stricte'],
      tip: 'Pas de kick net? Tapez un motif qui se répète, ou ignorez le BPM et travaillez à l’oreille.',
    },
    pt: {
      summary: 'Ritmo lento ou só implícito. Ambient costuma ficar entre 60 e 90 BPM. Quando o tempo é claro.',
      subgenres: ['Dark Ambient', 'Ambient Techno', 'Drone', 'New Age', 'Cinematic Ambient'],
      examples: ['Pads no estilo Brian Eno (tempo opcional)', 'Ambient techno ~80–100 BPM', 'Drones de filme sem grade fixa'],
      tip: 'Sem kick claro, toque um motivo que se repete, ou ignore o BPM e vá de ouvido.',
    },
  },
  reggaeton: {
    related: ['afrobeat', 'bachata', 'hip-hop', 'pop'],
    en: {
      summary: 'Dembow bounce. Reggaeton typically locks around 90–100 BPM.',
      subgenres: ['Classic Dembow', 'Latin Trap blend', 'Old-school Reggaeton', 'Pop Reggaeton', 'Dembow Dominicano'],
      examples: ['Daddy Yankee-era dembow ~95 BPM', 'Modern Latin hits ~90–98 BPM', 'Club reggaeton ~96–100 BPM'],
      tip: 'Tap the dembow “boom-ch-boom-chick” groove, not every hi-hat tick.',
    },
    ru: {
      summary: 'Dembow-грув. Reggaeton обычно держится около 90–100 BPM.',
      subgenres: ['Classic Dembow', 'Latin Trap blend', 'Old-school Reggaeton', 'Pop Reggaeton', 'Dembow Dominicano'],
      examples: ['Dembow эпохи Daddy Yankee ~95 BPM', 'Современные Latin-хиты ~90–98 BPM', 'Club reggaeton ~96–100 BPM'],
      tip: 'Тапай ритм dembow, а не каждый тик хэта.',
    },
    es: {
      summary: 'El bounce del dembow. El reggaeton suele fijarse alrededor de 90–100 BPM.',
      subgenres: ['Classic Dembow', 'Latin Trap blend', 'Old-school Reggaeton', 'Pop Reggaeton', 'Dembow Dominicano'],
      examples: ['Dembow de la era Daddy Yankee ~95 BPM', 'Hits latinos actuales ~90–98 BPM', 'Reggaeton de club ~96–100 BPM'],
      tip: 'Toca el ritmo dembow «boom-ch-boom-chick», no cada tick del hi-hat.',
    },
    fr: {
      summary: 'Rebond dembow. Le reggaeton se cale souvent autour de 90–100 BPM.',
      subgenres: ['Classic Dembow', 'Latin Trap blend', 'Old-school Reggaeton', 'Pop Reggaeton', 'Dembow Dominicano'],
      examples: ['Dembow époque Daddy Yankee ~95 BPM', 'Hits latin actuels ~90–98 BPM', 'Club reggaeton ~96–100 BPM'],
      tip: 'Tapez le rythme dembow « boom-ch-boom-chick », pas chaque tick de hi-hat.',
    },
    pt: {
      summary: 'Balanço dembow. Reggaeton costuma travar perto de 90–100 BPM.',
      subgenres: ['Classic Dembow', 'Latin Trap blend', 'Old-school Reggaeton', 'Pop Reggaeton', 'Dembow Dominicano'],
      examples: ['Dembow da era Daddy Yankee ~95 BPM', 'Hits latinos atuais ~90–98 BPM', 'Reggaeton de clube ~96–100 BPM'],
      tip: 'Toque o ritmo dembow «boom-ch-boom-chick», não cada tick do hi-hat.',
    },
  },
  afrobeat: {
    related: ['house', 'reggaeton', 'pop'],
    en: {
      summary:
        'Polyrhythmic groove with dancefloor lift. Modern Afrobeats/Afrobeat club tracks often sit around 100–130 BPM.',
      subgenres: ['Afrobeats', 'Afro House', 'Highlife-influenced', 'Amapiano-adjacent', 'Afrofusion'],
      examples: ['Wizkid / Burna Boy midtempo hits (~100–110 BPM)', 'Afro house floors ~120–125 BPM', 'Percussion-led club cuts ~115–128 BPM'],
      tip: 'Percussion is dense. Lock to the kick or clap pattern you’d actually count.',
    },
    ru: {
      summary: 'Полиритмия и танцпол. Современный Afrobeats/Afrobeat часто около 100–130 BPM.',
      subgenres: ['Afrobeats', 'Afro House', 'Highlife', 'Amapiano-adjacent', 'Afrofusion'],
      examples: ['Midtempo Wizkid / Burna Boy ~100–110 BPM', 'Afro house ~120–125 BPM', 'Перкуссионные club-каты ~115–128 BPM'],
      tip: 'Перкуссии много. Лови кик или хлопок, который реально считаешь.',
    },
    es: {
      summary:
        'Groove polirrítmico con empuje de pista. Afrobeats/Afrobeat de club suele ir entre 100 y 130 BPM.',
      subgenres: ['Afrobeats', 'Afro House', 'Highlife', 'Amapiano-adjacent', 'Afrofusion'],
      examples: ['Hits midtempo de Wizkid / Burna Boy (~100–110 BPM)', 'Afro house ~120–125 BPM', 'Cortes de club con percusión ~115–128 BPM'],
      tip: 'Hay mucha percusión. Agárrate al kick o al patrón de palmas con el que contarías.',
    },
    fr: {
      summary:
        'Groove polyrythmique, poussée piste. L’Afrobeats / Afrobeat club moderne tourne souvent autour de 100–130 BPM.',
      subgenres: ['Afrobeats', 'Afro House', 'Highlife', 'Amapiano-adjacent', 'Afrofusion'],
      examples: ['Hits midtempo Wizkid / Burna Boy (~100–110 BPM)', 'Afro house ~120–125 BPM', 'Cuts club à percussion ~115–128 BPM'],
      tip: 'Percussion dense. Accrochez-vous au kick ou au pattern de claps que vous compteriez vraiment.',
    },
    pt: {
      summary:
        'Groove polirrítmico com empurrão de pista. Afrobeats/Afrobeat de clube costuma ficar entre 100 e 130 BPM.',
      subgenres: ['Afrobeats', 'Afro House', 'Highlife', 'Amapiano-adjacent', 'Afrofusion'],
      examples: ['Hits midtempo Wizkid / Burna Boy (~100–110 BPM)', 'Afro house ~120–125 BPM', 'Cortes de clube com percussão ~115–128 BPM'],
      tip: 'Percussão é densa. Trave no kick ou no padrão de palmas que você contaria.',
    },
  },
  'jersey-club': {
    related: ['house', 'phonk', 'trap'],
    en: {
      summary: 'Chopped samples and bed-squeak swing. Jersey club often lives near 130–140 BPM.',
      subgenres: ['Classic Jersey', 'Baltimore Club cousin', 'Club / Bed Squeak', 'Hybrid Club', 'UK Club edits'],
      examples: ['DJ Sliink-type energy ~140 BPM', 'Viral club edits ~132–138 BPM', 'Chopped vocal tools ~134–140 BPM'],
      tip: 'The swing is uneven. Keep tapping through chops until it says Stable.',
    },
    ru: {
      summary: 'Нарезанные семплы и свой swing. Jersey club часто около 130–140 BPM.',
      subgenres: ['Classic Jersey', 'Baltimore Club', 'Bed Squeak', 'Hybrid Club', 'UK Club edits'],
      examples: ['Энергия в духе DJ Sliink ~140 BPM', 'Вирусные club-эдиты ~132–138 BPM', 'Нарезанный вокал ~134–140 BPM'],
      tip: 'Swing неровный. Тапай через нарезы, пока не будет Stable.',
    },
    es: {
      summary:
        'Samples picados y ese swing de bed-squeak. El jersey club suele vivir cerca de 130–140 BPM.',
      subgenres: ['Classic Jersey', 'Baltimore Club', 'Club / Bed Squeak', 'Hybrid Club', 'UK Club edits'],
      examples: ['Energía al estilo DJ Sliink ~140 BPM', 'Edits virales de club ~132–138 BPM', 'Voces picadas ~134–140 BPM'],
      tip: 'El swing es irregular. Sigue tocando a través de los chops hasta que diga Estable.',
    },
    fr: {
      summary: 'Samples découpés et swing bed-squeak. Le jersey club vit souvent vers 130–140 BPM.',
      subgenres: ['Classic Jersey', 'Baltimore Club', 'Club / Bed Squeak', 'Hybrid Club', 'UK Club edits'],
      examples: ['Énergie façon DJ Sliink ~140 BPM', 'Édits club viraux ~132–138 BPM', 'Vocaux choppés ~134–140 BPM'],
      tip: 'Le swing est irrégulier. Continuez à taper à travers les chops jusqu’à Stable.',
    },
    pt: {
      summary: 'Samples cortados e swing de bed-squeak. Jersey club costuma viver perto de 130–140 BPM.',
      subgenres: ['Classic Jersey', 'Baltimore Club', 'Club / Bed Squeak', 'Hybrid Club', 'UK Club edits'],
      examples: ['Energia no estilo DJ Sliink ~140 BPM', 'Edits virais de clube ~132–138 BPM', 'Vocais cortados ~134–140 BPM'],
      tip: 'O swing é irregular. Continue tocando pelos chops até aparecer Estável.',
    },
  },
  phonk: {
    related: ['trap', 'jersey-club', 'hip-hop', 'dubstep'],
    en: {
      summary: 'Drift and cowbell. Drift phonk often runs from the 130s up into 150–160 BPM.',
      subgenres: ['Drift Phonk', 'Lo-fi Phonk', 'House Phonk', 'Cowbell Phonk', 'Memphis-inspired'],
      examples: ['Drift phonk racetrack edits ~140–160 BPM', 'Cowbell club tools ~140 BPM', 'Slower Memphis-inspired beds ~120–130'],
      tip: 'Cowbell can feel like double-time. Tap the kick underneath, then adjust with ÷2/×2.',
    },
    ru: {
      summary: 'Drift и cowbell. Drift phonk часто от ~130 до 150–160 BPM.',
      subgenres: ['Drift Phonk', 'Lo-fi Phonk', 'House Phonk', 'Cowbell Phonk', 'Memphis-inspired'],
      examples: ['Drift phonk для «трассы» ~140–160 BPM', 'Cowbell club tools ~140 BPM', 'Более медленный Memphis-inspired ~120–130'],
      tip: 'Cowbell может звучать как double-time. Тапай кик под ним и крути ÷2/×2.',
    },
    es: {
      summary: 'Drift y cowbell. El drift phonk suele ir de los 130 hasta 150–160 BPM.',
      subgenres: ['Drift Phonk', 'Lo-fi Phonk', 'House Phonk', 'Cowbell Phonk', 'Memphis-inspired'],
      examples: ['Edits drift phonk de «carrera» ~140–160 BPM', 'Tools de club con cowbell ~140 BPM', 'Bases más lentas estilo Memphis ~120–130'],
      tip: 'La cowbell puede sentirse double-time. Toca el kick de debajo y ajusta con ÷2/×2.',
    },
    fr: {
      summary: 'Drift et cowbell. Le drift phonk part souvent des 130 pour monter vers 150–160 BPM.',
      subgenres: ['Drift Phonk', 'Lo-fi Phonk', 'House Phonk', 'Cowbell Phonk', 'Memphis-inspired'],
      examples: ['Édits drift « racetrack » ~140–160 BPM', 'Outils club cowbell ~140 BPM', 'Lits Memphis plus lents ~120–130'],
      tip: 'La cowbell peut sonner en double-time. Tapez le kick en dessous, puis ajustez avec ÷2/×2.',
    },
    pt: {
      summary: 'Drift e cowbell. Drift phonk costuma ir dos 130 até 150–160 BPM.',
      subgenres: ['Drift Phonk', 'Lo-fi Phonk', 'House Phonk', 'Cowbell Phonk', 'Memphis-inspired'],
      examples: ['Edits drift phonk ~140–160 BPM', 'Tools de clube com cowbell ~140 BPM', 'Camadas Memphis mais lentas ~120–130'],
      tip: 'Cowbell pode parecer double-time. Toque o kick por baixo e ajuste com ÷2/×2.',
    },
  },
  hardstyle: {
    related: ['trance', 'techno', 'metal'],
    en: {
      summary: 'Reverse-bass punches and festival energy. Hardstyle typically locks around 150–160 BPM.',
      subgenres: ['Raw Hardstyle', 'Euphoric Hardstyle', 'Hardcore adjacent', 'Dubstyle', 'Early Hardstyle'],
      examples: ['Festival anthems ~150 BPM', 'Raw kicks ~150–155 BPM', 'Euphoric builds ~150 BPM'],
      tip: 'The kick is huge. Tap every kick, not the reverse-bass decoration between hits.',
    },
    ru: {
      summary: 'Reverse-bass и фестивальный удар. Hardstyle обычно 150–160 BPM.',
      subgenres: ['Raw Hardstyle', 'Euphoric Hardstyle', 'Hardcore adjacent', 'Dubstyle', 'Early Hardstyle'],
      examples: ['Фестивальные гимны ~150 BPM', 'Raw-кики ~150–155 BPM', 'Euphoric-подъёмы ~150 BPM'],
      tip: 'Кик огромный. Тапай каждый кик, а не украшения reverse-bass между ними.',
    },
    es: {
      summary: 'Reverse-bass y energía de festival. El hardstyle suele fijarse alrededor de 150–160 BPM.',
      subgenres: ['Raw Hardstyle', 'Euphoric Hardstyle', 'Hardcore adjacent', 'Dubstyle', 'Early Hardstyle'],
      examples: ['Himnos de festival ~150 BPM', 'Kicks raw ~150–155 BPM', 'Builds eufóricos ~150 BPM'],
      tip: 'El kick es enorme. Toca cada kick, no el adorno reverse-bass entre golpes.',
    },
    fr: {
      summary: 'Reverse-bass et énergie festival. Le hardstyle se cale souvent autour de 150–160 BPM.',
      subgenres: ['Raw Hardstyle', 'Euphoric Hardstyle', 'Hardcore adjacent', 'Dubstyle', 'Early Hardstyle'],
      examples: ['Hymnes festival ~150 BPM', 'Kicks raw ~150–155 BPM', 'Builds euphoric ~150 BPM'],
      tip: 'Le kick est énorme. Tapez chaque kick, pas la déco reverse-bass entre les coups.',
    },
    pt: {
      summary: 'Kick reverse-bass e energia de festival. Hardstyle costuma travar perto de 150–160 BPM.',
      subgenres: ['Raw Hardstyle', 'Euphoric Hardstyle', 'Hardcore adjacent', 'Dubstyle', 'Early Hardstyle'],
      examples: ['Hinos de festival ~150 BPM', 'Kicks raw ~150–155 BPM', 'Builds euphoric ~150 BPM'],
      tip: 'O kick é enorme. Toque cada kick, não o enfeite reverse-bass entre os golpes.',
    },
  },
  jazz: {
    related: ['lo-fi', 'gospel', 'pop', 'ambient'],
    en: {
      summary:
        'Swing, rubato, wide tempos. Jazz usefully spans about 80–160 BPM depending on ballad vs up-tempo swing.',
      subgenres: ['Swing', 'Bebop', 'Jazz Ballad', 'Fusion', 'Acid Jazz'],
      examples: ['Ballads ~60–80 felt', 'Medium swing ~120–140', 'Bebop burners often faster'],
      tip: 'Tap the quarter-note walk, not every swung eighth. Swing will fake an uneven BPM.',
    },
    ru: {
      summary:
        'Swing, rubato и широкий разброс. Практичный ориентир. Около 80–160 BPM (баллада vs up-tempo).',
      subgenres: ['Swing', 'Bebop', 'Jazz Ballad', 'Fusion', 'Acid Jazz'],
      examples: ['Баллады ~60–80 по ощущению', 'Medium swing ~120–140', 'Bebop часто быстрее'],
      tip: 'Тапай четверти «шага», не каждый swung eighth. Swing ломает ровность.',
    },
    es: {
      summary:
        'Swing, rubato y tempos muy distintos. Orientación útil: unos 80–160 BPM, de balada a swing up-tempo.',
      subgenres: ['Swing', 'Bebop', 'Jazz Ballad', 'Fusion', 'Acid Jazz'],
      examples: ['Baladas ~60–80 sentido', 'Medium swing ~120–140', 'Bebop a menudo más rápido'],
      tip: 'Toca el walk de negras, no cada corchea con swing. El swing hace parecer el BPM «irregular».',
    },
    fr: {
      summary:
        'Swing, rubato, tempos larges. En pratique, le jazz couvre souvent environ 80–160 BPM (ballade vs swing up-tempo).',
      subgenres: ['Swing', 'Bebop', 'Jazz Ballad', 'Fusion', 'Acid Jazz'],
      examples: ['Ballades ~60–80 ressentis', 'Medium swing ~120–140', 'Bebop souvent plus rapide'],
      tip: 'Tapez la marche en noires, pas chaque croche swingée. Le swing fait croire à un BPM irrégulier.',
    },
    pt: {
      summary:
        'Swing, rubato e tempos bem abertos. Jazz útil cobre cerca de 80–160 BPM, da balada ao swing rápido.',
      subgenres: ['Swing', 'Bebop', 'Jazz Ballad', 'Fusion', 'Acid Jazz'],
      examples: ['Baladas ~60–80 no feel', 'Medium swing ~120–140', 'Bebop costuma ser mais rápido'],
      tip: 'Toque a caminhada em semínimas, não cada colcheia swingada, o swing finge BPM irregular.',
    },
  },
  salsa: {
    related: ['bachata', 'afrobeat', 'pop'],
    en: {
      summary:
        'Clave-driven dance music. Salsa is often counted fast on the grid. About 180–220 BPM. While dancers feel a slower beat.',
      subgenres: ['Salsa Dura', 'Salsa Romántica', 'Timba', 'Mambo-influenced', 'Casino'],
      examples: ['Classic salsa dura ~200 BPM written', 'Romantic salsa often a touch slower', 'Timba can push the upper range'],
      tip: 'If your tap lands ~95–110, you may be feeling half the written tempo. Try ×2 for DAW notation.',
    },
    ru: {
      summary:
        'Музыка на clavé. На сетке salsa часто считают быстро. Около 180–220 BPM. Хотя танцоры чувствуют более медленный ритм.',
      subgenres: ['Salsa Dura', 'Salsa Romántica', 'Timba', 'Mambo', 'Casino'],
      examples: ['Классическая salsa dura ~200 BPM на сетке', 'Романтическая salsa чуть медленнее', 'Timba может быть наверху диапазона'],
      tip: 'Натапал ~95–110? Скорее half от письменного темпа. Для DAW попробуй ×2.',
    },
    es: {
      summary:
        'Baile guiado por la clave. En la rejilla la salsa suele contarse rápido. Unos 180–220 BPM. Aunque los bailarines sienten un ritmo más lento.',
      subgenres: ['Salsa Dura', 'Salsa Romántica', 'Timba', 'Mambo', 'Casino'],
      examples: ['Salsa dura clásica ~200 BPM escrito', 'Salsa romántica un poco más lenta', 'La timba puede ir al tope del rango'],
      tip: 'Si tu tap cae en ~95–110, quizá sientes la mitad del tempo escrito. Prueba ×2 para el DAW.',
    },
    fr: {
      summary:
        'Danse guidée par la clave. Sur la grille, la salsa se compte souvent vite. Environ 180–220 BPM. Alors que les danseurs sentent un rythme plus lent.',
      subgenres: ['Salsa Dura', 'Salsa Romántica', 'Timba', 'Mambo', 'Casino'],
      examples: ['Salsa dura classique ~200 BPM écrit', 'Salsa romantique un peu plus lente', 'Timba peut pousser le haut de la plage'],
      tip: 'Si votre tap tombe vers ~95–110, vous sentez peut-être la moitié du tempo écrit. Essayez ×2 pour le DAW.',
    },
    pt: {
      summary:
        'Dança na clave. Salsa costuma ser contada rápido na grade. Cerca de 180–220 BPM. Embora o corpo sinta um ritmo mais lento.',
      subgenres: ['Salsa Dura', 'Salsa Romántica', 'Timba', 'Mambo', 'Casino'],
      examples: ['Salsa dura clássica ~200 BPM na grade', 'Salsa romântica um pouco mais lenta', 'Timba pode ir para o topo da faixa'],
      tip: 'Se o tap cair em ~95–110, você pode estar sentindo metade do tempo escrito. Tente ×2 para o DAW.',
    },
  },
  bachata: {
    related: ['reggaeton', 'salsa', 'pop'],
    en: {
      summary: 'Guitar-led romantic groove. Modern bachata commonly sits around 120–140 BPM.',
      subgenres: ['Traditional Bachata', 'Bachata Sensual', 'Urban Bachata', 'Bachatón', 'Pop Bachata'],
      examples: ['Aventura-era hits ~130 BPM', 'Sensual bachata ~120–128 BPM', 'Urban fusions ~128–140 BPM'],
      tip: 'Tap the güira/guitar groove you’d step to. Not every ghost note.',
    },
    ru: {
      summary: 'Гитарный романтический грув. Современная bachata обычно 120–140 BPM.',
      subgenres: ['Traditional Bachata', 'Bachata Sensual', 'Urban Bachata', 'Bachatón', 'Pop Bachata'],
      examples: ['Хиты эпохи Aventura ~130 BPM', 'Sensual bachata ~120–128 BPM', 'Urban-слияния ~128–140 BPM'],
      tip: 'Тапай ритм güira/гитары, под который шагаешь. Не каждый ghost note.',
    },
    es: {
      summary:
        'Groove romántico con guitarra delante. La bachata moderna suele ir alrededor de 120–140 BPM.',
      subgenres: ['Traditional Bachata', 'Bachata Sensual', 'Urban Bachata', 'Bachatón', 'Pop Bachata'],
      examples: ['Hits de la era Aventura ~130 BPM', 'Bachata sensual ~120–128 BPM', 'Fusiones urbanas ~128–140 BPM'],
      tip: 'Toca el ritmo de güira/guitarra al que pisarías. No cada ghost note.',
    },
    fr: {
      summary:
        'Groove romantique mené par la guitare. La bachata moderne tourne souvent autour de 120–140 BPM.',
      subgenres: ['Traditional Bachata', 'Bachata Sensual', 'Urban Bachata', 'Bachatón', 'Pop Bachata'],
      examples: ['Hits époque Aventura ~130 BPM', 'Bachata sensual ~120–128 BPM', 'Fusions urban ~128–140 BPM'],
      tip: 'Tapez le rythme güira/guitare sur lequel vous danseriez. Pas chaque ghost note.',
    },
    pt: {
      summary: 'Groove romântico puxado pela guitarra. Bachata moderna costuma ficar entre 120 e 140 BPM.',
      subgenres: ['Traditional Bachata', 'Bachata Sensual', 'Urban Bachata', 'Bachatón', 'Pop Bachata'],
      examples: ['Hits da era Aventura ~130 BPM', 'Bachata sensual ~120–128 BPM', 'Fusões urbanas ~128–140 BPM'],
      tip: 'Toque o ritmo de güira/guitarra no qual você dançaria. Não cada ghost note.',
    },
  },
  gospel: {
    related: ['jazz', 'pop', 'country', 'ambient'],
    en: {
      summary:
        'Choir lift and pocket. Many gospel songs sit between 60 and 100 BPM; uptempo praise can push higher.',
      subgenres: ['Traditional Gospel', 'Contemporary Gospel', 'Gospel Choir', 'Praise & Worship', 'Gospel Blues'],
      examples: ['Slow worship beds ~60–75 BPM', 'Choir drive ~80–95 BPM', 'Uptempo praise can exceed 100'],
      tip: 'Organs and claps can hide the downbeat. Find the bass/kick first.',
    },
    ru: {
      summary: 'Хор и карман. Многие gospel-песни, 60–100 BPM; быстрый praise бывает выше.',
      subgenres: ['Traditional Gospel', 'Contemporary Gospel', 'Gospel Choir', 'Praise & Worship', 'Gospel Blues'],
      examples: ['Медленный worship ~60–75 BPM', 'Хоровой драйв ~80–95 BPM', 'Быстрый praise может быть выше 100'],
      tip: 'Орган и хлопки маскируют долю. Сначала найди бас или кик.',
    },
    es: {
      summary: 'Coro y pocket. Mucho gospel vive entre 60 y 100 BPM; el praise más rápido sube de ahí.',
      subgenres: ['Traditional Gospel', 'Contemporary Gospel', 'Gospel Choir', 'Praise & Worship', 'Gospel Blues'],
      examples: ['Worship lento ~60–75 BPM', 'Empuje de coro ~80–95 BPM', 'Praise up-tempo puede pasar de 100'],
      tip: 'Órgano y palmas pueden tapar el downbeat. Encuentra primero el bajo/kick.',
    },
    fr: {
      summary:
        'Chœur et pocket. Beaucoup de gospel se situe entre 60 et 100 BPM ; le praise plus rapide monte plus haut.',
      subgenres: ['Traditional Gospel', 'Contemporary Gospel', 'Gospel Choir', 'Praise & Worship', 'Gospel Blues'],
      examples: ['Lits worship lents ~60–75 BPM', 'Drive choral ~80–95 BPM', 'Praise up-tempo parfois au-dessus de 100'],
      tip: 'Orgue et claps masquent souvent le downbeat. Trouvez d’abord la basse ou le kick.',
    },
    pt: {
      summary:
        'Coral e pocket. Muita música gospel fica entre 60 e 100 BPM; praise mais rápido sobe disso.',
      subgenres: ['Traditional Gospel', 'Contemporary Gospel', 'Gospel Choir', 'Praise & Worship', 'Gospel Blues'],
      examples: ['Worship lento ~60–75 BPM', 'Drive de coral ~80–95 BPM', 'Praise uptempo pode passar de 100'],
      tip: 'Órgão e palmas escondem o downbeat. Ache primeiro o baixo/kick.',
    },
  },
  country: {
    related: ['rock', 'pop', 'gospel', 'hip-hop'],
    en: {
      summary: 'Story-first grooves from ballads to two-step. Country commonly spans about 80–120 BPM.',
      subgenres: ['Country Ballad', 'Bro-Country', 'Outlaw', 'Country Pop', 'Bluegrass-influenced'],
      examples: ['Ballads ~70–85 BPM', 'Radio country-pop ~90–110 BPM', 'Two-step feel often ~100–120'],
      tip: 'Train-beat snare can feel double. Tap the bass/kick for the song tempo.',
    },
    ru: {
      summary: 'От баллад до two-step. Country обычно около 80–120 BPM.',
      subgenres: ['Country Ballad', 'Bro-Country', 'Outlaw', 'Country Pop', 'Bluegrass-influenced'],
      examples: ['Баллады ~70–85 BPM', 'Radio country-pop ~90–110 BPM', 'Two-step часто ~100–120'],
      tip: 'Train-beat на снейре может казаться double. Тапай бас или кик.',
    },
    es: {
      summary: 'De baladas a two-step. El country suele cubrir unos 80–120 BPM.',
      subgenres: ['Country Ballad', 'Bro-Country', 'Outlaw', 'Country Pop', 'Bluegrass-influenced'],
      examples: ['Baladas ~70–85 BPM', 'Country-pop de radio ~90–110 BPM', 'Two-step a menudo ~100–120'],
      tip: 'El snare train-beat puede sentirse al doble. Toca el bajo/kick para el tempo de la canción.',
    },
    fr: {
      summary: 'Des ballades au two-step. Le country couvre souvent environ 80–120 BPM.',
      subgenres: ['Country Ballad', 'Bro-Country', 'Outlaw', 'Country Pop', 'Bluegrass-influenced'],
      examples: ['Ballades ~70–85 BPM', 'Country-pop radio ~90–110 BPM', 'Feeling two-step souvent ~100–120'],
      tip: 'Le snare train-beat peut sembler doubler. Tapez la basse ou le kick pour le tempo du morceau.',
    },
    pt: {
      summary: 'Do balada ao two-step. Country costuma cobrir cerca de 80–120 BPM.',
      subgenres: ['Country Ballad', 'Bro-Country', 'Outlaw', 'Country Pop', 'Bluegrass-influenced'],
      examples: ['Baladas ~70–85 BPM', 'Country-pop de rádio ~90–110 BPM', 'Two-step ~100–120'],
      tip: 'Snare train-beat pode parecer o dobro. Toque o baixo/kick para o tempo da música.',
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
