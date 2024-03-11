/**
 * @author 최성혁
 * @email [cinemay33@gmail.com]
 * @create date 2024-03-02 15:27:22
 * @modify date 2024-03-02 15:27:22
 * @desc Mbti 카드 컴포넌트
 */
import React, { useState } from 'react';

function CouponCard2({ imgSrc, detail, addStyle, onClick }) {
  const [isClicked, setIsClicked] = useState(false);

  
  const handleClick = () => {
    setIsClicked(true); 
    // 페이지 전환 지연
    setTimeout(() => {
      onClick(); 
      setIsClicked(false); 
    }, 200); 
  };


  const clickedStyle = isClicked ? 'scale-95' : ''; 

  return (
    <div className={`flex flex-row items-center border rounded-2xl my-4 ${addStyle} ${clickedStyle}`} onClick={handleClick}>
      <img src={imgSrc} className="h-[4vh] mx-2 ml-6" /> 
      <div className="flex flex-col justify-center mx-6 my-10 ml-2"> 
        <p className="text-lg font-bold text-center">{detail}</p>
      </div>
    </div>
  );
}

export default CouponCard2;
