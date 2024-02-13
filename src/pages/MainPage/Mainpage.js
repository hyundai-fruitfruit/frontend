/**
 * @author OHsooyoung
 * @email osy9757@gmai.com
 * @create date 2024-02-13 02:24:13
 * @modify date 2024-02-13 02:24:14
 * @desc [description]
 */
import React, { useState, useEffect } from 'react';

function MainPage() {
  const [gaugeValue, setGaugeValue] = useState(0);
  const [isIncreasing, setIsIncreasing] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setGaugeValue((oldValue) => {
        if (isIncreasing) {
          const newValue = oldValue + 10;
          if (newValue >= 100) {
            setIsIncreasing(false);
            return 100;
          }
          return newValue;
        } else {
          const newValue = oldValue - 10;
          if (newValue <= 0) {
            setIsIncreasing(true);
            return 0;
          }
          return newValue;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mt-4 mb-8">흰둥이😊</h1>
      <div className="mb-4">
        <img
          src="../../../images/mainpage_img.png"
          alt="캐릭터"
          className="w-72 h-auto"
        />
      </div>
      <div className="w-3/4 bg-gray-200 mt-4 rounded-full h-2.5 dark:bg-gray-700 relative bottom-4">
        <div
          className="bg-red-400 h-2.5 rounded-full transition-all duration-500 ease-in-out"
          style={{ width: `${gaugeValue}%` }}
        ></div>
      </div>
    </div>
  );
}

export default MainPage;
