/**
 * @author 오수영
 * @email osy9757@gmail.com
 * @create date 2024-02-22 01:50:35
 * @modify date 2024-02-22 01:50:35
 * @desc 리뷰 작성 페이지에서 해시태그 선택하는 컴포넌트
 */
import React, { useState } from 'react';
import HashtagElement from './HashtagElement';
import { Hashtags } from 'assets/data/Hashtags';

function HashtagSelection({ selectedTags, setSelectedTags }) {
  const [selectedTagsLocal, setSelectedTagsLocal] = useState([]);

  const toggleTag = (id) => {
    const newSelectedTags = selectedTagsLocal.includes(id)
      ? selectedTagsLocal.filter((tagId) => tagId !== id)
      : [...selectedTagsLocal, id];
    setSelectedTagsLocal(newSelectedTags);
    setSelectedTags(newSelectedTags);
  };

  const categories = {
    '음식/가격': Hashtags.filter((tag) => tag.id >= 100 && tag.id < 200),
    분위기: Hashtags.filter((tag) => tag.id >= 200 && tag.id < 300),
    기타: Hashtags.filter((tag) => tag.id >= 300),
  };

  return (
    <div className="space-y-4 pb-16">
      {Object.entries(categories).map(([category, tags]) => (
        <div key={category}>
          <h3 className="font-bold text-base mb-2 pl-4 ml-4">{category}</h3>
          <div className="flex flex-wrap">
            {tags.map((tag) => (
              <button key={tag.id} onClick={() => toggleTag(tag.id)} className="m-1">
                <HashtagElement id={tag.id} isSelected={selectedTags.includes(tag.id)} />
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default HashtagSelection;
