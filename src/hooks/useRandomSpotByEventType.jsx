import { useState, useEffect } from 'react';
import { getRandomSpotByEventType } from 'apis/request';

const useRandomSpotByEventType = (eventType) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
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
