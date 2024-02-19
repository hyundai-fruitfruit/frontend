import React from 'react';
import './ClaymorphicButton.css';

function ClaymorphicButton({ text, imageSrc, onClick }) {
  return (
    <button
      className="clay-button aspect-square w-full flex flex-col justify-center items-center p-2 text-xs font-bold"
      onClick={onClick}
    >
      {imageSrc && <img src={imageSrc} alt={text} className="button-image w-1/10 max-w-full h-auto mb-1" />}
      <span className="text-xs">{text}</span>
    </button>
  );
}

export default ClaymorphicButton;
