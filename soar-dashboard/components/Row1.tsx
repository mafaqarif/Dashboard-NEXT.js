import Card from "./Card";
import RecentTransactions from "./RecentTransactions";
import styles from "../styles/row.module.css";
import CardOuter from "./CardOuter";

const Row1 = () => {
  const transactions = [
    {
      description: "Deposit from my Card",
      date: "28 Jan 2021",
      amount: "-$850",
      positive: false,
      imageUrl: "/transaction-1.png",
    },
    {
      description: "Deposit Paypal",
      date: "25 Jan 2021",
      amount: "+$2,500",
      positive: true,
      imageUrl: "/transaction-2.png",
    },
    {
      description: "Jemi Wilson",
      date: "21 Jan 2021",
      amount: "+$5,400",
      positive: true,
      imageUrl: "/transaction-3.png",
    },
  ];
  return (
    <div className={styles.row}>
      <CardOuter title="My Cards">
        <div className={styles.rowInner}>
          <Card
            balance="5,756"
            cardHolder="Eddy Cusuma"
            validThru="12/22"
            cardNumber="377812341234"
            cardBlack={true}
          />
          <Card
            balance="5,756"
            cardHolder="Eddy Cusuma"
            validThru="12/22"
            cardNumber="377812341234"
            cardBlack={false}
          />
        </div>
      </CardOuter>
      <CardOuter title="Recent Transactions">
        <RecentTransactions transactions={transactions} />
      </CardOuter>
    </div>
  );
};

export default Row1;
