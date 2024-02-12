import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import fruitIcon from '../../assets/images/fruit_icon.png';

const BottomNavbar = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: fruitIcon },
    { path: '/Login', label: 'Login', icon: fruitIcon },
    { path: '/location', label: 'Location', icon: fruitIcon },
    { path: '/qrscanner', label: 'qrscanner', icon: fruitIcon },
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
            <img src={item.icon} alt={item.label} className="w-6 h-6" />
            <span className="text-xs">{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BottomNavbar;
