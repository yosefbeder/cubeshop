export type StatusType = 'loading' | 'loaded' | 'failed';

export interface ProductType {
  id: string;
  description: string;
  imgSrcs: string[];
  name: string;
  price: number;
  available: number;
}

export interface BagItemType {
  id: string;
  productId: string;
  imgSrc: string;
  name: string;
  price: number;
  available: number;
  quantity: number;
}

export interface BagType {
  id: string;
  subtotal: number;
  items: BagItemType[];
}
