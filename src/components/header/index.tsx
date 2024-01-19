import React from "react";

import styles from "./styles.module.css";

function Header() {
  return (
    <header className={`${styles.header} container fluid`}>
      <div className={styles.headerWrapper}>
        HubX - Frontend Assignment
      </div>
    </header>
  );
}

export { Header };
