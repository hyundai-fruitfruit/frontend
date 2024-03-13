import React from 'react';
import { useNavigate } from 'react-router-dom';

import MainHeader from 'components/Header/MainHeader';
import BlackButton from 'components/Button/BlackButton';

const GPSSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-[url('https://fruitfruit.s3.ap-northeast-2.amazonaws.com/etc/gps-success.png')]">
        <MainHeader />
        <BlackButton onClick={() => navigate('/getExp/power')}>
            경험치 받기
        </BlackButton>
    </div>
  );
};

export default GPSSuccess;
