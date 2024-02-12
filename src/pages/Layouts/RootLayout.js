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
