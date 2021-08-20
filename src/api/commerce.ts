import Commerce from '@chec/commerce.js';
import { BagItemType, BagType, ProductType } from '../types';

const commerce = new Commerce(process.env.REACT_APP_CHEC_PUBLIC_KEY as string);

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
    quantity: item.quantity,
  }));

  return { id: request.id, subtotal: request.subtotal.raw, items: bagItems };
};
