/**
 * @author 엄상은
 * @email sangeun.e.9@gmail.com
 * @create date 2024-03-02 15:38:46
 * @modify date 2024-03-02 15:38:46
 * @desc 온보딩 페이지
 */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Onboarding = () => {
  const navigate = useNavigate();
  const [imageIndex, setImageIndex] = useState(0);

  const images = [
    'https://fruitfruit.s3.ap-northeast-2.amazonaws.com/start/1.png',
    'https://fruitfruit.s3.ap-northeast-2.amazonaws.com/start/2.png',
    'https://fruitfruit.s3.ap-northeast-2.amazonaws.com/start/3.png',
    'https://fruitfruit.s3.ap-northeast-2.amazonaws.com/start/4.png',
    'https://fruitfruit.s3.ap-northeast-2.amazonaws.com/start/5.png',
    'https://fruitfruit.s3.ap-northeast-2.amazonaws.com/start/6.png',
    'https://fruitfruit.s3.ap-northeast-2.amazonaws.com/start/7.png',
  ];

  const handleClick = () => {
    if (imageIndex < images.length - 1) {
      setImageIndex((prevIndex) => (prevIndex + 1));
    } else {
      navigate('/mbti');
    }
  }

  return (
    <div onClick={handleClick} style={{width: '100%', height: '100%'}}>
      <img src={images[imageIndex]} alt="" style={{width: '100%', height: '100%'}}/>
    </div>
  );
}

export default Onboarding;
