const CACHE_NAME = 'horizon-cache-v2';
const ASSETS_TO_CACHE = [
  '/Horizon/',
  '/Horizon/index.html',
  '/Horizon/logo-horizon.png',
  '/Horizon/manifest.json',
  'https://cdn.jsdelivr.net/npm/chart.js'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      return cachedResponse || fetch(e.request);
    })
  );
});
