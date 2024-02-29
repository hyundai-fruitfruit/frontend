/**
 * @author 황수영
 * @email sooyoung.h8@gmail.com
 * @create date 2024-02-28 04:35:36
 * @modify date 2024-02-28 04:35:36
 * @desc 나의 방탭의 옵션 컴포넌트
 */
import React from 'react';

const OptionIcons = ({ options, setSelectedOption }) => {
  return (
    <div className='icon-container'>
      {options.map(option => (
        <div
          className='icon bg-gray-300 m-2 mb-4 w-15vw h-15vw rounded-lg'
          key={option.name}
          style={{ backgroundImage: `url(${option.backgroundImageUrl})` }}
          onClick={() => setSelectedOption(option.name)}
        >
          {/* {option.name} */}
        </div>
      ))}
    </div>
  );
};

export default OptionIcons;