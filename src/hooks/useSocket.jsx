/**
 * @author 엄상은
 * @email sangeun.e.9@gmail.com
 * @create date 2024-03-02 17:01:12
 * @modify date 2024-03-02 17:01:12
 * @desc 소켓 훅 분리
 */

import { useEffect } from 'react';
import SockJS from 'sockjs-client';
import { Client } from '@stomp/stompjs';

export function useSocket() {
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
                });
            }
        });
        stompClient.activate();
    }, []);
}
