/**
 * @author 오수영
 * @email osy9757@gmail.com
 * @create date 2024-02-28 08:39:29
 * @modify date 2024-02-28 08:39:29
 * @desc 쿠폰, 이벤트 목록 형식 컴포넌트
 */
import React from 'react';

function CouponCard({ imgSrc, title, detail, useByDate, addStyle }) {
  return (
    <div className={`flex flex-row border rounded-2xl my-8 ${addStyle}`}>
      <div>
        <img src={imgSrc} className="h-[6vh] m-8" />
      </div>
      <div className="flex flex-col justify-start py-4 mr-8">
        <p className="font-bold text-lg mb-4">{title}</p>
        <p className="text-sm mb-1">{detail}</p>
        <p className="text-xs text-gray-500">{useByDate}</p>
      </div>
    </div>
  );
}
export default CouponCard;
