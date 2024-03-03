/**
 * @author 황수영
 * @email sooyoung.h8@gmail.com
 * @create date 2024-02-22 02:24:13
 * @modify date 2024-02-22 04:58:28
 * @desc FCM 푸시 알림 서비스 워커 설정
 */
console.log("Hello from public/firebase-messaging-sw.js");

self.addEventListener("install", function (e) {
  console.log("FCM Service Worker install..");
  self.skipWaiting();
});

self.addEventListener("activate", function (e) {
  console.log("FCM Service Worker activate..");
});

// 푸시 알림 받는 설정
self.addEventListener("push", function (e) {
  console.log("push: ", e.data.json());
  if (!e.data.json()) return;

  const resultData = e.data.json().notification;
  const notificationTitle = resultData.title;
  const notificationOptions = {
    body: resultData.body,
    icon: resultData.image,
    tag: resultData.tag,
    ...resultData,
  };
  console.log("push: ", { resultData, notificationTitle, notificationOptions });

  self.registration.showNotification(notificationTitle, notificationOptions);
});

// 알림 클릭 시 페이지 이동
// self.addEventListener("notificationclick", function (event) {
//   console.log("Notification clicked");
//   const clickedNotification = event.notification;
//   clickedNotification.close();
  
//   const myRoomPath = '/myroom';
//   console.log("알림 클릭 시, 페이지 이동 : " + myRoomPath);

//   event.waitUntil(
//     self.clients.openWindow(myRoomPath)
//   );
// });

self.addEventListener("notificationclick", function (event) {
  console.log("Notification clicked");
  const clickedNotification = event.notification;
  clickedNotification.close();
  
  const myRoomPath = '/myroom';
  console.log("알림 클릭 시, 페이지 이동 : " + myRoomPath);

  // 클라이언트 측에서 해당 경로로 이동
  event.waitUntil(
    self.clients.openWindow(myRoomPath)
  );
});


// [notificationclick 이벤트로 문제 해결]
// self.addEventListener("notificationclick", function (event) {
//   const url = 'https://d2hcblcxgd6rqe.cloudfront.net/myroom';
//   event.notification.close();
//   event.waitUntil(self.clients.openWindow(url));
// });
