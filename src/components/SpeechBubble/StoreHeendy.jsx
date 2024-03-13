import React from 'react';

import SMT from 'assets/images/smt_lounge1.jpeg';
import CapHeendy from 'assets/icons/CapHeendy.png';

import { useNavigate } from 'react-router-dom';

const storeData = {
  id: 2,
  name: 'SMT 라운지',
  description:
    "SM 엔터테인먼트가 운영하는 프라이빗 레스토랑 브랜드 'SMT HOUSE'의 새로운 브랜드입니다. 'Chinatown in Mexico City'라는 컨셉으로 준비한 이국적인 테라스 공간에서 로컬 스파이스와 고수를 공통분모로 한 홍콩식 요리와 멕시칸 요리를 선보입니다.",
  phone: 0,
  floor: 6,
  avgScore: 3.2,
  popularHashtags: [
    {
      id: 101,
      name: '🙂 음식이 맛있어요',
      category: 'FOOD',
    },
    {
      id: 103,
      name: '🍃 재료가 신선해요',
      category: 'FOOD',
    },
    {
      id: 102,
      name: '🍜 양이 많아요',
      category: 'FOOD',
    },
    {
      id: 201,
      name: '뷰가 좋아요',
      category: 'ATMOSPHERE',
    },
    {
      id: 202,
      name: '로맨틱해요',
      category: 'ATMOSPHERE',
    },
  ],
};

function StoreHeendy() {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-10 auto-cols-max mb-8">
      <div className="flex flex-col items-center mx-4 place-self-end col-span-2">
        <img src={CapHeendy} className="border rounded-full h-[5vh]" alt="Cap Heendy" />
        <span className="font-bold text-sm">대장 흰디</span>
      </div>
      <div className="border bg-customgrey rounded-2xl flex-grow mr-8 mt-8 col-span-8">
        <div className="p-2">
          <div>
            <ul>
              <div>
                <div className="font-bold text-lg mt-4 mx-2 mb-2">{storeData.name}</div>
                <img src={SMT} className="mb-2 rounded-xl" />
                <div>{storeData.description}</div>
                <button
                  className="border py-1 px-8 m-1 rounded-2xl bg-white inline-flex"
                  onClick={() => navigate('/storeDetail/2')}
                >
                  해당 매장으로 이동하기
                </button>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default StoreHeendy;
