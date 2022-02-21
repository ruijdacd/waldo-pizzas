import { useReactiveVar } from "@apollo/client";

import { cartVar } from "@/state/cart";

import styles from "./CartIndicator.module.scss";

export function CartIndicator() {
  const cart = useReactiveVar(cartVar);

  return <span className={styles.root}>{cart.length}</span>;
}
