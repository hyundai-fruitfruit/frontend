/**
 * @author 엄상은
 * @email sangeun.e.9@gmail.com
 * @create date 2024-03-03 14:37:25
 * @modify date 2024-03-03 14:37:25
 * @desc 경험치 얻는 페이지
 */

import React, { useEffect, useState } from 'react';
import startHeendy from 'assets/images/startHeendy.png';
import SpeechBubble from 'components/SpeechBubble/SpeechBubble';

function GetExp({ type, start, end }) {
  const imageUrl = `https://fruitfruit.s3.ap-northeast-2.amazonaws.com/dice/exp-${type}.png`;

  const [width, setWidth] = useState(`${start}%`);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(`${end}%`);
    }, 500);

    return () => clearTimeout(timer);
  }, [end]);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <SpeechBubble addStyle={"flex flex-col justify-center items-center h-2/6"} boldText={"친구와 게임하고 경험치를 얻었어"}>
        <img src={imageUrl} alt="경험치" className="h-44" />
        <div className='relative w-32 h-2.5 bg-black'>
          <div className='absolute left-0 top-0 h-full bg-white transition-all duration-1000 ease-in-out' style={{ width }}></div>
        </div>
      </SpeechBubble>
      <div className="flex justify-center items-center h-56">
          <img className="h-full" src={startHeendy} />
      </div>
    </div>
  );
}

export default GetExp;
