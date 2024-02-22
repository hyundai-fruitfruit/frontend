/**
 * @author 오수영
 * @email osy9757@gmail.com
 * @create date 2024-02-20 15:30:20
 * @modify date 2024-02-20 16:10:20
 * @desc 매장 전체 메뉴 출력 형식 컴포넌트
 */
import React from 'react';
import StoreMenu from './StoreMenu';

import BeefSteakTaco from 'assets/images/beef_steak_taco.png';
import Lazji from 'assets/images/Lazji.png';
import SzechunaSpicyEggplant from 'assets/images/Szechuan_Spicy_Eggplant.png';

const menuData = [
  {
    imageSrc: BeefSteakTaco,
    title: '아사다 비프 스테이크 타코',
    description: '고수듬뿍 추가한 스테이크 타코',
    price: '15,000원',
  },
  {
    imageSrc: Lazji,
    title: '라즈지',
    description: '사천식 후라이드치킨',
    price: '25,000원',
  },
  {
    imageSrc: SzechunaSpicyEggplant,
    title: '난자완스 어향가지 튀김',
    description: '난자완스가 두툼하게 들어있는 새콤달콤한 소스 가지튀김',
    price: '25,000원',
  },
];

function StoreMenuList() {
  return (
    <div className="w-full h-full">
      {menuData.map((menu, index) => (
        <StoreMenu
          key={index}
          imageSrc={menu.imageSrc}
          title={menu.title}
          description={menu.description}
          price={menu.price}
        />
      ))}
      <div className="flex items-center justify-center h-[8vh] border-t-8">
        <p className="text-sm text-gray-400">각 매장의 사정에 따라 기재된 내용과 다를 수 있습니다.</p>
      </div>
    </div>
  );
}
export default StoreMenuList;
