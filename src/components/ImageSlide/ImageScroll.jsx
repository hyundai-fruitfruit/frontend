/**
 * @author 오수영
 * @email osy9757@gmail.com
 * @create date 2024-02-21 01:52:03
 * @modify date 2024-02-21 01:52:03
 * @desc 이미지 슬라이드 캐러셀 버튼 x, 구분 x
 */

/**
 * @author 황수영
 * @email sooyoung.h8@gmail.com
 * @create date 2024-03-10
 * @modify date 2024-03-10
 * @desc 배열 방식으로 변경하여 이미지 매핑
 */
import React from 'react';

const containerStyle = {
  display: 'flex',
  gap: '10px',
};

const imageStyle = {
  width: '34vw',
  height: '34vw',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  border: 'none', 
  borderRadius: '15%',
};

function ImageScroll(images) {
  console.log('ImageScroll images' + JSON.stringify(images));
  const imagesArray = Object.values(images.images);

  if (!Array.isArray(imagesArray)) return null;
  console.log("ImageScroll images => " + imagesArray);

  return (
    <div className="overflow-x-auto flex flex-row mb-6 mt-6">
      {/* {imageList.map((imgUrl, index) => (
        <div key={index} className="flex-none">
          <img className={`rounded-xl ${size}`} src={imgUrl} alt={`Image ${index + 1}`} />
        </div>
      ))} */}
      <div className="image-container" style={containerStyle}>
        {imagesArray.map((imgObj, index) => (
          <div key={index} className="flex-none" style={{ ...imageStyle, backgroundImage: `url(${imgObj.imgUrl})` }} />
          ))}
      </div>
    </div>
  );
}

export default ImageScroll;
