import React from 'react';

function FriendMenu({ icons }) {
  return (
    <div className="flex flex-wrap gap-4 mt-3 justify-center">
      {icons.map((icon) => (
        <div key={icon.name} className="flex flex-col items-center">
          <div className="rounded-full bg-white border border-gray-200">
            <img src={icon.src} alt={icon.label} className="w-16 h-16" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default FriendMenu;
