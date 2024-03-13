/**
 * @author 오수영
 * @email osy9757@gmail.com
 * @create date 2024-02-21 02:01:37
 * @modify date 2024-02-21 02:01:37
 * @desc 매장 전체의 리뷰를 출력해주는 형식 컴포넌트
 */
import React from 'react';
import StoreReview from './StoreReview';


function StoreReviewList({ details }) {
  console.log("StoreReviewList ");
  console.log("StoreReviewList " + details);
  console.log(details.reviews[0].images);


  return (
    <div>
      {details.reviews.map((review) => (
        <StoreReview
          key={review.id}
          review={review}
        />
      ))}
    </div>
  );
}

export default StoreReviewList;
