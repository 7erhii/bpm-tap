import type { GenrePatternCopyMap } from '../types';

export const pt: GenrePatternCopyMap = {
  house: {
    title: 'House BPM · padrão de bateria de 16 passos',
    lead: 'BPM só diz a velocidade. Depois vem o beat: um drum pattern de house típico para programar em qualquer DAW — kick, clap, hats, um compasso em semicolcheias.',
    disclaimer: 'Grids de partida populares — não congele nelas. House vive no skip e nos hats, não em copiar isto 1:1.',
    faqs: [
      {
        q: 'Qual é um ritmo house típico?',
        a: 'A maior parte do house apoia um kick four-on-the-floor a 120–130 BPM, claps no 2 e no 4, hats nos contratempos. Estas grids são um drum pattern inicial, não o único beat de house.',
      },
      {
        q: 'Como programo um drum pattern de house?',
        a: 'DAW em 4/4 por volta de 125 BPM, passos de semicolcheia. Kick em cada tempo, claps no 2 e no 4, depois hats fechados. Mude o skip e os hats para não ficar preso no ritmo inicial.',
      },
    ],
    patterns: [
      {
        name: 'Four-on-the-floor',
        summary: 'A espinha do house. Kick em cada tempo, clap no 2 e no 4, hats fechados nos contratempos, hat aberto rumo ao próximo downbeat.',
      },
      {
        name: 'Disco skip',
        summary: 'Os mesmos claps, mais um kick na semicolcheia antes do 2 e do 4. Esse jack aparece muito em disco / filtered house.',
      },
    ],
  },
  techno: {
    title: 'Techno BPM · padrão de bateria de 16 passos',
    lead: 'BPM só diz a velocidade. Depois vem o beat: um drum pattern de Techno típico para programar em qualquer DAW — kick, clap, hats, um compasso em semicolcheias. A marca é o four-on-the-floor hipnótico e os hats de contratempo.',
    disclaimer: 'Grids de partida populares — não congele nelas. Techno vive nos hats offbeat e no kick repetido, não em copiar isso 1:1.',
    faqs: [
      {
        q: 'Qual é um ritmo Techno típico?',
        a: 'A maior parte do techno apoia um kick four-on-the-floor a 125–140 BPM, claps no 2 e no 4, hats nas semicolcheias pares. Estas grids são um drum pattern inicial, não o único beat de Techno.',
      },
      {
        q: 'Como programo um drum pattern de Techno?',
        a: 'DAW em 4/4 por volta de 132 BPM, passos de semicolcheia. Kick em cada tempo, claps no 2 e no 4, hats fechados nos pares e hat aberto nos contratempos de colcheia. Mude os hats para não ficar preso no ritmo inicial.',
      },
    ],
    patterns: [
      {
        name: 'Four-on-the-floor',
        summary: 'A espinha do techno. Kick em cada tempo, clap no 2 e no 4, hats fechados mais secos que no house, sem skip.',
      },
      {
        name: 'Offbeat hats',
        summary: 'Hats fechados nas semicolcheias pares e hat aberto nos contratempos de colcheia. Esse tic-tic é o que hipnotiza.',
      },
    ],
  },
  trance: {
    title: 'Trance BPM · padrão de bateria de 16 passos',
    lead: 'BPM só diz a velocidade. Depois vem o beat: um drum pattern de Trance típico para programar em qualquer DAW — kick, clap, hats, um compasso em semicolcheias. A marca são os hats de colcheia offbeat e o snare roll rumo ao drop.',
    disclaimer: 'Grids de partida populares — não congele nelas. Trance vive no roll e nas frases longas, não em copiar isso 1:1.',
    faqs: [
      {
        q: 'Qual é um ritmo Trance típico?',
        a: 'A maior parte do trance apoia um kick four-on-the-floor a 130–145 BPM, claps no 2 e no 4, hats nos contratempos de colcheia. Estas grids são um drum pattern inicial, não o único beat de Trance.',
      },
      {
        q: 'Como programo um drum pattern de Trance?',
        a: 'DAW em 4/4 por volta de 138 BPM, passos de semicolcheia. Kick em cada tempo, claps no 2 e no 4, hats no offbeat de colcheia. Nas últimas quatro semicolcheias dá para meter um snare roll. Mude o roll para não ficar preso no ritmo inicial.',
      },
    ],
    patterns: [
      {
        name: 'Four-on-the-floor',
        summary: 'Kick em cada tempo, clap no 2 e no 4, hats fechados nos contratempos de colcheia. A base de um trance anthem.',
      },
      {
        name: 'Snare roll',
        summary: 'Os mesmos hats offbeat, mais um roll de snare ou clap nas últimas quatro semicolcheias do compasso, empurrando o drop.',
      },
    ],
  },
  'drum-and-bass': {
    title: 'Drum & Bass BPM · padrão de bateria de 16 passos',
    lead: 'BPM só diz a velocidade. Depois vem o beat: um drum pattern de Drum & Bass típico para programar em qualquer DAW — kick, clap, hats, um compasso em semicolcheias. A marca é o two-step a 160–180, muitas vezes sentido em half-time.',
    disclaimer: 'Grids de partida populares — não congele nelas. Drum & Bass vive no two-step e no amen, não em copiar isso 1:1.',
    faqs: [
      {
        q: 'Qual é um ritmo Drum & Bass típico?',
        a: 'A maior parte do drum & bass corre a 160–180 BPM com kick nos passos 1 e 11 e clap no 9. Estas grids são um drum pattern inicial, não o único beat de Drum & Bass.',
      },
      {
        q: 'Como programo um drum pattern de Drum & Bass?',
        a: 'DAW em 4/4 por volta de 174 BPM, passos de semicolcheia. Kick em 1 e 11, clap no passo 9, hats leves. Acrescente hits extras se quiser um Amen sketch. Mude o break para não ficar preso no ritmo inicial.',
      },
    ],
    patterns: [
      {
        name: 'Two-step',
        summary: 'Kick nos passos 1 e 11, clap no 9. O two-step clássico: snare no 3, kick extra no & do 3.',
      },
      {
        name: 'Amen sketch',
        summary: 'A mesma coluna two-step com hits extras de kick e clap. Um esboço de Amen, não o break completo.',
      },
    ],
  },
  dubstep: {
    title: 'Dubstep BPM · padrão de bateria de 16 passos',
    lead: 'BPM só diz a velocidade. Depois vem o beat: um drum pattern de Dubstep típico para programar em qualquer DAW — kick, clap, hats, um compasso em semicolcheias. A marca é o half-time: escrito a 135–145, sentido perto de 70.',
    disclaimer: 'Grids de partida populares — não congele nelas. Dubstep vive no half-time e no wobble, não em copiar isso 1:1.',
    faqs: [
      {
        q: 'Qual é um ritmo Dubstep típico?',
        a: 'A maior parte do dubstep se escreve a 135–145 BPM com kick no 1 e clap no 9, um half-time que se sente pela metade. Estas grids são um drum pattern inicial, não o único beat de Dubstep.',
      },
      {
        q: 'Como programo um drum pattern de Dubstep?',
        a: 'DAW em 4/4 por volta de 140 BPM, passos de semicolcheia. Kick no passo 1, clap no 9, hats marcando o pulso. Para o wobble, acrescente kicks em 7 e 11. Mude o drop para não ficar preso no ritmo inicial.',
      },
    ],
    patterns: [
      {
        name: 'Half-time',
        summary: 'Kick no passo 1, clap no 9. Um só golpe grave e um snare no meio do compasso: o drop half-time.',
      },
      {
        name: 'Wobble kick',
        summary: 'O mesmo clap no 9, mais kicks em 7 e 11 empurrando o wobble do baixo.',
      },
    ],
  },
  trap: {
    title: 'Trap BPM · padrão de bateria de 16 passos',
    lead: 'BPM só diz a velocidade. Depois vem o beat: um drum pattern de Trap típico para programar em qualquer DAW — kick, clap, hats, um compasso em semicolcheias. A marca é o bounce do 808 e o hat roll.',
    disclaimer: 'Grids de partida populares — não congele nelas. Trap vive no 808 e nos rolls, não em copiar isso 1:1.',
    faqs: [
      {
        q: 'Qual é um ritmo Trap típico?',
        a: 'A maior parte do trap atual se move a 130–160 BPM com kicks em 1, 8 e 11, clap no 2 e no 4, e hat rolls por cima. Estas grids são um drum pattern inicial, não o único beat de Trap.',
      },
      {
        q: 'Como programo um drum pattern de Trap?',
        a: 'DAW em 4/4 por volta de 140 BPM, passos de semicolcheia. Kick em 1, 8 e 11, clap no 2 e no 4, depois um hat roll. Na variante 808 encha mais kicks e hats em semicolcheia. Mude o bounce para não ficar preso no ritmo inicial.',
      },
    ],
    patterns: [
      {
        name: 'Bounce',
        summary: 'Kicks em 1, 8 e 11, clap no 2 e no 4, hat roll rumo ao fim do compasso. O bounce de rádio.',
      },
      {
        name: '808 roll',
        summary: 'Kicks mais ocupados e hats em quase todas as semicolcheias. O 808 marca o roll, não só o downbeat.',
      },
    ],
  },
  'hip-hop': {
    title: 'Hip Hop BPM · padrão de bateria de 16 passos',
    lead: 'BPM só diz a velocidade. Depois vem o beat: um drum pattern de Hip Hop típico para programar em qualquer DAW — kick, clap, hats, um compasso em semicolcheias. A marca é o pocket: boom bap a 80–100.',
    disclaimer: 'Grids de partida populares — não congele nelas. Hip Hop vive no pocket e no swing, não em copiar isso 1:1.',
    faqs: [
      {
        q: 'Qual é um ritmo Hip Hop típico?',
        a: 'A maior parte do boom bap apoia kick em 1 e 11, snare ou clap no 2 e no 4, a 80–100 BPM. Estas grids são um drum pattern inicial, não o único beat de Hip Hop.',
      },
      {
        q: 'Como programo um drum pattern de Hip Hop?',
        a: 'DAW em 4/4 por volta de 90 BPM, passos de semicolcheia. Kick em 1 e 11, clap no 2 e no 4, hats suaves. Mude o pocket e o bounce para não ficar preso no ritmo inicial.',
      },
    ],
    patterns: [
      {
        name: 'Boom bap',
        summary: 'Kick em 1 e 11, snare ou clap no 2 e no 4. O boom-bap clássico: grave no 1, golpe no backbeat.',
      },
      {
        name: 'Bounce',
        summary: 'A mesma caixa no 2 e no 4, kick mais deslocado rumo ao bounce. Menos head-nod, mais balanço.',
      },
    ],
  },
  pop: {
    title: 'Pop BPM · padrão de bateria de 16 passos',
    lead: 'BPM só diz a velocidade. Depois vem o beat: um drum pattern de Pop típico para programar em qualquer DAW — kick, clap, hats, um compasso em semicolcheias. A marca é o backbeat de rádio, às vezes four-on-the-floor.',
    disclaimer: 'Grids de partida populares — não congele nelas. Pop vive no refrão e no backbeat, não em copiar isso 1:1.',
    faqs: [
      {
        q: 'Qual é um ritmo Pop típico?',
        a: 'A maior parte do pop de rádio se move a 90–120 BPM com clap ou snare no 2 e no 4. Umas faixas vão de backbeat, outras de four-on-the-floor. Estas grids são um drum pattern inicial, não o único beat de Pop.',
      },
      {
        q: 'Como programo um drum pattern de Pop?',
        a: 'DAW em 4/4 por volta de 105 BPM, passos de semicolcheia. Comece com kick no 1 e no 3 e clap no 2 e no 4, ou ponha kick em cada tempo se quiser dance-pop. Mude hats e skip para não ficar preso no ritmo inicial.',
      },
    ],
    patterns: [
      {
        name: 'Backbeat',
        summary: 'Kick no 1 e no 3, clap no 2 e no 4, hats de colcheia. O esqueleto de um hit de rádio.',
      },
      {
        name: 'Four-on-the-floor',
        summary: 'Kick em cada tempo, clap no 2 e no 4. O pop que chega perto da pista.',
      },
    ],
  },
  rock: {
    title: 'Rock BPM · padrão de bateria de 16 passos',
    lead: 'BPM só diz a velocidade. Depois vem o beat: um drum pattern de Rock típico para programar em qualquer DAW — kick, clap, hats, um compasso em semicolcheias. A marca é o backbeat de caixa no 2 e no 4.',
    disclaimer: 'Grids de partida populares — não congele nelas. Rock vive na caixa e no riff, não em copiar isso 1:1.',
    faqs: [
      {
        q: 'Qual é um ritmo Rock típico?',
        a: 'A maior parte do rock apoia kick no 1 e no 3, snare ou clap no 2 e no 4, a 100–140 BPM. Estas grids são um drum pattern inicial, não o único beat de Rock.',
      },
      {
        q: 'Como programo um drum pattern de Rock?',
        a: 'DAW em 4/4 por volta de 120 BPM, passos de semicolcheia. Kick no 1 e no 3, clap no 2 e no 4, hats de colcheia. No Drive acrescente kicks extras. Mude o drive para não ficar preso no ritmo inicial.',
      },
    ],
    patterns: [
      {
        name: 'Backbeat',
        summary: 'Kick no 1 e no 3, clap no 2 e no 4. O backbeat de sempre, hats em colcheias.',
      },
      {
        name: 'Drive',
        summary: 'Os mesmos claps, mais kicks extras entre os tempos. O empurrão de um refrão de arena.',
      },
    ],
  },
  metal: {
    title: 'Metal BPM · padrão de bateria de 16 passos',
    lead: 'BPM só diz a velocidade. Depois vem o beat: um drum pattern de Metal típico para programar em qualquer DAW — kick, clap, hats, um compasso em semicolcheias. A marca é o double kick e o galope.',
    disclaimer: 'Grids de partida populares — não congele nelas. Metal vive no double kick e no gallop, não em copiar isso 1:1.',
    faqs: [
      {
        q: 'Qual é um ritmo Metal típico?',
        a: 'A maior parte do metal nesta faixa vai a 120–180 BPM com clap no 2 e no 4 e kicks duplos em colcheia ou galope em semicolcheias. Estas grids são um drum pattern inicial, não o único beat de Metal.',
      },
      {
        q: 'Como programo um drum pattern de Metal?',
        a: 'DAW em 4/4 por volta de 150 BPM, passos de semicolcheia. Clap no 2 e no 4, kicks duplos em colcheias; o gallop enche semicolcheias. Mude o galope para não ficar preso no ritmo inicial.',
      },
    ],
    patterns: [
      {
        name: 'Double kick',
        summary: 'Kicks duplos em colcheias, clap no 2 e no 4. O stomp de groove metal, não um blast beat.',
      },
      {
        name: 'Gallop',
        summary: 'Galope em semicolcheias sob o mesmo backbeat. O empurrão thrash numa barra de 16 passos.',
      },
    ],
  },
  'lo-fi': {
    title: 'Lo-fi BPM · padrão de bateria de 16 passos',
    lead: 'BPM só diz a velocidade. Depois vem o beat: um drum pattern de Lo-fi típico para programar em qualquer DAW — kick, clap, hats, um compasso em semicolcheias. A marca é o boom bap empoeirado e o skip preguiçoso a 70–90.',
    disclaimer: 'Grids de partida populares — não congele nelas. Lo-fi vive no dust e no swing frouxo, não em copiar isso 1:1.',
    faqs: [
      {
        q: 'Qual é um ritmo Lo-fi típico?',
        a: 'A maior parte do lo-fi hip-hop se move a 70–90 BPM com um boom bap rarefeito: poucos kicks, clap no 2 e no 4, hats soltos. Estas grids são um drum pattern inicial, não o único beat de Lo-fi.',
      },
      {
        q: 'Como programo um drum pattern de Lo-fi?',
        a: 'DAW em 4/4 por volta de 80 BPM, passos de semicolcheia. Deixe a grid rala: kick no 1 e talvez no 11, clap no 2 e no 4, hats preguiçosos. Mude o skip para não ficar preso no ritmo inicial.',
      },
    ],
    patterns: [
      {
        name: 'Dusty boom bap',
        summary: 'Boom bap rarefeito: poucos kicks, clap no 2 e no 4, hats suaves. O dust está no sample, não em encher a grid.',
      },
      {
        name: 'Lazy skip',
        summary: 'Um skip preguiçoso, um kick extra fora do lugar. Menos cabeça, mais balanço de study beat.',
      },
    ],
  },
  ambient: {
    title: 'Ambient BPM · padrão de bateria de 16 passos',
    lead: 'BPM só diz a velocidade. Depois vem o beat: um drum pattern de Ambient típico para programar em qualquer DAW — kick, clap, hats, um compasso em semicolcheias. A marca é um pulso lento, muitas vezes sem clap, a 60–90.',
    disclaimer: 'Grids de partida populares — não congele nelas. Ambient vive no espaço e no pulso, não em copiar isso 1:1.',
    faqs: [
      {
        q: 'Qual é um ritmo Ambient típico?',
        a: 'Quando tem beat, o ambient costuma respirar a 60–90 BPM com um kick de pulso e quase nenhum clap. Estas grids são um drum pattern inicial, não o único beat de Ambient.',
      },
      {
        q: 'Como programo um drum pattern de Ambient?',
        a: 'DAW em 4/4 por volta de 75 BPM, passos de semicolcheia. Um kick de pulso, hats bem abertos, sem clap. Mude o espaço entre os hits para não ficar preso no ritmo inicial.',
      },
    ],
    patterns: [
      {
        name: 'Pulse',
        summary: 'Um kick de pulso, hats suaves, sem clap. Só a malha mínima para o pad ter tempo.',
      },
      {
        name: 'Wide',
        summary: 'Ainda menos hits, mais ar entre eles. A grid larga deixa lugar para o drone.',
      },
    ],
  },
  reggaeton: {
    title: 'Reggaeton BPM · padrão de bateria de 16 passos',
    lead: 'BPM só diz a velocidade. Depois vem o beat: um drum pattern de Reggaeton típico para programar em qualquer DAW — kick, clap, hats, um compasso em semicolcheias. A marca é o dembow a 90–100.',
    disclaimer: 'Grids de partida populares — não congele nelas. Reggaeton vive no dembow, não em copiar isso 1:1.',
    faqs: [
      {
        q: 'Qual é um ritmo Reggaeton típico?',
        a: 'A maior parte do reggaeton apoia o dembow a 90–100 BPM: kick em 1, 7 e 11, clap no 2 e no 4. Estas grids são um drum pattern inicial, não o único beat de Reggaeton.',
      },
      {
        q: 'Como programo um drum pattern de Reggaeton?',
        a: 'DAW em 4/4 por volta de 95 BPM, passos de semicolcheia. Kick nos passos 1, 7 e 11, clap no 2 e no 4, hats leves. Mude o bounce do dembow para não ficar preso no ritmo inicial.',
      },
    ],
    patterns: [
      {
        name: 'Dembow',
        summary: 'Kick em 1, 7 e 11, clap no 2 e no 4. O dembow de sempre, um compasso em semicolcheias.',
      },
      {
        name: 'Bounce',
        summary: 'O mesmo clap no 2 e no 4, kick um pouco mais deslocado. Mais bounce de clube, menos dembow puro.',
      },
    ],
  },
  afrobeat: {
    title: 'Afrobeat BPM · padrão de bateria de 16 passos',
    lead: 'BPM só diz a velocidade. Depois vem o beat: um drum pattern de Afrobeat típico para programar em qualquer DAW — kick, clap, hats, um compasso em semicolcheias. A marca é o kick tipo clave e os hats highlife, a 100–130.',
    disclaimer: 'Grids de partida populares — não congele nelas. Afrobeat vive na clave e na percussão, não em copiar isso 1:1.',
    faqs: [
      {
        q: 'Qual é um ritmo Afrobeat típico?',
        a: 'O afrobeat de clube costuma ir a 100–130 BPM com um kick que desenha clave e hats de highlife. Estas grids são um drum pattern inicial, não o único beat de Afrobeat.',
      },
      {
        q: 'Como programo um drum pattern de Afrobeat?',
        a: 'DAW em 4/4 por volta de 115 BPM, passos de semicolcheia. Coloque o kick em clave, clap de apoio, hats ocupados estilo highlife. Mude a clave para não ficar preso no ritmo inicial.',
      },
    ],
    patterns: [
      {
        name: 'Clave kick',
        summary: 'O kick desenha uma clave, não um four-on-the-floor. Clap de apoio, hats já em movimento.',
      },
      {
        name: 'Highlife',
        summary: 'Hats mais ocupados, acentos de highlife. Guitarra e percussão fariam o resto fora desta grid.',
      },
    ],
  },
  'jersey-club': {
    title: 'Jersey Club BPM · padrão de bateria de 16 passos',
    lead: 'BPM só diz a velocidade. Depois vem o beat: um drum pattern de Jersey Club típico para programar em qualquer DAW — kick, clap, hats, um compasso em semicolcheias. A marca é o club kick a 130–140: passos 1, 4, 7, 10 e 13.',
    disclaimer: 'Grids de partida populares — não congele nelas. Jersey Club vive no stutter do kick, não em copiar isso 1:1.',
    faqs: [
      {
        q: 'Qual é um ritmo Jersey Club típico?',
        a: 'A maior parte do jersey club corre a 130–140 BPM com kicks em 1, 4, 7, 10 e 13 — aquele 3-3-2 de clube. Estas grids são um drum pattern inicial, não o único beat de Jersey Club.',
      },
      {
        q: 'Como programo um drum pattern de Jersey Club?',
        a: 'DAW em 4/4 por volta de 135 BPM, passos de semicolcheia. Kick em 1, 4, 7, 10 e 13, clap de apoio, hats picotados. Mude o stutter para não ficar preso no ritmo inicial.',
      },
    ],
    patterns: [
      {
        name: 'Club kick',
        summary: 'Kicks em 1, 4, 7, 10 e 13. O club kick que empurra o sample picotado.',
      },
      {
        name: 'Bounce',
        summary: 'A mesma família de kicks, um pouco mais de bounce entre eles. Menos bed-squeak, mais groove.',
      },
    ],
  },
  phonk: {
    title: 'Phonk BPM · padrão de bateria de 16 passos',
    lead: 'BPM só diz a velocidade. Depois vem o beat: um drum pattern de Phonk típico para programar em qualquer DAW — kick, clap, hats, um compasso em semicolcheias. A marca é o Memphis e o cowbell no hat aberto, a 130–160.',
    disclaimer: 'Grids de partida populares — não congele nelas. Phonk vive no cowbell e no drift, não em copiar isso 1:1.',
    faqs: [
      {
        q: 'Qual é um ritmo Phonk típico?',
        a: 'O drift phonk costuma ir a 130–160 BPM com kick reto, clap no 2 e no 4, e um hat aberto tipo cowbell em 4 e 12. Estas grids são um drum pattern inicial, não o único beat de Phonk.',
      },
      {
        q: 'Como programo um drum pattern de Phonk?',
        a: 'DAW em 4/4 por volta de 140 BPM, passos de semicolcheia. Kick estável, clap no 2 e no 4, hat aberto nos passos 4 e 12 como cowbell. Mude o drift para não ficar preso no ritmo inicial.',
      },
    ],
    patterns: [
      {
        name: 'Memphis',
        summary: 'Hat aberto tipo cowbell em 4 e 12, clap no 2 e no 4. A cor Memphis numa grid de 16 passos.',
      },
      {
        name: 'Drift',
        summary: 'Mais kick de corrida, menos cowbell. O drift phonk empurra reto e deixa o 808 deslizar.',
      },
    ],
  },
  hardstyle: {
    title: 'Hardstyle BPM · padrão de bateria de 16 passos',
    lead: 'BPM só diz a velocidade. Depois vem o beat: um drum pattern de Hardstyle típico para programar em qualquer DAW — kick, clap, hats, um compasso em semicolcheias. A marca é o reverse-bass a 150–160, com kick four-on-the-floor.',
    disclaimer: 'Grids de partida populares — não congele nelas. Hardstyle vive no reverse-bass e no drive dos hats, não em copiar isso 1:1.',
    faqs: [
      {
        q: 'Qual é um ritmo Hardstyle típico?',
        a: 'A maior parte do hardstyle apoia um kick four-on-the-floor a 150–160 BPM; o reverse-bass está no som do kick, não em outra grid. Estas grids são um drum pattern inicial, não o único beat de Hardstyle.',
      },
      {
        q: 'Como programo um drum pattern de Hardstyle?',
        a: 'DAW em 4/4 por volta de 150 BPM, passos de semicolcheia. Kick em cada tempo, clap no 2 e no 4, hats com drive. O reverse-bass vai no sample do kick. Mude os hats para não ficar preso no ritmo inicial.',
      },
    ],
    patterns: [
      {
        name: 'Reverse-bass kick',
        summary: 'Kick four-on-the-floor, clap no 2 e no 4. O reverse-bass é o timbre do kick, não um passo extra na grid.',
      },
      {
        name: 'Hat drive',
        summary: 'Os mesmos kicks, hats mais ocupados empurrando o festival. O drive está no hi-hat, não em outro kick.',
      },
    ],
  },
  jazz: {
    title: 'Jazz BPM · padrão de bateria de 16 passos',
    lead: 'BPM só diz a velocidade. Depois vem o beat: um drum pattern de Jazz típico para programar em qualquer DAW — kick, clap, hats, um compasso em semicolcheias. A marca é o ride; aqui os hats fazem de ride, e não é swing de verdade.',
    disclaimer: 'Grids de partida populares — não congele nelas. Jazz vive no ride e no swing, não em copiar isso 1:1.',
    faqs: [
      {
        q: 'Qual é um ritmo Jazz típico?',
        a: 'O jazz útil num DAW cobre uns 80–160 BPM. Estas grids são retas: os hats substituem o ride e não marcam swing real. São um drum pattern inicial, não o único beat de Jazz.',
      },
      {
        q: 'Como programo um drum pattern de Jazz?',
        a: 'DAW em 4/4 por volta de 120 BPM, passos de semicolcheia. Hats como ride, kick leve, clap suave. Lembre: não é swing real. Mude o ride para não ficar preso no ritmo inicial.',
      },
    ],
    patterns: [
      {
        name: 'Ride time',
        summary: 'Os hats fazem de ride. Grid reta, não é swing real: serve para colocar o tempo, não para imitar um baterista de jazz.',
      },
      {
        name: 'Ballad',
        summary: 'Menos hits, mais ar. Uma ballad de partida nos hats; o swing, se houver, você coloca fora da grid.',
      },
    ],
  },
  salsa: {
    title: 'Salsa BPM · padrão de bateria de 16 passos',
    lead: 'BPM só diz a velocidade. Depois vem o beat: um drum pattern de Salsa típico para programar em qualquer DAW — kick, clap, hats, um compasso em semicolcheias. A marca é o tumbao, escrito a 180–220.',
    disclaimer: 'Grids de partida populares — não congele nelas. Salsa vive na clave e na percussão, não em copiar isso 1:1.',
    faqs: [
      {
        q: 'Qual é um ritmo Salsa típico?',
        a: 'Na grade a salsa se conta a 180–220 BPM. Estas grids são um tumbao ou mambo de partida, não a percussão completa de uma salsa.',
      },
      {
        q: 'Como programo um drum pattern de Salsa?',
        a: 'DAW em 4/4 por volta de 200 BPM, passos de semicolcheia. Esboce o tumbao com kick e clap; não tente meter congas, campana e clave em quatro lanes. Mude o tumbao para não ficar preso no ritmo inicial.',
      },
    ],
    patterns: [
      {
        name: 'Tumbao',
        summary: 'Uma grid de partida para o tumbao. Não é a percussão completa: sem congas nem campana de verdade.',
      },
      {
        name: 'Mambo',
        summary: 'Esqueleto mambo para o DAW. Starter grid, não uma seção de metais nem timbales 1:1.',
      },
    ],
  },
  bachata: {
    title: 'Bachata BPM · padrão de bateria de 16 passos',
    lead: 'BPM só diz a velocidade. Depois vem o beat: um drum pattern de Bachata típico para programar em qualquer DAW — kick, clap, hats, um compasso em semicolcheias. A marca é o 1-2-3-tap, clap no 4, a 120–140.',
    disclaimer: 'Grids de partida populares — não congele nelas. Bachata vive no 1-2-3-tap e na güira, não em copiar isso 1:1.',
    faqs: [
      {
        q: 'Qual é um ritmo Bachata típico?',
        a: 'A bachata moderna costuma ir a 120–140 BPM com a contagem 1-2-3 e clap ou tap no 4. Estas grids são um drum pattern inicial, não o único beat de Bachata.',
      },
      {
        q: 'Como programo um drum pattern de Bachata?',
        a: 'DAW em 4/4 por volta de 130 BPM, passos de semicolcheia. Kick no 1, 2 e 3, clap no 4. A variante Syncopated desloca algum hit. Mude o 1-2-3-tap para não ficar preso no ritmo inicial.',
      },
    ],
    patterns: [
      {
        name: '1-2-3-tap',
        summary: '1-2-3 e clap no 4. O tap que pisa o último tempo do compasso.',
      },
      {
        name: 'Syncopated',
        summary: 'O mesmo clap no 4, kicks um pouco sincopados. Mais urbano, menos tradicional.',
      },
    ],
  },
  gospel: {
    title: 'Gospel BPM · padrão de bateria de 16 passos',
    lead: 'BPM só diz a velocidade. Depois vem o beat: um drum pattern de Gospel típico para programar em qualquer DAW — kick, clap, hats, um compasso em semicolcheias. A marca é o church clap no 2 e no 4, a 60–100.',
    disclaimer: 'Grids de partida populares — não congele nelas. Gospel vive no clap de igreja e no shout, não em copiar isso 1:1.',
    faqs: [
      {
        q: 'Qual é um ritmo Gospel típico?',
        a: 'Boa parte do gospel se move a 60–100 BPM com clap no 2 e no 4 — o church clap — e um pocket de kick embaixo. Estas grids são um drum pattern inicial, não o único beat de Gospel.',
      },
      {
        q: 'Como programo um drum pattern de Gospel?',
        a: 'DAW em 4/4 por volta de 80 BPM, passos de semicolcheia. Clap firme no 2 e no 4, kick de pocket, hats suaves. O Shout enche mais hits. Mude o clap para não ficar preso no ritmo inicial.',
      },
    ],
    patterns: [
      {
        name: 'Church clap',
        summary: 'Clap no 2 e no 4, kick de pocket. O church clap que segura o coral.',
      },
      {
        name: 'Shout',
        summary: 'Mais kicks e hats, o mesmo clap no 2 e no 4. O empurrão de um shout, não um beat diferente.',
      },
    ],
  },
  country: {
    title: 'Country BPM · padrão de bateria de 16 passos',
    lead: 'BPM só diz a velocidade. Depois vem o beat: um drum pattern de Country típico para programar em qualquer DAW — kick, clap, hats, um compasso em semicolcheias. A marca é o train beat ou o two-step, a 80–120.',
    disclaimer: 'Grids de partida populares — não congele nelas. Country vive no train e no two-step, não em copiar isso 1:1.',
    faqs: [
      {
        q: 'Qual é um ritmo Country típico?',
        a: 'O country costuma cobrir 80–120 BPM: train beat com hats em todas as semicolcheias e sem hat aberto, ou two-step com kick em 1 e 11. Estas grids são um drum pattern inicial, não o único beat de Country.',
      },
      {
        q: 'Como programo um drum pattern de Country?',
        a: 'DAW em 4/4 por volta de 100 BPM, passos de semicolcheia. No train, hats nos 16 passos e nada de OH. No two-step, kick em 1 e 11, clap no 2 e no 4. Mude o trem para não ficar preso no ritmo inicial.',
      },
    ],
    patterns: [
      {
        name: 'Train beat',
        summary: 'Hats fechados nas 16 semicolcheias, sem hat aberto. O trem do country, clap no 2 e no 4.',
      },
      {
        name: 'Two-step',
        summary: 'Kick em 1 e 11, clap no 2 e no 4. O two-step para dançar, não um train cheio.',
      },
    ],
  },
};
