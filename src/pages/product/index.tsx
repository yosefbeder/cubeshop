import React, { useState } from 'react';
import classes from './product.module.css';
import { Footer, Navbar } from '../../common/containers';
import Info from './containers/Info';
import IconButton from '../../common/components/IconButton';
import { IoHeart, IoHeartOutline, IoLinkOutline } from 'react-icons/io5';
import Button from '../../common/components/Button';
import Input from '../../common/components/Input';
import { formatPrice } from '../../utils/numbers';

const product = {
  imgSrcs: [
    'https://m.media-amazon.com/images/I/7130FoaoPWL._AC_SL1500_.jpg',
    'https://m.media-amazon.com/images/I/61U-MGBifqL._AC_SL1000_.jpg',
    'https://m.media-amazon.com/images/I/610y2mU5NTL._AC_SL1000_.jpg',
    'https://m.media-amazon.com/images/I/718PabY7hXL._AC_SL1500_.jpg',
  ],
  name: 'GAN 356 R S 3x3 Speed Cube',
  price: 29.99,
  quantity: 5,
  description: `REVIVAL OF THE LEGEND - GAN 356 RS 3x3 is released on early 2020 to be a newer version of GAN 356 R. This cube originates from the once popular 356 S, the first Gan cube to break WR by Feliks Zemdeg in 2016.
    CORE AND GES UPGRADE - GAN 356RS features new Numerical Core and GES which makes the cube more stable and controllable, yet it can be easily tuned by hand.
    EXCELLENT PERFORMANCE – GAN 356 R S has 55°/ 30° corner-cutting ability that performs well with toughest angles. Seamless contact-surface with screw and snap joints is fall-apart friendly to the naughtiest kids.`,
};

const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [inFavorite, setInFavorite] = useState(false);

  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <Navbar />
      <main className={classes.main}>
        <div className={classes['imgs-container']}>
          {product.imgSrcs.map((imgSrc, index) => (
            <img
              className={`${classes.img} ${
                index === selectedImg && classes['img--selected']
              }`}
              onClick={() => setSelectedImg(index)}
              src={imgSrc}
              alt=""
            />
          ))}
        </div>
        <img
          className={classes['selected-img']}
          src={product.imgSrcs[selectedImg]}
          alt=""
        />
        <div className={classes.details}>
          <h1 className="header-1">{product.name}</h1>
          <h2 className="header-2">{formatPrice('$', product.price)}</h2>
          <ul className={classes['description-list']}>
            {product.description
              .split(/\./)
              .slice(0, -1)
              .map((p, index) => (
                <li key={index}>
                  <p className="p-1">{`${p}.`}</p>
                </li>
              ))}
          </ul>
        </div>
        <div className={`${classes.actions} ${classes['actions--1']}`}>
          <IconButton
            variant="quaternary"
            onClick={() => setInFavorite(prev => !prev)}
          >
            {inFavorite ? (
              <IoHeart style={{ color: 'tomato' }} />
            ) : (
              <IoHeartOutline />
            )}
          </IconButton>
          <IconButton variant="quaternary">
            <IoLinkOutline />
          </IconButton>
        </div>
        <div className={`${classes.actions} ${classes['actions--2']}`}>
          <Input
            type="number"
            value={quantity}
            onChange={e => setQuantity(+e.target.value)}
            min={1}
            max={product.quantity}
          />
          <Button>Add To Cart</Button>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Product;
