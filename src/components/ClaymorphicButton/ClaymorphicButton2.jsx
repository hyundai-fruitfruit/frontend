/**
 * @author 오수영
 * @email osy9757@gmail.com
 * @create date 2024-02-10 09:21:16
 * @modify date 2024-02-24 15:51:15
 * @desc 클레이모피즘 디자인 버튼 컴포넌트
 */
import React from 'react';

function ClaymorphicButton2({ text, imageSrc, onClick }) {
  return (
    <div>
      <div
        className="[ p-[50px] max-w-lg rounded-[50px] ] [ bg-white shadow-clay-btn ] [ flex items-center gap-5 flex-col md:flex-row lg:flex-row ]"
        onClick={onClick}
      >
        {imageSrc && <img src={imageSrc} alt={text} className="button-image w-1/10 max-w-full h-auto mb-1" />}
        <span className="text-xs">{text}</span>
      </div>
    </div>
  );
}

export default ClaymorphicButton2;
