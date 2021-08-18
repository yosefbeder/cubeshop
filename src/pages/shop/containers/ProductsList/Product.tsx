import React from 'react';
import classes from './Product.module.css';
import Button from '../../../../common/components/Button';
import { IoBagAdd as CartIcon } from 'react-icons/io5';
import { useState } from 'react';
import { formatPrice } from '../../../../utils/numbers';

interface ProductProps {
  imgSrc: string;
  name: string;
  price: number;
}

const Product: React.FC<ProductProps> = ({ imgSrc, name, price }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className={classes.container}>
      <div className={classes['img-container']}>
        <img className={classes.img} src={imgSrc} alt={name} />
      </div>
      <div className={classes.info}>
        <p className="txt-primary">{name}</p>
        <p className="txt-emphasize">{formatPrice('$', price)}</p>
        <Button
          icon={CartIcon}
          isLoading={isLoading}
          variant="contained"
          onClick={() => {
            setIsLoading(true);
            setTimeout(() => setIsLoading(false), 2000);
          }}
        >
          Add To Bag
        </Button>
      </div>
    </div>
  );
};

export default Product;
