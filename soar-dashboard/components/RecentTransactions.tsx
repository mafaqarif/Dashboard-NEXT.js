import TransactionItem from "./TransactionItem";

interface Transaction {
  description: string;
  date: string;
  amount: string;
  positive: boolean;
  imageUrl: string;
}

interface RecentTransactionsProps {
  transactions: Transaction[];
}

const RecentTransactions: React.FC<RecentTransactionsProps> = ({
  transactions,
}) => (
  <div className="recent-transactions white-rounded">
    <ul>
      {transactions.map((txn, index) => (
        <TransactionItem
          key={index}
          title={txn.description}
          subTitle={txn.date}
          price={txn.amount}
          positive={txn.positive}
          imageUrl={txn.imageUrl}
        />
      ))}
    </ul>
  </div>
);

export default RecentTransactions;
