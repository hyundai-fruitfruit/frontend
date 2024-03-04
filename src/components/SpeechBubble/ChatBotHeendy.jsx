import React from 'react';

import CapHeendy from 'assets/icons/CapHeendy.png';

function ChatBotHeendy({ title, messages }) {
  return (
    <div className="grid grid-cols-10 auto-cols-max">
      <div className="flex flex-col items-center mx-4 place-self-end col-span-2">
        <img src={CapHeendy} className="border rounded-full h-[5vh]" />
        <span className="font-bold text-sm">대장 흰디</span>
      </div>
      <div className="border bg-customgrey rounded-2xl flex-grow mr-8 mt-8 col-span-8">
        <div className="p-2">
          <div className="font-bold text-lg mt-4 mx-2 mb-2">{title}</div>
          <div>
            <ul>
              {messages.map((message, index) => (
                <li className="border py-2 px-8 m-1 rounded-2xl bg-white inline-flex" key={index}>
                  {message}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatBotHeendy;
