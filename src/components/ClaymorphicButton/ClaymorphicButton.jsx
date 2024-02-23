/**
 * @author 오수영
 * @email osy9757@gmail.com
 * @create date 2024-02-10 09:21:16
 * @modify date 2024-02-22 09:21:16
 * @desc 클레이모피즘 디자인 버튼 컴포넌트
 */
import React from 'react';
import './ClaymorphicButton.css';

function ClaymorphicButton({ text, imageSrc, onClick, addStyle }) {
  return (
    <button
      className={`clay-button aspect-square w-full flex flex-col justify-center items-center p-2 text-xs font-bold ${addStyle}`}
      onClick={onClick}
    >
      {imageSrc && <img src={imageSrc} alt={text} className="button-image w-1/10 max-w-full h-auto mb-1" />}
      <span className="text-xs">{text}</span>
    </button>
  );
}

export default ClaymorphicButton;
