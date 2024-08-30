import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import './index.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const chartData = {
  labels: [
    '6/30/2024 - 7/6/2024',
    '7/7/2024 - 7/13/2024',
    '7/21/2024 - 7/27/2024'
  ], 
  datasets: [
    {
      label: "Sales",
      data: [1.4, 0.8, 0.2],
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
      borderWidth: 1,
      fill: false,
      yAxisID: 'y',
    },
    {
      label: "Orders",
      data: [1.2, 0.8, 0.1], 
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      fill: false, 
      yAxisID: 'y',
    },
  ],
};

const LineChart = () => {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Dashboard</h2>
      <Line
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text:"Sales vs Orders"
            },
            legend: {
              display: true
            }
          },
          scales: {
            x: {
              title: {
                display: true,
                text: 'Date Range',
              },
              type: 'category',
              ticks: {
                autoSkip: true,
                maxTicksLimit: 10
              }
            },
            y: {
              title: {
                display: true,
                text: 'Users Gained / Lost',
              },
              beginAtZero: true,
              ticks: {
                callback: function(value) {
                  if (value >= 1) {
                    return value + 'k'; // Format values as k
                  }
                  return value;
                }
              }
            },
            y2: {
              title: {
                display: true,
                text: 'Users Gained / Lost',
              },
              position: 'right',
              beginAtZero: true,
              ticks: {
                callback: function(value) {
                  if (value >= 1) {
                    return value + 'k'; // Format values as k
                  }
                  return value;
                }
              }
            }
          },
        }}
      />
    </div>
  );
}

export default LineChart;
