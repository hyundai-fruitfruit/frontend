/**
 * @author 오수영
 * @email osy9757@gmail.com
 * @create date 2024-02-19 16:55:21
 * @modify date 2024-02-19 16:55:21
 * @desc 매장 상세 정보 전체 페이지
 */
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import Header from 'components/Header/Header';
import ImageSlide from 'components/ImageSlide/ImageSlide';
import DisplayShopDetails from 'components/DisplayShopDetails/DisplayShopDetails';
import DisplayShopTabs from 'components/DisplayShopTabs/DisplayShopTabs';
import StoreMenuList from 'components/StoreMenu/StoreMenuList';
import StoreTotalReview from 'components/StoreReview/StoreTotalReview';
import MainHeader from 'components/Header/MainHeader';

import useStoreDetails from 'hooks/useStoreDetails';

const imagePaths = ['/images/smt_lounge1.jpeg', '/images/smt_lounge2.jpeg', '/images/smt_lounge3.jpeg'];

const shopDetails = {
  name: 'SMT 라운지',
  floor: '6층',
  phone: '02-3277-0659',
  rating: '★★★★☆',
  description:
    'SM 엔터테인먼트가 운영하는 프리미엄 리스테스 브랜드 "SMT HOUSE"의 새로운 브랜드입니다. "Chinatown in Mexico City"라는 컨셉으로 준비한 아시아와 라틴 아메리카 요리의 조화로운 조리법과 스타일의 요리를 공동으로 만들어 전통적인 요리의 특징과 요리사의 창의성을 보여줍니다.',
};

function storeDetail() {
  const [activeTab, setActiveTab] = useState('mainMenu');
  const { id } = useParams();

  const { details, error, loading } = useStoreDetails(id);

  if (loading) return <div>Loading...</div>;
  if (error) {
    console.log(id);
    console.log(details);
    return <div>Error: {error.message}</div>;
  }

  const tabComponents = {
    mainMenu: <StoreMenuList />,
    review: <StoreTotalReview image={imagePaths[0]} shopName={shopDetails.name} details={details} />,
    visitVerification: <div>visitVerification</div>,
  };
  console.log('storeDetail ');
  console.log(id);
  console.log(details);

  return (
    <div className="flex flex-col w-full overflow-auto">
      <MainHeader />
      <div className="mt-10">
        <div className="flex flex-col px-7 mt-5">
        </div>
        <Header text={'매장 정보'} />
        <div className="flex flex-col px-7 mt-5">
            <ImageSlide images={imagePaths} />
            <DisplayShopDetails details={details} />
        </div>
        
        <div className="flex flex-col items-center justify-start min-h-[50vh]  w-full">
          <div className=" w-full h-[7vh]">
            <DisplayShopTabs activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
          <div className="w-full">{tabComponents[activeTab]}</div>
        </div>
      </div>
    </div>
  );
}
export default storeDetail;
