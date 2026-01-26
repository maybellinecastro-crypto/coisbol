import React, { useState } from 'react';
import styles from './Header.module.css';
import logo from '../assets/logo.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="COISBOL Logo" />
      </div>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
      <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
        <a href="#about" onClick={toggleMenu}>¿Qué es?</a>
        <a href="#importance" onClick={toggleMenu}>Importancia</a>
        <a href="#institutional-articulation" onClick={toggleMenu}>Articulación</a>
        <a href="#purpose" onClick={toggleMenu}>Propósito</a>
        <a href="#work-axes" onClick={toggleMenu}>Ejes de Trabajo</a>
        <a href="#research-lines" onClick={toggleMenu}>Líneas de Investigación</a>
        <a href="#research-projects" onClick={toggleMenu}>Proyectos</a>
      </nav>
    </header>
  );
};

export default Header;
