/**
 * @author 오수영
 * @email osy9757@gmail.com
 * @create date 2024-02-28 02:18:29
 * @modify date 2024-02-28 02:18:29
 * @desc 이벤트 탭 나의 QR, coupon
 */
/**
 * @author 엄상은
 * @email sangeun.e.9@gmail.com
 * @create date 2024-03-04 11:16:31
 * @modify date 2024-03-04 11:16:31
 * @desc QR코드 API 연결 및 소켓 연결
 */
import React, { useState } from 'react';
import { useLocation } from "react-router-dom";

//component
import MainHeader from 'components/Header/MainHeader';
import CouponCard from 'components/CouponCard/CouponCard';
import MyQrLoader from 'components/QRScanner/MyQrLoader';
//hook
import useGetUserCouponList from 'hooks/useGetUserCouponList';

function CouponTab() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.state?.active || 'QR');
  const { events, loading, error } = useGetUserCouponList();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const handleTabClick = (activeTab) => {
    setActiveTab(activeTab);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <MainHeader />
      <div className="flex justify-between mt-16 pt-3 px-20 w-full mb-4">
        <div
          className={`text-center p-2 cursor-pointer text-base ${activeTab === 'MyCoupon' ? 'border-b-4 border-gray-800 font-bold' : ''}`}
          onClick={() => handleTabClick('MyCoupon')}
        >
          나의 쿠폰
        </div>
        <div
          className={`text-center p-2 cursor-pointer text-base ${activeTab === 'QR' ? 'border-b-4 border-gray-800 font-bold' : ''}`}
          onClick={() => handleTabClick('QR')}
        >
          나의 QR
        </div>
      </div>
      <div className="flex flex-grow justify-center ">
        {activeTab === 'QR' ? (
          <div className="flex items-center">
            <MyQrLoader />
          </div>
        ) : (
          <div>
            <CouponCard
              key={events.id}
              imgSrc={"https://fruitfruit.s3.ap-northeast-2.amazonaws.com/icon/icon-restaurant.png"}
              title={"식당 10% 할인 쿠폰"}
              useByDate={`사용 기한: 2025년 3월 14일`}
              addStyle={'mx-8'}
            />
            <CouponCard
              key={events.id}
              imgSrc={"https://fruitfruit.s3.ap-northeast-2.amazonaws.com/icon/icon-clothes.png"}
              title={"의류 10% 할인 쿠폰"}
              useByDate={`사용 기한: 2025년 3월 14일`}
              addStyle={'mx-8'}
            />
          </div>
        )}
      </div>
    </div>
  );
}
export default CouponTab;
