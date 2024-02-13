/**
 * @author OHsooyoung
 * @email osy9757@gmai.com
 * @create date 2024-02-13 02:24:22
 * @modify date 2024-02-13 02:24:23
 * @desc [description]
 */
import React from 'react';
import { Outlet } from 'react-router-dom';
import BottomNavbar from '../../components/BottomNavbar/BottomNavbar';

const RootLayout = () => {
  return (
    <div>
      <Outlet />
      <BottomNavbar />
    </div>
  );
};

export default RootLayout;
