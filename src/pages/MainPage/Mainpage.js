/**
 * @author 오수영
 * @email osy9757@gmail.com
 * @create date 2024-02-13 02:24:13
 * @modify date 2024-02-19 04:58:28
 * @desc [description]
 */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SpeechBubble from '../../components/SpeechBubble/SpeechBubble';
import BackgroundImage from 'components/BackgroundImage/BackgroundImage';
import IconMenu from 'components/IconMenu/IconMenu';
import ModalComponent from 'components/ModalComponent/ModalComponent';
import useModal from 'hooks/useModal';
import ClaymorphicButton from 'components/ClaymorphicButton/ClaymorphicButton';

import ModalHeendy from 'assets/images/modal_heendy.png';
import heendy_background from 'assets/images/heendy_background.png';
import mainHeendyImage from 'assets/images/main_heendy.png';
import itemIcon from 'assets/images/item_icon.png';
import startIcon from 'assets/images/start_icon.png';
import displayIcon from 'assets/images/display_icon.png';
import couponIcon from 'assets/images/coupon_icon.png';
import restaurantIcon from 'assets/images/card_restaurant_icon.png';
import cafeIcon from 'assets/images/card_cafe_icon.png';
import shoppingIcon from 'assets/images/card_shopping_icon.png';
import randomIcon from 'assets/images/card_random_icon.png';
import smtImage from 'assets/images/smt_img.png';

function MainPage() {
  const iconsData = [
    { name: 'item', src: itemIcon, label: '아이템', path: '/' },
    { name: 'start', src: startIcon, label: '모험 시작', path: '/qrscanner' },
    { name: 'display', src: displayIcon, label: '안내도', path: '/' },
    { name: 'coupon', src: couponIcon, label: '쿠폰', path: '/' },
  ];

  const { isModalOpen, openModal, closeModal } = useModal();
  const [selectedButton, setSelectedButton] = useState(null);
  const navigate = useNavigate();

  const handleButtonSelect = (buttonName) => {
    setSelectedButton(buttonName);
    openModal();
  };

  const handleNextTimeClick = () => {
    setSelectedButton(null);
    closeModal();
  };

  const handleIconClick = () => {
    navigate('/randomEventSpot');
  };

  const getBoldText = () => {
    switch (selectedButton) {
      case 'restaurant':
        return '오늘의 랜덤 스팟은 SMT 라운지 이야';
      case 'cafe':
        return '오늘의 랜덤 스팟은 SMT 라운지 이야';
      case 'shopping':
        return '오늘의 랜덤 스팟은 SMT 라운지 이야';
      case 'random':
        return '오늘의 랜덤 스팟은 SMT 라운지 이야';
      default:
        return '지금 가고 싶은 랜덤 스팟은 어디야?';
    }
  };
  const renderModalContent = () => {
    switch (selectedButton) {
      case 'restaurant':
        return (
          <>
            <div className="my-4">
              <img src={smtImage} alt="SMT Lounge" />
            </div>
            <div className="grid grid-cols-2 gap-4 p-4">
              <ClaymorphicButton text="다음에 갈게" onClick={handleNextTimeClick} />
              <ClaymorphicButton text="지금 갈게!" onClick={handleIconClick} />
            </div>
          </>
        );
      case 'cafe':
        return (
          <>
            <div className="my-4">
              <img src={smtImage} alt="SMT Lounge" />
            </div>
            <div className="grid grid-cols-2 gap-4 p-4">
              <ClaymorphicButton text="다음에 갈게" onClick={handleNextTimeClick} />
              <ClaymorphicButton text="지금 갈게!" onClick={handleIconClick} />
            </div>
          </>
        );
      case 'shopping':
        return (
          <>
            <div className="my-4">
              <img src={smtImage} alt="SMT Lounge" />
            </div>
            <div className="grid grid-cols-2 gap-4 p-4">
              <ClaymorphicButton text="다음에 갈게" onClick={handleNextTimeClick} />
              <ClaymorphicButton text="지금 갈게!" onClick={handleIconClick} />
            </div>
          </>
        );
      case 'random':
        return (
          <>
            <div className="my-4">
              <img src={smtImage} alt="SMT Lounge" />
            </div>
            <div className="grid grid-cols-2 gap-4 p-4">
              <ClaymorphicButton text="다음에 갈게" onClick={handleNextTimeClick} />
              <ClaymorphicButton text="지금 갈게!" onClick={handleIconClick} />
            </div>
          </>
        );
      default:
        return (
          <div className="grid grid-cols-2 gap-4 p-4">
            {/* 버튼 클릭 이벤트에 handleButtonSelect 함수 연결 */}
            <ClaymorphicButton
              imageSrc={restaurantIcon}
              text="맛있는 걸 먹고파"
              onClick={() => handleButtonSelect('restaurant')}
            />
            <ClaymorphicButton
              imageSrc={cafeIcon}
              text="카페타임이 필요해"
              onClick={() => handleButtonSelect('cafe')}
            />
            <ClaymorphicButton
              imageSrc={shoppingIcon}
              text="구매욕 뿜뿜"
              onClick={() => handleButtonSelect('shopping')}
            />
            <ClaymorphicButton imageSrc={randomIcon} text="랜덤이 좋아" onClick={() => handleButtonSelect('random')} />
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 ">
      <div className="absolute top-[25vh] z-10" onClick={openModal}>
        <SpeechBubble boldText={'안녕, 나는 흰디야! 같이 모험할래?'} />
        {/* 추후에 말풍선 길이만큼 올라가게 수정 */}
      </div>
      <ModalComponent
        isOpen={isModalOpen}
        onClose={closeModal}
        positionStyle={{
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
        }}
      >
        <SpeechBubble boldText={getBoldText()} arrowPostion="right">
          {renderModalContent()}
        </SpeechBubble>
        <div className="flex justify-end w-full mt-4">
          <img src={ModalHeendy} alt="Heendy" className="h-[12vh]" />
        </div>
      </ModalComponent>
      <div className="mb-4 relative w-[85vw] h-[42vh] mx-auto">
        <BackgroundImage imageUrl={heendy_background} />
        <img src={mainHeendyImage} alt="캐릭터" className="absolute inset-0 h-[30vh] w-auto mx-auto my-auto mb-0" />
      </div>
      <h1 className="text-2xl font-bold mb-8">흰둥이😊</h1>
      <div className="relative">
        <IconMenu icons={iconsData} />
      </div>
    </div>
  );
}

export default MainPage;
