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
import { addExperience } from 'store/features/LevelSlice';

import MainHeader from 'components/Header/MainHeader';
import BlackButton from 'components/Button/BlackButton';
import ProgressBar from 'components/ModalBubbleContent/ProgressBar';

const typeMap = {
  water: { exp: 10, route: '/friendGame', routeText: '친구 페이지로' }, // 친구 게임
  power: { exp: 20, route: '/main', routeText: '메인으로' }, // GPS
  sandwich: { exp: 10, route: '/storeDetail/2', routeText: '매장 페이지로' }, // 리뷰
  encourage: { exp: 30, route: '/main', routeText: '메인으로' }, // 이벤트
};

function GetExp() {
  const { type } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const prevExperience = useSelector((state) => state.exp.experience);
  const level = useSelector((state) => state.exp.level);

  useEffect(() => {
    dispatch(addExperience(typeMap[type].exp));
  }, []);

  const imageUrl = `https://fruitfruit.s3.ap-northeast-2.amazonaws.com/dice/exp-${type}.png`;

  return (
    <div className="h-screen bg-[url('assets/images/heendy-background.png')] ">
      <MainHeader />
      <div className="w-56 mx-auto pt-56">
        <img src={imageUrl} className='mb-6'/>
        <ProgressBar fromValue={prevExperience} toValue={prevExperience+10} />
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
