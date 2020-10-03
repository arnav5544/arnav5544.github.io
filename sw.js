self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('arnav5544').then(function(cache) {
     return cache.addAll([
       'https://arnav5544.github.io/',
       'index.html',
       'script.js',
       'style.css',
       'image.png',
       'head.jpeg',
      
      'projects/phone/',
      'projects/phone/phone.jpg',
      'projects/phone/index.html',
     'chat-white-18dp.svg',
'arnav.png',
'arnav5544.webmanifest',
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


