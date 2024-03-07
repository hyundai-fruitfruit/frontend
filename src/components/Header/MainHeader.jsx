/**
 * @author 황수영
 * @email sooyoung.h8@gmail.com
 * @create date 2024-02-28 04:35:36
 * @modify date 2024-02-28 04:35:36
 * @desc 나의 방탭 - 3d 모델 변경하는 페이지
 */
/**
 * @author 엄상은
 * @email sangeun.e.9@gmail.com
 * @create date 2024-03-02 17:01:12
 * @modify date 2024-03-02 17:01:12
 * @desc 헤더 컴포넌트화
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import mainTent from 'assets/icons/main_Tent.png';
import mainCapHeendy from 'assets/icons/CapHeendy.png';

const MainHeader = () => {
  const navigate = useNavigate();

  const routeToMain = () => {
    navigate('/main');
  };

  return (
    <div className="fixed top-0 flex flex-row justify-between items-center space-x-2 w-full h-[6vh] border-b font-bold">
      <div className="flex items-center justify-start ml-6" onClick={routeToMain}>
        <img src={mainTent} className="h-6" />
        <span className="text-l ml-3 mt-2 items-center">흰디의 모험</span>
      </div>
      <div className="flex border-1 rounded-xl items-center p-1">
        <span className="mr-2">대장 흰디</span>
        <img src={mainCapHeendy} className="mr-3 h-[3vh] z-[-1]" />
      </div>
    </div>
  );
};

export default MainHeader;
