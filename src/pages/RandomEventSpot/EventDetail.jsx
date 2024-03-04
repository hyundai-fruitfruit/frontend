/**
 * @author 황수영
 * @email sooyoung.h8@gmail.com
 * @create date 2024-03-04 09:35:59
 * @modify date 2024-03-04 09:35:59
 * @desc 랜덤 스팟 - 이벤트 상세
 */
import React from 'react';
import EventBanner from '../../assets/images/event3.png';
 // import Event from '../../assets/images/event2.png';

// import MainHeader from 'components/Header/MainHeader';
// import MainHeader from 'components/Header/MainHeader';


function EventDetail() {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: '100%',
        paddingTop: '20px',
    };

    const storeStyle = {
      backgroundImage: `url(${EventBanner})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100%',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    };

    // const eventStyle = {
    //     backgroundImage: `url(${Store})`,
    //     backgroundSize: 'cover',
    //     backgroundPosition: 'center',
    //     width: '100%',
    //     height: '100vh',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    // };

    const routeToMyRoom = async () => {
        window.location.href = '/myroom';
    };

    return (
      <div style={containerStyle}>
        {/* <MainHeader /> */}
        <div style={storeStyle} onClick={routeToMyRoom}>
        </div>

        {/* <div style={eventStyle}>
        </div> */}
      </div>
    );
}

export default EventDetail;
