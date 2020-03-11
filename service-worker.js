const cacheName = "cache-v1";
const precacheResources = [
    '/',
    'index.html',
    'styles/main.min.css',
    'styles/bootstrap.min.css',
    'styles/normalize.min.css',
    'scripts/main.min.js',
    'scripts/vendor/modernizr-3.8.0.min.js',
    'scripts/vendor/jquery-3.4.1.min.js',
    'images/icon.png',
    'images/favicon.ico',
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheName)
            .then(cache => {
                return cache.addAll(precacheResources);
            })
    );
});

self.addEventListener('activate', event => {

});

self.addEventListener('fetch', event => {
    event.respondWith(caches.match(event.request)
        .then(cachedResponse => {
            if (cachedResponse) {
                return cachedResponse;
            }
            return fetch(event.request);
        })
    );
});
