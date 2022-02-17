import { useReactiveVar } from "@apollo/client";

import { itemVar, setItemSize } from "@/state/item";

import { usePizzaSizes } from "@/queries/usePizzaSizes";

export function Sizes() {
  const { size } = useReactiveVar(itemVar);

  const { pizzaSizes, loading } = usePizzaSizes();

  function isSizeSelected(name: string) {
    return size?.name === name;
  }

  if (loading) return <div>Loading sizes...</div>;

  return (
    <div>
      {pizzaSizes.map((size) => (
        <div key={size.name}>
          <label>
            <input
              type="radio"
              name="size"
              value={size.name}
              checked={isSizeSelected(size.name)}
              onChange={() => setItemSize(size)}
              required
            />
            <span>{size.name}</span>
          </label>
          <div>Starting at {size.basePrice}€</div>
        </div>
      ))}
    </div>
  );
}
