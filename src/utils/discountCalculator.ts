export const discountCalculator = (
  price: number,
  discountPercentage: number
): number => {
  return Number(((price * (100 - discountPercentage)) / 100).toFixed(2));
};
