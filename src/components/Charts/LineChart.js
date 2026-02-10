import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = ({ data, label }) => {
  const years = [...new Set(data)].sort();
  const counts = years.map(y => data.filter(d => d === y).length);

  const chartData = {
    labels: years,
    datasets: [{ label, data: counts, borderColor: 'rgba(153,102,255,1)' }]
  };

  return <Line data={chartData} />;
};

export default LineChart;