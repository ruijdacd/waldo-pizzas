import { Container } from "@/components/Container";
import { Header } from "@/components/Header";

import { Configurator } from "@/components/pizza/Configurator";

export default function IndexPage() {
  return (
    <div>
      <Header />

      <Container>
        <h1>World's Best Pizza</h1>

        <Configurator />
      </Container>
    </div>
  );
}
