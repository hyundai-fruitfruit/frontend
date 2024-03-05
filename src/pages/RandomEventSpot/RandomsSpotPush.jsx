/**
 * @author 황수영
 * @email sooyoung.h8@gmail.com
 * @create date 2024-03-04 09:35:59
 * @modify date 2024-03-04 09:35:59
 * @desc 랜덤 스팟 푸시 알림
 */

import React from 'react';
import RandomspotSelect from '../../assets/images/randomspot_back.png';

import BtnFood from '../../assets/images/btn_food.png';
import BtnCafe from '../../assets/images/btn_cafe.png';
import BtnShopping from '../../assets/images/btn_shopping.png';
import BtnRandom from '../../assets/images/btn_random.png';

import MainHeader from 'components/Header/MainHeader';


function RandomSpotPush() {
    const backStyle = {
      backgroundImage: `url(${RandomspotSelect})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100%',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    };

    const containerStyle = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      height: '100%',
    };
  
    const buttonContainerStyle = {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gridGap: '10px',
    };
  
    const buttonStyle = {
      width: '36vw',
      height: '36vw'
    };

    const handleShoppingBtn = () => {
      window.location.href = '/randomSpotResult';
    };
  
    return (
      <div style={containerStyle}>
        <MainHeader />
        <div style={backStyle}>
          <div className="h-[50vh]"></div>
          <div className="h-[50vh]" >
            <div style={buttonContainerStyle}>
                <img src={BtnFood} alt="Food" style={buttonStyle} />
                <img src={BtnCafe} alt="Cafe" style={buttonStyle} />
                <img src={BtnShopping} alt="Shopping" style={buttonStyle} onClick={handleShoppingBtn}/>
                <img src={BtnRandom} alt="Random" style={buttonStyle} />
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default RandomSpotPush;