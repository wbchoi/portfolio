import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import Header from "./components/Header";
import styles from "./App.module.css";
import Intro from "./components/Intro";
import About from "./components/About";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    ScrollReveal().reveal(".reveal", {
      distance: "20px",
      duration: 1000,
      easing: "ease-in-out",
      origin: "left",
      reset: true,
      interval: 100,
    });
  }, []);

  return (
    <div className={styles.app}>
      <Header />
      <Intro />
      <About />
      <Experiences />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
