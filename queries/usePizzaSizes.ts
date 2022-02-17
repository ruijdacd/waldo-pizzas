import { gql, useQuery } from "@apollo/client";

const GET_PIZZA_SIZES = gql`
  query GetPizzaSizes {
    pizzaSizes {
      name
      basePrice
    }
  }
`;

export function usePizzaSizes() {
  const { data, loading, error } = useQuery(GET_PIZZA_SIZES);

  console.log(data, loading, error);
}
