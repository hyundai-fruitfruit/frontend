/**
 * @author 오수영
 * @email osy9757@gmail.com
 * @create date 2024-02-26 04:16:35
 * @modify date 2024-02-26 04:16:35
 * @desc QR코드 화면 구현
 */
/**
 * @author 엄상은
 * @email sangeun.e.9@gmail.com
 * @create date 2024-02-27 11:55:34
 * @modify date 2024-02-27 17:52:55
 * @desc QR코드 API 연결 및 소켓 연결
 */
import React from 'react';
import loginImage from 'assets/images/onboarding_icon.png';
import MyQrLoader from 'components/QRScanner/MyQrLoader';

function RandomEventSpotQR() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex items-center justify-center h-[20vh] font-bold">
        <div className="flex items-center justify-center">
          <img className="size-16 mt-6" src={loginImage} alt="Logo" />
          <p className="mt-8 text-xl">
            이벤트에 참여할게!
            <br /> 매장직원에게 보여주면 돼
          </p>
        </div>
      </div>
      <MyQrLoader />
    </div>
  );
}

export default RandomEventSpotQR;
