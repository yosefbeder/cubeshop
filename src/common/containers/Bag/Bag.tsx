import React from 'react';
import { IoClose } from 'react-icons/io5';
import IconButton from '../../components/IconButton';
import classes from './Bag.module.css';
import Button from '../../components/Button';
import {
  IoEnterOutline as CheckoutIcon,
  IoPlayOutline as PlayIcon,
} from 'react-icons/io5';
import CartItem, { BagItemProps } from './BagItem';
import { useHistory } from 'react-router-dom';

interface BagProps {
  items: BagItemProps[];
  onClose: () => void;
  className?: string;
}

const Bag: React.FC<BagProps> = ({ items, onClose, className }) => {
  const history = useHistory();

  return (
    <div
      className={`${classes.container} ${
        items.length === 0 && classes['container--empty']
      } ${className}`}
    >
      <div className={classes.header}>
        <h4 className="header-4">Your shopping bag</h4>
        <IconButton onClick={onClose}>
          <IoClose />
        </IconButton>
      </div>
      <div className={classes.summary}>
        {items.length === 0 ? (
          <p className="p-1">There's nothing in your bag yet.</p>
        ) : (
          items.map(item => <CartItem {...item} />)
        )}
      </div>
      <div className={classes.actions}>
        {items.length > 0 ? (
          <>
            <Button
              icon={PlayIcon}
              className={classes['continue-shopping-btn']}
              variant="outlined"
              onClick={onClose}
            >
              Continue shopping
            </Button>

            <Button
              icon={CheckoutIcon}
              className={classes['checkout-btn']}
              onClick={() => history.push('/checkout')}
            >
              Checkout
            </Button>
          </>
        ) : (
          <Button
            icon={PlayIcon}
            className={classes['continue-shopping-btn']}
            onClick={onClose}
          >
            Continue shopping
          </Button>
        )}
      </div>
    </div>
  );
};

export default Bag;
