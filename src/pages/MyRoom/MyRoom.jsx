/* eslint-disable react/no-unknown-property */
/**
 * @author 황수영
 * @email sooyoung.h8@gmail.com
 * @create date 2024-02-28 04:35:36
 * @modify date 2024-02-28 04:35:36
 * @desc 나의 방탭 - 3d 모델 변경하는 페이지
 */
import React, { Suspense, useState, useEffect } from 'react';
import './MyRoom.css';
import OptionIcons from './OptionIcons';
import { Category, selectCategory } from './Category';
import '../../firebase-messaging-sw';
import MainHeader from 'components/Header/MainHeader';
import SubHeader from 'components/Header/SubHeader';

// redux
import { useDispatch, useSelector } from 'react-redux';
import {
  setSelectedFoodOption as setReduxSelectedFoodOption,
  setSelectedBackOption as setReduxSelectedBackOption,
} from 'store/features/RoomSlice';

// 3d 관련
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

// 3d 모델
import Tree1 from 'assets/models/Tree1';
import Tree2 from 'assets/models/Tree2';
import Popcorn from 'assets/models/Popcorn';
import Hamburger from 'assets/models/Hamburger';
import Pizza from 'assets/models/Pizza';
import Empty from 'assets/models/Empty';
import Deer from 'assets/models/Deer';

import HamburgerIcon from 'assets/icons/hamburger_icon.png';
import PizzaIcon from 'assets/icons/pizza_icon.png';
import PopcornIcon from 'assets/icons/popcorn_icon.png';
import UndefinedIcon from 'assets/icons/undefined_icon.png';
// import GreenTree from 'assets/icons/pink_tree.png';
import GreenTree2 from 'assets/icons/green_tree.png';
import GreenTree3 from 'assets/icons/green_tree2.png';
import GreenTree4 from 'assets/icons/green_tree3.png';

// FCM 푸시 알림 시연용
// import { getPushAlarm, getPushAlarmByDeviceToken, getPushAlarmByLocalStorage } from '../../apis/request';

const categories = ['소품', '배경', '벽지', '효과'];

// api 매핑
const foodOptionsWithBack = [
  { name: 'Hamburger', backgroundImageUrl: 'popcorn-background.jpg', icon: HamburgerIcon },
  { name: 'Pizza', backgroundImageUrl: 'pizza-background.jpg', icon: PizzaIcon },
  { name: 'Popcorn', backgroundImageUrl: 'empty-background.jpg', icon: PopcornIcon },
  { name: 'Empty', backgroundImageUrl: 'flower-background.jpg', icon: UndefinedIcon },
  { name: 'Tree1', backgroundImageUrl: 'pizza-background.jpg', icon: UndefinedIcon },
  { name: 'Tree2', backgroundImageUrl: 'pizza-background.jpg', icon: UndefinedIcon },
  { name: 'Hamburger', backgroundImageUrl: 'popcorn-background.jpg', icon: UndefinedIcon },
  { name: 'Empty', backgroundImageUrl: 'flower-background.jpg', icon: UndefinedIcon },
];

const backOptionsWithBack = [
  { name: 'Hamburger', backgroundImageUrl: 'popcorn-background.jpg', icon: GreenTree4 },
  { name: 'Tree1', backgroundImageUrl: 'pizza-background.jpg', icon: GreenTree2 },
  { name: 'Tree2', backgroundImageUrl: 'pizza-background.jpg', icon: GreenTree3 },
  { name: 'Empty', backgroundImageUrl: 'empty-background.jpg', icon: UndefinedIcon },
  { name: 'Empty', backgroundImageUrl: 'empty-background.jpg', icon: UndefinedIcon },
  { name: 'Empty', backgroundImageUrl: 'empty-background.jpg', icon: UndefinedIcon },
  { name: 'Empty', backgroundImageUrl: 'empty-background.jpg', icon: UndefinedIcon },
  { name: 'Empty', backgroundImageUrl: 'empty-background.jpg', icon: UndefinedIcon },
];

function MyRoom() {
  // 간단한 옵션 데이터 - 파일로 빼기
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

  const reduxSelectedFoodOption = useSelector((state) => state.room.selectedFoodOption);
  const reduxSelectedBackOption = useSelector((state) => state.room.selectedBackOption);

  const [selectedFoodOption, setSelectedFoodOption] = useState(reduxSelectedFoodOption);
  const [selectedBackOption, setSelectedBackOption] = useState(reduxSelectedBackOption);

  const [selectedCategory, setSelectedCategory] = useState('소품');
  const dispatch = useDispatch();

  const handleSelectFoodOption = (option) => {
    setSelectedFoodOption(option);
    dispatch(setReduxSelectedFoodOption(option));
  };

  const handleSelectBackOption = (option) => {
    setSelectedBackOption(option);
    dispatch(setReduxSelectedBackOption(option));
  };

  useEffect(() => {
    setSelectedFoodOption(reduxSelectedFoodOption);
    setSelectedBackOption(reduxSelectedBackOption);
  }, [reduxSelectedFoodOption, reduxSelectedBackOption]);

  // const handlePushAlarmByLocalStorage = async () => {
  //   try {
  //     // 여기서 API 호출
  //     const response = await getPushAlarmByLocalStorage();
  //     console.log(response);
  //   } catch (error) {
  //     console.error("handlePushAlarmByLocalStorage 호출 중 오류 발생:", error);
  //   }
  // };

  // const handlePushAlarm = async () => {
  //   try {
  //     // 여기서 API 호출
  //     const response = await getPushAlarm();
  //     console.log(response);
  //   } catch (error) {
  //     console.error("API 호출 중 오류 발생:", error);
  //   }
  // };

  // const handlePushAlarmByDeviceToken = async () => {
  //   try {
  //     // 여기서 API 호출
  //     const token = localStorage.getItem('fcmDeviceToken');
  //     console.error("getPushAlarmByDeviceToken 호출 중 device token :" + token);

  //     const response = await getPushAlarmByDeviceToken(token);
  //     console.log(response);
  //   } catch (error) {
  //     console.error("getPushAlarmByDeviceToken 호출 중 오류 발생:", error);
  //   }
  // };

  return (
    <div className="flex flex-col">
      {/* 헤더 두 개 */}
      <MainHeader />
      <SubHeader />

      {/* 캔버스 */}
      <div className="w-3/4 h-[64vh] mx-auto relative mt-1vh mb-10vh flex flex-col items-center justify-between">
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

        {/* 옵션 영역 */}
        <div className="h-[14vh] mt-15vh w-screen bg-white flex flex-col items-center border border-gray-200">
          <div className="mt-15vh bg-white flex flex-row items-center justify-center justify-evenly">
            {/* 카테고리 렌더링 */}
            {categories.map((category) => (
              <Category key={category} name={category} onClick={() => selectCategory(category, setSelectedCategory)} />
            ))}
          </div>

          <div className="icon-container">
            {selectedCategory === '소품' && (
              <OptionIcons options={foodOptionsWithBack} setSelectedOption={handleSelectFoodOption} />
            )}
            {selectedCategory === '배경' && (
              <OptionIcons options={backOptionsWithBack} setSelectedOption={handleSelectBackOption} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyRoom;
