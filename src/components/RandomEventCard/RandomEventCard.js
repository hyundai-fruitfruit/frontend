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
