# План выхода в топ — BPM Tap

**Домен:** https://bpm-tap.com/  
**Цель:** органический трафик по music-intent (`tap bpm`, `tap tempo`, delay/metronome/genres) и удержание через продукт.

Принцип: не бить сразу в head-term `tap bpm`. Сначала индекс + long-tail + кластер, потом усиление money page и ссылки.

---

## Фаза 0 — Фундамент (1–2 недели)

**Статус:** код закрыт; остался ops

| # | Задача | Done when |
|---|--------|-----------|
| 0.1 | DNS/hosting на `bpm-tap.com`, HTTPS | сайт открывается по новому домену |
| 0.2 | Google Search Console + Bing Webmaster | property verified, sitemap submitted |
| 0.3 | Индексация ключевых URL (`/en/`, `/ru/`, delay, metronome, genres, guides, pulse) | URL в индексе (GSC URL Inspection) |
| 0.4 | Техдыры SEO: domain, canonical/trailing slash, OG image, JSON-LD tool pages | см. чеклист ниже |
| 0.5 | Mobile CWV / Lighthouse ≥ 90 performance + SEO | CI или ручной прогон |

### Техдыры (фаза 0.4)

- [x] `site` / canonical / robots → `https://bpm-tap.com`
- [x] trailing slash: canonical = sitemap
- [x] `og:image` + `og:site_name` + large Twitter card
- [x] JSON-LD `WebApplication` (+ FAQ где есть FAQ UI) на home / delay / metronome
- [x] FAQ below-fold на delay и metronome
- [ ] Redirect `bpm-tap.app` → `bpm-tap.com` (когда старый домен ещё жив) — **ops**
- [ ] Submit sitemap в GSC — **ops**

---

## Фаза 1 — Long-tail сбоку ✅ (в коде)

Бить туда, где конкуренты тоньше, чем на `tap bpm`.

| # | Задача | Статус |
|---|--------|--------|
| 1.1 | Утолщить delay: prose + FAQ + примеры DAW | ✅ |
| 1.2 | Утолщить metronome: FAQ + practice tips | ✅ |
| 1.3 | Genre pages: примеры / сабжанры / related + tip | ✅ |
| 1.4 | +10 жанров (trap, lo-fi, hardstyle, jazz, metal, afrobeat, salsa, bachata, gospel, country) | ✅ 22 жанра |
| 1.5 | 4 гайда с CTA в tool (`?bpm=`) | ✅ `/guides/…` en+ru |
| 1.6 | RU-фокус: metroном / delay / жанры / гайды | ✅ зеркала |

**KPI фазы:** первые стабильные impressions/clicks в GSC по mid/long-tail; позиции 5–20 по части запросов.

---

## Фаза 2 — Кластер под head-term ✅ (в коде)

```text
https://bpm-tap.com/en/          ← Tap BPM / tap tempo
  ├── /en/delay/
  ├── /en/metronome/
  ├── /en/genres/ + genre pages
  └── /en/guides/…
```

| # | Задача | Статус |
|---|--------|--------|
| 2.1 | Перелинковка: guide → tools, genre → home+metronome+siblings+delay, RelatedTools на tool pages | ✅ |
| 2.2 | Футер: полный список genres + tool links | ✅ |
| 2.3 | Money page: title/H1/FAQ под `tap bpm` / `tap tempo` / `BPM counter` | ✅ |
| 2.4 | SERP-сниппет vs топ конкурентов | ✅ см. ниже |

### 2.4 — сниппет (решение)

Конкуренты в выдаче по `tap bpm` / `tap tempo` почти всегда держат exact phrase в title.
Наш money-page title: **`Tap BPM — Free Online Tap Tempo & BPM Counter`**  
Description ведёт с `tap BPM / tap tempo` и studio-flow (metronome + delay).  
H1: **`Tap BPM — free online tap tempo`**.  
Дальше CTR смотреть в GSC после индексации и при необходимости A/B title.

**KPI фазы:** рост ассоциирования домена с темой; home появляется по более коротким EN-запросам.

---

## Фаза 3 — Ссылки и упоминания (следующий фокус)

| # | Канал |
|---|--------|
| 3.1 | Полезные ответы (Reddit / Gearspace / RU-чаты) — без спама |
| 3.2 | Product Hunt / indie directories / «free music tools» lists |
| 3.3 | Producer/DJ newsletters, YouTube descriptions туториалов |
| 3.4 | 1–2 качественные ссылки с music/tool сайтов > 50 directory |

**KPI фазы:** referring domains растут; бренд-запросы `bpm tap` / `bpm-tap.com` появляются в GSC.

---

## Фаза 4 — Продукт как SEO-сигнал (постоянно)

| # | Рычаг |
|---|--------|
| 4.1 | PWA / скорость / ads never over pad → CTR и время на сайте |
| 4.2 | Share `?bpm=` → естественные упоминания |
| 4.3 | Не размывать music-кластер Pulse’ом (Pulse = отдельный long-tail) |

---

## Чего не делать

- Тонкие «What is BPM?» страницы без уникальной пользы
- Ждать топ-3 по `tap bpm` за месяц
- Покупать мусорные ссылки
- Плодить локали раньше, чем EN+RU кластер стабилен

---

## Ориентиры по срокам

| Срок | Ожидание |
|------|----------|
| 2–4 недели | Индекс, первые impressions |
| 1–3 месяца | Трафик с genres / delay / RU / guides / pulse |
| 3–6 месяцев | Mid-terms; home иногда топ-20–50 по EN head |
| 6–12 месяцев | Шанс топ-10 по `tap bpm` / `tap tempo` при росте кластера + ссылок |

---

## Ближайшие 30 дней (чеклист)

1. [ ] Задеплоить на `bpm-tap.com`, проверить HTTPS
2. [ ] GSC + Bing + sitemap
3. [x] Закрыть техдыры в коде (domain, OG, schema, trailing slash, FAQ tool pages)
4. [x] Утолщить genre pages + добавить жанры
5. [x] 4 гайда с перелинковкой (+ кластер фазы 2)
6. [ ] 5–10 ручных упоминаний/outreach
7. [ ] Еженедельно: GSC queries → докручивать страницы с impressions
