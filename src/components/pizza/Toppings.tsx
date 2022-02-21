import { useEffect } from "react";
import { useReactiveVar } from "@apollo/client";

import { PizzaSizes } from "@/types/globalTypes";

import { itemVar, useItemActions } from "@/state/item";

import { usePizzaToppings } from "@/queries/usePizzaToppings";

import { Topping } from "./Topping";

import styles from "./Toppings.module.scss";

export function Toppings() {
  const { size, toppings } = useReactiveVar(itemVar);

  const { pizzaToppings, loading } = usePizzaToppings(
    size?.name.toUpperCase() as PizzaSizes
  );

  const { initialiseToppings } = useItemActions();

  function isToppingSelected(name: string) {
    return !!toppings.find((t) => t.name === name);
  }

  useEffect(() => {
    if (!pizzaToppings || !pizzaToppings.toppings) return;

    // Initialise default selected toppings based on the selected pizza size
    initialiseToppings(pizzaToppings.toppings);
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
            isSelected={isToppingSelected(topping.name)}
          />
        ))}
      </div>
    </div>
  );
}
