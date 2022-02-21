import clsx from "clsx";

import { useItemActions } from "@/state/item";

import { formatPrice } from "@/utils/price";

import { GetPizzaSizeByName_pizzaSizeByName_toppings_topping } from "@/queries/types/GetPizzaSizeByName";

import styles from "./Topping.module.scss";

interface ToppingProps {
  topping: GetPizzaSizeByName_pizzaSizeByName_toppings_topping;

  reachedMaximum: boolean;
  isSelected: boolean;
}

export function Topping({ topping, reachedMaximum, isSelected }: ToppingProps) {
  const { setItemTopping } = useItemActions();

  const isDisabled = !isSelected && reachedMaximum;

  return (
    <label
      className={clsx(styles.root, {
        [styles.disabled]: isDisabled,
        [styles.selected]: isSelected,
      })}
    >
      <input
        type="checkbox"
        name={`toppings-${topping.name}`}
        value={topping.name}
        checked={isSelected}
        disabled={!isSelected && reachedMaximum}
        onChange={() => setItemTopping(topping, isSelected)}
      />
      <div>
        <div className={styles.name}>{topping.name}</div>
        <div className={styles.price}>{formatPrice(topping.price)}</div>
      </div>
    </label>
  );
}
