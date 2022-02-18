import { useEffect } from "react";
import { useReactiveVar } from "@apollo/client";

import { PizzaSizes } from "@/types/globalTypes";

import { initialiseToppings, itemVar } from "@/state/item";

import { usePizzaToppings } from "@/queries/usePizzaToppings";

import { Topping } from "./Topping";

export function Toppings() {
  const { size, toppings } = useReactiveVar(itemVar);

  const { pizzaToppings, loading } = usePizzaToppings(
    size?.name.toUpperCase() as PizzaSizes
  );

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
    <div>
      <div>
        Toppings limit:{" "}
        <strong>{pizzaToppings.maxToppings || "Unlimited"}</strong>
      </div>
      <div>
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
