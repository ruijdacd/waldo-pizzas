import { useCallback } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { ConfiguratorState } from "@/types/configurator";

import { calculateItemTotalPrice } from "@/utils/price";

import { useCartActions } from "@/state/cart";

import { AddToCart } from "./AddToCart";
import { Sizes } from "./Sizes";
import { ToppingsContainer } from "./ToppingsContainer";

import styles from "./Configurator.module.scss";

export function Configurator() {
  const methods = useForm<ConfiguratorState>({
    defaultValues: {
      size: null,
      toppings: [],
    },
  });

  const { addToCart } = useCartActions();

  const onSubmit = useCallback(({ size, toppings }: ConfiguratorState) => {
    const price = calculateItemTotalPrice(size, toppings);

    addToCart(
      size.name,
      toppings.map((topping) => topping.name),
      price
    );
  }, []);

  return (
    <FormProvider {...methods}>
      <form className={styles.root} onSubmit={methods.handleSubmit(onSubmit)}>
        <Sizes />

        <ToppingsContainer />

        <AddToCart />
      </form>
    </FormProvider>
  );
}
