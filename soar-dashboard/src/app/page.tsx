import Image from "next/image";
import styles from "./page.module.css";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Card from "../../components/Card";
import RecentTransactions from "../../components/RecentTransactions";
import WeeklyActivity from "../../components/WeeklyActivity";
import ExpenseStatistics from "../../components/ExpenseStatistics";
import QuickTransfer from "../../components/QuickTransfer";
import BalanceHistory from "../../components/BalanceHistory";

export default function Home() {
  const transactions = [
    {
      description: "Deposit from my Card",
      date: "28 Jan 2021",
      amount: "-$850",
    },
    { description: "Deposit Paypal", date: "25 Jan 2021", amount: "+$2,500" },
    { description: "Jemi Wilson", date: "21 Jan 2021", amount: "+$5,400" },
  ];
  return (
    <div className={styles.dashboard}>
      <Sidebar />
      <main className={styles.mainComponent}>
        <Navbar />
        <Card
          balance="5,756"
          cardHolder="Eddy Cusuma"
          validThru="12/22"
          cardNumber="377812341234"
        />
        <RecentTransactions transactions={transactions} />
        <WeeklyActivity />
        <ExpenseStatistics />
        <QuickTransfer />
        <BalanceHistory />
      </main>
    </div>
  );
}
