import React from 'react';
import Product from './Product';
import classes from '../../shop.module.css';

const products: {
  id: string;
  imgSrc: string;
  name: string;
  price: number;
}[] = [
  {
    id: 'h324324332',
    imgSrc: 'https://m.media-amazon.com/images/I/7130FoaoPWL._AC_SL1500_.jpg',
    name: 'GAN 356 R S 3x3 Speed Cube',
    price: 29.99,
  },
  {
    id: 'h324322432',
    imgSrc: 'https://m.media-amazon.com/images/I/71t-jTtsGcL._AC_SL1500_.jpg',
    name: 'GAN 356 Air Master 3x3 Speed Cube',
    price: 20.99,
  },
  {
    id: 'h365432432',
    imgSrc: 'https://m.media-amazon.com/images/I/61+d96GvGwL._AC_SL1500_.jpg',
    name: 'GAN 356M Stardard version stickerless 3x3 Speed Cube',
    price: 59.99,
  },
  {
    id: 'h324232432',
    imgSrc:
      'https://z.nooncdn.com/products/tr:n-t_400/v1579095755/N33710671A_1.jpg',
    name: 'QiYi Super Big Sail 3x3 Magic Cube',
    price: 9.99,
  },
];

const ProductsList = () => {
  return (
    <div className={classes['products-container']}>
      {products.map(({ id, ...productProps }) => (
        <Product key={id} {...productProps} />
      ))}
    </div>
  );
};

export default ProductsList;
