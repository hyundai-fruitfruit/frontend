/**
 * @author 오수영
 * @email osy9757@gmail.com
 * @create date 2024-02-19 10:02:05
 * @modify date 2024-02-26 04:20:04
 * @desc 랜덤스팟 이벤트 발생시 모달 페이지
 */
/**
 * @author 엄상은
 * @email sangeun.e.9@gmail.com
 * @create date 2024-03-09 11:52:05
 * @modify date 2024-03-09 11:52:05
 * @desc 랜덤스팟 이벤트 참여 페이지 CSS 수정
 */
import React, { useEffect }  from 'react';
import MainHeader from 'components/Header/MainHeader';
import BlackButton from 'components/Button/BlackButton';
import EventCardDetail from 'assets/images/event-card-detail.png'
import useFirework from 'hooks/animation/useFirework';

function RandomEventSpotQRSuccess() {
  const firework = useFirework();

  useEffect(() => {
      firework();
  }, []);

  return (
    <div className="h-screen bg-[url('assets/images/heendy-background.png')]">
      <MainHeader />
      <div className="w-56 mx-auto pt-56">
        <p className='text-center mb-6 text-base text-gray-700'>이벤트에 참여해줘서 고마워</p>
        <img src={EventCardDetail} className='mb-6'/>
      </div>
      <BlackButton>경험치 보상받기</BlackButton>
    </div>
  );
}

export default RandomEventSpotQRSuccess;
