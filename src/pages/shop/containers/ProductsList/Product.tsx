import React, { useState } from 'react';
import classes from './Product.module.css';
import Button from '../../../../common/components/Button';
import { formatPrice } from '../../../../utils/numbers';

interface ProductProps {
  imgSrc: string;
  name: string;
  price: number;
  onClick: () => void;
  onAddToBag: () => Promise<void>;
}

const Product: React.FC<ProductProps> = ({
  imgSrc,
  name,
  price,
  onClick,
  onAddToBag,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className={classes.container}>
      <div className={classes['img-container']} onClick={onClick}>
        <img className={classes.img} src={imgSrc} alt={name} />
      </div>
      <div className={classes.info}>
        <p className={`txt-primary ${classes.name}`} onClick={onClick}>
          {name}
        </p>
        <p className="txt-emphasize">{formatPrice('$', price)}</p>
        <Button
          isLoading={isLoading}
          variant="contained"
          onClick={async () => {
            try {
              setIsLoading(true);
              await onAddToBag();
            } catch (err) {
              alert('Something went wrong');
            }
            setIsLoading(false);
          }}
        >
          Add To Bag
        </Button>
      </div>
    </div>
  );
};

export default Product;
