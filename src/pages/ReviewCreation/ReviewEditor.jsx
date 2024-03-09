import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from 'components/Header/Header';
import InputRatingStar from 'components/RatingStar/InputRatingStar';
import HashtagElement from 'components/StoreReview/HashtagElement';
import ImageScroll from 'components/ImageSlide/ImageScroll';
import BlackButton from 'components/Button/BlackButton';
import cameraIcon from 'assets/icons/camera_icon.png';
import axios from 'axios';

const createReview = async (storeId, reviewReqDto, imageList, memberId) => {
  console.log()

  try {
    const formData = new FormData();
    //formData.append('reviewReqDto', JSON.stringify(reviewReqDto)); // reviewReqDto를 문자열로 변환하여 FormData에 추가
    // const reviewReqDto = JSON.stringify(reviewReqDto);
    
    formData.append('reviewReqDto', new Blob([reviewReqDto], {type: 'application/json'}));
    
    if (imageList) {
      imageList.forEach((image, index) => {
        formData.append(`imageList[${index}]`, image); // imageList의 각 이미지를 FormData에 추가
      });
    }

    const response = await axios.post(
      `http://localhost:8080/api/v1/stores/${storeId}/reviews`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzMiIsImlhdCI6MTcwNzk3MzU3MiwiZXhwIjoyMDcwODUzNTcyfQ.XwBiQxnJUzSSdhLOQQj3aKS5erufHTuIgD0mGNw576iHLZmGjc5ei8ks2MgVV6m6SvNE3EjuK8GqnZqxhOKvXQ', // 필요한 경우에만 토큰을 추가
        },
        params: { memberId }, // URL에 쿼리 파라미터로 memberId를 전달할 경우
      }
    );

    console.log('리뷰 작성 결과:', response);
    return response;
  } catch (error) {
    console.error('리뷰 작성 중 오류 발생:', error);
    //console.error('localStorage.getItem(at):', localStorage.getItem('accessToken'));
    throw error; // 오류를 상위 컴포넌트로 전달하거나 처리
  }
};

function ReviewEditor() {
  const location = useLocation();
  const navigate = useNavigate();
  const { rating: initialRating, selectedTags, details } = location.state || {};
  const [userRating, setUserRating] = useState(initialRating || 0);
  const [reviewContent, setReviewContent] = useState('');
  // const [selectedTagIds, setSelectedTagIds] = useState([]);
  const [attachedImages, setAttachedImages] = useState([]);

  console.log("selectedTags : " + selectedTags)
  console.log("selectedTags.type : " + typeof(selectedTags))
  console.log("[101, 103].type : " + typeof([101, 103]))
  console.log("Array.of(selectedTags) : " + Array.of(selectedTags))

  const handleReviewSubmission = async () => {
    const reviewReqDto = JSON.stringify({
      score: userRating,
      content: reviewContent,
      hashtagIds: [101, 103]
    });

  console.log("reviewReqDto : " + reviewReqDto.hashtagIds)

    try {
      await createReview(details.id, reviewReqDto, attachedImages);
      console.log('리뷰 등록에 성공하였습니다');
      navigate('/getExp/sandwich');

    } catch (error) {
      console.log('리뷰 등록에 실패하였습니다');
    }
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
      <BlackButton onClick={handleReviewSubmission}>리뷰 작성하기</BlackButton>
    </div>
  );
}

export default ReviewEditor;
