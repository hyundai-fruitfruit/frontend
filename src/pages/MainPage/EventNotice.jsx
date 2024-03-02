/**
 * @author 오수영
 * @email osy9757@gmail.com
 * @create date 2024-02-28 08:48:33
 * @modify date 2024-02-28 08:48:33
 * @desc [description]
 */
import React, { useState } from 'react';

//component
import CouponCard from 'components/CouponCard/CouponCard';
import Header from 'components/Header/Header';

//hook
import useGetEventList from 'hooks/useGetEventList';

//asset
import bottleIcon from 'assets/icons/bottle_icon.png';
import keyIcon from 'assets/icons/old_key_icon.png';

function TestPage() {
  const [isEvent, setIsEvent] = useState(false);
  const { events, loading, error } = useGetEventList();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;


  const handleIsEvent = () => {
    setIsEvent((prevIsEvent) => !prevIsEvent);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header text={'이벤트 안내'} />
      <div className="border-b-8 mt-8" onClick={handleIsEvent}>
        {isEvent ? (
          <CouponCard
            imgSrc={bottleIcon}
            title="엔젤리너스 30% 할인 쿠폰"
            detail="커피 음료 구매시 30% 할인"
            useByDate="사용 기한 : 2024년 3월 14일까지"
            addStyle={'bg-gray-100 mx-8 text-'}
          />
        ) : (
          <div className={`flex flex-row border rounded-2xl m-8 bg-gray-100 `}>
            <div>
              <img src={keyIcon} className="h-[6vh] m-8" />
            </div>
            <div className="flex items-center justify-center py-4 mr-8 mx-8">
              <p className="mb-1 text-center">
                오늘의 랜덤 스팟이 <br /> 아직 열리지 않았어요!
              </p>
            </div>
          </div>
        )}
      </div>
      <div>
        {events.data.events.map((events) => (
          <CouponCard
            key={events.id}
            imgSrc={bottleIcon}
            title={events.title}
            detail={events.content || '더현대 서울 이벤트'}
            useByDate={`기간 : ${events.startedAt} ~ ${events.finishedAt}`}
            addStyle={'mx-8'}
          />
        ))}
      </div>
    </div>
  );
}
export default TestPage;
