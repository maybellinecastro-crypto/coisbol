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

const DdhChartModal = ({ show, onClose }) => {
  if (!show) {
    return null;
  }

  const chartData = {
    labels: [
      'Expulsión de comunidades rurales',
      'Restricción de movilidad comunitaria',
      'Riesgo para niñas, niños y adolescentes',
      'Control territorial de grupos armados',
      'Débil respuesta estatal',
      'Afectación a poblaciones vulnerables',
      'Goce efectivo de derechos humanos',
    ],
    datasets: [
      {
        label: 'Nivel de afectación (%)',
        data: [75, 70, 65, 80, 68, 72, 60],
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
        text: 'Diagnóstico de Violación de DD.HH. en el Post-Acuerdo (Bolívar, 2024-2025)',
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
        max: 90, // Ajustamos el máximo para que la barra más alta no quede al borde
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
          Fuente: COISBOL – Diagnóstico sobre la violación de los derechos humanos en el post acuerdo.
        </p>
      </div>
    </div>
  );
};

export default DdhChartModal;
