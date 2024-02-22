/**
 * @author 오수영
 * @email osy9757@gmail.com
 * @create date 2024-02-13 02:24:22
 * @modify date 2024-02-13 02:24:23
 * @desc RootLayter 네비게이션바가 있는 레이아웃
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
