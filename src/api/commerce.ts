import Commerce from '@chec/commerce.js';
import { BagItemType, BagType, ProductType } from '../types';

export const commerce = new Commerce(
  'pk_test_32106877ffacd26d21a1e98a93842ae76bd0b3f7ef0e9',
  true,
);

// PRODUCTS
export const getAllProducts = async (): Promise<ProductType[]> => {
  const { data } = await commerce.products.list();

  return data.map(
    ({
      id,
      media: { source: imgSrc },
      name,
      price: { raw: price },
      inventory: { available },
    }) => ({ id, imgSrc, name, price, available }),
  );
};

// BAG
export const getBag = async (products: ProductType[]): Promise<BagType> => {
  const request = await commerce.cart.retrieve();

  const bagItems: BagItemType[] = request.line_items.map((item, index) => ({
    ...products[index],
    id: item.id,
    productId: item.product_id,
    quantity: item.quantity,
  }));

  return { id: request.id, subtotal: request.subtotal.raw, items: bagItems };
};
