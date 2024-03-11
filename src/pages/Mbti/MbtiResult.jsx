/**
 * @author 엄상은
 * @email sangeun.e.9@gmail.com
 * @create date 2024-03-11 18:52:43
 * @modify date 2024-03-11 18:52:43
 * @desc 엠비티아이 결과 페이지
 */

import React, { useState } from 'react';
import MainHeader from 'components/Header/MainHeader';
import BlackButton from 'components/Button/BlackButton';
import { useNavigate } from 'react-router-dom';

const Onboarding = () => {
  const navigate = useNavigate();
  const [imageIndex, setImageIndex] = useState(0);

  const images = [
    'https://fruitfruit.s3.ap-northeast-2.amazonaws.com/start/start-8.png',
    'https://fruitfruit.s3.ap-northeast-2.amazonaws.com/start/start-9.png',
  ];

  const handleClick = () => {
    if (imageIndex < images.length - 1) {
      setImageIndex((prevIndex) => (prevIndex + 1));
    } else {
      navigate('/main');
    }
  }

  const styles = {
    ...(images[imageIndex] && { backgroundImage: `url(${images[imageIndex]})` }),
    backgroundSize: 'cover',
    height: '100vh',
  };

  return (
    <div style={styles}>
      <MainHeader />
      <BlackButton onClick={handleClick}>다음으로</BlackButton>
    </div>
  );
}

export default Onboarding;
