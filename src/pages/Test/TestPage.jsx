import React from 'react';

//component
import CouponCard from 'components/CouponCard/CouponCard';
import Header from 'components/Header/Header';

//asset
import bottleIcon from 'assets/icons/bottle_icon.png';
import keyIcon from 'assets/icons/old_key_icon.png';

function TestPage() {
  const coupons = [
    {
      imgSrc: bottleIcon,
      title: '엔젤리너스 30% 할인 쿠폰',
      detail: '커피 음료 구매시 30% 할인',
      useByDate: '사용 기한 : 2024년 3월 14일까지',
    },
    {
      imgSrc: bottleIcon,
      title: '스타벅스 20% 할인 쿠폰',
      detail: '모든 음료에 사용 가능',
      useByDate: '사용 기한 : 2024년 3월 20일까지',
    },
    {
      imgSrc: bottleIcon,
      title: '엔젤리너스 30% 할인 쿠폰',
      detail: '커피 음료 구매시 30% 할인',
      useByDate: '사용 기한 : 2024년 3월 14일까지',
    },
    {
      imgSrc: bottleIcon,
      title: '스타벅스 20% 할인 쿠폰',
      detail: '모든 음료에 사용 가능',
      useByDate: '사용 기한 : 2024년 3월 20일까지',
    },
    {
      imgSrc: bottleIcon,
      title: '엔젤리너스 30% 할인 쿠폰',
      detail: '커피 음료 구매시 30% 할인',
      useByDate: '사용 기한 : 2024년 3월 14일까지',
    },
    {
      imgSrc: bottleIcon,
      title: '스타벅스 20% 할인 쿠폰',
      detail: '모든 음료에 사용 가능',
      useByDate: '사용 기한 : 2024년 3월 20일까지',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header text={'이벤트 안내'} />
      <div className="border-b-8 mt-8">
        <CouponCard
          imgSrc={keyIcon}
          detail={
            <span>
              오늘의 랜덤스팟이 <br /> 아직 열리지 않았어요!
            </span>
          }
          addStyle={'bg-gray-100 mx-8'}
        />
      </div>
      <div>
        {coupons.map((coupon, index) => (
          <CouponCard
            key={index}
            imgSrc={coupon.imgSrc}
            title={coupon.title}
            detail={coupon.detail}
            useByDate={coupon.useByDate}
            addStyle={'mx-8'}
          />
        ))}
      </div>
    </div>
  );
}
export default TestPage;
