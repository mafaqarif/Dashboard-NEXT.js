import React from "react";
import styles from "../styles/row.module.css";
import WeeklyActivity from "./WeeklyActivity";
import ExpenseStatistics from "./ExpenseStatistics";
import CardOuter from "./CardOuter";

const Row2 = () => {
  return (
    <div className={styles.row}>
      <div>
        <CardOuter title="Weekly Activity">
          <WeeklyActivity />
        </CardOuter>
      </div>
      <CardOuter title="Expense Statistics">
        <ExpenseStatistics />
      </CardOuter>
    </div>
  );
};

export default Row2;
