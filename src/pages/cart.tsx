import { Header } from "@/components/Header";

import { Cart } from "@/components/Cart";
import { Container } from "@/components/Container";

export default function CartPage() {
  return (
    <div>
      <Header />

      <Container>
        <h1>Cart</h1>

        <Cart />
      </Container>
    </div>
  );
}
