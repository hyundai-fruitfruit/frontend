/**
 * @author 엄상은
 * @email sangeun.e.9@gmail.com
 * @create date 2024-03-03 14:37:25
 * @modify date 2024-03-09 10:46:19
 * @desc 경험치 얻는 페이지
 */

import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setExperience } from 'store/features/LevelSlice';

import MainHeader from 'components/Header/MainHeader';
import BlackButton from 'components/Button/BlackButton';
import ProgressBar from 'components/ModalBubbleContent/ProgressBar';

const typeMap = {
  power: { start: 0, end: 30, route: '/main', routeText: '메인으로' }, // GPS
  sandwich: { start: 30, end: 40, route: '/storeDetail/2', routeText: '매장 페이지로' }, // 리뷰 // TODO: 들어갔을 때 State 바꾸기
  water: { start: 40, end: 50, route: '/friendGame', routeText: '친구 페이지로' }, // 친구 게임
  encourage: { start: 50, end: 100, route: '/levelUp/2', routeText: '메인으로' }, // 랜덤스팟 이벤트
};

function GetExp() {
  const { type } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const level = useSelector((state) => state.exp.level);

  useEffect(() => {
    dispatch(setExperience(typeMap[type].end));
  }, []);

  const imageUrl = `https://fruitfruit.s3.ap-northeast-2.amazonaws.com/dice/exp-${type}.png`;

  return (
    <div className="h-screen bg-[url('assets/images/heendy-background.png')] ">
      <MainHeader />
      <div className="w-56 mx-auto pt-56">
        <img src={imageUrl} className='mb-6'/>
        <ProgressBar fromValue={typeMap[type].start} toValue={typeMap[type].end} />
        <div className="grid grid-rows-1 grid-flow-col grid-cols-2 mb-6 items-end text-gray-300 font-bold">
          <span className='text-left'>Level {level}</span>
          <span className='text-right'>Level {level+1}</span>
        </div>
      </div>
      <BlackButton onClick={() => navigate(typeMap[type].route)}>{typeMap[type].routeText}</BlackButton>
  </div>
  );
}

export default GetExp;
