import React from 'react';
import Product from './Product';
import classes from '../../shop.module.css';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { useHistory } from 'react-router-dom';
import { commerce } from '../../../../api/commerce';
import { actions as bagActions } from '../../../../store/bag';

const ProductsList = () => {
  const products = useAppSelector(state => state.products.data)!;
  const bag = useAppSelector(state => state.bag.data)!;
  const history = useHistory();
  const dispatch = useAppDispatch();

  return (
    <div className={classes['products-container']}>
      {products.map(
        ({ id, imgSrcs, description, available, ...productProps }) => {
          const bagItem = bag!.items.find(item => item.productId === id);
          let itemId: string;

          return (
            <Product
              key={id}
              imgSrc={imgSrcs[0]}
              {...productProps}
              onClick={() => history.push(`products/${id}`)}
              disabled={available - (bagItem?.quantity || 0) === 0}
              onAddToBag={async () => {
                // check if the item does exist

                // update the cloud version first
                const request = await commerce.cart.add(id, 1);
                itemId = request.line_item_id;

                if (bagItem) {
                  // if so just update the quantity (if there's enough in stock)
                  dispatch(
                    bagActions.changeQuantity({ id: itemId!, change: 1 }),
                  );
                }

                // else add it
                if (!bagItem) {
                  dispatch(
                    bagActions.add({
                      id: itemId!,
                      productId: id,
                      quantity: 1,
                      imgSrc: imgSrcs[0],
                      available,
                      ...productProps,
                    }),
                  );
                }
              }}
            />
          );
        },
      )}
    </div>
  );
};

export default ProductsList;
