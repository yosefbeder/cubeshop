import React from 'react';
import classes from './Summary.module.css';
import SummaryItem from './SummaryItem';
import dummyBag from '../../../../data/dummy-bag';
import { formatPrice } from '../../../../utils/numbers';

const Summary = () => {
  const subtotal = dummyBag.reduce((acc, cur) => acc + cur.price, 0);
  const delivery = 5;

  return (
    <div className={classes.container}>
      <h3 className={`header-3 ${classes.header}`}>Order summary</h3>

      <div className={classes['summary-items-list']}>
        {dummyBag.map((props, index) => (
          <SummaryItem key={index} {...props} />
        ))}
      </div>

      <div className={classes['price-summary']}>
        <div
          className={`${classes['price-summary__group']} ${classes['price-summary__group--sm']}`}
        >
          <span>Subtotal</span>
          <span>{formatPrice('$', subtotal)}</span>
        </div>
        <div
          className={`${classes['price-summary__group']} ${classes['price-summary__group--sm']}`}
        >
          <span>Delivery</span>
          <span>{formatPrice('$', delivery)}</span>
        </div>
        <div
          className={`${classes['price-summary__group']} ${classes['price-summary__group--lg']}`}
        >
          <span>Total</span>
          <span>{formatPrice('$', subtotal + delivery)}</span>
        </div>
      </div>
    </div>
  );
};

export default Summary;
