export type StatusType = 'loading' | 'loaded' | 'failed';

export interface ProductType {
  id: string;
  imgSrc: string;
  name: string;
  price: number;
  available: number;
}

export interface BagItemType extends ProductType {
  quantity: number;
}

export interface BagType {
  id: string;
  subtotal: number;
  items: BagItemType[];
}
