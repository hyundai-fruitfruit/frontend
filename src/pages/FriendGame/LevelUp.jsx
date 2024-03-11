/**
 * @author 엄상은
 * @email sangeun.e.9@gmail.com
 * @create date 2024-03-09 20:46:19
 * @modify date 2024-03-09 20:46:19
 * @desc 레벨업 페이지
 */

import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import MainHeader from 'components/Header/MainHeader';
import BlackButton from 'components/Button/BlackButton';

function LevelUp() {
  const navigate = useNavigate();
  const { id } = useParams();

  const imageUrl = `https://fruitfruit.s3.ap-northeast-2.amazonaws.com/etc/level-${id}-card.png`;

  return (
    <div className="h-screen" style={{ backgroundImage: `url(${imageUrl})` }}>
      <MainHeader />
      <BlackButton onClick={() => navigate('/couponTab')}>쿠폰 확인하러 가기</BlackButton>
    </div>
  );
}

export default LevelUp;
