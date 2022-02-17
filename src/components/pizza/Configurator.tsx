import { useCallback } from "react";

import { addItemToCart } from "@/state/cart";

import { Sizes } from "./Sizes";
import { Toppings } from "./Toppings";

export function Configurator() {
  const onSubmit = useCallback((e) => {
    e.preventDefault();

    addItemToCart();
  }, []);

  return (
    <form onSubmit={onSubmit}>
      <div style={{ display: "grid", gap: "1rem" }}>
        <Sizes />

        <Toppings />

        <button type="submit">Add to cart</button>
      </div>
    </form>
  );
}
