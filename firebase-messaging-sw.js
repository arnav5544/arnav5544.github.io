
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
const messaging = firebase.messaging();


// Handle incoming messages. Called when:
// - a message is received while the app has focus
// - the user clicks on an app notification created by a service worker
//   `messaging.setBackgroundMessageHandler` handler.
// [START background_handler]
 firebase.messaging().setBackgroundMessageHandler(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/arnav.png',
    badge:'/arnav.png'
  };

  return self.registration.showNotification(notificationTitle,
    notificationOptions);
});
// [END background_handler]
