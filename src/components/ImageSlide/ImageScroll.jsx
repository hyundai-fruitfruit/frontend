/**
 * @author 오수영
 * @email osy9757@gmail.com
 * @create date 2024-02-21 01:52:03
 * @modify date 2024-02-21 01:52:03
 * @desc 이미지 슬라이드 캐러셀 버튼 x, 구분 x
 */
import React from 'react';

function ImageScroll({ images = [], size = 'w-32 h-32' }) {
  if (!Array.isArray(images)) return null;

  return (
    <div className="overflow-x-auto flex flex-row">
      {images.map((src, index) => (
        <div key={index} className="flex-none">
          <img className={`rounded-xl ${size}`} src={src} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </div>
  );
}

export default ImageScroll;
