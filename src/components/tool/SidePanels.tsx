import type { FavoritePreset } from '@/lib/favorites/storage';
import type { GenreMatch } from '@/lib/genres/match';
import type { HistoryItem } from '@/lib/history/storage';
import type { TimeSignatureId } from '@/lib/metronome/scheduler';
import { DelayTable } from './DelayTable';
import { FavoritesBar } from './FavoritesBar';
import { GenreHint } from './GenreHint';
import { HistoryList } from './HistoryList';

import type { Locale } from '@/i18n/utils';

export interface SidePanelsProps {
  locale: Locale;
  showDelay: boolean;
  showFavorites: boolean;
  showGenreHint: boolean;
  showHistory: boolean;
  bpm: number | null;
  canUseBpm: boolean;
  meterId: TimeSignatureId;
  favorites: FavoritePreset[];
  history: HistoryItem[];
  genreMatches: GenreMatch[];
  noteLabels: Record<string, string>;
  labels: {
    delayTitle: string;
    emptyDelay: string;
    favoritesTitle: string;
    favoritesEmpty: string;
    favoritesEdit: string;
    favoritesDone: string;
    favoritesRemove: string;
    favoritesSaveEdit: string;
    favoritesBpm: string;
    favoritesMeter: string;
    favoritesManageHint: string;
    genreHintTitle: string;
    genreClosest: string;
    historyTitle: string;
    historyEmpty: string;
  };
  homeHrefFor: (slug: string) => string;
  onSelectFavorite: (preset: FavoritePreset) => void;
  onRemoveFavorite: (preset: FavoritePreset) => void;
  onUpdateFavorite: (from: FavoritePreset, to: FavoritePreset) => void;
}

export function SidePanels({
  locale,
  showDelay,
  showFavorites,
  showGenreHint,
  showHistory,
  bpm,
  canUseBpm,
  meterId,
  favorites,
  history,
  genreMatches,
  noteLabels,
  labels,
  homeHrefFor,
  onSelectFavorite,
  onRemoveFavorite,
  onUpdateFavorite,
}: SidePanelsProps) {
  return (
    <div className="panels">
      {showDelay ? (
        <DelayTable
          bpm={canUseBpm ? bpm : null}
          title={labels.delayTitle}
          labels={noteLabels}
          emptyLabel={labels.emptyDelay}
        />
      ) : null}
      {showFavorites ? (
        <FavoritesBar
          favorites={favorites}
          currentBpm={bpm}
          currentMeter={meterId}
          labels={{
            title: labels.favoritesTitle,
            empty: labels.favoritesEmpty,
            edit: labels.favoritesEdit,
            done: labels.favoritesDone,
            remove: labels.favoritesRemove,
            saveEdit: labels.favoritesSaveEdit,
            bpm: labels.favoritesBpm,
            meter: labels.favoritesMeter,
            manageHint: labels.favoritesManageHint,
          }}
          onSelect={onSelectFavorite}
          onRemove={onRemoveFavorite}
          onUpdate={onUpdateFavorite}
        />
      ) : null}
      {showGenreHint ? (
        <GenreHint
          matches={genreMatches}
          locale={locale}
          title={labels.genreHintTitle}
          closestLabel={labels.genreClosest}
          rangeLabel={(min, max) => `${min}–${max} BPM`}
          homeHrefFor={homeHrefFor}
        />
      ) : null}
      {showHistory ? (
        <HistoryList
          title={labels.historyTitle}
          emptyLabel={labels.historyEmpty}
          items={history}
        />
      ) : null}
    </div>
  );
}
