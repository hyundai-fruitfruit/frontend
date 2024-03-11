/**
 * @author 오수영
 * @email osy9757@gmail.com
 * @create date 2024-02-22 09:32:01
 * @modify date 2024-02-22 09:32:01
 * @desc 매장 상세페이지 리뷰 탭 리뷰 칸 헤더부분 컴포넌트
 */
import React from 'react';
import DropdownMenu from 'components/DropdownMenu/DropdownMenu';
import StoreReviewList from './StoreReviewList';

function StoreReviewPage({ details }) {
  
  const reviewCount = Array.isArray(details.reviews) ? details.reviews.length : 0;

  return (
    <div>
      <div className="flex flex-row justify-between">
        <p className="flex items-center ml-10 text-lg">총 {reviewCount}개의 리뷰</p>
        <DropdownMenu />
      </div>
      {/* 전체 리뷰들 리스트 */}
      <div>
        <StoreReviewList details={details} />
      </div>
    </div>
  );
}
export default StoreReviewPage;
