import React from 'react';
import { useNavigate } from 'react-router-dom';

import MainHeader from 'components/Header/MainHeader';

const GPSPage = () => {
    const navigate = useNavigate();
    const handleGPS = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    alert("위치 정보 인증 완료");
                    console.log(position);
                    navigate('/gpsSuccess')
                },
                (error) => {
                    alert("위치 정보 인증 완료");
                    console.log(error);
                }
            );
        }
    };

    return (
        <div className="h-screen bg-[url('https://fruitfruit.s3.ap-northeast-2.amazonaws.com/etc/gps-request.png')]">
            <MainHeader />
            <div className='flex justify-center items-center pt-32 h-full gap-4'>
                <button className="w-4/12 bg-black rounded-2xl py-4 text-white font-bold text-md" onClick={() => handleGPS()}>
                    다음에 갈게
                </button>
                <button className="w-4/12 bg-black rounded-2xl py-4 text-white font-bold text-md" onClick={() => handleGPS()}>
                    모험을 시작하자!
                </button>
            </div>
        </div>
    );
};

export default GPSPage;
