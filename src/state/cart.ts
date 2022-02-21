import { makeVar } from "@apollo/client";

import { GetPizzaSizeByName_pizzaSizeByName_toppings_topping } from "@/queries/types/GetPizzaSizeByName";
import { GetPizzaSizes_pizzaSizes } from "@/queries/types/GetPizzaSizes";

import { itemVar, useItemPrice } from "./item";
import { useCallback } from "react";

export type ItemVar = {
  size: GetPizzaSizes_pizzaSizes;
  toppings: GetPizzaSizeByName_pizzaSizeByName_toppings_topping[];
};

export type CartVar = (ItemVar & {
  id: number;
  price: number;
})[];

export const cartVar = makeVar<CartVar>([]);

export function useCartActions() {
  const price = useItemPrice();

  const addToCart = useCallback(() => {
    cartVar([
      ...cartVar(),
      {
        ...itemVar(),
        id: Date.now(),
        price,
      },
    ]);
  }, [price]);

  const removeFromCart = useCallback((id: number) => {
    cartVar([...cartVar().filter((item) => item.id !== id)]);
  }, []);

  return {
    addToCart,
    removeFromCart,
  };
}
