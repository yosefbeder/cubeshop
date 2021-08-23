import React from 'react';
import { IoClose } from 'react-icons/io5';
import IconButton from '../../components/IconButton';
import classes from './Bag.module.css';
import Button from '../../components/Button';
import BagItem from './BagItem';
import { useHistory } from 'react-router-dom';
import { BagItemType } from '../../../types';
import { commerce } from '../../../api/commerce';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { actions as bagActions } from '../../../store/bag';
import { formatPriceEGP } from '../../../utils/numbers';

interface BagProps {
  items: BagItemType[];
  subtotal: number;
  onClose: () => void;
  className?: string;
}

const Bag: React.FC<BagProps> = ({ items, subtotal, onClose, className }) => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const selectedProduct = useAppSelector(
    state => state.products.selectedProduct,
  );
  const isDisabled = useAppSelector(state => state.bag.isDisabled);

  const onContinueShopping = () => {
    onClose();
    history.push('/products');
  };

  return (
    <div
      className={`${classes.container} ${
        items.length === 0 && classes['container--empty']
      } ${className}`}
    >
      <div className={classes.header}>
        <h3 className="header-3">Your shopping bag</h3>
        <IconButton onClick={onClose} variant="tertiary">
          <IoClose />
        </IconButton>
      </div>
      <div>
        {items.length === 0 ? (
          <p className="p-1">There's nothing in your bag yet.</p>
        ) : (
          items.map(({ id, productId, ...itemProps }) => (
            <BagItem
              key={id}
              disabled={selectedProduct === productId || isDisabled}
              {...itemProps}
              onRemove={async () => {
                await commerce.cart.remove(id);
                dispatch(bagActions.remove(id));
              }}
              onQuantityChange={async (change: number) => {
                await commerce.cart.update(id, {
                  quantity: itemProps.quantity + change,
                });
                dispatch(bagActions.changeQuantity({ id, change }));
              }}
            />
          ))
        )}
      </div>
      {items.length > 0 && (
        <div className={`txt-emphasize ${classes.subtotal}`}>
          <span>Total price</span>
          <span>{formatPriceEGP(subtotal)}</span>
        </div>
      )}
      <div className={classes.actions}>
        {items.length > 0 ? (
          <>
            <Button
              className={classes['continue-shopping-btn']}
              variant="outlined"
              onClick={onContinueShopping}
            >
              Continue shopping
            </Button>

            <Button
              className={classes['checkout-btn']}
              onClick={() => history.push('/checkout')}
            >
              Checkout
            </Button>
          </>
        ) : (
          <Button
            className={classes['continue-shopping-btn']}
            onClick={onContinueShopping}
          >
            Continue shopping
          </Button>
        )}
      </div>
    </div>
  );
};

export default Bag;
