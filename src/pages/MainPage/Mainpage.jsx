/**
 * @author 오수영
 * @email osy9757@gmail.com
 * @create date 2024-02-13 02:24:13
 * @modify date 2024-02-24 04:35:36
 * @desc 흰디 메인페이지
 */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SpeechBubble from '../../components/SpeechBubble/SpeechBubble';
import BackgroundImage from 'components/BackgroundImage/BackgroundImage';
import IconMenu from 'components/IconMenu/IconMenu';
import ModalComponent from 'components/ModalComponent/ModalComponent';
import useModal from 'hooks/useModal';
import {
  SpeechBubbleContent,
  AdventureStartContent,
  CertificationFail,
} from 'components/ModalBubbleContent/MainPageModalContent';
import ProgressBar from 'components/ModalBubbleContent/ProgressBar';
//assets
import ModalHeendy from 'assets/images/modal_heendy.png';
import heendy_background from 'assets/images/heendy_background.png';
import mainHeendyImage from 'assets/images/mainHeendyImage.png';
import itemIcon from 'assets/images/item_icon.png';
import startIcon from 'assets/images/start_icon.png';
import displayIcon from 'assets/images/display_icon.png';
import couponIcon from 'assets/images/coupon_icon.png';
import mainTent from 'assets/icons/main_Tent.png';
import mainCapHeendy from 'assets/icons/CapHeendy.png';
import mainWeather from 'assets/icons/Glowing star.png';
import mainCandy from 'assets/icons/Candy.png';
import mainMailbox from 'assets/icons/mailBox.png';

function MainPage() {
  const iconsData = [
    { name: 'item', src: itemIcon, label: '아이템', path: '/' },
    { name: 'start', src: startIcon, label: '모험 시작', path: '/qrscanner' },
    { name: 'display', src: displayIcon, label: '안내도', path: '/' },
    { name: 'coupon', src: couponIcon, label: '쿠폰', path: '/' },
  ];

  const { isModalOpen, modalContent, openModal, closeModal } = useModal();
  const navigate = useNavigate();
  const [exp] = useState(50);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full h-[18vh]">
        <div className="flex flex-row justify-between items-center space-x-2 h-[8vh] border-b font-bold">
          <div className="flex items-end justify-start ml-4">
            <img src={mainTent} className="h-[5vh]" />
            <span className="text-xl ml-2">흰디의 모험</span>
          </div>
          <div className="flex border-2 rounded-xl items-center p-1">
            <span className="ml-2">대장흰디에게 물어봐</span>
            <img src={mainCapHeendy} className="h-[3vh] z-[-1]" />
          </div>
        </div>
        <div className="flex flex-wraph-[10vh] ">
          <div className="flex border rounded-xl h-[5vh] items-center m-4 ">
            <img src={mainWeather} className="h-[3vh] ml-4" />
            <span className="h-[3vh] mr-4">오늘의 날씨</span>
          </div>
          <div className="flex border rounded-xl h-[5vh] items-center m-4">
            <img src={mainCandy} className="h-[3vh] ml-4" />
            <span className="h-[3vh] mr-4">14/15</span>
          </div>
          <div className="flex border rounded-xl h-[5vh] items-center m-4">
            <img src={mainMailbox} className="h-[3vh] ml-4" />
            <span className="h-[3vh] mr-4">5/10</span>
          </div>
        </div>
      </div>
      <div className="absolute top-[25vh] z-10" onClick={() => openModal(<SpeechBubbleContent />)}>
        <SpeechBubble boldText={'안녕, 나는 흰디야! 같이 모험할래?'} arrowPostion="right" />
      </div>
      <div className="mb-8 relative w-[85vw] h-[42vh] mx-auto">
        <BackgroundImage imageUrl={heendy_background} />
        <img src={mainHeendyImage} alt="캐릭터" className="absolute inset-0 h-[30vh] w-auto mx-auto my-auto mb-0" />
      </div>
      <div className="border rounded-2xl w-[90vw] px-4 py-4 mb-[8vh]">
        <div className="grid grid-rows-1 grid-flow-col grid-cols-3 text-center mb-6 items-end">
          <span className="text-left font-bold ">초심자 흰디</span>
          <span className="font-bold text-xl">흰둥이</span>
          <span className="text-right font-bold">{exp}%</span>
        </div>
        <div className="mb-8">
          <ProgressBar fromValue={0} toValue={exp} />
        </div>
        <IconMenu
          icons={iconsData}
          onIconClick={(iconName) => {
            if (iconName === 'start') {
              openModal(<AdventureStartContent openModal={openModal} closeModal={closeModal} />);
            } else if (iconName === 'item') {
              navigate('/eventNotice');
            } else if (iconName === 'display') {
              openModal(<CertificationFail />);
            } else if (iconName === 'coupon') {
              navigate('/couponTab');
            }
            // 다른 아이콘에 대한 처리
          }}
        />
      </div>

      <ModalComponent isOpen={isModalOpen} onClose={closeModal}>
        <SpeechBubble arrowPostion="right">{modalContent}</SpeechBubble>
        <div className="flex justify-end w-full mt-4">
          <img src={ModalHeendy} alt="Heendy" className="h-[12vh]" />
        </div>
      </ModalComponent>
    </div>
  );
}

export default MainPage;
