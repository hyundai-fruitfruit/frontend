/**
 * @author 오수영
 * @email osy9757@gmail.com
 * @create date 2024-02-20 11:17:40
 * @modify date 2024-02-20 11:17:40
 * @desc 매장 상세페이지 매장 정보 출력 컴포넌트
 */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import InputRatingStar from 'components/RatingStar/InputRatingStar';

import floorIcon from 'assets/icons/floor_icon.png';
import numberIcon from 'assets/icons/store_number_icon.png';
import ratingIcon from 'assets/icons/rating_icon.png';

function DisplayShopDetails({ details }) {
  const { name, floor, phone, avgScore, description } = details;

  return (
    <div className="w-full px-4 py-4 font-sans text-left">
      <p className="mb-6 text-4xl font-bold">{name}</p> {/* 폰트 크기와 마진 조정 */}
      <div className="flex items-center mb-4"> {/* 아이템들을 중앙에 정렬하고 마진 조정 */}
        <img src={floorIcon} className="h-6 mr-4" alt="Floor icon" /> {/* 아이콘 크기 및 마진 조정 */}
        <p className="text-lg font-bold">{floor}층</p> {/* 텍스트 크기 조정 */}
      </div>
      <div className="flex items-center mb-4">
        <img src={numberIcon} className="h-6 mr-4" alt="Phone icon" /> {/* 아이콘 크기 및 마진 조정 */}
        <p className="text-lg font-bold">{phone}</p>
      </div>
      <div className="flex items-center mb-6">
        <img src={ratingIcon} className="h-6 mr-4" alt="Rating icon" /> 
        <InputRatingStar rating={avgScore} readOnly={true} /> 
        <p className='ml-3 font-bold'>{avgScore}점</p>
      </div>
      <p className="text-lg">{description}</p> 
    </div>
  );
}

export default DisplayShopDetails;
