/**
 * @author 오수영
 * @email osy9757@gmail.com
 * @create date 2024-02-20 15:24:06
 * @modify date 2024-02-20 16:14:06
 * @desc [description]
 */
import React from 'react';

function StoreMenu({ imageSrc, title, description, price }) {
  return (
    <div className="flex w-full h-full m-4">
      <img className="rounded-2xl bg-auto size-32" src={imageSrc} alt={title} />
      <div className="flex flex-col px-6 py-4">
        <div className="flex-1 font-bold text-xl">{title}</div>
        <p className="flex-1 text-gray-700 text-base">{description}</p>
        <span className="flex-1 inline-block rounded-full text-sm font-bold text-gray-700">{price}</span>
      </div>
    </div>
  );
}

export default StoreMenu;
