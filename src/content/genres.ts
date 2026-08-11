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
      tip: 'Tap the kick on every beat. Four bars is usually enough for a stable reading.',
    },
    ru: {
      summary:
        'Four-on-the-floor для танцпола. BPM хауса обычно держится в диапазоне 120–130. Ровный кик, без суеты.',
      subgenres: ['Deep House', 'Tech House', 'Progressive House', 'Afro House', 'Disco House'],
      examples: ['Daft Punk. One More Time (~123 BPM)', 'Fisher. Losing It (~125 BPM)', 'Disclosure. Latch (~122 BPM)'],
      tip: 'Тапай кик на каждую долю. Четырёх тактов обычно хватает, чтобы цифра успокоилась.',
    },
    es: {
      summary: 'Kick en cada tiempo y groove de club. El BPM del house clásico suele moverse entre 120 y 130.',
      subgenres: ['Deep House', 'Tech House', 'Progressive House', 'Afro House', 'Disco House'],
      examples: ['Daft Punk. One More Time (~123 BPM)', 'Fisher. Losing It (~125 BPM)', 'Disclosure. Latch (~122 BPM)'],
      tip: 'Toca el kick en cada tiempo. Con cuatro compases ya tienes una lectura estable.',
    },
    fr: {
      summary: 'Four-on-the-floor pour la piste. En house classique, le BPM tourne le plus souvent autour de 120–130.',
      subgenres: ['Deep House', 'Tech House', 'Progressive House', 'Afro House', 'Disco House'],
      examples: ['Daft Punk. One More Time (~123 BPM)', 'Fisher. Losing It (~125 BPM)', 'Disclosure. Latch (~122 BPM)'],
      tip: 'Tapez le kick à chaque temps : quatre mesures suffisent pour une lecture stable.',
    },
    pt: {
      summary:
        'Four-on-the-floor de pista. O BPM do house clássico costuma ficar entre 120 e 130. Groove firme, sem pressa.',
      subgenres: ['Deep House', 'Tech House', 'Progressive House', 'Afro House', 'Disco House'],
      examples: ['Daft Punk. One More Time (~123 BPM)', 'Fisher. Losing It (~125 BPM)', 'Disclosure. Latch (~122 BPM)'],
      tip: 'Toque o kick em cada tempo. Quatro compassos já dão uma leitura estável.',
    },
  },
  techno: {
    related: ['house', 'trance', 'hardstyle'],
    en: {
      summary:
        'Driving and hypnotic. Techno usually lands between 125 and 140 BPM, depending how peak-time it gets.',
      subgenres: ['Peak-time Techno', 'Minimal', 'Industrial Techno', 'Melodic Techno', 'Hard Techno'],
      examples: ['Charlotte de Witte. Heart of Mine (~138 BPM)', 'Amelie Lens. Follow (~132 BPM)', 'Carl Cox classics (~128–135 BPM)'],
      tip: 'Lock to the kick and give it 8 bars. Techno holds one tempo from start to finish.',
    },
    ru: {
      summary: 'Плотный гипнотичный ритм, ничего лишнего. BPM техно чаще всего 125–140 — от warehouse до peak-time.',
      subgenres: ['Peak-time Techno', 'Minimal', 'Industrial Techno', 'Melodic Techno', 'Hard Techno'],
      examples: ['Charlotte de Witte. Heart of Mine (~138 BPM)', 'Amelie Lens. Follow (~132 BPM)', 'Классика Carl Cox (~128–135 BPM)'],
      tip: 'Держись кика и дай ему 8 тактов: техно едет на одном темпе от начала до конца.',
    },
    es: {
      summary:
        'Ritmo hipnótico y directo. El BPM del techno suele estar entre 125 y 140, según lo peak-time que vaya el set.',
      subgenres: ['Peak-time Techno', 'Minimal', 'Industrial Techno', 'Melodic Techno', 'Hard Techno'],
      examples: ['Charlotte de Witte. Heart of Mine (~138 BPM)', 'Amelie Lens. Follow (~132 BPM)', 'Clásicos de Carl Cox (~128–135 BPM)'],
      tip: 'Sigue el kick y dale 8 compases: el techno mantiene un solo tempo de principio a fin.',
    },
    fr: {
      summary:
        'Rythme dense et hypnotique. Le BPM de la techno tombe le plus souvent entre 125 et 140, selon l’intensité du set.',
      subgenres: ['Peak-time Techno', 'Minimal', 'Industrial Techno', 'Melodic Techno', 'Hard Techno'],
      examples: ['Charlotte de Witte. Heart of Mine (~138 BPM)', 'Amelie Lens. Follow (~132 BPM)', 'Classiques Carl Cox (~128–135 BPM)'],
      tip: 'Restez collé au kick pendant 8 mesures : la techno garde un seul tempo du début à la fin.',
    },
    pt: {
      summary:
        'Ritmo denso e hipnótico. O BPM do techno costuma cair entre 125 e 140, do warehouse ao peak-time.',
      subgenres: ['Peak-time Techno', 'Minimal', 'Industrial Techno', 'Melodic Techno', 'Hard Techno'],
      examples: ['Charlotte de Witte. Heart of Mine (~138 BPM)', 'Amelie Lens. Follow (~132 BPM)', 'Clássicos Carl Cox (~128–135 BPM)'],
      tip: 'Fique no kick por 8 compassos: o techno segura um tempo só do começo ao fim.',
    },
  },
  trance: {
    related: ['techno', 'house', 'hardstyle'],
    en: {
      summary: 'Long phrases and big builds. Trance tempos commonly sit near 130–145 BPM.',
      subgenres: ['Uplifting', 'Psytrance', 'Tech Trance', 'Vocal Trance', 'Progressive Trance'],
      examples: ['Armin van Buuren anthems (~138 BPM)', 'Above & Beyond. Sun & Moon (~128–132 BPM)', 'Classic Tiësto peak-time (~140 BPM)'],
      tip: 'Tap the kick during a straight section, not over a build or a breakdown.',
    },
    ru: {
      summary: 'Длинные фразы и большие подъёмы. BPM транса обычно держится около 130–145.',
      subgenres: ['Uplifting', 'Psytrance', 'Tech Trance', 'Vocal Trance', 'Progressive Trance'],
      examples: ['Гимны Armin van Buuren (~138 BPM)', 'Above & Beyond. Sun & Moon (~128–132 BPM)', 'Peak-time Tiësto (~140 BPM)'],
      tip: 'Тапай кик на ровном участке, а не поверх брейкдауна или билда.',
    },
    es: {
      summary: 'Builds largos y frases amplias. El BPM del trance suele rondar los 130–145.',
      subgenres: ['Uplifting', 'Psytrance', 'Tech Trance', 'Vocal Trance', 'Progressive Trance'],
      examples: ['Himnos de Armin van Buuren (~138 BPM)', 'Above & Beyond. Sun & Moon (~128–132 BPM)', 'Tiësto peak-time clásico (~140 BPM)'],
      tip: 'Toca el kick en un tramo recto, no encima de un build ni de un breakdown.',
    },
    fr: {
      summary: 'Longues phrases et grosses montées. En trance, le BPM se situe le plus souvent vers 130–145.',
      subgenres: ['Uplifting', 'Psytrance', 'Tech Trance', 'Vocal Trance', 'Progressive Trance'],
      examples: ['Hymnes Armin van Buuren (~138 BPM)', 'Above & Beyond. Sun & Moon (~128–132 BPM)', 'Peak-time Tiësto (~140 BPM)'],
      tip: 'Tapez le kick sur une partie droite, pas au-dessus d’une montée ou d’un breakdown.',
    },
    pt: {
      summary: 'Builds longos e frases largas. O BPM do trance costuma ficar perto de 130–145.',
      subgenres: ['Uplifting', 'Psytrance', 'Tech Trance', 'Vocal Trance', 'Progressive Trance'],
      examples: ['Hinos Armin van Buuren (~138 BPM)', 'Above & Beyond. Sun & Moon (~128–132 BPM)', 'Tiësto peak-time clássico (~140 BPM)'],
      tip: 'Toque o kick num trecho reto, não em cima de um build ou de um breakdown.',
    },
  },
  'drum-and-bass': {
    related: ['dubstep', 'trap', 'hardstyle'],
    en: {
      summary:
        'Fast breakbeats. DnB is typically 160–180 BPM. Quick on the grid, but often felt in half-time.',
      subgenres: ['Liquid', 'Neurofunk', 'Jump-Up', 'Jungle', 'Drumstep'],
      examples: ['Pendulum. Propane Nightmares (~174 BPM)', 'Netsky liquid vibes (~174 BPM)', 'Classic amen rollers (~170–175 BPM)'],
      tip: 'Tap along with the breakbeat itself. The drums carry the tempo, the bassline doesn’t.',
    },
    ru: {
      summary: 'Быстрый breakbeat. BPM драм-н-бейса обычно 160–180, хотя тело чаще кивает в half-time.',
      subgenres: ['Liquid', 'Neurofunk', 'Jump-Up', 'Jungle', 'Drumstep'],
      examples: ['Pendulum. Propane Nightmares (~174 BPM)', 'Netsky liquid vibes (~174 BPM)', 'Классические amen-роллеры (~170–175 BPM)'],
      tip: 'Тапай сам брейк: темп несут барабаны, а не басовая линия.',
    },
    es: {
      summary: 'Breakbeat rápido. El BPM del drum & bass suele ir de 160 a 180, aunque el cuerpo lo sienta en half-time.',
      subgenres: ['Liquid', 'Neurofunk', 'Jump-Up', 'Jungle', 'Drumstep'],
      examples: ['Pendulum. Propane Nightmares (~174 BPM)', 'Netsky liquid vibes (~174 BPM)', 'Amen rollers clásicos (~170–175 BPM)'],
      tip: 'Toca junto al break: el tempo lo lleva la batería, no la línea de bajo.',
    },
    fr: {
      summary:
        'Breakbeat rapide. En drum & bass, le BPM tourne typiquement entre 160 et 180, même si le corps le ressent en half-time.',
      subgenres: ['Liquid', 'Neurofunk', 'Jump-Up', 'Jungle', 'Drumstep'],
      examples: ['Pendulum. Propane Nightmares (~174 BPM)', 'Netsky liquid (~174 BPM)', 'Amen rollers classiques (~170–175 BPM)'],
      tip: 'Tapez sur le break lui-même : c’est la batterie qui porte le tempo, pas la basse.',
    },
    pt: {
      summary:
        'Breakbeat rápido. O BPM do drum & bass costuma ficar entre 160 e 180, mesmo que o corpo sinta em half-time.',
      subgenres: ['Liquid', 'Neurofunk', 'Jump-Up', 'Jungle', 'Drumstep'],
      examples: ['Pendulum. Propane Nightmares (~174 BPM)', 'Netsky liquid (~174 BPM)', 'Amen rollers clássicos (~170–175 BPM)'],
      tip: 'Toque junto com o break: quem carrega o tempo é a bateria, não a linha de baixo.',
    },
  },
  dubstep: {
    related: ['trap', 'drum-and-bass', 'phonk'],
    en: {
      summary: 'Often written around 140 BPM with a half-time feel that reads closer to 70.',
      subgenres: ['Brostep', 'Deep Dubstep', 'Riddim', 'Melodic Dubstep', 'UK Garage cousins'],
      examples: ['Skrillex-era peak drops (~140 BPM)', 'Burial night-bus moods (~140 half-time)', 'Modern riddim (~140 BPM)'],
      tip: 'In the drop, tap the hi-hat pulse. It keeps the written 140 while kick and snare go half speed.',
    },
    ru: {
      summary: 'По сетке это обычно ~140 BPM, а по ощущению ближе к 70 — так работает half-time грув дабстепа.',
      subgenres: ['Brostep', 'Deep Dubstep', 'Riddim', 'Melodic Dubstep', 'UK Garage'],
      examples: ['Пиковые дропы эпохи Skrillex (~140 BPM)', 'Night-bus настроение Burial (~140 half-time)', 'Современный riddim (~140 BPM)'],
      tip: 'В дропе тапай пульс хэтов: они держат те самые 140, пока кик и снейр идут вдвое реже.',
    },
    es: {
      summary: 'Se suele escribir alrededor de 140 BPM, pero el half-time se siente más cerca de 70.',
      subgenres: ['Brostep', 'Deep Dubstep', 'Riddim', 'Melodic Dubstep', 'UK Garage'],
      examples: ['Drops de la era Skrillex (~140 BPM)', 'Ambiente night-bus de Burial (~140 half-time)', 'Riddim actual (~140 BPM)'],
      tip: 'En el drop, toca el pulso de los hats: mantienen los 140 mientras kick y snare van a la mitad.',
    },
    fr: {
      summary: 'Souvent noté autour de 140 BPM, avec un feeling half-time plus proche de 70 BPM.',
      subgenres: ['Brostep', 'Deep Dubstep', 'Riddim', 'Melodic Dubstep', 'UK Garage'],
      examples: ['Drops peak époque Skrillex (~140 BPM)', 'Ambiance night-bus Burial (~140 half-time)', 'Riddim actuel (~140 BPM)'],
      tip: 'Dans le drop, tapez le pulse des hats : ils tiennent les 140 pendant que kick et snare passent en moitié.',
    },
    pt: {
      summary: 'Em geral é escrito perto de 140 BPM, mas o feel half-time soa mais perto de 70.',
      subgenres: ['Brostep', 'Deep Dubstep', 'Riddim', 'Melodic Dubstep', 'UK Garage'],
      examples: ['Drops da era Skrillex (~140 BPM)', 'Burial night-bus (~140 half-time)', 'Riddim atual (~140 BPM)'],
      tip: 'No drop, toque o pulso dos hats: eles seguram os 140 enquanto kick e caixa vão pela metade.',
    },
  },
  trap: {
    related: ['hip-hop', 'phonk', 'dubstep', 'pop'],
    en: {
      summary:
        'Hi-hat rolls over a heavy low end. Modern trap often grids at 130–160 BPM (or half-time ~65–80).',
      subgenres: ['Atlanta Trap', 'Rage', 'Latin Trap', 'Drill', 'Cloud Trap'],
      examples: ['Metro Boomin-type 808 records (~140 BPM)', 'Travis Scott arena energy (~150 BPM)', 'Drill pockets (~140 half-time feel)'],
      tip: 'Tap the main hits of the 808 pattern and ignore the hi-hat rolls on top.',
    },
    ru: {
      summary: 'Мелкие хэты и тяжёлый низ. BPM трэпа сейчас чаще всего 130–160 (или ~65–80, если считать в half-time).',
      subgenres: ['Atlanta Trap', 'Rage', 'Latin Trap', 'Drill', 'Cloud Trap'],
      examples: ['808-записи в духе Metro Boomin (~140 BPM)', 'Arena-energy Travis Scott (~150 BPM)', 'Drill-грув (~140 в half-time)'],
      tip: 'Тапай основные удары 808, а роллы хэтов сверху просто игнорируй.',
    },
    es: {
      summary: 'Hi-hats rápidos y graves pesados. El BPM del trap actual suele ir de 130 a 160 (o ~65–80 contado en half-time).',
      subgenres: ['Atlanta Trap', 'Rage', 'Latin Trap', 'Drill', 'Cloud Trap'],
      examples: ['Temas 808 al estilo Metro Boomin (~140 BPM)', 'Travis Scott de arena (~150 BPM)', 'Drill (~140 con feel half-time)'],
      tip: 'Toca los golpes principales del 808 e ignora los redobles de hats de arriba.',
    },
    fr: {
      summary:
        'Hi-hats rapides sur un grave lourd. En trap moderne, le BPM se cale souvent entre 130 et 160 (ou ~65–80 compté en half-time).',
      subgenres: ['Atlanta Trap', 'Rage', 'Latin Trap', 'Drill', 'Cloud Trap'],
      examples: ['808 façon Metro Boomin (~140 BPM)', 'Énergie arena Travis Scott (~150 BPM)', 'Pockets drill (~140 half-time)'],
      tip: 'Tapez les frappes principales du 808 et laissez tomber les roulements de hats au-dessus.',
    },
    pt: {
      summary:
        'Hats rápidos sobre um grave pesado. O BPM do trap atual costuma ir de 130 a 160 (ou ~65–80 contado em half-time).',
      subgenres: ['Atlanta Trap', 'Rage', 'Latin Trap', 'Drill', 'Cloud Trap'],
      examples: ['808 no estilo Metro Boomin (~140 BPM)', 'Travis Scott arena (~150 BPM)', 'Drill (~140 half-time)'],
      tip: 'Toque as batidas principais do 808 e ignore os rolos de hats por cima.',
    },
  },
  'hip-hop': {
    related: ['trap', 'pop', 'lo-fi'],
    en: {
      summary: 'Pocket and swing. A lot of hip-hop sits between 80 and 100 BPM (or double-time cousins).',
      subgenres: ['Boom Bap', 'Trap-influenced', 'West Coast', 'Lo-fi Hip Hop', 'Conscious'],
      examples: ['Classic boom-bap around ~90 BPM', 'J Dilla pocket feels (~88–96 BPM)', 'Modern radio rap often ~90–100 or double-time'],
      tip: 'Tap the kick-and-snare pocket at walking speed. Eight bars is plenty.',
    },
    ru: {
      summary: 'Карман и swing. BPM хип-хопа чаще всего 80–100 — или вдвое больше, если считать в double-time.',
      subgenres: ['Boom Bap', 'Trap-influenced', 'West Coast', 'Lo-fi Hip Hop', 'Conscious'],
      examples: ['Классический boom-bap ~90 BPM', 'Карман J Dilla (~88–96 BPM)', 'Современный radio rap часто ~90–100 или double-time'],
      tip: 'Тапай связку кик-снейр в темпе шага: восьми тактов хватит.',
    },
    es: {
      summary: 'Pocket y swing. El BPM del hip-hop suele estar entre 80 y 100, o al doble si lo cuentas en double-time.',
      subgenres: ['Boom Bap', 'Trap-influenced', 'West Coast', 'Lo-fi Hip Hop', 'Conscious'],
      examples: ['Boom-bap clásico ~90 BPM', 'Pocket J Dilla (~88–96 BPM)', 'Rap de radio actual ~90–100 o double-time'],
      tip: 'Toca el pocket de kick y snare al paso de la canción. Con ocho compases sobra.',
    },
    fr: {
      summary:
        'Pocket et swing. En hip-hop, le BPM tourne surtout entre 80 et 100, ou le double si vous comptez en double-time.',
      subgenres: ['Boom Bap', 'Trap-influenced', 'West Coast', 'Lo-fi Hip Hop', 'Conscious'],
      examples: ['Boom-bap classique ~90 BPM', 'Pocket J Dilla (~88–96 BPM)', 'Rap radio actuel souvent ~90–100 ou double-time'],
      tip: 'Tapez le pocket kick-snare au pas du morceau : huit mesures suffisent.',
    },
    pt: {
      summary: 'Pocket e swing. O BPM do hip-hop costuma ficar entre 80 e 100, ou o dobro se você contar em double-time.',
      subgenres: ['Boom Bap', 'Trap-influenced', 'West Coast', 'Lo-fi Hip Hop', 'Conscious'],
      examples: ['Boom-bap clássico ~90 BPM', 'Pocket J Dilla (~88–96 BPM)', 'Rap de rádio atual ~90–100 ou double-time'],
      tip: 'Toque o pocket de kick e caixa no passo da música. Oito compassos bastam.',
    },
  },
  pop: {
    related: ['house', 'hip-hop', 'rock', 'country'],
    en: {
      summary: 'Mid tempos that sit well on radio. Modern pop often clusters between 90 and 120 BPM.',
      subgenres: ['Dance Pop', 'Synth Pop', 'Indie Pop', 'K-Pop midtempo', 'Ballad'],
      examples: ['The Weeknd-type midtempo hits (~90–110 BPM)', 'Dance-pop choruses (~110–120 BPM)', 'Ballads often ~60–80 felt'],
      tip: 'Tap over the chorus, where the drums are fullest. Intros are often too sparse to read.',
    },
    ru: {
      summary: 'Средние радийные темпы. BPM современной поп-музыки чаще всего 90–120.',
      subgenres: ['Dance Pop', 'Synth Pop', 'Indie Pop', 'K-Pop midtempo', 'Ballad'],
      examples: ['Midtempo в духе The Weeknd (~90–110 BPM)', 'Dance-pop припевы (~110–120 BPM)', 'Баллады часто ~60–80 по ощущению'],
      tip: 'Тапай на припеве, где барабаны плотнее всего: интро часто слишком пустое.',
    },
    es: {
      summary: 'Tempos medios de radio. El BPM del pop actual se agrupa casi siempre entre 90 y 120.',
      subgenres: ['Dance Pop', 'Synth Pop', 'Indie Pop', 'K-Pop midtempo', 'Ballad'],
      examples: ['Hits midtempo al estilo The Weeknd (~90–110 BPM)', 'Estribillos dance-pop (~110–120 BPM)', 'Baladas a menudo ~60–80 sentido'],
      tip: 'Toca sobre el estribillo, donde la batería está más llena: las intros suelen quedar muy vacías.',
    },
    fr: {
      summary: 'Tempos moyens taillés pour la radio. La pop actuelle se regroupe le plus souvent entre 90 et 120 BPM.',
      subgenres: ['Dance Pop', 'Synth Pop', 'Indie Pop', 'K-Pop midtempo', 'Ballad'],
      examples: ['Hits midtempo façon The Weeknd (~90–110 BPM)', 'Refrains dance-pop (~110–120 BPM)', 'Ballades souvent ~60–80 ressentis'],
      tip: 'Tapez sur le refrain, là où la batterie est la plus pleine : les intros sont souvent trop vides.',
    },
    pt: {
      summary: 'Tempos médios de rádio. O BPM do pop atual se concentra quase sempre entre 90 e 120.',
      subgenres: ['Dance Pop', 'Synth Pop', 'Indie Pop', 'K-Pop midtempo', 'Ballad'],
      examples: ['Hits midtempo no estilo The Weeknd (~90–110 BPM)', 'Refrões dance-pop (~110–120 BPM)', 'Baladas ~60–80 no feel'],
      tip: 'Toque no refrão, onde a bateria está mais cheia: a intro costuma ser vazia demais.',
    },
  },
  rock: {
    related: ['metal', 'pop', 'country'],
    en: {
      summary: 'From mid-tempo anthems to faster riffs. Rock commonly spans 100–140 BPM.',
      subgenres: ['Classic Rock', 'Indie Rock', 'Punk', 'Alternative', 'Hard Rock'],
      examples: ['Arena anthems ~110–120 BPM', 'Punk burners ~160+ (outside this guide’s core band)', 'Indie midtempo ~100–115 BPM'],
      tip: 'Tap the snare backbeat. In a rock mix it’s the easiest pulse to hear.',
    },
    ru: {
      summary: 'От mid-tempo гимнов до быстрых риффов. BPM рока чаще всего попадает в 100–140.',
      subgenres: ['Classic Rock', 'Indie Rock', 'Punk', 'Alternative', 'Hard Rock'],
      examples: ['Arena-гимны ~110–120 BPM', 'Punk обычно быстрее этого диапазона (~160+)', 'Indie midtempo ~100–115 BPM'],
      tip: 'Тапай бэкбит снейра: в роковом миксе его слышно лучше всего.',
    },
    es: {
      summary: 'De himnos mid-tempo a riffs más rápidos. El BPM del rock cubre casi siempre 100–140.',
      subgenres: ['Classic Rock', 'Indie Rock', 'Punk', 'Alternative', 'Hard Rock'],
      examples: ['Himnos de arena ~110–120 BPM', 'Punk a menudo más rápido que este rango (~160+)', 'Indie midtempo ~100–115 BPM'],
      tip: 'Toca el backbeat del snare: en una mezcla de rock es el pulso que mejor se oye.',
    },
    fr: {
      summary: 'Des hymnes mid-tempo aux riffs plus rapides. Le BPM du rock couvre le plus souvent 100–140.',
      subgenres: ['Classic Rock', 'Indie Rock', 'Punk', 'Alternative', 'Hard Rock'],
      examples: ['Hymnes arena ~110–120 BPM', 'Punk souvent plus rapide que cette plage (~160+)', 'Indie midtempo ~100–115 BPM'],
      tip: 'Tapez le backbeat du snare : dans un mix rock, c’est le pulse le plus audible.',
    },
    pt: {
      summary: 'De hino mid-tempo a riff mais rápido. O BPM do rock quase sempre cobre 100–140.',
      subgenres: ['Classic Rock', 'Indie Rock', 'Punk', 'Alternative', 'Hard Rock'],
      examples: ['Hinos de arena ~110–120 BPM', 'Punk costuma passar de 160, acima desta faixa', 'Indie midtempo ~100–115 BPM'],
      tip: 'Toque o backbeat da caixa: numa mixagem de rock é o pulso mais fácil de ouvir.',
    },
  },
  metal: {
    related: ['rock', 'hardstyle', 'drum-and-bass'],
    en: {
      summary: 'From groove stomps to thrash gallops. A lot of metal lands between 120 and 180 BPM.',
      subgenres: ['Groove Metal', 'Thrash', 'Metalcore', 'Prog Metal', 'Doom (slower outliers)'],
      examples: ['Groove stomps ~120–140 BPM', 'Thrash gallops often ~160–180 BPM', 'Breakdowns may feel half-time'],
      tip: 'Tap the snare backbeat over a riff section and stay off the blast beats.',
    },
    ru: {
      summary: 'От groove-стомпов до трэшевых галопов. BPM метала чаще всего лежит в 120–180.',
      subgenres: ['Groove Metal', 'Thrash', 'Metalcore', 'Prog Metal', 'Doom (медленнее)'],
      examples: ['Groove-стомпы ~120–140 BPM', 'Thrash-галопы часто ~160–180 BPM', 'Breakdown’ы часто звучат в half-time'],
      tip: 'Тапай бэкбит снейра на риффовой части и не лезь в бласт-биты.',
    },
    es: {
      summary: 'Del groove metal al thrash. El BPM del metal cae casi siempre entre 120 y 180.',
      subgenres: ['Groove Metal', 'Thrash', 'Metalcore', 'Prog Metal', 'Doom (más lento)'],
      examples: ['Stomps de groove ~120–140 BPM', 'Galopes thrash a menudo ~160–180 BPM', 'Los breakdowns pueden sentirse half-time'],
      tip: 'Toca el backbeat del snare en una parte de riff y evita los blast beats.',
    },
    fr: {
      summary: 'Du groove metal au thrash. Le BPM du metal tombe le plus souvent entre 120 et 180.',
      subgenres: ['Groove Metal', 'Thrash', 'Metalcore', 'Prog Metal', 'Doom (plus lent)'],
      examples: ['Stomps groove ~120–140 BPM', 'Galops thrash souvent ~160–180 BPM', 'Breakdowns parfois en half-time'],
      tip: 'Tapez le backbeat du snare sur une partie de riff et évitez les blast beats.',
    },
    pt: {
      summary: 'Do stomp de groove metal ao galope do thrash. O BPM do metal cai quase sempre entre 120 e 180.',
      subgenres: ['Groove Metal', 'Thrash', 'Metalcore', 'Prog Metal', 'Doom (mais lento)'],
      examples: ['Groove stomps ~120–140 BPM', 'Galopes thrash ~160–180 BPM', 'Breakdowns podem parecer half-time'],
      tip: 'Toque o backbeat da caixa numa parte de riff e fique longe dos blast beats.',
    },
  },
  'lo-fi': {
    related: ['hip-hop', 'ambient', 'jazz', 'pop'],
    en: {
      summary: 'Dusty swing, study-beat calm. Lo-fi hip-hop usually sits between 70 and 90 BPM.',
      subgenres: ['Lo-fi Hip Hop', 'Chillhop', 'Jazzhop', 'Study Beats', 'Bedroom Beats'],
      examples: ['Classic chillhop playlists ~75–85 BPM', 'Jazzy sample loops ~80 BPM', 'Rainy-night beats ~70–78 BPM'],
      tip: 'Tap the kick and snare on the main beat. Let the crackle and the loose hats go by.',
    },
    ru: {
      summary: 'Пыльный swing и спокойный study-бит. BPM lo-fi хип-хопа обычно 70–90.',
      subgenres: ['Lo-fi Hip Hop', 'Chillhop', 'Jazzhop', 'Study Beats', 'Bedroom Beats'],
      examples: ['Классические chillhop-плейлисты ~75–85 BPM', 'Jazz-семплы ~80 BPM', 'Ночные биты ~70–78 BPM'],
      tip: 'Тапай кик и снейр на основную долю, а треск винила и плывущие хэты пропускай.',
    },
    es: {
      summary: 'Swing suave y calma de beat de estudio. El BPM del lo-fi hip-hop suele ir entre 70 y 90.',
      subgenres: ['Lo-fi Hip Hop', 'Chillhop', 'Jazzhop', 'Study Beats', 'Bedroom Beats'],
      examples: ['Playlists chillhop clásicas ~75–85 BPM', 'Loops con sample jazz ~80 BPM', 'Beats de noche lluviosa ~70–78 BPM'],
      tip: 'Toca el kick y el snare del pulso principal. Deja pasar el crackle y los hats sueltos.',
    },
    fr: {
      summary: 'Swing poussiéreux, calme de study beat. En lo-fi hip-hop, le BPM respire souvent entre 70 et 90.',
      subgenres: ['Lo-fi Hip Hop', 'Chillhop', 'Jazzhop', 'Study Beats', 'Bedroom Beats'],
      examples: ['Playlists chillhop classiques ~75–85 BPM', 'Loops jazz ~80 BPM', 'Beats de soirée pluvieuse ~70–78 BPM'],
      tip: 'Tapez le kick et le snare du pulse principal ; laissez passer le crackle et les hats flottants.',
    },
    pt: {
      summary: 'Swing empoeirado e calma de study beat. O BPM do lo-fi hip-hop costuma ficar entre 70 e 90.',
      subgenres: ['Lo-fi Hip Hop', 'Chillhop', 'Jazzhop', 'Study Beats', 'Bedroom Beats'],
      examples: ['Playlists chillhop clássicas ~75–85 BPM', 'Loops com sample de jazz ~80 BPM', 'Beats de noite chuvosa ~70–78 BPM'],
      tip: 'Toque o kick e a caixa do pulso principal. Deixe passar o crackle e os hats soltos.',
    },
  },
  ambient: {
    related: ['lo-fi', 'gospel', 'trance'],
    en: {
      summary:
        'Slow beat, or barely any. Ambient pieces often breathe between 60 and 90 BPM, if there’s a clear beat at all.',
      subgenres: ['Dark Ambient', 'Ambient Techno', 'Drone', 'New Age adjacent', 'Cinematic Ambient'],
      examples: ['Brian Eno-style pads (tempo optional)', 'Ambient techno around ~80–100 BPM', 'Film drones with no strict grid'],
      tip: 'Tap the slowest thing that repeats: a pad swell, an arp cycle, a delay tail.',
    },
    ru: {
      summary: 'Медленный ритм или почти его отсутствие. Если пульс вообще слышен, ambient обычно живёт в 60–90 BPM.',
      subgenres: ['Dark Ambient', 'Ambient Techno', 'Drone', 'New Age', 'Cinematic Ambient'],
      examples: ['Пэды в духе Brian Eno (темп не обязателен)', 'Ambient techno ~80–100 BPM', 'Саундтрек-дроны без жёсткой сетки'],
      tip: 'Тапай самое медленное, что повторяется: волну пэда, цикл арпеджио, хвост дилея.',
    },
    es: {
      summary:
        'Ritmo lento, o apenas insinuado. Cuando hay pulso claro, el ambient suele respirar entre 60 y 90 BPM.',
      subgenres: ['Dark Ambient', 'Ambient Techno', 'Drone', 'New Age', 'Cinematic Ambient'],
      examples: ['Pads al estilo Brian Eno (tempo opcional)', 'Ambient techno ~80–100 BPM', 'Drones de cine sin rejilla fija'],
      tip: 'Toca lo más lento que se repita: la subida de un pad, un ciclo de arpegio, la cola de un delay.',
    },
    fr: {
      summary:
        'Rythme lent, ou presque absent. Quand le pulse est audible, l’ambient respire souvent entre 60 et 90 BPM.',
      subgenres: ['Dark Ambient', 'Ambient Techno', 'Drone', 'New Age', 'Cinematic Ambient'],
      examples: ['Pads façon Brian Eno (tempo optionnel)', 'Ambient techno ~80–100 BPM', 'Drones de film sans grille stricte'],
      tip: 'Tapez l’élément le plus lent qui se répète : une nappe qui monte, un cycle d’arpège, une queue de delay.',
    },
    pt: {
      summary: 'Ritmo lento, ou quase nenhum. Quando existe pulso claro, o ambient costuma respirar entre 60 e 90 BPM.',
      subgenres: ['Dark Ambient', 'Ambient Techno', 'Drone', 'New Age', 'Cinematic Ambient'],
      examples: ['Pads no estilo Brian Eno (tempo opcional)', 'Ambient techno ~80–100 BPM', 'Drones de filme sem grade fixa'],
      tip: 'Toque a coisa mais lenta que se repete: a subida de um pad, um ciclo de arpejo, a cauda de um delay.',
    },
  },
  reggaeton: {
    related: ['afrobeat', 'bachata', 'hip-hop', 'pop'],
    en: {
      summary: 'Dembow bounce. Reggaeton typically locks around 90–100 BPM.',
      subgenres: ['Classic Dembow', 'Latin Trap blend', 'Old-school Reggaeton', 'Pop Reggaeton', 'Dembow Dominicano'],
      examples: ['Daddy Yankee-era dembow ~95 BPM', 'Modern Latin hits ~90–98 BPM', 'Club reggaeton ~96–100 BPM'],
      tip: 'One tap per beat on the dembow kick. The pattern repeats every bar, so four bars is enough.',
    },
    ru: {
      summary: 'Тот самый dembow-грув. BPM регетона обычно держится в районе 90–100.',
      subgenres: ['Classic Dembow', 'Latin Trap blend', 'Old-school Reggaeton', 'Pop Reggaeton', 'Dembow Dominicano'],
      examples: ['Dembow эпохи Daddy Yankee ~95 BPM', 'Современные Latin-хиты ~90–98 BPM', 'Club reggaeton ~96–100 BPM'],
      tip: 'Один тап на долю по кику dembow: паттерн повторяется каждый такт, четырёх хватит.',
    },
    es: {
      summary: 'El bounce del dembow. El BPM del reggaetón suele fijarse entre 90 y 100.',
      subgenres: ['Classic Dembow', 'Latin Trap blend', 'Old-school Reggaeton', 'Pop Reggaeton', 'Dembow Dominicano'],
      examples: ['Dembow de la era Daddy Yankee ~95 BPM', 'Hits latinos actuales ~90–98 BPM', 'Reggaeton de club ~96–100 BPM'],
      tip: 'Un toque por tiempo sobre el kick del dembow: el patrón se repite cada compás, con cuatro basta.',
    },
    fr: {
      summary: 'Le rebond du dembow. Le BPM du reggaeton se cale le plus souvent entre 90 et 100.',
      subgenres: ['Classic Dembow', 'Latin Trap blend', 'Old-school Reggaeton', 'Pop Reggaeton', 'Dembow Dominicano'],
      examples: ['Dembow époque Daddy Yankee ~95 BPM', 'Hits latin actuels ~90–98 BPM', 'Club reggaeton ~96–100 BPM'],
      tip: 'Un tap par temps sur le kick du dembow : le motif revient à chaque mesure, quatre suffisent.',
    },
    pt: {
      summary: 'Aquele balanço do dembow. O BPM do reggaeton costuma travar entre 90 e 100.',
      subgenres: ['Classic Dembow', 'Latin Trap blend', 'Old-school Reggaeton', 'Pop Reggaeton', 'Dembow Dominicano'],
      examples: ['Dembow da era Daddy Yankee ~95 BPM', 'Hits latinos atuais ~90–98 BPM', 'Reggaeton de clube ~96–100 BPM'],
      tip: 'Um toque por tempo no kick do dembow: o padrão se repete a cada compasso, quatro já bastam.',
    },
  },
  afrobeat: {
    related: ['house', 'reggaeton', 'pop'],
    en: {
      summary:
        'Polyrhythmic groove with dancefloor lift. Modern Afrobeats/Afrobeat club tracks often sit around 100–130 BPM.',
      subgenres: ['Afrobeats', 'Afro House', 'Highlife-influenced', 'Amapiano-adjacent', 'Afrofusion'],
      examples: ['Wizkid / Burna Boy midtempo hits (~100–110 BPM)', 'Afro house floors ~120–125 BPM', 'Percussion-led club cuts ~115–128 BPM'],
      tip: 'Tap the kick you’d dance to. The chorus gives the cleanest reading.',
    },
    ru: {
      summary: 'Полиритмия и хороший подъём на танцполе. BPM современного afrobeats обычно 100–130.',
      subgenres: ['Afrobeats', 'Afro House', 'Highlife', 'Amapiano-adjacent', 'Afrofusion'],
      examples: ['Midtempo Wizkid / Burna Boy ~100–110 BPM', 'Afro house ~120–125 BPM', 'Перкуссионные клубные треки ~115–128 BPM'],
      tip: 'Тапай тот кик, под который танцуешь: чище всего цифра ловится на припеве.',
    },
    es: {
      summary:
        'Groove polirrítmico con empuje de pista. El BPM del afrobeats de club suele ir entre 100 y 130.',
      subgenres: ['Afrobeats', 'Afro House', 'Highlife', 'Amapiano-adjacent', 'Afrofusion'],
      examples: ['Hits midtempo de Wizkid / Burna Boy (~100–110 BPM)', 'Afro house ~120–125 BPM', 'Temas de club con percusión al frente ~115–128 BPM'],
      tip: 'Toca el kick con el que bailarías. El estribillo da la lectura más limpia.',
    },
    fr: {
      summary:
        'Groove polyrythmique qui pousse la piste. En afrobeats de club, le BPM tourne souvent autour de 100–130.',
      subgenres: ['Afrobeats', 'Afro House', 'Highlife', 'Amapiano-adjacent', 'Afrofusion'],
      examples: ['Hits midtempo Wizkid / Burna Boy (~100–110 BPM)', 'Afro house ~120–125 BPM', 'Morceaux club menés par la percussion ~115–128 BPM'],
      tip: 'Tapez le kick sur lequel vous danseriez ; le refrain donne la lecture la plus nette.',
    },
    pt: {
      summary:
        'Groove polirrítmico que levanta a pista. O BPM do afrobeats de clube costuma ficar entre 100 e 130.',
      subgenres: ['Afrobeats', 'Afro House', 'Highlife', 'Amapiano-adjacent', 'Afrofusion'],
      examples: ['Hits midtempo Wizkid / Burna Boy (~100–110 BPM)', 'Afro house ~120–125 BPM', 'Faixas de clube puxadas pela percussão ~115–128 BPM'],
      tip: 'Toque o kick no qual você dançaria. O refrão dá a leitura mais limpa.',
    },
  },
  'jersey-club': {
    related: ['house', 'phonk', 'trap'],
    en: {
      summary: 'Chopped samples and bed-squeak swing. Jersey club often lives near 130–140 BPM.',
      subgenres: ['Classic Jersey', 'Baltimore Club cousin', 'Club / Bed Squeak', 'Hybrid Club', 'UK Club edits'],
      examples: ['DJ Sliink-type energy ~140 BPM', 'Viral club edits ~132–138 BPM', 'Chopped vocal tools ~134–140 BPM'],
      tip: 'Tap a straight four over the 3-3-2 kick pattern: one tap per beat, not one per kick.',
    },
    ru: {
      summary: 'Нарезанные семплы и характерный swing. BPM jersey club обычно около 130–140.',
      subgenres: ['Classic Jersey', 'Baltimore Club', 'Bed Squeak', 'Hybrid Club', 'UK Club edits'],
      examples: ['Энергия в духе DJ Sliink ~140 BPM', 'Вирусные club-эдиты ~132–138 BPM', 'Нарезанный вокал ~134–140 BPM'],
      tip: 'Тапай ровные четыре доли поверх паттерна 3-3-2: один тап на долю, а не на каждый кик.',
    },
    es: {
      summary:
        'Samples picados y ese swing de bed-squeak. El BPM del jersey club suele vivir entre 130 y 140.',
      subgenres: ['Classic Jersey', 'Baltimore Club', 'Club / Bed Squeak', 'Hybrid Club', 'UK Club edits'],
      examples: ['Energía al estilo DJ Sliink ~140 BPM', 'Edits virales de club ~132–138 BPM', 'Voces picadas ~134–140 BPM'],
      tip: 'Toca cuatro tiempos rectos sobre el patrón 3-3-2: un toque por tiempo, no uno por kick.',
    },
    fr: {
      summary: 'Samples découpés et swing bed-squeak. En jersey club, le BPM vit souvent vers 130–140.',
      subgenres: ['Classic Jersey', 'Baltimore Club', 'Club / Bed Squeak', 'Hybrid Club', 'UK Club edits'],
      examples: ['Énergie façon DJ Sliink ~140 BPM', 'Édits club viraux ~132–138 BPM', 'Vocaux choppés ~134–140 BPM'],
      tip: 'Tapez quatre temps droits par-dessus le motif 3-3-2 : un tap par temps, pas un par kick.',
    },
    pt: {
      summary: 'Samples picotados e o swing de bed-squeak. O BPM do jersey club costuma viver entre 130 e 140.',
      subgenres: ['Classic Jersey', 'Baltimore Club', 'Club / Bed Squeak', 'Hybrid Club', 'UK Club edits'],
      examples: ['Energia no estilo DJ Sliink ~140 BPM', 'Edits virais de clube ~132–138 BPM', 'Vocais cortados ~134–140 BPM'],
      tip: 'Toque quatro tempos retos por cima do padrão 3-3-2: um toque por tempo, não um por kick.',
    },
  },
  phonk: {
    related: ['trap', 'jersey-club', 'hip-hop', 'dubstep'],
    en: {
      summary: 'Drift and cowbell. Drift phonk often runs from the 130s up into 150–160 BPM.',
      subgenres: ['Drift Phonk', 'Lo-fi Phonk', 'House Phonk', 'Cowbell Phonk', 'Memphis-inspired'],
      examples: ['Drift phonk racetrack edits ~140–160 BPM', 'Cowbell club tools ~140 BPM', 'Slower Memphis-inspired beds ~120–130'],
      tip: 'Tap the kick. Under all that cowbell, drift phonk keeps a straight four.',
    },
    ru: {
      summary: 'Drift и cowbell. BPM drift phonk обычно идёт от ~130 к 150–160.',
      subgenres: ['Drift Phonk', 'Lo-fi Phonk', 'House Phonk', 'Cowbell Phonk', 'Memphis-inspired'],
      examples: ['Drift phonk для ночных заездов ~140–160 BPM', 'Cowbell club tools ~140 BPM', 'Более медленный Memphis-inspired ~120–130'],
      tip: 'Тапай кик: под всем этим cowbell у drift phonk ровные четыре доли.',
    },
    es: {
      summary: 'Drift y cowbell. El BPM del drift phonk va de los 130 hasta 150–160.',
      subgenres: ['Drift Phonk', 'Lo-fi Phonk', 'House Phonk', 'Cowbell Phonk', 'Memphis-inspired'],
      examples: ['Edits de drift phonk para carreras ~140–160 BPM', 'Tools de club con cowbell ~140 BPM', 'Bases más lentas estilo Memphis ~120–130'],
      tip: 'Toca el kick: debajo de toda la cowbell, el drift phonk lleva cuatro tiempos rectos.',
    },
    fr: {
      summary: 'Drift et cowbell. En drift phonk, le BPM part des 130 et monte vers 150–160.',
      subgenres: ['Drift Phonk', 'Lo-fi Phonk', 'House Phonk', 'Cowbell Phonk', 'Memphis-inspired'],
      examples: ['Édits drift « racetrack » ~140–160 BPM', 'Outils club cowbell ~140 BPM', 'Bases Memphis plus lentes ~120–130'],
      tip: 'Tapez le kick : sous toute la cowbell, le drift phonk garde quatre temps droits.',
    },
    pt: {
      summary: 'Drift e cowbell. O BPM do drift phonk sai dos 130 e sobe até 150–160.',
      subgenres: ['Drift Phonk', 'Lo-fi Phonk', 'House Phonk', 'Cowbell Phonk', 'Memphis-inspired'],
      examples: ['Edits drift phonk ~140–160 BPM', 'Tools de clube com cowbell ~140 BPM', 'Bases Memphis mais lentas ~120–130'],
      tip: 'Toque o kick: embaixo de toda a cowbell, o drift phonk mantém quatro tempos retos.',
    },
  },
  hardstyle: {
    related: ['trance', 'techno', 'metal'],
    en: {
      summary: 'Reverse-bass punches and festival energy. Hardstyle typically locks around 150–160 BPM.',
      subgenres: ['Raw Hardstyle', 'Euphoric Hardstyle', 'Hardcore adjacent', 'Dubstyle', 'Early Hardstyle'],
      examples: ['Festival anthems ~150 BPM', 'Raw kicks ~150–155 BPM', 'Euphoric builds ~150 BPM'],
      tip: 'Tap the main kick during the drop. It’s the loudest thing in the mix, hard to miss.',
    },
    ru: {
      summary: 'Reverse-bass и фестивальный удар. BPM хардстайла обычно 150–160.',
      subgenres: ['Raw Hardstyle', 'Euphoric Hardstyle', 'Hardcore adjacent', 'Dubstyle', 'Early Hardstyle'],
      examples: ['Фестивальные гимны ~150 BPM', 'Raw-кики ~150–155 BPM', 'Euphoric-подъёмы ~150 BPM'],
      tip: 'Тапай главный кик на дропе: он самый громкий в миксе, промахнуться сложно.',
    },
    es: {
      summary: 'Reverse-bass y energía de festival. El BPM del hardstyle suele fijarse entre 150 y 160.',
      subgenres: ['Raw Hardstyle', 'Euphoric Hardstyle', 'Hardcore adjacent', 'Dubstyle', 'Early Hardstyle'],
      examples: ['Himnos de festival ~150 BPM', 'Kicks raw ~150–155 BPM', 'Builds eufóricos ~150 BPM'],
      tip: 'Toca el kick principal en el drop: es lo más fuerte de la mezcla, imposible perderlo.',
    },
    fr: {
      summary: 'Reverse-bass et énergie festival. Le BPM du hardstyle se cale le plus souvent entre 150 et 160.',
      subgenres: ['Raw Hardstyle', 'Euphoric Hardstyle', 'Hardcore adjacent', 'Dubstyle', 'Early Hardstyle'],
      examples: ['Hymnes festival ~150 BPM', 'Kicks raw ~150–155 BPM', 'Builds euphoric ~150 BPM'],
      tip: 'Tapez le kick principal dans le drop : c’est l’élément le plus fort du mix, impossible à rater.',
    },
    pt: {
      summary: 'Kick reverse-bass e energia de festival. O BPM do hardstyle costuma travar entre 150 e 160.',
      subgenres: ['Raw Hardstyle', 'Euphoric Hardstyle', 'Hardcore adjacent', 'Dubstyle', 'Early Hardstyle'],
      examples: ['Hinos de festival ~150 BPM', 'Kicks raw ~150–155 BPM', 'Builds euphoric ~150 BPM'],
      tip: 'Toque o kick principal no drop: é a coisa mais alta da mixagem, impossível errar.',
    },
  },
  jazz: {
    related: ['lo-fi', 'gospel', 'pop', 'ambient'],
    en: {
      summary:
        'Swing, rubato, wide tempos. Jazz usefully spans about 80–160 BPM depending on ballad vs up-tempo swing.',
      subgenres: ['Swing', 'Bebop', 'Jazz Ballad', 'Fusion', 'Acid Jazz'],
      examples: ['Ballads ~60–80 felt', 'Medium swing ~120–140', 'Bebop burners often faster'],
      tip: 'Follow the walking bass: one tap per step is the tempo.',
    },
    ru: {
      summary:
        'Swing, rubato и очень разные темпы. На практике BPM джаза укладывается примерно в 80–160 — от баллады до быстрого свинга.',
      subgenres: ['Swing', 'Bebop', 'Jazz Ballad', 'Fusion', 'Acid Jazz'],
      examples: ['Баллады ~60–80 по ощущению', 'Medium swing ~120–140', 'Bebop часто быстрее'],
      tip: 'Иди за walking bass: один тап на каждый шаг — это и есть темп.',
    },
    es: {
      summary:
        'Swing, rubato y tempos muy distintos. En la práctica el BPM del jazz va de unos 80 a 160, de la balada al swing rápido.',
      subgenres: ['Swing', 'Bebop', 'Jazz Ballad', 'Fusion', 'Acid Jazz'],
      examples: ['Baladas ~60–80 sentido', 'Medium swing ~120–140', 'Bebop a menudo más rápido'],
      tip: 'Sigue el walking bass: un toque por negra y ese es el tempo.',
    },
    fr: {
      summary:
        'Swing, rubato, tempos très variables. En pratique, le BPM du jazz couvre environ 80–160, de la ballade au swing rapide.',
      subgenres: ['Swing', 'Bebop', 'Jazz Ballad', 'Fusion', 'Acid Jazz'],
      examples: ['Ballades ~60–80 ressentis', 'Medium swing ~120–140', 'Bebop souvent plus rapide'],
      tip: 'Suivez la walking bass : un tap par noire, c’est le tempo.',
    },
    pt: {
      summary:
        'Swing, rubato e tempos bem variados. Na prática, o BPM do jazz cobre cerca de 80 a 160, da balada ao swing rápido.',
      subgenres: ['Swing', 'Bebop', 'Jazz Ballad', 'Fusion', 'Acid Jazz'],
      examples: ['Baladas ~60–80 no feel', 'Medium swing ~120–140', 'Bebop costuma ser mais rápido'],
      tip: 'Siga o walking bass: um toque por semínima, e esse é o tempo.',
    },
  },
  salsa: {
    related: ['bachata', 'afrobeat', 'pop'],
    en: {
      summary:
        'Clave-driven dance music. On the grid salsa is counted fast, about 180–220 BPM, while dancers feel half of that.',
      subgenres: ['Salsa Dura', 'Salsa Romántica', 'Timba', 'Mambo-influenced', 'Casino'],
      examples: ['Classic salsa dura ~200 BPM written', 'Romantic salsa often a touch slower', 'Timba can push the upper range'],
      tip: 'Tap the campana bell: it marks every beat, and that’s the written tempo.',
    },
    ru: {
      summary:
        'Танцевальная музыка на клаве. По сетке сальсу считают быстро — примерно 180–220 BPM, хотя танцорам слышится вдвое медленнее.',
      subgenres: ['Salsa Dura', 'Salsa Romántica', 'Timba', 'Mambo', 'Casino'],
      examples: ['Классическая salsa dura ~200 BPM на сетке', 'Романтическая salsa чуть медленнее', 'Timba может быть наверху диапазона'],
      tip: 'Тапай кампану: колокол бьёт каждую долю — это и есть темп по сетке.',
    },
    es: {
      summary:
        'Baile guiado por la clave. En la rejilla la salsa se cuenta rápido, unos 180–220 BPM, mientras los bailarines sienten la mitad.',
      subgenres: ['Salsa Dura', 'Salsa Romántica', 'Timba', 'Mambo', 'Casino'],
      examples: ['Salsa dura clásica ~200 BPM en la rejilla', 'Salsa romántica un poco más lenta', 'La timba puede ir al tope del rango'],
      tip: 'Toca la campana: marca cada tiempo, y ese es el tempo escrito.',
    },
    fr: {
      summary:
        'Danse guidée par la clave. Sur la grille, la salsa se compte vite, environ 180–220 BPM, alors que les danseurs en ressentent la moitié.',
      subgenres: ['Salsa Dura', 'Salsa Romántica', 'Timba', 'Mambo', 'Casino'],
      examples: ['Salsa dura classique ~200 BPM écrit', 'Salsa romantique un peu plus lente', 'Timba peut pousser le haut de la plage'],
      tip: 'Tapez la campana : elle marque chaque temps, et c’est le tempo écrit.',
    },
    pt: {
      summary:
        'Dança guiada pela clave. Na grade a salsa é contada rápido, cerca de 180–220 BPM, enquanto o corpo sente a metade.',
      subgenres: ['Salsa Dura', 'Salsa Romántica', 'Timba', 'Mambo', 'Casino'],
      examples: ['Salsa dura clássica ~200 BPM na grade', 'Salsa romântica um pouco mais lenta', 'Timba pode ir para o topo da faixa'],
      tip: 'Toque a campana: ela marca cada tempo, e é esse o tempo escrito.',
    },
  },
  bachata: {
    related: ['reggaeton', 'salsa', 'pop'],
    en: {
      summary: 'Guitar-led romantic groove. Modern bachata commonly sits around 120–140 BPM.',
      subgenres: ['Traditional Bachata', 'Bachata Sensual', 'Urban Bachata', 'Bachatón', 'Pop Bachata'],
      examples: ['Aventura-era hits ~130 BPM', 'Sensual bachata ~120–128 BPM', 'Urban fusions ~128–140 BPM'],
      tip: 'Tap the four-count you’d step to. The güira marks it clearly.',
    },
    ru: {
      summary: 'Романтический грув с гитарой впереди. BPM бачаты обычно 120–140.',
      subgenres: ['Traditional Bachata', 'Bachata Sensual', 'Urban Bachata', 'Bachatón', 'Pop Bachata'],
      examples: ['Хиты эпохи Aventura ~130 BPM', 'Sensual bachata ~120–128 BPM', 'Urban-слияния ~128–140 BPM'],
      tip: 'Тапай счёт на четыре, под который шагаешь: güira размечает его очень чётко.',
    },
    es: {
      summary:
        'Groove romántico con la guitarra al frente. El BPM de la bachata moderna suele rondar los 120–140.',
      subgenres: ['Traditional Bachata', 'Bachata Sensual', 'Urban Bachata', 'Bachatón', 'Pop Bachata'],
      examples: ['Hits de la era Aventura ~130 BPM', 'Bachata sensual ~120–128 BPM', 'Fusiones urbanas ~128–140 BPM'],
      tip: 'Toca el conteo de cuatro que bailarías: la güira lo marca clarísimo.',
    },
    fr: {
      summary:
        'Groove romantique mené par la guitare. Le BPM de la bachata moderne tourne souvent autour de 120–140.',
      subgenres: ['Traditional Bachata', 'Bachata Sensual', 'Urban Bachata', 'Bachatón', 'Pop Bachata'],
      examples: ['Hits époque Aventura ~130 BPM', 'Bachata sensual ~120–128 BPM', 'Fusions urban ~128–140 BPM'],
      tip: 'Tapez le compte à quatre que vous danseriez : la güira le marque très clairement.',
    },
    pt: {
      summary: 'Groove romântico com a guitarra na frente. O BPM da bachata moderna costuma ficar entre 120 e 140.',
      subgenres: ['Traditional Bachata', 'Bachata Sensual', 'Urban Bachata', 'Bachatón', 'Pop Bachata'],
      examples: ['Hits da era Aventura ~130 BPM', 'Bachata sensual ~120–128 BPM', 'Fusões urbanas ~128–140 BPM'],
      tip: 'Toque a contagem de quatro que você dançaria: a güira marca isso com clareza.',
    },
  },
  gospel: {
    related: ['jazz', 'pop', 'country', 'ambient'],
    en: {
      summary:
        'Choir lift and pocket. Many gospel songs sit between 60 and 100 BPM; uptempo praise can push higher.',
      subgenres: ['Traditional Gospel', 'Contemporary Gospel', 'Gospel Choir', 'Praise & Worship', 'Gospel Blues'],
      examples: ['Slow worship beds ~60–75 BPM', 'Choir drive ~80–95 BPM', 'Uptempo praise can exceed 100'],
      tip: 'Tap the bass line in the verse, before the choir and the claps come in.',
    },
    ru: {
      summary: 'Хор и глубокий карман. Многие gospel-песни держатся в 60–100 BPM, а быстрый praise уходит выше.',
      subgenres: ['Traditional Gospel', 'Contemporary Gospel', 'Gospel Choir', 'Praise & Worship', 'Gospel Blues'],
      examples: ['Медленный worship ~60–75 BPM', 'Хоровой драйв ~80–95 BPM', 'Быстрый praise может быть выше 100'],
      tip: 'Тапай басовую линию на куплете, пока не вступили хор и хлопки.',
    },
    es: {
      summary: 'Coro y pocket. Mucho gospel vive entre 60 y 100 BPM, y el praise rápido sube de ahí.',
      subgenres: ['Traditional Gospel', 'Contemporary Gospel', 'Gospel Choir', 'Praise & Worship', 'Gospel Blues'],
      examples: ['Worship lento ~60–75 BPM', 'Empuje de coro ~80–95 BPM', 'Praise up-tempo puede pasar de 100'],
      tip: 'Toca la línea de bajo en la estrofa, antes de que entren el coro y las palmas.',
    },
    fr: {
      summary:
        'Chœur et pocket. Beaucoup de gospel se situe entre 60 et 100 BPM ; le praise plus rapide monte plus haut.',
      subgenres: ['Traditional Gospel', 'Contemporary Gospel', 'Gospel Choir', 'Praise & Worship', 'Gospel Blues'],
      examples: ['Nappes de worship lentes ~60–75 BPM', 'Drive choral ~80–95 BPM', 'Praise up-tempo parfois au-dessus de 100'],
      tip: 'Tapez la ligne de basse sur le couplet, avant l’entrée du chœur et des claps.',
    },
    pt: {
      summary:
        'Coral e pocket. Boa parte do gospel fica entre 60 e 100 BPM, e o praise mais rápido passa disso.',
      subgenres: ['Traditional Gospel', 'Contemporary Gospel', 'Gospel Choir', 'Praise & Worship', 'Gospel Blues'],
      examples: ['Worship lento ~60–75 BPM', 'Drive de coral ~80–95 BPM', 'Praise uptempo pode passar de 100'],
      tip: 'Toque a linha de baixo na estrofe, antes de o coral e as palmas entrarem.',
    },
  },
  country: {
    related: ['rock', 'pop', 'gospel', 'hip-hop'],
    en: {
      summary: 'Story-first grooves from ballads to two-step. Country commonly spans about 80–120 BPM.',
      subgenres: ['Country Ballad', 'Bro-Country', 'Outlaw', 'Country Pop', 'Bluegrass-influenced'],
      examples: ['Ballads ~70–85 BPM', 'Radio country-pop ~90–110 BPM', 'Two-step feel often ~100–120'],
      tip: 'Tap the two-step you’d dance to: one tap per step.',
    },
    ru: {
      summary: 'От баллад до two-step. BPM кантри обычно около 80–120.',
      subgenres: ['Country Ballad', 'Bro-Country', 'Outlaw', 'Country Pop', 'Bluegrass-influenced'],
      examples: ['Баллады ~70–85 BPM', 'Radio country-pop ~90–110 BPM', 'Two-step часто ~100–120'],
      tip: 'Тапай тот самый two-step, под который танцуешь: один тап на шаг.',
    },
    es: {
      summary: 'De baladas a two-step. El BPM del country suele cubrir unos 80–120.',
      subgenres: ['Country Ballad', 'Bro-Country', 'Outlaw', 'Country Pop', 'Bluegrass-influenced'],
      examples: ['Baladas ~70–85 BPM', 'Country-pop de radio ~90–110 BPM', 'Two-step a menudo ~100–120'],
      tip: 'Toca el two-step que bailarías: un toque por paso.',
    },
    fr: {
      summary: 'Des ballades au two-step. Le BPM du country couvre souvent environ 80–120.',
      subgenres: ['Country Ballad', 'Bro-Country', 'Outlaw', 'Country Pop', 'Bluegrass-influenced'],
      examples: ['Ballades ~70–85 BPM', 'Country-pop radio ~90–110 BPM', 'Feeling two-step souvent ~100–120'],
      tip: 'Tapez le two-step que vous danseriez : un tap par pas.',
    },
    pt: {
      summary: 'Da balada ao two-step. O BPM do country costuma cobrir cerca de 80–120.',
      subgenres: ['Country Ballad', 'Bro-Country', 'Outlaw', 'Country Pop', 'Bluegrass-influenced'],
      examples: ['Baladas ~70–85 BPM', 'Country-pop de rádio ~90–110 BPM', 'Two-step ~100–120'],
      tip: 'Toque o two-step que você dançaria: um toque por passo.',
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
