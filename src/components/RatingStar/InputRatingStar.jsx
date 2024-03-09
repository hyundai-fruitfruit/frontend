/**
 * @author 오수영
 * @email osy9757@gmail.com
 * @create date 2024-02-21 14:07:26
 * @modify date 2024-02-21 14:07:26
 * @desc 별점 표시 컴포넌트 rating값으로 초기에 선택된 상태로 출력 가능
 *       추후에 인자에 따라 수정 가능 불가능 구현 필요
 */
import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const InputRatingStar = ({ rating, setRating, readOnly = false, isStoreStar }) => {
  const [hover, setHover] = useState(null);

  

  return (
    <div className="flex flex-col items-center">
      <div className="flex">
        {[...Array(5)].map((_, index) => {
          const ratingValue = index + 1;

          return (
            <label key={index} className="cursor-pointer">
              <input
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={() => !readOnly && setRating(ratingValue)}
                className="hidden"
              />
            <span style={{ marginRight: isStoreStar ? '2vw' : '1.5vw', display: 'flex', alignItems: 'center' }}>
              <FaStar
                size={isStoreStar ? 22 : 16}
                onMouseEnter={() => !readOnly && setHover(ratingValue)}
                onMouseLeave={() => !readOnly && setHover(null)}
                color={ratingValue <= (hover || Math.floor(rating)) ? '#E6706C' : '#e4e5e9'}
                className={`transition-colors duration-200 ease-in-out ${ratingValue <= (hover || Math.floor(rating)) ? 'text-customPink' : 'text-gray-300'}`}
              />
            </span>

            </label>
          );
        })}
      </div>
    </div>
  );
};

export default InputRatingStar;
