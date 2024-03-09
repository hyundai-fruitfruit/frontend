/**
 * @author 오수영
 * @email osy9757@gmail.com
 * @create date 2024-02-19 16:54:58
 * @modify date 2024-02-19 16:54:58
 * @desc 이미지 슬라이드 캐러셀 버튼, 구분 있는 버전
 */
import React, { useState } from 'react';

//import ArrowIcon from 'assets/icons/Icons left.png';

const ImageSlide = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`duration-700 ease-in-out ${index === activeIndex ? 'block' : 'hidden'}`}
            data-carousel-item
          >
          <div className="flex justify-center items-center">
            <img src={image} className="w-[84vw] h-[38vh] p-2 rounded-extra" alt={`Slide ${index + 1}`} />
          </div>
          </div>
        ))}
      </div>
      <div className="flex m-4 space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-2.5 h-2.5 rounded-full ${index === activeIndex ? 'bg-gray-500' : 'bg-gray-200'}`}
            aria-current={index === activeIndex ? 'true' : 'false'}
            aria-label={`Slide ${index + 1}`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );

};

export default ImageSlide;
