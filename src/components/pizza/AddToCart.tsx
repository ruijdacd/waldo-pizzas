import { useMemo } from "react";
import { useFormContext } from "react-hook-form";

import { ConfiguratorState } from "@/types/configurator";

import { formatPrice, calculateItemTotalPrice } from "@/utils/price";

import { Button } from "../Button";

export function AddToCart() {
  const { watch } = useFormContext<ConfiguratorState>();

  const { size, toppings } = watch();

  const price = useMemo(
    () => calculateItemTotalPrice(size, toppings),
    [size, toppings]
  );

  let buttonLabel = "Add to cart";

  if (price > 0) {
    buttonLabel += ` • ${formatPrice(price)}`;
  }

  return <Button type="submit">{buttonLabel}</Button>;
}
