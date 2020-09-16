
// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.17.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.17.2/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    apiKey: "AIzaSyAwJ8-2teznpL8PaYdtaPASEmhfW54coWs",
    authDomain: "arnav-kumar.firebaseapp.com",
    databaseURL: "https://arnav-kumar.firebaseio.com",
    projectId: "arnav-kumar",
    storageBucket: "arnav-kumar.appspot.com",
    messagingSenderId: "657354874850",
    appId: "1:657354874850:web:211197e80a772d4f4ee3bb",
    measurementId: "G-PKXEBF91SY"
  });

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.

  self.addEventListener('push', (payload)=> {
    let data = {};
    if (payload) {
      data = payload.json()
    }

    console.log('SW: Push received', data)

    if (data.notification && data.notification.title) {
      self.registration.showNotification(data.notification.title, {
        body: data.notification.body,
        icon: 'arnav.png',
        badge:'arnav.png',
        data:data.data
      })
    } else {
      console.log('SW: No notification payload, not showing notification')
    }
  })
