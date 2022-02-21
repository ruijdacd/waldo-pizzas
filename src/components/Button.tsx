import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

import styles from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button {...props} className={clsx(styles.root)}>
      {children}
    </button>
  );
}
