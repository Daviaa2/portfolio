import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer-links"]}>
        <a
          href="https://github.com/Daviaa2"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/a-davie"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a href="mailto: Andav529@gmail.com">Email</a>
      </div>
      <div className={styles["footer-copy"]}>
        © {new Date().getFullYear()} Andrew Davie. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
