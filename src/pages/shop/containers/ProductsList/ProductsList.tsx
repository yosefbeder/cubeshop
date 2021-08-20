import React from 'react';
import Product from './Product';
import classes from '../../shop.module.css';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { useHistory } from 'react-router-dom';
import { commerce } from '../../../../api/commerce';
import { actions as bagActions } from '../../../../store/bag';

const ProductsList = () => {
  const products = useAppSelector(state => state.products.data);
  const bag = useAppSelector(state => state.bag.data);
  const history = useHistory();
  const dispatch = useAppDispatch();

  return (
    <div className={classes['products-container']}>
      {products!.map(({ id, ...productProps }) => (
        <Product
          key={id}
          {...productProps}
          onClick={() => history.push(`products/${id}`)}
          onAddToBag={async () => {
            // check if the item does exist
            const product = bag!.items.find(product => product.id === id);

            // update the cloud version first
            if (
              (product && !(product.quantity === product.available)) ||
              !product
            ) {
              await commerce.cart.add(id, 1);
            } else {
              alert(new Error("There's no more in stock!"));
            }

            if (product && !(product.quantity === product.available)) {
              // if so just update the quantity (if there's enough in stock)
              dispatch(bagActions.changeQuantity({ id, change: 1 }));
            }

            // else add it
            if (!product) {
              dispatch(
                bagActions.addToBag({ id, quantity: 1, ...productProps }),
              );
            }
          }}
        />
      ))}
    </div>
  );
};

export default ProductsList;
