/**
 * @author 오수영
 * @email osy9757@gmail.com
 * @create date 2024-02-21 10:33:10
 * @modify date 2024-02-22 09:33:10
 * @desc 매장 상세정보 api 용 hook
 */

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
