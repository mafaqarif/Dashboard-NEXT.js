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
        fill: false,
      },
    ],
  };

  return (
    <div className="balance-history">
      <h3>Balance History</h3>
      <Line data={data} />
    </div>
  );
};

export default BalanceHistory;
