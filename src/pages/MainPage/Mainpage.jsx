/**
 * @author 오수영
 * @email osy9757@gmail.com
 * @create date 2024-02-13 02:24:13
 * @modify date 2024-02-24 04:35:36
 * @desc 흰디 메인페이지
 */
import React from 'react';
// import { useNavigate } from 'react-router-dom';
import SpeechBubble from '../../components/SpeechBubble/SpeechBubble';
import BackgroundImage from 'components/BackgroundImage/BackgroundImage';
import IconMenu from 'components/IconMenu/IconMenu';
import ModalComponent from 'components/ModalComponent/ModalComponent';
import useModal from 'hooks/useModal';
import { SpeechBubbleContent, AdventureStartContent } from 'components/ModalBubbleContent/MainPageModalContent';

import ModalHeendy from 'assets/images/modal_heendy.png';
import heendy_background from 'assets/images/heendy_background.png';
import mainHeendyImage from 'assets/images/main_heendy.png';
import itemIcon from 'assets/images/item_icon.png';
import startIcon from 'assets/images/start_icon.png';
import displayIcon from 'assets/images/display_icon.png';
import couponIcon from 'assets/images/coupon_icon.png';

function MainPage() {
  const iconsData = [
    { name: 'item', src: itemIcon, label: '아이템', path: '/' },
    { name: 'start', src: startIcon, label: '모험 시작', path: '/qrscanner' },
    { name: 'display', src: displayIcon, label: '안내도', path: '/' },
    { name: 'coupon', src: couponIcon, label: '쿠폰', path: '/' },
  ];

  const { isModalOpen, modalContent, openModal, closeModal } = useModal();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="absolute top-[25vh] z-10" onClick={() => openModal(<SpeechBubbleContent />)}>
        <SpeechBubble boldText={'안녕, 나는 흰디야! 같이 모험할래?'} />
      </div>
      <div className="mb-4 relative w-[85vw] h-[42vh] mx-auto">
        <BackgroundImage imageUrl={heendy_background} />
        <img src={mainHeendyImage} alt="캐릭터" className="absolute inset-0 h-[30vh] w-auto mx-auto my-auto mb-0" />
      </div>
      <h1 className="text-2xl font-bold mb-8">흰둥이😊</h1>
      <IconMenu
        icons={iconsData}
        onIconClick={(iconName) => {
          if (iconName === 'start') {
            openModal(<AdventureStartContent />);
          }
          // 다른 아이콘에 대한 처리
        }}
      />

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
