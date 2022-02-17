import Link from "next/link";

export function Nav() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/cart">Cart</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
