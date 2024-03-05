/**
 * @author 최성혁
 * @email [cinemay33@gmail.com]
 * @create date 2024-03-02 15:29:24
 * @modify date 2024-03-02 15:29:24
 * @desc Mbti 페이지
 */
import SpeechBubble from 'components/SpeechBubble/SpeechBubble';
import CouponCard2 from 'components/CouponCard/CouponCard2';
import ModalHeendy from 'assets/images/modal_heendy.png';
import MainHeader from 'components/Header/MainHeader';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import mbtiContent from 'assets/data/mbtiContent';

const Mbti = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0); 
  
  const handleNextContent = () => {
    if (currentIndex < mbtiContent.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      navigate('/main');
    }
  };
  return (
    <>
      <MainHeader/>
      <div className="flex flex-col items-center justify-center h-screen">
        <SpeechBubble arrowPostion="right" backgroundColor="#FAFAFA" padding={'20px'} height={'50%'} width={'80%'}>
          <div className="my-10">
            <p className={'text-center font-bold'}>
              더현대 서울에서 쇼핑한다면
            </p>
            </div>
          {mbtiContent[currentIndex].map((item, index) => (
          <CouponCard2
            key={index}
            imgSrc={item.imgSrc}
            detail={item.detail}
            addStyle="bg-white"
            onClick={handleNextContent}
          />
        ))}
        </SpeechBubble>
        <div className="flex justify-end w-full mt-4">
          <img src={ModalHeendy} alt="Heendy" className="h-[12vh]" />
        </div>
      </div>
    </>
  );
}

export default Mbti;
