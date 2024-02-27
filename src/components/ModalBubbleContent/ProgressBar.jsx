import React from 'react';
import useProgress from 'hooks/animation/useProgress';

const ProgressBar = ({ fromValue, toValue, duration }) => {
  const progress = useProgress(fromValue, toValue, duration);

  return (
    <div className="w-full bg-gray-200 rounded-full h-4">
      <div
        className="bg-customPink h-4 rounded-full transition-all duration-300 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};
export default ProgressBar;
