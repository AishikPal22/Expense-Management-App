import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

const Chart = ({ items }) => {
  const chartData = {
    labels: ['Total Expense', 'Current Balance'],
    datasets: [
      {
        data: [items[1], (items[0]-items[1])],
        backgroundColor: ['#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#36A2EB', '#FFCE56'],
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        labels: {
          color: 'white',
        },
      },
    },
  };

  return <Doughnut data={chartData} options={options} />;
};

export default Chart;