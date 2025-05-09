import Header from "./components/Header";
import styles from "./App.module.css";
import Intro from "./components/Intro";
import About from "./components/About";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Intro />
      <About />
      <Experiences />
      <Projects />
    </div>
  );
}

export default App;
