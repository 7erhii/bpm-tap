import { trimTitle } from '@/lib/seo/meta';

const BPM_PREFIX = /^\d+\s*BPM\s*[·•|—\-]\s*/i;

/** Strip a live BPM prefix so we can re-apply cleanly. */
export function getBaseDocumentTitle(title = typeof document !== 'undefined' ? document.title : ''): string {
  return title.replace(BPM_PREFIX, '').trim();
}

/** Keep the tab/SERP title unique when a BPM is known (e.g. ?bpm=128). */
export function setDocumentTitleWithBpm(baseTitle: string, bpm: number | null | undefined): void {
  if (typeof document === 'undefined') return;
  if (bpm == null || !Number.isFinite(bpm)) {
    document.title = baseTitle;
    return;
  }
  document.title = trimTitle(`${Math.round(bpm)} BPM · ${baseTitle}`);
}
