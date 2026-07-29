import { t, type Locale } from '@/i18n/utils';
import type { StudioAppLabels } from '@/components/tool/StudioApp';
import { tapLabels } from './tapLabels';

export function studioLabels(locale: Locale): StudioAppLabels {
  return {
    ...tapLabels(locale),
    modeTap: t(locale, 'studio.mode.tap'),
    modeListen: t(locale, 'studio.mode.listen'),
    listenStart: t(locale, 'listen.start'),
    listenStop: t(locale, 'listen.stop'),
    listenHint: t(locale, 'listen.hint'),
    listenPrivacy: t(locale, 'listen.privacy'),
    listenLevel: t(locale, 'listen.level'),
    listenCandidates: t(locale, 'listen.candidates'),
    statusIdle: t(locale, 'listen.status.idle'),
    statusRequesting: t(locale, 'listen.status.requesting'),
    statusListening: t(locale, 'listen.status.listening'),
    statusDenied: t(locale, 'listen.status.denied'),
    statusUnsupported: t(locale, 'listen.status.unsupported'),
    statusError: t(locale, 'listen.status.error'),
    statusWeak: t(locale, 'listen.status.weak'),
    confidenceListenNone: t(locale, 'listen.confidence.none'),
    confidenceListenLow: t(locale, 'listen.confidence.low'),
    confidenceListenMedium: t(locale, 'listen.confidence.medium'),
    confidenceListenHigh: t(locale, 'listen.confidence.high'),
    listenThenTap: t(locale, 'listen.thenTap'),
    enterListenBpm: t(locale, 'listen.enterBpm'),
  };
}

/** @deprecated use studioLabels — kept for any leftover imports */
export const listenLabels = studioLabels;
