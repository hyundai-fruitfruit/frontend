/**
 * @author 오수영
 * @email osy9757@gmail.com
 * @create date 2024-03-02 09:33:51
 * @modify date 2024-03-02 09:33:51
 * @desc 이벤트 리스트 api hook
 */
import { useState, useEffect } from 'react';
import { getEventList } from 'apis/request';

const useGetEventList = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const data = await getEventList();
        setEvents(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  return { events, loading, error };
};

export default useGetEventList;
