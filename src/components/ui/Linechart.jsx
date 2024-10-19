import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const LineChart = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/maintenance/'); // Your API endpoint
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        // Transform data for chart.js
        const labels = data.map((item) => item.month);
        const datasetData = data.map((item) => item.total_costs);

        setChartData({
          labels: labels,
          datasets: [
            {
              label: 'Total Maintenance Costs',
              data: datasetData,
              borderColor: 'rgba(255, 165, 100, 1)',
              backgroundColor: 'rgba(255, 165, 100, 0.2)',
              tension: 0,
              pointRadius: 5,
              fill: true,
            },
          ],
        });
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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

  if (loading) {
    return <p>Loading chart data...</p>;
  }

  if (error) {
    return <p>Error loading chart data: {error.message}</p>;
  }

  return <Line data={chartData} options={options} />;
};

export default LineChart;