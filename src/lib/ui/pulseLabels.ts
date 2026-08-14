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
    tapCtaCount: t(locale, 'pulse.ctaCount'),
    tapCtaDone: t(locale, 'pulse.ctaDone'),
    tapSubCount: t(locale, 'pulse.subCount'),
    tapSubDone: t(locale, 'pulse.subDone'),
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
      clearAll: t(locale, 'pulse.save.clearAll'),
      privacyNote: t(locale, 'pulse.save.privacyNote'),
      unit: t(locale, 'pulse.unit'),
    },
    pulseTheme: {
      label: t(locale, 'pulse.themeLabel'),
      lightLabel: t(locale, 'pulse.themeLight'),
      darkLabel: t(locale, 'pulse.themeDark'),
    },
  };
}
