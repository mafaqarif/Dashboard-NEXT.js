"use client";

import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register the required Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);
const ExpenseStatistics: React.FC = () => {
  const data = {
    labels: ["Entertainment", "Bill Expense", "Investment", "Others"],
    datasets: [
      {
        data: [30, 15, 20, 35],
        backgroundColor: ["#4c6ef5", "#ffa94d", "#63e6be", "#868e96"],
      },
    ],
  };

  return (
    <div className="expense-statistics">
      <h3>Expense Statistics</h3>
      <Pie data={data} />
    </div>
  );
};

export default ExpenseStatistics;
