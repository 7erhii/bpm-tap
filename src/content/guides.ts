export interface GuideSection {
  h2: string;
  paragraphs: string[];
}

export interface GuideFaq {
  q: string;
  a: string;
}

export interface GuideLocale {
  title: string;
  description: string;
  h1: string;
  lead: string;
  sections: GuideSection[];
  faqs: GuideFaq[];
}

export interface Guide {
  slug: string;
  order: number;
  ctaBpm: number;
  en: GuideLocale;
  ru: GuideLocale;
  es: GuideLocale;
  fr: GuideLocale;
  pt: GuideLocale;
}

export const guides: Guide[] = [
  {
    slug: 'how-to-find-bpm',
    order: 1,
    ctaBpm: 120,
    en: {
      title: 'How to Find a Song’s BPM with Tap Tempo',
      description: 'Find any song’s BPM in seconds: tap along with the beat, stabilize the reading, then copy it into your DAW or metronome.',
      h1: 'How to find a song’s BPM',
      lead: 'You do not need a file upload. Play the track, tap the beat, and let a tap tempo tool average your timing into beats per minute.',
      sections: [
        {
          h2: 'Tap the pulse you would count',
          paragraphs: [
            'Start the song and find the steady pulse — usually the kick, or the snare backbeat in syncopated grooves.',
            'Open the Tap BPM tool and tap mouse, touch, or any key on each beat. After 8–12 steady taps the reading should settle. Prefer hands-free? Switch to Listen and let the mic estimate tempo.',
          ],
        },
        {
          h2: 'Confirm before you commit',
          paragraphs: [
            'When confidence looks Stable, Copy the BPM or open the metronome with the same tempo to hear if it locks.',
            'If the click feels twice as fast or half as slow, use ×2 / ÷2 — common with trap, dubstep, DnB, and salsa feels.',
          ],
        },
        {
          h2: 'Use the number in your session',
          paragraphs: [
            'Paste the BPM into your DAW, set delay times on the delay calculator, or share a link with ?bpm= for a collaborator.',
            'Genre pages help when you only know the style: start from a typical range, then tap the actual track to refine.',
          ],
        },
      ],
      faqs: [
        {
          q: 'How many taps do I need?',
          a: 'Four taps give a rough guess. Eight to twelve steady taps are usually enough for DAW setup and DJ prep.',
        },
        {
          q: 'Can tap tempo replace audio analysis?',
          a: 'For a single playing track, tapping is often faster. File analyzers help for batches; tap tempo wins when you only hear the song.',
        },
        {
          q: 'Why does my BPM look half or double?',
          a: 'You may be tapping a half-time or double-time feel. Use ÷2 / ×2 after the reading stabilizes.',
        },
      ],
    },
    ru: {
      title: 'Как узнать BPM песни через tap tempo',
      description: 'Узнай BPM любого трека за секунды: тапай в ритм, дождись стабильного значения и скопируй его в DAW или метроном.',
      h1: 'Как узнать BPM песни',
      lead: 'Файл загружать не нужно. Включи трек, тапай долю — tap tempo усреднит интервалы и покажет удары в минуту.',
      sections: [
        {
          h2: 'Тапай тот пульс, который считаешь',
          paragraphs: [
            'Найди устойчивую долю — чаще кик, а в синкопах удобнее snare на бэкбит.',
            'Открой Tap BPM и тапай мышью, пальцем или любой клавишей. После 8–12 ровных ударов значение обычно стабилизируется. Руки заняты? Переключись на Listen — микрофон оценит темп.',
          ],
        },
        {
          h2: 'Проверь, прежде чем вшивать в проект',
          paragraphs: [
            'Когда confidence = Stable, копируй BPM или запусти метроном на том же темпе.',
            'Если клик вдвое быстрее или медленнее — жми ×2 / ÷2: так бывает в trap, dubstep, DnB и salsa.',
          ],
        },
        {
          h2: 'Куда деть цифру дальше',
          paragraphs: [
            'Вставь BPM в DAW, посчитай delay на калькуляторе или отправь ссылку с ?bpm= коллеге.',
            'Страницы жанров помогают, если знаешь стиль, но не темп: начни с диапазона, потом уточни тапом.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Сколько тапов нужно?',
          a: 'Четыре — грубая оценка. Восемь–двенадцать ровных ударов обычно хватает для DAW и диджеинга.',
        },
        {
          q: 'Tap tempo заменяет анализ файла?',
          a: 'Для одного звучащего трека тап часто быстрее. Анализаторы удобны для пачек файлов; когда трек только слышишь — тапай.',
        },
        {
          q: 'Почему BPM вдвое меньше или больше?',
          a: 'Возможно, ты в half-time или double-time. После стабилизации жми ÷2 / ×2.',
        },
      ],
    },
    es: {
      title: 'Cómo encontrar el BPM de una canción con tap tempo',
      description: 'Encuentra el BPM de cualquier canción en segundos: toca al ritmo, estabiliza la lectura y cópialo en tu DAW o metrónomo.',
      h1: 'Cómo encontrar el BPM de una canción',
      lead: 'No necesitas subir un archivo. Reproduce la pista, toca el beat y deja que el tap tempo promedie tu timing en pulsos por minuto.',
      sections: [
        {
          h2: 'Toca el pulso que contarías',
          paragraphs: [
            'Inicia la canción y encuentra el pulso estable — normalmente el kick, o el backbeat del snare en grooves sincopados.',
            'Abre la herramienta Tap BPM y toca con el ratón, el dedo o cualquier tecla en cada beat. Tras 8–12 toques estables la lectura debería asentarse. ¿Prefieres manos libres? Cambia a Listen y deja que el micrófono estime el tempo.',
          ],
        },
        {
          h2: 'Confirma antes de comprometerte',
          paragraphs: [
            'Cuando la confianza muestre Stable, copia el BPM o abre el metrónomo con el mismo tempo para oír si encaja.',
            'Si el click se siente el doble de rápido o la mitad de lento, usa ×2 / ÷2 — común en trap, dubstep, DnB y sensaciones de salsa.',
          ],
        },
        {
          h2: 'Usa el número en tu sesión',
          paragraphs: [
            'Pega el BPM en tu DAW, configura tiempos de delay en la calculadora o comparte un enlace con ?bpm= para un colaborador.',
            'Las páginas de género ayudan cuando solo conoces el estilo: empieza por un rango típico y luego toca la pista real para afinar.',
          ],
        },
      ],
      faqs: [
        {
          q: '¿Cuántos taps necesito?',
          a: 'Cuatro taps dan una estimación aproximada. Ocho a doce toques estables suelen bastar para configurar el DAW y preparar un set de DJ.',
        },
        {
          q: '¿El tap tempo puede reemplazar el análisis de audio?',
          a: 'Para una sola pista en reproducción, tocar suele ser más rápido. Los analizadores de archivos ayudan con lotes; el tap tempo gana cuando solo escuchas la canción.',
        },
        {
          q: '¿Por qué mi BPM parece la mitad o el doble?',
          a: 'Puede que estés tocando una sensación half-time o double-time. Usa ÷2 / ×2 después de que la lectura se estabilice.',
        },
      ],
    },
    fr: {
      title: 'Comment trouver le BPM d’une chanson avec le tap tempo',
      description: 'Trouvez le BPM de n’importe quelle chanson en quelques secondes : tapez sur le beat, stabilisez la lecture, puis copiez-la dans votre DAW ou métronome.',
      h1: 'Comment trouver le BPM d’une chanson',
      lead: 'Pas besoin d’envoyer de fichier. Lancez le morceau, tapez le beat, et laissez l’outil tap tempo moyenner votre timing en battements par minute.',
      sections: [
        {
          h2: 'Tapez le pulse que vous compteriez',
          paragraphs: [
            'Lancez la chanson et trouvez le pulse régulier — en général le kick, ou le backbeat de la caisse claire dans les grooves syncopés.',
            'Ouvrez l’outil Tap BPM et tapez souris, toucher ou n’importe quelle touche à chaque temps. Après 8–12 taps réguliers la lecture devrait se stabiliser. Mains occupées ? Passez en Listen et laissez le micro estimer le tempo.',
          ],
        },
        {
          h2: 'Confirmez avant de valider',
          paragraphs: [
            'Quand la confiance affiche Stable, copiez le BPM ou ouvrez le métronome au même tempo pour vérifier l’alignement.',
            'Si le clic semble deux fois plus rapide ou deux fois plus lent, utilisez ×2 / ÷2 — fréquent avec trap, dubstep, DnB et les feels salsa.',
          ],
        },
        {
          h2: 'Utilisez le chiffre dans votre session',
          paragraphs: [
            'Collez le BPM dans votre DAW, réglez les temps de delay sur le calculateur, ou partagez un lien avec ?bpm= pour un collaborateur.',
            'Les pages genre aident quand vous ne connaissez que le style : partez d’une plage typique, puis tapez le morceau réel pour affiner.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Combien de taps faut-il ?',
          a: 'Quatre taps donnent une estimation grossière. Huit à douze taps réguliers suffisent généralement pour le DAW et la préparation DJ.',
        },
        {
          q: 'Le tap tempo remplace-t-il l’analyse audio ?',
          a: 'Pour un seul morceau en lecture, taper est souvent plus rapide. Les analyseurs de fichiers aident pour des lots ; le tap tempo gagne quand vous n’entendez que la chanson.',
        },
        {
          q: 'Pourquoi mon BPM semble-t-il divisé ou doublé ?',
          a: 'Vous tapez peut-être un feel half-time ou double-time. Utilisez ÷2 / ×2 une fois la lecture stabilisée.',
        },
      ],
    },
    pt: {
      title: 'Como descobrir o BPM de uma música com tap tempo',
      description: 'Descubra o BPM de qualquer música em segundos: toque no ritmo, estabilize a leitura e copie para o seu DAW ou metrônomo.',
      h1: 'Como descobrir o BPM de uma música',
      lead: 'Você não precisa enviar arquivo. Reproduza a faixa, toque o beat e deixe o tap tempo calcular a média do seu timing em batidas por minuto.',
      sections: [
        {
          h2: 'Toque o pulso que você contaria',
          paragraphs: [
            'Inicie a música e encontre o pulso constante — geralmente o kick, ou o backbeat da caixa em grooves sincopados.',
            'Abra a ferramenta Tap BPM e toque com o mouse, o dedo ou qualquer tecla a cada beat. Após 8–12 toques estáveis a leitura deve se estabilizar. Prefere mãos livres? Mude para Listen e deixe o microfone estimar o tempo.',
          ],
        },
        {
          h2: 'Confirme antes de usar no projeto',
          paragraphs: [
            'Quando a confiança mostrar Stable, copie o BPM ou abra o metrônomo no mesmo tempo para ouvir se encaixa.',
            'Se o clique parecer o dobro de rápido ou metade de lento, use ×2 / ÷2 — comum em trap, dubstep, DnB e sensações de salsa.',
          ],
        },
        {
          h2: 'Use o número na sua sessão',
          paragraphs: [
            'Cole o BPM no seu DAW, configure tempos de delay na calculadora ou compartilhe um link com ?bpm= para um colaborador.',
            'As páginas de gênero ajudam quando você só conhece o estilo: comece por uma faixa típica e depois toque a faixa real para refinar.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Quantos toques preciso?',
          a: 'Quatro toques dão uma estimativa aproximada. Oito a doze toques estáveis costumam bastar para configurar o DAW e preparar sets de DJ.',
        },
        {
          q: 'O tap tempo substitui análise de áudio?',
          a: 'Para uma única faixa em reprodução, tocar costuma ser mais rápido. Analisadores de arquivo ajudam em lotes; o tap tempo ganha quando você só ouve a música.',
        },
        {
          q: 'Por que meu BPM parece metade ou o dobro?',
          a: 'Você pode estar tocando uma sensação half-time ou double-time. Use ÷2 / ×2 depois que a leitura estabilizar.',
        },
      ],
    },
  },
  {
    slug: 'tap-tempo-accuracy',
    order: 2,
    ctaBpm: 128,
    en: {
      title: 'Tap Tempo Accuracy — How to Get a Stable BPM',
      description: 'How accurate is tap tempo? Practical tips to reduce timing wobble and land within about ±1–2 BPM of the true tempo.',
      h1: 'How accurate is tap tempo?',
      lead: 'Tap tempo measures your taps, not the audio file. Steady technique usually lands close enough for production and practice.',
      sections: [
        {
          h2: 'What “good enough” means',
          paragraphs: [
            'With 8–12 steady taps, most people land within about ±1–2 BPM of the true tempo — enough for DAW grids, delay sync, and rehearsal.',
            'Human timing always jitters a few milliseconds; averaging cancels small errors if you keep the same pulse.',
          ],
        },
        {
          h2: 'Technique that stabilizes the reading',
          paragraphs: [
            'Tap one consistent layer (kick or snare). Ignore fills, rolls, and vocal rhythm.',
            'Keep going until the UI says Stable. If you stumble, Reset and start a fresh run instead of “fighting” a bad average.',
          ],
        },
        {
          h2: 'Cross-check like a studio',
          paragraphs: [
            'Start the metronome on the measured BPM. If the click drifts against the track, nudge with ÷2/×2 or retap.',
            'For swing or live bands, expect more variance — take more taps or accept a nearest whole BPM and nudge by ear.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Is tap tempo exact?',
          a: 'It is an estimate from your timing. Clean electronic grids are easiest; swing and live drums need more taps.',
        },
        {
          q: 'Should I use the keyboard or the pad?',
          a: 'Whichever you can hit most evenly. Many people are steadier on Space than on a small touch target.',
        },
        {
          q: 'Why does the number keep moving?',
          a: 'Early taps have high variance. Keep a steady pulse — the rolling average settles as confidence rises.',
        },
      ],
    },
    ru: {
      title: 'Точность tap tempo — как получить стабильный BPM',
      description: 'Насколько точен tap tempo? Практические советы, чтобы попасть примерно в ±1–2 BPM от реального темпа.',
      h1: 'Насколько точен tap tempo?',
      lead: 'Tap tempo измеряет твои тапы, а не файл. Ровная техника обычно даёт точность, достаточную для продакшена и практики.',
      sections: [
        {
          h2: 'Что значит «достаточно точно»',
          paragraphs: [
            'При 8–12 ровных ударах большинство попадает примерно в ±1–2 BPM — хватает для сетки DAW, delay и репетиций.',
            'Рука всегда дрожит на миллисекунды; усреднение съедает мелкие ошибки, если пульс один и тот же.',
          ],
        },
        {
          h2: 'Техника, которая стабилизирует',
          paragraphs: [
            'Тапай один слой (кик или snare). Игнор филы, дроби и вокальный ритм.',
            'Жди Stable. Ошибся — Reset и новая серия, а не «лечение» плохого среднего.',
          ],
        },
        {
          h2: 'Проверка по-студийному',
          paragraphs: [
            'Запусти метроном на измеренном BPM. Плывёт относительно трека — ÷2/×2 или перетапай.',
            'Для swing и live-барабанов разброс больше — сделай больше тапов или возьми ближайшее целое и подправь на слух.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Tap tempo — это точно?',
          a: 'Это оценка по твоим тапам. Электронная сетка проще; swing и live требуют больше ударов.',
        },
        {
          q: 'Клавиатура или кнопка на экране?',
          a: 'Где ровнее попадаешь. Часто Space стабильнее маленькой touch-зоны.',
        },
        {
          q: 'Почему цифра прыгает?',
          a: 'Первые тапы с большим разбросом. Держи пульс — скользящее среднее успокоится вместе с confidence.',
        },
      ],
    },
    es: {
      title: 'Precisión del tap tempo — cómo obtener un BPM estable',
      description: '¿Qué tan preciso es el tap tempo? Consejos prácticos para reducir la inestabilidad y caer dentro de unos ±1–2 BPM del tempo real.',
      h1: '¿Qué tan preciso es el tap tempo?',
      lead: 'El tap tempo mide tus toques, no el archivo de audio. Una técnica constante suele acercarse lo suficiente para producción y práctica.',
      sections: [
        {
          h2: 'Qué significa «suficientemente bueno»',
          paragraphs: [
            'Con 8–12 toques estables, la mayoría cae dentro de unos ±1–2 BPM del tempo real — suficiente para cuadrículas del DAW, sync de delay y ensayo.',
            'El timing humano siempre fluctúa unos milisegundos; el promedio cancela errores pequeños si mantienes el mismo pulso.',
          ],
        },
        {
          h2: 'Técnica que estabiliza la lectura',
          paragraphs: [
            'Toca una capa consistente (kick o snare). Ignora fills, rolls y el ritmo vocal.',
            'Sigue hasta que la interfaz diga Stable. Si tropiezas, Reset y empieza de nuevo en lugar de «luchar» contra un mal promedio.',
          ],
        },
        {
          h2: 'Verifica como en estudio',
          paragraphs: [
            'Inicia el metrónomo con el BPM medido. Si el click se desvía del tema, ajusta con ÷2/×2 o vuelve a tocar.',
            'Con swing o bandas en vivo, espera más variación — haz más taps o acepta el BPM entero más cercano y afina a oído.',
          ],
        },
      ],
      faqs: [
        {
          q: '¿El tap tempo es exacto?',
          a: 'Es una estimación de tu timing. Las cuadrículas electrónicas limpias son las más fáciles; swing y batería en vivo necesitan más toques.',
        },
        {
          q: '¿Debo usar el teclado o el pad?',
          a: 'El que puedas golpear con más regularidad. Mucha gente es más estable con Space que con un objetivo táctil pequeño.',
        },
        {
          q: '¿Por qué el número sigue moviéndose?',
          a: 'Los primeros taps tienen alta varianza. Mantén un pulso estable — el promedio móvil se asienta a medida que sube la confianza.',
        },
      ],
    },
    fr: {
      title: 'Précision du tap tempo — comment obtenir un BPM stable',
      description: 'Quelle est la précision du tap tempo ? Conseils pratiques pour réduire les fluctuations et viser environ ±1–2 BPM du vrai tempo.',
      h1: 'Quelle est la précision du tap tempo ?',
      lead: 'Le tap tempo mesure vos taps, pas le fichier audio. Une technique régulière suffit généralement pour la production et la pratique.',
      sections: [
        {
          h2: 'Ce que signifie « assez bon »',
          paragraphs: [
            'Avec 8–12 taps réguliers, la plupart des gens tombent à environ ±1–2 BPM du vrai tempo — suffisant pour les grilles DAW, le sync delay et les répétitions.',
            'Le timing humain tremble toujours de quelques millisecondes ; la moyenne annule les petites erreurs si vous gardez le même pulse.',
          ],
        },
        {
          h2: 'Technique qui stabilise la lecture',
          paragraphs: [
            'Tapez une couche cohérente (kick ou snare). Ignorez fills, roulements et rythme vocal.',
            'Continuez jusqu’à ce que l’interface affiche Stable. Si vous trébuchez, Reset et recommencez plutôt que de « combattre » une mauvaise moyenne.',
          ],
        },
        {
          h2: 'Vérifiez comme en studio',
          paragraphs: [
            'Lancez le métronome sur le BPM mesuré. Si le clic dérive par rapport au morceau, ajustez avec ÷2/×2 ou retapez.',
            'Pour le swing ou les groupes live, attendez plus de variance — faites plus de taps ou acceptez le BPM entier le plus proche et affinez à l’oreille.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Le tap tempo est-il exact ?',
          a: 'C’est une estimation de votre timing. Les grilles électroniques propres sont les plus faciles ; swing et batterie live demandent plus de taps.',
        },
        {
          q: 'Clavier ou pad ?',
          a: 'Celui sur lequel vous frappez le plus régulièrement. Beaucoup sont plus stables sur Espace qu’une petite zone tactile.',
        },
        {
          q: 'Pourquoi le chiffre bouge-t-il encore ?',
          a: 'Les premiers taps ont une forte variance. Gardez un pulse régulier — la moyenne glissante se stabilise avec la confiance.',
        },
      ],
    },
    pt: {
      title: 'Precisão do tap tempo — como obter um BPM estável',
      description: 'Qual a precisão do tap tempo? Dicas práticas para reduzir a instabilidade e ficar em torno de ±1–2 BPM do tempo real.',
      h1: 'Qual a precisão do tap tempo?',
      lead: 'O tap tempo mede seus toques, não o arquivo de áudio. Técnica constante costuma ser precisa o suficiente para produção e prática.',
      sections: [
        {
          h2: 'O que significa «bom o suficiente»',
          paragraphs: [
            'Com 8–12 toques estáveis, a maioria fica em torno de ±1–2 BPM do tempo real — suficiente para grades do DAW, sync de delay e ensaio.',
            'O timing humano sempre oscila alguns milissegundos; a média cancela erros pequenos se você mantiver o mesmo pulso.',
          ],
        },
        {
          h2: 'Técnica que estabiliza a leitura',
          paragraphs: [
            'Toque uma camada consistente (kick ou snare). Ignore fills, rolls e ritmo vocal.',
            'Continue até a interface mostrar Stable. Se tropeçar, Reset e comece de novo em vez de «lutar» contra uma média ruim.',
          ],
        },
        {
          h2: 'Confira como em estúdio',
          paragraphs: [
            'Inicie o metrônomo no BPM medido. Se o clique desviar da faixa, ajuste com ÷2/×2 ou toque de novo.',
            'Com swing ou bandas ao vivo, espere mais variação — faça mais toques ou aceite o BPM inteiro mais próximo e ajuste de ouvido.',
          ],
        },
      ],
      faqs: [
        {
          q: 'O tap tempo é exato?',
          a: 'É uma estimativa do seu timing. Grades eletrônicas limpas são as mais fáceis; swing e bateria ao vivo precisam de mais toques.',
        },
        {
          q: 'Devo usar o teclado ou o pad?',
          a: 'O que você conseguir bater com mais regularidade. Muita gente é mais estável no Space do que em um alvo touch pequeno.',
        },
        {
          q: 'Por que o número continua se movendo?',
          a: 'Os primeiros toques têm alta variância. Mantenha um pulso estável — a média móvel se estabiliza conforme a confiança sobe.',
        },
      ],
    },
  },
  {
    slug: 'bpm-to-milliseconds',
    order: 3,
    ctaBpm: 120,
    en: {
      title: 'BPM to Milliseconds — Delay & Note Length Calculator',
      description: 'Convert BPM to milliseconds for delay and note lengths. Quarter notes, dotted values, triplets — with tap tempo built in.',
      h1: 'BPM to milliseconds',
      lead: 'One beat in ms is 60,000 ÷ BPM. From that quarter-note length you can derive every common delay subdivision.',
      sections: [
        {
          h2: 'The core formula',
          paragraphs: [
            'Milliseconds per quarter note = 60,000 ÷ BPM. At 120 BPM that is 500 ms; at 100 BPM it is 600 ms.',
            'Halve for eighths, halve again for sixteenths. Multiply by 1.5 for dotted values; triplets divide the beat into three.',
          ],
        },
        {
          h2: 'Studio uses',
          paragraphs: [
            'Sync delay throws, slapback, and sidechain-adjacent timing to the song grid without guessing.',
            'Tap the track on the delay page, then copy the cell you need — 1/8, 1/8 dotted, or 1/4 triplet are common picks.',
          ],
        },
        {
          h2: 'Pair with metronome and tap',
          paragraphs: [
            'Measure BPM on the home tool, confirm with the metronome, then jump to delay with the same ?bpm= value.',
            'When the feel is half-time, convert after ÷2/×2 so the ms table matches the grid you actually want.',
          ],
        },
      ],
      faqs: [
        {
          q: 'What is the delay time for a 1/8 note at 128 BPM?',
          a: 'Quarter note ≈ 468.75 ms, so a straight 1/8 ≈ 234.4 ms. Use the delay table to copy exact values.',
        },
        {
          q: 'Dotted vs triplet — which should I use?',
          a: 'Dotted 1/8 is a classic slapback/groove delay. Triplets fit swung or triplet-based parts. Trust your ear after copying.',
        },
        {
          q: 'Do I need to calculate by hand?',
          a: 'No. The BPM delay calculator lists common note lengths and copies in one click.',
        },
      ],
    },
    ru: {
      title: 'BPM в миллисекунды — калькулятор delay и длительностей',
      description: 'Переведи BPM в миллисекунды для delay и нотных длительностей: четверти, пунктир, триоли — с tap tempo внутри.',
      h1: 'BPM в миллисекунды',
      lead: 'Одна доля в ms: 60 000 ÷ BPM. От длины четверти считаются все обычные delay-подразделения.',
      sections: [
        {
          h2: 'Базовая формула',
          paragraphs: [
            'Миллисекунды на четверть = 60 000 ÷ BPM. При 120 BPM это 500 ms; при 100 BPM — 600 ms.',
            'Дели пополам для восьмых и ещё раз для шестнадцатых. ×1.5 для пунктира; триоли делят долю на три.',
          ],
        },
        {
          h2: 'Зачем в студии',
          paragraphs: [
            'Синхронизируй delay, slapback и похожий тайминг с сеткой трека без угадываний.',
            'Натапай темп на странице delay и копируй нужную ячейку — часто берут 1/8, пунктир 1/8 или триоль 1/4.',
          ],
        },
        {
          h2: 'Связка с метрономом и тапом',
          paragraphs: [
            'Измерь BPM на главной, проверь метрономом, затем открой delay с тем же ?bpm=.',
            'Если грув half-time — сначала ÷2/×2, потом смотри таблицу ms под нужную сетку.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Какой delay у 1/8 при 128 BPM?',
          a: 'Четверть ≈ 468.75 ms, прямая 1/8 ≈ 234.4 ms. Точные значения копируй из таблицы.',
        },
        {
          q: 'Пунктир или триоль?',
          a: 'Пунктирная 1/8 — классика slapback/грува. Триоли — для триольных партий. После копирования доверяй уху.',
        },
        {
          q: 'Считать вручную?',
          a: 'Не нужно. Калькулятор delay показывает длительности и копирует в один клик.',
        },
      ],
    },
    es: {
      title: 'BPM a milisegundos — calculadora de delay y duraciones de nota',
      description: 'Convierte BPM a milisegundos para delay y duraciones de nota. Negras, valores con punto, tresillos — con tap tempo integrado.',
      h1: 'BPM a milisegundos',
      lead: 'Un beat en ms es 60.000 ÷ BPM. A partir de la duración de la negra puedes derivar cada subdivisión común de delay.',
      sections: [
        {
          h2: 'La fórmula central',
          paragraphs: [
            'Milisegundos por negra = 60.000 ÷ BPM. A 120 BPM son 500 ms; a 100 BPM son 600 ms.',
            'Divide a la mitad para corcheas, otra vez para semicorcheas. Multiplica por 1,5 para valores con punto; los tresillos dividen el beat en tres.',
          ],
        },
        {
          h2: 'Usos en estudio',
          paragraphs: [
            'Sincroniza delays, slapback y tiempos cercanos al sidechain con la cuadrícula de la canción sin adivinar.',
            'Toca el tema en la página de delay y copia la celda que necesites — 1/8, 1/8 con punto o tresillo de 1/4 son opciones habituales.',
          ],
        },
        {
          h2: 'Combina con metrónomo y tap',
          paragraphs: [
            'Mide el BPM en la herramienta principal, confirma con el metrónomo y salta a delay con el mismo valor ?bpm=.',
            'Cuando la sensación es half-time, convierte después de ÷2/×2 para que la tabla de ms coincida con la cuadrícula que realmente quieres.',
          ],
        },
      ],
      faqs: [
        {
          q: '¿Cuál es el tiempo de delay de una corchea a 128 BPM?',
          a: 'Negra ≈ 468,75 ms, así que una 1/8 recta ≈ 234,4 ms. Usa la tabla de delay para copiar valores exactos.',
        },
        {
          q: '¿Con punto o tresillo — cuál debo usar?',
          a: 'La 1/8 con punto es un delay clásico de slapback/groove. Los tresillos encajan en partes con swing o basadas en tresillos. Confía en tu oído después de copiar.',
        },
        {
          q: '¿Tengo que calcular a mano?',
          a: 'No. La calculadora de delay BPM lista duraciones comunes y copia en un clic.',
        },
      ],
    },
    fr: {
      title: 'BPM en millisecondes — calculateur de delay et de durées de note',
      description: 'Convertissez le BPM en millisecondes pour le delay et les durées de note. Noires, valeurs pointées, triolets — avec tap tempo intégré.',
      h1: 'BPM en millisecondes',
      lead: 'Un temps en ms vaut 60 000 ÷ BPM. À partir de la durée de la noire, vous dérivez chaque subdivision de delay courante.',
      sections: [
        {
          h2: 'La formule de base',
          paragraphs: [
            'Millisecondes par noire = 60 000 ÷ BPM. À 120 BPM c’est 500 ms ; à 100 BPM c’est 600 ms.',
            'Divisez par deux pour les croches, encore pour les doubles croches. Multipliez par 1,5 pour les pointées ; les triolets divisent le temps en trois.',
          ],
        },
        {
          h2: 'Usages en studio',
          paragraphs: [
            'Synchronisez delays, slapback et timings proches du sidechain sur la grille du morceau sans deviner.',
            'Tapez le morceau sur la page delay, puis copiez la cellule voulue — 1/8, 1/8 pointée ou triolet de 1/4 sont des choix fréquents.',
          ],
        },
        {
          h2: 'Associez métronome et tap',
          paragraphs: [
            'Mesurez le BPM sur l’outil d’accueil, confirmez avec le métronome, puis passez au delay avec la même valeur ?bpm=.',
            'Quand le feel est half-time, convertissez après ÷2/×2 pour que le tableau ms corresponde à la grille que vous voulez vraiment.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Quel est le temps de delay d’une croche à 128 BPM ?',
          a: 'Noire ≈ 468,75 ms, donc une 1/8 droite ≈ 234,4 ms. Utilisez le tableau delay pour copier les valeurs exactes.',
        },
        {
          q: 'Pointée ou triolet — lequel choisir ?',
          a: 'La 1/8 pointée est un delay slapback/groove classique. Les triolets conviennent aux parties swingées ou en triolet. Fiez-vous à votre oreille après copie.',
        },
        {
          q: 'Faut-il calculer à la main ?',
          a: 'Non. Le calculateur delay BPM liste les durées courantes et copie en un clic.',
        },
      ],
    },
    pt: {
      title: 'BPM em milissegundos — calculadora de delay e durações de nota',
      description: 'Converta BPM em milissegundos para delay e durações de nota. Semínimas, valores com ponto, tercinas — com tap tempo integrado.',
      h1: 'BPM em milissegundos',
      lead: 'Um beat em ms é 60.000 ÷ BPM. A partir da duração da semínima você deriva cada subdivisão comum de delay.',
      sections: [
        {
          h2: 'A fórmula central',
          paragraphs: [
            'Milissegundos por semínima = 60.000 ÷ BPM. A 120 BPM são 500 ms; a 100 BPM são 600 ms.',
            'Divida pela metade para colcheias, de novo para semicolcheias. Multiplique por 1,5 para valores com ponto; tercinas dividem o beat em três.',
          ],
        },
        {
          h2: 'Usos em estúdio',
          paragraphs: [
            'Sincronize delays, slapback e tempos próximos ao sidechain com a grade da música sem chutar.',
            'Toque a faixa na página de delay e copie a célula que precisar — 1/8, 1/8 com ponto ou tercina de 1/4 são escolhas comuns.',
          ],
        },
        {
          h2: 'Combine com metrônomo e tap',
          paragraphs: [
            'Meça o BPM na ferramenta principal, confirme com o metrônomo e vá para delay com o mesmo valor ?bpm=.',
            'Quando a sensação for half-time, converta depois de ÷2/×2 para a tabela de ms bater com a grade que você realmente quer.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Qual o tempo de delay de uma colchea a 128 BPM?',
          a: 'Semínima ≈ 468,75 ms, então uma 1/8 reta ≈ 234,4 ms. Use a tabela de delay para copiar valores exatos.',
        },
        {
          q: 'Com ponto ou tercina — qual devo usar?',
          a: 'A 1/8 com ponto é um delay clássico de slapback/groove. Tercinas encaixam em partes com swing ou baseadas em tercinas. Confie no ouvido depois de copiar.',
        },
        {
          q: 'Preciso calcular na mão?',
          a: 'Não. A calculadora de delay BPM lista durações comuns e copia em um clique.',
        },
      ],
    },
  },
  {
    slug: 'half-time-double-time',
    order: 4,
    ctaBpm: 140,
    en: {
      title: 'Half-Time & Double-Time BPM — When to Use ÷2 and ×2',
      description: 'Why your tap BPM looks half or double — and how to choose the written tempo vs the felt pulse for DAW and DJ work.',
      h1: 'Half-time and double-time BPM',
      lead: 'The “right” BPM is the one that matches the grid you want. ÷2 and ×2 flip between felt pulse and written tempo.',
      sections: [
        {
          h2: 'Felt pulse vs written tempo',
          paragraphs: [
            'Dubstep and trap often feel ~70–80 BPM but are written at ~140–160. DnB can feel half of 170+. Salsa may feel half of ~200.',
            'Neither number is wrong — producers pick the grid that makes editing and drum programming easier.',
          ],
        },
        {
          h2: 'How to decide in 10 seconds',
          paragraphs: [
            'Tap what you naturally nod to. Start the metronome. If the click is twice as busy as the song’s groove, press ÷2; if it feels sluggish, press ×2.',
            'Check hi-hats and percussion: if they clearly subdivide your taps by two, you are probably on the slower feel.',
          ],
        },
        {
          h2: 'Workflow on BPM Tap',
          paragraphs: [
            'Stabilize a reading on the home tool, flip ÷2/×2, then jump to metronome or delay with ?bpm= so every page shares the choice.',
            'Genre pages note common half-time habits — use them as a hint, then trust the metronome against the track.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Should DJs use felt or written BPM?',
          a: 'Match whatever your library and sync tools expect. Consistency across your crate matters more than theory.',
        },
        {
          q: 'Why does ×2 matter for delay?',
          a: 'Delay ms follow the BPM you choose. Wrong octave of tempo = wrong note lengths in the table.',
        },
        {
          q: 'Can confidence be high on the “wrong” octave?',
          a: 'Yes — you can tap a stable half-time pulse. Stability ≠ correct grid. Confirm with metronome and arrangement needs.',
        },
      ],
    },
    ru: {
      title: 'Half-time и double-time BPM — когда жать ÷2 и ×2',
      description: 'Почему tap BPM кажется вдвое меньше или больше — и как выбрать письменный темп vs ощущаемый пульс для DAW и DJ.',
      h1: 'Half-time и double-time BPM',
      lead: '«Правильный» BPM — тот, что совпадает с нужной сеткой. ÷2 и ×2 переключают ощущаемый пульс и письменный темп.',
      sections: [
        {
          h2: 'Ощущаемый пульс и письменный темп',
          paragraphs: [
            'Dubstep и trap часто ощущаются как ~70–80 BPM, а пишутся ~140–160. DnB может ощущаться как половина от 170+. Salsa — как половина от ~200.',
            'Оба числа могут быть «верными» — выбирают сетку, удобную для правок и ударных.',
          ],
        },
        {
          h2: 'Как решить за 10 секунд',
          paragraphs: [
            'Натапай то, под что киваешь. Запусти метроном. Клик вдвое суетливее грува — ÷2; слишком вялый — ×2.',
            'Смотри хэты и перкуссию: если они явно делят твои тапы пополам — ты на более медленном feel.',
          ],
        },
        {
          h2: 'Рабочий поток в BPM Tap',
          paragraphs: [
            'Стабилизируй чтение на главной, переключи ÷2/×2, затем открой метроном или delay с ?bpm= — везде один выбор.',
            'На страницах жанров есть подсказки про half-time — используй их, но финально сверь метроном с треком.',
          ],
        },
      ],
      faqs: [
        {
          q: 'DJ’ям какой BPM брать?',
          a: 'Тот, который ждут твоя библиотека и sync. Важнее единый стандарт в кейте, чем теория.',
        },
        {
          q: 'Почему ×2 важен для delay?',
          a: 'Миллисекунды считаются от выбранного BPM. Неверная «октава» темпа = неверные длительности в таблице.',
        },
        {
          q: 'Может ли Stable быть на «неверной октаве»?',
          a: 'Да — half-time тоже стабильно тапается. Stable ≠ нужная сетка. Проверь метрономом и задачей аранжировки.',
        },
      ],
    },
    es: {
      title: 'BPM half-time y double-time — cuándo usar ÷2 y ×2',
      description: 'Por qué tu tap BPM parece la mitad o el doble — y cómo elegir el tempo escrito frente al pulso sentido para DAW y DJ.',
      h1: 'BPM half-time y double-time',
      lead: 'El BPM «correcto» es el que coincide con la cuadrícula que quieres. ÷2 y ×2 alternan entre pulso sentido y tempo escrito.',
      sections: [
        {
          h2: 'Pulso sentido vs tempo escrito',
          paragraphs: [
            'Dubstep y trap suelen sentirse como ~70–80 BPM pero se escriben a ~140–160. El DnB puede sentirse como la mitad de 170+. La salsa puede sentirse como la mitad de ~200.',
            'Ningún número está mal — los productores eligen la cuadrícula que facilita la edición y la programación de batería.',
          ],
        },
        {
          h2: 'Cómo decidir en 10 segundos',
          paragraphs: [
            'Toca lo que asientes naturalmente. Inicia el metrónomo. Si el click es el doble de activo que el groove de la canción, pulsa ÷2; si se siente lento, pulsa ×2.',
            'Revisa hi-hats y percusión: si claramente subdividen tus taps por dos, probablemente estás en el feel más lento.',
          ],
        },
        {
          h2: 'Flujo de trabajo en BPM Tap',
          paragraphs: [
            'Estabiliza una lectura en la herramienta principal, cambia ÷2/×2 y salta al metrónomo o delay con ?bpm= para que todas las páginas compartan la elección.',
            'Las páginas de género anotan hábitos comunes de half-time — úsalas como pista y luego confía en el metrónomo contra la pista.',
          ],
        },
      ],
      faqs: [
        {
          q: '¿Los DJs deben usar BPM sentido o escrito?',
          a: 'Coincide con lo que esperan tu biblioteca y herramientas de sync. La consistencia en tu crate importa más que la teoría.',
        },
        {
          q: '¿Por qué importa ×2 para el delay?',
          a: 'Los ms de delay siguen el BPM que elijas. Octava de tempo incorrecta = duraciones de nota incorrectas en la tabla.',
        },
        {
          q: '¿Puede la confianza ser alta en la octava «incorrecta»?',
          a: 'Sí — puedes tocar un pulso half-time estable. Estabilidad ≠ cuadrícula correcta. Confirma con metrónomo y necesidades de arreglo.',
        },
      ],
    },
    fr: {
      title: 'BPM half-time et double-time — quand utiliser ÷2 et ×2',
      description: 'Pourquoi votre tap BPM semble divisé ou doublé — et comment choisir le tempo noté vs le pulse ressenti pour le DAW et le DJ.',
      h1: 'BPM half-time et double-time',
      lead: 'Le « bon » BPM est celui qui correspond à la grille voulue. ÷2 et ×2 basculent entre pulse ressenti et tempo noté.',
      sections: [
        {
          h2: 'Pulse ressenti vs tempo noté',
          paragraphs: [
            'Dubstep et trap se ressentent souvent ~70–80 BPM mais s’écrivent ~140–160. Le DnB peut sembler la moitié de 170+. La salsa peut sembler la moitié de ~200.',
            'Aucun chiffre n’est faux — les producteurs choisissent la grille qui facilite l’édition et la programmation batterie.',
          ],
        },
        {
          h2: 'Comment décider en 10 secondes',
          paragraphs: [
            'Tapez ce sur quoi vous hochez naturellement la tête. Lancez le métronome. Si le clic est deux fois plus occupé que le groove, appuyez sur ÷2 ; s’il traîne, appuyez sur ×2.',
            'Regardez hi-hats et percussion : s’ils subdivisent clairement vos taps par deux, vous êtes probablement sur le feel plus lent.',
          ],
        },
        {
          h2: 'Workflow sur BPM Tap',
          paragraphs: [
            'Stabilisez une lecture sur l’outil d’accueil, basculez ÷2/×2, puis passez au métronome ou delay avec ?bpm= pour que chaque page partage le choix.',
            'Les pages genre notent les habitudes half-time courantes — utilisez-les comme indice, puis fiez-vous au métronome face au morceau.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Les DJ doivent-ils utiliser le BPM ressenti ou noté ?',
          a: 'Alignez-vous sur ce qu’attendent votre bibliothèque et vos outils de sync. La cohérence dans votre crate compte plus que la théorie.',
        },
        {
          q: 'Pourquoi ×2 compte pour le delay ?',
          a: 'Les ms de delay suivent le BPM choisi. Mauvaise octave de tempo = mauvaises durées de note dans le tableau.',
        },
        {
          q: 'La confiance peut-elle être haute sur la « mauvaise » octave ?',
          a: 'Oui — vous pouvez taper un pulse half-time stable. Stabilité ≠ bonne grille. Confirmez avec le métronome et les besoins d’arrangement.',
        },
      ],
    },
    pt: {
      title: 'BPM half-time e double-time — quando usar ÷2 e ×2',
      description: 'Por que seu tap BPM parece metade ou o dobro — e como escolher o tempo escrito vs o pulso sentido para DAW e DJ.',
      h1: 'BPM half-time e double-time',
      lead: 'O BPM «certo» é o que bate com a grade que você quer. ÷2 e ×2 alternam entre pulso sentido e tempo escrito.',
      sections: [
        {
          h2: 'Pulso sentido vs tempo escrito',
          paragraphs: [
            'Dubstep e trap costumam parecer ~70–80 BPM mas são escritos em ~140–160. DnB pode parecer metade de 170+. Salsa pode parecer metade de ~200.',
            'Nenhum número está errado — produtores escolhem a grade que facilita edição e programação de bateria.',
          ],
        },
        {
          h2: 'Como decidir em 10 segundos',
          paragraphs: [
            'Toque o que você balança a cabeça naturalmente. Inicie o metrônomo. Se o clique estiver o dobro de ativo que o groove da música, pressione ÷2; se parecer lento, pressione ×2.',
            'Observe hi-hats e percussão: se claramente subdividem seus toques por dois, você provavelmente está no feel mais lento.',
          ],
        },
        {
          h2: 'Fluxo de trabalho no BPM Tap',
          paragraphs: [
            'Estabilize uma leitura na ferramenta principal, alterne ÷2/×2 e vá para metrônomo ou delay com ?bpm= para todas as páginas compartilharem a escolha.',
            'As páginas de gênero anotam hábitos comuns de half-time — use como dica e depois confie no metrônomo contra a faixa.',
          ],
        },
      ],
      faqs: [
        {
          q: 'DJs devem usar BPM sentido ou escrito?',
          a: 'Combine com o que sua biblioteca e ferramentas de sync esperam. Consistência no seu acervo importa mais que teoria.',
        },
        {
          q: 'Por que ×2 importa para delay?',
          a: 'Os ms de delay seguem o BPM que você escolhe. Octava de tempo errada = durações de nota erradas na tabela.',
        },
        {
          q: 'A confiança pode estar alta na octava «errada»?',
          a: 'Sim — você pode tocar um pulso half-time estável. Estabilidade ≠ grade correta. Confirme com metrônomo e necessidades de arranjo.',
        },
      ],
    },
  },
  {
    slug: 'find-bpm-with-microphone',
    order: 5,
    ctaBpm: 128,
    en: {
      title: 'How to Find a Song’s BPM with a Microphone',
      description:
        'Find song BPM with your microphone: open Listen mode, point at a speaker, wait for a live tempo estimate, then confirm with ÷2/×2, metronome, or tap. No upload.',
      h1: 'Find a song’s BPM with a microphone',
      lead: 'When you cannot tap evenly — or your hands are busy — Listen mode estimates tempo from the audio your mic hears. Same BPM stage as tap: copy, metronome, delay.',
      sections: [
        {
          h2: 'Open Listen and allow the mic',
          paragraphs: [
            'Go to Listen on bpm-tap.com and start listening. Grant microphone access when the browser asks — without it the tool cannot hear the track.',
            'Audio stays in your browser. Nothing is uploaded; the page only uses the mic stream to estimate BPM on your device.',
          ],
        },
        {
          h2: 'Get a clear signal into the mic',
          paragraphs: [
            'Play the song on a speaker or phone and hold the device closer to the source. Weak laptop speakers and noisy rooms make any onset/energy detector less reliable.',
            'Electronic tracks with a clear kick usually lock faster. Give it several seconds until the reading looks stable, then check ÷2 / ×2 if the feel seems half or double.',
          ],
        },
        {
          h2: 'Confirm, then use the number',
          paragraphs: [
            'Start the metronome on the measured BPM. If the click drifts against the track, flip ÷2/×2 or switch to Tap and refine by hand.',
            'When it locks, Copy the BPM, open Delay for ms values, or share a ?bpm= link — the same workflow as classic tap tempo.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Can I find BPM without tapping?',
          a: 'Yes. Listen mode detects tempo from the mic. Tap is still useful to refine a reading or when the room is too noisy for a clean signal.',
        },
        {
          q: 'Does the microphone audio leave my device?',
          a: 'No. Analysis runs in the browser. BPM Tap does not upload mic audio.',
        },
        {
          q: 'Why is the BPM half or double what I expect?',
          a: 'Tempo estimators often pick the other octave of the pulse. Use ÷2 / ×2, try an alternate candidate if shown, then confirm with the metronome.',
        },
      ],
    },
    ru: {
      title: 'Как узнать BPM песни через микрофон',
      description:
        'Узнать BPM песни через микрофон: открой Listen, наведи на колонку, дождись оценки темпа, проверь ÷2/×2, метрономом или тапом. Без загрузки файла.',
      h1: 'Узнать BPM песни через микрофон',
      lead: 'Когда тапать неудобно — Listen оценивает темп по звуку с микрофона. Тот же BPM stage, что и у tap: copy, метроном, delay.',
      sections: [
        {
          h2: 'Открой Listen и разреши микрофон',
          paragraphs: [
            'Открой Listen на bpm-tap.com и начни слушать. Разреши доступ к микрофону — без него инструмент не услышит трек.',
            'Звук остаётся в браузере. Ничего не загружается: страница оценивает BPM только на твоём устройстве.',
          ],
        },
        {
          h2: 'Дай микрофону чистый сигнал',
          paragraphs: [
            'Включи трек на колонке или телефоне и поднеси устройство ближе к источнику. Тихие динамики ноутбука и шум в комнате мешают любому детектору по onset/энергии.',
            'Электронные треки с явным kick обычно стабилизируются быстрее. Подожди несколько секунд, затем проверь ÷2 / ×2, если пульс кажется вдвое медленнее или быстрее.',
          ],
        },
        {
          h2: 'Проверь и используй цифру',
          paragraphs: [
            'Запусти метроном на измеренном BPM. Если клик плывёт относительно трека — ÷2/×2 или переключись на Tap и уточни руками.',
            'Когда сошлось — Copy BPM, открой Delay для ms или отправь ссылку с ?bpm= — тот же поток, что у классического tap tempo.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Можно узнать BPM без тапа?',
          a: 'Да. Listen определяет темп с микрофона. Tap всё равно полезен, чтобы уточнить чтение или когда в комнате слишком шумно.',
        },
        {
          q: 'Звук с микрофона куда-то уходит?',
          a: 'Нет. Анализ только в браузере. BPM Tap не загружает аудио с микрофона.',
        },
        {
          q: 'Почему BPM вдвое меньше или больше?',
          a: 'Оценщики темпа часто берут другую «октаву» пульса. Жми ÷2 / ×2, выбери альтернативу если есть, затем сверься с метрономом.',
        },
      ],
    },
    es: {
      title: 'Cómo encontrar el BPM de una canción con un micrófono',
      description:
        'Encuentra el BPM con tu micrófono: abre el modo Listen, apunta a un altavoz, espera una estimación de tempo en vivo y confirma con ÷2/×2, metrónomo o tap. Sin subir archivos.',
      h1: 'Encontrar el BPM de una canción con un micrófono',
      lead: 'Cuando no puedes tocar con regularidad — o tienes las manos ocupadas — el modo Listen estima el tempo del audio que capta el micrófono. El mismo escenario BPM que el tap: copiar, metrónomo, delay.',
      sections: [
        {
          h2: 'Abre Listen y permite el micrófono',
          paragraphs: [
            'Ve a Listen en bpm-tap.com y empieza a escuchar. Concede acceso al micrófono cuando el navegador lo pida — sin él la herramienta no puede oír la pista.',
            'El audio permanece en tu navegador. No se sube nada; la página solo usa el stream del micrófono para estimar el BPM en tu dispositivo.',
          ],
        },
        {
          h2: 'Consigue una señal clara en el micrófono',
          paragraphs: [
            'Reproduce la canción en un altavoz o teléfono y acerca el dispositivo a la fuente. Altavoces de portátil débiles y habitaciones ruidosas hacen menos fiable cualquier detector de onset/energía.',
            'Las pistas electrónicas con kick claro suelen fijarse más rápido. Dale varios segundos hasta que la lectura parezca estable, luego revisa ÷2 / ×2 si la sensación parece la mitad o el doble.',
          ],
        },
        {
          h2: 'Confirma y usa el número',
          paragraphs: [
            'Inicia el metrónomo con el BPM medido. Si el click se desvía de la pista, cambia ÷2/×2 o pasa a Tap y afina a mano.',
            'Cuando encaje, copia el BPM, abre Delay para valores en ms o comparte un enlace ?bpm= — el mismo flujo que el tap tempo clásico.',
          ],
        },
      ],
      faqs: [
        {
          q: '¿Puedo encontrar el BPM sin tocar?',
          a: 'Sí. El modo Listen detecta el tempo desde el micrófono. Tap sigue siendo útil para afinar una lectura o cuando la habitación es demasiado ruidosa para una señal limpia.',
        },
        {
          q: '¿El audio del micrófono sale de mi dispositivo?',
          a: 'No. El análisis se ejecuta en el navegador. BPM Tap no sube audio del micrófono.',
        },
        {
          q: '¿Por qué el BPM es la mitad o el doble de lo esperado?',
          a: 'Los estimadores de tempo suelen elegir la otra octava del pulso. Usa ÷2 / ×2, prueba un candidato alternativo si aparece y confirma con el metrónomo.',
        },
      ],
    },
    fr: {
      title: 'Comment trouver le BPM d’une chanson avec un microphone',
      description:
        'Trouvez le BPM avec votre micro : ouvrez le mode Listen, pointez vers un haut-parleur, attendez une estimation live du tempo, puis confirmez avec ÷2/×2, métronome ou tap. Sans envoi de fichier.',
      h1: 'Trouver le BPM d’une chanson avec un microphone',
      lead: 'Quand vous ne pouvez pas taper régulièrement — ou que vos mains sont occupées — le mode Listen estime le tempo à partir de l’audio capté par le micro. Même scène BPM que le tap : copier, métronome, delay.',
      sections: [
        {
          h2: 'Ouvrez Listen et autorisez le micro',
          paragraphs: [
            'Allez sur Listen sur bpm-tap.com et commencez à écouter. Accordez l’accès au microphone quand le navigateur le demande — sans cela l’outil n’entend pas le morceau.',
            'L’audio reste dans votre navigateur. Rien n’est envoyé ; la page utilise seulement le flux micro pour estimer le BPM sur votre appareil.',
          ],
        },
        {
          h2: 'Obtenez un signal clair dans le micro',
          paragraphs: [
            'Jouez la chanson sur un haut-parleur ou un téléphone et rapprochez l’appareil de la source. Des enceintes de portable faibles et une pièce bruyante rendent tout détecteur onset/énergie moins fiable.',
            'Les morceaux électroniques avec un kick net se verrouillent généralement plus vite. Laissez quelques secondes jusqu’à une lecture stable, puis vérifiez ÷2 / ×2 si le feel semble divisé ou doublé.',
          ],
        },
        {
          h2: 'Confirmez, puis utilisez le chiffre',
          paragraphs: [
            'Lancez le métronome sur le BPM mesuré. Si le clic dérive par rapport au morceau, basculez ÷2/×2 ou passez en Tap pour affiner à la main.',
            'Quand c’est aligné, copiez le BPM, ouvrez Delay pour les valeurs ms, ou partagez un lien ?bpm= — le même workflow que le tap tempo classique.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Puis-je trouver le BPM sans taper ?',
          a: 'Oui. Le mode Listen détecte le tempo depuis le micro. Le tap reste utile pour affiner une lecture ou quand la pièce est trop bruyante pour un signal propre.',
        },
        {
          q: 'L’audio du micro quitte-t-il mon appareil ?',
          a: 'Non. L’analyse tourne dans le navigateur. BPM Tap n’envoie pas l’audio du micro.',
        },
        {
          q: 'Pourquoi le BPM est-il la moitié ou le double de ce que j’attends ?',
          a: 'Les estimateurs de tempo choisissent souvent l’autre octave du pulse. Utilisez ÷2 / ×2, essayez un candidat alternatif si proposé, puis confirmez avec le métronome.',
        },
      ],
    },
    pt: {
      title: 'Como descobrir o BPM de uma música com microfone',
      description:
        'Descubra o BPM com seu microfone: abra o modo Listen, aponte para um alto-falante, espere uma estimativa de tempo ao vivo e confirme com ÷2/×2, metrônomo ou tap. Sem upload.',
      h1: 'Descobrir o BPM de uma música com microfone',
      lead: 'Quando você não consegue tocar com regularidade — ou está com as mãos ocupadas — o modo Listen estima o tempo do áudio que o microfone capta. O mesmo palco BPM do tap: copiar, metrônomo, delay.',
      sections: [
        {
          h2: 'Abra Listen e permita o microfone',
          paragraphs: [
            'Vá para Listen no bpm-tap.com e comece a escutar. Conceda acesso ao microfone quando o navegador pedir — sem isso a ferramenta não ouve a faixa.',
            'O áudio fica no seu navegador. Nada é enviado; a página só usa o stream do microfone para estimar BPM no seu dispositivo.',
          ],
        },
        {
          h2: 'Obtenha um sinal claro no microfone',
          paragraphs: [
            'Reproduza a música em um alto-falante ou celular e aproxime o dispositivo da fonte. Alto-falantes fracos de notebook e ambientes barulhentos tornam qualquer detector de onset/energia menos confiável.',
            'Faixas eletrônicas com kick claro costumam travar mais rápido. Dê alguns segundos até a leitura parecer estável, depois verifique ÷2 / ×2 se a sensação parecer metade ou o dobro.',
          ],
        },
        {
          h2: 'Confirme e use o número',
          paragraphs: [
            'Inicie o metrônomo no BPM medido. Se o clique desviar da faixa, alterne ÷2/×2 ou mude para Tap e refine manualmente.',
            'Quando encaixar, copie o BPM, abra Delay para valores em ms ou compartilhe um link ?bpm= — o mesmo fluxo do tap tempo clássico.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Posso descobrir BPM sem tocar?',
          a: 'Sim. O modo Listen detecta o tempo pelo microfone. Tap ainda é útil para refinar uma leitura ou quando o ambiente está barulhento demais para um sinal limpo.',
        },
        {
          q: 'O áudio do microfone sai do meu dispositivo?',
          a: 'Não. A análise roda no navegador. O BPM Tap não envia áudio do microfone.',
        },
        {
          q: 'Por que o BPM é metade ou o dobro do esperado?',
          a: 'Estimadores de tempo costumam escolher a outra octava do pulso. Use ÷2 / ×2, tente um candidato alternativo se aparecer e confirme com o metrônomo.',
        },
      ],
    },
  },
];

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}
