/**
 * @author 오수영
 * @email osy9757@gmail.com
 * @create date 2024-03-04 20:58:26
 * @modify date 2024-03-04 20:58:26
 * @desc 챗봇 훅
 */
import { useState, useEffect } from 'react';
import { getHeendyGuideType } from 'apis/request';

export const useHeendyGuideType = (guideType) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const data = await getHeendyGuideType(guideType);
        setEvents(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    if (guideType) {
      fetchEvents();
    }
  }, [guideType]);

  return { events, loading, error };
};
