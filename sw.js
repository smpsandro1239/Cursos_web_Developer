const CACHE_NAME = 'aprende-web-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/css/styles.css',
  '/css/module.css',
  '/css/dark-mode.css',
  '/js/main.js',
  '/js/auth.js',
  '/js/progress.js',
  '/js/theme.js',
  '/js/module.js',
  '/js/quiz.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
