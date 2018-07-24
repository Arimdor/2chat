importScripts('https://www.gstatic.com/firebasejs/4.12.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.12.1/firebase-messaging.js');

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBmd9eUTuivbqx516eSUe8VEIe03pgYICw",
    authDomain: "plazeapp-1525704179068.firebaseapp.com",
    databaseURL: "https://plazeapp-1525704179068.firebaseio.com",
    projectId: "plazeapp-1525704179068",
    storageBucket: "plazeapp-1525704179068.appspot.com",
    messagingSenderId: "966627752073"
};
firebase.initializeApp(config);
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  
  // Customize notification here
  var notificationTitle = 'Background Message Title';
  var notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  return self.registration.showNotification(notificationTitle,
    notificationOptions);
});

