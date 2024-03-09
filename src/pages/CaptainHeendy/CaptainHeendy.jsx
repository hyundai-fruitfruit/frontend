/* eslint-disable react/no-unknown-property */
/**
 * @author 황수영
 * @email sooyoung.h8@gmail.com
 * @create date 2024-03-01 04:35:36
 * @modify date 2024-03-01 04:35:36
 * @desc 흰디 챗봇 - 매장 추천
 */

import { useNavigate } from 'react-router-dom';
import React from 'react';
import CaptainHeendyAsk from 'assets/images/captain_heendy.png';
import BtnHeendyChatbot from 'assets/images/btn_heendy1.png';
import BtnEventNotice from 'assets/images/btn_heendy2.png';
import MainHeader from 'components/Header/MainHeader';

function CaptainHeendy() {
    const navigate = useNavigate();

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: '100%',
        paddingTop: '20px',
    };

    const backStyle = {
        backgroundImage: `url(${CaptainHeendyAsk})`,
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
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '12vh', 
    };

    const buttonStyle = {
        width: '78vw',
        height: 'auto',
        marginBottom: '2vh',
    };

    // TODO: 챗봇 페이지와 연결하기
    const handleHeendyChatbot = () => {
      navigate('/chatBot');

    };

    const handleEventNotice = () => {
      navigate('/eventNotice');
    };

    return (
        <div style={containerStyle}>
            <MainHeader />
            <div style={backStyle}>
                <div style={buttonContainerStyle}>
                    <img src={BtnHeendyChatbot} style={buttonStyle} alt="Heendy Chatbot" onClick={handleHeendyChatbot}/>
                    <img src={BtnEventNotice} style={buttonStyle} alt="EventNotice" onClick={handleEventNotice}/>
                </div>
            </div>
        </div>
    );
}

export default CaptainHeendy;
