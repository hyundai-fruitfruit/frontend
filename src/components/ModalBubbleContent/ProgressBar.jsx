/**
 * @author 오수영
 * @email osy9757@gmail.com
 * @create date 2024-02-18 10:18:42
 * @modify date 2024-03-07 09:50:19
 * @desc 프로그레스바
 */
import React from 'react';
import useProgress from 'hooks/animation/useProgress';

const ProgressBar = ({ fromValue, toValue, duration }) => {
  const progress = useProgress(fromValue, toValue, duration);

  return (
    <div className="w-full bg-gray-100 rounded-full h-4">
      <div
        className="bg-customgreen h-4 rounded-full transition-all duration-300 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};
export default ProgressBar;
