interface Transaction {
  description: string;
  date: string;
  amount: string;
}

interface RecentTransactionsProps {
  transactions: Transaction[];
}

const RecentTransactions: React.FC<RecentTransactionsProps> = ({
  transactions,
}) => (
  <div className="recent-transactions">
    <h3>Recent Transactions</h3>
    <ul>
      {transactions.map((txn, index) => (
        <li key={index}>
          <p>{txn.description}</p>
          <p>{txn.date}</p>
          <p>{txn.amount}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default RecentTransactions;
