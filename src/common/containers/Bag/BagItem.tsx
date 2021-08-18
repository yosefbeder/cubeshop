import React, { useState } from 'react';
import {
  IoAddOutline as PlusIcon,
  IoRemove as SubIcon,
  IoTrashOutline as TrashIcon,
} from 'react-icons/io5';
import { formatPrice } from '../../../utils/numbers';
import classes from './BagItem.module.css';
import IconButton from '../../components/IconButton';
import LoadingSpinner from '../../components/LoadingSpinner';

export interface BagItemProps {
  imgSrc: string;
  name: string;
  price: number;
  quantity: number;
}

const BagItem: React.FC<BagItemProps> = ({ imgSrc, name, price, quantity }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className={classes.container}>
      <div className={classes['img-container']}>
        {isLoading ? (
          <LoadingSpinner size="lg" />
        ) : (
          <img className={classes.img} src={imgSrc} alt={name} />
        )}
      </div>
      <div className={classes.info}>
        <span className="txt-primary">{name}</span>
        <span className="txt-emphasize">{formatPrice('$', price)}</span>
      </div>
      <div className={classes.actions}>
        <div className={classes['quantity-controller']}>
          <IconButton variant="secondary">
            <PlusIcon />
          </IconButton>
          <span>{quantity}</span>
          <IconButton variant="secondary" disabled>
            <SubIcon />
          </IconButton>
        </div>
        <IconButton variant="tertiary">
          <TrashIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default BagItem;
