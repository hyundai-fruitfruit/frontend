/* eslint-disable no-unused-vars */
/**
 * @author 오수영
 * @email osy9757@gmail.com
 * @create date 2024-03-04 19:22:30
 * @modify date 2024-03-04 19:22:30
 * @desc 유저 챗봇 컴포넌트
 */
import React from 'react';

function ChatBotUser({ index, text }) {
  return (
    <div className="m-8">
      <span className="border p-3 rounded-2xl bg-customgreen text-white font-bold" key={index}>
        {text}
      </span>
    </div>
  );
}

export default ChatBotUser;
