import styles from "../styles/row.module.css";
import BalanceHistory from "./BalanceHistory";
import CardOuter from "./CardOuter";
import QuickTransfer from "./QuickTransfer";

const Row3 = () => {
  return (
    <div className={styles.row2}>
      <div>
        <CardOuter title="Quick Transfer">
          <QuickTransfer />
        </CardOuter>
      </div>
      <CardOuter title="Balance History">
        <BalanceHistory />
      </CardOuter>
    </div>
  );
};

export default Row3;
