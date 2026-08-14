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
  zh: GuideLocale;
}

export const guides: Guide[] = [
  {
    slug: 'how-to-find-bpm',
    order: 1,
    ctaBpm: 120,
    en: {
      title: 'How to Find a Song’s BPM by Tapping',
      description: 'Find any song’s BPM in seconds: tap along with the beat, wait for a stable reading, then copy it into your DAW or metronome.',
      h1: 'How to find a song’s BPM',
      lead: 'You don’t need to upload a file. Play the track, tap the beat, and let the tool average your timing into beats per minute.',
      sections: [
        {
          h2: 'Tap the beat you’d count',
          paragraphs: [
            'Start the song and find the steady beat. Usually the kick, or the snare backbeat if the groove is syncopated.',
            'Open the Tap BPM tool and tap with mouse, touch, or any key on each beat. After 8–12 steady taps the reading should settle. Hands busy? Switch to Listen and let the mic estimate tempo.',
          ],
        },
        {
          h2: 'Check it before you commit',
          paragraphs: [
            'When it says Stable, copy the BPM or open the metronome at the same tempo and hear if it locks.',
            'If the click feels twice as fast or half as slow, use ×2 / ÷2. Common with trap, dubstep, DnB, and salsa.',
          ],
        },
        {
          h2: 'Put the number to work',
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
          q: 'Can tapping replace audio analysis?',
          a: 'For a single playing track, tapping is often faster. File analyzers help for batches; tapping wins when you only hear the song.',
        },
        {
          q: 'Why does my BPM look half or double?',
          a: 'You may be tapping a half-time or double-time feel. Use ÷2 / ×2 after the reading settles.',
        },
      ],
    },
    ru: {
      title: 'Как узнать BPM песни тапами',
      description: 'Как узнать BPM песни без загрузки файла: тапай в ритм, дождись стабильного значения и скопируй BPM в DAW, метроном или калькулятор delay.',
      h1: 'Как узнать BPM песни',
      lead: 'Файл загружать не нужно. Включи трек и тапай долю — инструмент усреднит интервалы между тапами и покажет удары в минуту.',
      sections: [
        {
          h2: 'Тапай ту долю, которую считаешь',
          paragraphs: [
            'Включи песню и найди ровную долю. Обычно это кик, а в синкопированном груве удобнее ловить snare на бэкбите.',
            'Открой Tap BPM и тапай мышью, пальцем или любой клавишей. После 8–12 ровных ударов цифра обычно успокаивается. Руки заняты — переключись на Listen, и микрофон сам оценит темп.',
          ],
        },
        {
          h2: 'Проверь, прежде чем ставить в проект',
          paragraphs: [
            'Когда на экране «Стабильно» — копируй BPM или запусти метроном на том же темпе и послушай, сходится ли клик с треком.',
            'Клик вдвое быстрее или медленнее? Жми ×2 / ÷2. Так бывает в trap, dubstep, DnB и salsa.',
          ],
        },
        {
          h2: 'Пусти цифру в дело',
          paragraphs: [
            'Вставь BPM в DAW, посчитай время delay на калькуляторе или скинь коллеге ссылку с ?bpm=.',
            'Знаешь стиль, но не темп? Открой страницу жанра, возьми типичный диапазон, а потом уточни его тапом по самому треку.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Сколько тапов нужно?',
          a: 'Четыре тапа дают грубую оценку. Для DAW и подготовки к сету обычно хватает восьми–двенадцати ровных ударов.',
        },
        {
          q: 'Тап заменяет анализ файла?',
          a: 'Для одного звучащего трека тап часто быстрее. Анализаторы удобны, когда нужно обработать пачку файлов, а если трек ты просто слышишь — тапай.',
        },
        {
          q: 'Почему BPM вдвое меньше или больше?',
          a: 'Скорее всего, ты тапаешь в half-time или double-time. Когда значение стабилизируется, жми ÷2 / ×2.',
        },
      ],
    },
    es: {
      title: 'Cómo saber los BPM de una canción tocando el beat',
      description: 'Descubre los BPM de cualquier canción en segundos: toca al ritmo, espera a que el valor se estabilice y cópialo al DAW o al metrónomo.',
      h1: 'Cómo saber los BPM de una canción',
      lead: 'No hace falta subir ningún archivo. Pon la pista, toca el beat y la herramienta promedia tus intervalos para darte los tiempos por minuto.',
      sections: [
        {
          h2: 'Toca el ritmo que contarías',
          paragraphs: [
            'Arranca la canción y busca el ritmo estable: normalmente el kick, o el backbeat del snare si el groove va sincopado.',
            'Abre Tap BPM y marca cada tiempo con un clic, con el dedo o con cualquier tecla. Tras 8–12 toques regulares el valor debería asentarse. ¿Tienes las manos ocupadas? Pasa a Listen y deja que el micrófono estime el tempo.',
          ],
        },
        {
          h2: 'Confirma antes de usarlo',
          paragraphs: [
            'Cuando la confianza muestre Estable, copia el BPM o abre el metrónomo al mismo tempo y comprueba si el clic encaja con la canción.',
            'Si el clic va al doble de rápido o a la mitad de velocidad, usa ×2 / ÷2. Pasa mucho en trap, dubstep, DnB y salsa.',
          ],
        },
        {
          h2: 'Lleva el número a tu sesión',
          paragraphs: [
            'Pega el BPM en el DAW, saca los tiempos de delay en la calculadora o comparte un enlace con ?bpm= con quien colabore contigo.',
            'Las páginas de género ayudan si solo conoces el estilo: parte del rango típico y luego toca la pista real para afinar el valor.',
          ],
        },
      ],
      faqs: [
        {
          q: '¿Cuántos taps necesito?',
          a: 'Cuatro taps dan una idea aproximada. Ocho a doce toques regulares suelen bastar para montar el proyecto en el DAW o preparar un set.',
        },
        {
          q: '¿Tocar el beat sustituye al análisis de audio?',
          a: 'Para una sola pista sonando, tocar el beat suele ser más rápido. Los analizadores rinden mejor con lotes de archivos; si solo estás oyendo la canción, gana el tap.',
        },
        {
          q: '¿Por qué el BPM sale a la mitad o al doble?',
          a: 'Puede que estés tocando en half-time o en double-time. Usa ÷2 / ×2 cuando el valor se estabilice.',
        },
      ],
    },
    fr: {
      title: 'Comment trouver le BPM d’une chanson en tapant',
      description: 'Trouvez le BPM d’un morceau en quelques secondes : tapez au rythme, attendez une valeur stable, puis copiez-la dans votre DAW ou le métronome.',
      h1: 'Comment trouver le BPM d’une chanson',
      lead: 'Pas besoin d’envoyer de fichier. Lancez le morceau et tapez le beat : l’outil fait la moyenne de vos intervalles et affiche les battements par minute.',
      sections: [
        {
          h2: 'Tapez le rythme que vous compteriez',
          paragraphs: [
            'Lancez la chanson et repérez le rythme régulier : en général le kick, ou le backbeat de la caisse claire si le groove est syncopé.',
            'Ouvrez Tap BPM et tapez à chaque temps, à la souris, au doigt ou avec n’importe quelle touche. Après 8–12 taps réguliers, le chiffre se stabilise. Les mains prises ? Passez en Listen et laissez le micro estimer le tempo.',
          ],
        },
        {
          h2: 'Vérifiez avant de coller dans le projet',
          paragraphs: [
            'Quand l’indicateur affiche Stable, copiez le BPM ou lancez le métronome au même tempo pour entendre si le clic tombe avec le morceau.',
            'Si le clic va deux fois trop vite ou deux fois trop lentement, utilisez ×2 / ÷2. C’est courant en trap, dubstep, DnB et salsa.',
          ],
        },
        {
          h2: 'Utilisez ensuite le chiffre',
          paragraphs: [
            'Collez le BPM dans votre DAW, calculez les temps de delay en ms, ou envoyez un lien avec ?bpm= à votre collaborateur.',
            'Les pages de genre aident si vous connaissez le style mais pas le tempo : partez de la plage typique, puis tapez le morceau pour affiner.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Combien de taps faut-il ?',
          a: 'Quatre taps donnent une idée grossière. Huit à douze taps réguliers suffisent en général pour caler un projet ou préparer un set DJ.',
        },
        {
          q: 'Taper le beat remplace-t-il l’analyse audio ?',
          a: 'Pour un morceau qui joue, taper est souvent plus rapide. Les analyseurs de fichiers sont utiles par lots ; quand vous entendez seulement la chanson, le tap gagne.',
        },
        {
          q: 'Pourquoi mon BPM est-il moitié ou double ?',
          a: 'Vous tapez peut-être un feeling half-time ou double-time. Une fois le chiffre stable, utilisez ÷2 / ×2.',
        },
      ],
    },
    pt: {
      title: 'Como descobrir o BPM de uma música tocando o beat',
      description: 'Descubra o BPM de qualquer música em segundos: bata no ritmo, espere o valor firmar e copie para o DAW ou para o metrônomo.',
      h1: 'Como descobrir o BPM de uma música',
      lead: 'Não precisa enviar arquivo. Deixe a música tocando, bata no ritmo e a ferramenta tira a média dos seus intervalos em batidas por minuto.',
      sections: [
        {
          h2: 'Toque o ritmo que você contaria',
          paragraphs: [
            'Comece a música e ache o ritmo firme: em geral o kick, ou o backbeat da caixa quando o groove é sincopado.',
            'Abra o Tap BPM e bata em cada tempo com o mouse, com o dedo ou com qualquer tecla. Depois de 8–12 toques constantes o valor firma. Está com as mãos ocupadas? Mude para Listen e deixe o microfone estimar o tempo.',
          ],
        },
        {
          h2: 'Confira antes de travar no projeto',
          paragraphs: [
            'Quando aparecer Estável, copie o BPM ou abra o metrônomo no mesmo tempo para ouvir se o clique encaixa na música.',
            'Se o clique soar duas vezes mais rápido ou duas vezes mais lento, use ×2 / ÷2. É comum em trap, dubstep, DnB e salsa.',
          ],
        },
        {
          h2: 'Onde usar o número',
          paragraphs: [
            'Cole o BPM no DAW, pegue os tempos de delay na calculadora ou mande um link com ?bpm= para quem está trabalhando com você.',
            'As páginas de gênero ajudam quando você só sabe o estilo: comece pelo intervalo típico de BPM e depois bata no ritmo da própria música para afinar.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Quantos toques eu preciso?',
          a: 'Quatro toques dão um palpite grosseiro. Oito a doze toques constantes costumam bastar para o DAW e para preparar um set de DJ.',
        },
        {
          q: 'Bater no ritmo substitui a análise de áudio?',
          a: 'Para uma música que já está tocando, bater no ritmo costuma ser mais rápido. Analisadores de arquivo ajudam em lote; quando você só ouve a música, o tap ganha.',
        },
        {
          q: 'Por que o BPM veio pela metade ou dobrado?',
          a: 'Você pode estar batendo em half-time ou em double-time. Depois que o valor firmar, use ÷2 / ×2.',
        },
      ],
    },
    zh: {
      title: '如何用点击找出一首歌的 BPM',
      description: '几秒钟测出任意歌曲的 BPM：跟着节拍点击，等读数稳定，然后复制到你的 DAW 或节拍器里。',
      h1: '如何找出一首歌的 BPM',
      lead: '不需要上传文件。播放曲子、跟着节拍点击，工具会把你的点击间隔平均成每分钟节拍数。',
      sections: [
        {
          h2: '点你会数的那一拍',
          paragraphs: [
            '播放歌曲，找到那个稳定的拍子。通常是底鼓；如果律动比较切分，就抓军鼓的反拍。',
            '打开点击测速工具，用鼠标、手指或任意按键在每一拍点一下。稳定点击 8–12 次后读数就会定下来。腾不出手？切换到麦克风识别，让麦克风来估算速度。',
          ],
        },
        {
          h2: '定下来之前先核对',
          paragraphs: [
            '显示“已稳定”后，复制 BPM，或者用同一个速度打开节拍器，听听能不能对上。',
            '如果节拍器听起来快了一倍或慢了一半，就用 ×2 / ÷2。这在 trap、dubstep、DnB 和 salsa 里很常见。',
          ],
        },
        {
          h2: '把这个数字用起来',
          paragraphs: [
            '把 BPM 填进 DAW，在延迟计算器里算出延迟时间，或者把带 ?bpm= 的链接发给合作者。',
            '只知道风格、不知道速度时，曲风页面很有用：先从典型区间入手，再跟着实际曲子点击微调。',
          ],
        },
      ],
      faqs: [
        {
          q: '需要点多少下？',
          a: '点四下能得到一个大致的猜测。稳定点击八到十二下，通常足够用于 DAW 设置和 DJ 准备。',
        },
        {
          q: '点击能代替音频分析吗？',
          a: '对于正在播放的单首曲子，点击往往更快。文件分析器适合批量处理；当你只是听到这首歌时，点击更占优势。',
        },
        {
          q: '为什么我的 BPM 看起来是一半或两倍？',
          a: '你可能点的是半速或倍速的律动。等读数稳定后，用 ÷2 / ×2 切换。',
        },
      ],
    },
  },
  {
    slug: 'bpm-accuracy',
    order: 2,
    ctaBpm: 128,
    en: {
      title: 'BPM Tap Accuracy. How to Get a Stable Reading',
      description: 'How accurate is tapping for BPM? Practical tips to cut timing wobble and land within about ±1–2 BPM of the real tempo.',
      h1: 'How accurate is tapping for BPM?',
      lead: 'The tool measures your taps, not the audio file. Steady technique usually lands close enough for production and practice.',
      sections: [
        {
          h2: 'What “good enough” means',
          paragraphs: [
            'With 8–12 steady taps, most people land within about ±1–2 BPM of the real tempo. Enough for DAW grids, delay sync, and rehearsal.',
            'Human timing always jitters a few milliseconds. Averaging cancels small errors if you keep the same beat.',
          ],
        },
        {
          h2: 'Technique that steadies the reading',
          paragraphs: [
            'Tap one consistent layer (kick or snare). Ignore fills, rolls, and vocal rhythm.',
            'Keep going until the UI says Stable. If you stumble, hit Reset and start a fresh run instead of fighting a bad average.',
          ],
        },
        {
          h2: 'Cross-check like you’d do in a session',
          paragraphs: [
            'Start the metronome on the measured BPM. If the click drifts against the track, nudge with ÷2/×2 or retap.',
            'For swing or live bands, expect more variance. Take more taps, or pick the nearest whole BPM and nudge by ear.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Is tapping for BPM exact?',
          a: 'It’s an estimate from your timing. Clean electronic grids are easiest; swing and live drums need more taps.',
        },
        {
          q: 'Should I use the keyboard or the pad?',
          a: 'Whichever you can hit most evenly. A lot of people are steadier on Space than on a small touch target.',
        },
        {
          q: 'Why does the number keep moving?',
          a: 'Early taps have high variance. Keep a steady beat. The rolling average settles as confidence rises.',
        },
      ],
    },
    ru: {
      title: 'Точность тапа BPM. Как получить стабильное значение',
      description: 'Насколько точен тап по BPM и как получить стабильное значение: техника ровных ударов, проверка метрономом и попадание в ±1–2 BPM.',
      h1: 'Насколько точен тап по BPM?',
      lead: 'Инструмент считает твои тапы, а не аудиофайл. Ровная рука обычно даёт значение, которого хватает и для продакшена, и для репетиции.',
      sections: [
        {
          h2: 'Что значит «достаточно точно»',
          paragraphs: [
            'При 8–12 ровных ударах большинство попадает примерно в ±1–2 BPM. Для сетки DAW, синхронизации delay и репетиции этого хватает.',
            'Рука всегда дрожит на несколько миллисекунд, но усреднение съедает мелкие ошибки, если держишься одной и той же доли.',
          ],
        },
        {
          h2: 'Техника, которая стабилизирует значение',
          paragraphs: [
            'Тапай один слой — кик или snare. Филы, дроби и ритм вокала игнорируй.',
            'Тапай, пока не появится «Стабильно». Сбился — жми «Сброс» и начинай новую серию, а не вытягивай испорченное среднее.',
          ],
        },
        {
          h2: 'Проверка по-студийному',
          paragraphs: [
            'Запусти метроном на измеренном BPM. Если клик плывёт относительно трека, жми ÷2/×2 или перетапай заново.',
            'На swing и живых барабанах разброс всегда больше. Сделай больше тапов или возьми ближайшее целое значение и подправь на слух.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Тап по BPM — это точно?',
          a: 'Это оценка по твоим тапам. С ровной электронной сеткой проще всего, а swing и живые барабаны требуют больше ударов.',
        },
        {
          q: 'Клавиатура или кнопка на экране?',
          a: 'Та, где ты попадаешь ровнее. Часто Space стабильнее маленькой touch-зоны.',
        },
        {
          q: 'Почему цифра прыгает?',
          a: 'У первых тапов большой разброс. Держи ровный ритм: среднее успокоится, когда наберётся больше ударов.',
        },
      ],
    },
    es: {
      title: 'Precisión del tap BPM. Cómo lograr un valor estable',
      description: '¿Es preciso tocar el beat para medir el BPM? Consejos prácticos para reducir el temblor y quedar a unos ±1–2 BPM del tempo real.',
      h1: '¿Es preciso tocar el beat para medir el BPM?',
      lead: 'La herramienta mide tus toques, no el archivo de audio. Con una técnica constante el valor suele ser suficiente para producir y para ensayar.',
      sections: [
        {
          h2: 'Qué significa «suficiente»',
          paragraphs: [
            'Con 8–12 toques estables, la mayoría queda a unos ±1–2 BPM del tempo real. Suficiente para la rejilla del DAW, el sync del delay y un ensayo.',
            'El timing humano siempre tiembla unos milisegundos, pero el promedio cancela los errores pequeños si mantienes el mismo ritmo.',
          ],
        },
        {
          h2: 'Técnica que estabiliza el valor',
          paragraphs: [
            'Toca una sola capa, el kick o el snare. Ignora los fills, los rolls y el ritmo de la voz.',
            'Sigue hasta que aparezca Estable. Si te equivocas, presiona Reiniciar y empieza otra tanda en lugar de pelear con un promedio malo.',
          ],
        },
        {
          h2: 'Comprueba como en el estudio',
          paragraphs: [
            'Arranca el metrónomo con el BPM medido. Si el clic se desvía de la pista, ajusta con ÷2/×2 o vuelve a tocar.',
            'Con swing o con banda en vivo espera más variación: haz más taps o quédate con el BPM entero más cercano y afina al oído.',
          ],
        },
      ],
      faqs: [
        {
          q: '¿Tocar el beat da un BPM exacto?',
          a: 'Es una estimación de tu propio timing. Las rejillas electrónicas limpias son las más fáciles; el swing y la batería en vivo piden más toques.',
        },
        {
          q: '¿Teclado o pad en pantalla?',
          a: 'El que puedas marcar de forma más regular. Mucha gente va más estable con la barra espaciadora que con un botón táctil pequeño.',
        },
        {
          q: '¿Por qué el número no deja de moverse?',
          a: 'Los primeros taps tienen más dispersión. Mantén el ritmo: el promedio móvil se asienta cuando sube la confianza.',
        },
      ],
    },
    fr: {
      title: 'Précision du tap BPM : obtenir une valeur stable',
      description: 'Taper le beat, est-ce précis ? Conseils concrets pour limiter les irrégularités et rester à environ ±1–2 BPM du vrai tempo.',
      h1: 'Taper le beat, est-ce précis ?',
      lead: 'L’outil mesure vos taps, pas le fichier audio. Une frappe régulière donne un chiffre largement suffisant pour produire et pour s’entraîner.',
      sections: [
        {
          h2: 'Ce que veut dire « assez précis »',
          paragraphs: [
            'Avec 8–12 taps réguliers, la plupart des gens tombent à environ ±1–2 BPM du vrai tempo. C’est assez pour une grille de DAW, un delay synchronisé et une répétition.',
            'La main tremble toujours de quelques millisecondes, mais la moyenne gomme les petites erreurs si vous restez sur le même temps.',
          ],
        },
        {
          h2: 'La technique qui stabilise le chiffre',
          paragraphs: [
            'Tapez une seule couche, le kick ou le snare. Ignorez les fills, les roulements et le rythme du chant.',
            'Continuez jusqu’à ce que l’écran affiche Stable. Si vous ratez un tap, appuyez sur Réinitialiser et repartez sur une nouvelle série plutôt que de rattraper une mauvaise moyenne.',
          ],
        },
        {
          h2: 'Vérifiez comme en studio',
          paragraphs: [
            'Lancez le métronome sur le BPM mesuré. Si le clic dérive par rapport au morceau, ajustez avec ÷2/×2 ou retapez.',
            'En swing ou avec une batterie live, la variance est plus grande : faites plus de taps, ou prenez le BPM entier le plus proche et affinez à l’oreille.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Le tap BPM est-il exact ?',
          a: 'C’est une estimation basée sur votre timing. Les grilles électro propres sont les plus faciles ; le swing et la batterie live demandent plus de taps.',
        },
        {
          q: 'Clavier ou pad à l’écran ?',
          a: 'Celui sur lequel vous frappez le plus régulièrement. Beaucoup de gens sont plus stables sur la barre d’espace que sur une petite zone tactile.',
        },
        {
          q: 'Pourquoi le chiffre bouge-t-il encore ?',
          a: 'Les premiers taps varient beaucoup. Gardez un rythme régulier : la moyenne se calme quand la confiance monte.',
        },
      ],
    },
    pt: {
      title: 'Precisão do tap BPM. Como firmar a leitura',
      description: 'Quão preciso é bater no ritmo para medir o BPM? Dicas práticas para reduzir a oscilação e ficar a uns ±1–2 BPM do tempo real.',
      h1: 'Quão preciso é bater no ritmo para medir o BPM?',
      lead: 'A ferramenta mede os seus toques, não o arquivo de áudio. Com a mão firme, o valor já serve para produzir e para ensaiar.',
      sections: [
        {
          h2: 'O que é “bom o bastante”',
          paragraphs: [
            'Com 8–12 toques constantes, a maioria fica a uns ±1–2 BPM do tempo real. Serve para a grade do DAW, para o sync do delay e para o ensaio.',
            'A mão sempre oscila alguns milissegundos, mas a média absorve os erros pequenos se você mantiver o mesmo tempo.',
          ],
        },
        {
          h2: 'Técnica que firma a leitura',
          paragraphs: [
            'Toque uma camada só, o kick ou o snare. Ignore os fills, os rolls e o ritmo do vocal.',
            'Continue até a interface mostrar Estável. Se errar, toque em Reiniciar e comece uma série nova em vez de tentar “consertar” uma média ruim.',
          ],
        },
        {
          h2: 'Cheque como em estúdio',
          paragraphs: [
            'Ligue o metrônomo no BPM medido. Se o clique descolar da música, use ÷2/×2 ou bata de novo.',
            'Com swing ou banda ao vivo, espere mais variação: faça mais toques ou pegue o BPM inteiro mais próximo e ajuste de ouvido.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Bater no ritmo dá um BPM exato?',
          a: 'É uma estimativa do seu timing. Grade eletrônica limpa é a mais fácil; swing e bateria ao vivo pedem mais toques.',
        },
        {
          q: 'Teclado ou pad na tela?',
          a: 'Aquele em que você bate mais uniforme. Muita gente fica mais estável na barra de espaço do que num alvo de toque pequeno.',
        },
        {
          q: 'Por que o número não para de mexer?',
          a: 'Os primeiros toques variam mais. Mantenha o ritmo: a média móvel acalma conforme a confiança sobe.',
        },
      ],
    },
    zh: {
      title: '点击测 BPM 的准确度：如何得到稳定读数',
      description: '点击测 BPM 到底准不准？用这些实用技巧减少手上的抖动，把误差控制在真实速度的 ±1–2 BPM 左右。',
      h1: '点击测 BPM 准不准？',
      lead: '工具测的是你的点击，而不是音频文件。手法稳定的话，得到的数字对制作和练习来说通常已经足够。',
      sections: [
        {
          h2: '“够准”是什么意思',
          paragraphs: [
            '稳定点击 8–12 次，大多数人能落在真实速度的 ±1–2 BPM 以内。用于 DAW 网格、延迟同步和排练都够了。',
            '人手的节奏总会有几毫秒的抖动，但只要你一直点同一层拍子，取平均就能抵消这些小误差。',
          ],
        },
        {
          h2: '让读数变稳的手法',
          paragraphs: [
            '只点固定的一层：底鼓或军鼓。加花、滚奏和人声节奏都别管。',
            '一直点到界面显示“已稳定”。中途乱了就按“重置”重新来一轮，不要跟一个已经跑偏的平均值较劲。',
          ],
        },
        {
          h2: '像在录音棚里那样交叉验证',
          paragraphs: [
            '用测到的 BPM 启动节拍器。如果节拍器和曲子逐渐错开，就用 ÷2/×2 调整，或者重新点一遍。',
            '摇摆节奏和现场乐队的浮动更大。多点几下，或者取最接近的整数 BPM 再用耳朵微调。',
          ],
        },
      ],
      faqs: [
        {
          q: '点击测出的 BPM 是精确值吗？',
          a: '它是根据你的节奏得出的估算值。干净的电子网格最容易；摇摆节奏和真鼓需要点更多次。',
        },
        {
          q: '该用键盘还是面板？',
          a: '哪个能点得更均匀就用哪个。很多人按空格键比点小小的触摸区域更稳。',
        },
        {
          q: '数字为什么一直在变？',
          a: '最初几次点击的离散度很大。保持稳定的节奏，随着可信度上升，滑动平均会慢慢定下来。',
        },
      ],
    },
  },
  {
    slug: 'bpm-to-milliseconds',
    order: 3,
    ctaBpm: 120,
    en: {
      title: 'BPM to Milliseconds. Delay Calculator',
      description: 'Convert BPM to milliseconds for delay and note lengths. Quarters, dotted values, triplets. With tap-to-set BPM built in.',
      h1: 'BPM to milliseconds',
      lead: 'One beat in ms is 60,000 ÷ BPM. From that quarter-note length you can derive every common delay subdivision.',
      sections: [
        {
          h2: 'The core formula',
          paragraphs: [
            'Milliseconds per quarter note = 60,000 ÷ BPM. At 120 BPM that’s 500 ms; at 100 BPM it’s 600 ms.',
            'Halve for eighths, halve again for sixteenths. Multiply by 1.5 for dotted values; triplets divide the beat into three.',
          ],
        },
        {
          h2: 'What you’d use this for',
          paragraphs: [
            'Lock delay throws, slapback, and other rhythmic effects to the song grid without guessing.',
            'Tap the track on the delay page, then copy the cell you need: 1/8, 1/8 dotted, and 1/4 triplet are common picks.',
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
          q: 'Dotted vs triplet. Which should I use?',
          a: 'Dotted 1/8 is a classic slapback/groove delay. Triplets fit swung or triplet-based parts. Trust your ear after copying.',
        },
        {
          q: 'Do I need to calculate by hand?',
          a: 'No. The BPM delay calculator lists common note lengths and copies in one click.',
        },
      ],
    },
    ru: {
      title: 'BPM в миллисекунды. Калькулятор delay',
      description: 'Переведи BPM в миллисекунды для delay: четверти, восьмые, пунктирные длительности и триоли. Темп можно натапать прямо на странице.',
      h1: 'BPM в миллисекунды',
      lead: 'Одна доля в миллисекундах — это 60 000 ÷ BPM. От длины четверти считаются все обычные подразделения delay.',
      sections: [
        {
          h2: 'Базовая формула',
          paragraphs: [
            'Миллисекунды на четверть = 60 000 ÷ BPM. При 120 BPM это 500 ms, при 100 BPM — 600 ms.',
            'Дели пополам для восьмых и ещё раз для шестнадцатых. Пунктир — это ×1,5, а триоли делят долю на три.',
          ],
        },
        {
          h2: 'Зачем это в студии',
          paragraphs: [
            'Синхронизируй delay, slapback и похожий тайминг с сеткой трека, не подбирая цифры на глаз.',
            'Натапай темп на странице delay и копируй нужную ячейку. Чаще всего берут 1/8, пунктирную 1/8 или триоль 1/4.',
          ],
        },
        {
          h2: 'Связка с метрономом и тапом',
          paragraphs: [
            'Измерь BPM на главной, проверь метрономом, затем открой delay с тем же ?bpm=.',
            'Если грув в half-time, сначала жми ÷2/×2, а потом смотри таблицу ms — иначе она ляжет не на ту сетку.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Какой delay у 1/8 при 128 BPM?',
          a: 'Четверть ≈ 468,75 ms, значит прямая 1/8 ≈ 234,4 ms. Точные значения копируй из таблицы.',
        },
        {
          q: 'Пунктир или триоль?',
          a: 'Пунктирная 1/8 — классика slapback и грува. Триоли берут для свингованных и триольных партий. После копирования доверяй уху.',
        },
        {
          q: 'Считать вручную?',
          a: 'Не нужно. Калькулятор delay сам показывает длительности и копирует значение в один клик.',
        },
      ],
    },
    es: {
      title: 'BPM a milisegundos. Calculadora de delay',
      description: 'Convierte BPM a milisegundos para el delay: negras, corcheas, puntillo y tresillos. Con el tap BPM en la misma página, sin calcular a mano.',
      h1: 'BPM a milisegundos',
      lead: 'Un tiempo en milisegundos es 60.000 ÷ BPM. A partir de la negra sacas cualquier subdivisión de delay habitual.',
      sections: [
        {
          h2: 'La fórmula de base',
          paragraphs: [
            'Milisegundos por negra = 60.000 ÷ BPM. A 120 BPM son 500 ms; a 100 BPM, 600 ms.',
            'Divide a la mitad para las corcheas y otra vez para las semicorcheas. Multiplica por 1,5 para el puntillo; los tresillos parten el tiempo en tres.',
          ],
        },
        {
          h2: 'Para qué sirve en el estudio',
          paragraphs: [
            'Sincroniza los delays, el slapback y cualquier efecto rítmico con la rejilla de la canción, sin adivinar valores.',
            'Toca el tema en la página de delay y copia la celda que necesites: 1/8, 1/8 con puntillo y tresillo de 1/4 son las opciones más habituales.',
          ],
        },
        {
          h2: 'Junto con metrónomo y tap',
          paragraphs: [
            'Mide el BPM en la herramienta principal, confírmalo con el metrónomo y salta a delay con el mismo ?bpm=.',
            'Si la sensación es half-time, convierte después de ÷2/×2 para que la tabla de ms coincida con la rejilla que quieres de verdad.',
          ],
        },
      ],
      faqs: [
        {
          q: '¿Cuántos ms dura una corchea a 128 BPM?',
          a: 'La negra ≈ 468,75 ms, así que una 1/8 recta ≈ 234,4 ms. Copia el valor exacto de la tabla de delay.',
        },
        {
          q: '¿Puntillo o tresillo?',
          a: 'La 1/8 con puntillo es el clásico del slapback y del groove. Los tresillos encajan en partes con swing o en tresillo. Después de copiar, fíate del oído.',
        },
        {
          q: '¿Hay que calcular a mano?',
          a: 'No. La calculadora de delay BPM lista las duraciones habituales y las copia en un clic.',
        },
      ],
    },
    fr: {
      title: 'BPM en millisecondes. Calculateur de delay',
      description: 'Convertissez le BPM en millisecondes pour vos delays et vos durées de notes : noires, croches, pointées, triolets. Avec le tap BPM intégré.',
      h1: 'BPM en millisecondes',
      lead: 'Un temps en millisecondes, c’est 60 000 ÷ BPM. À partir de la noire, vous dérivez toutes les subdivisions de delay courantes.',
      sections: [
        {
          h2: 'La formule de base',
          paragraphs: [
            'Millisecondes par noire = 60 000 ÷ BPM. À 120 BPM : 500 ms. À 100 BPM : 600 ms.',
            'Divisez par deux pour les croches, puis encore une fois pour les doubles-croches. ×1,5 pour les pointées ; les triolets coupent le temps en trois.',
          ],
        },
        {
          h2: 'À quoi ça sert en studio',
          paragraphs: [
            'Alignez vos delays, votre slapback et tous les effets rythmiques sur la grille du morceau, sans inventer les chiffres.',
            'Tapez le morceau sur la page delay, puis copiez la cellule voulue : 1/8, 1/8 pointée et triolet de 1/4 reviennent le plus souvent.',
          ],
        },
        {
          h2: 'Avec le métronome et le tap',
          paragraphs: [
            'Mesurez le BPM sur l’accueil, confirmez au métronome, puis ouvrez Delay avec le même ?bpm=.',
            'Si le feeling est half-time, convertissez après ÷2/×2 : sinon le tableau de ms ne collera pas à la grille que vous voulez vraiment.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Quel temps de delay pour une croche à 128 BPM ?',
          a: 'La noire ≈ 468,75 ms, donc une 1/8 droite ≈ 234,4 ms. Copiez les valeurs exactes dans le tableau delay.',
        },
        {
          q: 'Pointée ou triolet ?',
          a: 'La 1/8 pointée, c’est le classique du slapback et du groove. Les triolets vont mieux sur des parties swinguées ou en triolet. Après la copie, fiez-vous à l’oreille.',
        },
        {
          q: 'Faut-il calculer à la main ?',
          a: 'Non. Le calculateur de delay BPM liste les durées courantes et les copie en un clic.',
        },
      ],
    },
    pt: {
      title: 'BPM em milissegundos. Calculadora de delay',
      description: 'Converta BPM em milissegundos para delay e duração de nota: semínima, colcheia, figuras com ponto e tercinas. Com o tap BPM na mesma página.',
      h1: 'BPM em milissegundos',
      lead: 'Um tempo em milissegundos é 60.000 ÷ BPM. Da duração da semínima saem todas as subdivisões comuns de delay.',
      sections: [
        {
          h2: 'A fórmula base',
          paragraphs: [
            'Milissegundos por semínima = 60.000 ÷ BPM. A 120 BPM são 500 ms; a 100 BPM, 600 ms.',
            'Divida pela metade para a colcheia e de novo para a semicolcheia. Multiplique por 1,5 para as figuras com ponto; a tercina divide o tempo em três.',
          ],
        },
        {
          h2: 'Uso no estúdio',
          paragraphs: [
            'Sincronize delay, slapback e outros efeitos rítmicos com a grade da música, sem chutar valores.',
            'Bata o tempo da música na página de delay e copie a célula que precisar: 1/8, 1/8 com ponto e tercina de 1/4 são as escolhas mais comuns.',
          ],
        },
        {
          h2: 'Junte metrônomo e tap',
          paragraphs: [
            'Meça o BPM na página inicial, confira no metrônomo e abra o delay com o mesmo ?bpm=.',
            'Se o feel for half-time, converta depois de ÷2/×2: só assim a tabela de ms bate com a grade que você quer.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Qual o delay de uma colcheia a 128 BPM?',
          a: 'A semínima ≈ 468,75 ms, então a 1/8 reta ≈ 234,4 ms. Copie o valor exato na tabela de delay.',
        },
        {
          q: 'Com ponto ou tercina?',
          a: 'A 1/8 com ponto é o clássico do slapback e do groove. A tercina encaixa em partes com swing ou em tercina. Depois de copiar, confie no ouvido.',
        },
        {
          q: 'Preciso calcular na mão?',
          a: 'Não. A calculadora de delay BPM lista as durações comuns e copia em um clique.',
        },
      ],
    },
    zh: {
      title: 'BPM 换算毫秒 · 延迟计算器',
      description: '把 BPM 换算成延迟和音符长度的毫秒值：四分音符、附点、三连音，页面上还能直接点击设定速度。',
      h1: 'BPM 换算毫秒',
      lead: '一拍的毫秒数是 60000 ÷ BPM。有了四分音符的长度，常见的延迟细分都能推算出来。',
      sections: [
        {
          h2: '核心公式',
          paragraphs: [
            '每个四分音符的毫秒数 = 60000 ÷ BPM。120 BPM 下是 500 毫秒，100 BPM 下是 600 毫秒。',
            '除以二得到八分音符，再除以二得到十六分音符。乘以 1.5 得到附点时值；三连音则把一拍分成三份。',
          ],
        },
        {
          h2: '什么时候用得上',
          paragraphs: [
            '让延迟回声、slapback 和其他节奏类效果精确对上曲子的网格，不用靠猜。',
            '在延迟页面上点出曲子的速度，然后复制需要的数值：1/8、附点 1/8 和 1/4 三连是最常用的几个。',
          ],
        },
        {
          h2: '搭配节拍器和点击工具',
          paragraphs: [
            '在首页工具上测出 BPM，用节拍器确认，再带着同一个 ?bpm= 跳到延迟页面。',
            '如果律动是半速的，先按 ÷2/×2 再换算，毫秒表格才会对上你真正想要的网格。',
          ],
        },
      ],
      faqs: [
        {
          q: '128 BPM 下八分音符的延迟时间是多少？',
          a: '四分音符约 468.75 毫秒，所以普通 1/8 约 234.4 毫秒。精确数值可以直接从延迟表里复制。',
        },
        {
          q: '附点还是三连音？',
          a: '附点 1/8 是经典的 slapback 和律动延迟。三连音适合摇摆或以三连为基础的声部。复制之后，还是相信自己的耳朵。',
        },
        {
          q: '需要手算吗？',
          a: '不用。BPM 延迟计算器会列出常用音符时值，一键即可复制。',
        },
      ],
    },
  },
  {
    slug: 'half-time-double-time',
    order: 4,
    ctaBpm: 140,
    en: {
      title: 'Half-Time & Double-Time BPM. ÷2 and ×2',
      description: 'Why your tap BPM looks half or double. And how to choose the written tempo vs the felt beat for DAW and DJ work.',
      h1: 'Half-time and double-time BPM',
      lead: 'The “right” BPM is the one that matches the grid you want. ÷2 and ×2 flip between felt beat and written tempo.',
      sections: [
        {
          h2: 'Felt beat vs written tempo',
          paragraphs: [
            'Dubstep and trap often feel ~70–80 BPM but are written at ~140–160. DnB can feel half of 170+. Salsa may feel half of ~200.',
            'Neither number is wrong. Producers pick the grid that makes editing and drum programming easier.',
          ],
        },
        {
          h2: 'How to decide in 10 seconds',
          paragraphs: [
            'Tap what you naturally nod to. Start the metronome. If the click is twice as busy as the song’s groove, press ÷2; if it feels sluggish, press ×2.',
            'Check hi-hats and percussion: if they clearly subdivide your taps by two, you’re probably on the slower feel.',
          ],
        },
        {
          h2: 'Workflow on BPM Tap',
          paragraphs: [
            'Stabilize a reading on the home tool, flip ÷2/×2, then jump to metronome or delay with ?bpm= so every page shares the choice.',
            'Genre pages note common half-time habits. Use them as a hint, then trust the metronome against the track.',
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
          a: 'Yes. You can tap a stable half-time beat. Stability ≠ correct grid. Confirm with metronome and what your arrangement needs.',
        },
      ],
    },
    ru: {
      title: 'Half-time и double-time BPM. Когда жать ÷2 и ×2',
      description: 'Почему tap BPM выходит вдвое меньше или больше и как выбрать между письменным темпом и ощущаемым ритмом для DAW и диджейского сета.',
      h1: 'Half-time и double-time BPM',
      lead: '«Правильный» BPM — тот, что совпадает с нужной тебе сеткой. Кнопки ÷2 и ×2 переключают между ощущаемым ритмом и письменным темпом.',
      sections: [
        {
          h2: 'Ощущаемый ритм и письменный темп',
          paragraphs: [
            'Dubstep и trap часто ощущаются как ~70–80 BPM, а пишутся в ~140–160. DnB может ощущаться как половина от 170+, а salsa — как половина от ~200.',
            'Ни одно из чисел не ошибочно: продюсеры берут ту сетку, в которой удобнее править аранжировку и программировать барабаны.',
          ],
        },
        {
          h2: 'Как решить за 10 секунд',
          paragraphs: [
            'Натапай то, под что киваешь головой, и запусти метроном. Клик суетится вдвое чаще грува — жми ÷2. Еле тянется — ×2.',
            'Смотри на хэты и перкуссию: если они явно делят твои тапы пополам, ты в более медленном feel.',
          ],
        },
        {
          h2: 'Рабочий поток в BPM Tap',
          paragraphs: [
            'Стабилизируй значение на главной, переключи ÷2/×2, а затем открой метроном или delay с ?bpm=: выбранный темп подхватят все страницы.',
            'На страницах жанров есть подсказки про half-time. Бери их как ориентир, но финальное решение принимай, сверив метроном с треком.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Какой BPM брать диджею — ощущаемый или письменный?',
          a: 'Тот, который ждут твоя библиотека и sync. Единый стандарт по всей коллекции важнее теории.',
        },
        {
          q: 'Почему ×2 важен для delay?',
          a: 'Миллисекунды считаются от выбранного BPM. Неверная «октава» темпа — неверные длительности во всей таблице.',
        },
        {
          q: 'Может ли значение стать стабильным на «неверной октаве»?',
          a: 'Да. Half-time тапается так же ровно, поэтому «Стабильно» не значит «нужная сетка». Сверь с метрономом и с тем, что нужно аранжировке.',
        },
      ],
    },
    es: {
      title: 'BPM half-time y double-time. Cuándo usar ÷2 y ×2',
      description: 'Por qué el tap BPM sale a la mitad o al doble y cómo elegir entre el tempo escrito y el ritmo que sientes, tanto en el DAW como en un set.',
      h1: 'BPM half-time y double-time',
      lead: 'El BPM «correcto» es el que coincide con la rejilla que quieres. Los botones ÷2 y ×2 cambian entre el ritmo que sientes y el tempo escrito.',
      sections: [
        {
          h2: 'Ritmo sentido y tempo escrito',
          paragraphs: [
            'El dubstep y el trap se sienten a ~70–80 BPM pero se escriben a ~140–160. El DnB puede sentirse como la mitad de 170+, y la salsa como la mitad de ~200.',
            'Ningún número está mal: eliges la rejilla que te facilita editar y programar la batería.',
          ],
        },
        {
          h2: 'Cómo decidir en 10 segundos',
          paragraphs: [
            'Toca aquello que te hace mover la cabeza y arranca el metrónomo. Si el clic va al doble de movido que el groove, presiona ÷2; si suena lento, ×2.',
            'Fíjate en los hats y la percusión: si subdividen tus taps claramente por dos, es casi seguro que estás en el feel más lento.',
          ],
        },
        {
          h2: 'Flujo en BPM Tap',
          paragraphs: [
            'Estabiliza el valor en la página de inicio, cambia ÷2/×2 y salta al metrónomo o a delay con ?bpm=: así todas las páginas trabajan con la misma elección.',
            'Las páginas de género avisan de los hábitos half-time más comunes. Úsalas como orientación y luego confirma con el metrónomo sobre la canción.',
          ],
        },
      ],
      faqs: [
        {
          q: '¿Los DJs usan el BPM sentido o el escrito?',
          a: 'El que esperen tu biblioteca y tus herramientas de sync. La coherencia en toda tu colección importa más que la teoría.',
        },
        {
          q: '¿Por qué importa ×2 para el delay?',
          a: 'Los ms de delay se calculan a partir del BPM que elijas: si el tempo está en la «octava» equivocada, toda la tabla de duraciones sale mal.',
        },
        {
          q: '¿Puede salir Estable en la «octava» equivocada?',
          a: 'Sí. Un half-time también se toca de forma estable, así que Estable no significa rejilla correcta. Confírmalo con el metrónomo y con lo que pida el arreglo.',
        },
      ],
    },
    fr: {
      title: 'BPM half-time et double-time : ÷2 et ×2',
      description: 'Pourquoi votre tap BPM semble moitié ou double, et comment choisir entre tempo écrit et rythme ressenti pour le DAW comme pour le mix DJ.',
      h1: 'BPM half-time et double-time',
      lead: 'Le « bon » BPM, c’est celui qui colle à la grille que vous voulez. Les touches ÷2 et ×2 font passer du rythme ressenti au tempo écrit.',
      sections: [
        {
          h2: 'Rythme ressenti et tempo écrit',
          paragraphs: [
            'Dubstep et trap se ressentent souvent autour de ~70–80 BPM mais s’écrivent à ~140–160. Le DnB peut sembler la moitié de 170+, et la salsa la moitié de ~200.',
            'Aucun des deux chiffres n’est faux : les producteurs choisissent la grille la plus pratique pour éditer et programmer la batterie.',
          ],
        },
        {
          h2: 'Décider en 10 secondes',
          paragraphs: [
            'Tapez ce sur quoi vous hochez naturellement la tête, puis lancez le métronome. Si le clic est deux fois plus agité que le groove, appuyez sur ÷2 ; s’il traîne, appuyez sur ×2.',
            'Regardez les hi-hats et les percussions : s’ils divisent clairement vos taps par deux, vous êtes sans doute sur le feeling le plus lent.',
          ],
        },
        {
          h2: 'Le flux sur BPM Tap',
          paragraphs: [
            'Stabilisez le chiffre sur l’accueil, basculez ÷2/×2, puis ouvrez le métronome ou Delay avec le même ?bpm= : toutes les pages reprennent votre choix.',
            'Les pages de genre signalent les habitudes half-time les plus courantes. Prenez-les comme indice, puis tranchez au métronome, face au morceau.',
          ],
        },
      ],
      faqs: [
        {
          q: 'En DJ, faut-il le BPM ressenti ou écrit ?',
          a: 'Alignez-vous sur ce qu’attendent votre bibliothèque et vos outils de sync. La cohérence sur l’ensemble de vos morceaux compte plus que la théorie.',
        },
        {
          q: 'Pourquoi ×2 compte-t-il pour le delay ?',
          a: 'Les ms de delay découlent du BPM choisi : mauvaise « octave » de tempo, mauvaises durées dans tout le tableau.',
        },
        {
          q: 'La confiance peut-elle être haute sur la mauvaise octave ?',
          a: 'Oui. Un rythme half-time se tape très bien de façon stable : Stable ne veut pas dire bonne grille. Confirmez au métronome et selon ce dont l’arrangement a besoin.',
        },
      ],
    },
    pt: {
      title: 'BPM half-time e double-time. Quando usar ÷2 e ×2',
      description: 'Por que o tap BPM parece metade ou o dobro e como escolher entre o tempo escrito e o ritmo sentido, tanto no DAW quanto no set de DJ.',
      h1: 'BPM half-time e double-time',
      lead: 'O BPM “certo” é o que bate com a grade que você quer. Os botões ÷2 e ×2 alternam entre o ritmo sentido e o tempo escrito.',
      sections: [
        {
          h2: 'Ritmo sentido e tempo escrito',
          paragraphs: [
            'Dubstep e trap costumam parecer ~70–80 BPM, mas são escritos em ~140–160. O DnB pode parecer metade de 170+, e a salsa, metade de ~200.',
            'Nenhum dos dois números está errado: o produtor escolhe a grade que facilita editar e programar a bateria.',
          ],
        },
        {
          h2: 'Como decidir em 10 segundos',
          paragraphs: [
            'Bata no tempo em que a sua cabeça balança sozinha e ligue o metrônomo. Se o clique correr o dobro do groove, aperte ÷2; se arrastar, ×2.',
            'Olhe os hats e a percussão: se eles dividem os seus toques claramente por dois, você está no feel mais lento.',
          ],
        },
        {
          h2: 'Fluxo no BPM Tap',
          paragraphs: [
            'Firme o valor na página inicial, alterne ÷2/×2 e vá para o metrônomo ou o delay com o mesmo ?bpm=: todas as páginas seguem a sua escolha.',
            'As páginas de gênero apontam os hábitos de half-time mais comuns. Use como dica e decida ouvindo o metrônomo junto com a música.',
          ],
        },
      ],
      faqs: [
        {
          q: 'DJ usa o BPM sentido ou o escrito?',
          a: 'O que a sua biblioteca e o sync esperam. Manter o mesmo critério em todo o acervo importa mais que teoria.',
        },
        {
          q: 'Por que ×2 importa no delay?',
          a: 'Os ms de delay saem do BPM escolhido: com a oitava de tempo errada, toda a tabela de durações sai errada.',
        },
        {
          q: 'A confiança pode estar alta na oitava “errada”?',
          a: 'Sim. Half-time também dá para bater de forma estável, então Estável não quer dizer grade certa. Confira no metrônomo e no que o arranjo precisa.',
        },
      ],
    },
    zh: {
      title: '半速与倍速 BPM · 什么时候按 ÷2 和 ×2',
      description: '为什么点出来的 BPM 是一半或两倍，以及在 DAW 和 DJ 场景里该选记谱速度还是体感律动。',
      h1: '半速与倍速 BPM',
      lead: '“正确”的 BPM，是能对上你想要的那个网格的 BPM。÷2 和 ×2 就是在体感律动和记谱速度之间来回切换。',
      sections: [
        {
          h2: '体感律动与记谱速度',
          paragraphs: [
            'Dubstep 和 trap 听起来常常像 ~70–80 BPM，但记谱是 ~140–160。DnB 可能感觉是 170+ 的一半，salsa 可能感觉是 ~200 的一半。',
            '两个数字都不算错。制作人会挑那个更方便编辑和编写鼓组的网格。',
          ],
        },
        {
          h2: '十秒内做出判断',
          paragraphs: [
            '跟着你自然点头的那个拍子点击，然后启动节拍器。如果节拍器比曲子的律动密一倍，按 ÷2；如果显得拖沓，按 ×2。',
            '留意踩镲和打击乐：如果它们明显把你的点击再对半细分，那你多半在较慢的那个体感上。',
          ],
        },
        {
          h2: 'BPM Tap 上的工作流',
          paragraphs: [
            '先在首页工具上点出一个稳定读数，切换 ÷2/×2，再带着 ?bpm= 跳到节拍器或延迟计算，这样每个页面用的都是同一个选择。',
            '曲风页面会标出常见的半速习惯。把它当作提示，最终还是用节拍器对着曲子来定。',
          ],
        },
      ],
      faqs: [
        {
          q: 'DJ 应该用体感 BPM 还是记谱 BPM？',
          a: '跟着你的曲库和同步工具的预期走。整个曲库保持一致，比理论上哪个更对更重要。',
        },
        {
          q: '为什么 ×2 对延迟很关键？',
          a: '延迟的毫秒数是根据你选的 BPM 算出来的。速度选错“八度”，整张时值表就都错了。',
        },
        {
          q: '选错“八度”时读数也会显示已稳定吗？',
          a: '会。半速的拍子同样可以点得很稳，所以“已稳定”不等于网格正确。用节拍器核对，并看你的编曲需要哪一种。',
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
      description: 'Find song BPM with your microphone: open Listen mode, point at a speaker, wait for a live tempo estimate, then confirm with ÷2/×2, metronome, or tap. No upload.',
      h1: 'Find a song’s BPM with a microphone',
      lead: 'When you can’t tap evenly, or your hands are busy, Listen mode estimates tempo from what the mic hears. The reading works the same way as a tap: copy, metronome, delay.',
      sections: [
        {
          h2: 'Open Listen and allow the mic',
          paragraphs: [
            'Go to Listen on bpm-tap.com and start listening. Grant microphone access when the browser asks. Without it the tool can’t hear the track.',
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
            'When it locks, copy the BPM, open Delay for ms values, or share a ?bpm= link. Same workflow as tapping the beat on the home tool.',
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
          a: 'Tempo estimators often pick the other octave of the beat. Use ÷2 / ×2, try an alternate candidate if shown, then confirm with the metronome.',
        },
      ],
    },
    ru: {
      title: 'Как узнать BPM песни через микрофон',
      description: 'Как узнать BPM песни через микрофон: открой Listen, наведи телефон на колонку, дождись оценки темпа и проверь её метрономом или тапом. Без загрузки файла.',
      h1: 'Узнать BPM песни через микрофон',
      lead: 'Когда тапать неудобно или руки заняты, Listen оценивает темп по звуку с микрофона. Дальше всё как при тапе: копирование, метроном, delay.',
      sections: [
        {
          h2: 'Открой Listen и разреши микрофон',
          paragraphs: [
            'Открой Listen на bpm-tap.com и запусти прослушивание. Разреши доступ к микрофону, когда браузер спросит: без него инструмент не услышит трек.',
            'Звук остаётся в браузере. Ничего никуда не загружается: страница считает BPM только на твоём устройстве.',
          ],
        },
        {
          h2: 'Дай микрофону чистый сигнал',
          paragraphs: [
            'Включи трек на колонке или телефоне и поднеси устройство ближе к источнику. Тихие динамики ноутбука и шум в комнате сбивают любой детектор.',
            'Электронные треки с явным kick стабилизируются быстрее. Дай несколько секунд, пока значение не устоится, а потом проверь ÷2 / ×2, если ритм кажется вдвое медленнее или быстрее.',
          ],
        },
        {
          h2: 'Проверь и используй цифру',
          paragraphs: [
            'Запусти метроном на измеренном BPM. Если клик плывёт относительно трека, жми ÷2/×2 или переключись на Tap и уточни руками.',
            'Когда сошлось — копируй BPM, открой Delay для миллисекунд или отправь ссылку с ?bpm=. Дальше всё так же, как при тапе на главной.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Можно узнать BPM без тапа?',
          a: 'Да, Listen определяет темп с микрофона. Tap всё равно пригодится: уточнить значение или когда в комнате слишком шумно для чистого сигнала.',
        },
        {
          q: 'Звук с микрофона куда-то уходит?',
          a: 'Нет. Анализ идёт только в браузере: BPM Tap не загружает аудио с микрофона.',
        },
        {
          q: 'Почему BPM вдвое меньше или больше?',
          a: 'Алгоритмы определения темпа часто берут другую «октаву» ритма. Жми ÷2 / ×2, выбери альтернативный вариант, если он есть, и сверься с метрономом.',
        },
      ],
    },
    es: {
      title: 'Cómo saber el BPM de una canción con el micrófono',
      description: 'Saca el BPM con el micrófono: abre Listen, apunta al altavoz, espera la estimación en vivo y confírmala con ÷2/×2, metrónomo o tap. Sin subir archivos.',
      h1: 'Saber el BPM de una canción con el micrófono',
      lead: 'Cuando no consigues marcar el beat con regularidad, o tienes las manos ocupadas, Listen estima el tempo a partir de lo que oye el micrófono. El resultado se usa igual que el del tap: copiar, metrónomo, delay.',
      sections: [
        {
          h2: 'Abre Listen y permite el micrófono',
          paragraphs: [
            'Entra en Listen en bpm-tap.com y empieza a escuchar. Permite el acceso al micrófono cuando el navegador lo pida: sin eso la herramienta no oye la pista.',
            'El audio se queda en tu navegador. No se sube nada: la página solo usa la señal del micrófono para estimar el BPM en tu dispositivo.',
          ],
        },
        {
          h2: 'Dale una señal clara al micrófono',
          paragraphs: [
            'Pon la canción en un altavoz o en el teléfono y acerca el dispositivo a la fuente. Los altavoces integrados y las habitaciones ruidosas empeoran cualquier detector de onsets o de energía.',
            'Las pistas electrónicas con un kick claro se fijan antes. Dale unos segundos hasta que el valor parezca estable y luego revisa ÷2 / ×2 si la sensación es de la mitad o del doble.',
          ],
        },
        {
          h2: 'Confirma y usa el número',
          paragraphs: [
            'Arranca el metrónomo con el BPM medido. Si el clic se desvía de la pista, cambia ÷2/×2 o pasa a Tap y afina a mano.',
            'Cuando encaje, copia el BPM, abre Delay para ver los ms o comparte un enlace con ?bpm=. Es el mismo flujo que tocar el beat en la página de inicio.',
          ],
        },
      ],
      faqs: [
        {
          q: '¿Puedo saber el BPM sin tocar el beat?',
          a: 'Sí. Listen detecta el tempo con el micrófono. El tap sigue siendo útil para afinar el valor o cuando la sala tiene demasiado ruido.',
        },
        {
          q: '¿El audio del micrófono sale de mi dispositivo?',
          a: 'No. El análisis se hace en el navegador: BPM Tap no sube el audio del micrófono.',
        },
        {
          q: '¿Por qué el BPM sale a la mitad o al doble de lo que esperaba?',
          a: 'Los estimadores de tempo suelen tomar la otra «octava» del ritmo. Usa ÷2 / ×2, prueba el candidato alternativo si aparece y confirma con el metrónomo.',
        },
      ],
    },
    fr: {
      title: 'Trouver le BPM d’une chanson avec un micro',
      description: 'Trouvez le BPM au micro : ouvrez Listen, pointez une enceinte, attendez l’estimation en direct, puis confirmez avec ÷2/×2, le métronome ou le tap.',
      h1: 'Trouver le BPM d’une chanson avec un micro',
      lead: 'Quand taper n’est pas pratique ou que vous avez les mains prises, Listen estime le tempo à partir de ce que le micro entend. Le chiffre s’utilise ensuite comme celui du tap : copier, métronome, delay.',
      sections: [
        {
          h2: 'Ouvrez Listen et autorisez le micro',
          paragraphs: [
            'Allez sur Listen sur bpm-tap.com et lancez l’écoute. Autorisez le micro quand le navigateur le demande : sans cela, l’outil n’entend pas le morceau.',
            'L’audio reste dans le navigateur. Rien n’est envoyé : la page se sert du flux micro uniquement pour estimer le BPM sur votre appareil.',
          ],
        },
        {
          h2: 'Donnez un signal clair au micro',
          paragraphs: [
            'Jouez le morceau sur une enceinte ou un téléphone et rapprochez l’appareil de la source. Les petits haut-parleurs de laptop et une pièce bruyante rendent n’importe quel détecteur moins fiable.',
            'Les tracks électro avec un kick net se calent en général plus vite. Laissez passer quelques secondes jusqu’à un chiffre stable, puis vérifiez ÷2 / ×2 si le feeling semble moitié ou double.',
          ],
        },
        {
          h2: 'Confirmez, puis utilisez le chiffre',
          paragraphs: [
            'Lancez le métronome sur le BPM mesuré. Si le clic dérive, basculez ÷2/×2 ou passez en Tap pour affiner à la main.',
            'Quand ça colle, copiez le BPM, ouvrez Delay pour les valeurs en ms, ou partagez un lien avec ?bpm=. C’est le même flux que le tap sur l’accueil.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Peut-on trouver le BPM sans taper ?',
          a: 'Oui, Listen détecte le tempo depuis le micro. Le tap reste utile pour affiner le chiffre, ou quand la pièce est trop bruyante pour un signal propre.',
        },
        {
          q: 'L’audio du micro quitte-t-il mon appareil ?',
          a: 'Non. L’analyse tourne dans le navigateur : BPM Tap n’envoie pas l’audio du micro.',
        },
        {
          q: 'Pourquoi le BPM est-il moitié ou double de ce que j’attends ?',
          a: 'Les estimateurs de tempo prennent souvent l’autre octave du rythme. Utilisez ÷2 / ×2, essayez le candidat alternatif s’il apparaît, puis confirmez au métronome.',
        },
      ],
    },
    pt: {
      title: 'Como descobrir o BPM de uma música com microfone',
      description: 'Descubra o BPM com o microfone: abra o Listen, aponte para a caixa de som, espere a estimativa ao vivo e confira com ÷2/×2, metrônomo ou tap. Sem upload.',
      h1: 'Descobrir o BPM de uma música com microfone',
      lead: 'Quando não dá para bater no ritmo com regularidade, ou as mãos estão ocupadas, o Listen estima o tempo pelo áudio que o microfone capta. O valor se usa igual ao do tap: copiar, metrônomo, delay.',
      sections: [
        {
          h2: 'Abra o Listen e permita o microfone',
          paragraphs: [
            'Vá em Listen no bpm-tap.com e comece a escutar. Permita o acesso ao microfone quando o navegador pedir: sem isso a ferramenta não ouve a música.',
            'O áudio fica no navegador. Nada é enviado: a página usa o sinal do microfone só para estimar o BPM no seu aparelho.',
          ],
        },
        {
          h2: 'Dê um sinal limpo ao microfone',
          paragraphs: [
            'Toque a música numa caixa de som ou no celular e aproxime o aparelho da fonte. Caixas fracas de notebook e salas barulhentas atrapalham qualquer detector de onset ou de energia.',
            'Faixas eletrônicas com kick claro costumam firmar mais rápido. Dê alguns segundos até o valor parecer estável e depois cheque ÷2 / ×2 se a sensação for de metade ou do dobro.',
          ],
        },
        {
          h2: 'Confira e use o número',
          paragraphs: [
            'Ligue o metrônomo no BPM medido. Se o clique descolar da música, alterne ÷2/×2 ou mude para Tap e afine na mão.',
            'Quando encaixar, copie o BPM, abra o Delay para ver os ms ou mande um link com ?bpm=. É o mesmo fluxo de bater no ritmo na página inicial.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Dá para descobrir o BPM sem bater no ritmo?',
          a: 'Sim. O Listen detecta o tempo pelo microfone. O tap continua útil para afinar o valor ou quando a sala está barulhenta demais.',
        },
        {
          q: 'O áudio do microfone sai do meu aparelho?',
          a: 'Não. A análise roda no navegador: o BPM Tap não envia áudio do microfone.',
        },
        {
          q: 'Por que o BPM veio pela metade ou dobrado?',
          a: 'Os estimadores de tempo costumam pegar a outra oitava do ritmo. Use ÷2 / ×2, teste o candidato alternativo se ele aparecer e confira no metrônomo.',
        },
      ],
    },
    zh: {
      title: '如何用麦克风找出一首歌的 BPM',
      description: '用麦克风测出歌曲 BPM：打开麦克风识别，对准音箱，等待实时速度估算，再用 ÷2/×2、节拍器或点击来确认。无需上传。',
      h1: '用麦克风找出歌曲的 BPM',
      lead: '当你点不均匀，或者腾不出手时，麦克风识别会根据听到的声音估算速度。得到的读数和点击一样好用：复制、打拍、算延迟。',
      sections: [
        {
          h2: '打开麦克风识别并授权',
          paragraphs: [
            '在 bpm-tap.com 打开麦克风识别页面并开始聆听。浏览器询问时请允许使用麦克风，否则工具听不到曲子。',
            '音频只留在你的浏览器里。什么都不会上传，页面只是用麦克风的音频流在本机估算 BPM。',
          ],
        },
        {
          h2: '给麦克风一个清晰的信号',
          paragraphs: [
            '用音箱或手机播放歌曲，并把设备靠近声源。笔记本的小扬声器和嘈杂的房间会让任何基于起音或能量的识别器变得不可靠。',
            '底鼓清晰的电子乐通常锁定得更快。给它几秒钟，等读数看起来稳定，如果律动感觉快了一倍或慢了一半，再检查 ÷2 / ×2。',
          ],
        },
        {
          h2: '确认之后再用这个数字',
          paragraphs: [
            '用测到的 BPM 启动节拍器。如果节拍器和曲子逐渐错开，就切换 ÷2/×2，或者转到点击模式手动微调。',
            '对上了就复制 BPM、打开延迟计算查看毫秒值，或者分享一个 ?bpm= 链接。流程和在首页跟着节拍点击完全一样。',
          ],
        },
      ],
      faqs: [
        {
          q: '不点击也能测出 BPM 吗？',
          a: '可以。麦克风识别会从麦克风的声音里检测速度。点击依然有用：可以微调读数，或者在房间太吵、拿不到干净信号时使用。',
        },
        {
          q: '麦克风的音频会离开我的设备吗？',
          a: '不会。分析在浏览器里完成，BPM Tap 不会上传麦克风音频。',
        },
        {
          q: '为什么测出的 BPM 是我预期的一半或两倍？',
          a: '速度估算算法常常选到节拍的另一个“八度”。用 ÷2 / ×2，或者选一个显示出来的备选速度，再用节拍器确认。',
        },
      ],
    },
  },
];

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}
