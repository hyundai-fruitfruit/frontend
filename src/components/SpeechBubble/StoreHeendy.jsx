import React from 'react';

import SMT from 'assets/images/smt_lounge1.jpeg';
import CapHeendy from 'assets/icons/CapHeendy.png';

import { useNavigate } from 'react-router-dom';

function StoreHeendy() {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-10 auto-cols-max">
      <div className="flex flex-col items-center mx-4 place-self-end col-span-2">
        <img src={CapHeendy} className="border rounded-full h-[5vh]" alt="Cap Heendy" />
        <span className="font-bold text-sm">대장 흰디</span>
      </div>
      <div className="border bg-customgrey rounded-2xl flex-grow mr-8 mt-8 col-span-8">
        <div className="p-2">
          <div>
            <ul>
              <div>
                <img src={SMT} />
                <div>내용내용내용</div>
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
