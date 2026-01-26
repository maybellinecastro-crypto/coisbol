import React from 'react';
import styles from './ResearchLines.module.css';

const researchLines = [
  {
    title: 'Seguridad y violencia',
    items: [
      'Seguimiento y análisis de principales tasas de seguridad y criminalidad: muertes por causas externas (homicidios, muertes accidentales, suicidios y muertes por accidentes de tránsito)',
      'Seguimiento y análisis de conflictividad social: violencia intrafamiliar, violencia basada en género.',
    ],
  },
  {
    title: 'Derechos humanos',
    items: [
      'Conflicto y violencia: Desplazamiento forzado, confinamiento, disputas por tierras, reclutamiento forzado de NNA, trata de personas.',
      'Estigmatización y discriminación: Por género, raza, etnia, religión, orientación sexual, entre otros.',
      'Riesgo social: Niños, niñas y adolescentes, mujeres, comunidades étnicas, migrantes, personas con discapacidad, líderes sociales.',
    ],
  },
  {
    title: 'Acceso a la justicia',
    items: [
      'Disponibilidad, calidad y equidad del sistema judicial.',
      'Justicia comunitaria y tradicional',
      'Sistema de responsabilidad penal para adolescentes',
      'Mecanismos alternativos de justicia.',
    ],
  },
];

const ResearchLines = () => {
  return (
    <section id="research-lines" className={styles.researchLines}>
      <h2>Líneas de Investigación</h2>
      <p className={styles.subtitle}>
        Sus líneas de investigación están en coherencia con el Plan de Desarrollo Departamental
        y el Plan Nacional de Desarrollo, y en articulación con los O.D.S.
      </p>
      <div className={styles.linesContainer}>
        {researchLines.map((line, index) => (
          <div key={index} className={styles.lineCard}>
            <h3>{line.title}</h3>
            <ul>
              {line.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResearchLines;
