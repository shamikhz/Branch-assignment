// Service Worker with Partitioned Caching and LRU Eviction
const SHELL_CACHE = 'detective-shell-v2';
const EPISODE_CACHE = 'detective-episodes-v2';
const MEDIA_CACHE = 'detective-media-v2';

const MAX_EPISODE_CACHE_ITEMS = 15;
const MAX_MEDIA_CACHE_ITEMS = 30;

const ESSENTIAL_SHELL_ASSETS = [
  '/',
  '/manifest.json',
  '/icon.svg',
];

// Helper: Trim cache to max items (LRU style)
async function trimCache(cacheName, maxItems) {
  try {
    const cache = await caches.open(cacheName);
    const keys = await cache.keys();
    if (keys.length > maxItems) {
      const itemsToDelete = keys.slice(0, keys.length - maxItems);
      for (const req of itemsToDelete) {
        await cache.delete(req);
      }
    }
  } catch (e) {
    // Non-fatal
  }
}

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(SHELL_CACHE).then((cache) => {
      return cache.addAll(ESSENTIAL_SHELL_ASSETS).catch((err) => {
        console.warn('Pre-caching some shell assets failed', err);
      });
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  const CURRENT_CACHES = [SHELL_CACHE, EPISODE_CACHE, MEDIA_CACHE];
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => !CURRENT_CACHES.includes(key))
          .map((key) => {
            console.log('Evicting obsolete service worker cache:', key);
            return caches.delete(key);
          })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // Ignore chrome-extension or other origins if any
  if (!url.origin.startsWith(self.location.origin)) return;

  // Static hashed JS/CSS assets (_next/static): Cache-First Strategy
  if (url.pathname.startsWith('/_next/static/')) {
    event.respondWith(
      caches.match(event.request).then((cached) => {
        if (cached) return cached;
        return fetch(event.request).then((res) => {
          if (res && res.status === 200) {
            const clone = res.clone();
            caches.open(SHELL_CACHE).then((cache) => cache.put(event.request, clone));
          }
          return res;
        });
      })
    );
    return;
  }

  // Media / Images: Cache in MEDIA_CACHE with LRU eviction
  if (
    url.pathname.endsWith('.svg') ||
    url.pathname.endsWith('.webp') ||
    url.pathname.endsWith('.avif') ||
    url.pathname.endsWith('.png') ||
    url.pathname.endsWith('.jpg')
  ) {
    event.respondWith(
      caches.match(event.request).then((cached) => {
        if (cached) return cached;
        return fetch(event.request)
          .then((res) => {
            if (res && res.status === 200) {
              const clone = res.clone();
              caches.open(MEDIA_CACHE).then(async (cache) => {
                await cache.put(event.request, clone);
                await trimCache(MEDIA_CACHE, MAX_MEDIA_CACHE_ITEMS);
              });
            }
            return res;
          })
          .catch(() => cached);
      })
    );
    return;
  }

  // HTML / Navigation requests: Network-First with Stale-While-Revalidate
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then((res) => {
          if (res && res.status === 200) {
            const clone = res.clone();
            caches.open(SHELL_CACHE).then((cache) => cache.put(event.request, clone));
          }
          return res;
        })
        .catch(async () => {
          const cached = await caches.match(event.request);
          if (cached) return cached;
          const rootCached = await caches.match('/');
          if (rootCached) return rootCached;

          // Offline fallback response
          return new Response(
            `<!DOCTYPE html>
            <html lang="en">
            <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Detective Investigation — Offline</title>
              <style>
                body { background: #121316; color: #f7f4ed; font-family: Georgia, serif; text-align: center; padding: 40px 20px; }
                h1 { color: #c99738; margin-bottom: 12px; }
                p { max-width: 500px; margin: 0 auto 20px; line-height: 1.6; color: #cdc2ab; }
                button { background: #c99738; color: #121316; border: none; padding: 10px 20px; font-weight: bold; border-radius: 4px; cursor: pointer; }
              </style>
            </head>
            <body>
              <h1>CASE FILE OFFLINE</h1>
              <p>You are disconnected from the network and this case or view has not yet been saved locally for offline play.</p>
              <button onclick="window.location.reload()">Retry Connection</button>
            </body>
            </html>`,
            { headers: { 'Content-Type': 'text/html' } }
          );
        })
    );
    return;
  }

  // Default: Network with Cache Fallback
  event.respondWith(
    caches.match(event.request).then((cached) => {
      return (
        cached ||
        fetch(event.request)
          .then((networkRes) => {
            if (networkRes && networkRes.status === 200) {
              const clone = networkRes.clone();
              caches.open(SHELL_CACHE).then((cache) => cache.put(event.request, clone));
            }
            return networkRes;
          })
          .catch(() => cached)
      );
    })
  );
});

// Listen for messages from client (e.g. clear caches)
self.addEventListener('message', (event) => {
  if (event.data && event.data.action === 'CLEAR_NONESSENTIAL_CACHES') {
    event.waitUntil(
      Promise.all([caches.delete(EPISODE_CACHE), caches.delete(MEDIA_CACHE)]).then(() => {
        if (event.ports && event.ports[0]) {
          event.ports[0].postMessage({ success: true });
        }
      })
    );
  }
});
