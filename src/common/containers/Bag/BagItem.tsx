import React, { useState } from 'react';
import {
  IoAddOutline as PlusIcon,
  IoRemove as SubIcon,
  IoTrashOutline as TrashIcon,
} from 'react-icons/io5';
import { formatPriceEGP } from '../../../utils/numbers';
import classes from './BagItem.module.css';
import IconButton from '../../components/IconButton';
import LoadingSpinner from '../../components/LoadingSpinner';
import { useEffect } from 'react';

export interface BagItemProps {
  imgSrc: string;
  name: string;
  price: number;
  quantity: number;
  available: number;
  isSelected: boolean;
  onRemove: () => Promise<void>;
  onQuantityChange: (change: number) => Promise<void>;
}

const BagItem: React.FC<BagItemProps> = ({
  imgSrc,
  name,
  price,
  quantity,
  available,
  isSelected,
  onRemove,
  onQuantityChange,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isUnmounted, setIsUnmounted] = useState(false);

  useEffect(() => {
    return () => {
      setIsUnmounted(true);
    };
  }, []);

  const quantityChangeHandler = async (change: number) => {
    try {
      setIsLoading(true);
      await onQuantityChange(change);
    } catch (err) {
      alert(new Error('Something went wrong'));
    }
    if (!isUnmounted) setIsLoading(false);
  };

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
        <span className="txt-emphasize">{formatPriceEGP(price)}</span>
      </div>
      <div className={classes.actions}>
        <div className={classes['quantity-controller']}>
          <IconButton
            variant="secondary"
            disabled={quantity === available || isSelected || isLoading}
            onClick={() => quantityChangeHandler(1)}
          >
            <PlusIcon />
          </IconButton>
          <span>{quantity}</span>
          <IconButton
            variant="secondary"
            disabled={quantity === 1 || isSelected || isLoading}
            onClick={() => quantityChangeHandler(-1)}
          >
            <SubIcon />
          </IconButton>
        </div>
        <IconButton
          variant="tertiary"
          onClick={async () => {
            try {
              setIsLoading(true);
              await onRemove();
            } catch (err) {
              alert(new Error('Something went wrong'));
            }
            if (!isUnmounted) setIsLoading(false);
          }}
        >
          <TrashIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default BagItem;
