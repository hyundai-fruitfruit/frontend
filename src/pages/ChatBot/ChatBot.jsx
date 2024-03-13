/**
 * @author 오수영
 * @email osy9757@gmail.com
 * @create date 2024-03-05 11:19:28
 * @modify date 2024-03-05 11:19:28
 * @desc 챗봇 페이지
 */
import React, { useState, useEffect, useRef } from 'react';

//componenet
import ChatBotHeendy from 'components/SpeechBubble/ChatBotHeendy';
import ChatBotUser from 'components/SpeechBubble/ChatBotUser';
import Header from 'components/Header/Header';
import StoreHeendy from 'components/SpeechBubble/StoreHeendy';

//hook
import { useHeendyGuide } from 'hooks/useHeendyGuide';
import { useHeendyGuideType } from 'hooks/useHeendyGuideType';
// import { useHeendyGuideHashTag } from 'hooks/useHeendyGuideHashTag';

function ChatBot() {
  const [conversation, setConversation] = useState([]);
  const [selectedGuideType, setSelectedGuideType] = useState(null);

  const { guideData, loading, error } = useHeendyGuide();
  const { events: typeEvents, loading: typeLoading, error: typeError } = useHeendyGuideType(selectedGuideType);
  const messagesEndRef = useRef(null);

  const [showStoreHeendy, setShowStoreHeendy] = useState(false);

  const scrollToBottom = () => {
    setTimeout(() => {
      if (messagesEndRef.current) {
        messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };
  useEffect(() => {
    scrollToBottom();
  }, [conversation]);

  useEffect(() => {
    if (Array.isArray(guideData) && guideData.length > 0 && !loading && !error) {
      setConversation((prev) => [
        ...prev,
        { title: '안녕, 나는 모험을 도와줄 대장 흰디야! 무엇을 도와줄까?', type: 'system', messages: guideData },
      ]);
    }
  }, [guideData, loading, error]);

  useEffect(() => {
    console.log('typeEvents', typeEvents);
    if (Array.isArray(typeEvents) && typeEvents.length > 0 && !typeLoading && !typeError) {
      const titles = typeEvents.map((event) => ({ korean: event.title }));
      setConversation((prev) => [...prev, { title: '어떤 기준으로 고를래?', type: 'system', messages: titles }]);
    }
  }, [typeEvents, typeLoading, typeError]);

  const handleMessageClick = (index, korean, guideType) => {
    setConversation((prev) => [...prev, { title: '추천', type: 'user', text: korean }]);
    setSelectedGuideType(guideType);

    const selectedEvent = typeEvents.find((event) => event.title === korean);

    const lastSystemMessage = conversation.findLast((message) => message.type === 'system');
    const mockAnswer = '해시태그에 대한 답변';

    if (selectedEvent && selectedEvent.hashtags) {
      const hashtagMessages = selectedEvent.hashtags.map((hashtag) => ({ korean: hashtag.name }));
      setConversation((prev) => [
        ...prev,
        { title: '어떤 해시 태그가 좋아?', type: 'system', messages: hashtagMessages },
      ]);
    }

    if (lastSystemMessage && lastSystemMessage.title === '어떤 해시 태그가 좋아?') {
      setTimeout(() => {
        setConversation((prev) => [...prev, { title: mockAnswer, type: 'system', messages: [] }]);
      });
    }
    if (lastSystemMessage && lastSystemMessage.title === '어떤 해시 태그가 좋아?') {
      setShowStoreHeendy(true);
    }
  };

  return (
    <div>
      <Header text={'대장 흰디에게 물어보기'} />
      {conversation.map((message, index) =>
        message.type === 'user' ? (
          <div key={index} className="flex justify-end">
            <ChatBotUser key={index} text={message.text} />
          </div>
        ) : showStoreHeendy && index === conversation.length - 1 ? (
          <StoreHeendy key={index} />
        ) : (
          <div key={index}>
            <ChatBotHeendy
              key={index}
              title={message.title}
              messages={message.messages}
              onMessageClick={handleMessageClick}
            />
          </div>
        ),
      )}
      <div ref={messagesEndRef} />
    </div>
  );
}
export default ChatBot;
