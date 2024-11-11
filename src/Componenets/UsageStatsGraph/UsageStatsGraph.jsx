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

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const UsageStatsGraph = () => {
  const data = {
    labels: ['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    datasets: [
      {
        label: 'Usage',
        data: [0, 5, 10, 5, 15, 10, 30, 120, 15, 20, 20, 25], // Replace with your actual data
        backgroundColor: 'rgba(54, 162, 235, 0.6)', // Light blue color
        borderRadius: 4, // Rounded corners on bars
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Hide the legend for a cleaner look
      },
      title: {
        display: false, // Disable the title
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Hide vertical grid lines
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: '#e9e9e9', // Light gray horizontal grid lines
        },
        ticks: {
          stepSize: 20, // Interval between y-axis labels
        },
      },
    },
  };
  

  return (
    <div style={{ width: '100%', height: '600px', padding: '10px', backgroundColor: '#f6f7f9', borderRadius: '8px' }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default UsageStatsGraph;
