/**
 * @author OHsooyoung
 * @email osy9757@gmai.com
 * @create date 2024-02-13 02:24:13
 * @modify date 2024-02-17 14:40:02
 * @desc [description]
 */
import React from 'react';
import SpeechBubble from '../../components/SpeechBubble/SpeechBubble';

function MainPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <SpeechBubble text={'오늘은 식당 랜덤스팟이 열렸어요! 구경해보세요!'} />
      <div className="mb-4 relative">
        <img
          src="../../../images/mainpage_img.png"
          alt="캐릭터"
          className="w-72 h-auto"
        />
      </div>
      <h1 className="text-2xl font-bold mt-4 mb-8">흰둥이😊</h1>
    </div>
  );
}

export default MainPage;
