/* eslint-disable react/no-unknown-property */
/**
 * @author 황수영
 * @email sooyoung.h8@gmail.com
 * @create date 2024-03-01 04:35:36
 * @modify date 2024-03-01 04:35:36
 * @desc 흰디 챗봇 - 매장 추천
 */

// 아이콘
import mainTent from 'assets/icons/main_Tent.png';
import mainCapHeendy from 'assets/icons/CapHeendy.png';

// const backOptionsWithBack = [
//     { name: 'Hamburger', backgroundImageUrl: 'popcorn-background.jpg' },
//     { name: 'Tree1', backgroundImageUrl: 'pizza-background.jpg' },
//     { name: 'Tree2', backgroundImageUrl: 'pizza-background.jpg' },
//     { name: 'Empty', backgroundImageUrl: 'empty-background.jpg' },
//   ];
  
function CaptainHeendy() {
  
    return (
      <div className="main_container min-h-screen flex flex-col">
        {/* 헤더 두 개 */}
        <div className="w-full h-[15vh]">
          <div className="flex flex-row justify-between items-center space-x-2 h-[6vh] border-b font-bold">
            <div className="flex items-center justify-start ml-6">
              <img src={mainTent} className="h-6" />
              <span className="text-l ml-3 mt-2 items-center">흰디의 모험</span>
            </div>
            <div className="flex border-1 rounded-xl items-center p-1">
              <span className="mr-2">대장 흰디</span>
              <img src={mainCapHeendy} className="mr-3 h-[3vh] z-[-1]" />
            </div>
          </div>
  
      </div>
      </div>
    );
  }
  
  export default CaptainHeendy;
  