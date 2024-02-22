/**
 * @author 오수영
 * @email osy9757@gmail.com
 * @create date 2024-02-22 01:50:35
 * @modify date 2024-02-22 01:50:35
 * @desc 매장 상세페이지에서 카운트가 높은순으로 해시태그를 출력하는 컴포넌트
 */
import React from 'react';
import HashtagElement from './HashtagElement';

function StoreHashTag() {
  return (
    <div className="border-b-8">
      <p className="m-4 font-bold ">이런점이 좋았어요</p>
      <div className="my-2">
        <HashtagElement id={206} count={245} />
      </div>
      <div className="my-2">
        <HashtagElement id={207} count={105} />
      </div>
      <div className="my-2">
        <HashtagElement id={105} count={5} />
      </div>
      <div className="my-2">
        <HashtagElement id={209} count={3} />
      </div>
      <div className="mt-2 mb-8">
        <HashtagElement id={101} count={1} />
      </div>
    </div>
  );
}
export default StoreHashTag;
