export function formatPrice(price: number) {
  return Intl.NumberFormat("en", {
    style: "currency",
    currency: "EUR",
  }).format(price);
}
