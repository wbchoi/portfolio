import React from "react";
import styles from "./Projects.module.css";
import bikcraft from "../assets/bikcraftPrev.png";
import eShop from "../assets/eShopPrev.png";
import riddle from "../assets/riddlePrev.png";
import githubLogo from "../assets/icon-github.svg";
import externalIcon from "../assets/icon-external-link.svg";

const Projects = () => {
  return (
    <section className={`${styles.projectsSection} reveal`} id="projects">
      <div className={styles.topic}>
        <span>03.</span>
        <h3>Projetos</h3>
      </div>
      <div className={styles.projectContainer}>
        <div className={styles.projectPreview}>
          <a href="https://wbchoi.github.io/bikcraft/" target="_blank">
            <img src={bikcraft} alt="Projeto bikcraft" />
          </a>
        </div>
        <div className={styles.projectDetails}>
          <span>Projeto</span>
          <h4>Bikcraft</h4>
          <div className={styles.projectDescription}>
            <p>
              Venda e serviços para bicicletas personalizadas. <br /> Projeto
              desenvolvido para estudo das tecnologias <span>HTML</span>,{" "}
              <span>CSS</span> e <span>Javascript</span>.
            </p>
          </div>
          <div className={styles.projectStacks}>
            <p>HTML</p>
            <p>CSS</p>
            <p>JS</p>
          </div>
          <div className={styles.projectView}>
            <a href="https://github.com/wbchoi/bikcraft" target="_blank">
              <img src={githubLogo} alt="Link para github" />
            </a>
            <a href="https://wbchoi.github.io/bikcraft/" target="_blank">
              <img src={externalIcon} alt="Link para o projeto" />
            </a>
          </div>
        </div>
      </div>

      <div className={`${styles.projectContainer} ${styles.inverted}`}>
        <div className={styles.projectPreview}>
          <a href="https://wbchoi.github.io/avanti-eShop/" target="_blank">
            <img src={eShop} alt="Projeto eShop" />
          </a>
        </div>
        <div className={styles.projectDetails}>
          <span>Projeto</span>
          <h4>eShop</h4>
          <div className={styles.projectDescription}>
            <p>
              Website responsivo para um e-commerce. <br /> O projeto
              desenvolvido foi parte de um processo seletivo utilizando as
              tecnologias <span>HTML</span>, <span>CSS</span>,{" "}
              <span>Javascript</span> e <span>React</span>.
            </p>
          </div>
          <div className={styles.projectStacks}>
            <p>HTML</p>
            <p>CSS</p>
            <p>JS</p>
            <p>React</p>
          </div>
          <div className={styles.projectView}>
            <a href="https://github.com/wbchoi/avanti-eShop" target="_blank">
              <img src={githubLogo} alt="Link para github" />
            </a>
            <a href="https://wbchoi.github.io/avanti-eShop/" target="_blank">
              <img src={externalIcon} alt="Link para o projeto" />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.projectContainer}>
        <div className={styles.projectPreview}>
          <a href="https://riddle-game-five.vercel.app/" target="_blank">
            <img src={riddle} alt="Projeto riddle game" />
          </a>
        </div>
        <div className={styles.projectDetails}>
          <span>Projeto</span>
          <h4>Riddle game</h4>
          <div className={styles.projectDescription}>
            <p>
              Jogo de adivinhação de palavras desenvolvido com as tecnologias{" "}
              <span>HTML</span>, <span>CSS</span>, <span>Javascript</span>,{" "}
              <span>React</span> e <span>Typescript</span>.
            </p>
          </div>
          <div className={styles.projectStacks}>
            <p>HTML</p>
            <p>CSS</p>
            <p>JS</p>
            <p>React</p>
            <p>TS</p>
          </div>
          <div className={styles.projectView}>
            <a href="https://github.com/wbchoi/riddle-game" target="_blank">
              <img src={githubLogo} alt="Link para github" />
            </a>
            <a href="https://riddle-game-five.vercel.app/" target="_blank">
              <img src={externalIcon} alt="Link para o projeto" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
