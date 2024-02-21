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
