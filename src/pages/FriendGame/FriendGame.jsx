/**
 * @author 오수영
 * @email osy9757@gmail.com
 * @create date 2024-03-01 06:33:24
 * @modify date 2024-03-01 06:33:24
 * @desc 친구 페이지 화면 구성
 */
/**
 * @author 엄상은
 * @email sangeun.e.9@gmail.com
 * @create date 2024-03-05 10:12:12
 * @modify date 2024-03-05 10:12:12
 * @desc 친구 페이지 API 연결, CSS 수정
 */

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { findFriendList } from 'apis/request';

// component
import MainHeader from 'components/Header/MainHeader';
import IconMenu from 'components/IconMenu/IconMenu';
import BackgroundImage from 'components/BackgroundImage/BackgroundImage';
import SpeechBubble from 'components/SpeechBubble/SpeechBubble';

// asset
import heendy_background from 'assets/images/heendy_background.png';
import mainHeendyImage from 'assets/images/mainHeendyImage.png';

function FriendGame() {
  const navigate = useNavigate();
  const [iconsData, setIconsData] = useState(null);

  useEffect(() => {
    const fetchFriendList = async () => {
      const data = await findFriendList();
      const transformedData = data.members.map(item => ({
        id: item.id,
        name: item.nickname,
        src: item.imgUrl,
        label: item.nickname,
      }));
      setIconsData(transformedData);
    };
    fetchFriendList();
  }, []);

  return (
    <div className="h-full">
      <MainHeader />
      <div className="mt-20 h-15">
        {iconsData && <IconMenu icons={iconsData} />} 
      </div>
      <div>
        <SpeechBubble boldText={"친구를 선택하고 게임을 시작해봐!"} />
      </div>
      <div className="mb-8 relative w-[85vw] h-[42vh] mx-auto">
        <BackgroundImage imageUrl={heendy_background} />
        <img src={mainHeendyImage} alt="캐릭터" className="absolute inset-0 h-[30vh] w-auto mx-auto my-auto mb-0" />
      </div>
      <div className='border border-gray-200 rounded-xl mx-6 flex flex-col justify-around items-center h-52'>
        <p>흰순이와 게임할래?</p>
        <div className='flex justify-between items-center w-full px-7'>
          <div className='border border-gray-200 rounded-2xl flex flex-col justify-center items-center bg-gray-100 w-36 h-32' onClick={() => navigate('/dice')} >
            <img src="https://fruitfruit.s3.ap-northeast-2.amazonaws.com/icon/icon-dice.png" className='w-11 h-11 mb-3' />
            <p>주사위 게임</p>
            <p>기다리는 중</p>
          </div>
          <div className='border border-gray-200 rounded-2xl flex flex-col justify-center items-center bg-gray-100 w-36 h-32' onClick={() => navigate('/dice')} >
            <img src="https://fruitfruit.s3.ap-northeast-2.amazonaws.com/icon/icon-mbti.png" className='w-11 h-11 mb-3' />
            <p>친구 성향 분석</p>
            <p>완료</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FriendGame;
