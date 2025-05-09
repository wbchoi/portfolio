import React from "react";
import styles from "./About.module.css";
import profileImg from "../assets/profile-img.jpg";

const About = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutMeText}>
          <div className={styles.topic}>
            <span>01.</span>
            <h3>About Me</h3>
          </div>
          <p>
            Olá! Sou o <span>Lucas</span>, um <span>Desenvolvedor front-end júnior</span> com experiência como product
            owner. Colaborei com uma equipe global de desenvolvedores, participando ativamente no ciclo de vida do
            produto obtendo insights valiosos colaborando de forma eficaz com os clientes e a equipe.
          </p>
          <p>
            Minha experiência profissional como desenvolvedor inclui alguns projetos freelance e voluntários e projetos
            pessoais que demonstram minhas habilidades em <span>HTML</span>, <span>CSS</span>, <span>JavaScript</span> e
            <span> React</span>.
          </p>
          <p>
            Me considero um pensador criativo que gosta de encontrar soluções inovadoras e estou ansioso por novas
            oportunidades de crescer e causar impacto no setor da tecnologia!
          </p>
        </div>
        <div className={styles.aboutMeImage}>
          <img src={profileImg} alt="Imagem de perfil" />
        </div>
      </div>
    </section>
  );
};

export default About;
