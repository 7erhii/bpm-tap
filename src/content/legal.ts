import type { Locale } from '@/i18n/utils';

export interface LegalSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

const privacy: Record<Locale, LegalSection[]> = {
  en: [
    {
      heading: 'Who this covers',
      paragraphs: [
        'This policy is for bpm-tap.com. It covers BPM Tap (the music tools: tap BPM, Listen, metronome, delay, genres, guides) and Pulse (the heart-rate tap counter). Same site, same operator, same rules.',
      ],
    },
    {
      heading: 'What we do not collect',
      paragraphs: [
        'The tools run in your browser. We do not ask you to create an account. We do not upload your taps, saved BPM readings, pulse log, microphone audio, or favorites to our servers.',
      ],
    },
    {
      heading: 'What stays on your device',
      paragraphs: ['Your browser may keep, locally:'],
      bullets: [
        'Recent BPM taps, history, and favorites',
        'Pulse readings you chose to save, with the name you typed',
        'UI preferences such as the Pulse light/dark theme',
      ],
    },
    {
      heading: 'Cookies',
      paragraphs: [
        'We set a `locale` cookie so the site can open in the language you last used, and a `pulse-mode` cookie for the Pulse color theme. Both are first-party, last up to a year, and are not used to track you across other sites.',
      ],
    },
    {
      heading: 'Microphone (Listen)',
      paragraphs: [
        'Listen mode uses your microphone only to estimate tempo in the current browser tab. Audio is processed on your device. It is not recorded, stored, or sent to us. You can deny the permission and still tap BPM by hand.',
      ],
    },
    {
      heading: 'Contact form',
      paragraphs: [
        'If you write to us, we receive the name, email, and message you submit, plus a product tag (BPM Tap or Pulse) and the language of the page. We use that only to read and reply. Messages are delivered to the operator by email. We do not sell this information.',
      ],
    },
    {
      heading: 'Advertising',
      paragraphs: [
        'The site may show ads in reserved slots that never cover the tap pad. If ads are on, the ad partner may set its own cookies or similar technology. That processing is governed by the partner’s policy, not ours.',
      ],
    },
    {
      heading: 'Pulse is not a medical device',
      paragraphs: [
        'Pulse counts taps. It does not diagnose, treat, or monitor a health condition. Saved readings never leave this browser unless you copy them yourself.',
      ],
    },
    {
      heading: 'Children',
      paragraphs: [
        'The tools are not aimed at children under 13. Do not submit personal information through the contact form on a child’s behalf.',
      ],
    },
    {
      heading: 'Your rights',
      paragraphs: [
        'On-device data can be cleared from your browser (site data / local storage). For a message you already sent, use the contact form and say what you want deleted. We will handle it as soon as we can.',
      ],
    },
    {
      heading: 'Changes',
      paragraphs: [
        'If this policy changes, we will update the date at the top of this page. Continued use of the site after that date means you accept the updated policy.',
      ],
    },
  ],
  ru: [
    {
      heading: 'На что это распространяется',
      paragraphs: [
        'Эта политика для bpm-tap.com. Она покрывает BPM Tap (музыкальные инструменты: тап BPM, Listen, метроном, delay, жанры, гайды) и Pulse (счётчик пульса). Один сайт, один оператор, одни правила.',
      ],
    },
    {
      heading: 'Что мы не собираем',
      paragraphs: [
        'Инструменты работают в браузере. Аккаунт не нужен. Мы не загружаем на сервер ваши тапы, сохранённый BPM, журнал пульса, звук с микрофона и избранное.',
      ],
    },
    {
      heading: 'Что остаётся на устройстве',
      paragraphs: ['Браузер может хранить локально:'],
      bullets: [
        'Недавние тапы BPM, историю и избранное',
        'Записи пульса, которые вы сами сохранили, с введённым именем',
        'Настройки вроде светлой/тёмной темы Pulse',
      ],
    },
    {
      heading: 'Cookies',
      paragraphs: [
        'Мы ставим cookie `locale`, чтобы открывать сайт на последнем языке, и `pulse-mode` для темы Pulse. Оба — first-party, живут до года и не используются, чтобы следить за вами на других сайтах.',
      ],
    },
    {
      heading: 'Микрофон (Listen)',
      paragraphs: [
        'Режим Listen берёт микрофон только чтобы оценить темп в текущей вкладке. Звук обрабатывается на устройстве: его не пишут, не хранят и не отправляют нам. Можно отказать в доступе и тапать BPM руками.',
      ],
    },
    {
      heading: 'Форма обратной связи',
      paragraphs: [
        'Если вы нам напишете, мы получим имя, email и текст, плюс метку продукта (BPM Tap или Pulse) и язык страницы. Это только чтобы прочитать и ответить. Сообщения приходят оператору на email. Мы не продаём эти данные.',
      ],
    },
    {
      heading: 'Реклама',
      paragraphs: [
        'На сайте могут быть объявления в заранее выделенных местах — они никогда не закрывают площадку для тапа. Если реклама включена, партнёр может ставить свои cookies. Это уже его политика, не наша.',
      ],
    },
    {
      heading: 'Pulse — не медицинский прибор',
      paragraphs: [
        'Pulse считает тапы. Он не ставит диагнозы, не лечит и не мониторит здоровье. Сохранённые записи не уходят из браузера, пока вы сами их не скопируете.',
      ],
    },
    {
      heading: 'Дети',
      paragraphs: [
        'Инструменты не рассчитаны на детей младше 13 лет. Не отправляйте через форму личные данные ребёнка.',
      ],
    },
    {
      heading: 'Ваши права',
      paragraphs: [
        'Данные на устройстве можно стереть в настройках браузера (данные сайта / local storage). Если сообщение уже ушло, напишите через форму, что нужно удалить — сделаем, как только сможем.',
      ],
    },
    {
      heading: 'Изменения',
      paragraphs: [
        'Если политика изменится, мы обновим дату вверху страницы. Дальнейшее использование сайта означает, что вы принимаете новую редакцию.',
      ],
    },
  ],
  es: [
    {
      heading: 'A quién cubre',
      paragraphs: [
        'Esta política es para bpm-tap.com. Cubre BPM Tap (las herramientas musicales: tap BPM, Listen, metrónomo, delay, géneros, guías) y Pulse (el contador de pulso). El mismo sitio, el mismo operador, las mismas reglas.',
      ],
    },
    {
      heading: 'Qué no recogemos',
      paragraphs: [
        'Las herramientas corren en tu navegador. No hay cuenta. No subimos a un servidor tus toques, lecturas de BPM, el registro de pulso, el audio del micrófono ni los favoritos.',
      ],
    },
    {
      heading: 'Qué se queda en tu dispositivo',
      paragraphs: ['El navegador puede guardar en local:'],
      bullets: [
        'Toques recientes de BPM, historial y favoritos',
        'Lecturas de pulso que tú guardaste, con el nombre que escribiste',
        'Preferencias como el tema claro/oscuro de Pulse',
      ],
    },
    {
      heading: 'Cookies',
      paragraphs: [
        'Ponemos una cookie `locale` para abrir el idioma que usaste y una `pulse-mode` para el tema de Pulse. Son de origen propio, duran hasta un año y no sirven para rastrearte en otros sitios.',
      ],
    },
    {
      heading: 'Micrófono (Listen)',
      paragraphs: [
        'Listen usa el micrófono solo para estimar el tempo en esta pestaña. El audio se procesa en tu dispositivo: no se graba, no se guarda y no se nos envía. Puedes denegar el permiso y seguir tocando el BPM a mano.',
      ],
    },
    {
      heading: 'Formulario de contacto',
      paragraphs: [
        'Si nos escribes, recibimos el nombre, el email y el mensaje, más una etiqueta de producto (BPM Tap o Pulse) y el idioma de la página. Solo para leer y responder. Los mensajes llegan al operador por email. No vendemos esa información.',
      ],
    },
    {
      heading: 'Publicidad',
      paragraphs: [
        'El sitio puede mostrar anuncios en huecos reservados que nunca cubren el pad. Si hay anuncios, el socio puede poner sus propias cookies. Eso se rige por su política, no por la nuestra.',
      ],
    },
    {
      heading: 'Pulse no es un dispositivo médico',
      paragraphs: [
        'Pulse cuenta toques. No diagnostica, trata ni monitoriza nada. Las lecturas guardadas no salen de este navegador salvo que las copies tú.',
      ],
    },
    {
      heading: 'Menores',
      paragraphs: [
        'Las herramientas no están pensadas para menores de 13 años. No envíes datos personales de un niño por el formulario.',
      ],
    },
    {
      heading: 'Tus derechos',
      paragraphs: [
        'Los datos del dispositivo se borran desde el navegador (datos del sitio / local storage). Si ya enviaste un mensaje, usa el formulario y di qué quieres borrar. Lo haremos lo antes posible.',
      ],
    },
    {
      heading: 'Cambios',
      paragraphs: [
        'Si cambia esta política, actualizaremos la fecha de arriba. Seguir usando el sitio implica que aceptas la versión nueva.',
      ],
    },
  ],
  fr: [
    {
      heading: 'Qui est concerné',
      paragraphs: [
        'Cette politique s’applique à bpm-tap.com. Elle couvre BPM Tap (les outils musique : tap BPM, Listen, métronome, delay, genres, guides) et Pulse (le compteur de pouls). Même site, même opérateur, mêmes règles.',
      ],
    },
    {
      heading: 'Ce que nous ne collectons pas',
      paragraphs: [
        'Les outils tournent dans votre navigateur. Pas de compte. Nous n’envoyons pas sur un serveur vos taps, lectures BPM, journal de pouls, audio du micro ni favoris.',
      ],
    },
    {
      heading: 'Ce qui reste sur l’appareil',
      paragraphs: ['Le navigateur peut garder en local :'],
      bullets: [
        'Taps BPM récents, historique et favoris',
        'Lectures de pouls que vous avez enregistrées, avec le nom saisi',
        'Préférences comme le thème clair/sombre de Pulse',
      ],
    },
    {
      heading: 'Cookies',
      paragraphs: [
        'Nous posons un cookie `locale` pour rouvrir la langue choisie, et `pulse-mode` pour le thème Pulse. Tous deux sont first-party, durent jusqu’à un an, et ne servent pas à vous suivre ailleurs.',
      ],
    },
    {
      heading: 'Microphone (Listen)',
      paragraphs: [
        'Listen n’utilise le micro que pour estimer le tempo dans l’onglet courant. L’audio est traité sur l’appareil : ni enregistré, ni stocké, ni envoyé. Vous pouvez refuser l’accès et continuer à taper le BPM à la main.',
      ],
    },
    {
      heading: 'Formulaire de contact',
      paragraphs: [
        'Si vous nous écrivez, nous recevons le nom, l’e-mail et le message, plus une étiquette produit (BPM Tap ou Pulse) et la langue de la page. Uniquement pour lire et répondre. Les messages arrivent à l’opérateur par e-mail. Nous ne vendons pas ces données.',
      ],
    },
    {
      heading: 'Publicité',
      paragraphs: [
        'Le site peut afficher des pubs dans des emplacements réservés, jamais sur le pad. Si les pubs sont actives, le partenaire peut poser ses propres cookies. C’est sa politique, pas la nôtre.',
      ],
    },
    {
      heading: 'Pulse n’est pas un dispositif médical',
      paragraphs: [
        'Pulse compte des taps. Il ne diagnostique, ne traite et ne surveille rien. Les lectures enregistrées ne quittent pas ce navigateur sauf si vous les copiez.',
      ],
    },
    {
      heading: 'Enfants',
      paragraphs: [
        'Les outils ne s’adressent pas aux moins de 13 ans. N’envoyez pas les données d’un enfant via le formulaire.',
      ],
    },
    {
      heading: 'Vos droits',
      paragraphs: [
        'Les données locales s’effacent dans le navigateur (données du site / local storage). Pour un message déjà envoyé, passez par le formulaire et dites ce qu’il faut supprimer. Nous le ferons dès que possible.',
      ],
    },
    {
      heading: 'Modifications',
      paragraphs: [
        'Si cette politique change, nous mettrons à jour la date en haut de page. Continuer à utiliser le site vaut acceptation de la nouvelle version.',
      ],
    },
  ],
  pt: [
    {
      heading: 'O que isto cobre',
      paragraphs: [
        'Esta política é do bpm-tap.com. Cobre o BPM Tap (as ferramentas musicais: tap BPM, Listen, metrônomo, delay, gêneros, guias) e o Pulse (o contador de pulso). O mesmo site, o mesmo operador, as mesmas regras.',
      ],
    },
    {
      heading: 'O que não recolhemos',
      paragraphs: [
        'As ferramentas correm no navegador. Não há conta. Não enviamos para um servidor os seus toques, leituras de BPM, o diário de pulso, o áudio do microfone nem os favoritos.',
      ],
    },
    {
      heading: 'O que fica no dispositivo',
      paragraphs: ['O navegador pode guardar localmente:'],
      bullets: [
        'Toques recentes de BPM, histórico e favoritos',
        'Leituras de pulso que você salvou, com o nome digitado',
        'Preferências como o tema claro/escuro do Pulse',
      ],
    },
    {
      heading: 'Cookies',
      paragraphs: [
        'Definimos um cookie `locale` para abrir o último idioma e um `pulse-mode` para o tema do Pulse. São first-party, duram até um ano e não servem para o seguir noutros sites.',
      ],
    },
    {
      heading: 'Microfone (Listen)',
      paragraphs: [
        'O Listen usa o microfone só para estimar o tempo neste separador. O áudio é processado no dispositivo: não é gravado, guardado nem enviado. Pode recusar a permissão e continuar a tocar o BPM à mão.',
      ],
    },
    {
      heading: 'Formulário de contacto',
      paragraphs: [
        'Se nos escrever, recebemos o nome, o e-mail e a mensagem, mais uma etiqueta de produto (BPM Tap ou Pulse) e o idioma da página. Só para ler e responder. As mensagens chegam ao operador por e-mail. Não vendemos estes dados.',
      ],
    },
    {
      heading: 'Publicidade',
      paragraphs: [
        'O site pode mostrar anúncios em espaços reservados que nunca cobrem o pad. Se houver anúncios, o parceiro pode definir cookies próprios. Isso rege-se pela política dele, não pela nossa.',
      ],
    },
    {
      heading: 'O Pulse não é um dispositivo médico',
      paragraphs: [
        'O Pulse conta toques. Não diagnostica, trata nem monitoriza nada. As leituras guardadas não saem deste navegador a menos que as copie.',
      ],
    },
    {
      heading: 'Crianças',
      paragraphs: [
        'As ferramentas não se destinam a menores de 13 anos. Não envie dados pessoais de uma criança pelo formulário.',
      ],
    },
    {
      heading: 'Os seus direitos',
      paragraphs: [
        'Os dados no dispositivo apagam-se nas definições do navegador (dados do site / local storage). Se a mensagem já foi enviada, use o formulário e diga o que quer apagar. Tratamos disso o mais depressa possível.',
      ],
    },
    {
      heading: 'Alterações',
      paragraphs: [
        'Se esta política mudar, atualizamos a data no topo. Continuar a usar o site significa que aceita a versão nova.',
      ],
    },
  ],
  zh: [
    {
      heading: '适用范围',
      paragraphs: [
        '本政策适用于 bpm-tap.com，覆盖 BPM Tap（音乐工具：点击测 BPM、Listen、节拍器、delay、曲风、指南）和 Pulse（心率点击计数）。同一个站点、同一个运营方、同一套规则。',
      ],
    },
    {
      heading: '我们不收集什么',
      paragraphs: [
        '工具在浏览器里运行。不需要账号。我们不会把点击、已保存的 BPM、脉搏记录、麦克风音频或收藏上传到服务器。',
      ],
    },
    {
      heading: '留在你设备上的数据',
      paragraphs: ['浏览器可能会在本地保存：'],
      bullets: [
        '最近的 BPM 点击、历史和收藏',
        '你主动保存的脉搏读数，以及你填写的名字',
        '界面偏好，例如 Pulse 的浅色/深色主题',
      ],
    },
    {
      heading: 'Cookies',
      paragraphs: [
        '我们会设置 `locale` cookie 以便记住上次使用的语言，以及 `pulse-mode` cookie 用于 Pulse 配色。两者都是第一方、最长约一年，不会用来在其他网站跟踪你。',
      ],
    },
    {
      heading: '麦克风（Listen）',
      paragraphs: [
        'Listen 模式只用麦克风在当前标签页里估算速度。音频在你的设备上处理，不会录音、存储或发送给我们。你可以拒绝权限，改用手点 BPM。',
      ],
    },
    {
      heading: '反馈表单',
      paragraphs: [
        '如果你写信给我们，我们会收到你提交的姓名、邮箱和正文，以及产品标记（BPM Tap 或 Pulse）和页面语言。仅用于阅读和回复。消息通过电子邮件送达运营者。我们不会出售这些信息。',
      ],
    },
    {
      heading: '广告',
      paragraphs: [
        '站点可能在预留位置展示广告，绝不会盖住点击垫。若广告开启，广告合作方可能设置自己的 cookie。那部分处理受对方政策约束，不受本政策约束。',
      ],
    },
    {
      heading: 'Pulse 不是医疗器械',
      paragraphs: [
        'Pulse 只计点击次数。它不诊断、不治疗、不监测健康状况。保存的读数不会离开这个浏览器，除非你自己复制走。',
      ],
    },
    {
      heading: '儿童',
      paragraphs: [
        '这些工具不面向 13 岁以下儿童。请不要通过表单提交儿童的个人信息。',
      ],
    },
    {
      heading: '你的权利',
      paragraphs: [
        '设备上的数据可在浏览器里清除（网站数据 / local storage）。若消息已经发出，请通过表单说明要删除的内容。我们会尽快处理。',
      ],
    },
    {
      heading: '变更',
      paragraphs: [
        '若本政策有更新，我们会改页面顶部的日期。在此之后继续使用即表示你接受新版本。',
      ],
    },
  ],
};

const terms: Record<Locale, LegalSection[]> = {
  en: [
    {
      heading: 'The service',
      paragraphs: [
        'BPM Tap at bpm-tap.com is a free set of browser tools for measuring musical tempo and related studio helpers. Pulse is a heart-rate tap counter on the same site. By using either, you agree to these terms.',
      ],
    },
    {
      heading: 'No account, no license fee',
      paragraphs: [
        'You do not buy a copy of the software. You use pages in a web browser. We may change, pause, or remove a tool without notice.',
      ],
    },
    {
      heading: 'Acceptable use',
      paragraphs: [
        'Do not abuse the contact form, attempt to break the site, scrape it in a way that harms other users, or use the tools for anything unlawful. We may block traffic that looks like abuse.',
      ],
    },
    {
      heading: 'Pulse disclaimer',
      paragraphs: [
        'Pulse is not a medical device and is not medical advice. Do not rely on it for diagnosis, treatment, or emergency decisions. If you feel unwell, talk to a clinician.',
      ],
    },
    {
      heading: 'Accuracy',
      paragraphs: [
        'BPM and pulse readings come from the timing of your taps (or, in Listen, from sound in this browser). They are only as steady as the input. We do not warrant a particular accuracy.',
      ],
    },
    {
      heading: 'Intellectual property',
      paragraphs: [
        'The BPM Tap and Pulse names, site design, and original copy on bpm-tap.com belong to the operator. You may link to the tools. You may not present the site as your own product.',
      ],
    },
    {
      heading: 'Ads',
      paragraphs: [
        'Reserved ad slots may show third-party ads. Ads are not allowed to cover the tap pad. Third-party ad terms apply to those partners.',
      ],
    },
    {
      heading: 'Liability',
      paragraphs: [
        'The tools are provided as-is, without warranties. To the extent the law allows, the operator is not liable for lost data, missed tempos, health decisions, or indirect damages from using the site.',
      ],
    },
    {
      heading: 'Changes',
      paragraphs: [
        'We may update these terms. The date at the top is the current version. If you keep using the site after a change, the new terms apply.',
      ],
    },
  ],
  ru: [
    {
      heading: 'Сервис',
      paragraphs: [
        'BPM Tap на bpm-tap.com — бесплатные браузерные инструменты для измерения музыкального темпа и студийных подсказок. Pulse — счётчик пульса на том же сайте. Пользуясь любым из них, вы соглашаетесь с этими условиями.',
      ],
    },
    {
      heading: 'Без аккаунта и без лицензии',
      paragraphs: [
        'Вы не покупаете копию программы. Вы открываете страницы в браузере. Мы можем изменить, приостановить или убрать инструмент без предупреждения.',
      ],
    },
    {
      heading: 'Допустимое использование',
      paragraphs: [
        'Не спамьте форму, не ломайте сайт, не парсите его так, чтобы мешать другим, и не используйте инструменты для незаконного. Похожий на злоупотребление трафик можем отсечь.',
      ],
    },
    {
      heading: 'Оговорка про Pulse',
      paragraphs: [
        'Pulse — не медицинский прибор и не медицинская рекомендация. На него нельзя опираться для диагноза, лечения или экстренных решений. Если плохо — к врачу.',
      ],
    },
    {
      heading: 'Точность',
      paragraphs: [
        'Показания BPM и пульса считаются по интервалам ваших тапов (в Listen — по звуку в этом браузере). Насколько ровный ввод, настолько и цифра. Мы не обещаем конкретную погрешность.',
      ],
    },
    {
      heading: 'Интеллектуальная собственность',
      paragraphs: [
        'Имена BPM Tap и Pulse, оформление сайта и оригинальные тексты на bpm-tap.com принадлежат оператору. Ссылаться на инструменты можно. Выдавать сайт за свой продукт — нет.',
      ],
    },
    {
      heading: 'Реклама',
      paragraphs: [
        'В зарезервированных местах могут быть сторонние объявления. Они не имеют права закрывать площадку для тапа. К рекламе применяются условия партнёра.',
      ],
    },
    {
      heading: 'Ответственность',
      paragraphs: [
        'Инструменты предоставляются «как есть», без гарантий. Насколько это допускает закон, оператор не отвечает за потерянные данные, промах по темпу, решения про здоровье и косвенный ущерб от использования сайта.',
      ],
    },
    {
      heading: 'Изменения',
      paragraphs: [
        'Условия можем обновить. Дата сверху — текущая версия. Если вы продолжаете пользоваться сайтом после изменения, действуют новые условия.',
      ],
    },
  ],
  es: [
    {
      heading: 'El servicio',
      paragraphs: [
        'BPM Tap en bpm-tap.com es un conjunto gratuito de herramientas de navegador para medir el tempo musical y ayudas de estudio. Pulse es un contador de pulso en el mismo sitio. Al usar cualquiera, aceptas estos términos.',
      ],
    },
    {
      heading: 'Sin cuenta ni licencia',
      paragraphs: [
        'No compras una copia del software. Usas páginas en el navegador. Podemos cambiar, pausar o quitar una herramienta sin aviso.',
      ],
    },
    {
      heading: 'Uso aceptable',
      paragraphs: [
        'No abuses del formulario, no intentes romper el sitio, no lo raspes de un modo que perjudique a otros y no uses las herramientas de forma ilegal. Podemos bloquear el tráfico que parezca abuso.',
      ],
    },
    {
      heading: 'Aviso de Pulse',
      paragraphs: [
        'Pulse no es un dispositivo médico ni un consejo médico. No lo uses para diagnosticar, tratar ni decidir en una urgencia. Si te encuentras mal, habla con un clínico.',
      ],
    },
    {
      heading: 'Precisión',
      paragraphs: [
        'Las lecturas de BPM y de pulso salen del tiempo entre tus toques (o, en Listen, del sonido en este navegador). Solo son tan estables como la entrada. No garantizamos una precisión concreta.',
      ],
    },
    {
      heading: 'Propiedad intelectual',
      paragraphs: [
        'Los nombres BPM Tap y Pulse, el diseño del sitio y los textos originales en bpm-tap.com pertenecen al operador. Puedes enlazar las herramientas. No puedes presentar el sitio como producto tuyo.',
      ],
    },
    {
      heading: 'Anuncios',
      paragraphs: [
        'Los huecos reservados pueden mostrar anuncios de terceros. No pueden cubrir el pad. A esos socios les aplican sus propios términos.',
      ],
    },
    {
      heading: 'Responsabilidad',
      paragraphs: [
        'Las herramientas se ofrecen tal cual, sin garantías. En la medida que permita la ley, el operador no responde por datos perdidos, tempos fallidos, decisiones de salud ni daños indirectos por usar el sitio.',
      ],
    },
    {
      heading: 'Cambios',
      paragraphs: [
        'Podemos actualizar estos términos. La fecha de arriba es la versión vigente. Si sigues usando el sitio después de un cambio, rigen los nuevos.',
      ],
    },
  ],
  fr: [
    {
      heading: 'Le service',
      paragraphs: [
        'BPM Tap sur bpm-tap.com est un ensemble gratuit d’outils navigateur pour mesurer le tempo musical et quelques aides studio. Pulse est un compteur de pouls sur le même site. En utilisant l’un ou l’autre, vous acceptez ces conditions.',
      ],
    },
    {
      heading: 'Pas de compte, pas de licence',
      paragraphs: [
        'Vous n’achetez pas une copie du logiciel. Vous ouvrez des pages dans un navigateur. Nous pouvons modifier, suspendre ou retirer un outil sans préavis.',
      ],
    },
    {
      heading: 'Usage acceptable',
      paragraphs: [
        'N’abusez pas du formulaire, n’essayez pas de casser le site, ne le moissonnez pas au détriment des autres, n’utilisez pas les outils de façon illégale. Nous pouvons bloquer un trafic qui ressemble à de l’abus.',
      ],
    },
    {
      heading: 'Avertissement Pulse',
      paragraphs: [
        'Pulse n’est pas un dispositif médical et n’est pas un avis médical. Ne vous en servez pas pour un diagnostic, un traitement ou une urgence. Si vous vous sentez mal, voyez un clinicien.',
      ],
    },
    {
      heading: 'Précision',
      paragraphs: [
        'Les lectures BPM et pouls viennent de l’écart entre vos taps (ou, dans Listen, du son dans ce navigateur). Elles ne sont pas plus stables que la saisie. Nous ne garantissons pas une précision particulière.',
      ],
    },
    {
      heading: 'Propriété intellectuelle',
      paragraphs: [
        'Les noms BPM Tap et Pulse, le design du site et les textes originaux sur bpm-tap.com appartiennent à l’opérateur. Vous pouvez lier vers les outils. Vous ne pouvez pas présenter le site comme votre produit.',
      ],
    },
    {
      heading: 'Publicité',
      paragraphs: [
        'Des emplacements réservés peuvent afficher des pubs tierces. Elles n’ont pas le droit de couvrir le pad. Les conditions du partenaire s’appliquent à ces pubs.',
      ],
    },
    {
      heading: 'Responsabilité',
      paragraphs: [
        'Les outils sont fournis tels quels, sans garantie. Dans la mesure permise par la loi, l’opérateur n’est pas responsable des données perdues, des tempos manqués, des décisions de santé ou des dommages indirects liés à l’usage du site.',
      ],
    },
    {
      heading: 'Modifications',
      paragraphs: [
        'Nous pouvons mettre à jour ces conditions. La date en haut est la version en vigueur. Si vous continuez à utiliser le site après un changement, les nouvelles conditions s’appliquent.',
      ],
    },
  ],
  pt: [
    {
      heading: 'O serviço',
      paragraphs: [
        'O BPM Tap em bpm-tap.com é um conjunto gratuito de ferramentas de navegador para medir o tempo musical e ajudas de estúdio. O Pulse é um contador de pulso no mesmo site. Ao usar qualquer um, você aceita estes termos.',
      ],
    },
    {
      heading: 'Sem conta e sem licença',
      paragraphs: [
        'Você não compra uma cópia do software. Usa páginas no navegador. Podemos alterar, pausar ou remover uma ferramenta sem aviso.',
      ],
    },
    {
      heading: 'Uso aceitável',
      paragraphs: [
        'Não abuse do formulário, não tente partir o site, não faça scraping de um modo que prejudique outros e não use as ferramentas de forma ilegal. Podemos bloquear tráfego que pareça abuso.',
      ],
    },
    {
      heading: 'Aviso do Pulse',
      paragraphs: [
        'O Pulse não é um dispositivo médico nem aconselhamento médico. Não o use para diagnosticar, tratar ou decidir numa emergência. Se se sentir mal, fale com um clínico.',
      ],
    },
    {
      heading: 'Precisão',
      paragraphs: [
        'As leituras de BPM e de pulso vêm do intervalo entre os seus toques (ou, no Listen, do som neste navegador). Só são tão estáveis quanto a entrada. Não garantimos uma precisão concreta.',
      ],
    },
    {
      heading: 'Propriedade intelectual',
      paragraphs: [
        'Os nomes BPM Tap e Pulse, o design do site e os textos originais em bpm-tap.com pertencem ao operador. Pode ligar para as ferramentas. Não pode apresentar o site como produto seu.',
      ],
    },
    {
      heading: 'Anúncios',
      paragraphs: [
        'Os espaços reservados podem mostrar anúncios de terceiros. Não podem cobrir o pad. Aplicam-se os termos desses parceiros.',
      ],
    },
    {
      heading: 'Responsabilidade',
      paragraphs: [
        'As ferramentas são oferecidas como estão, sem garantias. Na medida em que a lei o permita, o operador não responde por dados perdidos, tempos falhados, decisões de saúde nem danos indiretos por usar o site.',
      ],
    },
    {
      heading: 'Alterações',
      paragraphs: [
        'Podemos atualizar estes termos. A data no topo é a versão atual. Se continuar a usar o site depois de uma alteração, valem os termos novos.',
      ],
    },
  ],
  zh: [
    {
      heading: '服务内容',
      paragraphs: [
        'bpm-tap.com 上的 BPM Tap 是一套免费的浏览器工具，用来测量音乐速度并提供相关的制作辅助。Pulse 是同一站点上的心率点击计数器。使用其中任何一项，即表示你同意本条款。',
      ],
    },
    {
      heading: '无账号、无许可费',
      paragraphs: [
        '你并不是在购买软件副本，只是在浏览器里打开页面。我们可以在不另行通知的情况下更改、暂停或下线某项工具。',
      ],
    },
    {
      heading: '可接受的使用',
      paragraphs: [
        '请勿滥用反馈表单、试图破坏网站、以损害他人的方式抓取，或将工具用于违法用途。我们可能会拦截看起来像滥用的流量。',
      ],
    },
    {
      heading: 'Pulse 免责声明',
      paragraphs: [
        'Pulse 不是医疗器械，也不构成医疗建议。不要用它来诊断、治疗或做紧急决定。如果身体不适，请咨询医生。',
      ],
    },
    {
      heading: '准确性',
      paragraphs: [
        'BPM 和脉搏读数来自你点击的时间间隔（在 Listen 模式下，则来自当前浏览器里的声音）。输入有多稳，读数就有多稳。我们不保证特定精度。',
      ],
    },
    {
      heading: '知识产权',
      paragraphs: [
        'BPM Tap 与 Pulse 名称、站点设计和 bpm-tap.com 上的原创文案归运营方所有。你可以链接到这些工具，但不能把本站宣称为你的产品。',
      ],
    },
    {
      heading: '广告',
      paragraphs: [
        '预留广告位可能展示第三方广告。广告不得遮挡点击垫。这些合作方适用其自身条款。',
      ],
    },
    {
      heading: '责任限制',
      paragraphs: [
        '工具按现状提供，不作保证。在法律允许的范围内，运营方不对数据丢失、测速偏差、健康相关决定，或因使用本站造成的间接损失负责。',
      ],
    },
    {
      heading: '变更',
      paragraphs: [
        '我们可能更新本条款。页面顶部的日期为当前版本。若变更后你仍继续使用本站，即适用新条款。',
      ],
    },
  ],
};

export function privacySections(locale: Locale): LegalSection[] {
  return privacy[locale];
}

export function termsSections(locale: Locale): LegalSection[] {
  return terms[locale];
}
