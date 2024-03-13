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

const categories = ['소품', '배경', '벽지', '효과'];

const foodOptionsWithBack = [
  { name: 'Hamburger', backgroundImageUrl: 'popcorn-background.jpg' },
  { name: 'Pizza', backgroundImageUrl: 'pizza-background.jpg' },
  { name: 'Popcorn', backgroundImageUrl: 'empty-background.jpg' },
  { name: 'Empty', backgroundImageUrl: 'flower-background.jpg' },
  { name: 'Tree1', backgroundImageUrl: 'pizza-background.jpg' },
  { name: 'Tree2', backgroundImageUrl: 'pizza-background.jpg' },
  { name: 'Hamburger', backgroundImageUrl: 'popcorn-background.jpg' },
  { name: 'Empty', backgroundImageUrl: 'flower-background.jpg' },
];

const backOptionsWithBack = [
  { name: 'Hamburger', backgroundImageUrl: 'popcorn-background.jpg' },
  { name: 'Tree1', backgroundImageUrl: 'pizza-background.jpg' },
  { name: 'Tree2', backgroundImageUrl: 'pizza-background.jpg' },
  { name: 'Empty', backgroundImageUrl: 'empty-background.jpg' },
];

function MyRoom() {
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

  return (
    <div className="flex flex-col">
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
