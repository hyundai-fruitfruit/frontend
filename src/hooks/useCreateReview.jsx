/**
 * @author 오수영
 * @email osy9757@gmail.com
 * @create date 2024-02-21 10:33:10
 * @modify date 2024-02-22 09:33:10
 * @desc 리뷰 작성 api용 hook
 */
import { useState } from 'react';
import { createReviewForStore } from 'apis/request';

const useCreateReview = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const submitReview = async (storeId, reviewReqDto) => {
    setLoading(true);
    try {
      const data = await createReviewForStore(storeId, reviewReqDto);
      setResponse(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { submitReview, response, error, loading };
};

export default useCreateReview;
