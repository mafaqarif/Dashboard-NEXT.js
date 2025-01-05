"use client";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the required Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const WeeklyActivity: React.FC = () => {
  const data = {
    labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        label: "Deposit",
        data: [200, 400, 300, 500, 200, 300, 400],
        backgroundColor: "#4c6ef5",
        barThickness: 15,
      },
      {
        label: "Withdraw",
        data: [100, 200, 150, 300, 100, 150, 250],
        backgroundColor: "#000",
        barThickness: 15,
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: "top" as const, // Default position
        align: "end" as const, // Align to the end (right)
        labels: {
          usePointStyle: true, // Use point style for legend items
          pointStyle: "circle", // Set point style to circle
        },
      },
      title: {
        display: false,
        text: "Chart.js Bar Chart",
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
    },
    interaction: {
      mode: "index" as const, // 'point', 'nearest', 'dataset', 'x', 'y'
      intersect: false, // Whether to only trigger interactions when the mouse is directly over an element
    },
    layout: {
      padding: {
        left: 10,
        right: 10,
        top: 10,
        bottom: 10,
      },
    },
    elements: {
      bar: {
        borderRadius: {
          topLeft: 20, // Adjust these values for desired rounding
          topRight: 20,
          bottomLeft: 20,
          bottomRight: 20,
        },
        borderWidth: 0,
      },
    },
  };

  return (
    <div className="weekly-activity white-rounded">
      <Bar data={data} options={options} />
    </div>
  );
};

export default WeeklyActivity;
