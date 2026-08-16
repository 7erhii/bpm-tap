import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import AstroPWA from '@vite-pwa/astro';

const root = path.dirname(fileURLToPath(import.meta.url));

/** In `astro dev`, `trailingSlash: 'always'` 404s before routing. Redirect first. */
function trailingSlashDevRedirect() {
  /** @type {import('vite').Plugin} */
  const plugin = {
    name: 'trailing-slash-dev-redirect',
    configureServer(server) {
      /** @type {import('connect').NextHandleFunction} */
      const handler = (req, res, next) => {
        const raw = req.url ?? '/';
        const q = raw.indexOf('?');
        const pathname = q === -1 ? raw : raw.slice(0, q);
        const search = q === -1 ? '' : raw.slice(q);
        const skip =
          pathname === '/' ||
          pathname.endsWith('/') ||
          pathname.startsWith('/@') ||
          pathname.startsWith('/src/') ||
          pathname.startsWith('/node_modules') ||
          pathname.startsWith('/__') ||
          pathname.includes(':') ||
          /\.[a-zA-Z0-9]+$/.test(pathname);
        if (skip) {
          next();
          return;
        }
        res.statusCode = 301;
        res.setHeader('Location', `${pathname}/${search}`);
        res.end();
      };
      return () => {
        server.middlewares.stack.unshift({ route: '', handle: handler });
      };
    },
  };
  return plugin;
}

export default defineConfig({
  site: 'https://bpm-tap.com',
  trailingSlash: 'always',
  integrations: [
    react(),
    sitemap({
      // Root `/` is a locale redirect (301 + noindex) — not an indexable page.
      filter: (page) => {
        try {
          return new URL(page).pathname !== '/';
        } catch {
          return page !== 'https://bpm-tap.com/' && page !== 'https://bpm-tap.com';
        }
      },
      serialize(item) {
        if (!item.links?.length) return item;
        const seen = new Set();
        item.links = item.links
          .map((link) => {
            try {
              const u = new URL(link.url);
              if (u.pathname === '/') {
                return { ...link, url: `${u.origin}/en/` };
              }
            } catch {
              /* keep original */
            }
            return link;
          })
          .filter((link) => {
            const key = `${link.lang ?? link.hreflang ?? ''}:${link.url}`;
            if (seen.has(key)) return false;
            seen.add(key);
            return true;
          });
        return item;
      },
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          ru: 'ru',
          es: 'es',
          fr: 'fr',
          pt: 'pt',
          zh: 'zh-CN',
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
        // MPA: unknown URLs must hit the real 404, not a cached homepage (soft 404).
        navigateFallback: '/en/',
        navigateFallbackDenylist: [/.*/],
        globPatterns: ['**/*.{js,css,html,svg,png,ico,webp,woff2}'],
      },
    }),
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru', 'es', 'fr', 'pt', 'zh'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
  vite: {
    plugins: [trailingSlashDevRedirect()],
    resolve: {
      alias: {
        '@': path.join(root, 'src'),
      },
    },
  },
});
