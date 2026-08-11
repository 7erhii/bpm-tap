import { t, type Locale } from '@/i18n/utils';
import { tapLabels } from './tapLabels';
import type { TapAppLabels } from '@/components/tool/TapApp';

/** Musical tap labels with pulse/HR copy overrides. */
export function pulseLabels(locale: Locale): TapAppLabels {
  return {
    ...tapLabels(locale),
    tapCta: t(locale, 'pulse.cta'),
    tapHint: t(locale, 'pulse.hint'),
    tapHintTouch: t(locale, 'pulse.hintTouch'),
    tapLockedCta: t(locale, 'pulse.lockedCta'),
    tapLockedHint: t(locale, 'pulse.lockedHint'),
    unit: t(locale, 'pulse.unit'),
    enterBpm: t(locale, 'pulse.enterBpm'),
    confidenceNone: t(locale, 'pulse.confidence.none'),
    confidenceLow: t(locale, 'pulse.confidence.low'),
    confidenceMedium: t(locale, 'pulse.confidence.medium'),
    confidenceHigh: t(locale, 'pulse.confidence.high'),
    pulseSave: {
      title: t(locale, 'pulse.save.title'),
      namePlaceholder: t(locale, 'pulse.save.namePlaceholder'),
      save: t(locale, 'pulse.save.action'),
      saved: t(locale, 'pulse.save.saved'),
      empty: t(locale, 'pulse.save.empty'),
      remove: t(locale, 'pulse.save.remove'),
      needBpm: t(locale, 'pulse.save.needBpm'),
      unit: t(locale, 'pulse.unit'),
    },
  };
}
