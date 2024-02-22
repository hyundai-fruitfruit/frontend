importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

const firebaseApp = firebase.initializeApp({
    apiKey: 'AIzaSyAHb61CZAe0p12P4pwSS2NsYAVZ-Lw-qIE',
    projectId: 'adventure-of-heendy',
    messagingSenderId: '717574326565',
    appId: '1:717574326565:web:629333a71570a742bf32cc',
});

const messaging = firebase.messaging();