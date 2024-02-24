/**
 * @author 오수영
 * @email osy9757@gmail.com
 * @create date 2024-02-24 16:39:52
 * @modify date 2024-02-24 16:39:52
 * @desc 모달 랜더링 Content
 */

import React, { useState } from 'react';
//Component
import ClaymorphicButton from 'components/ClaymorphicButton/ClaymorphicButton';
//Hook
// import useCurrentLocation from 'hooks/useCurrentLocation';
import useRandomSpotByEventType from 'hooks/useRandomSpotByEventType';
//Assets
import restaurantIcon from 'assets/images/card_restaurant_icon.png';
import cafeIcon from 'assets/images/card_cafe_icon.png';
import shoppingIcon from 'assets/images/card_shopping_icon.png';
import randomIcon from 'assets/images/card_random_icon.png';
import smtImage from 'assets/images/smt_img.png';
import hiHeendy from 'assets/gif/HEENDY_hi.gif';
import cryHeendy from 'assets/gif/HEENDY_cry.gif';

// export const SpeechBubbleContent = () => (
//   <div className="">
//     <div className="font-bold text-center mb-1"> 지금 가고 싶은 랜덤스팟은 어디야?</div>
//     <div className="grid grid-cols-2 gap-4 p-4">
//       <ClaymorphicButton imageSrc={restaurantIcon} text="맛있는 걸 먹고파" onClick={''} />
//       <ClaymorphicButton imageSrc={cafeIcon} text="카페타임이 필요해" onClick={''} />
//       <ClaymorphicButton imageSrc={shoppingIcon} text="구매욕 뿜뿜" onClick={''} />
//       <ClaymorphicButton imageSrc={randomIcon} text="랜덤이 좋아" onClick={''} />
//     </div>
//   </div>
// );

export const RandomSpotContent = () => (
  <div className="flex flex-col">
    <div className="text-center font-bold">오늘의 랜덤 스팟은 SMT 라운지 이야</div>
    <div className="flex justify-center">
      <img src={smtImage} />
    </div>
    <div className="flex flex-row h-[6vh]">
      <ClaymorphicButton text="다음에 갈게" addStyle="m-1" />
      <ClaymorphicButton text="지금 갈게" addStyle="m-1" />
    </div>
  </div>
);

export const AdventureStartContent = () => (
  <div className="flex flex-col">
    <div className="text-center font-bold">&apos;더현대 서울&apos; 모험을 시작할래?</div>
    <div className="text-center">모험을 시작하면 GPS 인증을 시작할게</div>
    <div className="flex justify-center">
      <img src={hiHeendy} />
    </div>
    <div className="flex flex-row h-[6vh]">
      <ClaymorphicButton text="다음에 갈게" addStyle="m-1" />
      <ClaymorphicButton text="모험을 시작할게" addStyle="m-1" onClick={() => <CertificaitonLocation />} />
    </div>
  </div>
);

export const CertificaitonSuccess = () => (
  <div className="flex flex-col">
    <div className="text-center font-bold mb-2 text-2xl">인증이 완료되었습니다.</div>
    <div className="flex justify-center">
      <img src={hiHeendy} />
    </div>
  </div>
);

export const CertificaitonFail = () => (
  <div className="flex flex-col">
    <div className="text-center font-bold text-2xl mb-1">인증이 실패하였습니다.</div>
    <div className="text-center mb-2 text-gray-400">위치를 다시한번 확인해주세요</div>
    <div className="flex justify-center">
      <img src={cryHeendy} />
    </div>
  </div>
);

export const CertificaitonLocation = (isOutOfArea) => {
  if (isOutOfArea) {
    <div className="flex flex-col">
      <div className="text-center font-bold text-2xl mb-1">인증이 실패하였습니다.</div>
      <div className="text-center mb-2 text-gray-400">위치를 다시한번 확인해주세요</div>
      <div className="flex justify-center">
        <img src={cryHeendy} />
      </div>
    </div>;
  } else {
    <div className="flex flex-col">
      <div className="text-center font-bold mb-2 text-2xl">인증이 완료되었습니다.</div>
      <div className="flex justify-center">
        <img src={hiHeendy} />
      </div>
    </div>;
  }
};
// ----------

export const SpeechBubbleContent = () => {
  const [selectedEventType, setSelectedEventType] = useState('');
  const { data, error, loading } = useRandomSpotByEventType(selectedEventType);

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
          onClick={() => handleButtonClick('restaurant')}
        />
        <ClaymorphicButton imageSrc={cafeIcon} text="카페타임이 필요해" onClick={() => handleButtonClick('cafe')} />
        <ClaymorphicButton imageSrc={shoppingIcon} text="구매욕 뿜뿜" onClick={() => handleButtonClick('shopping')} />
        <ClaymorphicButton imageSrc={randomIcon} text="랜덤이 좋아" onClick={() => handleButtonClick('random')} />
      </div>
      {/* 데이터 로딩 및 에러 처리 */}
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {data && <div>{/* 데이터를 표시하는 로직을 여기에 작성합니다. */}</div>}
    </div>
  );
};
