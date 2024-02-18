import React from 'react';
import { useNavigate } from 'react-router-dom';

import smtImage from 'assets/images/smt_img.png';

function RandomEventSpot() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/main');
  };

  return (
    <>
      <div className="flex items-center justify-center text-black font-bold py-4">
        <div className="flex items-center space-x-2">
          <span>오늘의 랜덤 스팟을 소개할게</span>
        </div>
      </div>
      <div className="relative">
        <img src={smtImage} alt="Dining Area" className="w-full" />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">SMT LOUNGE</div>
      </div>
      <div className="p-4">
        <button className="w-full bg-black text-white py-3 rounded-full shadow-md" onClick={handleLogin}>
          매장을 자세히 보고 싶어!
        </button>
      </div>
    </>
  );
}

export default RandomEventSpot;
