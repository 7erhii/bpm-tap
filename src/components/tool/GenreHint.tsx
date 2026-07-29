import type { GenreMatch } from '@/lib/genres/match';
import type { Locale } from '@/i18n/utils';

interface Props {
  matches: GenreMatch[];
  locale: Locale;
  title: string;
  closestLabel: string;
  rangeLabel: (min: number, max: number) => string;
  homeHrefFor: (slug: string) => string;
}

export function GenreHint({
  matches,
  locale,
  title,
  closestLabel,
  rangeLabel,
  homeHrefFor,
}: Props) {
  if (matches.length === 0) return null;
  const top = matches[0];
  const name = top.genre.name[locale];

  return (
    <section className="genre-hint panel">
      <h2>{title}</h2>
      <p className="genre-hint__lead">
        {closestLabel.replace('{genre}', name)}
      </p>
      <ul className="genre-hint__list">
        {matches.map((m) => {
          const label = m.genre.name[locale];
          return (
            <li key={m.genre.slug}>
              <a href={homeHrefFor(m.genre.slug)}>
                <strong>{label}</strong>
                <span>{rangeLabel(m.genre.bpmMin, m.genre.bpmMax)}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
