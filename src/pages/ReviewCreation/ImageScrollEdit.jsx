/**
 * @author 오수영
 * @email osy9757@gmail.com
 * @create date 2024-02-21 01:52:03
 * @modify date 2024-02-21 01:52:03
 * @desc 이미지 슬라이드 캐러셀 버튼 x, 구분 x
 */
import React from 'react';

function ImageScrollEdit({images}) {
  const imagesArray = images;
  if (!Array.isArray(imagesArray)) return null;

  return (
    <div className="overflow-x-auto flex flex-row mb-6 mt-6">
      {imagesArray.map((imgUrl, index) => (
        <div key={index}>
          <img className="rounded-2xl w-28 h-28 ml-4" src={imgUrl} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </div>
  );
}

export default ImageScrollEdit;
