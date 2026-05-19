const CACHE_NAME = 'mathmasters-v1';
const urlsToCache = [
  '/math-masters/',
  '/math-masters/index.html',
  '/math-masters/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
