import React, { useState } from 'react';

import IconMenu from 'components/IconMenu/IconMenu';

//component
import ProgressBar from 'components/ModalBubbleContent/ProgressBar';
import BackgroundImage from 'components/BackgroundImage/BackgroundImage';
import SpeechBubble from 'components/SpeechBubble/SpeechBubble';

// assets
import heendy_background from 'assets/images/heendy_background.png';
import itemIcon from 'assets/images/item_icon.png';
import startIcon from 'assets/images/start_icon.png';
import displayIcon from 'assets/images/display_icon.png';
import couponIcon from 'assets/images/coupon_icon.png';
import mainHeendyImage from 'assets/images/main_heendy.png';

function HeendyLayout() {
  const [exp] = useState(50);

  const iconsData = [
    { name: 'item', src: itemIcon, label: '아이템', path: '/' },
    { name: 'start', src: startIcon, label: '모험 시작', path: '/qrscanner' },
    { name: 'display', src: displayIcon, label: '안내도', path: '/' },
    { name: 'coupon', src: couponIcon, label: '쿠폰', path: '/' },
  ];
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-full h-[18vh]"></div>
      <div className="absolute top-[25vh] z-10">
        <SpeechBubble boldText={'안녕, 나는 흰디야! 같이 모험할래?'} />
      </div>
      <div className="w-[85vw] h-[42vh] my-8 relative mx-auto">
        <BackgroundImage imageUrl={heendy_background} />
        <img src={mainHeendyImage} alt="캐릭터" className="absolute inset-0 h-[30vh] w-auto mx-auto my-auto mb-0" />
      </div>
      <div className="border rounded-2xl w-[90vw] px-4 py-4">
        <div className="grid grid-rows-1 grid-flow-col grid-cols-3 text-center mb-3 items-end">
          <span className="text-left font-bold ">초심자 흰디</span>
          <span className="font-bold text-xl">흰둥이</span>
          <span className="text-right font-bold">{exp}%</span>
        </div>
        <div className="mb-6">
          <ProgressBar fromValue={0} toValue={exp} />
        </div>
        <IconMenu icons={iconsData} />
      </div>
    </div>
  );
}
export default HeendyLayout;
