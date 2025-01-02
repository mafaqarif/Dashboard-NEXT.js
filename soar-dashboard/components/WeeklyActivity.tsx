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
      },
      {
        label: "Withdraw",
        data: [100, 200, 150, 300, 100, 150, 250],
        backgroundColor: "#868e96",
      },
    ],
  };

  return (
    <div className="weekly-activity">
      <h3>Weekly Activity</h3>
      <Bar data={data} />
    </div>
  );
};

export default WeeklyActivity;
