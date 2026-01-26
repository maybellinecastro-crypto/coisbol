import React from 'react';
import styles from './Purpose.module.css';
import { FaBullseye } from 'react-icons/fa';

const Purpose = () => {
  return (
    <section id="purpose" className={styles.purpose}>
      <div className={styles.container}>
        <div className={styles.icon}>
          <FaBullseye size={50} />
        </div>
        <div className={styles.text}>
          <h2>Propósito</h2>
          <p>
            La modernización del Centro de Observaciones e Investigación Social de Bolívar
            (COISBOL) busca consolidar un centro de análisis estratégico que permita abordar de
            manera integral los fenómenos sociales que afectan la convivencia en el departamento de
            Bolívar. Para lograr este objetivo, se plantea una alternativa basada en cinco enfoques:
            actualización tecnológica, fortalecimiento institucional, articulación interinstitucional,
            difusión de resultados y optimización de procesos, que trabajen de manera conjunta para
            fortalecer la capacidad analítica y operativa de COISBOL.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Purpose;