import React from 'react';

function FriendMenu({ icons, onIconClick }) {
  return (
    <div className="flex flex-wrap gap-4 mt-3 justify-center">
      {icons.map((icon) => (
        <div key={icon.name} className="flex flex-col items-center">
          <div
            onClick={() => onIconClick(icon.name)}
            className="rounded-full bg-white border border-gray-200">
            <img src={icon.src} alt={icon.label} className="w-16 h-16" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default FriendMenu;
