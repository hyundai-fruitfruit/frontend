import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getFcmToken }  from "../../setupFCM";

function registerServiceWorker() {
    console.log("Service Worker 등록 시도");
    navigator.serviceWorker
      .register("firebase-messaging-sw.js")
      .then(function (registration) {
        console.log("Service Worker 등록 성공:", registration);
      })
      .catch(function (error) {
        console.log("Service Worker 등록 실패:", error);
      });
  }
  
function handleAllowNotification() {
    Notification.requestPermission().then(permission => {
      if (permission === "granted") {
        console.log("알림 권한이 허용되었습니다.");
        registerServiceWorker();
        console.log("알림 권한이 허용 후, 서비스 워커 등록하였습니다.");
      } else {
        console.log("알림 권한이 거부되었습니다.");
      }
    }).catch(error => {
      console.error("알림 권한 요청 중 오류가 발생했습니다 : ", error);
    });
}

function getdeviceToken() {
    getFcmToken
    .then((currentToken) => {
    if (currentToken) {
      console.log("FCM 토큰 정상 : " + currentToken);
    } else {
      console.log("FCM 토큰을 받아오지 못 하였습니다.");
    }
  }).catch((err) => {
    console.log('FCM 토큰 요청 중 오류가 발생했습니다 : ', err);
  });
}

function LoginScreen() {
  handleAllowNotification();
  getdeviceToken();

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col justify-between h-screen">
      <div className="flex flex-col mt-48 bg-cover items-center justify-center p-4">
        <img src="../../../images/onboarding_icon.png" alt="Logo" />
      </div>
      <button
        className="rounded-md bg-black mt-32 mx-8 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-opacity-80"
        onClick={handleLogin}
      >
        KAKAO LOGIN
      </button>
      <div className="flex-grow" />
    </div>
  );
}

export default LoginScreen;
