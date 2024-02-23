/**
 * @author 오수영
 * @email osy9757@gmail.com
 * @create date 2024-02-19 01:32:22
 * @modify date 2024-02-24 04:33:26
 * @desc Modal 상태 관리 hook
 */
import { useState } from 'react';

function useModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content = null) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  return { isModalOpen, modalContent, openModal, closeModal, setModalContent };
}
export default useModal;
