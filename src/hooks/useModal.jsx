/**
 * @author 오수영
 * @email osy9757@gmail.com
 * @create date 2024-02-19 01:32:22
 * @modify date 2024-02-19 01:32:22
 * @desc Modal 상태 관리 hook
 */
import { useState, useEffect } from 'react';

function useModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handlePopState = () => {
      setIsModalOpen(false);
    };

    if (isModalOpen) {
      window.history.pushState(null, null);
      window.addEventListener('popstate', handlePopState);
    }

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [isModalOpen]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return { isModalOpen, openModal, closeModal };
}

export default useModal;
