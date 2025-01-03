import styles from "../styles/sidebar.module.css";
import SidebarLink from "./SidebarLink";

const Sidebar: React.FC = () => (
  <aside className={styles.sidebar}>
    <nav>
      <ul className={styles.sidebarUl}>
        <li className={styles.selected}>
          <SidebarLink title="Dashboard" imageUrl="/sidebar-home.png" />
        </li>
        <li>
          <SidebarLink
            title="Transactions"
            imageUrl="/sidebar-transaction.png"
          />
        </li>
        <li>
          <SidebarLink title="Accounts" imageUrl="/sidebar-account.png" />
        </li>
        <li>
          <SidebarLink title="Investments" imageUrl="/sidebar-investment.png" />
        </li>
        <li>
          <SidebarLink title="Credit Cards" imageUrl="/sidebar-credit.png" />
        </li>
        <li>
          <SidebarLink title="Loans" imageUrl="/sidebar-loan.png" />
        </li>
        <li>
          <SidebarLink title="Services" imageUrl="/sidebar-service.png" />
        </li>
        <li>
          <SidebarLink
            title="My Privileges"
            imageUrl="/sidebar-privilage.png"
          />
        </li>
        <li>
          <SidebarLink title="Setting" imageUrl="/sidebar-setting.png" />
        </li>
      </ul>
    </nav>
  </aside>
);

export default Sidebar;
