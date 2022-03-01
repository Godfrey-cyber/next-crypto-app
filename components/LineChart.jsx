import { Chart as ChartJS } from 'chart.js/auto'
import { Chart } from 'react-chartjs-2'
import React from 'react';
import { Line } from 'react-chartjs-2';


const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimestamp = [];

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.data?.history[i].price);
  }

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString());
  }
  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: 'Price In USD',
        data: coinPrice,
        fill: false,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd',
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <>
      <div className="flex items-center justify-between gap-4">
        <h3 level={2} className="text-md text-blue-400">{coinName} Price Chart </h3>
        <span className="price-container">
          <h3 level={5} className="flex gap-4 items-center">Change: {coinHistory?.data?.change}%</h3>
          <h3 level={5} className="my-5 font-bold">Current {coinName} Price: $ {currentPrice}</h3>
        </span>
      </div>
      <Line data={data} options={options} />
    </>
  );
};

export default LineChart;
// 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