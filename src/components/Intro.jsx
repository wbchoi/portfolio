import { TypeAnimation } from "react-type-animation";
import styles from "./Intro.module.css";

const Intro = () => {
  return (
    <section className={`${styles.introSection} reveal`}>
      <TypeAnimation
        sequence={[
          "Olá, meu nome é",
          1500,
          "",
          800,
          "Prazer em te ver por aqui!",
          1500,
          "",
          800,
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
        className={styles.typingText}
      />

      <h1>Lucas Choi.</h1>
      <h2>Desenvolvedor front end.</h2>
      <p>
        Sou um desenvolvedor front-end júnior com foco em criar interfaces web
        responsivas, acessíveis e centradas no usuário. Possuo conhecimentos em{" "}
        <span>HTML</span>, <span>CSS</span>, <span>JavaScript</span> e{" "}
        <span>React</span>. Estou sempre em busca de aprimorar minhas
        habilidades técnicas e colaborar em projetos que proporcionem boas
        experiências digitais. Comprometido com a aprendizagem contínua, gosto
        de transformar ideias em soluções visuais funcionais.
      </p>
    </section>
  );
};

export default Intro;
