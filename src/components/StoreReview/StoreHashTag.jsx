/**
 * @author 오수영
 * @email osy9757@gmail.com
 * @create date 2024-02-22 01:50:35
 * @modify date 2024-02-22 01:50:35
 * @desc 매장 상세페이지에서 카운트가 높은순으로 해시태그를 출력하는 컴포넌트
 */
import React from 'react';
import HashtagElement from './HashtagElement';

function StoreHashTag({ details }) {
  var maxCount = 500;

  const hashtagsWithCount = details.popularHashtags.map((hashtag) => {
    const count = Math.floor(Math.random() * maxCount) + 1;
    maxCount = count - 1;
    return { ...hashtag, count };
  });

  return (
    <div>
    <div className="m-9">
      <p className="m-5 font-bold text-lg	">이런 점이 좋았어요</p>
      {hashtagsWithCount.map((hashtag) => (
        <div key={hashtag.id} className="items-center my-2">
          <HashtagElement id={hashtag.id} name={hashtag.name} count={hashtag.count} />
        </div>
      ))}
    </div>
    <div className="bg-gray-100 h-3 mb-8" />
    </div>
  );
}
export default StoreHashTag;
