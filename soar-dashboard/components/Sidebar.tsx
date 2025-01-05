import styles from "../styles/sidebar.module.css";
import SidebarLink from "./SidebarLink";

const Sidebar: React.FC = () => (
  <aside className={`${styles.sidebar} mobile-hide`}>
    <nav>
      <ul className={styles.sidebarUl}>
        <li className={styles.selected}>
          <SidebarLink
            title="Dashboard"
            imageUrl="/sidebar-home.png"
            link="/"
          />
        </li>
        <li>
          <SidebarLink
            title="Transactions"
            imageUrl="/sidebar-transaction.png"
            link="/"
          />
        </li>
        <li>
          <SidebarLink
            title="Accounts"
            imageUrl="/sidebar-account.png"
            link="/"
          />
        </li>
        <li>
          <SidebarLink
            title="Investments"
            imageUrl="/sidebar-investment.png"
            link="/"
          />
        </li>
        <li>
          <SidebarLink
            title="Credit Cards"
            imageUrl="/sidebar-credit.png"
            link="/"
          />
        </li>
        <li>
          <SidebarLink title="Loans" imageUrl="/sidebar-loan.png" link="/" />
        </li>
        <li>
          <SidebarLink
            title="Services"
            imageUrl="/sidebar-service.png"
            link="/"
          />
        </li>
        <li>
          <SidebarLink
            title="My Privileges"
            imageUrl="/sidebar-privilage.png"
            link="/"
          />
        </li>
        <li>
          <SidebarLink
            title="Setting"
            imageUrl="/sidebar-setting.png"
            link="/setting"
          />
        </li>
      </ul>
    </nav>
  </aside>
);

export default Sidebar;
