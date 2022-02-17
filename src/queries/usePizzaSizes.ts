import { gql, useQuery } from "@apollo/client";

import { GetPizzaSizes } from "./types/GetPizzaSizes";

export const GET_PIZZA_SIZES = gql`
  query GetPizzaSizes {
    pizzaSizes {
      name
      basePrice
    }
  }
`;

export function usePizzaSizes() {
  const { data, loading, error } = useQuery<GetPizzaSizes>(GET_PIZZA_SIZES);

  return {
    pizzaSizes: data?.pizzaSizes || [],
    loading,
    error,
  };
}
