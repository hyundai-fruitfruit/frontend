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
    position: 'relative', // Ensure the container is relatively positioned
  };

  const captainHeendyStyle = {
    backgroundImage: `url(${CaptainHeendy})`,
    width: '50vw',
    height: '50vw',
    borderRadius: '50%',
    border: '0.5px solid grey', // Adding border
    position: 'absolute', // Make the image absolute to position it relative to its parent
    bottom: '10vw',
    right: '10vw', // Adjust as needed for right positioning
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
