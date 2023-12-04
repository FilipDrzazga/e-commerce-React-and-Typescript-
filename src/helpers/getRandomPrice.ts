export const getRandomPrice = (): string => {
  const randomPrice = Math.random() * 40.99 + 10;
  const roundedPrice = parseFloat(randomPrice.toFixed(2));
  return "£" + roundedPrice;
};
