import React from 'react';
import { useNavigate } from 'react-router-dom';

//componenet
import Header from 'components/Header/Header';
import IconMenu from 'components/IconMenu/IconMenu';
import BackgroundImage from 'components/BackgroundImage/BackgroundImage';
import ClaymorphicButton from 'components/ClaymorphicButton/ClaymorphicButton';
import SpeechBubble from 'components/SpeechBubble/SpeechBubble';

//asset
import itemIcon from 'assets/images/item_icon.png';
import heendy_background from 'assets/images/heendy_background.png';
import mainHeendyImage from 'assets/images/mainHeendyImage.png';

import BearIcon from 'assets/icons/BearIcon.png';
import BirdIcon from 'assets/icons/BirdIcon.png';
import CamelIcon from 'assets/icons/CamelIcon.png';
import CatIcon from 'assets/icons/CatIcon.png';
import ChickenIcon from 'assets/icons/ChickenIcon.png';

function FriendGame() {
  const navigate = useNavigate();
  const iconsData = [
    { name: '수영', src: BearIcon, label: '수영', path: '/' },
    { name: '성혁', src: BirdIcon, label: '성혁', path: '/' },
    { name: '흰순이', src: CamelIcon, label: '흰순이', path: '/' },
    { name: '흰돌', src: CatIcon, label: '흰돌', path: '/' },
    { name: '상은', src: ChickenIcon, label: '상은', path: '/' },
  ];

  return (
    <div className="min-h-screen">
      <Header text={'친구 만나기'} />
      <div>
        <IconMenu icons={iconsData} />
      </div>
      <div>
        <SpeechBubble />
      </div>
      <div className="mb-8 relative w-[85vw] h-[42vh] mx-auto">
        <BackgroundImage imageUrl={heendy_background} />
        <img src={mainHeendyImage} alt="캐릭터" className="absolute inset-0 h-[30vh] w-auto mx-auto my-auto mb-0" />
      </div>
      <div className="grid grid-cols-2 gap-4 p-4">
        <ClaymorphicButton imageSrc={itemIcon} text="주사위 게임" onClick={() => navigate('/dice')} />
        <ClaymorphicButton imageSrc={itemIcon} text="친구 성향 분석" />
      </div>
    </div>
  );
}
export default FriendGame;
