import { ConfiguratorState } from "@/types/configurator";

export function formatPrice(price: number) {
  return Intl.NumberFormat("en", {
    style: "currency",
    currency: "EUR",
  }).format(price);
}

export function calculateItemTotalPrice(
  size: ConfiguratorState["size"],
  toppings: ConfiguratorState["toppings"]
) {
  if (!size) return null;

  const toppingsPrice = toppings.reduce((acc, { price }) => (acc += price), 0);

  return size.price + toppingsPrice;
}
