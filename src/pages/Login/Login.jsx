/**
 * @author 오수영
 * @email osy9757@gmail.com
 * @create date 2024-02-09 09:35:59
 * @modify date 2024-02-22 09:35:59
 * @desc 로그인 페이지
 */
/**
 * @author 황수영
 * @email sooyoung.h8@gmail.com
 * @create date 2024-02-22 02:24:13
 * @modify date 2024-02-22 04:58:28
 * @desc 로그인 및 FCM 디바이스 토큰 설정
 */
// import firebase from 'firebase/app';
// import 'firebase/messaging';
import loginImage from 'assets/images/onboarding_icon.png';

import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { firebaseConfig } from './config';

// // Firebase 앱 초기화
// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// } else {
//   firebase.app(); // 이미 초기화된 경우
// }

// const messaging = firebase.messaging();

// messaging.onMessage((payload) => {
//   console.log('Message received. ', payload);
// });

// function registerServiceWorker() {
//   console.log('Service Worker 등록 시도');
//   navigator.serviceWorker
//     .register('firebase-messaging-sw.js')
//     .then(function (registration) {
//       console.log('Service Worker 등록 성공:', registration);

//       // FCM 토큰을 받기 위해 서비스 워커 등록 후 messaging 객체에 서비스 워커 등록
//       messaging.useServiceWorker(registration);
//     })
//     .catch(function (error) {
//       console.log('Service Worker 등록 실패:', error);
//     });
// }

// function handleAllowNotification() {
//   Notification.requestPermission()
//     .then((permission) => {
//       if (permission === 'granted') {
//         console.log('알림 권한이 허용되었습니다.');
//         registerServiceWorker();
//         console.log('알림 권한이 허용 후, 서비스 워커 등록하였습니다.');
//         getdeviceToken(); // 알림 권한이 허용된 후에 토큰을 요청
//       } else {
//         console.log('알림 권한이 거부되었습니다.');
//       }
//     })
//     .catch((error) => {
//       console.error('알림 권한 요청 중 오류가 발생했습니다 : ', error);
//     });
// }

// function getdeviceToken() {
//   messaging
//     .getToken({ vapidKey: 'YOUR_VAPID_KEY_HERE' }) // VAPID Key를 여기에 넣으세요.
//     .then((currentToken) => {
//       if (currentToken) {
//         console.log('FCM 토큰 정상 : ' + currentToken);
//         // 필요한 경우 서버에 토큰을 보내서 저장
//       } else {
//         console.log('FCM 토큰을 받아오지 못 하였습니다.');
//         // 사용자에게 알림 허용을 요청하거나, 토큰을 받을 수 없는 원인을 확인
//       }
//     })
//     .catch((err) => {
//       console.log('FCM 토큰 요청 중 오류가 발생했습니다 : ', err);
//     });
// }

function LoginScreen() {
  const navigate = useNavigate();

  // 사용자가 로그인 화면에 진입했을 때 알림 권한을 요청하고 FCM 토큰을 등록합니다.
  // React.useEffect(() => {
  //   handleAllowNotification();
  // }, []);

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
          className="font-bold w-full bg-black text-white text-sm py-3 rounded-md hover:bg-opacity-80"
          onClick={handleLogin}
        >
          KAKAO LOGIN
        </button>
      </div>
    </div>
  );
}

export default LoginScreen;
