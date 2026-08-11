import type { Locale } from '@/i18n/utils';

/** One-line “gotcha” per genre — half-time, feel vs grid, dense percussion, etc. */
export type GenreWatchOutCopy = Record<Locale, string>;

export const genreWatchOut: Record<string, GenreWatchOutCopy> = {
  house: {
    en: 'If the pad shows ~60–65, you tapped half-time — hit ×2 for the dancefloor grid.',
    ru: 'Если на экране ~60–65 — ты тапнул в half-time. Жми ×2, чтобы вернуться в танцпольную сетку.',
    es: 'Si el pad marca ~60–65, tocaste en half-time — usa ×2 para volver a la rejilla de pista.',
    fr: 'Si le pad affiche ~60–65, vous avez tapé en half-time — passez ×2 pour retrouver la grille club.',
    pt: 'Se o pad mostrar ~60–65, você tocou em half-time — aperte ×2 para voltar à grade de pista.',
  },
  techno: {
    en: 'Warehouse grooves can feel slower than the written grid — confirm with the metronome.',
    ru: 'Warehouse-грув часто ощущается медленнее, чем сетка — сверь результат с метрономом.',
    es: 'El groove warehouse puede sentirse más lento que la rejilla — confirma la lectura con el metrónomo.',
    fr: 'Un groove warehouse peut sembler plus lent que la grille — vérifiez la lecture au métronome.',
    pt: 'Groove warehouse pode parecer mais lento que a grade — confirme a leitura no metrônomo.',
  },
  trance: {
    en: 'Long phrases fool early taps — wait 8–12 kicks before you trust the number.',
    ru: 'Длинные фразы обманывают на первых тапах — набери 8–12 киков и только потом верь цифре.',
    es: 'Las frases largas engañan en los primeros taps — espera 8–12 kicks antes de confiar en el número.',
    fr: 'Les longues phrases trompent sur les premiers taps — attendez 8–12 kicks avant de croire le chiffre.',
    pt: 'Frases longas enganam nos primeiros toques — espere 8–12 kicks antes de confiar no número.',
  },
  'drum-and-bass': {
    en: 'Half-time feel often reads ~85 — hit ×2 to get the written 160–180 DnB tempo.',
    ru: 'Half-time feel часто даёт ~85 — жми ×2, чтобы получить те самые 160–180 по сетке.',
    es: 'El feel half-time suele marcar ~85 — usa ×2 para llegar a los 160–180 de la rejilla.',
    fr: 'Le feeling half-time affiche souvent ~85 — utilisez ×2 pour retrouver les 160–180 de la grille.',
    pt: 'O feel half-time costuma marcar ~85 — use ×2 para chegar aos 160–180 da grade.',
  },
  dubstep: {
    en: 'Decide early: written ~140 or felt ~70 — use ÷2 / ×2 after a stable tap.',
    ru: 'Реши сразу: ~140 по сетке или ощущаемые ~70 — после стабильного тапа переключай ÷2 / ×2.',
    es: 'Decide pronto: 140 en la rejilla o ~70 sentido — cambia con ÷2 / ×2 cuando el tap esté estable.',
    fr: 'Choisissez tôt : 140 sur la grille ou ~70 ressentis — basculez avec ÷2 / ×2 après un tap stable.',
    pt: 'Decida cedo: 140 na grade ou ~70 no corpo — use ÷2 / ×2 depois de um tap estável.',
  },
  trap: {
    en: 'Hi-hats lie — tap the kick/808 pulse, then ×2 if you landed in half-time.',
    ru: 'Хэты врут — тапай пульс кика/808 и жми ×2, если попал в half-time.',
    es: 'Los hats engañan — toca el pulso del kick/808 y usa ×2 si caíste en half-time.',
    fr: 'Les hats trompent — tapez le pulse kick/808, puis ×2 si vous êtes tombé en half-time.',
    pt: 'Hats enganam — toque o pulso do kick/808 e use ×2 se caiu em half-time.',
  },
  'hip-hop': {
    en: 'If hats feel twice as fast as your taps, try ×2 for the DAW grid.',
    ru: 'Если хэты идут вдвое быстрее твоих тапов — для сетки в DAW нужен ×2.',
    es: 'Si los hats van al doble de rápido que tus taps, usa ×2 para la rejilla del DAW.',
    fr: 'Si les hats vont deux fois plus vite que vos taps, passez ×2 pour la grille du DAW.',
    pt: 'Se os hats forem o dobro dos seus toques, use ×2 para a grade do DAW.',
  },
  pop: {
    en: 'Syncopated kicks throw taps off — lock to the snare backbeat, then check the metronome.',
    ru: 'Синкопированный кик сбивает тап — держись бэкбита снейра и сверь с метрономом.',
    es: 'Un kick sincopado desvía el tap — quédate en el backbeat del snare y confirma con el metrónomo.',
    fr: 'Un kick syncopé décale le tap — accrochez-vous au backbeat du snare, puis vérifiez au métronome.',
    pt: 'Kick sincopado bagunça o tap — fique no backbeat da caixa e confira no metrônomo.',
  },
  rock: {
    en: 'Fills wobble a reading — stick to kick/snare for 8–12 bars before copying BPM.',
    ru: 'Филы барабанщика шатают результат — держись кика и снейра 8–12 тактов, потом копируй.',
    es: 'Los fills desestabilizan la lectura — quédate en kick/snare 8–12 compases antes de copiar.',
    fr: 'Les fills font bouger la lecture — tenez le kick/snare sur 8–12 mesures avant de copier.',
    pt: 'Fills bagunçam a leitura — fique no kick e na caixa por 8–12 compassos antes de copiar.',
  },
  metal: {
    en: 'Double-kick can double the reading — tap the snare beat if the grid feels twice as fast.',
    ru: 'Double-kick легко удваивает результат — тапай долю снейра, если сетка кажется вдвое быстрее.',
    es: 'El double-kick puede doblar la lectura — toca el ritmo del snare si la rejilla va al doble.',
    fr: 'Le double-kick peut doubler la lecture — tapez le rythme du snare si la grille semble deux fois trop rapide.',
    pt: 'Double-kick pode dobrar a leitura — toque o ritmo da caixa se a grade parecer o dobro.',
  },
  'lo-fi': {
    en: 'Swing makes taps uneven — take 10–16 taps before you copy the BPM.',
    ru: 'Swing делает тапы неровными — набери 10–16 ударов и только потом копируй BPM.',
    es: 'El swing deja los taps irregulares — haz 10–16 toques antes de copiar el BPM.',
    fr: 'Le swing rend les taps irréguliers — prenez 10–16 taps avant de copier le BPM.',
    pt: 'Swing deixa o tap irregular — faça 10–16 toques antes de copiar o BPM.',
  },
  ambient: {
    en: 'Without a steady kick the number drifts — treat it as a ballpark, not a grid tempo.',
    ru: 'Без ровного кика цифра плывёт — считай её ориентиром, а не точным темпом сетки.',
    es: 'Sin un kick estable la lectura se mueve — tómala como referencia, no como tempo de rejilla.',
    fr: 'Sans kick régulier, la lecture bouge — prenez-la comme un ordre de grandeur, pas comme un tempo de grille.',
    pt: 'Sem kick constante a leitura oscila — trate o número como referência, não como tempo de grade.',
  },
  reggaeton: {
    en: 'Don’t tap every hi-hat tick — lock to the dembow “boom-ch-boom-chick” groove.',
    ru: 'Не тапай каждый тик хэта — держись грува dembow «boom-ch-boom-chick».',
    es: 'No toques cada tick del hi-hat — quédate en el dembow «boom-ch-boom-chick».',
    fr: 'Ne tapez pas chaque tick de hi-hat — restez sur le dembow « boom-ch-boom-chick ».',
    pt: 'Não toque cada tick do hi-hat — fique no dembow “boom-ch-boom-chick”.',
  },
  afrobeat: {
    en: 'Dense percussion hides the downbeat — lock to the kick or clap you’d actually count.',
    ru: 'Густая перкуссия прячет первую долю — держись кика или хлопка, который реально считаешь.',
    es: 'La percusión densa tapa el downbeat — quédate en el kick o en las palmas que contarías de verdad.',
    fr: 'Une percussion dense masque le downbeat — restez sur le kick ou les claps que vous compteriez vraiment.',
    pt: 'Percussão densa esconde o downbeat — fique no kick ou nas palmas que você contaria de verdade.',
  },
  'jersey-club': {
    en: 'Chopped swing feels uneven — keep tapping through chops until the pad says Stable.',
    ru: 'Рубленый swing идёт неровно — тапай прямо сквозь chops, пока не появится «Стабильно».',
    es: 'El swing picado va irregular — sigue tocando a través de los chops hasta que diga Estable.',
    fr: 'Le swing découpé est irrégulier — continuez à taper à travers les chops jusqu’à Stable.',
    pt: 'Swing picotado é irregular — continue tocando pelos chops até aparecer Estável.',
  },
  phonk: {
    en: 'Cowbell melodies run double-time — trust the number only once the pad settles, then use ÷2/×2.',
    ru: 'Мелодия на cowbell идёт вдвое быстрее — верь цифре только когда она успокоится, потом крути ÷2/×2.',
    es: 'La melodía de cowbell va en double-time — confía en el número solo cuando se estabilice, luego ajusta con ÷2/×2.',
    fr: 'La mélodie de cowbell sonne en double-time — ne croyez le chiffre qu’une fois stabilisé, puis ajustez avec ÷2/×2.',
    pt: 'A melodia de cowbell soa em double-time — só confie no número depois que ele estabilizar, aí ajuste com ÷2/×2.',
  },
  hardstyle: {
    en: 'Don’t tap reverse-bass decoration — count every main kick only.',
    ru: 'Не тапай украшения reverse-bass между ударами — считай только основные кики.',
    es: 'No toques el adorno reverse-bass entre golpes — cuenta solo los kicks principales.',
    fr: 'Ne tapez pas la déco reverse-bass entre les coups — comptez uniquement les kicks principaux.',
    pt: 'Não toque o enfeite reverse-bass entre os golpes — conte só os kicks principais.',
  },
  jazz: {
    en: 'Swing lands taps unevenly, and a rubato intro has no fixed tempo — start counting once the band settles.',
    ru: 'Swing сажает тапы неровно, а в rubato-вступлении темпа нет вообще — начинай считать, когда группа поймает ровный темп.',
    es: 'El swing hace que los taps caigan irregulares, y una intro en rubato no tiene tempo fijo — empieza a contar cuando la banda se asiente.',
    fr: 'Le swing fait tomber les taps de travers, et une intro en rubato n’a pas de tempo fixe — comptez une fois que le groupe est installé.',
    pt: 'O swing faz os toques caírem tortos, e uma intro em rubato não tem tempo fixo — comece a contar quando a banda assentar.',
  },
  salsa: {
    en: 'If you land ~95–110, you may be feeling half the written tempo — try ×2 for DAW notation.',
    ru: 'Получилось ~95–110? Это половина темпа по сетке — для DAW жми ×2.',
    es: 'Si caes en ~95–110, estás sintiendo la mitad del tempo escrito — usa ×2 para el DAW.',
    fr: 'Si vous tombez vers ~95–110, vous ressentez la moitié du tempo écrit — passez ×2 pour le DAW.',
    pt: 'Se cair em ~95–110, você está sentindo metade do tempo escrito — use ×2 para o DAW.',
  },
  bachata: {
    en: 'Ghost notes on the guitar can double your count — stay on the main beat.',
    ru: 'Ghost notes на гитаре легко удваивают счёт — держись основной доли.',
    es: 'Los ghost notes de la guitarra pueden duplicar tu conteo — quédate en el tiempo principal.',
    fr: 'Les ghost notes de la guitare peuvent doubler votre comptage — restez sur le temps principal.',
    pt: 'Ghost notes da guitarra podem dobrar sua contagem — fique no tempo principal.',
  },
  gospel: {
    en: 'Organs and claps can hide the downbeat — find the bass/kick first.',
    ru: 'Орган и хлопки маскируют первую долю — сначала найди бас или кик.',
    es: 'El órgano y las palmas tapan el downbeat — encuentra primero el bajo o el kick.',
    fr: 'L’orgue et les claps masquent le downbeat — trouvez d’abord la basse ou le kick.',
    pt: 'Órgão e palmas escondem o downbeat — ache primeiro o baixo ou o kick.',
  },
  country: {
    en: 'Train-beat snare can feel double — tap the bass/kick for the song tempo.',
    ru: 'Train-beat на снейре кажется вдвое быстрее — тапай бас или кик, и получишь темп песни.',
    es: 'El snare en train-beat parece ir al doble — toca el bajo o el kick para el tempo de la canción.',
    fr: 'Le snare en train-beat semble aller deux fois plus vite — tapez la basse ou le kick pour le tempo du morceau.',
    pt: 'A caixa em train-beat parece ir no dobro — toque o baixo ou o kick para o tempo da música.',
  },
};

export function watchOutForGenre(slug: string, locale: Locale): string | null {
  return genreWatchOut[slug]?.[locale] ?? null;
}
