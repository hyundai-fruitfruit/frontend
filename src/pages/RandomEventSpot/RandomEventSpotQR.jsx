/**
 * @author 오수영
 * @email osy9757@gmail.com
 * @create date 2024-02-26 04:16:35
 * @modify date 2024-02-26 04:16:35
 * @desc [description]
 */
import React from 'react';

import loginImage from 'assets/images/onboarding_icon.png';
import myQR from 'assets/images/myQR.png';

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
      <div className="flex items-center h-[40vh] mx-4 mt-16">
        <img src={myQR} alt="Dining Area" className="w-full" />
      </div>
    </div>
  );
}

export default RandomEventSpotQR;
