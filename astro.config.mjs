import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import AstroPWA from '@vite-pwa/astro';

const root = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  site: 'https://bpm-tap.com',
  trailingSlash: 'always',
  integrations: [
    react(),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          ru: 'ru',
          es: 'es',
          fr: 'fr',
          pt: 'pt',
        },
      },
    }),
    AstroPWA({
      registerType: 'autoUpdate',
      injectRegister: null,
      includeAssets: [
        'favicon.svg',
        'favicon-48.png',
        'favicon-192.png',
        'favicon-pulse.svg',
        'favicon-pulse-48.png',
        'favicon-pulse-192.png',
        'apple-touch-icon.png',
        'apple-touch-icon-pulse.png',
        'icons/*.png',
        'icons/*.svg',
      ],
      manifest: {
        name: 'BPM Tap',
        short_name: 'BPM Tap',
        description: 'Free online BPM counter — find tempo instantly',
        theme_color: '#0B0C10',
        background_color: '#0B0C10',
        display: 'standalone',
        start_url: '/en/',
        lang: 'en',
        icons: [
          {
            src: '/icons/icon-192.svg',
            sizes: '192x192',
            type: 'image/svg+xml',
            purpose: 'any maskable',
          },
          {
            src: '/icons/icon-512.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
            purpose: 'any maskable',
          },
        ],
      },
      workbox: {
        navigateFallback: '/en/',
        globPatterns: ['**/*.{js,css,html,svg,png,ico,webp,woff2}'],
      },
    }),
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru', 'es', 'fr', 'pt'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
  vite: {
    resolve: {
      alias: {
        '@': path.join(root, 'src'),
      },
    },
  },
});
