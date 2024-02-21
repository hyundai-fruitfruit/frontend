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
