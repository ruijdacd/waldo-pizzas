import clsx from "clsx";

import { useItemActions } from "@/state/item";

import { GetPizzaSizes_pizzaSizes } from "@/queries/types/GetPizzaSizes";

import styles from "./Size.module.scss";

interface SizeProps {
  isSelected: boolean;

  size: GetPizzaSizes_pizzaSizes;
}

export function Size({ isSelected, size }: SizeProps) {
  const { setItemSize } = useItemActions();

  return (
    <label
      className={clsx(styles.root, {
        [styles.selected]: isSelected,
      })}
    >
      <input
        type="radio"
        name="size"
        value={size.name}
        checked={isSelected}
        onChange={() => setItemSize(size)}
        required
      />
      <div>
        <div className={styles.name}>{size.name}</div>
        <div className={styles.price}>Starting from {size.basePrice}€</div>
      </div>
    </label>
  );
}
