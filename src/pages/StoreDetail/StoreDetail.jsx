/**
 * @author 오수영
 * @email osy9757@gmail.com
 * @create date 2024-02-19 16:55:21
 * @modify date 2024-02-19 16:55:21
 * @desc [description]
 */
import React from 'react';

import Header from 'components/Header/Header';
import ImageSlide from 'components/ImageSlide/ImageSlide';
import DisplayShopDetails from 'components/DisplayShopDetails/DisplayShopDetails';

function storeDetail() {
  return (
    <div className="flex flex-col overflow-auto w-full">
      <div className="h-[7vh] border w-full flex items-center justify-center">
        <Header text={'매장 정보'} />
      </div>
      <div className="flex flex-col items-center justify-center h-[70vh] border w-full">
        <div className="border w-full h-[40vh]">
          <ImageSlide />
        </div>
        <div className="h-[30vh] border w-full">
          <DisplayShopDetails />
        </div>
      </div>
      <div className="flex items-center justify-center h-[80vh] border">Section 3 (80%)</div>
      <div className="flex items-center justify-center h-[10vh] border">Section 4 (10%)</div>
    </div>
  );
}
export default storeDetail;
