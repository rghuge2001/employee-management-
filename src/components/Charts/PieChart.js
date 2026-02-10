import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data, labels }) => {
  const chartData = {
    labels,
    datasets: [{
      data,
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'],
      borderColor: '#0f121a',
      borderWidth: 2,
    }]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,          // ← हे महत्वाचे! aspect ratio ignore करेल
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#f1f5f9',              // dark theme साठी text color
          font: { size: 14 }
        }
      },
      tooltip: {
        enabled: true
      }
    },
    cutout: '0%',                        // Pie साठी 0% (doughnut साठी '50%' ठेवू शकता)
    rotation: -0.5 * Math.PI,            // optional: chart थोडा rotate करा (full look साठी)
    circumference: 360,                  // full circle सुनिश्चित करा (default 360)
  };

  return (
    <div style={{ 
      position: 'relative', 
      height: '400px',                   // fixed height द्या (container ला फिट होईल)
      width: '100%' 
    }}>
      <Pie data={chartData} options={options} />
    </div>
  );
};

export default PieChart;