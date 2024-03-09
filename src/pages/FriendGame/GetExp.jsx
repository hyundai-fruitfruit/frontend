/**
 * @author 엄상은
 * @email sangeun.e.9@gmail.com
 * @create date 2024-03-03 14:37:25
 * @modify date 2024-03-09 10:46:19
 * @desc 경험치 얻는 페이지
 */

import React from 'react';
import ProgressBar from 'components/ModalBubbleContent/ProgressBar';

function GetExp({ type, start, end }) {
  const imageUrl = `https://fruitfruit.s3.ap-northeast-2.amazonaws.com/dice/exp-${type}.png`;

  return (
    <div className="h-full">
      <div className="bg-[url('assets/images/heendy-background.png')] h-full">
        <div className="w-56 mx-auto pt-56">
          <img src={imageUrl} className='mb-8'/>
          <ProgressBar fromValue={start} toValue={end} />
          <div className="grid grid-rows-1 grid-flow-col grid-cols-2 mb-6 items-end text-gray-300 font-bold">
            <span className='text-left'>Level 1</span>
            <span className='text-right'>Level 2</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetExp;
