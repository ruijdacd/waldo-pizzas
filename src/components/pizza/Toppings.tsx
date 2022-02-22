import { useEffect } from "react";
import { useFieldArray } from "react-hook-form";

import { PizzaSizes } from "@/types/globalTypes";
import { ConfiguratorState } from "@/types/configurator";

import { usePizzaToppings } from "@/queries/usePizzaToppings";

import { Topping } from "./Topping";

import styles from "./Toppings.module.scss";

interface ToppingsProps {
  size: string;
}

export function Toppings({ size }: ToppingsProps) {
  const {
    fields: toppings,
    append,
    remove,
    replace,
  } = useFieldArray<ConfiguratorState>({
    name: "toppings",
  });

  const { pizzaToppings, loading } = usePizzaToppings(
    size.toUpperCase() as PizzaSizes
  );

  const getSelectedIndex = (name: string) => {
    return toppings.findIndex((field) => field.name === name);
  };

  const isSelected = (name: string) => {
    return getSelectedIndex(name) !== -1;
  };

  useEffect(() => {
    if (!pizzaToppings || !pizzaToppings.toppings) return;

    // Initialise default selected toppings based on the selected pizza size
    replace(
      pizzaToppings.toppings
        .filter(({ defaultSelected }) => defaultSelected)
        .map(({ topping }) => ({
          name: topping.name,
          price: topping.price,
        }))
    );
  }, [pizzaToppings]);

  if (loading) return <div>Loading toppings...</div>;

  if (!pizzaToppings) return null;

  return (
    <div className={styles.root}>
      <div>
        Toppings limit:{" "}
        <strong>{pizzaToppings.maxToppings || "Unlimited"}</strong>
      </div>
      <div className={styles.list}>
        {pizzaToppings.toppings.map(({ topping }) => (
          <Topping
            key={topping.name}
            topping={topping}
            reachedMaximum={pizzaToppings.maxToppings === toppings.length}
            isSelected={isSelected(topping.name)}
            onRemove={() => remove(getSelectedIndex(topping.name))}
            onSelect={() =>
              append({ name: topping.name, price: topping.price })
            }
          />
        ))}
      </div>
    </div>
  );
}
