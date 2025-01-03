"use client";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  Title,
  ChartOptions,
} from "chart.js";

// Register the required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  Title
);

const BalanceHistory: React.FC = () => {
  const data = {
    labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Balance",
        data: [200, 400, 300, 500, 400, 600],
        borderColor: "#4c6ef5",
        fill: true,
        tension: 0.4,
      },
    ],
  };
  const options: ChartOptions<"line"> = {
    responsive: true,
    // maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
    scales: {
      x: {
        // type: "time",
        // time: {
        //   unit: "day",
        // },
        adapters: {
          date: {
            locale: "en-US",
          },
        },
        title: {
          display: true,
          text: "Date",
        },
      },
      y: {
        title: {
          display: true,
          text: "Value",
        },
        beginAtZero: true,
      },
    },
    // tension: 4, // Adjust for curve smoothness (0 = straight lines)
    elements: {
      point: {
        radius: 4, // Adjust point radius
        backgroundColor: "rgba(75,192,192,1)",
        hoverRadius: 6,
        hoverBackgroundColor: "rgba(75,192,192,1)",
      },
    },
    // fill: true, // Enable filling the area under the line
  };

  return (
    <div className="balance-history">
      <Line data={data} options={options} />
    </div>
  );
};

export default BalanceHistory;
