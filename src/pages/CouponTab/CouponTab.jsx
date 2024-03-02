/**
 * @author 오수영
 * @email osy9757@gmail.com
 * @create date 2024-02-28 02:18:29
 * @modify date 2024-02-28 02:18:29
 * @desc 이벤트 탭 나의 QR, coupon
 */
import React, { useState } from 'react';

//component
import Header from 'components/Header/Header';
import CouponCard from 'components/CouponCard/CouponCard';
//hook
import useGetUserCouponList from 'hooks/useGetUserCouponList';
//assets
import myQR from 'assets/images/myQR.png';
import bottleIcon from 'assets/icons/bottle_icon.png';

function CouponTab() {
  const [activeTab, setActiveTab] = useState('QR');
  const { events, loading, error } = useGetUserCouponList();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const handleTabClick = (activeTab) => {
    setActiveTab(activeTab);
  };
  //   {
  //     imgSrc: bottleIcon,
  //     title: '엔젤리너스 30% 할인 쿠폰',
  //     detail: '커피 음료 구매시 30% 할인',
  //     useByDate: '사용 기한 : 2024년 3월 14일까지',
  //   },
  //   {
  //     imgSrc: bottleIcon,
  //     title: '스타벅스 20% 할인 쿠폰',
  //     detail: '모든 음료에 사용 가능',
  //     useByDate: '사용 기한 : 2024년 3월 20일까지',
  //   },
  //   {
  //     imgSrc: bottleIcon,
  //     title: '엔젤리너스 30% 할인 쿠폰',
  //     detail: '커피 음료 구매시 30% 할인',
  //     useByDate: '사용 기한 : 2024년 3월 14일까지',
  //   },
  //   {
  //     imgSrc: bottleIcon,
  //     title: '스타벅스 20% 할인 쿠폰',
  //     detail: '모든 음료에 사용 가능',
  //     useByDate: '사용 기한 : 2024년 3월 20일까지',
  //   },
  //   {
  //     imgSrc: bottleIcon,
  //     title: '엔젤리너스 30% 할인 쿠폰',
  //     detail: '커피 음료 구매시 30% 할인',
  //     useByDate: '사용 기한 : 2024년 3월 14일까지',
  //   },
  //   {
  //     imgSrc: bottleIcon,
  //     title: '스타벅스 20% 할인 쿠폰',
  //     detail: '모든 음료에 사용 가능',
  //     useByDate: '사용 기한 : 2024년 3월 20일까지',
  //   },
  // ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header text={'이벤트'} />
      <div className="flex border-b pt-3 px-4 w-full mb-4">
        <div
          className={`flex-1 text-center p-2 cursor-pointer text-base ${activeTab === 'QR' ? 'border-b-4 border-black font-bold' : ''}`}
          onClick={() => handleTabClick('QR')}
        >
          나의 QR
        </div>
        <div
          className={`flex-1 text-center p-2 cursor-pointer text-base ${activeTab === 'MyCoupon' ? 'border-b-4 border-black font-bold' : ''}`}
          onClick={() => handleTabClick('MyCoupon')}
        >
          나의 쿠폰
        </div>
      </div>
      <div className="flex flex-grow justify-center ">
        {activeTab === 'QR' ? (
          <div className="flex items-center">
            <div className="text-center">
              <img src={myQR} className="h-[35vh] mx-auto" />
              <p className="font-bold mt-4 mb-32">매장 직원에게 QR코드를 보여주세요.</p>
            </div>
          </div>
        ) : (
          <div>
            {events.data.map((events) => (
              <CouponCard
                key={events.id}
                imgSrc={bottleIcon}
                title={events.title}
                detail={events.content || '더현대 서울 이벤트'}
                useByDate={`기간 : ${events.startedAt} ~ ${events.finishedAt}`}
                addStyle={'mx-8'}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
export default CouponTab;
