import React, { useState, useEffect, useRef } from 'react';
import classes from './Navbar.module.css';
import NavLink from './NavLink';
import IconButton from '../../components/IconButton';
import { IoBag as CartIcon } from 'react-icons/io5';
import MenuIcon from './MenIcon';
import Bag from '../Bag/Bag';
import { CSSTransition } from 'react-transition-group';
import dummyBag from '../../../data/dummy-bag';
import Logo from '../../components/Logo';

const navLinksData = [
  { content: 'home', to: '/' },
  { content: 'shop', to: '/products' },
  { content: 'our story', to: '/about' },
  { content: 'contact us', to: '/contact' },
];

const MobileNavbar = () => {
  return (
    <div className={classes['mobile-nav']}>
      {navLinksData.map((navLinkData, index) => (
        <NavLink key={index} size="lg" {...navLinkData} />
      ))}
    </div>
  );
};

const Navbar = () => {
  const [mobileNavbarIsShown, setMobileNavbarIsShown] = useState(false);
  const [isBagShown, setIsBagShown] = useState(false);
  const [bagItems, setBagItems] = useState(dummyBag);

  const closeBag = () => setIsBagShown(false);

  const bagIsEmpty = bagItems.length === 0;

  const cartContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onClickOutside = (event: globalThis.MouseEvent) => {
      if (
        cartContainerRef.current &&
        !cartContainerRef.current.contains(event.target as Node)
      ) {
        closeBag();
      }
    };

    document.addEventListener('mousedown', onClickOutside);

    return () => {
      document.removeEventListener('mousedown', onClickOutside);
    };
  }, []);

  return (
    <>
      <div
        className={`${classes.nav} ${
          mobileNavbarIsShown && classes['nav--mobile-nav-visible']
        }`}
      >
        <IconButton
          onClick={() => setMobileNavbarIsShown(prev => !prev)}
          className={classes['mobile-nav-button']}
          variant="primary"
        >
          <MenuIcon isActive={mobileNavbarIsShown} />
        </IconButton>
        <Logo />
        <div className={classes['nav-links-container']}>
          {navLinksData.map((navLinkData, index) => (
            <NavLink key={index} {...navLinkData} />
          ))}
        </div>
        <div className={classes['bag-btn-container']} ref={cartContainerRef}>
          <IconButton onClick={() => setIsBagShown(true)} variant="primary">
            <CartIcon />
          </IconButton>

          <CSSTransition
            classNames="fade"
            timeout={300}
            in={isBagShown}
            unmountOnExit
            mountOnEnter
          >
            <Bag items={bagItems} onClose={closeBag} />
          </CSSTransition>
        </div>
      </div>
      <MobileNavbar />
    </>
  );
};

export default Navbar;
