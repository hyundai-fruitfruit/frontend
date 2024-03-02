/**
 * @author 오수영
 * @email osy9757@gmail.com
 * @create date 2024-02-09 09:35:59
 * @modify date 2024-02-22 09:35:59
 * @desc 로그인 페이지
 */
import startHeendy from 'assets/images/startHeendy.png';
import loadingHeendy from 'assets/gif/HeendyLogo.gif';
import startBackGround from 'assets/images/startBackGround.png';
import kakaoLogin from 'assets/icons/kakao_login.png';
import googleLogin from 'assets/icons/google_login.png';

import React from 'react';

function LoginScreen() {

  const handleLogin = () => {
    const KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.REACT_APP_KAKAO_CLIENT_ID}&scope=account_email&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}`
    window.location.href = KAKAO_AUTH_URI;
  };

  const backgroundStyle = {
    backgroundImage: `url(${startBackGround})`,
  };

  return (
    <div style={backgroundStyle} className="min-h-screen bg-cover bg-center">
      <div className="h-[70vh]">
        <div className="h-[5vh]"></div>
        <div className="h-[25vh] overflow-hidden">
          <img src={loadingHeendy} className="h-[25vh] w-auto object-cover" />
        </div>
        <div className="h-[35vh]">
          <img src={startHeendy} className="" />
        </div>
      </div>
      <div className="h-[30vh]">
        <div className="mb-4">
          <button className="ml-[5vw]" onClick={handleLogin}>
            <img src={kakaoLogin} className="w-[90vw] " />
          </button>
        </div>
        <div>
          <button className="ml-[5vw]" onClick={handleLogin}>
            <img src={googleLogin} className="w-[90vw]" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
