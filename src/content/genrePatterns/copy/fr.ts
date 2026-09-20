import type { GenrePatternCopyMap } from '../types';

export const fr: GenrePatternCopyMap = {
  house: {
    title: 'House BPM · pattern batterie 16 pas',
    lead: 'Le BPM dit seulement la vitesse. Ensuite le beat : un drum pattern house typique à programmer dans n’importe quel DAW — kick, clap, hats, une mesure en doubles croches.',
    disclaimer: 'Grilles de départ populaires — ne vous figez pas dessus. La house vit dans le skip et les hats, pas dans une copie 1:1.',
    faqs: [
      {
        q: 'Quel est un rythme house typique ?',
        a: 'La plupart de la house pose un kick four-on-the-floor à 120–130 BPM, des claps sur 2 et 4, des hats sur les contretemps. Ces grilles sont un drum pattern de départ, pas le seul beat house.',
      },
      {
        q: 'Comment programmer un drum pattern house ?',
        a: 'DAW en 4/4 vers 125 BPM, pas en doubles croches. Kick sur chaque temps, claps sur 2 et 4, puis hats fermés. Changez le skip et les hats pour ne pas rester coincé sur le rythme de base.',
      },
    ],
    patterns: [
      {
        name: 'Four-on-the-floor',
        summary: 'L’ossature house. Kick sur chaque temps, clap sur 2 et 4, hats fermés sur les contretemps, hat ouvert vers le downbeat suivant.',
      },
      {
        name: 'Disco skip',
        summary: 'Mêmes claps, kick en plus sur la triple croche avant 2 et 4. C’est le jack de beaucoup de disco / filtered house.',
      },
    ],
  },
  techno: {
    title: 'Techno BPM · pattern batterie 16 pas',
    lead: 'Le BPM dit seulement la vitesse. Ensuite le beat : un drum pattern techno typique à programmer dans n’importe quel DAW — kick four-on-the-floor, clap, hats en contretemps, une mesure en doubles croches.',
    disclaimer: 'Grilles de départ populaires — ne vous figez pas dessus. La techno vit dans l’hypnose des hats, pas dans une copie 1:1.',
    faqs: [
      {
        q: 'Quel est un rythme Techno typique ?',
        a: 'La plupart de la techno pose un kick four-on-the-floor à 125–140 BPM, des claps sur 2 et 4, des hats sur les contretemps. Ces grilles sont un drum pattern de départ, pas le seul beat techno.',
      },
      {
        q: 'Comment programmer un drum pattern Techno ?',
        a: 'DAW en 4/4 vers 132 BPM, pas en doubles croches. Kick sur chaque temps, claps sur 2 et 4, puis hats. Déplacez les hats fermés et ouverts pour ne pas rester coincé sur le rythme de base.',
      },
    ],
    patterns: [
      {
        name: 'Four-on-the-floor',
        summary: 'L’ossature techno. Kick sur chaque temps, clap sur 2 et 4, hats en croches, hat ouvert vers le downbeat suivant.',
      },
      {
        name: 'Offbeat hats',
        summary: 'Mêmes kicks et claps. Hats fermés sur les doubles croches paires, hats ouverts sur les contretemps en croches.',
      },
    ],
  },
  trance: {
    title: 'Trance BPM · pattern batterie 16 pas',
    lead: 'Le BPM dit seulement la vitesse. Ensuite le beat : un drum pattern trance typique à programmer dans n’importe quel DAW — kick four-on-the-floor, hats en contretemps, un roll de snare, une mesure en doubles croches.',
    disclaimer: 'Grilles de départ populaires — ne vous figez pas dessus. La trance vit dans les rolls et les montées, pas dans une copie 1:1.',
    faqs: [
      {
        q: 'Quel est un rythme Trance typique ?',
        a: 'La plupart de la trance tient un kick four-on-the-floor à 130–145 BPM, des hats sur les contretemps en croches, et un roll de snare en fin de mesure. Ces grilles sont un drum pattern de départ, pas le seul beat trance.',
      },
      {
        q: 'Comment programmer un drum pattern Trance ?',
        a: 'DAW en 4/4 vers 138 BPM, pas en doubles croches. Kick sur chaque temps, hats en contretemps, puis un roll de clap sur les quatre dernières doubles croches. Changez le roll pour ne pas rester coincé sur le rythme de base.',
      },
    ],
    patterns: [
      {
        name: 'Four-on-the-floor',
        summary: 'Kick sur chaque temps, hats fermés sur les contretemps en croches, hats ouverts sur le « et » du 2 et du 4.',
      },
      {
        name: 'Snare roll',
        summary: 'Même ossature, plus un roll de clap / snare sur les quatre dernières doubles croches de la mesure — le build trance de base.',
      },
    ],
  },
  'drum-and-bass': {
    title: 'Drum & Bass BPM · pattern batterie 16 pas',
    lead: 'Le BPM dit seulement la vitesse. Ensuite le beat : un drum pattern drum & bass typique à programmer dans n’importe quel DAW — two-step, clap sur 3, break Amen, une mesure en doubles croches.',
    disclaimer: 'Grilles de départ populaires — ne vous figez pas dessus. Le drum & bass vit dans le break et le skip, pas dans une copie 1:1.',
    faqs: [
      {
        q: 'Quel est un rythme Drum & Bass typique ?',
        a: 'La plupart du drum & bass file à 160–180 BPM en two-step : kick sur 1 et 11, clap sur 9 (le 3). Ces grilles sont un drum pattern de départ, pas le seul beat DnB.',
      },
      {
        q: 'Comment programmer un drum pattern Drum & Bass ?',
        a: 'DAW en 4/4 vers 174 BPM, pas en doubles croches. Kick sur 1 et 11, clap sur 9, puis garnissez le break. Changez les kicks extra pour ne pas rester coincé sur le rythme de base.',
      },
    ],
    patterns: [
      {
        name: 'Two-step',
        summary: 'Le squelette DnB. Kick sur 1 et 11, clap / snare sur 9 — le 3. Large, rapide, half-time dans le corps.',
      },
      {
        name: 'Amen sketch',
        summary: 'Kicks et claps en plus pour croquer un breakbeat Amen. C’est un croquis, pas le break entier.',
      },
    ],
  },
  dubstep: {
    title: 'Dubstep BPM · pattern batterie 16 pas',
    lead: 'Le BPM dit seulement la vitesse. Ensuite le beat : un drum pattern dubstep typique à programmer dans n’importe quel DAW — kick sur 1, clap sur 3, feeling half-time, une mesure en doubles croches.',
    disclaimer: 'Grilles de départ populaires — ne vous figez pas dessus. Le dubstep vit dans l’espace half-time, pas dans une copie 1:1.',
    faqs: [
      {
        q: 'Quel est un rythme Dubstep typique ?',
        a: 'La plupart du dubstep s’écrit vers 135–145 BPM en half-time : kick sur 1, clap sur 3. Ces grilles sont un drum pattern de départ, pas le seul beat dubstep.',
      },
      {
        q: 'Comment programmer un drum pattern Dubstep ?',
        a: 'DAW en 4/4 vers 140 BPM, pas en doubles croches. Kick sur 1, clap sur 9 (le 3), hats pour tenir la grille. Ajoutez des kicks autour du clap pour ne pas rester coincé sur le rythme de base.',
      },
    ],
    patterns: [
      {
        name: 'Half-time',
        summary: 'Le drop dubstep nu. Kick sur 1, clap sur 9 — le 3. Deux coups par mesure, le reste est de l’air.',
      },
      {
        name: 'Wobble kick',
        summary: 'Même clap sur 3, plus des kicks sur 7 et 11 autour. C’est le wobble qui pousse le half-time.',
      },
    ],
  },
  trap: {
    title: 'Trap BPM · pattern batterie 16 pas',
    lead: 'Le BPM dit seulement la vitesse. Ensuite le beat : un drum pattern trap typique à programmer dans n’importe quel DAW — 808, clap sur 2 et 4, rolls de hats, une mesure en doubles croches.',
    disclaimer: 'Grilles de départ populaires — ne vous figez pas dessus. Le trap vit dans le 808 et les rolls de hats, pas dans une copie 1:1.',
    faqs: [
      {
        q: 'Quel est un rythme Trap typique ?',
        a: 'La plupart du trap moderne se cale à 130–160 BPM : 808 sur 1, 8 et 11, claps sur 2 et 4, roll de hats en fin de mesure. Ces grilles sont un drum pattern de départ, pas le seul beat trap.',
      },
      {
        q: 'Comment programmer un drum pattern Trap ?',
        a: 'DAW en 4/4 vers 140 BPM, pas en doubles croches. Posez le 808 sur 1, 8 et 11, claps sur 2 et 4, puis un roll de hats. Densifiez le 808 pour ne pas rester coincé sur le rythme de base.',
      },
    ],
    patterns: [
      {
        name: 'Bounce',
        summary: '808 sur 1, 8 et 11, clap sur 2 et 4, roll de hats en fin de mesure. Le bounce trap de base.',
      },
      {
        name: '808 roll',
        summary: 'Plus de kicks 808, hats sur toutes les doubles croches, hat ouvert sur le « et » du 2. Plus occupé, plus lourd.',
      },
    ],
  },
  'hip-hop': {
    title: 'Hip Hop BPM · pattern batterie 16 pas',
    lead: 'Le BPM dit seulement la vitesse. Ensuite le beat : un drum pattern hip-hop typique à programmer dans n’importe quel DAW — boom bap, kick et clap en pocket, une mesure en doubles croches.',
    disclaimer: 'Grilles de départ populaires — ne vous figez pas dessus. Le hip-hop vit dans le pocket, pas dans une copie 1:1.',
    faqs: [
      {
        q: 'Quel est un rythme Hip Hop typique ?',
        a: 'Beaucoup de hip-hop tient un boom bap à 80–100 BPM : kick sur 1 et le « et » du 3, snare / clap sur 2 et 4. Ces grilles sont un drum pattern de départ, pas le seul beat hip-hop.',
      },
      {
        q: 'Comment programmer un drum pattern Hip Hop ?',
        a: 'DAW en 4/4 vers 90 BPM, pas en doubles croches. Kick sur 1 et 11, claps sur 2 et 4, hats légers. Ajoutez des kicks pour ne pas rester coincé sur le rythme de base.',
      },
    ],
    patterns: [
      {
        name: 'Boom bap',
        summary: 'Kick sur 1 et 11 (le « et » du 3), clap / snare sur 2 et 4. Le pocket boom bap classique.',
      },
      {
        name: 'Bounce',
        summary: 'Même backbeat, kicks en plus sur 8, 9 et 16. Plus de bounce, moins de marche.',
      },
    ],
  },
  pop: {
    title: 'Pop BPM · pattern batterie 16 pas',
    lead: 'Le BPM dit seulement la vitesse. Ensuite le beat : un drum pattern pop typique à programmer dans n’importe quel DAW — backbeat radio, kick, clap, hats, une mesure en doubles croches.',
    disclaimer: 'Grilles de départ populaires — ne vous figez pas dessus. La pop vit dans le backbeat et le refrain, pas dans une copie 1:1.',
    faqs: [
      {
        q: 'Quel est un rythme Pop typique ?',
        a: 'La pop actuelle se groupe souvent entre 90 et 120 BPM, avec un backbeat de clap sur 2 et 4 et un kick sur 1, le « et » du 2 et le 3. Ces grilles sont un drum pattern de départ, pas le seul beat pop.',
      },
      {
        q: 'Comment programmer un drum pattern Pop ?',
        a: 'DAW en 4/4 vers 105 BPM, pas en doubles croches. Claps sur 2 et 4, kick sur 1 plus quelques croches, puis hats. Passez four-on-the-floor pour ne pas rester coincé sur le rythme de base.',
      },
    ],
    patterns: [
      {
        name: 'Backbeat',
        summary: 'Kick sur 1, le « et » du 2 et le 3, clap sur 2 et 4. Le backbeat radio de la pop.',
      },
      {
        name: 'Four-on-the-floor',
        summary: 'Kick sur chaque temps, clap sur 2 et 4. La pop dancefloor, plus club que couplet.',
      },
    ],
  },
  rock: {
    title: 'Rock BPM · pattern batterie 16 pas',
    lead: 'Le BPM dit seulement la vitesse. Ensuite le beat : un drum pattern rock typique à programmer dans n’importe quel DAW — kick 1 et 3, snare 2 et 4, hats en croches, une mesure en doubles croches.',
    disclaimer: 'Grilles de départ populaires — ne vous figez pas dessus. Le rock vit dans le backbeat de snare, pas dans une copie 1:1.',
    faqs: [
      {
        q: 'Quel est un rythme Rock typique ?',
        a: 'Le rock couvre surtout 100–140 BPM : kick sur 1 et 3, snare / clap sur 2 et 4, hats en croches. Ces grilles sont un drum pattern de départ, pas le seul beat rock.',
      },
      {
        q: 'Comment programmer un drum pattern Rock ?',
        a: 'DAW en 4/4 vers 120 BPM, pas en doubles croches. Kick sur 1 et 3, claps sur 2 et 4, hats en croches. Ajoutez des kicks et des doubles croches de hats pour ne pas rester coincé sur le rythme de base.',
      },
    ],
    patterns: [
      {
        name: 'Backbeat',
        summary: 'Kick sur 1 et 3, clap / snare sur 2 et 4, hats fermés en croches. Le beat rock de base.',
      },
      {
        name: 'Drive',
        summary: 'Kicks en plus, hats en doubles croches, hats ouverts sur le « et » du 2 et du 4. Plus de push.',
      },
    ],
  },
  metal: {
    title: 'Metal BPM · pattern batterie 16 pas',
    lead: 'Le BPM dit seulement la vitesse. Ensuite le beat : un drum pattern metal typique à programmer dans n’importe quel DAW — double kick, snare 2 et 4, gallop, une mesure en doubles croches.',
    disclaimer: 'Grilles de départ populaires — ne vous figez pas dessus. Le metal vit dans le double kick et le gallop, pas dans une copie 1:1.',
    faqs: [
      {
        q: 'Quel est un rythme Metal typique ?',
        a: 'Beaucoup de metal tombe entre 120 et 180 BPM, avec une double pédale en croches et un snare sur 2 et 4. Ces grilles sont un drum pattern de départ, pas le seul beat metal.',
      },
      {
        q: 'Comment programmer un drum pattern Metal ?',
        a: 'DAW en 4/4 vers 150 BPM, pas en doubles croches. Double kick en croches, claps sur 2 et 4. Passez au gallop en doubles croches pour ne pas rester coincé sur le rythme de base.',
      },
    ],
    patterns: [
      {
        name: 'Double kick',
        summary: 'Kicks en croches (doubles), clap / snare sur 2 et 4. Le stomp metal droit.',
      },
      {
        name: 'Gallop',
        summary: 'Kicks en gallop de doubles croches sous le même snare. Le galop thrash de départ.',
      },
    ],
  },
  'lo-fi': {
    title: 'Lo-fi BPM · pattern batterie 16 pas',
    lead: 'Le BPM dit seulement la vitesse. Ensuite le beat : un drum pattern lo-fi typique à programmer dans n’importe quel DAW — boom bap poussiéreux, hats épars, une mesure en doubles croches.',
    disclaimer: 'Grilles de départ populaires — ne vous figez pas dessus. Le lo-fi vit dans la poussière et le skip paresseux, pas dans une copie 1:1.',
    faqs: [
      {
        q: 'Quel est un rythme Lo-fi typique ?',
        a: 'Le lo-fi hip-hop respire souvent entre 70 et 90 BPM, boom bap creux, hats légers. Ces grilles sont un drum pattern de départ, pas le seul beat lo-fi.',
      },
      {
        q: 'Comment programmer un drum pattern Lo-fi ?',
        a: 'DAW en 4/4 vers 80 BPM, pas en doubles croches. Kick creux, clap sur le backbeat, hats lâches. Décalez le skip pour ne pas rester coincé sur le rythme de base.',
      },
    ],
    patterns: [
      {
        name: 'Dusty boom bap',
        summary: 'Kick sur 1 et 10, hats épars, clap en backbeat. Peu de coups, beaucoup d’air.',
      },
      {
        name: 'Lazy skip',
        summary: 'Kicks sur 1, 7 et 11. Encore plus paresseux — le skip study-beat.',
      },
    ],
  },
  ambient: {
    title: 'Ambient BPM · pattern batterie 16 pas',
    lead: 'Le BPM dit seulement la vitesse. Ensuite le beat : un drum pattern ambient typique à programmer dans n’importe quel DAW — un pulse de kick, presque pas de clap, une mesure en doubles croches.',
    disclaimer: 'Grilles de départ populaires — ne vous figez pas dessus. L’ambient vit dans l’espace et le pulse, pas dans une copie 1:1.',
    faqs: [
      {
        q: 'Quel est un rythme Ambient typique ?',
        a: 'Quand il y a un pulse, l’ambient respire souvent entre 60 et 90 BPM : un kick sur 1, peu ou pas de clap. Ces grilles sont un drum pattern de départ, pas le seul beat ambient.',
      },
      {
        q: 'Comment programmer un drum pattern Ambient ?',
        a: 'DAW en 4/4 vers 70 BPM, pas en doubles croches. Un kick sur 1, un hat sur 3, hat ouvert en fin de mesure. Élargissez le pulse pour ne pas rester coincé sur le rythme de base.',
      },
    ],
    patterns: [
      {
        name: 'Pulse',
        summary: 'Kick sur 1 seulement, hat sur 3, hat ouvert sur la dernière double croche. Pas de clap.',
      },
      {
        name: 'Wide',
        summary: 'Kick sur 1 et 4, clap sur 3. Un peu plus large, encore très creux.',
      },
    ],
  },
  reggaeton: {
    title: 'Reggaeton BPM · pattern batterie 16 pas',
    lead: 'Le BPM dit seulement la vitesse. Ensuite le beat : un drum pattern reggaeton typique à programmer dans n’importe quel DAW — dembow, kick, clap, hats, une mesure en doubles croches.',
    disclaimer: 'Grilles de départ populaires — ne vous figez pas dessus. Le reggaeton vit dans le dembow, pas dans une copie 1:1.',
    faqs: [
      {
        q: 'Quel est un rythme Reggaeton typique ?',
        a: 'Le reggaeton se cale surtout à 90–100 BPM sur un dembow : kicks sur 1, 7 et 11, claps sur 2 et 4. Ces grilles sont un drum pattern de départ, pas le seul beat reggaeton.',
      },
      {
        q: 'Comment programmer un drum pattern Reggaeton ?',
        a: 'DAW en 4/4 vers 95 BPM, pas en doubles croches. Kicks sur 1, 7 et 11, claps sur 2 et 4, puis hats. Variez le bounce pour ne pas rester coincé sur le rythme de base.',
      },
    ],
    patterns: [
      {
        name: 'Dembow',
        summary: 'La colonne du reggaeton. Kicks sur 1, 7 et 11, clap sur 2 et 4. C’est le dembow.',
      },
      {
        name: 'Bounce',
        summary: 'Même épine dembow, hats et kicks un peu plus occupés. Plus de bounce club.',
      },
    ],
  },
  afrobeat: {
    title: 'Afrobeat BPM · pattern batterie 16 pas',
    lead: 'Le BPM dit seulement la vitesse. Ensuite le beat : un drum pattern afrobeat typique à programmer dans n’importe quel DAW — kick façon clave, hats highlife, une mesure en doubles croches.',
    disclaimer: 'Grilles de départ populaires — ne vous figez pas dessus. L’afrobeat vit dans la clave et la percussion, pas dans une copie 1:1.',
    faqs: [
      {
        q: 'Quel est un rythme Afrobeat typique ?',
        a: 'L’afrobeat / afrobeats de club tourne souvent autour de 100–130 BPM, kick syncopé façon clave, hats clairs. Ces grilles sont un drum pattern de départ, pas le seul beat afrobeat.',
      },
      {
        q: 'Comment programmer un drum pattern Afrobeat ?',
        a: 'DAW en 4/4 vers 115 BPM, pas en doubles croches. Posez un kick clave, claps légers, hats highlife. Déplacez le kick pour ne pas rester coincé sur le rythme de base.',
      },
    ],
    patterns: [
      {
        name: 'Clave kick',
        summary: 'Kick calé sur une clave simplifiée, pas un four-on-the-floor. La syncope fait le groove.',
      },
      {
        name: 'Highlife',
        summary: 'Hats plus ouverts, bounce highlife. Toujours un starter — pas toute la percussion live.',
      },
    ],
  },
  'jersey-club': {
    title: 'Jersey Club BPM · pattern batterie 16 pas',
    lead: 'Le BPM dit seulement la vitesse. Ensuite le beat : un drum pattern jersey club typique à programmer dans n’importe quel DAW — kicks groupés, clap, hats, une mesure en doubles croches.',
    disclaimer: 'Grilles de départ populaires — ne vous figez pas dessus. Le jersey club vit dans les kicks groupés, pas dans une copie 1:1.',
    faqs: [
      {
        q: 'Quel est un rythme Jersey Club typique ?',
        a: 'Le jersey club vit souvent vers 130–140 BPM, avec des kicks groupés sur 1, 4, 7, 10 et 13. Ces grilles sont un drum pattern de départ, pas le seul beat jersey.',
      },
      {
        q: 'Comment programmer un drum pattern Jersey Club ?',
        a: 'DAW en 4/4 vers 135 BPM, pas en doubles croches. Kicks sur 1, 4, 7, 10 et 13, puis densifiez le bounce. Changez les kicks pour ne pas rester coincé sur le rythme de base.',
      },
    ],
    patterns: [
      {
        name: 'Club kick',
        summary: 'Kicks groupés sur 1, 4, 7, 10 et 13. Le 3-3-2 jersey sur une grille de 16.',
      },
      {
        name: 'Bounce',
        summary: 'Même idée, kicks et hats plus occupés. Le bounce club une fois le sample choppé.',
      },
    ],
  },
  phonk: {
    title: 'Phonk BPM · pattern batterie 16 pas',
    lead: 'Le BPM dit seulement la vitesse. Ensuite le beat : un drum pattern phonk typique à programmer dans n’importe quel DAW — bounce Memphis, hat ouvert façon cowbell, une mesure en doubles croches.',
    disclaimer: 'Grilles de départ populaires — ne vous figez pas dessus. Le phonk vit dans le cowbell et le drift, pas dans une copie 1:1.',
    faqs: [
      {
        q: 'Quel est un rythme Phonk typique ?',
        a: 'Le drift phonk part souvent des 130 vers 160 BPM, groove trap / Memphis, hats ouverts sur 4 et 12 en stand-in de cowbell. Ces grilles sont un drum pattern de départ, pas le seul beat phonk.',
      },
      {
        q: 'Comment programmer un drum pattern Phonk ?',
        a: 'DAW en 4/4 vers 140 BPM, pas en doubles croches. Groove type trap, hats ouverts sur 4 et 12. Passez les hats four-on-the-floor pour le drift, sans rester coincé sur le rythme de base.',
      },
    ],
    patterns: [
      {
        name: 'Memphis',
        summary: 'Kick et clap façon trap, hats ouverts sur 4 et 12 comme cowbell. L’ossature Memphis.',
      },
      {
        name: 'Drift',
        summary: 'Hats plus four-on-the-floor, même cowbell. Le drift phonk de piste.',
      },
    ],
  },
  hardstyle: {
    title: 'Hardstyle BPM · pattern batterie 16 pas',
    lead: 'Le BPM dit seulement la vitesse. Ensuite le beat : un drum pattern hardstyle typique à programmer dans n’importe quel DAW — reverse-bass sur chaque temps, hats qui poussent, une mesure en doubles croches.',
    disclaimer: 'Grilles de départ populaires — ne vous figez pas dessus. Le hardstyle vit dans le punch reverse-bass, pas dans une copie 1:1.',
    faqs: [
      {
        q: 'Quel est un rythme Hardstyle typique ?',
        a: 'Le hardstyle se cale surtout à 150–160 BPM, kick reverse-bass four-on-the-floor, hats qui poussent. Ces grilles sont un drum pattern de départ, pas le seul beat hardstyle.',
      },
      {
        q: 'Comment programmer un drum pattern Hardstyle ?',
        a: 'DAW en 4/4 vers 150 BPM, pas en doubles croches. Kick sur chaque temps (pensez reverse-bass), claps sur 2 et 4, puis hats. Changez le drive des hats pour ne pas rester coincé sur le rythme de base.',
      },
    ],
    patterns: [
      {
        name: 'Reverse-bass kick',
        summary: 'Kick four-on-the-floor — en son, c’est le reverse-bass. Clap sur 2 et 4. La grille est simple, le kick fait tout.',
      },
      {
        name: 'Hat drive',
        summary: 'Même reverse-bass, hats plus occupés pour pousser le festival. Le drive au-dessus du kick.',
      },
    ],
  },
  jazz: {
    title: 'Jazz BPM · pattern batterie 16 pas',
    lead: 'Le BPM dit seulement la vitesse. Ensuite le beat : un drum pattern jazz typique à programmer dans n’importe quel DAW — hats à la place de la ride, kick, clap, une mesure en doubles croches. Pas un vrai swing.',
    disclaimer: 'Grilles de départ populaires — ne vous figez pas dessus. Le jazz vit dans la ride et le swing, pas dans une copie 1:1 de hats droits.',
    faqs: [
      {
        q: 'Quel est un rythme Jazz typique ?',
        a: 'Le jazz couvre large, environ 80–160 BPM, de la ballade au swing rapide. Ici les hats remplacent la ride — ce n’est pas un vrai swing. Ces grilles sont un drum pattern de départ.',
      },
      {
        q: 'Comment programmer un drum pattern Jazz ?',
        a: 'DAW en 4/4, tempo au choix entre 80 et 160, pas en doubles croches. Hats en ride time, kick léger, clap discret. Allégez vers la ballade pour ne pas rester coincé sur le rythme de base.',
      },
    ],
    patterns: [
      {
        name: 'Ride time',
        summary: 'Hats fermés en stand-in de ride, kick et clap légers. Grille droite — pas un vrai swing de batterie jazz.',
      },
      {
        name: 'Ballad',
        summary: 'Plus sparse, plus lent dans le feeling. Toujours des hats à la place de la ride, pas une section jazz complète.',
      },
    ],
  },
  salsa: {
    title: 'Salsa BPM · pattern batterie 16 pas',
    lead: 'Le BPM dit seulement la vitesse. Ensuite le beat : un drum pattern salsa typique à programmer dans n’importe quel DAW — tumbao, kick, clap, hats, une mesure en doubles croches. Starter, pas toute la percussion.',
    disclaimer: 'Grilles de départ populaires — ne vous figez pas dessus. La salsa vit dans le tumbao et la section, pas dans une copie 1:1 de quatre pistes.',
    faqs: [
      {
        q: 'Quel est un rythme Salsa typique ?',
        a: 'Sur la grille, la salsa se compte vite, vers 180–220 BPM, autour d’un tumbao. Ces grilles sont un drum pattern de départ — pas les congas, timbales et campana.',
      },
      {
        q: 'Comment programmer un drum pattern Salsa ?',
        a: 'DAW en 4/4 vers 200 BPM, pas en doubles croches. Esquissez le tumbao au kick, un clap pour marquer le temps, hats légers. Passez mambo sans croire que c’est toute la section.',
      },
    ],
    patterns: [
      {
        name: 'Tumbao',
        summary: 'Squelette tumbao en kick / clap / hats. Un starter DAW, pas la percussion salsa complète.',
      },
      {
        name: 'Mambo',
        summary: 'Un cran plus occupé, feeling mambo. Toujours une grille de départ, pas un orchestre.',
      },
    ],
  },
  bachata: {
    title: 'Bachata BPM · pattern batterie 16 pas',
    lead: 'Le BPM dit seulement la vitesse. Ensuite le beat : un drum pattern bachata typique à programmer dans n’importe quel DAW — 1-2-3 puis clap sur 4, une mesure en doubles croches.',
    disclaimer: 'Grilles de départ populaires — ne vous figez pas dessus. La bachata vit dans le 1-2-3-tap, pas dans une copie 1:1.',
    faqs: [
      {
        q: 'Quel est un rythme Bachata typique ?',
        a: 'La bachata moderne tourne souvent autour de 120–140 BPM : trois pas, clap sur 4. Ces grilles sont un drum pattern de départ, pas le seul beat bachata.',
      },
      {
        q: 'Comment programmer un drum pattern Bachata ?',
        a: 'DAW en 4/4 vers 130 BPM, pas en doubles croches. Marquez 1-2-3 au kick, clap sur 4. Syncopez hats et kicks pour ne pas rester coincé sur le rythme de base.',
      },
    ],
    patterns: [
      {
        name: '1-2-3-tap',
        summary: 'Kick sur 1, 2 et 3, clap sur 4. Le compte que l’on danse.',
      },
      {
        name: 'Syncopated',
        summary: 'Même clap sur 4, kicks et hats un peu décalés. Plus urbain, toujours le 1-2-3 sous-jacent.',
      },
    ],
  },
  gospel: {
    title: 'Gospel BPM · pattern batterie 16 pas',
    lead: 'Le BPM dit seulement la vitesse. Ensuite le beat : un drum pattern gospel typique à programmer dans n’importe quel DAW — church claps sur 2 et 4, kick en pocket, une mesure en doubles croches.',
    disclaimer: 'Grilles de départ populaires — ne vous figez pas dessus. Le gospel vit dans les claps d’église, pas dans une copie 1:1.',
    faqs: [
      {
        q: 'Quel est un rythme Gospel typique ?',
        a: 'Beaucoup de gospel se situe entre 60 et 100 BPM, claps d’église sur 2 et 4, kick d’anticipation vers le 3. Ces grilles sont un drum pattern de départ, pas le seul beat gospel.',
      },
      {
        q: 'Comment programmer un drum pattern Gospel ?',
        a: 'DAW en 4/4 vers 80 BPM, pas en doubles croches. Claps sur 2 et 4, kick d’anticipation vers le 3. Densifiez vers le shout pour ne pas rester coincé sur le rythme de base.',
      },
    ],
    patterns: [
      {
        name: 'Church clap',
        summary: 'Clap / snare sur 2 et 4, kick d’anticipation vers le 3. Les church claps font le groove.',
      },
      {
        name: 'Shout',
        summary: 'Plus de kicks et de claps, énergie praise. Le même backbeat, plus de shout.',
      },
    ],
  },
  country: {
    title: 'Country BPM · pattern batterie 16 pas',
    lead: 'Le BPM dit seulement la vitesse. Ensuite le beat : un drum pattern country typique à programmer dans n’importe quel DAW — train beat, snare 2 et 4, hats en doubles croches, une mesure.',
    disclaimer: 'Grilles de départ populaires — ne vous figez pas dessus. Le country vit dans le train beat et le two-step, pas dans une copie 1:1.',
    faqs: [
      {
        q: 'Quel est un rythme Country typique ?',
        a: 'Le country couvre souvent 80–120 BPM : snare sur 2 et 4, hats sur chaque double croche (train beat), ou two-step avec kick sur 1 et 11. Ces grilles sont un drum pattern de départ, pas le seul beat country.',
      },
      {
        q: 'Comment programmer un drum pattern Country ?',
        a: 'DAW en 4/4 vers 100 BPM, pas en doubles croches. Claps sur 2 et 4, hats sur toutes les doubles croches, pas de hat ouvert. Passez two-step (kick 1 et 11) pour ne pas rester coincé sur le rythme de base.',
      },
    ],
    patterns: [
      {
        name: 'Train beat',
        summary: 'Clap / snare sur 2 et 4, hats fermés sur chaque double croche, pas de hat ouvert. Le train country.',
      },
      {
        name: 'Two-step',
        summary: 'Kick sur 1 et 11, même backbeat. Le two-step que l’on danse.',
      },
    ],
  },
};
