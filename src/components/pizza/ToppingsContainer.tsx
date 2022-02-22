import { useFormContext } from "react-hook-form";

import { ConfiguratorState } from "@/types/configurator";

import { Toppings } from "./Toppings";

export function ToppingsContainer() {
  const { watch } = useFormContext<ConfiguratorState>();

  const size = watch("size");

  if (!size) return null;

  return <Toppings size={size.name} />;
}
