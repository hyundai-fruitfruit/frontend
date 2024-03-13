/**
 * @author 황수영
 * @email sooyoung.h8@gmail.com
 * @create date 2024-03-01
 * @modify date 2024-03-01
 * @desc 지도
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import MapDetail from '../../assets/images/map.png';
import CaptainHeendy from '../../assets/images/onboarding_icon.png';

function Map() {
  const navigate = useNavigate();

  const backStyle = {
    backgroundImage: `url(${MapDetail})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '100vh',
    position: 'relative', 
  };

  const captainHeendyStyle = {
    backgroundImage: `url(${CaptainHeendy})`,
    width: '50vw',
    height: '50vw',
    borderRadius: '50%',
    border: '0.5px solid grey', 
    position: 'absolute',
    bottom: '10vw',
    right: '10vw',
  };

  const handleCaptainHeendyAsk = () => {
    navigate('/captainHeendy');
  };

  return (
    <div style={backStyle}>
      <div style={captainHeendyStyle} onClick={handleCaptainHeendyAsk}></div>
    </div>
  );
}

export default Map;