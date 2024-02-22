/**
 * @author 오수영
 * @email osy9757@gmail.com
 * @create date 2024-02-20 20:16:55
 * @modify date 2024-02-20 20:16:55
 * @desc 매장 상세페이지 리뷰탭 전체 출력 형식 컴포넌트
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';

import StoreHashTag from './StoreHashTag';
import StoreReviewPage from './StoreReviewPage';

function StoreTotalReview({ image, shopName }) {
  const navigate = useNavigate();

  const handleReviewPage = () => {
    navigate('/reviewCreation', { state: { image, shopName } });
  };
  return (
    <div className="w-full h-full">
      <div className="w-full h-full">
        <StoreHashTag />
      </div>
      <div>
        <StoreReviewPage />
      </div>
      <div className="w-full">
        <button
          className="font-bold w-[94vw] bg-black text-white text-sm py-4 rounded-md fixed bottom-[0vh] left-[3vw]"
          onClick={handleReviewPage}
        >
          리뷰 작성하기
        </button>
      </div>
    </div>
  );
}
export default StoreTotalReview;
