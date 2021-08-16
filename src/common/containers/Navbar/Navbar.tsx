import React, { useState, useEffect, useRef } from 'react';
import classes from './Navbar.module.css';
import NavLink from './NavLink';
import IconButton from '../../components/IconButton';
import { IoBag as CartIcon } from 'react-icons/io5';
import MenuIcon from './MenIcon';
import Bag from '../Bag/Bag';
import { CSSTransition } from 'react-transition-group';

const navLinksData = [
  { content: 'home', to: '/' },
  { content: 'shop', to: '/shop' },
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
  const [bagItems, setBagItems] = useState([
    {
      imgSrc: 'https://m.media-amazon.com/images/I/7130FoaoPWL._AC_SL1500_.jpg',
      name: 'GAN 356 R S 3x3 Speed Cube',
      price: 29.99,
      quantity: 1,
    },
    {
      imgSrc: 'https://m.media-amazon.com/images/I/71t-jTtsGcL._AC_SL1500_.jpg',
      name: 'GAN 356 Air Master 3x3 Speed Cube',
      price: 20.99,
      quantity: 1,
    },
  ]);

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
        >
          <MenuIcon isActive={mobileNavbarIsShown} />
        </IconButton>
        <h1 className="header-1">Cube Shop</h1>
        <div className={classes['nav-links-container']}>
          {navLinksData.map((navLinkData, index) => (
            <NavLink key={index} {...navLinkData} />
          ))}
        </div>
        <div className={classes['cart-btn-container']} ref={cartContainerRef}>
          <IconButton
            onClick={() => setIsBagShown(true)}
            hasBadge={!bagIsEmpty}
            size="lg"
          >
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
