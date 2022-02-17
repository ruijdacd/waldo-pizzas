import { setItemTopping } from "@/state/item";

import { GetPizzaSizeByName_pizzaSizeByName_toppings_topping } from "@/queries/types/GetPizzaSizeByName";

interface ToppingProps {
  topping: GetPizzaSizeByName_pizzaSizeByName_toppings_topping;

  reachedMaximum: boolean;
  isSelected: boolean;
}

export function Topping({ topping, reachedMaximum, isSelected }: ToppingProps) {
  return (
    <fieldset>
      <label>
        <input
          type="checkbox"
          name={`toppings-${topping.name}`}
          value={topping.name}
          checked={isSelected}
          disabled={!isSelected && reachedMaximum}
          onChange={() => setItemTopping(topping, isSelected)}
        />
        <span>{topping.name}</span>
        <span>{topping.price}€</span>
      </label>
    </fieldset>
  );
}
