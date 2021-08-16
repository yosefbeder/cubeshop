export const formatPrice = (symbol: string, price: number) =>
  `${symbol}${price.toFixed(2)}`;
