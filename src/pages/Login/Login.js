/**
 * @author OHsooyoung
 * @email osy9757@gmai.com
 * @create date 2024-02-11 04:18:04
 * @modify date 2024-02-11 04:18:46
 * @desc [description]
 */
import React from 'react';
import { useHistory } from 'react-router-dom';

function LoginScreen() {
  const history = useHistory();

  const handleLogin = () => {
    //카카오 api
    history.push('/main');
  };

  return (
    <div className="login-screen">
      <div className="logo">
        <img src="/assets/images/onboarding_icon.png" alt="Logo" />
      </div>
      <button className="login-button" onClick={handleLogin}>
        KAKAO LOGIN
      </button>
    </div>
  );
}

export default LoginScreen;
