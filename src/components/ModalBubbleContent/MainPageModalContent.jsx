/**
 * @author 오수영
 * @email osy9757@gmail.com
 * @create date 2024-02-24 16:39:52
 * @modify date 2024-02-24 16:39:52
 * @desc 모달 랜더링 Content
 */

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
//Component
import ClaymorphicButton from 'components/ClaymorphicButton/ClaymorphicButton';
//Hook
// import useCurrentLocation from 'hooks/useCurrentLocation';
import useRandomSpotByEventType from 'hooks/useRandomSpotByEventType';
import useFirework from 'hooks/animation/useFirework';
//Assets
import restaurantIcon from 'assets/images/card_restaurant_icon.png';
import cafeIcon from 'assets/images/card_cafe_icon.png';
import shoppingIcon from 'assets/images/card_shopping_icon.png';
import randomIcon from 'assets/images/card_random_icon.png';
import smtImage from 'assets/images/smt_img.png';

import hiHeendy from 'assets/gif/HEENDY_hi.gif';
import cryHeendy from 'assets/gif/HEENDY_cry.gif';
import loadingRolling from 'assets/gif/loadingRolling.gif';

export const RandomSpotContent = ({ data }) => {
  const navigate = useNavigate();

  const handleGoNow = () => {
    // navigate(`/storeDetail?id=${data.id}`);
    navigate(`/storeDetail/2`);
  };

  return (
    <div className="flex flex-col">
      <div className="text-center font-bold mb-2">{`오늘의 랜덤 스팟은?`}</div>
      <div className="text-center font-bold text-lg mb-2">{`${data.title}`}</div>
      <div className="flex justify-center mb-6">
        <img src={smtImage} />
      </div>
      <div className="flex flex-row h-[6vh]">
        <ClaymorphicButton text="다음에 갈게" addStyle="m-1" />
        <ClaymorphicButton text="지금 갈게" addStyle="m-1" onClick={handleGoNow} />
      </div>
    </div>
  );
};

const LoadingModal = () => (
  <div className="flex flex-col justify-center">
    <img src={loadingRolling} alt="Loading..." />
  </div>
);

const getCurrentPosition = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};


export const AdventureStartContent = ({ openModal, closeModal }) => {
  const targetArea = { latitude: 37.5603219, longitude: 127.0645185 };
  const allowedDistance = 50; 

  const handleAdventureStart = async () => {
    openModal(<LoadingModal />);

    try {
      const position = await getCurrentPosition();
      const distance = calculateDistance(
        position.coords.latitude,
        position.coords.longitude,
        targetArea.latitude,
        targetArea.longitude,
      );

      closeModal();

      if (distance > allowedDistance) {
        console.log(position);
        openModal(<CertificationFail />);
      } else {
        console.log(position);
        openModal(<CertificationSuccess />);
      }
    } catch (error) {
      console.error('Location error:', error);
      closeModal();
      openModal(<CertificationFail />);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="text-center font-bold">{'더현대 서울 모험을 시작할래?'}</div>
      <div className="text-center">{'모험을 시작하면 GPS 인증을 시작할게'}</div>
      <div className="flex justify-center">
        <img src={hiHeendy} alt="Hi Heendy" />
      </div>
      <div className="flex flex-row h-[6vh]">
        <ClaymorphicButton text="다음에 갈게" addStyle="m-1" />
        {/* 인증 결과를 바로 반영할 수 없으므로 버튼은 상태 변경만을 트리거합니다. */}
        <ClaymorphicButton text="모험을 시작할게" addStyle="m-1" onClick={handleAdventureStart} />
      </div>
    </div>
  );
};

export const CertificationSuccess = () => {
  const firework = useFirework();
  useEffect(() => {
    firework();
  });
  return (
    <div className="flex flex-col">
      <div className="text-center font-bold mb-2 text-2xl">인증이 완료되었습니다.</div>
      <div className="flex justify-center">
        <img src={hiHeendy} />
      </div>
    </div>
  );
};

export const CertificationFail = () => (
  <div className="flex flex-col">
    <div className="text-center font-bold text-2xl mb-1">인증이 실패하였습니다.</div>
    <div className="text-center mb-2 text-gray-400">위치를 다시한번 확인해주세요</div>
    <div className="flex justify-center">
      <img src={cryHeendy} />
    </div>
  </div>
);

// ----------

export const SpeechBubbleContent = ({ openModal }) => {
  const [selectedEventType, setSelectedEventType] = useState('');
  const { data, error, loading } = useRandomSpotByEventType(selectedEventType);

  useEffect(() => {
    if (data && !loading && !error) {
      openModal(<RandomSpotContent data={data} />);
    }
  }, [data, loading, error, openModal]);

  const handleButtonClick = (eventType) => {
    setSelectedEventType(eventType);
  };

  return (
    <div>
      <div className="font-bold text-center mb-1">지금 가고 싶은 랜덤스팟은 어디야?</div>
      <div className="grid grid-cols-2 gap-4 p-4">
        <ClaymorphicButton
          imageSrc={restaurantIcon}
          text="맛있는 걸 먹고파"
          onClick={() => handleButtonClick('RESTAURANT')}
        />
        <ClaymorphicButton imageSrc={cafeIcon} text="카페타임이 필요해" onClick={() => handleButtonClick('CAFE')} />
        <ClaymorphicButton imageSrc={shoppingIcon} text="구매욕 뿜뿜" onClick={() => handleButtonClick('SHOPPING')} />
        <ClaymorphicButton imageSrc={randomIcon} text="랜덤이 좋아" onClick={() => handleButtonClick('RANDOM')} />
      </div>
      {loading && <div></div>}
      {error && <div>Error: {error.message}</div>}
    </div>
  );
};

function calculateDistance(lat1, lon1, lat2, lon2) {
  var R = 6371000; // 지구의 반지름 (미터)
  var dLat = deg2rad(lat2 - lat1);
  var dLon = deg2rad(lon2 - lon1);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c; // 거리 (미터)
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}
