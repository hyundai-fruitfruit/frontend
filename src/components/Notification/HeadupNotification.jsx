/**
 * @author 오수영
 * @email osy9757@gmail.com
 * @create date 2024-02-23 01:15:09
 * @modify date 2024-02-23 01:15:09
 * @desc 헤드업 알림 컴포넌트
 */
import React, { useState, useEffect } from 'react';

const Notification = ({ message, type }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return <div className={`fixed top-5 right-5 bg-${type}-200 text-${type}-600 p-4 rounded-lg shadow`}>{message}</div>;
};

export default Notification;
