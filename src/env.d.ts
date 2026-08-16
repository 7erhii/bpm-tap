/// <reference types="astro/client" />

interface NotFoundCopy {
  title: string;
  description: string;
  h1: string;
  lead: string;
  home: string;
  delay: string;
  metronome: string;
  listen: string;
  guides: string;
  brand: string;
}

interface Window {
  __nf?: { locale: string; copy: NotFoundCopy };
}

interface ImportMetaEnv {
  readonly PUBLIC_ADS_ENABLED?: string;
  readonly PUBLIC_SITE_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
