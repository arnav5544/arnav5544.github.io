self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('arnav5544').then(function(cache) {
     return cache.addAll([
       'https://arnav5544.github.io',
       'index.html',
       'script.js',
       'style.css',
       'image.png',
       'head.jpeg',
     
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
