/**
 * @author 오수영
 * @email osy9757@gmail.com
 * @create date 2024-02-19 10:02:05
 * @modify date 2024-02-19 11:18:55
 * @desc [description]
 */
import React from 'react';
import { useNavigate } from 'react-router-dom';

import smtImage from 'assets/images/smt_img.png';
import loginImage from 'assets/images/onboarding_icon.png';

function RandomEventSpot() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/storeDetail');
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex items-center justify-center h-[20vh] font-bold">
        <div className="flex items-center justify-center">
          <img className="size-16 mt-6" src={loginImage} alt="Logo" />
          <p className="mt-8 text-xl">오늘의 랜덤 스팟을 소개할게</p>
        </div>
      </div>
      <div className="flex items-center h-[40vh] mx-4">
        <img src={smtImage} alt="Dining Area" className="w-full" />
      </div>
      <div className="flex-grow h-[15vh] font-bold">
        <p className="text-center text-xl">SMT 라운지</p>
      </div>
      <div className="flex h-[25vh] mx-4 place-items-end">
        <button
          className="font-bold w-full my-8 bg-black text-white text-sm py-4 rounded-md shadow hover:bg-opacity-80 "
          onClick={handleLogin}
        >
          매장을 자세히 보고 싶어!
        </button>
      </div>
    </div>
  );
}

export default RandomEventSpot;
