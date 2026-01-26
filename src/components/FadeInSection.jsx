import React from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './FadeInSection.module.css';

const FadeInSection = (props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div ref={ref} className={`${styles.fadeInSection} ${inView ? styles.isVisible : ''}`}>
      {props.children}
    </div>
  );
};

export default FadeInSection;
