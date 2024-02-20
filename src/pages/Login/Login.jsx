import loginImage from 'assets/images/onboarding_icon.png';

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import { firebaseConfig, vapidKey } from './config';

initializeApp(firebaseConfig);
const messaging = getMessaging();

onMessage(messaging, (payload) => {
  console.log('Message received. ', payload);
});

function registerServiceWorker() {
  console.log('Service Worker 등록 시도');
  navigator.serviceWorker
    .register('firebase-messaging-sw.js')
    .then(function (registration) {
      console.log('Service Worker 등록 성공:', registration);
    })
    .catch(function (error) {
      console.log('Service Worker 등록 실패:', error);
    });
}

function handleAllowNotification() {
  Notification.requestPermission()
    .then((permission) => {
      if (permission === 'granted') {
        console.log('알림 권한이 허용되었습니다.');
        registerServiceWorker();
        console.log('알림 권한이 허용 후, 서비스 워커 등록하였습니다.');
      } else {
        console.log('알림 권한이 거부되었습니다.');
      }
    })
    .catch((error) => {
      console.error('알림 권한 요청 중 오류가 발생했습니다 : ', error);
    });
}

function getdeviceToken() {
  getToken(messaging, { vapidKey })
    .then((currentToken) => {
      if (currentToken) {
        console.log('FCM 토큰 정상 : ' + currentToken);
      } else {
        console.log('FCM 토큰을 받아오지 못 하였습니다.');
      }
    })
    .catch((err) => {
      console.log('FCM 토큰 요청 중 오류가 발생했습니다 : ', err);
    });
}

function LoginScreen() {
  handleAllowNotification();
  getdeviceToken();

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/main');
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 flex justify-center items-center">
        <img className="max-w-xs w-full h-auto px-4" src={loginImage} alt="Logo" />
      </div>
      <div className="p-4 mb-[10vh]">
        <button
          className="font-bold w-full bg-black text-white text-sm py-3 rounded-md shadow hover:bg-opacity-80"
          onClick={handleLogin}
        >
          KAKAO LOGIN
        </button>
      </div>
    </div>
  );
}

export default LoginScreen;
