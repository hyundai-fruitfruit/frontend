/**
 * @author 오수영
 * @email osy9757@gmail.com
 * @create date 2024-02-18 02:48:28
 * @modify date 2024-02-19 01:40:24
 * @desc 메인 페이지 아이콘 메뉴 컴포넌트
 */
import React from 'react';
import { useNavigate } from 'react-router-dom';

function IconMenu({ icons }) {
  const navigate = useNavigate();

  const handleIconClick = (path) => {
    navigate(path);
  };

  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      {icons.map((icon) => (
        <div key={icon.name} className="flex flex-col items-center">
          <button
            onClick={() => handleIconClick(icon.path)}
            className="rounded-full p-4 bg-white shadow-md border border-gray-200"
          >
            <img src={icon.src} alt={icon.label} className="w-8 h-8" />
          </button>
          <span className="text-sm mt-2">{icon.label}</span>
        </div>
      ))}
    </div>
  );
}

export default IconMenu;
