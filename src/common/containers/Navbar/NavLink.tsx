import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import classes from './Navbar.module.css';

interface NavLinkProps {
  to: string;
  content: string;
  size?: 'sm' | 'med' | 'lg';
}

const NavLink: React.FC<NavLinkProps> = ({ to, content, size = 'med' }) => {
  return (
    <Link
      to={to}
      exact={to === '/'}
      className={`${classes['nav-link']} ${classes[`nav-link--${size}`]}`}
      activeClassName={classes['nav-link--active']}
      data-hover={content}
    >
      {content}
    </Link>
  );
};

export default NavLink;
