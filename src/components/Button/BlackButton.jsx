/**
 * @author 엄상은
 * @email sangeun.e.9@gmail.com
 * @create date 2024-03-03 01:41:25
 * @modify date 2024-03-03 01:41:25
 * @desc 검은색 버튼 컴포넌트화
 */

import React from 'react';

function BlackButton({ children, onClick }) {
  return (
    <div className='fixed bottom-0 flex justify-center items-center mb-10 w-full'>
      <button onClick={onClick} className="w-10/12 bg-black rounded-2xl p-5 text-white font-bold text-xl">
        {children}
      </button>
    </div>
  );
}

export default BlackButton;