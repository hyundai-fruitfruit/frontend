/**
 * @author 엄상은
 * @email sangeun.e.9@gmail.com
 * @create date 2024-02-27 11:55:34
 * @modify date 2024-02-27 11:55:34
 * @desc QR코드 hook
 */

import { useState, useEffect } from 'react';
import { findQr } from 'apis/request';

export const useQr = () => {
  const [qrData, setQrData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQr = async () => {
      setIsLoading(true);
      try {
        const data = await findQr();
        setQrData(data);
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchQr();
  }, []);

  return { qrData, isLoading, error };
};
