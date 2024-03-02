/**
 * @author 황수영
 * @email sooyoung.h8@gmail.com
 * @create date 2024-02-22 02:24:13
 * @modify date 2024-02-22 04:58:28
 * @desc FCM 디바이스 토큰 설정
 */

import { initializeApp } from "firebase/app";

export const firebaseConfig = {
  apiKey: 'AIzaSyAHb61CZAe0p12P4pwSS2NsYAVZ-Lw-qIE',
  projectId: 'adventure-of-heendy',
  messagingSenderId: '717574326565',
  appId: '1:717574326565:web:629333a71570a742bf32cc',
};

initializeApp(firebaseConfig);

self.addEventListener("push", function (e) {
  console.log("fcm 푸시 알림: ", e.data.json());
  if (!e.data.json()) return;

  const resultData = e.data.json().notification;
  const notificationTitle = resultData.title;
  const notificationOptions = {
    body: resultData.body,
    icon: resultData.image,
    tag: resultData.tag,
  };
  console.log("fcm 푸시 알림: ", { resultData, notificationTitle, notificationOptions });

  self.registration.showNotification(notificationTitle, notificationOptions);
});