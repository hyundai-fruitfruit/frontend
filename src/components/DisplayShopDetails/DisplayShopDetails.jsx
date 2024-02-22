/**
 * @author 오수영
 * @email osy9757@gmail.com
 * @create date 2024-02-20 11:17:40
 * @modify date 2024-02-20 11:17:40
 * @desc 매장 상세페이지 매장 정보 출력 컴포넌트
 */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import floorIcon from 'assets/icons/floor_icon.png';
import numberIcon from 'assets/icons/store_number_icon.png';
import ratingIcon from 'assets/icons/rating_icon.png';

function DisplayShopDetails({ details }) {
  const { name, floor, phone, rating, description } = details;

  return (
    <div className="font-sans text-left w-full h-full px-4">
      <p className="font-bold text-2xl mb-4">{name}</p>
      <div className="flex mb-2">
        <div className="flex-none">
          <img src={floorIcon} />
        </div>
        <div className="flex-1 ml-2">
          <p>{floor}</p>
        </div>
      </div>
      <div className="flex mb-2">
        <div className="flex-none">
          <img src={numberIcon} />
        </div>
        <div className="flex-1 ml-2">
          <p>{phone}</p>
        </div>
      </div>
      <div className="flex mb-2">
        <div className="flex-none">
          <img src={ratingIcon} />
        </div>
        <div className="flex-1 ml-2 mr-0 pr-0">
          <span style={{ color: 'red' }}>{rating}</span>
        </div>
        {/* <div className="flex-1">4.2점</div> */}
      </div>
      <p className="text-xs w-full h-full">{description}</p>
    </div>
  );
}

export default DisplayShopDetails;
