import React from 'react';
import styles from './Header.module.css';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="COISBOL Logo" />
      </div>
      <nav className={styles.nav}>
        <a href="#about">¿Qué es?</a>
        <a href="#importance">Importancia</a>
        <a href="#institutional-articulation">Articulación</a>
        <a href="#purpose">Propósito</a>
        <a href="#work-axes">Ejes de Trabajo</a>
        <a href="#research-lines">Líneas de Investigación</a>
        <a href="#research-projects">Proyectos</a>
      </nav>
    </header>
  );
};

export default Header;
