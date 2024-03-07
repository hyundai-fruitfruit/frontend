import React from 'react';
// 아이콘
import mainWeather from 'assets/icons/Glowing star.png';
import mainCandy from 'assets/icons/Candy.png';
import mainMailbox from 'assets/icons/mailBox.png';

// FCM 관련 메소드
import { getPushAlarmByLocalStorage } from '../../apis/request';
import { requestPermission } from '../../firebase-messaging-sw';

const handleRequestPermission = async () => {
  try {
    alert('handleRequestPermission 전');

    // FCM 권한 요청
    requestPermission();

    // 위치 정보 권한 요청
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          alert('위치 정보 접근 허용됨', position);
        },
        (error) => {
          alert('위치 정보 접근 거부됨: ' + error.message);
        },
      );
    } else {
      alert('이 브라우저에서는 Geolocation이 지원되지 않습니다.');
    }

    alert('handleRequestPermission 후');
  } catch (error) {
    alert('handleRequestPermission 호출 중 오류 발생: ' + error.message);
  }
};

const handlePushAlarmByLocalStorage = async () => {
  try {
    console.log('getPushAlarmByLocalStorage 전');
    getPushAlarmByLocalStorage();
    console.log('getPushAlarmByLocalStorage 후');
  } catch (error) {
    console.error('getPushAlarmByLocalStorage 호출 중 오류 발생:', error);
  }
};

const routeFriendGame = async () => {
  try {
    window.location.href = '/friendGame';
  } catch (error) {
    console.error('getPushAlarmByLocalStorage 호출 중 오류 발생:', error);
  }
};
const SubHeader = () => {
  return (
    <div className="flex w-3/4 mx-auto justify-between mt-10 mb-1">
      <div className="flex border rounded-xl h-10 items-center m-0 p-0">
        <img src={mainWeather} className="h-6 ml-2" />
        <span className="flex h-[3vh] m-1 mr-3 p-0 text-sm items-center" onClick={handlePushAlarmByLocalStorage}>
          오늘의 날씨
        </span>
      </div>
      <div className="flex border rounded-xl h-10 items-center m-0 p-0" onClick={handleRequestPermission}>
        <img src={mainCandy} className="h-6 ml-2" />
        <span className="flex h-[3vh] m-1 mr-3 p-0 text-sm items-center">14/15</span>
      </div>
      <div className="flex border rounded-xl h-10 items-center m-0 p-0">
        <img src={mainMailbox} className="h-6 ml-2" />
        <span className="flex h-[3vh] m-1 mr-3 p-0 text-sm items-center" onClick={routeFriendGame}>
          5/10
        </span>
      </div>
    </div>
  );
};

export default SubHeader;
