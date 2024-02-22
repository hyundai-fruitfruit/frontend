/**
 * @author 오수영
 * @email osy9757@gmail.com
 * @create date 2024-02-19 16:54:58
 * @modify date 2024-02-19 16:54:58
 * @desc 이미지 슬라이드 캐러셀 버튼, 구분 있는 버전
 */
import React, { useState } from 'react';

import ArrowIcon from 'assets/icons/Icons left.png';

const ImageSlide = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  const goToPrevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  };

  const goToNextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <div id="default-carousel" className="relative">
      <div className="w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`duration-700 ease-in-out ${index === activeIndex ? 'block' : 'hidden'}`}
            data-carousel-item
          >
            <img src={image} className="w-full h-[40vh] rounded-3xl p-4" alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="flex absolute bottom-8 left-1/2 z-30 space-x-3 -translate-x-1/2">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${index === activeIndex ? 'bg-white' : 'bg-gray-400'}`}
            aria-current={index === activeIndex ? 'true' : 'false'}
            aria-label={`Slide ${index + 1}`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
      <button
        type="button"
        className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
        onClick={goToPrevSlide}
      >
        <img src={ArrowIcon} className="w-8 h-8" alt="Next" />
      </button>
      <button
        type="button"
        className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
        onClick={goToNextSlide}
      >
        <img src={ArrowIcon} className="w-8 h-8 transform rotate-180" alt="Previous" />
      </button>
    </div>
  );
};

export default ImageSlide;