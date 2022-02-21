import { useCallback } from "react";

import { useCartActions } from "@/state/cart";

import { AddToCart } from "./AddToCart";
import { Sizes } from "./Sizes";
import { Toppings } from "./Toppings";

import styles from "./Configurator.module.scss";

export function Configurator() {
  const { addToCart } = useCartActions();

  const onSubmit = useCallback((e) => {
    e.preventDefault();

    addToCart();
  }, []);

  return (
    <form className={styles.root} onSubmit={onSubmit}>
      <Sizes />

      <Toppings />

      <AddToCart />
    </form>
  );
}
