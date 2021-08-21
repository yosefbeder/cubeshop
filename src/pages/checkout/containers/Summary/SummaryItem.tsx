import React from 'react';
import { formatPriceEGP } from '../../../../utils/numbers';
import classes from './Summary.module.css';

interface SummaryItemProps {
  imgSrc: string;
  name: string;
  quantity: number;
  price: number;
}

const SummaryItem: React.FC<SummaryItemProps> = ({
  imgSrc,
  name,
  quantity,
  price,
}) => {
  return (
    <div className={classes['summary-item']}>
      <img className={classes['summary-item__img']} src={imgSrc} alt={name} />
      <p className={`${classes['summary-item__p']} txt-primary`}>
        {name} x {quantity}
      </p>
      <div className={`${classes['summary-item__price']} txt-emphasize`}>
        {formatPriceEGP(price)}
      </div>
    </div>
  );
};

export default SummaryItem;
