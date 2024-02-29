/**
 * @author 황수영
 * @email sooyoung.h8@gmail.com
 * @create date 2024-02-28 04:35:36
 * @modify date 2024-02-28 04:35:36
 * @desc 나의 방탭의 카테고리 컴포넌트
 */
import React from 'react';

const Category = ({ name, onClick }) => {
  return (
    <div className='category' onClick={() => onClick(name)}>
      {name}
    </div>
  );
};

const selectCategory = (category, setSelectedCategory) => {
  setSelectedCategory(category);
};

export { Category, selectCategory };