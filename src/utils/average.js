export function calcDiscount(price, priceAfter) {
  const discount = ((price - priceAfter) / price) * 100;
  return discount.toFixed(0);
}
