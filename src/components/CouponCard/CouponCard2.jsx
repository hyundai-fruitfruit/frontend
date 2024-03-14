import React, { useState } from 'react';

function CouponCard2({ imgSrc, detail, addStyle, onClick }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true); 
    setTimeout(() => {
      onClick(); 
      setIsClicked(false); 
    }, 200); 
  };

  const clickedStyle = isClicked ? 'scale-95' : ''; 

  // detail 문자열 내의 \n을 기반으로 줄바꿈 처리
  const renderDetail = () => {
    return detail.split('\n').map((line, index) => (
      // React에서 key는 각 요소를 식별하기 위해 필요합니다.
      // 여기서는 간단히 index를 key로 사용합니다.
      <React.Fragment key={index}>
        {line}
        {index < detail.split('\n').length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <div className={`flex flex-row items-center border rounded-2xl my-4 ${addStyle} ${clickedStyle}`} onClick={handleClick}>
      <img src={imgSrc} className="h-[4vh] mx-2 ml-6" /> 
      <div className="flex flex-col justify-center mx-6 my-10 ml-2 grow"> 
        <p className="font-bold text-center">{renderDetail()}</p>
      </div>
    </div>
  );
}

export default CouponCard2;
