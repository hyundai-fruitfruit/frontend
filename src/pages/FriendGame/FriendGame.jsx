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
import ClaymorphicButton from 'components/ClaymorphicButton/ClaymorphicButton';
import SpeechBubble from 'components/SpeechBubble/SpeechBubble';

// asset
import itemIcon from 'assets/images/item_icon.png';
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
      <div className="mt-20 ">
      {iconsData && <IconMenu icons={iconsData} />} 
      </div>
      <div>
        <SpeechBubble />
      </div>
      <div className="mb-8 relative w-[85vw] h-[42vh] mx-auto">
        <BackgroundImage imageUrl={heendy_background} />
        <img src={mainHeendyImage} alt="캐릭터" className="absolute inset-0 h-[30vh] w-auto mx-auto my-auto mb-0" />
      </div>
      <div className="grid grid-cols-2 gap-4 p-4">
        <ClaymorphicButton imageSrc={itemIcon} text="주사위 게임" onClick={() => navigate('/dice')} />
        <ClaymorphicButton imageSrc={itemIcon} text="친구 성향 분석" />
      </div>
    </div>
  );
}
export default FriendGame;
