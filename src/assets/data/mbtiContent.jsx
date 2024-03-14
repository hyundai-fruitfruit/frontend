/**
 * @author 최성혁
 * @email [cinemay33@gmail.com]
 * @create date 2024-03-02 15:26:02
 * @modify date 2024-03-02 15:26:02
 * @desc mbti 데이터
 */
import smileIcon from '../icons/Grinning-face-with-smiling-eyes.png';
import shushingIcon from '../icons/Shushing-face.png';
import giftIcon from '../icons/Wrapped-gift.png'
import parachute from '../icons/Parachute.png'
import writingHand from '../icons/Writing-hand.png'
import picture from '../icons/Framed-picture.png'
import calendar from '../icons/Spiral-calendar.png'
import cookie from '../icons/Fortune-cookie.png'
const mbtiContent = [
  [
  {
    imgSrc: smileIcon, 
    detail: '친구들과 왁자지껄한 분위기에서\n쇼핑하고 싶어!', 
  },
  {
    imgSrc: shushingIcon, 
    detail: '조용한 공간에서 혼자 둘러보며\n쇼핑하는게 좋아!', 
  }
  ],
  [
  {
    imgSrc: giftIcon, 
    detail: '실제로 보고 만져볼 수 있는\n상품이 날 설레게 해!', 
  },
  {
    imgSrc: parachute, 
    detail: '팝업스토어나 VR 쇼핑 같이\n새로운 쇼핑 경험을 즐겨!', 
  }
  ],
  [
  {
    imgSrc: writingHand, 
    detail: '상품의 품질이나 가격처럼\n구체적인 정보를 비교하여 결정해!', 
  },
  {
    imgSrc: picture, 
    detail: '상품이나 매장의 감성에 따라\n구매욕구가 생겨!', 
  }
  ],
  [
    {
      imgSrc: calendar, 
      detail: '무엇을 먹을지\n결정하고 가는 편이야!', 
    },
    {
      imgSrc: cookie, 
      detail: '기분에 따라 먹고 싶은 것을\n선택하는 편이야!', 
    }
    ]
];

export default mbtiContent;