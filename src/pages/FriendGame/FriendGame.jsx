/* eslint-disable react/no-unknown-property */
/**
 * @author 오수영
 * @email osy9757@gmail.com
 * @create date 2024-03-01 06:33:24
 * @modify date 2024-03-01 06:33:24
 * @desc 친구 페이지 화면 구성
 */
/**
 * @author 엄상은
 * @email sangeun.e.9@gmail.com
 * @create date 2024-03-05 10:12:12
 * @modify date 2024-03-05 10:12:12
 * @desc 친구 페이지 API 연결, CSS 수정
 */

import React, { Suspense, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { findFriendList } from 'apis/request';

// component
import MainHeader from 'components/Header/MainHeader';
import FriendMenu from 'components/IconMenu/FriendMenu';
import ProgressBar from 'components/ModalBubbleContent/ProgressBar';

// 3d 관련
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Bird from 'assets/models/Bird';

function FriendGame() {
  const navigate = useNavigate();
  const [iconsData, setIconsData] = useState(null);

  useEffect(() => {
    const fetchFriendList = async () => {
      const data = await findFriendList();
      const transformedData = data.members.map(item => ({
        id: item.id,
        name: item.nickname,
        src: item.imgUrl,
        label: item.nickname,
      }));
      setIconsData(transformedData);
    };
    fetchFriendList();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <MainHeader />
      <div className="pt-[6vh] w-3/4 h-36">
        {iconsData && <FriendMenu icons={iconsData} />} 
      </div>
      <div className="w-3/4 h-[46vh] mx-auto relative mb-8">
        <div className="mt-5vh mb-5vh w-full h-full">
          <Canvas className="mb-5vh bg-gray-100">
            <OrbitControls />
            <ambientLight intensity={4} />
            <directionalLight position={[-2, 5, 2]} intensity={4} />
            <Suspense fallback={null}>
              <Bird />
            </Suspense>
          </Canvas>
        </div>
      </div>

      <div className="w-5/6 border rounded-2xl px-5 py-5">
        <div className="grid grid-rows-1 grid-flow-col grid-cols-3 text-center mb-6 items-end">
          <span className="text-left font font-semibold">Level 3</span>
          <span className="font font-semibold">새싹</span>
          <span className="text-right font font-semibold">70%</span>
        </div>
        <div className="mb-5">
          <ProgressBar fromValue={0} toValue={70}/>
        </div>
        <div className='flex justify-between items-center w-full text-sm'>
          <div className='border border-gray-200 rounded-2xl flex flex-col justify-center items-center bg-gray-100 w-36 h-32' onClick={() => navigate('/dice')} >
            <img src="https://fruitfruit.s3.ap-northeast-2.amazonaws.com/icon/icon-dice.png" className='w-11 h-11 mb-3' />
            <p className='font-bold'>주사위 게임</p>
            <p>기다리는 중</p>
          </div>
          <div className='border border-gray-200 rounded-2xl flex flex-col justify-center items-center bg-gray-100 w-36 h-32' onClick={() => navigate('/dice')} >
            <img src="https://fruitfruit.s3.ap-northeast-2.amazonaws.com/icon/icon-mbti.png" className='w-11 h-11 mb-3' />
            <p className='font-bold'>친구 쇼핑성향</p>
            <p>은둔고수 쇼퍼</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FriendGame;
