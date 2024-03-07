/**
 * @author 오수영
 * @email osy9757@gmail.com
 * @create date 2024-03-07 09:46:18
 * @modify date 2024-03-07 09:46:18
 * @desc 레벨업 시 모달
 */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetLevelUp } from 'store/features/LevelSlice';

import useFirework from 'hooks/animation/useFirework';

const LevelUpModal = () => {
  const { level, levelUp } = useSelector((state) => state.exp);
  const dispatch = useDispatch();
  const { firework } = useFirework();

  if (levelUp) {
    firework();
  }

  const handleClose = () => {
    dispatch(resetLevelUp());
  };

  if (!levelUp) {
    return null;
  }

  const renderRewardContent = (level) => {
    switch (level) {
      case 1:
        return <p>축하합니다! 레벨 1에 도달하여 쿠폰 A를 받았습니다!</p>;
      case 2:
        return <p>축하합니다! 레벨 2에 도달하여 아이템 B를 받았습니다!</p>;
      // 각 레벨에 따른 추가 케이스를 여기에 구현합니다.
      case 3:
      case 4:
      case 5:
      case 6:
        return <p>축하합니다! 레벨 {level}에 도달했습니다!</p>;
      default:
        return <p>축하합니다! 새로운 레벨에 도달했습니다!</p>;
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="modal-content bg-white p-5 rounded-lg">
        <h2 className="text-lg font-bold">축하합니다!</h2>
        {renderRewardContent(level)}
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700" onClick={handleClose}>
          닫기
        </button>
      </div>
    </div>
  );
};

export default LevelUpModal;
