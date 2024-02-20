import loginImage from 'assets/images/onboarding_icon.png';

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { requestPermission } from './firebase';

function LoginScreen() {
  requestPermission();

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/main');
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 flex justify-center items-center">
        <img
          className="max-w-xs w-full h-auto px-4"
          src={loginImage}
          alt="Logo"
        />
      </div>
      <div className="p-4 mb-[10vh]">
        <button
          className="font-bold w-full bg-black text-white text-sm py-3 rounded-md shadow hover:bg-opacity-80"
          onClick={handleLogin}
        >
          KAKAO LOGIN
        </button>
      </div>
    </div>
  );
}

export default LoginScreen;
