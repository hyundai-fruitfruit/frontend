/**
 * @author 오수영
 * @email osy9757@gmail.com
 * @create date 2024-02-22 02:50:08
 * @modify date 2024-02-22 02:50:08
 * @desc 리뷰 작성시 별점과 해시태그 선택 페이지
 */

import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Header from 'components/Header/Header';
import InputRatingStar from 'components/RatingStar/InputRatingStar';
import HashtagSelection from 'components/StoreReview/HashtagSelection';
import BlackButton from 'components/Button/BlackButton';

function ReviewCreation() {
  const location = useLocation();
  const navigate = useNavigate();
  const { image, shopName, details } = location.state || {};

  const [rating, setRating] = useState(0);
  const [selectedTags, setSelectedTags] = useState([]);

  const handleReviewPage = () => {
    navigate('/ReviewEditor', { state: { image, shopName, rating, selectedTags, details } });
  };

  console.log('details', details);
  return (
    <div className="flex flex-col overflow-auto w-full">
      <Header />
      <div className="flex flex-col justify-center items-center">
        <img className="w-[23vh] h-[23vh] rounded-2xl" src={image} alt="Shop" />
        <div className="px-6 py-4 text-center">
          <div className="font-bold text-xl mb-2">{shopName}</div>
          <p className="text-gray-500 text-sm">이 가게에 대한 리뷰를 남겨주세요.</p>
        </div>
      </div>
      <hr className="m-8" />
      <div className="flex flex-col items-center mb-5">
        <p className="text-lg font-semibold mb-1">마음에 드셨나요?</p>
        <p className="text-gray-500">이 가게를 별점으로 평가해주세요</p>
      </div>
      <InputRatingStar rating={rating} setRating={setRating} isStoreStar={true} starSize={26} />
      <hr className="m-8" />
      <HashtagSelection selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
      <BlackButton onClick={handleReviewPage}>다음으로</BlackButton>
    </div>
  );
}

export default ReviewCreation;
