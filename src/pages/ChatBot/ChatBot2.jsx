import React from 'react';

//componenet
// import ChatBotHeendy from 'components/SpeechBubble/ChatBotHeendy';
// import ChatBotUser from 'components/SpeechBubble/ChatBotUser';
import Header from 'components/Header/Header';

//hook
import { useHeendyGuide } from 'hooks/useHeendyGuide';
// import { useHeendyGuideType } from 'hooks/useHeendyGuideType';
// import { useHeendyGuideHashTag } from 'hooks/useHeendyGuideHashTag';

function ChatBot() {
  // const [userMessages, setUserMessages] = useState([]);
  const { guideData, loading, error } = useHeendyGuide();
  // const [messages, setMessages] = useState([]);

  console.log('guideData', guideData);
  console.log('loading', loading);
  console.log('error', error);

  return (
    <div>
      <Header text={'대장 흰디에게 물어보기'} />
      {/* <div>
        <ChatBotHeendy
          title={'안녕, 나는 모험을 도와줄 대장 흰디야! 무엇을 도와줄까?'}
          messages={'messages'}
          onMessageClick={}
        />
      </div> */}
      {/* <div className="flex flex-col items-end">
        {userMessages.map((message, index) => (
          <ChatBotUser key={index} text={message} />
        ))}
      </div> */}
    </div>
  );
}
export default ChatBot;
