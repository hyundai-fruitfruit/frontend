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
      console.log("handleRequestPermission 전");
      requestPermission();
      console.log("handleRequestPermission 후");
    } catch (error) {
      console.error("handleRequestPermission 호출 중 오류 발생:", error);
    }
  };

  const handlePushAlarmByLocalStorage = async () => {
    try {
      console.log("getPushAlarmByLocalStorage 전");
      getPushAlarmByLocalStorage();
      console.log("getPushAlarmByLocalStorage 후");
    } catch (error) {
      console.error("getPushAlarmByLocalStorage 호출 중 오류 발생:", error);
    }
  };

const SubHeader = () => {
    return (
        <div className="flex w-3/4 mx-auto justify-between mt-10 mb-1">
          <div className="flex border rounded-xl h-10 items-center m-0 p-0">
            <img src={mainWeather} className="h-6 ml-2" />
            <span className="flex h-[3vh] m-1 mr-3 p-0 text-sm items-center" onClick={handlePushAlarmByLocalStorage}>오늘의 날씨</span>
          </div>
          <div className="flex border rounded-xl h-10 items-center m-0 p-0" onClick={handleRequestPermission}>
            <img src={mainCandy} className="h-6 ml-2" />
            <span className="flex h-[3vh] m-1 mr-3 p-0 text-sm items-center">14/15</span>
          </div> 
          <div className="flex border rounded-xl h-10 items-center m-0 p-0">
            <img src={mainMailbox} className="h-6 ml-2" />
            <span className="flex h-[3vh] m-1 mr-3 p-0 text-sm items-center">5/10</span>
          </div>
        </div>
    );
}

export default SubHeader;