import { gql, useLazyQuery } from "@apollo/client";
import { useEffect } from "react";

import { PizzaSizes } from "@/types/globalTypes";

import {
  GetPizzaSizeByName,
  GetPizzaSizeByNameVariables,
} from "./types/GetPizzaSizeByName";

export const GET_PIZZA_TOPPINGS_BY_SIZE = gql`
  query GetPizzaToppingsBySize($name: PizzaSizes) {
    pizzaSizeByName(name: $name) {
      maxToppings
      toppings {
        topping {
          name
          price
        }
        defaultSelected
      }
    }
  }
`;

export function usePizzaToppings(name: PizzaSizes) {
  const [loadToppings, { data, loading, error }] = useLazyQuery<
    GetPizzaSizeByName,
    GetPizzaSizeByNameVariables
  >(GET_PIZZA_TOPPINGS_BY_SIZE, {
    variables: {
      name,
    },
  });

  useEffect(() => {
    if (!name) return;

    loadToppings();
  }, [name]);

  return {
    pizzaToppings: data?.pizzaSizeByName,

    loading,
    error,
  };
}
