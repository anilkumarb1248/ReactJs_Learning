import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div>
      <footer>
        <h1>Footer Component </h1>
        <p className={styles.paragraph}>
          Footer Content goes in the footer section
        </p>
      </footer>
    </div>
  );
}

export default Footer;
