/**
 * @author 오수영
 * @email osy9757@gmail.com
 * @create date 2024-02-21 14:07:26
 * @modify date 2024-02-21 14:07:26
 * @desc [description]
 */
import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const InputRatingStar = ({ rating, setRating }) => {
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
                onClick={() => setRating(ratingValue)}
                className="hidden"
              />
              <FaStar
                size={24}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(null)}
                color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
                className={`transition-colors m-3 size-8 duration-200 ease-in-out ${ratingValue <= (hover || rating) ? 'text-yellow-400' : 'text-gray-300'}`}
              />
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default InputRatingStar;
