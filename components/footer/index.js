import React from "react";
import Link from "next/link";

import styles from "./styles.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      Made with ❤️ by&nbsp;
      <Link href="https://twitter.com/selim_scs1907" target="_blank">
        Selim Can Sağdıç
      </Link>
    </footer>
  );
}

export default Footer ;