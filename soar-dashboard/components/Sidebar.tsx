import styles from "../styles/sidebar.module.css";

const Sidebar: React.FC = () => (
  <aside className={styles.sidebar}>
    <h2>Soar Task</h2>
    <nav>
      <ul>
        <li>Dashboard</li>
        <li>Transactions</li>
        <li>Accounts</li>
        <li>Investments</li>
        <li>Credit Cards</li>
        <li>Loans</li>
        <li>Services</li>
        <li>My Privileges</li>
        <li>Setting</li>
      </ul>
    </nav>
  </aside>
);

export default Sidebar;
