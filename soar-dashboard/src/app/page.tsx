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
import Row1 from "../../components/Row1";
import Row2 from "../../components/Row2";
import Row3 from "../../components/Row3";

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <div>
        <main className={styles.mainComponent}>
          <Row1 />
          <Row2 />
          <Row3 />
        </main>
      </div>
    </>
  );
}
