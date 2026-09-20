import type { GenrePatternCopyMap } from '../types';

export const es: GenrePatternCopyMap = {
  house: {
    title: 'House BPM · patrón de batería de 16 pasos',
    lead: 'El BPM solo dice lo rápido. Luego va el beat: un patrón de batería house típico que puedes programar en cualquier DAW — kick, clap, hats, un compás de dieciseisavos.',
    disclaimer: 'Grids de partida populares: no te quedes congelado en ellos. El house vive en el skip y los hats, no en copiar esto 1:1.',
    faqs: [
      {
        q: '¿Cuál es un ritmo house típico?',
        a: 'Casi todo el house apoya un kick four-on-the-floor a 120–130 BPM, claps en 2 y 4, y hats en los contratiempos. Estas grids son un drum pattern de partida, no el único beat house.',
      },
      {
        q: '¿Cómo programo un patrón de batería house?',
        a: 'Pon el DAW en 4/4 a unos 125 BPM, pasos de dieciseisavo. Kick en cada tiempo, claps en 2 y 4, luego hats cerrados. Cambia el skip y los hats para no quedarte en el ritmo inicial.',
      },
    ],
    patterns: [
      {
        name: 'Four-on-the-floor',
        summary: 'La columna del house. Kick en cada tiempo, clap en 2 y 4, hats cerrados en los contratiempos, hat abierto hacia el siguiente downbeat.',
      },
      {
        name: 'Disco skip',
        summary: 'Los mismos claps, más un kick en el dieciseisavo antes del 2 y el 4. Ese jack aparece mucho en disco y filtered house.',
      },
    ],
  },
  techno: {
    title: 'Techno BPM · patrón de batería de 16 pasos',
    lead: 'El BPM solo dice lo rápido. Luego va el beat: un patrón de batería Techno típico que puedes programar en cualquier DAW — kick, clap, hats, un compás de dieciseisavos. El sello es el four-on-the-floor hipnótico y los hats de contratiempo.',
    disclaimer: 'Grids de partida populares: no te quedes congelado en ellos. El techno vive en los hats offbeat y el kick repetido, no en copiar esto 1:1.',
    faqs: [
      {
        q: '¿Cuál es un ritmo Techno típico?',
        a: 'Casi todo el techno apoya un kick four-on-the-floor a 125–140 BPM, claps en 2 y 4, y hats en los dieciseisavos pares. Estas grids son un drum pattern de partida, no el único beat techno.',
      },
      {
        q: '¿Cómo programo un patrón de batería Techno?',
        a: 'Pon el DAW en 4/4 a unos 132 BPM, pasos de dieciseisavo. Kick en cada tiempo, claps en 2 y 4, hats cerrados en los pares y hat abierto en los contratiempos de corchea. Cambia los hats para no quedarte en el ritmo inicial.',
      },
    ],
    patterns: [
      {
        name: 'Four-on-the-floor',
        summary: 'La columna del techno. Kick en cada tiempo, clap en 2 y 4, hats cerrados más secos que en house, sin skip.',
      },
      {
        name: 'Offbeat hats',
        summary: 'Hats cerrados en los dieciseisavos pares y hat abierto en los contratiempos de corchea. Ese tic-tic es lo que hipnotiza.',
      },
    ],
  },
  trance: {
    title: 'Trance BPM · patrón de batería de 16 pasos',
    lead: 'El BPM solo dice lo rápido. Luego va el beat: un patrón de batería Trance típico que puedes programar en cualquier DAW — kick, clap, hats, un compás de dieciseisavos. El sello son los hats de corchea offbeat y el snare roll hacia el drop.',
    disclaimer: 'Grids de partida populares: no te quedes congelado en ellos. El trance vive en el roll y las frases largas, no en copiar esto 1:1.',
    faqs: [
      {
        q: '¿Cuál es un ritmo Trance típico?',
        a: 'Casi todo el trance apoya un kick four-on-the-floor a 130–145 BPM, claps en 2 y 4, y hats en los contratiempos de corchea. Estas grids son un drum pattern de partida, no el único beat trance.',
      },
      {
        q: '¿Cómo programo un patrón de batería Trance?',
        a: 'Pon el DAW en 4/4 a unos 138 BPM, pasos de dieciseisavo. Kick en cada tiempo, claps en 2 y 4, hats en el offbeat de corchea. En los últimos cuatro dieciseisavos puedes meter un snare roll. Cambia el roll para no quedarte en el ritmo inicial.',
      },
    ],
    patterns: [
      {
        name: 'Four-on-the-floor',
        summary: 'Kick en cada tiempo, clap en 2 y 4, hats cerrados en los contratiempos de corchea. La base de un trance anthem.',
      },
      {
        name: 'Snare roll',
        summary: 'Los mismos hats offbeat, más un roll de snare o clap en los últimos cuatro dieciseisavos del compás, empujando al drop.',
      },
    ],
  },
  'drum-and-bass': {
    title: 'Drum & Bass BPM · patrón de batería de 16 pasos',
    lead: 'El BPM solo dice lo rápido. Luego va el beat: un patrón de batería Drum & Bass típico que puedes programar en cualquier DAW — kick, clap, hats, un compás de dieciseisavos. El sello es el two-step a 160–180, a menudo sentido en half-time.',
    disclaimer: 'Grids de partida populares: no te quedes congelado en ellos. El drum & bass vive en el two-step y el amen, no en copiar esto 1:1.',
    faqs: [
      {
        q: '¿Cuál es un ritmo Drum & Bass típico?',
        a: 'Casi todo el drum & bass corre a 160–180 BPM con kick en los pasos 1 y 11 y clap en el 9. Estas grids son un drum pattern de partida, no el único beat Drum & Bass.',
      },
      {
        q: '¿Cómo programo un patrón de batería Drum & Bass?',
        a: 'Pon el DAW en 4/4 a unos 174 BPM, pasos de dieciseisavo. Kick en 1 y 11, clap en el paso 9, hats ligeros. Añade hits extra si quieres un Amen sketch. Cambia el break para no quedarte en el ritmo inicial.',
      },
    ],
    patterns: [
      {
        name: 'Two-step',
        summary: 'Kick en los pasos 1 y 11, clap en el 9. El two-step clásico: snare en el 3, kick extra en el & del 3.',
      },
      {
        name: 'Amen sketch',
        summary: 'La misma columna two-step con hits extra de kick y clap. Un esbozo de Amen, no el break completo.',
      },
    ],
  },
  dubstep: {
    title: 'Dubstep BPM · patrón de batería de 16 pasos',
    lead: 'El BPM solo dice lo rápido. Luego va el beat: un patrón de batería Dubstep típico que puedes programar en cualquier DAW — kick, clap, hats, un compás de dieciseisavos. El sello es el half-time: escrito a 135–145, sentido cerca de 70.',
    disclaimer: 'Grids de partida populares: no te quedes congelado en ellos. El dubstep vive en el half-time y el wobble, no en copiar esto 1:1.',
    faqs: [
      {
        q: '¿Cuál es un ritmo Dubstep típico?',
        a: 'Casi todo el dubstep se escribe a 135–145 BPM con kick en el 1 y clap en el 9, un half-time que se siente a la mitad. Estas grids son un drum pattern de partida, no el único beat dubstep.',
      },
      {
        q: '¿Cómo programo un patrón de batería Dubstep?',
        a: 'Pon el DAW en 4/4 a unos 140 BPM, pasos de dieciseisavo. Kick en el paso 1, clap en el 9, hats marcando el pulso. Para el wobble, añade kicks en 7 y 11. Cambia el drop para no quedarte en el ritmo inicial.',
      },
    ],
    patterns: [
      {
        name: 'Half-time',
        summary: 'Kick en el paso 1, clap en el 9. Un solo golpe grave y un snare a mitad de compás: el drop half-time.',
      },
      {
        name: 'Wobble kick',
        summary: 'El mismo clap en el 9, más kicks en 7 y 11 que empujan el wobble del bajo.',
      },
    ],
  },
  trap: {
    title: 'Trap BPM · patrón de batería de 16 pasos',
    lead: 'El BPM solo dice lo rápido. Luego va el beat: un patrón de batería Trap típico que puedes programar en cualquier DAW — kick, clap, hats, un compás de dieciseisavos. El sello es el bounce del 808 y el hat roll.',
    disclaimer: 'Grids de partida populares: no te quedes congelado en ellos. El trap vive en el 808 y los rolls, no en copiar esto 1:1.',
    faqs: [
      {
        q: '¿Cuál es un ritmo Trap típico?',
        a: 'Casi todo el trap moderno se mueve a 130–160 BPM con kicks en 1, 8 y 11, clap en 2 y 4, y hat rolls encima. Estas grids son un drum pattern de partida, no el único beat trap.',
      },
      {
        q: '¿Cómo programo un patrón de batería Trap?',
        a: 'Pon el DAW en 4/4 a unos 140 BPM, pasos de dieciseisavo. Kick en 1, 8 y 11, clap en 2 y 4, luego un hat roll. En la variante 808 llena más kicks y hats a dieciseisavo. Cambia el bounce para no quedarte en el ritmo inicial.',
      },
    ],
    patterns: [
      {
        name: 'Bounce',
        summary: 'Kicks en 1, 8 y 11, clap en 2 y 4, hat roll hacia el final del compás. El bounce de radio.',
      },
      {
        name: '808 roll',
        summary: 'Kicks más ocupados y hats en casi todos los dieciseisavos. El 808 marca el roll, no solo el downbeat.',
      },
    ],
  },
  'hip-hop': {
    title: 'Hip Hop BPM · patrón de batería de 16 pasos',
    lead: 'El BPM solo dice lo rápido. Luego va el beat: un patrón de batería Hip Hop típico que puedes programar en cualquier DAW — kick, clap, hats, un compás de dieciseisavos. El sello es el pocket: boom bap a 80–100.',
    disclaimer: 'Grids de partida populares: no te quedes congelado en ellos. El hip hop vive en el pocket y el swing, no en copiar esto 1:1.',
    faqs: [
      {
        q: '¿Cuál es un ritmo Hip Hop típico?',
        a: 'Casi todo el boom bap apoya kick en 1 y 11, snare o clap en 2 y 4, a 80–100 BPM. Estas grids son un drum pattern de partida, no el único beat Hip Hop.',
      },
      {
        q: '¿Cómo programo un patrón de batería Hip Hop?',
        a: 'Pon el DAW en 4/4 a unos 90 BPM, pasos de dieciseisavo. Kick en 1 y 11, clap en 2 y 4, hats suaves. Cambia el pocket y el bounce para no quedarte en el ritmo inicial.',
      },
    ],
    patterns: [
      {
        name: 'Boom bap',
        summary: 'Kick en 1 y 11, snare o clap en 2 y 4. El boom-bap clásico: grave en el 1, golpe en el backbeat.',
      },
      {
        name: 'Bounce',
        summary: 'Misma caja en 2 y 4, kick más desplazado hacia el bounce. Menos head-nod, más balanceo.',
      },
    ],
  },
  pop: {
    title: 'Pop BPM · patrón de batería de 16 pasos',
    lead: 'El BPM solo dice lo rápido. Luego va el beat: un patrón de batería Pop típico que puedes programar en cualquier DAW — kick, clap, hats, un compás de dieciseisavos. El sello es el backbeat de radio, a veces four-on-the-floor.',
    disclaimer: 'Grids de partida populares: no te quedes congelado en ellos. El pop vive en el estribillo y el backbeat, no en copiar esto 1:1.',
    faqs: [
      {
        q: '¿Cuál es un ritmo Pop típico?',
        a: 'Casi todo el pop de radio se mueve a 90–120 BPM con clap o snare en 2 y 4. Unas pistas van de backbeat, otras de four-on-the-floor. Estas grids son un drum pattern de partida, no el único beat pop.',
      },
      {
        q: '¿Cómo programo un patrón de batería Pop?',
        a: 'Pon el DAW en 4/4 a unos 105 BPM, pasos de dieciseisavo. Empieza con kick en 1 y 3 y clap en 2 y 4, o pon kick en cada tiempo si quieres dance-pop. Cambia hats y skip para no quedarte en el ritmo inicial.',
      },
    ],
    patterns: [
      {
        name: 'Backbeat',
        summary: 'Kick en 1 y 3, clap en 2 y 4, hats de corchea. El esqueleto de un hit de radio.',
      },
      {
        name: 'Four-on-the-floor',
        summary: 'Kick en cada tiempo, clap en 2 y 4. El pop que se acerca al dancefloor.',
      },
    ],
  },
  rock: {
    title: 'Rock BPM · patrón de batería de 16 pasos',
    lead: 'El BPM solo dice lo rápido. Luego va el beat: un patrón de batería Rock típico que puedes programar en cualquier DAW — kick, clap, hats, un compás de dieciseisavos. El sello es el backbeat de snare en 2 y 4.',
    disclaimer: 'Grids de partida populares: no te quedes congelado en ellos. El rock vive en el snare y el riff, no en copiar esto 1:1.',
    faqs: [
      {
        q: '¿Cuál es un ritmo Rock típico?',
        a: 'Casi todo el rock apoya kick en 1 y 3, snare o clap en 2 y 4, a 100–140 BPM. Estas grids son un drum pattern de partida, no el único beat rock.',
      },
      {
        q: '¿Cómo programo un patrón de batería Rock?',
        a: 'Pon el DAW en 4/4 a unos 120 BPM, pasos de dieciseisavo. Kick en 1 y 3, clap en 2 y 4, hats de corchea. En Drive añade kicks extra. Cambia el drive para no quedarte en el ritmo inicial.',
      },
    ],
    patterns: [
      {
        name: 'Backbeat',
        summary: 'Kick en 1 y 3, clap en 2 y 4. El backbeat de toda la vida, hats en corcheas.',
      },
      {
        name: 'Drive',
        summary: 'Los mismos claps, más kicks extra entre tiempos. El empuje de un estribillo de arena.',
      },
    ],
  },
  metal: {
    title: 'Metal BPM · patrón de batería de 16 pasos',
    lead: 'El BPM solo dice lo rápido. Luego va el beat: un patrón de batería Metal típico que puedes programar en cualquier DAW — kick, clap, hats, un compás de dieciseisavos. El sello es el double kick y el galope.',
    disclaimer: 'Grids de partida populares: no te quedes congelado en ellos. El metal vive en el double kick y el gallop, no en copiar esto 1:1.',
    faqs: [
      {
        q: '¿Cuál es un ritmo Metal típico?',
        a: 'Casi todo el metal de este rango va a 120–180 BPM con clap en 2 y 4 y kicks dobles en corchea o galope en dieciseisavos. Estas grids son un drum pattern de partida, no el único beat metal.',
      },
      {
        q: '¿Cómo programo un patrón de batería Metal?',
        a: 'Pon el DAW en 4/4 a unos 150 BPM, pasos de dieciseisavo. Clap en 2 y 4, kicks dobles en corcheas; el gallop llena dieciseisavos. Cambia el galope para no quedarte en el ritmo inicial.',
      },
    ],
    patterns: [
      {
        name: 'Double kick',
        summary: 'Kicks dobles en corcheas, clap en 2 y 4. El stomp de groove metal, no un blast beat.',
      },
      {
        name: 'Gallop',
        summary: 'Galope en dieciseisavos bajo el mismo backbeat. El empuje thrash en una barra de 16 pasos.',
      },
    ],
  },
  'lo-fi': {
    title: 'Lo-fi BPM · patrón de batería de 16 pasos',
    lead: 'El BPM solo dice lo rápido. Luego va el beat: un patrón de batería Lo-fi típico que puedes programar en cualquier DAW — kick, clap, hats, un compás de dieciseisavos. El sello es el boom bap polvoriento y el skip perezoso a 70–90.',
    disclaimer: 'Grids de partida populares: no te quedes congelado en ellos. El lo-fi vive en el dust y el swing flojo, no en copiar esto 1:1.',
    faqs: [
      {
        q: '¿Cuál es un ritmo Lo-fi típico?',
        a: 'Casi todo el lo-fi hip-hop se mueve a 70–90 BPM con un boom bap escaso: pocos kicks, clap en 2 y 4, hats sueltos. Estas grids son un drum pattern de partida, no el único beat lo-fi.',
      },
      {
        q: '¿Cómo programo un patrón de batería Lo-fi?',
        a: 'Pon el DAW en 4/4 a unos 80 BPM, pasos de dieciseisavo. Deja el grid ralo: kick en 1 y quizás 11, clap en 2 y 4, hats perezosos. Cambia el skip para no quedarte en el ritmo inicial.',
      },
    ],
    patterns: [
      {
        name: 'Dusty boom bap',
        summary: 'Boom bap escaso: pocos kicks, clap en 2 y 4, hats suaves. El dust está en el sample, no en llenar la grid.',
      },
      {
        name: 'Lazy skip',
        summary: 'Un skip perezoso, un kick extra fuera de sitio. Menos cabeza, más balanceo de study beat.',
      },
    ],
  },
  ambient: {
    title: 'Ambient BPM · patrón de batería de 16 pasos',
    lead: 'El BPM solo dice lo rápido. Luego va el beat: un patrón de batería Ambient típico que puedes programar en cualquier DAW — kick, clap, hats, un compás de dieciseisavos. El sello es un pulso lento, a menudo sin clap, a 60–90.',
    disclaimer: 'Grids de partida populares: no te quedes congelado en ellos. El ambient vive en el espacio y el pulso, no en copiar esto 1:1.',
    faqs: [
      {
        q: '¿Cuál es un ritmo Ambient típico?',
        a: 'Cuando hay beat, el ambient suele respirar a 60–90 BPM con un kick de pulso y casi ningún clap. Estas grids son un drum pattern de partida, no el único beat ambient.',
      },
      {
        q: '¿Cómo programo un patrón de batería Ambient?',
        a: 'Pon el DAW en 4/4 a unos 75 BPM, pasos de dieciseisavo. Un kick de pulso, hats muy abiertos, sin clap. Cambia el espacio entre hits para no quedarte en el ritmo inicial.',
      },
    ],
    patterns: [
      {
        name: 'Pulse',
        summary: 'Un kick de pulso, hats suaves, sin clap. Solo la malla mínima para que el pad tenga tempo.',
      },
      {
        name: 'Wide',
        summary: 'Aún menos hits, más aire entre ellos. La grid ancha deja sitio al drone.',
      },
    ],
  },
  reggaeton: {
    title: 'Reggaeton BPM · patrón de batería de 16 pasos',
    lead: 'El BPM solo dice lo rápido. Luego va el beat: un patrón de batería Reggaeton típico que puedes programar en cualquier DAW — kick, clap, hats, un compás de dieciseisavos. El sello es el dembow a 90–100.',
    disclaimer: 'Grids de partida populares: no te quedes congelado en ellos. El reggaeton vive en el dembow, no en copiar esto 1:1.',
    faqs: [
      {
        q: '¿Cuál es un ritmo Reggaeton típico?',
        a: 'Casi todo el reggaeton apoya el dembow a 90–100 BPM: kick en 1, 7 y 11, clap en 2 y 4. Estas grids son un drum pattern de partida, no el único beat reggaeton.',
      },
      {
        q: '¿Cómo programo un patrón de batería Reggaeton?',
        a: 'Pon el DAW en 4/4 a unos 95 BPM, pasos de dieciseisavo. Kick en los pasos 1, 7 y 11, clap en 2 y 4, hats ligeros. Cambia el bounce del dembow para no quedarte en el ritmo inicial.',
      },
    ],
    patterns: [
      {
        name: 'Dembow',
        summary: 'Kick en 1, 7 y 11, clap en 2 y 4. El dembow de siempre, un compás de dieciseisavos.',
      },
      {
        name: 'Bounce',
        summary: 'El mismo clap en 2 y 4, kick un poco más desplazado. Más bounce de club, menos dembow puro.',
      },
    ],
  },
  afrobeat: {
    title: 'Afrobeat BPM · patrón de batería de 16 pasos',
    lead: 'El BPM solo dice lo rápido. Luego va el beat: un patrón de batería Afrobeat típico que puedes programar en cualquier DAW — kick, clap, hats, un compás de dieciseisavos. El sello es el kick tipo clave y los hats highlife, a 100–130.',
    disclaimer: 'Grids de partida populares: no te quedes congelado en ellos. El afrobeat vive en la clave y la percusión, no en copiar esto 1:1.',
    faqs: [
      {
        q: '¿Cuál es un ritmo Afrobeat típico?',
        a: 'El afrobeat de club suele ir a 100–130 BPM con un kick que dibuja clave y hats de highlife. Estas grids son un drum pattern de partida, no el único beat Afrobeat.',
      },
      {
        q: '¿Cómo programo un patrón de batería Afrobeat?',
        a: 'Pon el DAW en 4/4 a unos 115 BPM, pasos de dieciseisavo. Coloca el kick en clave, clap en apoyo, hats ocupados estilo highlife. Cambia la clave para no quedarte en el ritmo inicial.',
      },
    ],
    patterns: [
      {
        name: 'Clave kick',
        summary: 'El kick dibuja una clave, no un four-on-the-floor. Clap de apoyo, hats ya movidos.',
      },
      {
        name: 'Highlife',
        summary: 'Hats más ocupados, acentos de highlife. La guitarra y la percusión harían el resto fuera de esta grid.',
      },
    ],
  },
  'jersey-club': {
    title: 'Jersey Club BPM · patrón de batería de 16 pasos',
    lead: 'El BPM solo dice lo rápido. Luego va el beat: un patrón de batería Jersey Club típico que puedes programar en cualquier DAW — kick, clap, hats, un compás de dieciseisavos. El sello es el club kick a 130–140: pasos 1, 4, 7, 10 y 13.',
    disclaimer: 'Grids de partida populares: no te quedes congelado en ellos. El jersey club vive en el stutter del kick, no en copiar esto 1:1.',
    faqs: [
      {
        q: '¿Cuál es un ritmo Jersey Club típico?',
        a: 'Casi todo el jersey club corre a 130–140 BPM con kicks en 1, 4, 7, 10 y 13 — ese 3-3-2 de club. Estas grids son un drum pattern de partida, no el único beat Jersey Club.',
      },
      {
        q: '¿Cómo programo un patrón de batería Jersey Club?',
        a: 'Pon el DAW en 4/4 a unos 135 BPM, pasos de dieciseisavo. Kick en 1, 4, 7, 10 y 13, clap en apoyo, hats picados. Cambia el stutter para no quedarte en el ritmo inicial.',
      },
    ],
    patterns: [
      {
        name: 'Club kick',
        summary: 'Kicks en 1, 4, 7, 10 y 13. El club kick que empuja el sample picado.',
      },
      {
        name: 'Bounce',
        summary: 'Misma familia de kicks, un poco más de bounce entre ellos. Menos bed-squeak, más groove.',
      },
    ],
  },
  phonk: {
    title: 'Phonk BPM · patrón de batería de 16 pasos',
    lead: 'El BPM solo dice lo rápido. Luego va el beat: un patrón de batería Phonk típico que puedes programar en cualquier DAW — kick, clap, hats, un compás de dieciseisavos. El sello es el Memphis y el cowbell en el hat abierto, a 130–160.',
    disclaimer: 'Grids de partida populares: no te quedes congelado en ellos. El phonk vive en el cowbell y el drift, no en copiar esto 1:1.',
    faqs: [
      {
        q: '¿Cuál es un ritmo Phonk típico?',
        a: 'El drift phonk suele ir a 130–160 BPM con kick recto, clap en 2 y 4, y un hat abierto tipo cowbell en 4 y 12. Estas grids son un drum pattern de partida, no el único beat phonk.',
      },
      {
        q: '¿Cómo programo un patrón de batería Phonk?',
        a: 'Pon el DAW en 4/4 a unos 140 BPM, pasos de dieciseisavo. Kick estable, clap en 2 y 4, hat abierto en los pasos 4 y 12 como cowbell. Cambia el drift para no quedarte en el ritmo inicial.',
      },
    ],
    patterns: [
      {
        name: 'Memphis',
        summary: 'Hat abierto tipo cowbell en 4 y 12, clap en 2 y 4. El color Memphis en una grid de 16 pasos.',
      },
      {
        name: 'Drift',
        summary: 'Más kick de carrera, menos cowbell. El drift phonk empuja recto y deja el 808 deslizar.',
      },
    ],
  },
  hardstyle: {
    title: 'Hardstyle BPM · patrón de batería de 16 pasos',
    lead: 'El BPM solo dice lo rápido. Luego va el beat: un patrón de batería Hardstyle típico que puedes programar en cualquier DAW — kick, clap, hats, un compás de dieciseisavos. El sello es el reverse-bass a 150–160, con kick four-on-the-floor.',
    disclaimer: 'Grids de partida populares: no te quedes congelado en ellos. El hardstyle vive en el reverse-bass y el drive de hats, no en copiar esto 1:1.',
    faqs: [
      {
        q: '¿Cuál es un ritmo Hardstyle típico?',
        a: 'Casi todo el hardstyle apoya un kick four-on-the-floor a 150–160 BPM; el reverse-bass está en el sonido del kick, no en otra grid. Estas grids son un drum pattern de partida, no el único beat hardstyle.',
      },
      {
        q: '¿Cómo programo un patrón de batería Hardstyle?',
        a: 'Pon el DAW en 4/4 a unos 150 BPM, pasos de dieciseisavo. Kick en cada tiempo, clap en 2 y 4, hats con drive. El reverse-bass va en el sample del kick. Cambia los hats para no quedarte en el ritmo inicial.',
      },
    ],
    patterns: [
      {
        name: 'Reverse-bass kick',
        summary: 'Kick four-on-the-floor, clap en 2 y 4. El reverse-bass es el timbre del kick, no un paso extra en la grid.',
      },
      {
        name: 'Hat drive',
        summary: 'Los mismos kicks, hats más ocupados empujando el festival. El drive está en el hi-hat, no en otro kick.',
      },
    ],
  },
  jazz: {
    title: 'Jazz BPM · patrón de batería de 16 pasos',
    lead: 'El BPM solo dice lo rápido. Luego va el beat: un patrón de batería Jazz típico que puedes programar en cualquier DAW — kick, clap, hats, un compás de dieciseisavos. El sello es el ride; aquí los hats hacen de ride, y no es swing real.',
    disclaimer: 'Grids de partida populares: no te quedes congelado en ellos. El jazz vive en el ride y el swing, no en copiar esto 1:1.',
    faqs: [
      {
        q: '¿Cuál es un ritmo Jazz típico?',
        a: 'El jazz útil en un DAW cubre unos 80–160 BPM. Estas grids son rectas: los hats sustituyen al ride y no marcan swing real. Son un drum pattern de partida, no el único beat jazz.',
      },
      {
        q: '¿Cómo programo un patrón de batería Jazz?',
        a: 'Pon el DAW en 4/4 a unos 120 BPM, pasos de dieciseisavo. Hats como ride, kick ligero, clap suave. Recuerda: no es swing real. Cambia el ride para no quedarte en el ritmo inicial.',
      },
    ],
    patterns: [
      {
        name: 'Ride time',
        summary: 'Los hats hacen de ride. Grid recta, no swing real: sirve para colocar el tiempo, no para imitar un batería de jazz.',
      },
      {
        name: 'Ballad',
        summary: 'Menos hits, más aire. Una ballad de partida en hats; el swing, si lo hay, lo pones tú fuera de la grid.',
      },
    ],
  },
  salsa: {
    title: 'Salsa BPM · patrón de batería de 16 pasos',
    lead: 'El BPM solo dice lo rápido. Luego va el beat: un patrón de batería Salsa típico que puedes programar en cualquier DAW — kick, clap, hats, un compás de dieciseisavos. El sello es el tumbao, escrito a 180–220.',
    disclaimer: 'Grids de partida populares: no te quedes congelado en ellos. La salsa vive en la clave y la percusión, no en copiar esto 1:1.',
    faqs: [
      {
        q: '¿Cuál es un ritmo Salsa típico?',
        a: 'En la rejilla la salsa se cuenta a 180–220 BPM. Estas grids son un tumbao o mambo de partida, no la percusión completa de una salsa.',
      },
      {
        q: '¿Cómo programo un patrón de batería Salsa?',
        a: 'Pon el DAW en 4/4 a unos 200 BPM, pasos de dieciseisavo. Esboza el tumbao con kick y clap; no intentes meter congas, campana y clave en cuatro lanes. Cambia el tumbao para no quedarte en el ritmo inicial.',
      },
    ],
    patterns: [
      {
        name: 'Tumbao',
        summary: 'Una grid de partida para el tumbao. No es la percusión completa: sin congas ni campana reales.',
      },
      {
        name: 'Mambo',
        summary: 'Esqueleto mambo para el DAW. Starter grid, no una sección de metales ni timbales 1:1.',
      },
    ],
  },
  bachata: {
    title: 'Bachata BPM · patrón de batería de 16 pasos',
    lead: 'El BPM solo dice lo rápido. Luego va el beat: un patrón de batería Bachata típico que puedes programar en cualquier DAW — kick, clap, hats, un compás de dieciseisavos. El sello es el 1-2-3-tap, clap en el 4, a 120–140.',
    disclaimer: 'Grids de partida populares: no te quedes congelado en ellos. La bachata vive en el 1-2-3-tap y la güira, no en copiar esto 1:1.',
    faqs: [
      {
        q: '¿Cuál es un ritmo Bachata típico?',
        a: 'La bachata moderna suele ir a 120–140 BPM con el conteo 1-2-3 y clap o tap en el 4. Estas grids son un drum pattern de partida, no el único beat bachata.',
      },
      {
        q: '¿Cómo programo un patrón de batería Bachata?',
        a: 'Pon el DAW en 4/4 a unos 130 BPM, pasos de dieciseisavo. Kick en 1, 2 y 3, clap en el 4. La variante Syncopated desplaza algún hit. Cambia el tap para no quedarte en el ritmo inicial.',
      },
    ],
    patterns: [
      {
        name: '1-2-3-tap',
        summary: '1-2-3 y clap en el 4. El tap que pisa el último tiempo del compás.',
      },
      {
        name: 'Syncopated',
        summary: 'El mismo clap en el 4, kicks un poco síncopados. Más urbano, menos tradicional.',
      },
    ],
  },
  gospel: {
    title: 'Gospel BPM · patrón de batería de 16 pasos',
    lead: 'El BPM solo dice lo rápido. Luego va el beat: un patrón de batería Gospel típico que puedes programar en cualquier DAW — kick, clap, hats, un compás de dieciseisavos. El sello es el church clap en 2 y 4, a 60–100.',
    disclaimer: 'Grids de partida populares: no te quedes congelado en ellos. El gospel vive en el clap de iglesia y el shout, no en copiar esto 1:1.',
    faqs: [
      {
        q: '¿Cuál es un ritmo Gospel típico?',
        a: 'Mucho gospel se mueve a 60–100 BPM con clap en 2 y 4 — el church clap — y un pocket de kick debajo. Estas grids son un drum pattern de partida, no el único beat gospel.',
      },
      {
        q: '¿Cómo programo un patrón de batería Gospel?',
        a: 'Pon el DAW en 4/4 a unos 80 BPM, pasos de dieciseisavo. Clap firme en 2 y 4, kick de pocket, hats suaves. El Shout llena más hits. Cambia el clap para no quedarte en el ritmo inicial.',
      },
    ],
    patterns: [
      {
        name: 'Church clap',
        summary: 'Clap en 2 y 4, kick de pocket. El church clap que sostiene al coro.',
      },
      {
        name: 'Shout',
        summary: 'Más kicks y hats, el mismo clap en 2 y 4. El empuje de un shout, no un beat distinto.',
      },
    ],
  },
  country: {
    title: 'Country BPM · patrón de batería de 16 pasos',
    lead: 'El BPM solo dice lo rápido. Luego va el beat: un patrón de batería Country típico que puedes programar en cualquier DAW — kick, clap, hats, un compás de dieciseisavos. El sello es el train beat o el two-step, a 80–120.',
    disclaimer: 'Grids de partida populares: no te quedes congelado en ellos. El country vive en el train y el two-step, no en copiar esto 1:1.',
    faqs: [
      {
        q: '¿Cuál es un ritmo Country típico?',
        a: 'El country suele cubrir 80–120 BPM: train beat con hats en todos los dieciseisavos y sin hat abierto, o two-step con kick en 1 y 11. Estas grids son un drum pattern de partida, no el único beat country.',
      },
      {
        q: '¿Cómo programo un patrón de batería Country?',
        a: 'Pon el DAW en 4/4 a unos 100 BPM, pasos de dieciseisavo. Para el train, hats en los 16 pasos y nada de OH. Para el two-step, kick en 1 y 11, clap en 2 y 4. Cambia el tren para no quedarte en el ritmo inicial.',
      },
    ],
    patterns: [
      {
        name: 'Train beat',
        summary: 'Hats cerrados en los 16 dieciseisavos, sin hat abierto. El tren del country, clap en 2 y 4.',
      },
      {
        name: 'Two-step',
        summary: 'Kick en 1 y 11, clap en 2 y 4. El two-step para bailar, no un train lleno.',
      },
    ],
  },
};
