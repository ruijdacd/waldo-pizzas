import clsx from "clsx";

import { formatPrice } from "@/utils/price";

import { GetPizzaSizeByName_pizzaSizeByName_toppings_topping } from "@/queries/types/GetPizzaSizeByName";

import styles from "./Topping.module.scss";

interface ToppingProps {
  topping: GetPizzaSizeByName_pizzaSizeByName_toppings_topping;

  reachedMaximum: boolean;
  isSelected: boolean;

  onRemove: () => void;
  onSelect: () => void;
}

export function Topping({
  topping,
  reachedMaximum,
  isSelected,
  onRemove,
  onSelect,
}: ToppingProps) {
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
        name="toppings"
        value={topping.name}
        disabled={isDisabled}
        checked={isSelected}
        onChange={(e) => {
          if (e.target.checked) {
            onSelect();
          } else {
            onRemove();
          }
        }}
      />
      <div>
        <div className={styles.name}>{topping.name}</div>
        <div className={styles.price}>{formatPrice(topping.price)}</div>
      </div>
    </label>
  );
}
