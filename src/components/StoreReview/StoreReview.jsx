/**
 * @author 오수영
 * @email osy9757@gmail.com
 * @create date 2024-02-21 09:31:12
 * @modify date 2024-02-22 09:31:12
 * @desc 매장 상세 페이지 리뷰탭에 하나의 리뷰를 보여주는 형식 컴포넌트
 */
import React from 'react';

import ImageScroll from 'components/ImageSlide/ImageScroll';
import InputRatingStar from 'components/RatingStar/InputRatingStar';

function StoreReview({ name, score, images, review }) {
  console.log("StoreReview score " + score);
  console.log("StoreReview name " + name);
  console.log("StoreReview review " + review);
  console.log("StoreReview images " + images);
  console.log("StoreReview images " + JSON.stringify(images));

  return (
    <div>
    <div className="flex flex-col w-full">
      <div className="p-4 ml-5 mr-5 mb-3 mt-2">
        <div className="flex items-center">
          <div className="rounded-full bg-gray-100 h-14 w-14"></div>
          <div className="ml-5 mr-5">
            <div className="text-sm font-semibold">흰둥이</div>
            <div className="flex items-center mt-1">
              <div className="">
                <InputRatingStar 
                  rating={score} 
                  isStoreStar={false}
                  starSize={16}
                  />
              </div>
              {/* <span className="ml-1 text-gray-600 text-xs">{score}</span> */}
            </div>
          </div>
        </div>
        <div className="mt-5">
          <ImageScroll images={images} />
          <p className="text-gray-800 text-sm mt-2">{review}</p>
        </div>
        {/* <div className="flex items-center justify-between mt-2">
          <div className="text-xs text-gray-600">{date}</div>
          <div className="flex items-center text-xs text-gray-600 border p-1 rounded-md">
            <span>👍 </span>
            <span className="ml-1 pl-1">{likes}</span>
          </div>
        </div> */}
      </div>
      <div className="bg-gray-100 h-3" />
    </div>
    </div>
  );
}

export default StoreReview;
