self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('switch-the-bulb').then(function(cache) {
     return cache.addAll([
       'index.html',
       'script.js',
       'bulb.png',
'install.svg',
'ONbulb.jpg',
'OFFbulb.jpg',
'/arnav.png',
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
