import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <h2>¿Qué es COISBOL?</h2>
      <p>
        El Centro de Observaciones e Investigación Social de Bolívar -COISBOL es un centro de
        investigación, análisis y reflexión intersectorial e interinstitucional adscrito a la Secretaria
        del Interior y Asuntos Gubernamentales, que recibe, procesa y analiza información
        estratégica con relación a hechos de violencia, epidemiológicos y fenómenos sociales que
        afectan la seguridad ciudadana, la convivencia, el orden público, la conflictividad y el
        dialogo social en el departamento.
      </p>
    </section>
  );
};

export default About;
