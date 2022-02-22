import { makeVar } from "@apollo/client";

import { useCallback } from "react";

export type CartVar = {
  id: number;
  size: string;
  toppings: string[];
  price: number;
}[];

export const cartVar = makeVar<CartVar>([]);

export function useCartActions() {
  const addToCart = useCallback(
    (size: string, toppings: string[], price: number) => {
      cartVar([
        ...cartVar(),
        {
          id: Date.now(),
          size,
          toppings,
          price,
        },
      ]);
    },
    []
  );

  const removeFromCart = useCallback((id: number) => {
    cartVar([...cartVar().filter((item) => item.id !== id)]);
  }, []);

  return {
    addToCart,
    removeFromCart,
  };
}
