import { useFormContext } from "react-hook-form";

import { usePizzaSizes } from "@/queries/usePizzaSizes";
import { ConfiguratorState } from "@/types/configurator";

import { Size } from "./Size";

import styles from "./Sizes.module.scss";

export function Sizes() {
  const { watch } = useFormContext<ConfiguratorState>();

  const size = watch("size");

  const { pizzaSizes, loading } = usePizzaSizes();

  if (loading) return <div>Loading sizes...</div>;

  return (
    <div className={styles.root}>
      {pizzaSizes.map((s) => (
        <Size key={s.name} isSelected={s.name === size?.name} size={s} />
      ))}
    </div>
  );
}
