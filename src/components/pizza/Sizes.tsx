import { useReactiveVar } from "@apollo/client";

import { itemVar } from "@/state/item";

import { usePizzaSizes } from "@/queries/usePizzaSizes";

import { Size } from "./Size";

import styles from "./Sizes.module.scss";

export function Sizes() {
  const { size } = useReactiveVar(itemVar);

  const { pizzaSizes, loading } = usePizzaSizes();

  function isSizeSelected(name: string) {
    return size?.name === name;
  }

  if (loading) return <div>Loading sizes...</div>;

  return (
    <div className={styles.root}>
      {pizzaSizes.map((size) => (
        <Size
          key={size.name}
          isSelected={isSizeSelected(size.name)}
          size={size}
        />
      ))}
    </div>
  );
}
