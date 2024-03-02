import React from 'react';

const BlackButton = ({ children }) => {
  return (
    <div className='fixed bottom-0 flex justify-center items-center mb-10 w-full'>
      <button className="w-10/12 bg-black rounded-2xl p-5 text-white font-bold text-xl">
        {children}
      </button>
    </div>
  );
}

export default BlackButton;
