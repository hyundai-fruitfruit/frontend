/**
 * @author 오수영
 * @email osy9757@gmail.com
 * @create date 2024-02-21 09:31:12
 * @modify date 2024-02-22 09:31:12
 * @desc 매장 상세 페이지 리뷰탭에 하나의 리뷰를 보여주는 형식 컴포넌트
 */
import React from 'react';

import ImageScroll from 'components/ImageSlide/ImageScroll';

function StoreReview({ name, score, images, review }) {
  console.log("images " + images);
  console.log("score " + score);
  console.log("name " + name);

  return (
    <div className="flex flex-col w-full border-b-8">
      <div className="p-4">
        <div className="flex items-center">
          <div className="rounded-full bg-gray-200 h-10 w-10"></div>
          <div className="ml-2">
            <div className="text-sm font-semibold">{name}</div>
            <div className="flex items-center mt-1">
              <span className="text-yellow-400 text-xs mr-1">
                {'★'.repeat(score)}
                {'☆'.repeat(5 - score)}
              </span>
              <span className="ml-1 text-gray-600 text-xs">{score}</span>
            </div>
          </div>
        </div>
        <div className="mt-2">
          <ImageScroll images={images} />
          <p className="text-gray-700 text-sm mt-2">{review}</p>
        </div>
        {/* <div className="flex items-center justify-between mt-2">
          <div className="text-xs text-gray-600">{date}</div>
          <div className="flex items-center text-xs text-gray-600 border p-1 rounded-md">
            <span>👍 </span>
            <span className="ml-1 pl-1">{likes}</span>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default StoreReview;
