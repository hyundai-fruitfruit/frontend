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
 * @modify date 2024-02-27 11:55:34
 * @desc QR코드 API 연결
 */
import React from 'react';

import loginImage from 'assets/images/onboarding_icon.png';
import { useQr } from 'hooks/useQr'; // hooks 경로는 실제 경로에 맞게 수정해주세요.

function RandomEventSpotQR() {
  const { qrData, isLoading, error } = useQr();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

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
      <div className="flex items-center h-[40vh] mx-4 mt-12 border-2 border-black rounded-xl overflow-hidden">
        <img src={qrData} alt="QR code" className="w-full" />
      </div>
    </div>
  );
}

export default RandomEventSpotQR;
