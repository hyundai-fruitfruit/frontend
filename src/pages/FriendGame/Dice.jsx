import React from 'react';
import MainHeader from 'components/Header/MainHeader';
import BlackButton from 'components/Button/BlackButton';

function Dice() {
  return (
    <div className="main_container min-h-screen flex flex-col">
      <div className="w-full h-[15vh]">
        <MainHeader />
        <BlackButton>주사위 굴리기</BlackButton>
      </div>
    </div>
  )
}

export default Dice;
