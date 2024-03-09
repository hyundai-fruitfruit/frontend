/* eslint-disable react/no-unknown-property */
/**
 * @author 오수영
 * @email osy9757@gmail.com
 * @create date 2024-02-13 02:24:13
 * @modify date 2024-02-24 04:35:36
 * @desc 흰디 메인페이지
 */
/**
 * @author 엄상은
 * @email sangeun.e.9@gmail.com
 * @create date 2024-03-08 20:31:19
 * @modify date 2024-03-08 20:31:19
 * @desc 흰디 메인페이지 레이아웃 조정
 */
import React, { Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
// redux
import { useSelector } from 'react-redux';
// 3d 관련
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
//component
import SpeechBubble from 'components/SpeechBubble/SpeechBubble';
import IconMenu from 'components/IconMenu/IconMenu';
import ModalComponent from 'components/ModalComponent/ModalComponent';
import useModal from 'hooks/useModal';
import {
  // SpeechBubbleContent,
  AdventureStartContent,
  // CertificationFail,
} from 'components/ModalBubbleContent/MainPageModalContent';
import ProgressBar from 'components/ModalBubbleContent/ProgressBar';
//assets
import ModalHeendy from 'assets/images/modal_heendy.png';
import itemIcon from 'assets/images/item_icon.png';
import startIcon from 'assets/images/start_icon.png';
import displayIcon from 'assets/images/display_icon.png';
import couponIcon from 'assets/images/coupon_icon.png';

import MainHeader from 'components/Header/MainHeader';
import SubHeader from 'components/Header/SubHeader';

// 3d 모델
import Tree1 from 'assets/models/Tree1';
import Tree2 from 'assets/models/Tree2';
import Popcorn from 'assets/models/Popcorn';
import Hamburger from 'assets/models/Hamburger';
import Pizza from 'assets/models/Pizza';
import Empty from 'assets/models/Empty';
import Deer from 'assets/models/Deer';

function MainPage() {
  const iconsData = [
    { name: 'item', src: itemIcon, label: '아이템', path: '/' },
    { name: 'start', src: startIcon, label: '모험 시작', path: '/qrscanner' },
    { name: 'display', src: displayIcon, label: '안내도', path: '/' },
    { name: 'coupon', src: couponIcon, label: '쿠폰', path: '/' },
  ];

  const foodOptions = {
    Hamburger: <Hamburger />,
    Pizza: <Pizza />,
    Popcorn: <Popcorn />,
    Empty: <Empty />,
  };

  const backOptions = {
    Hamburger: <Hamburger />,
    Tree1: <Tree1 />,
    Tree2: <Tree2 />,
    Empty: <Empty />,
  };

  const { isModalOpen, modalContent, openModal, closeModal } = useModal();
  const selectedFoodOption = useSelector((state) => state.room.selectedFoodOption);
  const selectedBackOption = useSelector((state) => state.room.selectedBackOption);

  const navigate = useNavigate();

  const experience = useSelector((state) => state.exp.experience);
  const level = useSelector((state) => state.exp.level);

  return (
    <div className="flex flex-col items-center">
      {/* 헤더 두 개 */}
      <MainHeader />
      <SubHeader />

      {/* <div
        className="absolute top-[25vh] z-10"
        onClick={() => openModal(<SpeechBubbleContent openModal={openModal} />)}
      >
        <SpeechBubble boldText={'안녕, 나는 흰디야! 같이 모험할래?'} arrowPostion="right" />
      </div> */}

      <div className="w-3/4 mb-8 relative h-[46vh] mx-auto">
        <div className="mt-5vh mb-5vh w-full h-full">
          <Canvas className="mb-5vh bg-gray-100">
            <OrbitControls />
            <ambientLight intensity={4} />
            <directionalLight position={[-2, 5, 2]} intensity={4} />
            <Suspense fallback={null}>
              {foodOptions[selectedFoodOption]}
              {backOptions[selectedBackOption]}
              <Deer />
            </Suspense>
          </Canvas>
        </div>
      </div>

      <div className="w-5/6 border rounded-2xl px-5 py-5">
        <div className="grid grid-rows-1 grid-flow-col grid-cols-3 text-center mb-6 items-end">
          <span className="text-left font font-semibold">Level {level}</span>
          <span className="font font-semibold">흰둥이</span>
          <span className="text-right font font-semibold">{experience}%</span>
        </div>
        <div className="mb-5">
          <ProgressBar fromValue={0} toValue={experience} />
        </div>
        <IconMenu
          icons={iconsData}
          onIconClick={(iconName) => {
            if (iconName === 'start') {
              openModal(<AdventureStartContent openModal={openModal} closeModal={closeModal} />);
            } else if (iconName === 'item') {
              navigate('/myroom');
            } else if (iconName === 'display') {
              // openModal(<CertificationFail />);
              navigate('/theHyundaiMap');
            } else if (iconName === 'coupon') {
              navigate('/couponTab');
            }
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
