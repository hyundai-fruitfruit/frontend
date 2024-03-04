/**
 * @author 엄상은
 * @email sangeun.e.9@gmail.com
 * @create date 2024-03-02 15:38:46
 * @modify date 2024-03-02 15:38:46
 * @desc 온보딩 페이지
 */

import React, { useState } from 'react';
import MainHeader from 'components/Header/MainHeader';
import BlackButton from 'components/Button/BlackButton';
import { requestPermission } from '../../firebase-messaging-sw';
import { useNavigate } from 'react-router-dom';

const Onboarding = () => {
  const navigate = useNavigate();
  const [imageIndex, setImageIndex] = useState(0);

  const images = [
    'https://fruitfruit.s3.ap-northeast-2.amazonaws.com/start/start-1.png',
    'https://fruitfruit.s3.ap-northeast-2.amazonaws.com/start/start-2.png',
    'https://fruitfruit.s3.ap-northeast-2.amazonaws.com/start/start-3.png',
    'https://fruitfruit.s3.ap-northeast-2.amazonaws.com/start/start-4.png',
    'https://fruitfruit.s3.ap-northeast-2.amazonaws.com/start/start-5.png',
    'https://fruitfruit.s3.ap-northeast-2.amazonaws.com/start/start-6.png',
    'https://fruitfruit.s3.ap-northeast-2.amazonaws.com/start/start-7.png',
  ];

  const handleClick = () => {
    if (imageIndex == 0) {
      requestPermission();
    }
    if (imageIndex < images.length - 1) {
      setImageIndex((prevIndex) => (prevIndex + 1));
    } else {
      navigate('/mbti');
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
