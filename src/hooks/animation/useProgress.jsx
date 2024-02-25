/**
 * @author 오수영
 * @email osy9757@gmail.com
 * @create date 2024-02-26 02:59:11
 * @modify date 2024-02-26 02:59:11
 * @desc Progress bar
 */
import { useEffect, useState } from 'react';

const useProgress = (fromValue, toValue, duration = 1000) => {
  const [progress, setProgress] = useState(fromValue);

  useEffect(() => {
    const stepTime = duration / Math.abs(toValue - fromValue);

    const intervalId = setInterval(() => {
      setProgress((currentProgress) => {
        const nextProgress = currentProgress + (toValue > fromValue ? 1 : -1);

        if ((toValue > fromValue && nextProgress >= toValue) || (toValue < fromValue && nextProgress <= toValue)) {
          clearInterval(intervalId);
          return toValue;
        }
        return nextProgress;
      });
    }, stepTime);

    return () => clearInterval(intervalId);
  }, [fromValue, toValue, duration]);

  return progress;
};

export default useProgress;
