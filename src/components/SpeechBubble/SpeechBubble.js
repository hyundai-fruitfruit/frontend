/**
 * @author 오수영
 * @email osy9757@gmail.com
 * @create date 2024-02-17 14:27:28
 * @modify date 2024-02-17 14:39:51
 * @desc 말풍선 컴포넌트
 */
import React from 'react';
import './SpeechBubble.css';

function SpeechBubble({ text }) {
  return (
    <div className="bg-white w-72 shadow-md rounded-lg border border-gray-200 relative p-3 speechBubble">
      <p className="text-lg text-gray-700">랜덤 스팟이 열렸어요!</p>
      <p className="font-poppins text-sm text-gray-400">{text}</p>
    </div>
  );
}

export default SpeechBubble;
