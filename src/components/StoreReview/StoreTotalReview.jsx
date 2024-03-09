/**
 * @author 오수영
 * @email osy9757@gmail.com
 * @create date 2024-02-20 20:16:55
 * @modify date 2024-02-20 20:16:55
 * @desc 매장 상세페이지 리뷰탭 전체 출력 형식 컴포넌트
 */

import { useNavigate } from 'react-router-dom';

import StoreHashTag from './StoreHashTag';
import StoreReviewPage from './StoreReviewPage';
import BlackButton from 'components/Button/BlackButton';

function StoreTotalReview({ image, shopName, details }) {
//function StoreTotalReview({id}) {
  // const { id } = useParams();

  console.log("StoreTotalReview => details 출력" + details );

  const navigate = useNavigate();

  const handleReviewPage = () => {
    navigate('/reviewCreation', { state: { image, shopName, details } });
  };

  return (
    <div className="w-full h-full">
      <div className="w-full h-full">
        <StoreHashTag details={details} />
      </div>
      <div>
        <StoreReviewPage details={details} />
      </div>
      <BlackButton onClick={handleReviewPage}>리뷰 작성하기</BlackButton>
      {/* <div className="w-full">
        <button
          className="font-bold w-[94vw] bg-black text-white text-sm py-4 rounded-md fixed bottom-[0vh] left-[3vw]"
          onClick={handleReviewPage}
        >
          리뷰 작성하기
        </button>
      </div> */}
    </div>
  );
}
export default StoreTotalReview;
