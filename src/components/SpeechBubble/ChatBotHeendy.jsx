/**
 * @author 오수영
 * @email osy9757@gmail.com
 * @create date 2024-03-04 19:22:14
 * @modify date 2024-03-04 19:22:14
 * @desc 대장 흰디 설명 컴포넌트
 */
import React from 'react';

import CapHeendy from 'assets/icons/CapHeendy.png';

function ChatBotHeendy({ title, messages, onMessageClick }) {
  console.log('messages', messages);
  return (
    <div className="grid grid-cols-10 auto-cols-max mb-8">
      <div className="flex flex-col items-center mx-4 place-self-end col-span-2">
        <img src={CapHeendy} className="border rounded-full h-[5vh]" alt="Cap Heendy" />
        <span className="font-bold text-sm">대장 흰디</span>
      </div>
      <div className="border bg-customgrey rounded-2xl flex-grow mr-8 mt-8 col-span-8">
        <div className="p-2">
          <div className="font-bold text-lg mt-4 mx-2 mb-2">{title}</div>
          <div>
            <ul>
              {messages.map((item, index) => (
                <div key={index}>
                  <button
                    className="border py-1 px-8 m-1 rounded-2xl bg-white inline-flex"
                    onClick={() => onMessageClick(index, item.korean, item.guideType)}
                  >
                    {item.korean}
                  </button>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatBotHeendy;
