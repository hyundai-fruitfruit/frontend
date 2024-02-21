import React from 'react';

function DisplayShopTabs({ activeTab, setActiveTab }) {
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="flex flex-col w-full h-full overflow-hidden overscroll-none">
      <div className="flex border-b pt-3 px-4 w-full">
        <div
          className={`flex-1 text-center p-2 cursor-pointer text-base ${activeTab === 'mainMenu' ? 'border-b-4 border-black font-bold' : ''}`}
          onClick={() => handleTabClick('mainMenu')}
        >
          주요 메뉴
        </div>
        <div
          className={`flex-1 text-center p-2 cursor-pointer text-base ${activeTab === 'review' ? 'border-b-4 border-black font-bold' : ''}`}
          onClick={() => handleTabClick('review')}
        >
          리뷰
        </div>
        <div
          className={`flex-1 text-center p-2 cursor-pointer text-base ${activeTab === 'visitVerification' ? 'border-b-4 border-black font-bold' : ''}`}
          onClick={() => handleTabClick('visitVerification')}
        >
          방문 인증
        </div>
      </div>
    </div>
  );
}

export default DisplayShopTabs;
