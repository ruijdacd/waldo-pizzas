import { useMemo } from "react";
import { useReactiveVar } from "@apollo/client";

import { cartVar, useCartActions } from "@/state/cart";
import { formatPrice } from "@/utils/price";

export function Cart() {
  const { removeFromCart } = useCartActions();
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
          <h2>{cart.length} pizzas in your cart</h2>

          <div style={{ display: "grid", gap: 16 }}>
            {cart.map((item) => (
              <div key={item.id}>
                <div>Size: {item.size.name}</div>
                <div>
                  Toppings:{" "}
                  {item.toppings.map((topping) => topping.name).join(", ")}
                </div>
                <div>Price: {formatPrice(item.price)}</div>
                <button type="button" onClick={() => removeFromCart(item.id)}>
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div>
            Total: <strong>{formatPrice(cartTotal)}</strong>
          </div>
        </div>
      )}
    </div>
  );
}
