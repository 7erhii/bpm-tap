import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import AstroPWA from '@vite-pwa/astro';
import { loadEnv } from 'vite';
import { BODY_MAX } from './src/lib/contact/limits';
import { clientIp, contactDeliveryFromEnv, handleContactPost } from './src/lib/contact/handler';

const root = path.dirname(fileURLToPath(import.meta.url));
const loadedEnv = loadEnv(process.env.NODE_ENV ?? 'development', root, '');

function isContactApiPath(pathname) {
  return pathname === '/api/contact' || pathname === '/api/contact/';
}

/** Local POST /api/contact for `astro dev` and `astro preview`. */
function contactApiPlugin() {
  const delivery = () =>
    contactDeliveryFromEnv({
      RESEND_API_KEY: process.env.RESEND_API_KEY || loadedEnv.RESEND_API_KEY,
      RESEND_FROM: process.env.RESEND_FROM || loadedEnv.RESEND_FROM,
      CONTACT_TO_EMAIL: process.env.CONTACT_TO_EMAIL || loadedEnv.CONTACT_TO_EMAIL,
    });

  /** @param {import('vite').ViteDevServer | import('vite').PreviewServer} server */
  function attach(server) {
    /** @type {import('connect').NextHandleFunction} */
    const handler = async (req, res, next) => {
      const raw = req.url ?? '/';
      const pathname = raw.split('?')[0] ?? '/';
      if (!isContactApiPath(pathname)) {
        next();
        return;
      }
      if (req.method === 'OPTIONS') {
        res.statusCode = 204;
        res.end();
        return;
      }
      if (req.method !== 'POST') {
        res.statusCode = 405;
        res.setHeader('content-type', 'application/json; charset=utf-8');
        res.end(JSON.stringify({ ok: false, error: 'invalid' }));
        return;
      }

      const chunks = [];
      for await (const chunk of req) chunks.push(chunk);
      const text = Buffer.concat(chunks).toString('utf8');
      if (text.length > BODY_MAX) {
        res.statusCode = 413;
        res.setHeader('content-type', 'application/json; charset=utf-8');
        res.end(JSON.stringify({ ok: false, error: 'invalid' }));
        return;
      }

      let body = null;
      try {
        body = text ? JSON.parse(text) : null;
      } catch {
        body = null;
      }

      const headers = new Headers();
      for (const [key, value] of Object.entries(req.headers)) {
        if (typeof value === 'string') headers.set(key, value);
      }

      const result = await handleContactPost({
        body,
        ip: clientIp(headers),
        ...delivery(),
      });
      res.statusCode = result.status;
      res.setHeader('content-type', 'application/json; charset=utf-8');
      res.end(JSON.stringify(result.body));
    };

    return () => {
      server.middlewares.stack.unshift({ route: '', handle: handler });
    };
  }

  /** @type {import('vite').Plugin} */
  return {
    name: 'contact-api',
    configureServer(server) {
      return attach(server);
    },
    configurePreviewServer(server) {
      return attach(server);
    },
  };
}

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
          pathname.startsWith('/api') ||
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
        // MPA: never serve a cached HTML shell for `/` (that skips the locale redirect
        // and can show the tap UI without CSS after a CSS-hash deploy).
        globPatterns: ['**/*.{js,css,svg,png,ico,webp,woff2}'],
        navigateFallback: null,
        navigateFallbackDenylist: [/.*/],
        skipWaiting: true,
        clientsClaim: true,
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
    plugins: [contactApiPlugin(), trailingSlashDevRedirect()],
    resolve: {
      alias: {
        '@': path.join(root, 'src'),
      },
    },
  },
});
