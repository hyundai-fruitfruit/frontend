/**
 * @author 오수영
 * @email osy9757@gmail.com
 * @create date 2024-02-18 01:14:03
 * @modify date 2024-02-18 17:41:50
 * @desc 메인페이지 흰디 캐릭터 뒤 배경 컴포넌트
 */
import React from 'react';

function BackgroundImage({ imageUrl }) {
  return (
    <div className="absolute w-full h-full z-[-1]">
      <img src={imageUrl} alt="배경" className="w-full h-full object-cover" />
    </div>
  );
}

export default BackgroundImage;
