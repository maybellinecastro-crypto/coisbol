import React from 'react';
import styles from './Importance.module.css';
import { FaCheckCircle } from 'react-icons/fa';

const Importance = () => {
  return (
    <section id="importance" className={styles.importance}>
      <div className={styles.container}>
        <div className={styles.icon}>
          <FaCheckCircle size={50} />
        </div>
        <div className={styles.text}>
          <h2>Importancia</h2>
          <p>
            La gran importancia de COISBOL es que, a través del análisis y generación de
            información confiable, consolidada, estratégica y periódica sobre hechos sociales
            relevantes, se pueden obtener insumos para la toma de decisiones por parte de la
            Gobernación de Bolívar, previo estudio de tendencias e identificación de zonas críticas
            sobre la convivencia social para lograr la formulación de estrategias innovadoras en
            seguridad, derechos humanos y justicia.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Importance;