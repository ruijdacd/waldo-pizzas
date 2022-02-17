import { makeVar } from "@apollo/client";

import { GetPizzaSizeByName_pizzaSizeByName_toppings_topping } from "@/queries/types/GetPizzaSizeByName";
import { GetPizzaSizes_pizzaSizes } from "@/queries/types/GetPizzaSizes";

import { itemVar } from "./item";

export type ItemVar = {
  size: GetPizzaSizes_pizzaSizes;
  toppings: GetPizzaSizeByName_pizzaSizeByName_toppings_topping[];
};

export type CartVar = (ItemVar & {
  id: number;
  price: number;
})[];

export const cartVar = makeVar<CartVar>([]);

export function addItemToCart() {
  const { toppings, size } = itemVar();

  const toppingsPrice = toppings.reduce((acc, prev) => (acc += prev.price), 0);

  const price = size.basePrice + toppingsPrice;

  cartVar([
    ...cartVar(),
    {
      ...itemVar(),
      id: Date.now(),
      price,
    },
  ]);
}

export function removeItemFromCart(id: number) {
  cartVar([...cartVar().filter((item) => item.id !== id)]);
}
