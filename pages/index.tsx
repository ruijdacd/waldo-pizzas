import Link from "next/link";

import { usePizzaSizes } from "../queries/usePizzaSizes";

export default function IndexPage() {
  usePizzaSizes();

  return (
    <div>
      Hello World.{" "}
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  );
}
