import { makeVar, useReactiveVar } from "@apollo/client";
import {
  GetPizzaSizeByName_pizzaSizeByName_toppings,
  GetPizzaSizeByName_pizzaSizeByName_toppings_topping,
} from "@/queries/types/GetPizzaSizeByName";
import { GetPizzaSizes_pizzaSizes } from "@/queries/types/GetPizzaSizes";
import { useCallback } from "react";

export type ItemVar = {
  size: GetPizzaSizes_pizzaSizes;
  toppings: GetPizzaSizeByName_pizzaSizeByName_toppings_topping[];
};

export const itemVar = makeVar<ItemVar>({
  size: null,
  toppings: [],
});

export function useItemActions() {
  const initialiseToppings = useCallback(
    (toppings: GetPizzaSizeByName_pizzaSizeByName_toppings[]) => {
      itemVar({
        ...itemVar(),
        toppings: toppings
          .filter(({ defaultSelected }) => defaultSelected)
          .map(({ topping }) => topping),
      });
    },
    []
  );

  const setItemSize = useCallback((size: GetPizzaSizes_pizzaSizes) => {
    itemVar({ ...itemVar(), size });
  }, []);

  const setItemTopping = useCallback(
    (
      topping: GetPizzaSizeByName_pizzaSizeByName_toppings_topping,
      isSelected: boolean
    ) => {
      itemVar({
        ...itemVar(),
        toppings: !isSelected
          ? [...itemVar().toppings, topping]
          : itemVar().toppings.filter((t) => t.name !== topping.name),
      });
    },
    []
  );

  return {
    initialiseToppings,
    setItemSize,
    setItemTopping,
  };
}

export function useItemPrice() {
  const { size, toppings } = useReactiveVar(itemVar);

  const toppingsPrice = toppings.reduce((acc, prev) => (acc += prev.price), 0);

  return size?.basePrice + toppingsPrice;
}
