import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale, 
  LinearScale, 
  PointElement,
  Tooltip,
  Legend
} from 'chart.js';


ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const LineChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Total Units Produced',
        data: [300, 400, 320, 500, 530, 480],
        borderColor: 'rgba(255, 165, 100, 1)',
        backgroundColor: 'rgba(255, 165, 100, 0.2)',
        tension: 0, 
        pointRadius: 5,
        fill: true,
      },
    ],
  };


  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default LineChart;