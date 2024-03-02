// import SpeechBubble from 'components/SpeechBubble/SpeechBubble';
// import ModalHeendy from 'assets/images/modal_heendy.png';
import React, { useState } from 'react';
import '../../util/fcm/firebase-messaging-sw';

const Onboarding = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const images = [
    'https://fruitfruit.s3.ap-northeast-2.amazonaws.com/onboarding_screenshot/1.jpg',
    'https://fruitfruit.s3.ap-northeast-2.amazonaws.com/onboarding_screenshot/2.jpg',
    'https://fruitfruit.s3.ap-northeast-2.amazonaws.com/onboarding_screenshot/3.jpg',
    'https://fruitfruit.s3.ap-northeast-2.amazonaws.com/onboarding_screenshot/4.jpg',
    'https://fruitfruit.s3.ap-northeast-2.amazonaws.com/onboarding_screenshot/5.jpg',
  ];

  const handleClick = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  }
  // return (
  //   <div>
  //     <SpeechBubble arrowPostion="right">안녕!</SpeechBubble>
  //     <div className="flex justify-end w-full mt-4">
  //       <img src={ModalHeendy} alt="Heendy" className="h-[12vh]" />
  //     </div>
  //   </div>
  // );

  return (
    <div onClick={handleClick} style={{width: '100%', height: '100%'}}>
      <img src={images[imageIndex]} alt="" style={{width: '100%', height: '100%'}}/>
    </div>
  );
}

export default Onboarding;
