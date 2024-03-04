/**
 * @author 황수영
 * @email sooyoung.h8@gmail.com
 * @create date 2024-03-04 09:35:59
 * @modify date 2024-03-04 09:35:59
 * @desc 랜덤 스팟 결과
 */
import React from 'react';
import RandomspotResult from '../../assets/images/randomspot_result.png';
import BtnYes from '../../assets/images/btn_random_go.png';
import BtnNo from '../../assets/images/btn_random_next.png';
import MainHeader from 'components/Header/MainHeader';

function RandomSpotResult() {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: '100%',
        paddingTop: '20px', // Add padding top to move buttons down
    };

    const backStyle = {
      backgroundImage: `url(${RandomspotResult})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100%',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    };

    const buttonContainerStyle = {
        display: 'flex',
        justifyContent: 'center',
        width: '60%',
        marginTop : '22vw', 
    };

    const yesBtnStyle = {
        width: '45%', // Reduce button size
        height: 'auto',
    
    };
  
    const noBtnStyle = {
        width: '45%', // Reduce button size
        height: 'auto',
        marginRight: '6vw', // Add margin between buttons
    };

    const handleGoBtn = () => {
      window.location.href = '/eventDetail';
    };

    const handleNextBtn = () => {
        window.location.href = '/main';
    };
  
    return (
      <div style={containerStyle}>
        <MainHeader />
        <div style={backStyle}>
            <div style={buttonContainerStyle}>
                <img src={BtnNo} style={noBtnStyle} alt="No" onClick={handleNextBtn}/>
                <img src={BtnYes} style={yesBtnStyle} alt="Yes" onClick={handleGoBtn}/>
            </div>
        </div>
      </div>
    );
}

export default RandomSpotResult;
