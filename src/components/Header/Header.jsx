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
