import React from 'react';
import HashtagElement from './HashtagElement';

function StoreHashTag() {
  return (
    <div className="border-b-8">
      <p className="m-4 font-bold ">이런점이 좋았어요</p>
      <div className="my-2">
        <HashtagElement id={7} count={245} />
      </div>
      <div className="my-2">
        <HashtagElement id={8} count={105} />
      </div>
      <div className="my-2">
        <HashtagElement id={6} count={5} />
      </div>
      <div className="my-2">
        <HashtagElement id={10} count={3} />
      </div>
      <div className="mt-2 mb-8">
        <HashtagElement id={1} count={1} />
      </div>
    </div>
  );
}
export default StoreHashTag;
