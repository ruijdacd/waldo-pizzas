/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetPizzaSizes
// ====================================================

export interface GetPizzaSizes_pizzaSizes {
  __typename: "pizzaSize";
  /**
   * The size of the pizza
   */
  name: string;
  /**
   * Base price of the pie - sans toppings
   */
  basePrice: number;
}

export interface GetPizzaSizes {
  /**
   * All available pizza sizes
   */
  pizzaSizes: (GetPizzaSizes_pizzaSizes | null)[];
}
