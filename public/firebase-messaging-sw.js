importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts(
  'https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js'
);

firebase.initializeApp({
  apiKey: 'AIzaSyCc478GVD0tcVcw8kpWS1E3nwEDGXE_5bg',
  authDomain: 'lofi-c845f.firebaseapp.com',
  databaseURL:
    'https://lofi-c845f-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'lofi-c845f',
  storageBucket: 'lofi-c845f.appspot.com',
  messagingSenderId: '25098880734',
  appId: '1:25098880734:web:7dc6442522b7fe37aa644f',
  measurementId: 'G-WGFZEC7GNN',
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    '[firebase-messaging-sw.js] Received background message ',
    payload
  );
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png',
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
