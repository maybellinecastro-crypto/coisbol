import React, { useState } from 'react';
import FadeInSection from './FadeInSection';
import ChartModal from './ChartModal';
import DdhChartModal from './DdhChartModal';
import MortalidadChartModal from './MortalidadChartModal'; // Importamos el nuevo modal
import styles from './ResearchProjects.module.css';

const projects = [
  {
    title: 'Análisis de muertes por causas externas en Bolívar (2024-2025)',
    description: 'Investigaciones sobre mortalidad por accidentes de tránsito y frecuencia del suicidio en el departamento.',
    hasMortalidadChart: true, // Propiedad para el nuevo gráfico
  },
  {
    title: 'Acceso a la justicia en el departamento de Bolívar (2024-2025)',
    description: 'Estudios sobre justicia comunitaria y un análisis de vulnerabilidad y responsabilidad penal en jóvenes. Visualiza el análisis de barreras estructurales.',
    hasSrpaChart: true,
  },
  {
    title: 'Diagnóstico sobre la violación de los DD.HH. en el post acuerdo (2024-2025)',
    description: 'Análisis de reclutamiento forzado, confinamiento, trata de personas, desplazamiento y violencia sociopolítica en Bolívar.',
    hasDdhChart: true,
  },
];

const ResearchProjects = () => {
  const [showMortalidadChart, setShowMortalidadChart] = useState(false);
  const [showSrpaChart, setShowSrpaChart] = useState(false);
  const [showDdhChart, setShowDdhChart] = useState(false);

  return (
    <section id="research-projects" className={styles.researchProjects}>
      <FadeInSection>
        <h2 className={styles.title}>Proyectos de Investigación 2025</h2>
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              {project.hasMortalidadChart && (
                <a
                  href="#"
                  className={styles.projectLink}
                  onClick={(e) => { e.preventDefault(); setShowMortalidadChart(true); }}
                >
                  Ver Gráfico de Mortalidad
                </a>
              )}
              {project.hasSrpaChart && (
                <a
                  href="#"
                  className={styles.projectLink}
                  onClick={(e) => { e.preventDefault(); setShowSrpaChart(true); }}
                >
                  Ver Gráfico de Barreras
                </a>
              )}
              {project.hasDdhChart && (
                <a
                  href="#"
                  className={styles.projectLink}
                  onClick={(e) => { e.preventDefault(); setShowDdhChart(true); }}
                >
                  Ver Gráfico de DD.HH.
                </a>
              )}
            </div>
          ))}
        </div>
      </FadeInSection>
      <MortalidadChartModal show={showMortalidadChart} onClose={() => setShowMortalidadChart(false)} />
      <ChartModal show={showSrpaChart} onClose={() => setShowSrpaChart(false)} />
      <DdhChartModal show={showDdhChart} onClose={() => setShowDdhChart(false)} />
    </section>
  );
};

export default ResearchProjects;
