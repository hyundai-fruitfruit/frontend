/**
 * @author 오수영
 * @email osy9757@gmail.com
 * @create date 2024-02-21 10:33:10
 * @modify date 2024-02-22 09:33:10
 * @desc 랜덤스팟 api 용 hook
 */
import { useState, useEffect } from 'react';
import { getRandomSpotByEventType } from 'apis/request';

const useRandomSpotByEventType = (eventType) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!eventType) {
        setLoading(false);
        return;
      }
      try {
        const response = await getRandomSpotByEventType(eventType);
        setData(response);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [eventType]);

  return { data, error, loading };
};

export default useRandomSpotByEventType;
