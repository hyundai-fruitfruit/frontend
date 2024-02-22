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

function StoreReviewPage() {
  return (
    <div>
      <div className="flex flex-row justify-between">
        <p className="m-4 text-lg">총 5개의 리뷰</p>
        <DropdownMenu />
      </div>
      <div>
        <StoreReviewList />
      </div>
    </div>
  );
}
export default StoreReviewPage;