import React from 'react';

//componenet
import ChatBotHeendy from 'components/SpeechBubble/ChatBotHeendy';
import ChatBotUser from 'components/SpeechBubble/ChatBotUser';

function ChatBot() {
  return (
    <div>
      <div>
        <ChatBotHeendy
          title={'안녕, 나는 모험을 도와줄 대장 흰디야! 무엇을 도와줄까?'}
          messages={[
            '층별 설명을 듣고싶어',
            '랜덤 스팟이 뭐야?',
            '식당 추천 해줘',
            '쇼핑 추천 해줘',
            '실시간 상담이 필요해!',
          ]}
        />
      </div>
      <div className="flex justify-end">
        <ChatBotUser text={'식당을 추천해줘'} />
      </div>
    </div>
  );
}

export default ChatBot;
