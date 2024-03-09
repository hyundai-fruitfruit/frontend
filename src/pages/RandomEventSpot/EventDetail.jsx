/**
 * @author 황수영
 * @email sooyoung.h8@gmail.com
 * @create date 2024-03-04 09:35:59
 * @modify date 2024-03-04 09:35:59
 * @desc 랜덤 스팟 - 이벤트 상세
 */
import React from 'react';
import { useNavigate } from 'react-router-dom';

// import EventBanner from '../../assets/images/event3.png';
import EventBanner from '../../assets/images/event1.png';
import StoreBanner from '../../assets/images/event2.png';
import BtnStore from '../../assets/images/btn_event1.png';
import BtnEvent from '../../assets/images/btn_event2.png';

// import MainHeader from 'components/Header/MainHeader';
import MainHeader from 'components/Header/MainHeader';
//import BlackButton from '../../components/Button/BlackButton';

function EventDetail() {
    const navigate = useNavigate();

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%',
        paddingTop: '20px',
    };

    const storeStyle = {
      backgroundImage: `url(${EventBanner})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100vw',
      height: '50vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '6vh',
      marginBottom: '1vh',
    };

    const eventStyle = {
        backgroundImage: `url(${StoreBanner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '80vw',
        height: '30vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const buttonStyle = {
        width: '78vw',
        height: 'auto',
        marginTop: '2vh',
        marginBottom: '5vh'
    };

    return (
      <div style={containerStyle}>
        <MainHeader />
        <div style={storeStyle}></div>
        {/* 이후 매장 상세는 챗봇에 연결하기! */}
        <img src={BtnStore} style={buttonStyle} alt="BtnStore" onClick={() => navigate('/storeDetail/2')}/>
        <div style={eventStyle}></div>
        <img src={BtnEvent} style={buttonStyle} alt="BtnEvent" onClick={() => navigate('/couponTab')}/>
      </div>
    );
}

export default EventDetail;
