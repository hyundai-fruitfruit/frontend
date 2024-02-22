/**
 * @author 오수영
 * @email osy9757@gmail.com
 * @create date 2024-02-22 03:37:46
 * @modify date 2024-02-22 03:37:46
 * @desc [description]
 */
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Header from 'components/Header/Header';
import InputRatingStar from 'components/RatingStar/InputRatingStar';
import HashtagElement from 'components/StoreReview/HashtagElement';
import ImageScroll from 'components/ImageSlide/ImageScroll';

import cameraIcon from 'assets/icon/camera_icon.png';

function ReviewEditor() {
  const location = useLocation();
  const navigate = useNavigate();
  const { rating: initialRating, selectedTags } = location.state || {};
  const [userRating, setUserRating] = useState(initialRating || 0);
  const [reviewContent, setReviewContent] = useState('');
  const [attachedImages, setAttachedImages] = useState([]);

  const handleReviewButton = () => {
    navigate('/main');
  };

  const handleImageAttachment = (e) => {
    const files = e.target.files;
    const newImages = [];

    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        newImages.push(event.target.result);
        if (newImages.length === files.length) {
          setAttachedImages((prev) => [...prev, ...newImages]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  return (
    <div className="">
      <div className="mt-8 mb-2">
        <Header text="리뷰 작성" />
      </div>
      <div className="flex flex-col items-center jusity-center">
        <div className="mb-6">
          <InputRatingStar rating={userRating} setRating={setUserRating} />
        </div>
        <div className="tags-info mb-4 space-y-4">
          <div className="flex flex-wrap">
            {selectedTags?.map((tagId, index) => (
              <div key={index} className="mb-2">
                <HashtagElement id={tagId} isSelected={false} />
              </div>
            ))}
          </div>
        </div>
        <div className="w-full">
          <textarea
            placeholder="리뷰를 작성해주세요."
            value={reviewContent}
            onChange={(e) => setReviewContent(e.target.value)}
            className="w-[90vw] h-[25vh] border rounded-lg px-4 py-2 mt-4 ml-[5vw]"
            rows={4}
          />
        </div>
      </div>
      <div className="flex flex-row justify-start items-center mt-4 w-[95vw]">
        <label
          htmlFor="file-upload"
          className="flex-none cursor-pointer border items-center justify-center rounded-xl p-4 ml-[5vw] w-[10vh] h-[10vh]"
        >
          <img src={cameraIcon} className="w-10 h-10 mr-2 w-[6vh] h-[6vh]" />
          <input id="file-upload" type="file" multiple onChange={handleImageAttachment} style={{ display: 'none' }} />
        </label>
        <div className="h-[10vh] ml-1">
          <ImageScroll images={attachedImages} size={'w-[10vh] h-[10vh] mx-1'} />
        </div>
      </div>
      <div className="w-full">
        <button
          className="font-bold w-[90vw] bg-black text-white text-xl text-sm py-4 rounded-2xl fixed bottom-[5vh] left-[5vw]"
          onClick={handleReviewButton}
        >
          리뷰 등록하기
        </button>
      </div>
    </div>
  );
}

export default ReviewEditor;
