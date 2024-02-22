/**
 * @author 오수영
 * @email osy9757@gmail.com
 * @create date 2024-02-22 01:50:41
 * @modify date 2024-02-22 01:50:41
 * @desc 입력 받은 id, count로 하나의 해시태그를 출력하는 형식 컴포넌트
 */
import React from 'react';

import { Hashtags } from 'assets/data/Hashtags';

function HashtagElement({ id, count, isSelected }) {
  const hashtag = Hashtags.find((tag) => tag.id === id);
  const elementClass = `flex justify-between items-center rounded-xl py-1 px-4 mx-4 border${
    isSelected ? ' bg-black text-white' : ''
  }`;

  return (
    <div className={elementClass}>
      <span className="text-base ml-1">{hashtag?.text}</span>
      {count > 0 && <span className="mr-1 text-gray-400">{count}</span>}
    </div>
  );
}
export default HashtagElement;
