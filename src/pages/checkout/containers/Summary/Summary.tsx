import React from 'react';
import classes from './Summary.module.css';
import SummaryItem from './SummaryItem';
import dummyBag from '../../../../data/dummy-bag';
import { formatPriceEGP } from '../../../../utils/numbers';

const Summary = () => {
  const subtotal = dummyBag.reduce((acc, cur) => acc + cur.price, 0);
  const delivery = 5;

  return (
    <div className={classes.container}>
      <h2 className={`header-2 ${classes.header}`}>Order summary</h2>

      <div className={classes['summary-items-list']}>
        {dummyBag.map((props, index) => (
          <SummaryItem key={index} {...props} />
        ))}
      </div>

      <div className={classes['price-summary']}>
        <div
          className={`${classes['price-summary__group']} ${classes['price-summary__group--sm']} txt-primary`}
        >
          <span>Subtotal</span>
          <span>{formatPriceEGP(subtotal)}</span>
        </div>
        <div
          className={`${classes['price-summary__group']} ${classes['price-summary__group--sm']} txt-primary`}
        >
          <span>Delivery</span>
          <span>{formatPriceEGP(delivery)}</span>
        </div>
        <div
          className={`${classes['price-summary__group']} ${classes['price-summary__group--lg']} txt-emphasize`}
        >
          <span>Total</span>
          <span>{formatPriceEGP(subtotal + delivery)}</span>
        </div>
      </div>
    </div>
  );
};

export default Summary;
