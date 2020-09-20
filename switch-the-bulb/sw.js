self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('arnav5544').then(function(cache) {
     return cache.addAll([
       'https://arnav5544.github.io/switch-the-bulb',
       'index.html',
       'script.js',
       'bulb.png',
'ONbulb.jpg',
'OFFbulb.jpg',
'arnav.png',
'switch-the-bulb.webmanifest',
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
