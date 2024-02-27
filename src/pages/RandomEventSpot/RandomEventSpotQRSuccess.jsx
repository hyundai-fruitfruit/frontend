/**
 * @author 오수영
 * @email osy9757@gmail.com
 * @create date 2024-02-26 04:20:04
 * @modify date 2024-02-26 04:20:04
 * @desc [description]
 */
/**
 * @author 오수영
 * @email osy9757@gmail.com
 * @create date 2024-02-19 10:02:05
 * @modify date 2024-02-19 11:18:55
 * @desc 랜덤스팟 이벤트 발생시 모달 페이지
 */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import clapHeendy from 'assets/gif/HEENDY_clap.gif';

import ProgressBar from 'components/ModalBubbleContent/ProgressBar';

function RandomEventSpotQRSuccess() {
  const navigate = useNavigate();
  const [exp] = useState(50);

  const handleLogin = () => {
    navigate('/storeDetail');
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex items-center justify-center h-[20vh] font-bold">
        <div className="flex items-center justify-center">
          <p className="mt-8 text-xl">참여해줘서 고마워!</p>
        </div>
      </div>
      <div className="flex items-center h-[40vh] mx-4">
        <img src={clapHeendy} alt="Dining Area" className="w-full" />
      </div>
      <div className="flex-grow font-bold mt-4">
        <p className="text-center text-xl">경험치 + {exp}</p>
      </div>
      <div className="mx-8">
        <ProgressBar fromValue={10} toValue={10 + exp} />
      </div>
      <div className="flex h-[25vh] mx-4 place-items-end">
        <button
          className="font-bold w-full my-8 bg-black text-white text-sm py-4 rounded-md shadow hover:bg-opacity-80 "
          onClick={handleLogin}
        >
          내 쿠폰함 가기{' '}
        </button>
      </div>
    </div>
  );
}

export default RandomEventSpotQRSuccess;
