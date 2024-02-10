import React, { useState, useEffect } from 'react';

function MainPage() {
  const [gaugeValue, setGaugeValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGaugeValue((oldValue) => {
        const newValue = oldValue + 10;
        return newValue > 100 ? 100 : newValue;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mt-4 mb-4">흰둥이😊</h1>
      <div className="mb-4">
        <img
          src="/assets/images/mainpage_img.png"
          alt="캐릭터"
          className="w-72 h-auto"
        />
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 relative bottom-4">
        <div
          className="bg-red-400 h-2.5 rounded-full transition-all duration-500 ease-in-out"
          style={{ width: `${gaugeValue}%` }}
        ></div>
      </div>
    </div>
  );
}

export default MainPage;
