/**
 * @author 오수영
 * @email osy9757@gmail.com
 * @create date 2024-02-18 21:56:06
 * @modify date 2024-02-19 03:51:08
 * @desc [description]
 */
import React from 'react';

function ModalComponent({ isOpen, children }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex justify-center items-center "
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
    >
      <div>{children}</div>
    </div>
  );
}
export default ModalComponent;
