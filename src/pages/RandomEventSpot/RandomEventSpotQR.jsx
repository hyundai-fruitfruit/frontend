/**
 * @author 오수영
 * @email osy9757@gmail.com
 * @create date 2024-02-26 04:16:35
 * @modify date 2024-02-26 04:16:35
 * @desc QR코드 화면 구현
 */
/**
 * @author 엄상은
 * @email sangeun.e.9@gmail.com
 * @create date 2024-02-27 11:55:34
 * @modify date 2024-02-27 17:52:55
 * @desc QR코드 API 연결 및 소켓 연결
 */
import React from 'react';
import { useEffect } from 'react';
import SockJS from 'sockjs-client';
import { Client } from '@stomp/stompjs';
import loginImage from 'assets/images/onboarding_icon.png';
import { useQr } from 'hooks/useQr';
import { useNavigate } from 'react-router-dom';
// import { useSocket } from 'hooks/useSocket';

function RandomEventSpotQR() {
  const { qrData, isQrLoading, error } = useQr();
  const navigate = useNavigate();

  if (isQrLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  
  // useSocket();
  useEffect(() => {
    const socket = new SockJS(`${process.env.REACT_APP_API_BASE_URL}/websocket`);
    const stompClient = new Client({
        webSocketFactory: () => socket,
        onConnect: function (frame) {
            console.log('Socket Connected: ' + frame);

            // 소켓 구독
            stompClient.subscribe('/topic/greetings', (greeting) => {
                console.log('서버에서 받은 메세지: ', greeting);
                const message = new TextDecoder().decode(new Uint8Array(greeting.binaryBody));
                console.log('서버에서 받은 메세지: ', message);
                navigate('/randomEventSpotQRsuccess');
            });
        }
    });
    stompClient.activate();
  }, [navigate]);

  return (
    <div className="flex flex-col h-screen">
      <div className="flex items-center justify-center h-[20vh] font-bold">
        <div className="flex items-center justify-center">
          <img className="size-16 mt-6" src={loginImage} alt="Logo" />
          <p className="mt-8 text-xl">
            이벤트에 참여할게!
            <br /> 매장직원에게 보여주면 돼
          </p>
        </div>
      </div>
      <div className="flex items-center h-[40vh] mx-4 mt-12 border-2 border-black rounded-xl overflow-hidden">
        <img src={qrData} alt="QR code" className="w-full" />
      </div>
    </div>
  );
}

export default RandomEventSpotQR;
