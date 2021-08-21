const formatPrice = (symbol: string, price: number) =>
  `${symbol}${price.toFixed(2)}`;

export const formatPriceEGP = formatPrice.bind(null, '£');
