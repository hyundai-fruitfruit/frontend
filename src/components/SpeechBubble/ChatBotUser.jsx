import React from 'react';

function ChatBotUser({ text }) {
  return (
    <div className="m-8">
      <span className="border p-3 rounded-2xl bg-customgreen text-white font-bold">{text}</span>
    </div>
  );
}

export default ChatBotUser;
