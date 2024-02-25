/**
 * @author 오수영
 * @email osy9757@gmail.com
 * @create date 2024-02-18 21:56:06
 * @modify date 2024-02-19 03:51:08
 * @desc 모달 컴포넌트
 */
import React, { useEffect } from 'react';

function ModalComponent({ isOpen, onClose, children }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    e.stopPropagation();
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out"
      onClick={handleBackdropClick}
    >
      <div className="p-5 rounded-lg transition-transform transform duration-300" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

export default ModalComponent;
