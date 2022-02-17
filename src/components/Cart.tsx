import { useMemo } from "react";
import { useReactiveVar } from "@apollo/client";

import { cartVar, removeItemFromCart } from "@/state/cart";

export function Cart() {
  const cart = useReactiveVar(cartVar);

  const cartTotal = useMemo(
    () => cart.reduce((acc, item) => (acc += item.price), 0),
    [cart]
  );

  return (
    <div>
      {cart.length === 0 ? (
        <p>No items in your cart</p>
      ) : (
        <div style={{ display: "grid", gap: 32 }}>
          <div style={{ display: "grid", gap: 16 }}>
            {cart.map((item) => (
              <div key={item.id}>
                <div>Size: {item.size.name}</div>
                <div>
                  Toppings:{" "}
                  {item.toppings.map((topping) => topping.name).join(", ")}
                </div>
                <div>Price: {item.price}€</div>
                <button
                  type="button"
                  onClick={() => removeItemFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div>
            Total: <strong>{cartTotal}€</strong>
          </div>
        </div>
      )}
    </div>
  );
}
