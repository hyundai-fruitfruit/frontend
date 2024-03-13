/**
 * @author 오수영
 * @email osy9757@gmail.com
 * @create date 2024-02-22 02:50:08
 * @modify date 2024-02-22 02:50:08
 * @desc 리뷰 작성시 내용 및 이미지 페이지
 */

/**
 * @author 황수영
 * @email sooyoung.h8@gmail.com
 * @create date 2024-03-10
 * @modify date 2024-03-10
 * @desc 이미지 다중 업로드 및 이미지 리사이징
 */

import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from 'components/Header/Header';
import InputRatingStar from 'components/RatingStar/InputRatingStar';
import HashtagElement from 'components/StoreReview/HashtagElement';
import ImageScrollEdit from './ImageScrollEdit';
import BlackButton from 'components/Button/BlackButton';
import cameraIcon from 'assets/icons/carmeraIcon.png';
import { postReview } from "../../apis/request"
import Resizer from "react-image-file-resizer";

const resizeFile = (file) =>
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      file, // Blob
      100, // maxWidth.
      100, // maxHeight
      "PNG",
      100,
      0,
      (uri) => {
        resolve(uri);
      },
      "base64"
    );	
  }
);

const createReview = async (storeId, reviewReqDto, imageList) => {
  try {
    const formData = new FormData();
    formData.append('reviewReqDto', new Blob([reviewReqDto], {type: 'application/json'}));

    Array.from(imageList).forEach((file) => {
      const compressedFile = resizeFile(file);
      formData.append('imageList', compressedFile);
    });

    console.log('formData :', formData);
    const response = postReview(formData, storeId);
    console.log('리뷰 작성 결과:', response);
    return response;
  } catch (error) {
    console.error('리뷰 작성 중 오류 발생:', error);
    throw error;
  }
};

function ReviewEditor() {
  const location = useLocation();
  const navigate = useNavigate();
  const { rating: initialRating, selectedTags, details } = location.state || {};
  const [userRating, setUserRating] = useState(initialRating || 0);
  const [reviewContent, setReviewContent] = useState('');
  const [attachedImages, setAttachedImages] = useState([]);
  const [imageList, setImageList] = useState([]);

  const handleReviewSubmission = async () => {
    const reviewReqDto = JSON.stringify({
      score: userRating,
      content: reviewContent,
      hashtagIds: [105, 201, 205]
    });

    try {
      await createReview(details.id, reviewReqDto, imageList);
      console.log('리뷰 등록에 성공하였습니다');
      navigate('/getExp/sandwich');
    } catch (error) {
      console.log('리뷰 등록에 실패하였습니다');
    }
  };

  const handleImageAttachment = (e) => {
    const files = e.target.files;
    const newImages = [];
    const uploadImages = [];

    Array.from(files).forEach((file) => {
      uploadImages.push((file));
    });
    setImageList((prevImageList) => [...prevImageList, ...uploadImages]);
    
    try {
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

    } catch (error) {
      console.log('이미지 등록에 실패하였습니다');
    }
  };

  return (
    <div className="">
      <div className="mt-8 mb-2">
        <Header text="리뷰 작성" />
      </div>
      <div className="flex flex-col items-center jusity-center mr-4 ml-4">
        <div className="mb-6 ">
  
          <InputRatingStar rating={userRating} setRating={setUserRating} starSize={30} isStoreStar={false}/>
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
            className="w-[80vw] h-[25vh] border rounded-lg px-4 py-2 mt-4 ml-[5vw]"
            rows={4}
          />
        </div>
      </div>
      <div className="flex flex-row justify-start items-center mt-4 w-[95vw] ml-8 ">
        <label
          htmlFor="file-upload"
          className="flex-none cursor-pointer border items-center justify-center rounded-xl p-4 ml-[5vw] w-[10vh] h-[10vh]"
        >
          <img src={cameraIcon} className="w-[6vh] h-[6vh]" />
          <input id="file-upload" type="file" multiple onChange={handleImageAttachment} style={{ display: 'none' }} />
        </label>
        <div className="h-[10vh] mb-16">
          <ImageScrollEdit images={attachedImages} size={'w-[10vh] h-[10vh]'} />
        </div>
      </div>
      <BlackButton onClick={handleReviewSubmission}>리뷰 작성하기</BlackButton>
    </div>
  );
}

export default ReviewEditor;