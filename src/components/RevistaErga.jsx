import React from 'react';
import styles from './RevistaErga.module.css';
import revistaImg from '../assets/revista.png';

const RevistaErga = () => {
  return (
    <section id="revista-erga" className={styles.revistaErga}>
      <div className={styles.contentWrapper}>
        <div className={styles.textContainer}>
          <h2>Revista Académica ERG@</h2>
          <p>
            ERG@ es nuestra publicación semestral que ofrece análisis profundos, investigaciones y debates sobre seguridad, violencia, derechos humanos y justicia en el departamento de Bolívar. Un espacio para la reflexión académica y la construcción de conocimiento.
          </p>
          <p>
            Para consultar los artículos completos y profundizar en los hallazgos, le invitamos a ingresar a la revista.
          </p>
          <div className={styles.buttonContainer}>
            <a href="https://revistas.uninunez.edu.co/index.php/ergaomnes" target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>Conoce la Revista</a>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img src={revistaImg} alt="Portada de la Revista ERG@" />
        </div>
      </div>
    </section>
  );
};

export default RevistaErga;
