import { useState, useEffect } from 'react';
import { fetchStoreDetails } from 'apis/request';

const useStoreDetails = (storeId) => {
  const [details, setDetails] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await fetchStoreDetails(storeId);
        setDetails(response);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [storeId]);

  return { details, error, loading };
};

export default useStoreDetails;
