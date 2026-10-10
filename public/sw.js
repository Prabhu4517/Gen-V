// GEN V Progressive Web App (PWA) Service Worker
const CACHE_NAME = 'genv-pwa-v1';

const STATIC_PRECACHE = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.png',
  '/logoMain.png',
  '/pwa-192x192.png',
  '/pwa-512x512.png'
];

// Install: Pre-cache core shell assets
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_PRECACHE);
    })
  );
});

// Activate: Clean up previous version caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch: Stale-While-Revalidate with Offline Fallback
self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // Skip browser extensions and chrome-extension:// requests
  if (url.protocol !== 'http:' && url.protocol !== 'https:') return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const fetchPromise = fetch(event.request)
        .then((networkResponse) => {
          if (
            networkResponse &&
            networkResponse.status === 200 &&
            (networkResponse.type === 'basic' || networkResponse.type === 'cors')
          ) {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache);
            });
          }
          return networkResponse;
        })
        .catch(() => {
          // If offline and navigating to a page, serve cached index.html for SPA
          if (event.request.mode === 'navigate') {
            return caches.match('/index.html');
          }
          return cachedResponse || Response.error();
        });

      return cachedResponse || fetchPromise;
    })
  );
});
