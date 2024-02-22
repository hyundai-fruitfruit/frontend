/**
 * @author 오수영
 * @email osy9757@gmail.com
 * @create date 2024-02-22 09:27:03
 * @modify date 2024-02-22 09:27:03
 * @desc 카드 컴포넌트
 */
import React from 'react';

const Card = ({ children, icon }) => {
  const iconClass = icon ? 'bg-black' : 'bg-white border border-gray-300';
  return (
    <div className={`rounded-xl p-4 my-2 ${iconClass}`}>
      {icon ? (
        <img src={icon} alt="Card icon" className="w-full h-full" />
      ) : (
        children
      )}
    </div>
  );
};

export default Card;
