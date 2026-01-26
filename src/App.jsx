import React from 'react';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import About from './components/About';
import Purpose from './components/Purpose';
import Importance from './components/Importance';
import ResearchLines from './components/ResearchLines';
import WorkAxes from './components/WorkAxes';
import ResearchProjects from './components/ResearchProjects';
import InstitutionalArticulation from './components/InstitutionalArticulation';
import RevistaErga from './components/RevistaErga';
import Footer from './components/Footer';
import FadeInSection from './components/FadeInSection';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroBanner />
        <FadeInSection><About /></FadeInSection>
        <FadeInSection><Purpose /></FadeInSection>
        <FadeInSection><Importance /></FadeInSection>
        <FadeInSection><ResearchLines /></FadeInSection>
        <FadeInSection><WorkAxes /></FadeInSection>
        <FadeInSection><ResearchProjects /></FadeInSection>
        <FadeInSection><InstitutionalArticulation /></FadeInSection>
        <FadeInSection><RevistaErga /></FadeInSection>
      </main>
      <Footer />
    </>
  );
}

export default App;
