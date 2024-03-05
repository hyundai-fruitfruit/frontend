/**
 * @author 오수영
 * @email osy9757@gmail.com
 * @create date 2024-02-12 09:22:30
 * @modify date 2024-02-22 09:22:30
 * @desc 매장 상세페이지 하단 메뉴, 리뷰, 방문인증 탭 컴포넌트
 */
import React from 'react';

function DisplayShopTabs({ activeTab, setActiveTab }) {
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="flex flex-col w-full h-full overflow-hidden overscroll-none">
      <div className="flex w-full px-4 pt-3 border-b">
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
          className={`flex-1 text-center p-3 cursor-pointer text-base ${activeTab === 'visitVerification' ? 'border-b-4 border-black font-bold' : ''}`}
          onClick={() => handleTabClick('visitVerification')}
        >
          방문 인증
        </div>
      </div>
    </div>
  );
}

export default DisplayShopTabs;
