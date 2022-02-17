import { makeVar } from "@apollo/client";
import {
  GetPizzaSizeByName_pizzaSizeByName_toppings,
  GetPizzaSizeByName_pizzaSizeByName_toppings_topping,
} from "@/queries/types/GetPizzaSizeByName";
import { GetPizzaSizes_pizzaSizes } from "@/queries/types/GetPizzaSizes";

export type ItemVar = {
  size: GetPizzaSizes_pizzaSizes;
  toppings: GetPizzaSizeByName_pizzaSizeByName_toppings_topping[];
};

export const itemVar = makeVar<ItemVar>({
  size: null,
  toppings: [],
});

export function initialiseToppings(
  toppings: GetPizzaSizeByName_pizzaSizeByName_toppings[]
) {
  itemVar({
    ...itemVar(),
    toppings: toppings
      .filter(({ defaultSelected }) => defaultSelected)
      .map(({ topping }) => topping),
  });
}

export function setItemSize(size: GetPizzaSizes_pizzaSizes) {
  itemVar({ ...itemVar(), size });
}

export function setItemTopping(
  topping: GetPizzaSizeByName_pizzaSizeByName_toppings_topping,
  isSelected: boolean
) {
  itemVar({
    ...itemVar(),
    toppings: !isSelected
      ? [...itemVar().toppings, topping]
      : itemVar().toppings.filter((t) => t.name !== topping.name),
  });
}
