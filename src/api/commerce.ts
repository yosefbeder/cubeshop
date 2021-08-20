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
      assets,
      name,
      description,
      price: { raw: price },
      inventory: { available },
    }) => ({
      id,
      imgSrcs: assets.map(asset => asset.url),
      name,
      description: description
        .replace(/<p>/g, '<p class="p-1">')
        .replace(/<\/?ul>/g, ''),
      price,
      available,
    }),
  );
};

// BAG
export const getBag = async (products: ProductType[]): Promise<BagType> => {
  const request = await commerce.cart.retrieve();

  const bagItems: BagItemType[] = request.line_items.map((item, index) => {
    const { id: productId, name, price, available, imgSrcs } = products[index];

    return {
      id: item.id,
      productId,
      name,
      price,
      available,
      quantity: item.quantity,
      imgSrc: imgSrcs[0],
    };
  });

  return { id: request.id, subtotal: request.subtotal.raw, items: bagItems };
};
