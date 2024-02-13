/**
 * @author OHsooyoung
 * @email osy9757@gmail.com
 * @create date 2024-02-13 10:34:46
 * @modify date 2024-02-13 15:30:53
 * @desc [description]
 */
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import home_active_icon from '../../assets/images/active_home.png';
import cart_active_icon from '../../assets/images/active_cart.png';
import tag_active_icon from '../../assets/images/active_tag.png';
import myPage_active_icon from '../../assets/images/active_myPage.png';
import home_icon from '../../assets/images/home.png';
import cart_icon from '../../assets/images/cart.png';
import tag_icon from '../../assets/images/tag.png';
import myPage_icon from '../../assets/images/myPage.png';

const BottomNavbar = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: home_icon, activeIcon: home_active_icon },
    { path: '/login', label: 'Cart', icon: cart_icon, activeIcon: cart_active_icon },
    { path: '/location', label: 'Tag', icon: tag_icon, activeIcon: tag_active_icon },
    { path: '/qrscanner', label: 'MyPage', icon: myPage_icon, activeIcon: myPage_active_icon },
  ];

  return (
    <div className="fixed inset-x-0 bottom-0 bg-white border-t border-gray-200">
      <div className="flex justify-around">
        {navItems.map((item) => (
          <Link
            to={item.path}
            key={item.label}
            className={`flex flex-col items-center space-y-2 p-2 ${location.pathname === item.path ? 'text-black' : 'text-gray-400'}`}
          >
            <img
              src={
                location.pathname === item.path ? item.activeIcon : item.icon
              }
              alt={item.label}
              className="w-6 h-6 "
            />
            <span className="text-xs">{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BottomNavbar;
