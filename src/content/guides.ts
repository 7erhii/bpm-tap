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
  },
];

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}
