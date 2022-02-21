import Link from "next/link";
import { useRouter } from "next/router";
import clsx from "clsx";

import { Container } from "./Container";

import styles from "./Header.module.scss";
import { CartIndicator } from "./CartIndicator";

export function Header() {
  const { pathname } = useRouter();

  return (
    <header className={styles.root}>
      <Container>
        <nav className={styles.nav}>
          <Link href="/" passHref>
            <a className={clsx(styles.link, styles.linkActive)}>
              <strong>Waldo Pizzas</strong>
            </a>
          </Link>
          <Link href="/cart" passHref>
            <a
              className={clsx(styles.link, {
                [styles.linkActive]: pathname === "/cart",
              })}
            >
              Cart <CartIndicator />
            </a>
          </Link>
        </nav>
      </Container>
    </header>
  );
}
