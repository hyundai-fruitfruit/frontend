/**
 * @author 오수영
 * @email osy9757@gmail.com
 * @create date 2024-02-17 14:27:28
 * @modify date 2024-02-19 04:04:33
 * @desc 말풍선 컴포넌트
 */
import React from 'react';
import './SpeechBubble.css';

function SpeechBubble({ boldText, normalText, children, arrowPostion = 'left', width, height, padding,addStyle,backgroundColor}) {
  const arrowClass = arrowPostion === 'left' ? 'arrowLeft' : 'arrowRight';
  const style = {
    ...(width && { width }),
    ...(height && { height }),
    ...(padding && { padding }),
    ...(backgroundColor && { backgroundColor }),

  };
  
  if (width) {
    style.width = width;
  }

  if (height) {
    style.height = height;
  }
  if(padding){
    style.padding = padding;
  }

  return (
    <div
      className={`bg-white w-72 shadow-md rounded-lg border border-gray-200 relative p-3 speechBubble ${arrowClass} ${addStyle}`}
      style={style}
    >
      <p className="text-lg font-bold text-gray-700">{boldText}</p>
      <p className="text-sm text-gray-400 font-poppins">{normalText}</p>
      {children}
    </div>
  );
}

export default SpeechBubble;
