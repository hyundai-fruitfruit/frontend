/**
 * @author 오수영
 * @email osy9757@gmail.com
 * @create date 2024-03-04 20:58:26
 * @modify date 2024-03-04 20:58:26
 * @desc 챗봇 훅
 */
import { useState, useEffect } from 'react';
import { getHeendyGuide } from 'apis/request';

export const useHeendyGuide = () => {
  const [guideData, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const data = await getHeendyGuide();
        setEvents(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  return { guideData, loading, error };
};
