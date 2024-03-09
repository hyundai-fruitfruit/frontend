/**
 * @author 오수영
 * @email osy9757@gmail.com
 * @create date 2024-02-21 02:01:37
 * @modify date 2024-02-21 02:01:37
 * @desc 매장 전체의 리뷰를 출력해주는 형식 컴포넌트
 */
import React from 'react';
import StoreReview from './StoreReview';

// import BeefSteakTaco from 'assets/images/beef_steak_taco.png';
// import Lazji from 'assets/images/Lazji.png';
// import SzechunaSpicyEggplant from 'assets/images/Szechuan_Spicy_Eggplant.png';

// const reviewsData = [
//   {
//     name: '홍길동',
//     score: '5.0',
//     imageSrcs: [Lazji, BeefSteakTaco, SzechunaSpicyEggplant, Lazji, BeefSteakTaco, SzechunaSpicyEggplant],
//     review: '정말 맛있는 식당이에요. 다음에 또 올게요!',
//     date: '2024년 3월 14일',
//     likes: 12,
//   },
//   {
//     name: '김철수',
//     score: '4.5',
//     imageSrcs: [BeefSteakTaco],
//     review: '서비스가 좋았고 음식도 맛있습니다.',
//     date: '2024년 3월 15일',
//     likes: 9,
//   },
//   {
//     name: '맛집 좋아',
//     score: '2',
//     imageSrcs: [SzechunaSpicyEggplant],
//     review: '서비스가 좋았고 음식도 맛있습니다.',
//     date: '2024년 3월 15일',
//     likes: 9,
//   },
// ];

function StoreReviewList({ details }) {
  console.log("StoreReviewList ");
  console.log("StoreReviewList " + details);
  console.log(details.reviews[0].images);


  return (
    <div>
      {details.reviews.map((review) => (
        <StoreReview
          key={review.id}
          name={review.name}
          score={review.score}
          images={review.images}
          review={review.content}
        />
      ))}
    </div>
  );
}

export default StoreReviewList;
