import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';
import './pie.css'

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

const chartData = {
  labels: ['WooCommerce Store', 'Shopify Store'], 
  datasets: [
    {
      label: 'Members Distribution',
      data: [55.8, 44.2], 
      backgroundColor: ['#FA7E7E', '#2CDED5'], 
      borderColor: ['#FA7E7E', '#2CDED5'], 
      borderWidth: 1
    }
  ]
};

function PieChart() {
  return (
    <div className="pie-chart-container">
      <Pie
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Portion of sales"
            },
            legend: {
              position: 'top'
            },
            tooltip: {
              callbacks: {
                label: function(tooltipItem) {
                  return `${tooltipItem.label}: ${tooltipItem.raw}%`;
                }
              }
            }
          }
        }}
      />
      <h2 style={{ textAlign: "center" }}>Total:2659</h2>
    </div>
  );
}

export default PieChart;
