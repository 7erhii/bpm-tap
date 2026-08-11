import { useEffect, useMemo, useRef, useState } from 'react';
import { createTapEngine } from '@/lib/bpm/engine';
import type { EngineSnapshot } from '@/lib/bpm/types';
import {
  loadFavorites,
  removeFavorite,
  toggleFavorite,
  updateFavorite,
  type FavoritePreset,
} from '@/lib/favorites/storage';
import { closestGenres } from '@/lib/genres/match';
import { loadHistory, saveHistoryItem, type HistoryItem } from '@/lib/history/storage';
import { createMetronome, type TimeSignatureId } from '@/lib/metronome/scheduler';
import { buildShareUrl, displayBpmInteger, parseBpmParam } from '@/lib/share/url';
import { getBaseDocumentTitle, setDocumentTitleWithBpm } from '@/lib/seo/documentTitle';
import { localizedPath, type Locale } from '@/i18n/utils';
import { BpmReadout, type IdleMark } from './BpmReadout';
import { MetronomeBar } from './MetronomeBar';
import { PrimaryControls } from './PrimaryControls';
import { PulseSaveLog, type PulseSaveLabels } from '@/components/pulse/PulseSaveLog';
import { SidePanels } from './SidePanels';
import { TapTarget } from './TapTarget';
import './tool.css';

export interface TapAppLabels {
  tapCta: string;
  tapHint: string;
  tapHintTouch?: string;
  /** Pulse: pad copy after a stable reading (until Reset). */
  tapLockedCta?: string;
  tapLockedHint?: string;
  placeholder: string;
  unit: string;
  confidenceNone: string;
  confidenceLow: string;
  confidenceMedium: string;
  confidenceHigh: string;
  confidenceShared: string;
  confidenceManual: string;
  enterBpm: string;
  reset: string;
  half: string;
  double: string;
  copy: string;
  copied: string;
  copyFail: string;
  share: string;
  fullscreen: string;
  exitFullscreen: string;
  metronomeStart: string;
  metronomeStop: string;
  meterLabel: string;
  accentHint: string;
  delayTitle: string;
  historyTitle: string;
  historyEmpty: string;
  favoritesTitle: string;
  favoritesAdd: string;
  favoritesSaved: string;
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
  outOfRange: string;
  noteLabels: Record<string, string>;
  pulseSave?: PulseSaveLabels;
}

interface Props {
  locale: Locale;
  labels: TapAppLabels;
  mode?: 'full' | 'tap' | 'delay' | 'metronome' | 'pulse';
}

function confidenceLabel(snapshot: EngineSnapshot, labels: TapAppLabels): string {
  if (snapshot.tapCount === 0 && snapshot.source === 'share') return labels.confidenceShared;
  if (snapshot.tapCount === 0 && snapshot.source === 'manual') return labels.confidenceManual;
  switch (snapshot.confidence) {
    case 'high':
      return labels.confidenceHigh;
    case 'medium':
      return labels.confidenceMedium;
    case 'low':
      return labels.confidenceLow;
    default:
      return labels.confidenceNone;
  }
}

function isTypingTarget(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) return false;
  if (target.isContentEditable) return true;
  const tag = target.tagName;
  return tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || tag === 'OPTION';
}

function isSpaceKey(event: KeyboardEvent): boolean {
  return event.code === 'Space' || event.key === ' ' || event.key === 'Spacebar';
}

/** Space always taps (outside text fields). Other keys too, unless a chrome control is focused. */
function isTapKey(event: KeyboardEvent): boolean {
  if (event.repeat || event.metaKey || event.ctrlKey || event.altKey) return false;
  if (isTypingTarget(event.target)) return false;

  // Classic: Space is the primary keyboard tap — always honor it
  if (isSpaceKey(event)) return true;

  const el = event.target instanceof HTMLElement ? event.target : null;
  const onPad = !!el?.closest('.tap-pad');
  if (!onPad && el?.closest('button, a, [role="button"]')) return false;

  const { key } = event;
  if (key === 'Escape' || key === 'Tab') return false;
  if (key === 'Shift' || key === 'Control' || key === 'Alt' || key === 'Meta') return false;
  if (key.startsWith('Arrow')) return false;
  if (/^F\d{1,2}$/.test(key)) return false;
  if (
    key === 'Home' ||
    key === 'End' ||
    key === 'PageUp' ||
    key === 'PageDown' ||
    key === 'Insert' ||
    key === 'Delete' ||
    key === 'CapsLock' ||
    key === 'ContextMenu' ||
    key === 'NumLock' ||
    key === 'ScrollLock'
  ) {
    return false;
  }
  return key === 'Enter' || key.length === 1;
}

export default function TapApp({ locale, labels, mode = 'full' }: Props) {
  const isPulse = mode === 'pulse';
  const engineRef = useRef(
    createTapEngine(
      isPulse
        ? {
            // Slower resting pulses need a wider gap before a session resets.
            staleGapMs: 3500,
            minBpm: 30,
            maxBpm: 240,
            minTapsToDisplay: 3,
            windowSize: 8,
            stableTapCount: 8,
          }
        : undefined,
    ),
  );
  const metroRef = useRef(createMetronome());
  const [snapshot, setSnapshot] = useState<EngineSnapshot>(() =>
    engineRef.current.getSnapshot(),
  );
  const [pulseToken, setPulseToken] = useState(0);
  const [copied, setCopied] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [favorites, setFavorites] = useState<FavoritePreset[]>([]);
  const [metroOn, setMetroOn] = useState(false);
  const [meterId, setMeterId] = useState<TimeSignatureId>('4/4');
  const [activeBeat, setActiveBeat] = useState<number | null>(null);
  const lastSavedBpm = useRef<number | null>(null);
  // TODO: re-enable when we have a writable board backend
  // const challengeStartRef = useRef<number | null>(null);
  // const challengePostedRef = useRef(false);

  const showSidePanels =
    !isPulse && (mode === 'full' || mode === 'metronome' || mode === 'delay') && !fullscreen;
  const showMetronome = !isPulse && (mode === 'full' || mode === 'metronome');
  const showDelay = !isPulse && (mode === 'full' || mode === 'metronome' || mode === 'delay');
  const showHistory = !isPulse && (mode === 'full' || mode === 'metronome');
  const showFavorites = !isPulse && (mode === 'full' || mode === 'metronome');
  const showGenreHint = !isPulse && (mode === 'full' || mode === 'metronome');
  const showFactor = !isPulse;
  // TODO: re-enable when we have a writable board backend
  // const trackChallenge = !isPulse;
  const idleMark: IdleMark =
    mode === 'pulse'
      ? 'dot'
      : mode === 'delay'
        ? 'timer'
        : mode === 'metronome'
          ? 'metronome'
          : 'note';

  useEffect(() => {
    if (!isPulse) {
      setHistory(loadHistory());
      setFavorites(loadFavorites());
    }
    const params = new URLSearchParams(window.location.search);
    const shared = parseBpmParam(params.get('bpm'));
    if (shared != null) {
      setSnapshot(engineRef.current.hydrateBpm(shared, 'share'));
    }
    if (!isPulse) {
      metroRef.current.setOnBeat((beatIndex) => setActiveBeat(beatIndex));
    }
    return () => {
      metroRef.current.setOnBeat(null);
      metroRef.current.stop();
    };
  }, [isPulse]);

  const baseTitleRef = useRef<string | null>(null);
  useEffect(() => {
    baseTitleRef.current = getBaseDocumentTitle();
  }, []);
  useEffect(() => {
    const base = baseTitleRef.current;
    if (!base) return;
    setDocumentTitleWithBpm(base, snapshot.bpm != null && snapshot.inRange ? snapshot.bpm : null);
  }, [snapshot.bpm, snapshot.inRange]);

  const pulseLocked =
    isPulse && snapshot.confidence === 'high' && snapshot.source === 'tap';
  const pulseLockedRef = useRef(false);
  pulseLockedRef.current = pulseLocked;

  const registerTap = () => {
    if (pulseLockedRef.current) return;
    const next = engineRef.current.tap();
    // TODO: re-enable when we have a writable board backend
    // if (trackChallenge) {
    //   if (next.tapCount === 1) {
    //     challengeStartRef.current = performance.now();
    //     challengePostedRef.current = false;
    //   }
    //   if (
    //     next.confidence === 'high' &&
    //     next.source === 'tap' &&
    //     next.bpm != null &&
    //     challengeStartRef.current != null &&
    //     !challengePostedRef.current
    //   ) {
    //     challengePostedRef.current = true;
    //     window.dispatchEvent(
    //       new CustomEvent('bpm-tap:speed-score', {
    //         detail: { ms: performance.now() - challengeStartRef.current, bpm: next.bpm },
    //       }),
    //     );
    //   }
    // }
    setSnapshot(next);
    setPulseToken((n) => n + 1);
  };

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.code === 'Escape') {
        setFullscreen(false);
        return;
      }
      if (!isTapKey(event)) return;
      event.preventDefault();
      registerTap();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    if (isPulse) return;
    if (snapshot.bpm == null) return;
    if (snapshot.confidence !== 'high' && snapshot.confidence !== 'medium' && snapshot.source !== 'share' && snapshot.source !== 'manual') {
      return;
    }
    const rounded = Math.round(snapshot.bpm);
    if (lastSavedBpm.current === rounded) return;
    lastSavedBpm.current = rounded;
    setHistory(
      saveHistoryItem({
        bpm: rounded,
        source: snapshot.source === 'tap' ? 'tap' : snapshot.source === 'manual' ? 'manual' : 'share',
        locale,
      }),
    );
  }, [isPulse, snapshot.bpm, snapshot.confidence, snapshot.source, locale]);

  useEffect(() => {
    if (metroOn && snapshot.bpm != null) {
      metroRef.current.setBpm(snapshot.bpm);
    }
  }, [snapshot.bpm, metroOn]);

  const handleTap = () => {
    registerTap();
  };

  const canUseBpm = snapshot.bpm != null && snapshot.inRange;
  const isFavorite =
    snapshot.bpm != null &&
    favorites.some(
      (preset) =>
        preset.bpm === Math.round(snapshot.bpm!) && preset.meter === meterId,
    );
  const genreMatches = useMemo(
    () => (canUseBpm && snapshot.bpm != null ? closestGenres(snapshot.bpm, 3) : []),
    [canUseBpm, snapshot.bpm],
  );

  const onCopy = async () => {
    if (snapshot.bpm == null) return;
    try {
      await navigator.clipboard.writeText(displayBpmInteger(snapshot.bpm));
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      window.alert(labels.copyFail);
    }
  };

  const onShare = async () => {
    if (snapshot.bpm == null) return;
    const url = `${window.location.origin}${buildShareUrl(window.location.pathname, snapshot.bpm)}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      window.prompt(labels.share, url);
    }
  };

  const toggleMetronome = async () => {
    if (metroOn) {
      metroRef.current.stop();
      setMetroOn(false);
      setActiveBeat(null);
      return;
    }
    if (snapshot.bpm == null) return;
    await metroRef.current.start(snapshot.bpm, meterId);
    setMetroOn(true);
  };

  const onMeterChange = (id: TimeSignatureId) => {
    setMeterId(id);
    metroRef.current.setMeter(id);
    if (metroOn && snapshot.bpm != null) {
      void metroRef.current.start(snapshot.bpm, id);
    }
  };

  const hydratePreset = (preset: FavoritePreset) => {
    setSnapshot(engineRef.current.hydrateBpm(preset.bpm, 'share'));
    setMeterId(preset.meter);
    metroRef.current.setMeter(preset.meter);
    if (metroOn) {
      void metroRef.current.start(preset.bpm, preset.meter);
    }
  };

  const noteLabels = useMemo(() => {
    return { ...labels.noteLabels, 'control.copy': labels.copy };
  }, [labels]);

  return (
    <div
      className={`tap-app${fullscreen ? ' is-fullscreen' : ''}`}
      data-tool-root
    >
      <div className="tap-stage">
        <BpmReadout
          bpm={snapshot.bpm}
          unit={labels.unit}
          placeholder={labels.placeholder}
          idleMark={idleMark}
          live={snapshot.tapCount > 0}
          outOfRange={snapshot.bpm != null && !snapshot.inRange}
          outOfRangeLabel={labels.outOfRange}
          confidenceLevel={snapshot.confidence}
          confidenceLabel={confidenceLabel(snapshot, labels)}
          deviationBpm={snapshot.deviationBpm}
          editable
          enterLabel={labels.enterBpm}
          onCommitBpm={(value) => {
            setSnapshot(engineRef.current.hydrateBpm(value, 'manual'));
          }}
        />

        <TapTarget
          title={pulseLocked && labels.tapLockedCta ? labels.tapLockedCta : labels.tapCta}
          hint={pulseLocked && labels.tapLockedHint ? labels.tapLockedHint : labels.tapHint}
          hintTouch={
            pulseLocked && labels.tapLockedHint
              ? labels.tapLockedHint
              : labels.tapHintTouch
          }
          onTap={handleTap}
          pulseToken={pulseToken}
          hintBelow={isPulse}
          scrollSafe={isPulse}
          locked={pulseLocked}
        />

        <PrimaryControls
          labels={{
            reset: labels.reset,
            half: labels.half,
            double: labels.double,
            copy: labels.copy,
            copied: labels.copied,
            share: labels.share,
            fullscreen: labels.fullscreen,
            exitFullscreen: labels.exitFullscreen,
            save: labels.favoritesAdd,
            saved: labels.favoritesSaved,
          }}
          canUseBpm={!!canUseBpm}
          copied={copied}
          fullscreen={fullscreen}
          showSave={showFavorites}
          showFactor={showFactor}
          isFavorite={isFavorite}
          onReset={() => {
            metroRef.current.stop();
            setMetroOn(false);
            setActiveBeat(null);
            lastSavedBpm.current = null;
            // TODO: re-enable when we have a writable board backend
            // challengeStartRef.current = null;
            // challengePostedRef.current = false;
            setSnapshot(engineRef.current.reset());
          }}
          onHalf={() => setSnapshot(engineRef.current.half())}
          onDouble={() => setSnapshot(engineRef.current.double())}
          onCopy={onCopy}
          onShare={onShare}
          onToggleFullscreen={() => setFullscreen((v) => !v)}
          onToggleFavorite={() => {
            if (snapshot.bpm == null) return;
            setFavorites(toggleFavorite(snapshot.bpm, meterId));
          }}
        />

        {showMetronome ? (
          <MetronomeBar
            meterId={meterId}
            activeBeat={metroOn ? activeBeat : null}
            running={metroOn}
            disabled={!canUseBpm}
            labels={{
              start: labels.metronomeStart,
              stop: labels.metronomeStop,
              meter: labels.meterLabel,
              accentHint: labels.accentHint,
            }}
            onToggle={toggleMetronome}
            onMeterChange={onMeterChange}
          />
        ) : null}

        {isPulse && labels.pulseSave && !fullscreen ? (
          <PulseSaveLog
            bpm={snapshot.bpm}
            canSave={!!canUseBpm}
            labels={labels.pulseSave}
            locale={locale}
          />
        ) : null}
      </div>

      {showSidePanels ? (
        <SidePanels
          locale={locale}
          showDelay={showDelay}
          showFavorites={showFavorites}
          showGenreHint={showGenreHint}
          showHistory={showHistory}
          bpm={snapshot.bpm}
          canUseBpm={!!canUseBpm}
          meterId={meterId}
          favorites={favorites}
          history={history}
          genreMatches={genreMatches}
          noteLabels={noteLabels}
          labels={{
            delayTitle: labels.delayTitle,
            emptyDelay: labels.confidenceNone,
            favoritesTitle: labels.favoritesTitle,
            favoritesEmpty: labels.favoritesEmpty,
            favoritesEdit: labels.favoritesEdit,
            favoritesDone: labels.favoritesDone,
            favoritesRemove: labels.favoritesRemove,
            favoritesSaveEdit: labels.favoritesSaveEdit,
            favoritesBpm: labels.favoritesBpm,
            favoritesMeter: labels.favoritesMeter,
            favoritesManageHint: labels.favoritesManageHint,
            genreHintTitle: labels.genreHintTitle,
            genreClosest: labels.genreClosest,
            historyTitle: labels.historyTitle,
            historyEmpty: labels.historyEmpty,
          }}
          homeHrefFor={(slug) => localizedPath(locale, `genres/${slug}`)}
          onSelectFavorite={hydratePreset}
          onRemoveFavorite={(preset) => {
            setFavorites(removeFavorite(preset.bpm, preset.meter));
          }}
          onUpdateFavorite={(from, to) => {
            setFavorites(updateFavorite(from, to));
          }}
        />
      ) : null}
    </div>
  );
}
