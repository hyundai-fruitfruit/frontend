/**
 * @author 황수영
 * @email sooyoung.h8@gmail.com
 * @create date 2024-02-22 02:24:13
 * @modify date 2024-02-22 04:58:28
 * @desc FCM 푸시 알림 설정
 */
import { initializeApp } from "firebase/app";
import { firebaseConfig, VALID_KEY } from "./config";
import { getMessaging, getToken } from "firebase/messaging";
import { updateDeviceToken } from "./apis/request"

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export async function requestPermission() {
  console.log("FCM 알림 권한 요청 시작");

  const permission = await Notification.requestPermission();
  console.log("Notification.requestPermission ");
  if (permission === "denied") {
    console.log("FCM 알림 권한 얻기 실패");
    return;
  } else {
    console.log("FCM 알림 권한 허용");
  }
  
  const token = await getToken(messaging, {
    vapidKey: VALID_KEY,
  });

  if (token) {
    console.log("FCM device token: ", token);
    localStorage.setItem('fcmDeviceToken', token);
    console.log("localStorage.getItem FCM device token: " + localStorage.getItem('fcmDeviceToken'));

    try {
      console.log("FCM device token 업데이트 api 요청");
      updateDeviceToken(token);
    } catch (error) {
      console.error("FCM device token 업데이트 api 실패" + error);
    }
  }
  else {
    console.log("FCM device token을 얻지 못함");
  }
}