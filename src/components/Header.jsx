import { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import logo from "../assets/logo.svg";
import styles from "./Header.module.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <a onClick={() => scroll.scrollToTop()}>
          <img src={logo} alt="logo" />
        </a>
      </div>

      <button
        className={`${styles.burger} ${menuOpen ? styles.open : ""}`}
        aria-label="Abrir menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span className={styles.burgerBar}></span>
        <span className={styles.burgerBar}></span>
        <span className={styles.burgerBar}></span>
      </button>

      <nav className={`${styles.navbar} ${menuOpen ? styles.open : ""}`}>
        <ul>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-250}
              className={styles.navigation}
              onClick={handleNavClick}
            >
              <span>01.</span> Sobre
            </Link>
          </li>
          <li>
            <Link
              to="experiences"
              smooth={true}
              duration={500}
              offset={-250}
              className={styles.navigation}
              onClick={handleNavClick}
            >
              <span>02.</span> Experiência
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-250}
              className={styles.navigation}
              onClick={handleNavClick}
            >
              <span>03.</span> Projetos
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className={styles.navigation}
              onClick={handleNavClick}
            >
              <span>04.</span> Contato
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
