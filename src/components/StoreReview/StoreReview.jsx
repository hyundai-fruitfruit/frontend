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

const hashtagStyle = {
  backgroundColor: '#FDF1F1',
  color: 'black',
  padding: '0.2rem 0.5rem',
  borderRadius: '0.5rem',
  marginRight: '0.5rem',
  fontSize: '0.875rem',
  fontWeight: 400,
};

function StoreReview({ name, score, images, content, review }) {
  console.log("StoreReview name " + name);

  return (
    <div>
    <div className="flex flex-col w-full">
      <div className="p-4 ml-5 mr-5 mb-3 mt-2">
        <div className="flex items-center">
          <div
            className="rounded-full h-14 w-14 border border-gray-300"
            style={{
              backgroundImage: `url(${review.profile})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
          <div className="ml-5 mr-5">
            <div className="text-sm font-semibold">{review.nickname}</div>
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
          <p className="text-gray-800 text-sm mt-2">{content}</p>
          <div className="flex mt-2">
              {review.hashtags.map((tag) => (
                <div
                  key={tag.id}
                  style={hashtagStyle} 
                >
                  {tag.name}
                </div>
              ))}
            </div>
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
