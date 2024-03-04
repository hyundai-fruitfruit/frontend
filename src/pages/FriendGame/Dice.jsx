/**
 * @author 엄상은
 * @email sangeun.e.9@gmail.com
 * @create date 2024-03-03 01:41:25
 * @modify date 2024-03-03 01:41:25
 * @desc 주사위 페이지
 */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainHeader from 'components/Header/MainHeader';
import BlackButton from 'components/Button/BlackButton';
import DiceBoard from 'components/Dice/DiceBoard';
import GetExp from 'pages/FriendGame/GetExp';

function Dice() {
  const [page, setPage] = useState(1);
  const [buttonText, setButtonText] = useState("주사위 굴리러 가기");
  const [imageUrl, setImageUrl] = useState("https://fruitfruit.s3.ap-northeast-2.amazonaws.com/dice/dicegame-1.png");

  const navigate = useNavigate();
  const nextPage = () => {
    if (page === 1) {
      setImageUrl(null);
      setButtonText("주사위 굴리기");
      setPage(2);
    } else if (page === 2) {
      setImageUrl("https://fruitfruit.s3.ap-northeast-2.amazonaws.com/dice/dicegame-3.png");
      setButtonText("경험치 받기");
      setPage(3);
    } else if (page === 3) {
      setImageUrl(null);
      setButtonText("메인으로");
      setPage(4);
    } else {
      navigate('/friendGame')
    }
  };

  const styles = {
    ...(imageUrl && { backgroundImage: `url(${imageUrl})` }),
    backgroundSize: 'cover',
    height: '100vh',
  };

  return (
    <div style={styles}>
      <MainHeader />
      {page === 2 ? <DiceBoard /> : null}
      {page === 4 ? <GetExp type="water" start={10} end={20} /> : null}
      <BlackButton onClick={nextPage}>{buttonText}</BlackButton>
    </div>
  );
}

export default Dice;
