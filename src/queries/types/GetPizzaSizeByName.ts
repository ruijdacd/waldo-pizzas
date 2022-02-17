/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PizzaSizes } from "./../../types/globalTypes";

// ====================================================
// GraphQL query operation: GetPizzaSizeByName
// ====================================================

export interface GetPizzaSizeByName_pizzaSizeByName_toppings_topping {
  __typename: "topping";
  /**
   * The name of the topping
   */
  name: string;
  /**
   * How much this topping costs
   */
  price: number;
}

export interface GetPizzaSizeByName_pizzaSizeByName_toppings {
  __typename: "pizzaToppingConnection";
  /**
   * The topping
   */
  topping: GetPizzaSizeByName_pizzaSizeByName_toppings_topping;
  /**
   * whether or not this topping should be selected by default for this pizza
   */
  defaultSelected: boolean;
}

export interface GetPizzaSizeByName_pizzaSizeByName {
  __typename: "pizzaSize";
  /**
   * The size of the pizza
   */
  name: string;
  /**
   * Max number of allowable toppings.
   */
  maxToppings: number | null;
  /**
   * Base price of the pie - sans toppings
   */
  basePrice: number;
  /**
   * Toppings allowed on this pizza, and whether or not they're default selected
   */
  toppings: (GetPizzaSizeByName_pizzaSizeByName_toppings | null)[];
}

export interface GetPizzaSizeByName {
  /**
   * Pizza size by name
   */
  pizzaSizeByName: GetPizzaSizeByName_pizzaSizeByName | null;
}

export interface GetPizzaSizeByNameVariables {
  name?: PizzaSizes | null;
}
