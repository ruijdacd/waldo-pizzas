import { useItemPrice } from "@/state/item";

import { formatPrice } from "@/utils/price";

import { Button } from "../Button";

export function AddToCart() {
  const price = useItemPrice();

  let buttonLabel = "Add to cart";

  if (price > 0) {
    buttonLabel += ` • ${formatPrice(price)}`;
  }

  return <Button type="submit">{buttonLabel}</Button>;
}
