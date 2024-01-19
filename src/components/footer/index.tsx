import React from "react";

import styles from "./styles.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      Made with ❤️ by&nbsp;
      <a href="https://www.linkedin.com/in/volkan-ugur-arslan/" target="_blank" rel="noreferrer">
        Volkan Arslan
      </a>
    </footer>
  );
}

export { Footer };
