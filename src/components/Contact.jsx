import styles from "./Contact.module.css";
import whatsIcon from "../assets/icons-whats.svg";
import emailIcon from "../assets/icons-email.svg";
import linkedinIcon from "../assets/icons-linkedin.svg";

const Contact = () => {
  return (
    <section className={styles.contactSection} id="contact">
      <div className={styles.contactContainer}>
        <div className={styles.topic}>
          <span>04.</span>
          <h3>Entre em contato</h3>
        </div>
        <div className={styles.contactInfo}>
          <p>Caso queira entrar em contato comigo, me mande uma mensagem!</p>
          <div className={styles.contacts}>
            <img src={whatsIcon} alt="" />
            <p>+55 (11) 97529-7260</p>
          </div>
          <div className={styles.contacts}>
            <img src={emailIcon} alt="" />
            <p>lwbc96@gmail.com || wonbo1.dev@gmail.com</p>
          </div>
          <div className={styles.contacts}>
            <img src={linkedinIcon} alt="" />
            <a href="https://www.linkedin.com/in/lucaswchoi/" target="_blank">
              https://www.linkedin.com/in/lucaswchoi/
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
