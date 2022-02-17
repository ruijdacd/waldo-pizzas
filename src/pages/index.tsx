import { Nav } from "@/components/Nav";

import { Configurator } from "@/components/pizza/Configurator";

export default function IndexPage() {
  return (
    <div>
      <Nav />

      <h1>Home</h1>

      <Configurator />
    </div>
  );
}
