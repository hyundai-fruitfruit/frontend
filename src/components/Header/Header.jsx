/**
 * @author 오수영
 * @email osy9757@gmail.com
 * @create date 2024-02-12 09:23:48
 * @modify date 2024-02-22 09:23:48
 * @desc Header 컴포넌트
 */
import React from 'react';
import { useNavigate } from 'react-router-dom';

import backArrowIcon from 'assets/icon/Icons left.png';

const Header = ({ text }) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="flex items-center justify-between py-4">
      <button onClick={goBack} className="text-lg">
        <img src={backArrowIcon} />
      </button>
      <span className="text-xl font-bold">{text}</span>
      <span></span>
    </div>
  );
};
export default Header;
