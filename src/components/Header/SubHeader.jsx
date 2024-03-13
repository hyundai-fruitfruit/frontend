import React from 'react';
import { useNavigate } from 'react-router-dom';

// 아이콘
import iconWeather from 'assets/icons/icon-weather.png';
import iconMood from 'assets/icons/icon-mood.png';
import iconLoveLetter from 'assets/icons/icon-love-letter.png';

// FCM 관련 메소드
import { getPushAlarmByLocalStorage } from '../../apis/request';
import { requestPermission } from '../../firebase-messaging-sw';

const handleRequestPermission = async () => {
  try {
    // FCM 권한 요청
    requestPermission();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition();
    }
  } catch (error) {
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

const SubHeader = () => {
  const navigate = useNavigate();

  return (
    <div className="flex w-3/4 mx-auto justify-between mt-20 mb-6">
      <div className="flex border rounded-xl h-10 items-center">
        <img src={iconWeather} className="h-6 ml-3" />
        <span className="flex h-[3vh] ml-2 mr-3 p-0 text-sm items-center" onClick={handlePushAlarmByLocalStorage}>
          오늘의 날씨
        </span>
      </div>
      <div className="flex border rounded-xl h-10 items-center" onClick={handleRequestPermission}>
        <img src={iconMood} className="h-6 ml-3" />
        <span className="flex h-[3vh] ml-2 mr-3 p-0 text-sm items-center">기분</span>
      </div>
      <div className="flex border rounded-xl h-10 items-center" onClick={() => navigate('/friendGame')}>
        <img src={iconLoveLetter} className="h-6 ml-3" />
        <span className="flex h-[3vh] ml-2 mr-3 p-0 text-sm items-center">
          친구
        </span>
      </div>
    </div>
  );
};

export default SubHeader;
