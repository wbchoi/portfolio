import React from "react";
import logo from "../assets/logo.svg";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <a href="#">
          <img src={logo} alt="logo" />
        </a>
      </div>

      <nav>
        <ul className={styles.navbar}>
          <li>
            <span>01.</span> Sobre
          </li>
          <li>
            <span>02.</span> Experiência
          </li>
          <li>
            <span>03.</span> Projetos
          </li>
          <li>
            <span>04.</span> Contato
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
