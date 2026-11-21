self.addEventListener('install', function (e) {
  e.waitUntil(caches.open('pacitan-v1').then(function (c) {
    return c.addAll(['./index.html']);
  }));
});
self.addEventListener('fetch', function (e) {
  e.respondWith(fetch(e.request).catch(function () { return caches.match(e.request); }));
});