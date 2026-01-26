import React from 'react';
import styles from './WorkAxes.module.css';

const axes = [
  {
    title: 'Trabajo colaborativo',
    description: 'Implementación de protocolos de colaboración para facilitar el intercambio de información entre COISBOL y otras instituciones (Fiscalía, Medicina Legal, Policía Nacional, Defensoría del Pueblo, etc), de manera que se genere un flujo continuo de datos.',
  },
  {
    title: 'Actualización tecnológica',
    description: 'Incorporación de herramientas avanzadas como sistemas de big data, inteligencia artificial y georreferenciación para facilitar la recolección, procesamiento y análisis de datos e información estadística.',
  },
  {
    title: 'Fortalecimiento institucional',
    description: 'Capacitación continua al personal técnico de COISBOL en investigación social, uso de las nuevas tecnologías y formulación de informes estratégicos.',
  },
  {
    title: 'Alianzas estratégicas',
    description: 'Compartir información con grupos y semilleros de investigación, universidades, observatorios y otros actores para promover el uso e intercambio de información estratégica y la construcción conjunta de conocimiento.',
  },
  {
    title: 'Difusión de resultados',
    description: 'Desarrollo de un sistema de comunicación estratégica que incluya boletines periódicos, plataformas digitales y un micrositio con herramientas interactivas para la visualización de datos, informes y productos de investigación.',
  },
];

const WorkAxes = () => {
  return (
    <section id="work-axes" className={styles.workAxes}>
      <h2>Ejes de Trabajo</h2>
      <div className={styles.axesContainer}>
        {axes.map((axis, index) => (
          <div key={index} className={styles.axisCard}>
            <h3>{axis.title}</h3>
            <p>{axis.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkAxes;
