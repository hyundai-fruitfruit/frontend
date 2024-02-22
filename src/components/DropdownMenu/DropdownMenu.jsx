/**
 * @author 오수영
 * @email osy9757@gmail.com
 * @create date 2024-02-12 09:23:00
 * @modify date 2024-02-22 09:23:00
 * @desc 리뷰 페이지 드롭다운 메뉴 컴포넌트
 */
import React, { useState } from 'react';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('최신순');

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <div className="relative mt-4 mr-6">
      <button onClick={() => setIsOpen(!isOpen)} className="px-4 py-2 ho rounded-md focus:outline-none">
        {selectedItem} ↓
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md py-2 z-50">
          <button
            onClick={() => handleItemClick('최신순')}
            className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            최신순
          </button>
          <button
            onClick={() => handleItemClick('조회순')}
            className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            조회순
          </button>
          <button
            onClick={() => handleItemClick('좋아요순')}
            className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            좋아요순
          </button>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
