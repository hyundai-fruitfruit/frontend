/**
 * @author 엄상은
 * @email sangeun.e.9@gmail.com
 * @create date 2024-03-04 11:16:31
 * @modify date 2024-03-04 11:16:31
 * @desc QR코드 로더 컴포넌트
 */

import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import SockJS from 'sockjs-client';
import { Client } from '@stomp/stompjs';
import { useQr } from 'hooks/useQr';
// import { useSocket } from 'hooks/useSocket';

function MyQrLoader() {
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
        <div className="flex items-center h-[40vh] mx-4 border-2 border-black rounded-xl overflow-hidden">
            <img src={qrData} alt="QR code" className="w-full" />
        </div>
    )
}

export default MyQrLoader;