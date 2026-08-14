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
import { localizedPath, type Locale } from '@/i18n/utils';
import { createListenSession } from '@/lib/listen/session';
import type { ListenStatus, TempoCandidate, TempoEstimate } from '@/lib/listen/types';
import { createMetronome, getMeter, type TimeSignatureId } from '@/lib/metronome/scheduler';
import { buildShareUrl, displayBpmInteger, parseBpmParam } from '@/lib/share/url';
import { getBaseDocumentTitle, setDocumentTitleWithBpm } from '@/lib/seo/documentTitle';
import type { TapAppLabels } from './TapApp';
import { BpmReadout } from './BpmReadout';
import { ConfidenceCue } from './ConfidenceCue';
import { DelayFacts } from './DelayFacts';
import { ModeSwitch } from './ModeSwitch';
import { PrimaryControls } from './PrimaryControls';
import { SidePanels } from './SidePanels';
import { TapTarget, type TapPadStage } from './TapTarget';
import { TempoAlts } from './TempoAlts';
import './tool.css';

export type StudioMode = 'tap' | 'listen';

export interface StudioAppLabels extends TapAppLabels {
  modeTap: string;
  modeListen: string;
  hintTap: string;
  hintListen: string;
  hintDenied: string;
  listenStart: string;
  listenStop: string;
  listenHint: string;
  listenPrivacy: string;
  listenLevel: string;
  listenCandidates: string;
  statusIdle: string;
  statusRequesting: string;
  statusListening: string;
  statusDenied: string;
  statusUnsupported: string;
  statusError: string;
  statusWeak: string;
  confidenceListenNone: string;
  confidenceListenLow: string;
  confidenceListenMedium: string;
  confidenceListenHigh: string;
  /** Shown under listen pad when a BPM exists — nudge to refine */
  listenThenTap: string;
  /** Readout idle hint while in Listen mode */
  enterListenBpm: string;
  tapCtaListen: string;
  tapSubListen: string;
  tapCtaListenStart: string;
  tapSubListenStart: string;
}

interface Props {
  locale: Locale;
  labels: StudioAppLabels;
  /** Home defaults to tap; /listen/ opens in listen */
  defaultMode?: StudioMode;
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

function isTapKey(event: KeyboardEvent): boolean {
  if (event.repeat || event.metaKey || event.ctrlKey || event.altKey) return false;
  if (isTypingTarget(event.target)) return false;
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

function confidenceLabel(
  snapshot: EngineSnapshot,
  mode: StudioMode,
  listening: boolean,
  weak: boolean,
  labels: StudioAppLabels,
): string {
  if (snapshot.source === 'manual') return labels.confidenceManual;
  if (snapshot.source === 'share') return labels.confidenceShared;
  if (mode === 'listen' || snapshot.source === 'listen') {
    if (weak && listening) return labels.statusWeak;
    switch (snapshot.confidence) {
      case 'high':
        return labels.confidenceListenHigh;
      case 'medium':
        return labels.confidenceListenMedium;
      case 'low':
        return labels.confidenceListenLow;
      default:
        return listening ? labels.confidenceListenNone : labels.statusIdle;
    }
  }
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

function modeHintText(
  mode: StudioMode,
  status: ListenStatus,
  labels: StudioAppLabels,
): { text: string; warn: boolean } {
  if (status === 'denied') return { text: labels.hintDenied, warn: true };
  if (mode === 'listen') return { text: labels.hintListen, warn: false };
  return { text: labels.hintTap, warn: false };
}

function applyListenEstimate(
  engine: ReturnType<typeof createTapEngine>,
  next: TempoEstimate,
): EngineSnapshot | null {
  if (next.bpm == null || next.confidence === 'none') return null;
  const base = engine.hydrateBpm(next.bpm, 'listen');
  return {
    ...base,
    confidence: next.confidence,
    status: next.confidence === 'high' ? 'stable' : 'measuring',
  };
}

function padStage(
  mode: StudioMode,
  listening: boolean,
  snapshot: EngineSnapshot,
): TapPadStage {
  if (mode === 'listen' && listening) return 'listen';
  if (snapshot.status === 'stable' && snapshot.bpm != null) return 'stable';
  if (snapshot.status === 'measuring' || snapshot.tapCount > 0) return 'counting';
  return 'idle';
}

/**
 * Unified BPM stage: Tap | Listen as equal input modes.
 * V6 reading zone on top, thumb pad pinned to the bottom.
 */
export default function StudioApp({
  locale,
  labels,
  defaultMode = 'tap',
}: Props) {
  const engineRef = useRef(createTapEngine());
  const metroRef = useRef(createMetronome());
  const sessionRef = useRef<ReturnType<typeof createListenSession> | null>(null);
  const lockedRef = useRef(false);
  const lastSavedBpm = useRef<number | null>(null);
  const modeRef = useRef<StudioMode>(defaultMode);
  const lastFrameAt = useRef(0);

  const [mode, setMode] = useState<StudioMode>(defaultMode);
  const [snapshot, setSnapshot] = useState<EngineSnapshot>(() =>
    engineRef.current.getSnapshot(),
  );
  const [status, setStatus] = useState<ListenStatus>('idle');
  const [estimate, setEstimate] = useState<TempoEstimate | null>(null);
  const [spectrum, setSpectrum] = useState<number[]>([]);
  const [pulseToken, setPulseToken] = useState(0);
  const [copied, setCopied] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [favorites, setFavorites] = useState<FavoritePreset[]>([]);
  const [metroOn, setMetroOn] = useState(false);
  const [meterId, setMeterId] = useState<TimeSignatureId>('4/4');
  const [activeBeat, setActiveBeat] = useState<number | null>(null);

  modeRef.current = mode;
  const listening = status === 'listening' || status === 'requesting';
  const signalLevel = estimate?.signalLevel ?? 0;
  const weak = listening && signalLevel < 0.06 && (estimate?.analyzedSec ?? 0) > 2;

  useEffect(() => {
    setHistory(loadHistory());
    setFavorites(loadFavorites());
    const params = new URLSearchParams(window.location.search);
    const shared = parseBpmParam(params.get('bpm'));
    if (shared != null) {
      setSnapshot(engineRef.current.hydrateBpm(shared, 'share'));
      lockedRef.current = true;
    }
    metroRef.current.setOnBeat((beatIndex) => setActiveBeat(beatIndex));

    sessionRef.current = createListenSession({
      onStatus: (next) => setStatus(next),
      onFrame: (frame) => {
        // ~60fps is enough for bars; hop is ~83Hz and would thrash React
        const now = performance.now();
        if (now - lastFrameAt.current < 32) return;
        lastFrameAt.current = now;
        setSpectrum(frame.spectrum);
      },
      onEstimate: (next) => {
        setEstimate(next);
        if (lockedRef.current) return;
        if (modeRef.current !== 'listen') return;
        const applied = applyListenEstimate(engineRef.current, next);
        if (applied) setSnapshot(applied);
      },
    });

    return () => {
      sessionRef.current?.stop();
      metroRef.current.setOnBeat(null);
      metroRef.current.stop();
    };
  }, []);

  const baseTitleRef = useRef<string | null>(null);
  useEffect(() => {
    baseTitleRef.current = getBaseDocumentTitle();
  }, []);
  useEffect(() => {
    const base = baseTitleRef.current;
    if (!base) return;
    setDocumentTitleWithBpm(base, snapshot.bpm != null && snapshot.inRange ? snapshot.bpm : null);
  }, [snapshot.bpm, snapshot.inRange]);

  useEffect(() => {
    if (snapshot.bpm == null) return;
    const saveable =
      snapshot.source === 'listen'
        ? snapshot.confidence === 'high' || snapshot.confidence === 'medium'
        : snapshot.source === 'share' ||
          snapshot.source === 'manual' ||
          ((snapshot.source === 'tap' || snapshot.tapCount > 0) &&
            (snapshot.confidence === 'high' || snapshot.confidence === 'medium'));
    if (!saveable) return;
    const rounded = Math.round(snapshot.bpm);
    if (lastSavedBpm.current === rounded) return;
    lastSavedBpm.current = rounded;
    const source =
      snapshot.source === 'listen'
        ? 'listen'
        : snapshot.source === 'manual'
          ? 'manual'
          : snapshot.source === 'share'
            ? 'share'
            : 'tap';
    setHistory(saveHistoryItem({ bpm: rounded, source, locale }));
  }, [snapshot.bpm, snapshot.confidence, snapshot.source, snapshot.tapCount, locale]);

  useEffect(() => {
    if (metroOn && snapshot.bpm != null) {
      metroRef.current.setBpm(snapshot.bpm);
    }
  }, [snapshot.bpm, metroOn]);

  const registerTap = () => {
    lockedRef.current = true;
    const next = engineRef.current.tap();
    setSnapshot(next);
    setPulseToken((n) => n + 1);
  };

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.code === 'Escape') {
        setFullscreen(false);
        return;
      }
      // Keyboard taps only in Tap mode — Listen owns the mic gesture
      if (modeRef.current !== 'tap') return;
      if (!isTapKey(event)) return;
      event.preventDefault();
      registerTap();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const stopListen = () => {
    sessionRef.current?.stop();
  };

  const changeMode = (next: StudioMode) => {
    if (next === mode) return;
    if (next === 'tap') {
      stopListen();
      // Keep current BPM as a starting point; first tap begins a fresh measure
      lockedRef.current = snapshot.bpm != null;
    } else {
      if (metroOn) {
        metroRef.current.stop();
        setMetroOn(false);
        setActiveBeat(null);
      }
      lockedRef.current = false;
    }
    setMode(next);
  };

  const toggleListen = async () => {
    const session = sessionRef.current;
    if (!session) return;
    if (listening) {
      stopListen();
      lockedRef.current = snapshot.bpm != null;
      return;
    }
    if (metroOn) {
      metroRef.current.stop();
      setMetroOn(false);
      setActiveBeat(null);
    }
    lockedRef.current = false;
    lastSavedBpm.current = null;
    await session.start();
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
  const candidates: TempoCandidate[] = estimate?.candidates ?? [];
  const stage = padStage(mode, listening, snapshot);
  const hint = modeHintText(mode, status, labels);
  const beatSec =
    snapshot.bpm != null && snapshot.inRange ? 60 / snapshot.bpm : undefined;
  const showFlash = stage === 'stable' && canUseBpm;

  const padCopy = (() => {
    if (mode === 'listen') {
      if (listening) {
        return {
          title: labels.tapCtaListen,
          hint: labels.tapSubListen,
          hintTouch: labels.tapSubListen,
          sub: labels.tapSubListen,
        };
      }
      return {
        title: labels.tapCtaListenStart,
        hint: labels.tapSubListenStart,
        hintTouch: labels.tapSubListenStart,
        sub: labels.listenPrivacy,
      };
    }
    if (stage === 'stable') {
      const bpmTxt =
        snapshot.bpm != null ? displayBpmInteger(snapshot.bpm) : '';
      const subDone = (labels.tapSubDone ?? '').replace('{bpm}', bpmTxt);
      return {
        title: labels.tapCtaDone ?? labels.tapCta,
        hint: subDone,
        hintTouch: subDone,
        sub: subDone,
      };
    }
    if (stage === 'counting') {
      return {
        title: labels.tapCtaCount ?? labels.tapCta,
        hint: labels.tapSubCount ?? labels.tapHint,
        hintTouch: labels.tapSubCount ?? labels.tapHintTouch,
        sub: labels.tapSubCount ?? labels.tapHint,
      };
    }
    return {
      title: labels.tapCta,
      hint: labels.tapHint,
      hintTouch: labels.tapHintTouch,
      sub: labels.tapHint,
    };
  })();

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
    if (listening) {
      stopListen();
      lockedRef.current = true;
    }
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
    lockedRef.current = true;
    setSnapshot(engineRef.current.hydrateBpm(preset.bpm, 'share'));
    setMeterId(preset.meter);
    metroRef.current.setMeter(preset.meter);
    if (metroOn) {
      void metroRef.current.start(preset.bpm, preset.meter);
    }
  };

  const pickCandidate = (bpm: number) => {
    lockedRef.current = true;
    setSnapshot({
      ...engineRef.current.hydrateBpm(bpm, 'listen'),
      confidence: 'medium',
      status: 'stable',
    });
  };

  const noteLabels = useMemo(() => {
    return { ...labels.noteLabels, 'control.copy': labels.copy };
  }, [labels]);

  return (
    <div
      className={`tap-app${fullscreen ? ' is-fullscreen' : ''}`}
      data-tool-root
      data-skin="music"
    >
      <div className="tap-stage">
        <div className="stage__inner">
          <div className="readout">
            <ModeSwitch
              mode={mode}
              labels={{ tap: labels.modeTap, listen: labels.modeListen }}
              onChange={changeMode}
              hint={hint.text}
              hintWarn={hint.warn}
            />

            <BpmReadout
              bpm={snapshot.bpm}
              unit={labels.unit}
              placeholder={labels.placeholder}
              idleMark="dashes"
              live={
                (mode === 'tap' && snapshot.tapCount > 0) ||
                (mode === 'listen' && listening) ||
                snapshot.bpm != null
              }
              outOfRange={snapshot.bpm != null && !snapshot.inRange}
              outOfRangeLabel={labels.outOfRange}
              editable
              enterLabel={mode === 'listen' ? labels.enterListenBpm : labels.enterBpm}
              onCommitBpm={(value) => {
                lockedRef.current = true;
                setSnapshot(engineRef.current.hydrateBpm(value, 'manual'));
              }}
            />

            <TempoAlts
              bpm={canUseBpm ? snapshot.bpm : null}
              feelsOffLabel={labels.feelsOff ?? 'Feels off?'}
              halfLabel={labels.half}
              doubleLabel={labels.double}
              onHalf={() => {
                lockedRef.current = true;
                setSnapshot(engineRef.current.half());
              }}
              onDouble={() => {
                lockedRef.current = true;
                setSnapshot(engineRef.current.double());
              }}
            />

            <ConfidenceCue
              level={snapshot.confidence}
              label={confidenceLabel(snapshot, mode, listening, weak, labels)}
              deviationBpm={mode === 'tap' ? snapshot.deviationBpm : null}
              showMeter
            />
          </div>

          <PrimaryControls
            variant="quick"
            bpm={snapshot.bpm}
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
              metronomeStart: labels.metronomeStart,
              metronomeStop: labels.metronomeStop,
              meter: labels.meterLabel,
            }}
            canUseBpm={!!canUseBpm}
            copied={copied}
            fullscreen={fullscreen}
            showSave
            showFactor={false}
            isFavorite={isFavorite}
            metroOn={metroOn}
            meterId={meterId}
            onMetronome={() => void toggleMetronome()}
            onMeterChange={onMeterChange}
            onReset={() => {
              lockedRef.current = false;
              lastSavedBpm.current = null;
              stopListen();
              metroRef.current.stop();
              setMetroOn(false);
              setActiveBeat(null);
              setSnapshot(engineRef.current.reset());
              setEstimate(null);
              setSpectrum([]);
            }}
            onHalf={() => {
              lockedRef.current = true;
              setSnapshot(engineRef.current.half());
            }}
            onDouble={() => {
              lockedRef.current = true;
              setSnapshot(engineRef.current.double());
            }}
            onCopy={onCopy}
            onShare={onShare}
            onToggleFullscreen={() => setFullscreen((v) => !v)}
            onToggleFavorite={() => {
              if (snapshot.bpm == null) return;
              setFavorites(toggleFavorite(snapshot.bpm, meterId));
            }}
          />

          <DelayFacts bpm={stage === 'stable' && canUseBpm ? snapshot.bpm : null} />

          {mode === 'listen' && candidates.length > 1 && snapshot.bpm != null ? (
            <div className="listen-candidates" aria-label={labels.listenCandidates}>
              <span className="listen-candidates__label">{labels.listenCandidates}</span>
              <div className="listen-candidates__row">
                {candidates.slice(0, 4).map((c) => {
                  const active = Math.abs(c.bpm - (snapshot.bpm ?? 0)) < 0.6;
                  return (
                    <button
                      key={c.bpm}
                      type="button"
                      className={`btn${active ? ' btn--accent' : ''}`}
                      onMouseDown={(e) => e.preventDefault()}
                      onClick={() => pickCandidate(c.bpm)}
                    >
                      {Math.round(c.bpm)}
                    </button>
                  );
                })}
              </div>
            </div>
          ) : null}

          {mode === 'listen' && snapshot.bpm != null && !listening ? (
            <p className="listen-refine">
              <button
                type="button"
                className="listen-refine__btn"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => changeMode('tap')}
              >
                {labels.listenThenTap}
              </button>
            </p>
          ) : null}

          <div className="studio-interact">
            <TapTarget
              variant="music"
              stage={stage}
              title={padCopy.title}
              hint={padCopy.hint}
              hintTouch={padCopy.hintTouch}
              sub={padCopy.sub}
              subTouch={padCopy.hintTouch}
              onTap={() => {
                if (mode === 'listen') {
                  void toggleListen();
                  return;
                }
                registerTap();
              }}
              pulseToken={pulseToken}
              beatSec={beatSec}
              beatCount={getMeter(meterId).beatsPerBar}
              activeBeat={metroOn ? activeBeat : null}
              spectrum={spectrum}
              listening={listening}
              showFlash={showFlash}
              scrollSafe
            />
          </div>
        </div>
      </div>

      {!fullscreen ? (
        <SidePanels
          locale={locale}
          showDelay
          showFavorites
          showGenreHint
          showHistory
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
