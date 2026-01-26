import React from 'react';
import styles from './Footer.module.css';
import uniLogo from '../assets/uni.png';
import goberLogo from '../assets/gober.png';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logoContainer}>
        <img src={uniLogo} alt="Logo Universidad Rafael Núñez" className={styles.logo} />
      </div>
      <div className={styles.textContainer}>
        <p>&copy; 2024 COISBOL. Todos los derechos reservados.</p>
        <p>Corporación Universitaria Rafael Núñez.</p>
      </div>
      <div className={styles.logoContainer}>
        <img src={goberLogo} alt="Logo Gobernación de Bolívar" className={styles.logo} />
      </div>
    </footer>
  );
};

export default Footer;
