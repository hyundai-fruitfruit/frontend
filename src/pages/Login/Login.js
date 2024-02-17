import React from 'react';
import { useNavigate } from 'react-router-dom';

function LoginScreen() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col justify-between h-screen">
      <div className="flex flex-col mt-48 bg-cover items-center justify-center p-4">
        <img src="../../../images/onboarding_icon.png" alt="Logo" />
      </div>
      <button
        className="rounded-md bg-black mt-32 mx-8 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-opacity-80"
        onClick={handleLogin}
      >
        KAKAO LOGIN
      </button>
      <div className="flex-grow" />
    </div>
  );
}

export default LoginScreen;
