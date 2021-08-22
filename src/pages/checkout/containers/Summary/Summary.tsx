import React from 'react';
import classes from './Summary.module.css';
import SummaryItem from './SummaryItem';
import { formatPriceEGP } from '../../../../utils/numbers';
import { BagItemType } from '../../../../types';

interface SummaryProps {
  subtotal: number;
  delivery?: number;
  items: BagItemType[];
}

const Summary: React.FC<SummaryProps> = ({ subtotal, delivery, items }) => {
  return (
    <div className={classes.container}>
      <h2 className={`header-2 ${classes.header}`}>Order summary</h2>

      <div className={classes['summary-items-list']}>
        {items.map(({ id, ...itemProps }) => (
          <SummaryItem key={id} {...itemProps} />
        ))}
      </div>

      <div className={classes['price-summary']}>
        <div
          className={`${classes['price-summary__group']} ${classes['price-summary__group--sm']} txt-primary`}
        >
          <span>Subtotal</span>
          <span>{formatPriceEGP(subtotal)}</span>
        </div>
        {delivery !== undefined && (
          <div
            className={`${classes['price-summary__group']} ${classes['price-summary__group--sm']} txt-primary`}
          >
            <span>Delivery</span>
            <span>{formatPriceEGP(delivery)}</span>
          </div>
        )}
        <div
          className={`${classes['price-summary__group']} ${classes['price-summary__group--lg']} txt-emphasize`}
        >
          <span>Total</span>
          <span>{formatPriceEGP(subtotal + (delivery || 0))}</span>
        </div>
      </div>
    </div>
  );
};

export default Summary;
