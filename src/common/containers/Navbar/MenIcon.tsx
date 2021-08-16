import React from 'react';
import classes from './Navbar.module.css';

interface MenuIconProps {
  isActive: boolean;
}

const MenuIcon: React.FC<MenuIconProps> = ({ isActive }) => {
  return (
    <div
      className={`${classes['menu-icon']} ${
        isActive && classes['menu-icon--active']
      }`}
    >
      <div className={classes['menu-icon__bar']} />
    </div>
  );
};

export default MenuIcon;
