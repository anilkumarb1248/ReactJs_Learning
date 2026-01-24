import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <div>
      <header>
        <h1>Header Component </h1>
        <p className={styles.paragraph}>
          Header Content goes in the header section
        </p>
      </header>
    </div>
  );
}

export default Header;
