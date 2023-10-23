import React from "react";
import Link from "next/link";

import styles from "./styles.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      Made with ❤️ by&nbsp;
      <Link href="https://www.linkedin.com/in/selim-can-sa%C4%9Fdi%C3%A7-550548248/" target="_blank">
        Selim Can Sağdıç
      </Link>
    </footer>
  );
}

export default Footer ;