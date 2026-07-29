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
      title: 'How to Find a Song’s BPM by Tapping',
      description: 'Find any song’s BPM in seconds: tap along with the beat, wait for a stable reading, then copy it into your DAW or metronome.',
      h1: 'How to find a song’s BPM',
      lead: 'You don’t need to upload a file. Play the track, tap the beat, and let the tool average your timing into beats per minute.',
      sections: [
        {
          h2: 'Tap the beat you’d count',
          paragraphs: [
            'Start the song and find the steady beat. Usually the kick, or the snare backbeat if the groove is syncopated.',
            'Open the Tap BPM tool and tap mouse, touch, or any key on each beat. After 8–12 steady taps the reading should settle. Hands busy? Switch to Listen and let the mic estimate tempo.',
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
      description: 'Узнай BPM любого трека за секунды: тапай в ритм, дождись стабильной цифры и скопируй её в DAW или метроном.',
      h1: 'Как узнать BPM песни',
      lead: 'Файл загружать не нужно. Включи трек, тапай долю. Инструмент усреднит паузы и покажет удары в минуту.',
      sections: [
        {
          h2: 'Тапай ту долю, которую считаешь',
          paragraphs: [
            'Найди устойчивую долю. Чаще это кик. В синкопах удобнее snare на бэкбит.',
            'Открой Tap BPM и тапай мышью, пальцем или любой клавишей. После 8–12 ровных ударов цифра обычно успокаивается. Руки заняты? Переключись на Listen. Микрофон оценит темп.',
          ],
        },
        {
          h2: 'Проверь, прежде чем вшивать в проект',
          paragraphs: [
            'Когда на экране Stable. Копируй BPM или запусти метроном на том же темпе.',
            'Клик вдвое быстрее или медленнее? Жми ×2 / ÷2. Так бывает в trap, dubstep, DnB и salsa.',
          ],
        },
        {
          h2: 'Куда деть цифру дальше',
          paragraphs: [
            'Вставь BPM в DAW, посчитай delay на калькуляторе или кинь коллеге ссылку с ?bpm=.',
            'Знаешь стиль, но не темп. Открой страницу жанра, возьми диапазон, потом уточни тапом по треку.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Сколько тапов нужно?',
          a: 'Четыре. Грубая оценка. Восемь–двенадцать ровных ударов обычно хватает для DAW и диджеинга.',
        },
        {
          q: 'Тап заменяет анализ файла?',
          a: 'Для одного звучащего трека тап часто быстрее. Анализаторы удобны для пачек файлов. Когда трек только слышишь. Тапай.',
        },
        {
          q: 'Почему BPM вдвое меньше или больше?',
          a: 'Скорее всего, ты в half-time или double-time. После стабилизации жми ÷2 / ×2.',
        },
      ],
    },
    es: {
      title: 'Cómo sacar el BPM de una canción tocando el beat',
      description: 'Saca el BPM de cualquier canción en segundos: toca al ritmo, espera a que se estabilice y cópialo al DAW o al metrónomo.',
      h1: 'Cómo sacar el BPM de una canción',
      lead: 'No hace falta subir un archivo. Pon la pista, toca el beat y deja que la herramienta promedie tus intervalos en tiempos por minuto.',
      sections: [
        {
          h2: 'Toca el ritmo que contarías',
          paragraphs: [
            'Arranca la canción y busca el ritmo estable. Normalmente el kick, o el backbeat del snare si el groove va sincopado.',
            'Abre Tap BPM y toca con el ratón, el dedo o cualquier tecla en cada tiempo. Tras 8–12 toques parejos la lectura debería asentarse. ¿Manos ocupadas? Pasa a Listen y deja que el mic estime el tempo.',
          ],
        },
        {
          h2: 'Confirma antes de usarlo',
          paragraphs: [
            'Cuando la confianza diga Estable, copia el BPM o abre el metrónomo al mismo tempo y escucha si encaja.',
            'Si el clic se siente el doble de rápido o la mitad de lento, usa ×2 / ÷2. Pasa mucho en trap, dubstep, DnB y salsa.',
          ],
        },
        {
          h2: 'Lleva el número a tu sesión',
          paragraphs: [
            'Pega el BPM en el DAW, saca los tiempos de delay en la calculadora o comparte un enlace con ?bpm=.',
            'Las páginas de género ayudan si solo conoces el estilo: parte de un rango típico y luego toca la pista real para afinar.',
          ],
        },
      ],
      faqs: [
        {
          q: '¿Cuántos taps hacen falta?',
          a: 'Cuatro dan una idea aproximada. Ocho a doce toques estables suelen bastar para el DAW o preparar un set.',
        },
        {
          q: '¿Tocar el beat sustituye al análisis de audio?',
          a: 'Para una sola pista sonando, tocar suele ser más rápido. Los analizadores van bien con lotes de archivos; si solo oyes la canción, tocar el beat gana.',
        },
        {
          q: '¿Por qué mi BPM sale a la mitad o al doble?',
          a: 'Puede que estés tocando half-time o double-time. Usa ÷2 / ×2 cuando la lectura se estabilice.',
        },
      ],
    },
    fr: {
      title: 'Trouver le BPM d’une chanson en tapant le beat',
      description: 'Trouvez le BPM d’un morceau en quelques secondes : tapez au rythme, attendez une lecture stable, copiez dans le DAW ou le métronome.',
      h1: 'Comment trouver le BPM d’une chanson',
      lead: 'Pas besoin d’envoyer de fichier. Lancez le morceau, tapez le beat. L’outil moyenne vos intervalles en battements par minute.',
      sections: [
        {
          h2: 'Tapez le rythme que vous compteriez',
          paragraphs: [
            'Lancez la chanson et trouvez le rythme régulier. En général le kick, ou le backbeat de la caisse claire si le groove est syncopé.',
            'Ouvrez Tap BPM et tapez à chaque temps (souris, doigt ou n’importe quelle touche). Après 8–12 taps réguliers, la lecture devrait se calmer. Mains prises ? Passez en Listen et laissez le micro estimer le tempo.',
          ],
        },
        {
          h2: 'Vérifiez avant de coller dans le projet',
          paragraphs: [
            'Quand la confiance affiche Stable, copiez le BPM ou lancez le métronome au même tempo pour voir si ça colle.',
            'Si le clic sonne deux fois trop vite ou trop lent, utilisez ×2 / ÷2. Courant en trap, dubstep, DnB et salsa.',
          ],
        },
        {
          h2: 'Utilisez le chiffre ensuite',
          paragraphs: [
            'Collez le BPM dans le DAW, calculez les delay en ms, ou envoyez un lien avec ?bpm= à un collab.',
            'Les pages genre aident si vous connaissez le style mais pas le tempo : partez d’une plage typique, puis tapez le morceau pour affiner.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Combien de taps faut-il ?',
          a: 'Quatre taps donnent une idée grossière. Huit à douze taps réguliers suffisent en général pour le DAW ou un set DJ.',
        },
        {
          q: 'Taper le beat remplace-t-il l’analyse audio ?',
          a: 'Pour un seul morceau qui joue, taper est souvent plus rapide. Les analyseurs de fichiers aident pour des lots. Quand vous n’entendez que la chanson, taper le beat gagne.',
        },
        {
          q: 'Pourquoi mon BPM semble moitié ou double ?',
          a: 'Vous tapez peut-être un feeling half-time ou double-time. Une fois la lecture stable, utilisez ÷2 / ×2.',
        },
      ],
    },
    pt: {
      title: 'Como achar o BPM de uma música tocando o beat',
      description: 'Ache o BPM de qualquer música em segundos: toque no ritmo, espere a leitura firmar e copie para o DAW ou metrônomo.',
      h1: 'Como achar o BPM de uma música',
      lead: 'Não precisa enviar arquivo. Coloque a faixa tocando, bata no ritmo e deixe a ferramenta fazer a média dos seus intervalos em batidas por minuto.',
      sections: [
        {
          h2: 'Toque o ritmo que você contaria',
          paragraphs: [
            'Comece a música e ache o ritmo firme. Em geral o kick, ou o backbeat da caixa se o groove for sincopado.',
            'Abra o Tap BPM e toque com mouse, dedo ou qualquer tecla em cada tempo. Depois de 8–12 toques constantes a leitura costuma firmar. Mãos ocupadas? Mude para Listen e deixe o microfone estimar o tempo.',
          ],
        },
        {
          h2: 'Confira antes de travar no projeto',
          paragraphs: [
            'Quando a confiança mostrar Estável, copie o BPM ou abra o metrônomo no mesmo tempo para ouvir se encaixa.',
            'Se o clique parecer o dobro ou a metade, use ×2 / ÷2. Comum em trap, dubstep, DnB e salsa.',
          ],
        },
        {
          h2: 'Onde usar o número',
          paragraphs: [
            'Cole o BPM no DAW, pegue os tempos de delay na calculadora ou mande um link com ?bpm= para alguém.',
            'As páginas de gênero ajudam quando você só sabe o estilo: comece pela faixa típica e depois toque a música real para afinar.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Quantos toques preciso?',
          a: 'Quatro toques dão um chute. Oito a doze toques constantes costumam bastar para DAW e set de DJ.',
        },
        {
          q: 'Tocar o beat substitui análise de áudio?',
          a: 'Para uma faixa tocando agora, tocar costuma ser mais rápido. Analisador de arquivo ajuda em lote; quando você só ouve a música, o tap ganha.',
        },
        {
          q: 'Por que o BPM veio pela metade ou dobrado?',
          a: 'Você pode estar tocando half-time ou double-time. Depois que a leitura firmar, use ÷2 / ×2.',
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
      description: 'Насколько точен тап по BPM? Практические советы, чтобы попасть примерно в ±1–2 BPM от реального темпа.',
      h1: 'Насколько точен тап по BPM?',
      lead: 'Инструмент считает твои тапы, а не файл. Ровная рука обычно даёт цифру, которой хватает для продакшена и практики.',
      sections: [
        {
          h2: 'Что значит «достаточно точно»',
          paragraphs: [
            'При 8–12 ровных ударах большинство попадает примерно в ±1–2 BPM. Для сетки DAW, delay и репетиции этого хватает.',
            'Рука всегда дрожит на миллисекунды. Усреднение съедает мелкие ошибки. Если ритм один и тот же.',
          ],
        },
        {
          h2: 'Техника, которая стабилизирует',
          paragraphs: [
            'Тапай один слой. Кик или snare. Филы, дроби и вокальный ритм игнорь.',
            'Жди Stable. Ошибся. Reset и новая серия. Не лечи плохое среднее.',
          ],
        },
        {
          h2: 'Проверка по-студийному',
          paragraphs: [
            'Запусти метроном на измеренном BPM. Плывёт относительно трека. ÷2/×2 или перетапай.',
            'Swing и live-барабаны дают больший разброс. Сделай больше тапов или возьми ближайшее целое и подправь на слух.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Тап по BPM. Это точно?',
          a: 'Это оценка по твоим тапам. Электронная сетка проще. Swing и live требуют больше ударов.',
        },
        {
          q: 'Клавиатура или кнопка на экране?',
          a: 'Где ровнее попадаешь. Часто Space стабильнее маленькой touch-зоны.',
        },
        {
          q: 'Почему цифра прыгает?',
          a: 'Первые тапы с большим разбросом. Держи ритм. Среднее успокоится, когда confidence вырастет.',
        },
      ],
    },
    es: {
      title: 'Precisión al tocar el beat. Cómo sacar un BPM estable',
      description: '¿Qué tan preciso es tocar el beat? Consejos prácticos para reducir el temblor y caer a unos ±1–2 BPM del tempo real.',
      h1: '¿Qué tan preciso es tocar el beat?',
      lead: 'La herramienta mide tus toques, no el archivo. Con técnica constante suele bastar para producir y practicar.',
      sections: [
        {
          h2: 'Qué es «suficiente»',
          paragraphs: [
            'Con 8–12 toques estables, la mayoría queda a unos ±1–2 BPM del tempo real. Bastante para la rejilla del DAW, sync de delay y ensayo.',
            'El timing humano siempre tiembla unos milisegundos; el promedio cancela errores pequeños si mantienes el mismo ritmo.',
          ],
        },
        {
          h2: 'Técnica que estabiliza la lectura',
          paragraphs: [
            'Toca una sola capa (kick o snare). Ignora fills, rolls y el ritmo de la voz.',
            'Sigue hasta que diga Estable. Si te equivocas, Reiniciar y otra tanda. No pelees contra un mal promedio.',
          ],
        },
        {
          h2: 'Comprueba como en el estudio',
          paragraphs: [
            'Arranca el metrónomo con el BPM medido. Si el clic se desvía de la pista, ajusta con ÷2/×2 o vuelve a tocar.',
            'Con swing o banda en vivo espera más variación. Haz más taps o quédate con el BPM entero más cercano y afina a oído.',
          ],
        },
      ],
      faqs: [
        {
          q: '¿Tocar el beat es exacto?',
          a: 'Es una estimación de tu timing. Las rejillas electrónicas limpias son las más fáciles; swing y batería en vivo piden más toques.',
        },
        {
          q: '¿Teclado o pad?',
          a: 'El que puedas golpear más parejo. Mucha gente va más estable con Espacio que con un botón táctil pequeño.',
        },
        {
          q: '¿Por qué el número sigue moviéndose?',
          a: 'Los primeros taps tienen más dispersión. Mantén el ritmo. El promedio móvil se asienta cuando sube la confianza.',
        },
      ],
    },
    fr: {
      title: 'Précision en tapant le beat. Obtenir un BPM stable',
      description: 'Taper le beat, c’est précis ? Conseils concrets pour limiter le wobble et viser environ ±1–2 BPM du vrai tempo.',
      h1: 'Taper le beat, c’est précis ?',
      lead: 'L’outil mesure vos taps, pas le fichier audio. Une technique régulière suffit en général pour produire et s’entraîner.',
      sections: [
        {
          h2: 'Ce que « assez bon » veut dire',
          paragraphs: [
            'Avec 8–12 taps réguliers, la plupart des gens tombent à environ ±1–2 BPM du vrai tempo. Assez pour une grille DAW, un delay sync et une répé.',
            'La main tremble toujours de quelques millisecondes. La moyenne corrige les petites erreurs si vous restez sur le même rythme.',
          ],
        },
        {
          h2: 'Une technique qui stabilise',
          paragraphs: [
            'Tapez une seule couche (kick ou snare). Ignorez fills, roulements et rythme du chant.',
            'Continuez jusqu’à Stable. Si vous ratez, Reset et recommencez. Inutile de « soigner » une mauvaise moyenne.',
          ],
        },
        {
          h2: 'Vérifiez comme en studio',
          paragraphs: [
            'Lancez le métronome sur le BPM mesuré. Si le clic dérive par rapport au morceau, ajustez avec ÷2/×2 ou retapez.',
            'Swing ou batterie live : plus de variance. Faites plus de taps, ou prenez le BPM entier le plus proche et affinez à l’oreille.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Taper le beat, c’est exact ?',
          a: 'C’est une estimation basée sur votre timing. Les grilles électro propres sont les plus faciles. Swing et batterie live demandent plus de taps.',
        },
        {
          q: 'Clavier ou pad ?',
          a: 'Celui où vous frappez le plus régulièrement. Beaucoup sont plus stables sur Espace que sur une petite zone tactile.',
        },
        {
          q: 'Pourquoi le chiffre bouge encore ?',
          a: 'Les premiers taps ont beaucoup de variance. Gardez un rythme régulier. La moyenne se calme quand la confiance monte.',
        },
      ],
    },
    pt: {
      title: 'Precisão ao tocar o beat. Como firmar o BPM',
      description: 'Quão preciso é tocar o beat? Dicas práticas para reduzir oscilação e ficar perto de ±1–2 BPM do tempo real.',
      h1: 'Quão preciso é tocar o beat?',
      lead: 'A ferramenta mede os seus toques, não o arquivo. Técnica firme costuma ser suficiente para produção e ensaio.',
      sections: [
        {
          h2: 'O que é «bom o bastante»',
          paragraphs: [
            'Com 8–12 toques constantes, a maioria fica perto de ±1–2 BPM do tempo real. Serve para grade do DAW, sync de delay e ensaio.',
            'A mão sempre oscila uns milissegundos; a média come o erro pequeno se você mantiver o mesmo ritmo.',
          ],
        },
        {
          h2: 'Técnica que firma a leitura',
          paragraphs: [
            'Toque uma camada só (kick ou snare). Ignore fill, roll e ritmo do vocal.',
            'Continue até a interface mostrar Estável. Se errar, Reiniciar e comece de novo. Não tente «consertar» uma média ruim.',
          ],
        },
        {
          h2: 'Cheque como em estúdio',
          paragraphs: [
            'Ligue o metrônomo no BPM medido. Se o clique descolar da faixa, use ÷2/×2 ou toque de novo.',
            'Com swing ou banda ao vivo, espere mais variação. Faça mais toques ou pegue o BPM inteiro mais perto e ajuste de ouvido.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Tocar o beat é exato?',
          a: 'É uma estimativa do seu timing. Grade eletrônica limpa é a mais fácil; swing e bateria ao vivo pedem mais toques.',
        },
        {
          q: 'Teclado ou pad?',
          a: 'Onde você bater mais uniforme. Muita gente fica mais estável no Space do que num alvo touch pequeno.',
        },
        {
          q: 'Por que o número ainda se mexe?',
          a: 'Os primeiros toques têm mais variação. Mantenha o ritmo. A média móvel acalma conforme a confiança sobe.',
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
            'Sync delay throws, slapback, and similar timing to the song grid without guessing.',
            'Tap the track on the delay page, then copy the cell you need, 1/8, 1/8 dotted, or 1/4 triplet are common picks.',
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
      description: 'Переведи BPM в миллисекунды для delay и нотных длительностей: четверти, пунктир, триоли. С тапом BPM внутри.',
      h1: 'BPM в миллисекунды',
      lead: 'Одна доля в ms: 60 000 ÷ BPM. От длины четверти считаются все обычные delay-подразделения.',
      sections: [
        {
          h2: 'Базовая формула',
          paragraphs: [
            'Миллисекунды на четверть = 60 000 ÷ BPM. При 120 BPM это 500 ms. При 100 BPM, 600 ms.',
            'Дели пополам для восьмых и ещё раз для шестнадцатых. ×1.5 для пунктира. Триоли делят долю на три.',
          ],
        },
        {
          h2: 'Зачем в студии',
          paragraphs: [
            'Синхронизируй delay, slapback и похожий тайминг с сеткой трека. Без угадываний.',
            'Натапай темп на странице delay и копируй нужную ячейку. Часто берут 1/8, пунктир 1/8 или триоль 1/4.',
          ],
        },
        {
          h2: 'Связка с метрономом и тапом',
          paragraphs: [
            'Измерь BPM на главной, проверь метрономом, затем открой delay с тем же ?bpm=.',
            'Если грув half-time. Сначала ÷2/×2, потом смотри таблицу ms под нужную сетку.',
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
          a: 'Пунктирная 1/8. Классика slapback и грува. Триоли. Для триольных партий. После копирования доверяй уху.',
        },
        {
          q: 'Считать вручную?',
          a: 'Не нужно. Калькулятор delay показывает длительности и копирует в один клик.',
        },
      ],
    },
    es: {
      title: 'BPM a milisegundos. Calculadora de delay',
      description: 'Pasa BPM a milisegundos para delay y duraciones de nota. Negras, puntillo, tresillos. Con tap BPM incluido.',
      h1: 'BPM a milisegundos',
      lead: 'Un tiempo en ms es 60.000 ÷ BPM. Desde la negra sacas casi cualquier subdivisión de delay habitual.',
      sections: [
        {
          h2: 'La fórmula de base',
          paragraphs: [
            'Milisegundos por negra = 60.000 ÷ BPM. A 120 BPM son 500 ms; a 100 BPM, 600 ms.',
            'Divide a la mitad para corcheas, otra vez para semicorcheas. Multiplica por 1,5 para puntillo; los tresillos parten el tiempo en tres.',
          ],
        },
        {
          h2: 'Para qué sirve en el estudio',
          paragraphs: [
            'Sincroniza delays, slapback y timings parecidos al sidechain con la rejilla de la canción, sin adivinar.',
            'Toca el tema en la página de delay y copia la celda que necesites, 1/8, 1/8 con puntillo o tresillo de 1/4 son opciones habituales.',
          ],
        },
        {
          h2: 'Junto con metrónomo y tap',
          paragraphs: [
            'Mide el BPM en la herramienta principal, confirma con el metrónomo y salta a delay con el mismo ?bpm=.',
            'Si la sensación es half-time, convierte después de ÷2/×2 para que la tabla de ms coincida con la rejilla que quieres.',
          ],
        },
      ],
      faqs: [
        {
          q: '¿Qué delay tiene una corchea a 128 BPM?',
          a: 'Negra ≈ 468,75 ms, así que una 1/8 recta ≈ 234,4 ms. Copia el valor exacto de la tabla de delay.',
        },
        {
          q: '¿Puntillo o tresillo?',
          a: 'La 1/8 con puntillo es el clásico slapback/groove. Los tresillos van bien con partes swing o en tresillo. Después de copiar, fíate del oído.',
        },
        {
          q: '¿Hay que calcular a mano?',
          a: 'No. La calculadora de delay BPM lista las duraciones habituales y copia en un clic.',
        },
      ],
    },
    fr: {
      title: 'BPM en millisecondes. Calculateur de delay',
      description: 'Convertissez un BPM en millisecondes pour delay et durées de notes. Noires, pointées, triolets. Avec réglage BPM au tap intégré.',
      h1: 'BPM en millisecondes',
      lead: 'Un temps en ms = 60 000 ÷ BPM. À partir de la noire, vous dérivez toutes les subdivisions de delay courantes.',
      sections: [
        {
          h2: 'La formule de base',
          paragraphs: [
            'Millisecondes par noire = 60 000 ÷ BPM. À 120 BPM : 500 ms. À 100 BPM : 600 ms.',
            'Divisez par deux pour les croches, encore pour les doubles-croches. ×1,5 pour les pointées. Les triolets coupent le temps en trois.',
          ],
        },
        {
          h2: 'En studio',
          paragraphs: [
            'Alignez delays, slapback et timings proches du sidechain sur la grille du morceau, sans inventer les chiffres.',
            'Tapez le morceau sur la page delay, puis copiez la cellule voulue, 1/8, 1/8 pointée ou triolet de 1/4 reviennent souvent.',
          ],
        },
        {
          h2: 'Avec métronome et tap',
          paragraphs: [
            'Mesurez le BPM sur l’accueil, confirmez au métronome, puis ouvrez Delay avec le même ?bpm=.',
            'Si le feeling est half-time, convertissez après ÷2/×2 pour que le tableau ms colle à la grille que vous voulez vraiment.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Quel delay pour une croche à 128 BPM ?',
          a: 'Noire ≈ 468,75 ms, donc une 1/8 droite ≈ 234,4 ms. Copiez les valeurs exactes dans le tableau delay.',
        },
        {
          q: 'Pointée ou triolet ?',
          a: 'La 1/8 pointée est un classique slapback / groove. Les triolets vont mieux sur des parties swingées ou en triolet. Après copie, fiez-vous à l’oreille.',
        },
        {
          q: 'Faut-il calculer à la main ?',
          a: 'Non. Le calculateur de delay BPM liste les durées courantes et copie en un clic.',
        },
      ],
    },
    pt: {
      title: 'BPM em milissegundos. Calculadora de delay',
      description: 'Converta BPM em milissegundos para delay e duração de nota. Semínimas, com ponto, tercinas. Com ajuste de BPM no toque embutido.',
      h1: 'BPM em milissegundos',
      lead: 'Um tempo em ms é 60.000 ÷ BPM. Da duração da semínima saem as subdivisões comuns de delay.',
      sections: [
        {
          h2: 'A fórmula base',
          paragraphs: [
            'Milissegundos por semínima = 60.000 ÷ BPM. A 120 BPM são 500 ms; a 100 BPM, 600 ms.',
            'Metade para colcheia, metade de novo para semicolcheia. Multiplique por 1,5 para com ponto; tercina divide o tempo em três.',
          ],
        },
        {
          h2: 'Uso no estúdio',
          paragraphs: [
            'Sincronize delay, slapback e timing perto de sidechain com a grade da música sem chutar.',
            'Toque a faixa na página de delay e copie a célula que precisar, 1/8, 1/8 com ponto ou tercina de 1/4 são escolhas comuns.',
          ],
        },
        {
          h2: 'Junte metrônomo e tap',
          paragraphs: [
            'Meça o BPM na página inicial, confira no metrônomo e abra o delay com o mesmo ?bpm=.',
            'Se o feel for half-time, converta depois de ÷2/×2 para a tabela de ms bater com a grade que você quer.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Qual o delay de uma colcheia a 128 BPM?',
          a: 'Semínima ≈ 468,75 ms, então 1/8 reta ≈ 234,4 ms. Copie o valor exato na tabela de delay.',
        },
        {
          q: 'Com ponto ou tercina?',
          a: '1/8 com ponto é o slapback/groove clássico. Tercinas encaixam em partes com swing ou em tercina. Depois de copiar, confie no ouvido.',
        },
        {
          q: 'Preciso calcular na mão?',
          a: 'Não. A calculadora de delay BPM lista as durações comuns e copia em um clique.',
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
      description: 'Почему tap BPM кажется вдвое меньше или больше. И как выбрать письменный темп vs ощущаемый ритм для DAW и DJ.',
      h1: 'Half-time и double-time BPM',
      lead: '«Правильный» BPM. Тот, что совпадает с нужной сеткой. ÷2 и ×2 переключают ощущаемый ритм и письменный темп.',
      sections: [
        {
          h2: 'Ощущаемый ритм и письменный темп',
          paragraphs: [
            'Dubstep и trap часто ощущаются как ~70–80 BPM, а пишутся ~140–160. DnB может ощущаться как половина от 170+. Salsa. Как половина от ~200.',
            'Оба числа могут быть «верными». Выбирают сетку, удобную для правок и ударных.',
          ],
        },
        {
          h2: 'Как решить за 10 секунд',
          paragraphs: [
            'Натапай то, под что киваешь. Запусти метроном. Клик вдвое суетливее грува. ÷2. Слишком вялый. ×2.',
            'Смотри хэты и перкуссию. Если они явно делят твои тапы пополам. Ты на более медленном feel.',
          ],
        },
        {
          h2: 'Рабочий поток в BPM Tap',
          paragraphs: [
            'Стабилизируй чтение на главной, переключи ÷2/×2, затем открой метроном или delay с ?bpm=. Везде один выбор.',
            'На страницах жанров есть подсказки про half-time. Используй их, но финально сверь метроном с треком.',
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
          a: 'Миллисекунды считаются от выбранного BPM. Неверная «октава» темпа. Неверные длительности в таблице.',
        },
        {
          q: 'Может ли Stable быть на «неверной октаве»?',
          a: 'Да. Half-time тоже стабильно тапается. Stable ≠ нужная сетка. Проверь метрономом и задачей аранжировки.',
        },
      ],
    },
    es: {
      title: 'BPM half-time y double-time. Cuándo usar ÷2 y ×2',
      description: 'Por qué tu tap BPM sale a la mitad o al doble, y cómo elegir entre tempo escrito y ritmo sentido para DAW y DJ.',
      h1: 'BPM half-time y double-time',
      lead: 'El BPM «correcto» es el que cuadra con la rejilla que quieres. ÷2 y ×2 cambian entre el ritmo que sientes y el tempo escrito.',
      sections: [
        {
          h2: 'Ritmo sentido vs tempo escrito',
          paragraphs: [
            'Dubstep y trap a menudo se sienten ~70–80 BPM pero se escriben a ~140–160. El DnB puede sentirse como la mitad de 170+. La salsa, como la mitad de ~200.',
            'Ningún número está mal. Eliges la rejilla que te facilita editar y programar la batería.',
          ],
        },
        {
          h2: 'Cómo decidir en 10 segundos',
          paragraphs: [
            'Toca lo que te hace mover la cabeza. Arranca el metrónomo. Si el clic va el doble de ajetreado que el groove, pulsa ÷2; si se siente flojo, ×2.',
            'Mira hats y percusión: si claramente subdividen tus taps por dos, casi seguro estás en el feel más lento.',
          ],
        },
        {
          h2: 'Flujo en BPM Tap',
          paragraphs: [
            'Estabiliza la lectura en inicio, cambia ÷2/×2 y salta al metrónomo o delay con ?bpm= para que todas las páginas compartan la elección.',
            'Las páginas de género avisan de hábitos half-time habituales. Úsalas como pista y luego fíate del metrónomo contra la pista.',
          ],
        },
      ],
      faqs: [
        {
          q: '¿Los DJs usan BPM sentido o escrito?',
          a: 'El que esperen tu biblioteca y las herramientas de sync. La coherencia en tu crate importa más que la teoría.',
        },
        {
          q: '¿Por qué importa ×2 para el delay?',
          a: 'Los ms de delay siguen el BPM que eliges. Tempo en la «octava» equivocada = duraciones incorrectas en la tabla.',
        },
        {
          q: '¿Puede salir Estable en la octava «incorrecta»?',
          a: 'Sí. Un half-time también se toca estable. Estable ≠ rejilla correcta. Confirma con el metrónomo y con lo que necesites para el arreglo.',
        },
      ],
    },
    fr: {
      title: 'BPM half-time et double-time. ÷2 et ×2',
      description: 'Pourquoi votre tap BPM semble moitié ou double. Et comment choisir le tempo écrit vs le rythme ressenti pour le DAW et le DJ.',
      h1: 'BPM half-time et double-time',
      lead: 'Le « bon » BPM, c’est celui qui colle à la grille que vous voulez. ÷2 et ×2 basculent entre rythme ressenti et tempo écrit.',
      sections: [
        {
          h2: 'Rythme ressenti vs tempo écrit',
          paragraphs: [
            'Dubstep et trap se sentent souvent ~70–80 BPM mais s’écrivent ~140–160. Le DnB peut sembler la moitié de 170+. La salsa, la moitié de ~200.',
            'Aucun chiffre n’est « faux ». Les producteurs choisissent la grille la plus pratique pour éditer et programmer la batterie.',
          ],
        },
        {
          h2: 'Décider en 10 secondes',
          paragraphs: [
            'Tapez ce sur quoi vous hochez naturellement la tête. Lancez le métronome. Si le clic est deux fois plus occupé que le groove, appuyez sur ÷2. S’il traîne, appuyez sur ×2.',
            'Regardez hi-hats et percussion : s’ils subdivisent clairement vos taps par deux, vous êtes probablement sur le feeling plus lent.',
          ],
        },
        {
          h2: 'Sur BPM Tap',
          paragraphs: [
            'Stabilisez une lecture sur l’accueil, basculez ÷2/×2, puis ouvrez métronome ou delay avec?bpm=. Toutes les pages partagent le choix.',
            'Les pages genre notent les habitudes half-time courantes. Prenez-les comme indice, puis fiez-vous au métronome face au morceau.',
          ],
        },
      ],
      faqs: [
        {
          q: 'DJ : BPM ressenti ou écrit ?',
          a: 'Alignez-vous sur ce qu’attendent votre bibliothèque et vos outils de sync. La cohérence dans le crate compte plus que la théorie.',
        },
        {
          q: 'Pourquoi ×2 compte pour le delay ?',
          a: 'Les ms de delay suivent le BPM choisi. Mauvaise « octave » de tempo = mauvaises durées dans le tableau.',
        },
        {
          q: 'La confiance peut-elle être haute sur la mauvaise octave ?',
          a: 'Oui. Un rythme half-time peut être parfaitement stable. Stable ≠ bonne grille. Confirmez au métronome et selon ce dont l’arrangement a besoin.',
        },
      ],
    },
    pt: {
      title: 'BPM half-time e double-time. Quando usar ÷2 e ×2',
      description: 'Por que o tap BPM parece metade ou o dobro, e como escolher o tempo escrito vs o ritmo sentido para DAW e DJ.',
      h1: 'BPM half-time e double-time',
      lead: 'O BPM «certo» é o que bate com a grade que você quer. ÷2 e ×2 alternam ritmo sentido e tempo escrito.',
      sections: [
        {
          h2: 'Ritmo sentido vs tempo escrito',
          paragraphs: [
            'Dubstep e trap costumam parecer ~70–80 BPM, mas se escrevem em ~140–160. DnB pode parecer metade de 170+. Salsa, metade de ~200.',
            'Nenhum número está errado. Produtores escolhem a grade que facilita edição e programação de bateria.',
          ],
        },
        {
          h2: 'Como decidir em 10 segundos',
          paragraphs: [
            'Toque o que a cabeça balança sozinha. Ligue o metrônomo. Se o clique estiver o dobro de ocupado que o groove, aperte ÷2; se parecer lento, ×2.',
            'Olhe hats e percussão: se claramente dividem seus toques por dois, você está no feel mais lento.',
          ],
        },
        {
          h2: 'Fluxo no BPM Tap',
          paragraphs: [
            'Firme a leitura na página inicial, alterne ÷2/×2 e vá para metrônomo ou delay com?bpm=. Todas as páginas ficam no mesmo tempo.',
            'As páginas de gênero apontam hábitos comuns de half-time. Use como dica e confira no metrônomo contra a faixa.',
          ],
        },
      ],
      faqs: [
        {
          q: 'DJ usa BPM sentido ou escrito?',
          a: 'O que a biblioteca e o sync esperam. Consistência no acervo importa mais que teoria.',
        },
        {
          q: 'Por que ×2 importa no delay?',
          a: 'Os ms de delay seguem o BPM escolhido. Oitava de tempo errada = duração de nota errada na tabela.',
        },
        {
          q: 'A confiança pode estar alta na oitava «errada»?',
          a: 'Sim. Half-time também se toca estável. Estável ≠ grade certa. Confira no metrônomo e no que o arranjo precisa.',
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
      lead: 'When you can’t tap evenly, or your hands are busy. Listen mode estimates tempo from what the mic hears. Same BPM stage as tap: copy, metronome, delay.',
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
            'When it locks, copy the BPM, open Delay for ms values, or share a?bpm= link. Same workflow as tapping the beat on the home tool.',
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
      description: 'Узнать BPM песни через микрофон: открой Listen, наведи на колонку, дождись оценки темпа, проверь ÷2/×2, метрономом или тапом. Без загрузки файла.',
      h1: 'Узнать BPM песни через микрофон',
      lead: 'Когда тапать неудобно. Listen оценивает темп по звуку с микрофона. Тот же BPM, что и у tap: copy, метроном, delay.',
      sections: [
        {
          h2: 'Открой Listen и разреши микрофон',
          paragraphs: [
            'Открой Listen на bpm-tap.com и начни слушать. Разреши доступ к микрофону. Без него инструмент не услышит трек.',
            'Звук остаётся в браузере. Ничего не загружается: страница считает BPM только на твоём устройстве.',
          ],
        },
        {
          h2: 'Дай микрофону чистый сигнал',
          paragraphs: [
            'Включи трек на колонке или телефоне и поднеси устройство ближе к источнику. Тихие динамики ноутбука и шум в комнате мешают любому детектору.',
            'Электронные треки с явным kick обычно стабилизируются быстрее. Подожди несколько секунд, потом проверь ÷2 / ×2, если ритм кажется вдвое медленнее или быстрее.',
          ],
        },
        {
          h2: 'Проверь и используй цифру',
          paragraphs: [
            'Запусти метроном на измеренном BPM. Клик плывёт относительно трека. ÷2/×2 или переключись на Tap и уточни руками.',
            'Когда сошлось. Copy BPM, открой Delay для ms или отправь ссылку с?bpm=. Тот же поток, что и при тапе на главной.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Можно узнать BPM без тапа?',
          a: 'Да. Listen определяет темп с микрофона. Tap всё равно полезен. Уточнить чтение или когда в комнате слишком шумно.',
        },
        {
          q: 'Звук с микрофона куда-то уходит?',
          a: 'Нет. Анализ только в браузере. BPM Tap не загружает аудио с микрофона.',
        },
        {
          q: 'Почему BPM вдвое меньше или больше?',
          a: 'Оценщики темпа часто берут другую «октаву» ритма. Жми ÷2 / ×2, выбери альтернативу если есть, затем сверься с метрономом.',
        },
      ],
    },
    es: {
      title: 'Cómo sacar el BPM de una canción con el micrófono',
      description: 'Saca el BPM con el mic: abre Listen, apunta al altavoz, espera la estimación en vivo y confirma con ÷2/×2, metrónomo o tap. Sin subir archivos.',
      h1: 'Sacar el BPM de una canción con el micrófono',
      lead: 'Cuando no puedes tocar parejo, o tienes las manos ocupadas. Listen estima el tempo del audio que oye el mic. Mismo escenario BPM que el tap: copiar, metrónomo, delay.',
      sections: [
        {
          h2: 'Abre Listen y deja el micrófono',
          paragraphs: [
            'Ve a Listen en bpm-tap.com y empieza a escuchar. Concede el mic cuando lo pida el navegador. Sin eso la herramienta no oye la pista.',
            'El audio se queda en tu navegador. No se sube nada; la página solo usa el stream del mic para estimar el BPM en tu dispositivo.',
          ],
        },
        {
          h2: 'Dale una señal clara al mic',
          paragraphs: [
            'Pon la canción en un altavoz o el móvil y acerca el dispositivo a la fuente. Altavoces de portátil flojos y habitaciones ruidosas empeoran cualquier detector por onset/energía.',
            'Las pistas electrónicas con kick claro suelen fijarse antes. Dale unos segundos hasta que la lectura parezca estable, luego revisa ÷2 / ×2 si se siente a la mitad o al doble.',
          ],
        },
        {
          h2: 'Confirma y usa el número',
          paragraphs: [
            'Arranca el metrónomo con el BPM medido. Si el clic se desvía de la pista, cambia ÷2/×2 o pasa a Tap y afina a mano.',
            'Cuando encaje, copia el BPM, abre Delay para los ms o comparte un enlace?bpm=. El mismo flujo que tocar el beat en inicio.',
          ],
        },
      ],
      faqs: [
        {
          q: '¿Puedo sacar el BPM sin tocar?',
          a: 'Sí. Listen detecta el tempo desde el mic. Tap sigue siendo útil para afinar o cuando la habitación es demasiado ruidosa.',
        },
        {
          q: '¿El audio del mic sale de mi dispositivo?',
          a: 'No. El análisis corre en el navegador. BPM Tap no sube audio del micrófono.',
        },
        {
          q: '¿Por qué el BPM sale a la mitad o al doble de lo esperado?',
          a: 'Los estimadores de tempo suelen pillar la otra «octava» del ritmo. Usa ÷2 / ×2, prueba otro candidato si aparece y confirma con el metrónomo.',
        },
      ],
    },
    fr: {
      title: 'Trouver le BPM d’une chanson au micro',
      description: 'Trouvez le BPM au micro : ouvrez Listen, pointez une enceinte, attendez une estimation live, confirmez avec ÷2/×2, métronome ou tap. Sans envoi de fichier.',
      h1: 'Trouver le BPM d’une chanson avec un micro',
      lead: 'Quand taper n’est pas pratique, ou que les mains sont prises. Listen estime le tempo depuis ce que le micro entend. Même scène BPM que le tap: copier, métronome, delay.',
      sections: [
        {
          h2: 'Ouvrez Listen et autorisez le micro',
          paragraphs: [
            'Allez sur Listen sur bpm-tap.com et lancez l’écoute. Autorisez le micro quand le navigateur le demande. Sans ça, l’outil n’entend rien.',
            'L’audio reste dans le navigateur. Rien n’est envoyé. La page utilise le flux micro pour estimer le BPM sur votre appareil.',
          ],
        },
        {
          h2: 'Donnez un signal clair au micro',
          paragraphs: [
            'Jouez le morceau sur une enceinte ou un téléphone et rapprochez l’appareil de la source. Petits haut-parleurs de laptop et pièce bruyante rendent n’importe quel détecteur moins fiable.',
            'Les tracks électro avec un kick net se calent en général plus vite. Laissez quelques secondes jusqu’à une lecture stable, puis vérifiez ÷2 / ×2 si le feeling semble moitié ou double.',
          ],
        },
        {
          h2: 'Confirmez, puis utilisez le chiffre',
          paragraphs: [
            'Lancez le métronome sur le BPM mesuré. Si le clic dérive, basculez ÷2/×2 ou passez en Tap pour affiner à la main.',
            'Quand ça colle, copiez le BPM, ouvrez Delay pour les ms, ou partagez un lien?bpm=. Même flux que taper le beat sur l’accueil.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Je peux trouver le BPM sans taper ?',
          a: 'Oui. Listen détecte le tempo depuis le micro. Le tap reste utile pour affiner, ou quand la pièce est trop bruyante pour un signal propre.',
        },
        {
          q: 'L’audio du micro quitte-t-il mon appareil ?',
          a: 'Non. L’analyse tourne dans le navigateur. BPM Tap n’envoie pas l’audio du micro.',
        },
        {
          q: 'Pourquoi le BPM est moitié ou double de ce que j’attends ?',
          a: 'Les estimateurs de tempo prennent souvent l’autre octave du rythme. Utilisez ÷2 / ×2, un candidat alternatif s’il apparaît, puis confirmez au métronome.',
        },
      ],
    },
    pt: {
      title: 'Como achar o BPM de uma música com microfone',
      description: 'Ache o BPM com o microfone: abra o Listen, aponte para a caixa, espere a estimativa ao vivo e confira com ÷2/×2, metrônomo ou tap. Sem upload.',
      h1: 'Achar o BPM de uma música com microfone',
      lead: 'Quando tocar com regularidade não dá, ou as mãos estão ocupadas, o Listen estima o tempo pelo áudio que o microfone capta. O mesmo palco de BPM do tap: copiar, metrônomo, delay.',
      sections: [
        {
          h2: 'Abra Listen e permita o microfone',
          paragraphs: [
            'Vá em Listen no bpm-tap.com e comece a escutar. Permita o microfone quando o navegador pedir. Sem isso a ferramenta não ouve a faixa.',
            'O áudio fica no navegador. Nada sobe; a página só usa o stream do microfone para estimar BPM no seu aparelho.',
          ],
        },
        {
          h2: 'Dê um sinal limpo ao microfone',
          paragraphs: [
            'Toque a música numa caixa ou no celular e aproxime o aparelho da fonte. Caixa fraca de notebook e sala barulhenta atrapalham qualquer detector de onset/energia.',
            'Faixas eletrônicas com kick claro costumam firmar mais rápido. Dê alguns segundos até a leitura parecer estável, depois cheque ÷2 / ×2 se a sensação for metade ou o dobro.',
          ],
        },
        {
          h2: 'Confira e use o número',
          paragraphs: [
            'Ligue o metrônomo no BPM medido. Se o clique descolar da faixa, alterne ÷2/×2 ou mude para Tap e afine na mão.',
            'Quando encaixar, copie o BPM, abra Delay para os ms ou mande um link?bpm=, o mesmo fluxo de tocar o beat na página inicial.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Dá para achar BPM sem tocar?',
          a: 'Sim. O Listen detecta o tempo pelo microfone. Tap ainda serve para afinar a leitura ou quando a sala está barulhenta demais.',
        },
        {
          q: 'O áudio do microfone sai do aparelho?',
          a: 'Não. A análise roda no navegador. O BPM Tap não envia áudio do microfone.',
        },
        {
          q: 'Por que o BPM veio pela metade ou dobrado?',
          a: 'Estimadores de tempo costumam pegar a outra oitava do ritmo. Use ÷2 / ×2, tente outro candidato se aparecer e confira no metrônomo.',
        },
      ],
    },
  },
];

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}
