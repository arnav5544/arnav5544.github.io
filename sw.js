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





self.addEventListener('notificationclick', function(event) {
    console.log('SW: Clicked notification', event)

    let data = event.notification.data

    event.notification.close()

    self.clients.openWindow(event.data.link)
  })

  self.addEventListener('push', event => {
    let data = {}

    if (event.data) {
      data = event.json()
    }

    console.log('SW: Push received', data)

    if (data.notification || data.data) {
      self.registration.showNotification(data.notification.title, {
        body: data.notification.body,
        icon: 'arnav.png',
        badge:'arnav.png',
        data.data
      })
    } else {
      console.log('SW: No notification payload, not showing notification')
    }
  })
