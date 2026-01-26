import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import styles from './ChartModal.module.css'; // Reutilizamos los mismos estilos

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const MortalidadChartModal = ({ show, onClose }) => {
  if (!show) {
    return null;
  }

  const chartData = {
    labels: [
      'Homicidios',
      'Accidentes de tránsito',
      'Suicidios',
      'Muertes accidentales',
      'Impacto territorial',
      'Enfoque diferencial',
      'Capacidad institucional',
    ],
    datasets: [
      {
        label: 'Índice de Incidencia/Impacto (%)',
        data: [78, 70, 45, 55, 72, 60, 58],
        backgroundColor: '#d0d83a',
        borderColor: '#616160',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Análisis de Muertes por Causas Externas (Bolívar, 2024-2025)',
        font: {
          size: 18,
          family: 'var(--font-secundaria)',
        },
        color: '#616160',
        padding: {
          bottom: 20,
        },
      },
      tooltip: {
        backgroundColor: '#616160',
        titleFont: {
          family: 'var(--font-secundaria)',
        },
        bodyFont: {
          family: 'var(--font-principal)',
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 85,
        ticks: {
          color: '#616160',
          font: {
            family: 'var(--font-principal)',
          },
        },
        grid: {
          color: '#e0e0e0',
        },
      },
      x: {
        ticks: {
          color: '#616160',
          font: {
            family: 'var(--font-principal)',
          },
        },
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <div className={styles.chartContainer}>
          <Bar data={chartData} options={options} />
        </div>
        <p className={styles.source}>
          Fuente: COISBOL – Análisis de muertes por causas externas en Bolívar.
        </p>
      </div>
    </div>
  );
};

export default MortalidadChartModal;
