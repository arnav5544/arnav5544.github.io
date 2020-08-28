self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('fox-store').then(function(cache) {
     return cache.addAll([
       '/arnav5544.github.io',
       '/arnav5544.github.io/index.html',
       '/arnav5544.github.io/script.js',
       '/arnav5544.github.io/style.css',
       '/arnav5544.github.io/image.png',
       '/arnav5544.github.io/head.jpg',
       '/arnav5544.github.io/meet',
       '/arnav5544.github.io/calculator'
     ]);
   })
 );
});

self.addEventListener('fetch', function(e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
