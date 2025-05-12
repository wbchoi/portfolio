import { Link, animateScroll as scroll } from "react-scroll";
import logo from "../assets/logo.svg";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <a onClick={() => scroll.scrollToTop()}>
          <img src={logo} alt="logo" />
        </a>
      </div>

      <nav>
        <ul className={styles.navbar}>
          <li>
            <Link to="about" smooth={true} duration={500} offset={-250} className={styles.navigation}>
              <span>01.</span> Sobre
            </Link>
          </li>
          <li>
            <Link to="experiences" smooth={true} duration={500} offset={-250} className={styles.navigation}>
              <span>02.</span> Experiência
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500} offset={-250} className={styles.navigation}>
              <span>03.</span> Projetos
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} className={styles.navigation}>
              <span>04.</span> Contato
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
