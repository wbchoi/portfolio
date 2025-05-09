import React from "react";
import styles from "./Experiences.module.css";

const Experiences = () => {
  return (
    <section className={styles.experiencesSection}>
      <div className={styles.experiencesContainer}>
        <div className={styles.topic}>
          <span>02.</span>
          <h3>Experiências profissionais</h3>
        </div>
        <div className={styles.experiences}>
          <div className={styles.company}>
            <span>klavi</span>
          </div>
          <div className={styles.jobDetails}>
            <div className={styles.role}>
              <p>Product Owner</p>
              <span>Out 2022 - Out 2023</span>
            </div>
            <div className={styles.jobDescription}>
              <ul>
                <li>Gerenciamento do backlog do produto</li>
                <li>Análise de desempenho</li>
                <li>Coleta e organização dos requisitos dos clientes para um projeto específico</li>
                <li>Tomada de decisões</li>
                <li>Monitoramento com foco em melhoria contínua</li>
                <li>Suporte ao sucesso do cliente</li>
                <li>
                  Colaboração e comunicação entre as partes interessadas, os clientes e a equipe de desenvolvimento
                </li>
              </ul>
              <p>
                Como Product Owner, fui responsável por manter o backlog do produto e garantir seu alinhamento com as
                metas e expectativas da empresa. Isso envolvia a identificação de bugs, a criação de histórias de
                usuários e tarefas para a equipe de desenvolvimento, certificando-me de atender a todas as necessidades
                dos clientes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
