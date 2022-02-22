import clsx from "clsx";
import { useFormContext } from "react-hook-form";

import { GetPizzaSizes_pizzaSizes } from "@/queries/types/GetPizzaSizes";

import { ConfiguratorState } from "@/types/configurator";

import styles from "./Size.module.scss";

interface SizeProps {
  isSelected: boolean;

  size: GetPizzaSizes_pizzaSizes;
}

export function Size({ isSelected, size }: SizeProps) {
  const { setValue } = useFormContext<ConfiguratorState>();

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
        required
        checked={isSelected}
        onChange={(e) => {
          setValue("size", {
            name: e.target.value,
            price: size.basePrice,
          });
        }}
      />
      <div>
        <div className={styles.name}>{size.name}</div>
        <div className={styles.price}>Starting from {size.basePrice}€</div>
      </div>
    </label>
  );
}
