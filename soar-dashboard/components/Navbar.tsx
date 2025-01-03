import { FaSearch } from "react-icons/fa";
import styles from "../styles/navbar.module.css";
import Image from "next/image";

const Navbar: React.FC = () => (
  <header className={styles.navbar}>
    <div className={styles.logo}>
      <Image src="/logo.png" alt="Soar Logo" width={160} height={35} />
    </div>
    <div className={styles.headerRight}>
      <div>
        <h2>Overview</h2>
      </div>
      <div className={styles.innerRight}>
        <div className={styles.searchContainer}>
          <FaSearch className={styles.searchIcon} />
          <input type="text" placeholder="Search for something" />
        </div>
        <Image src="/setting.png" alt="setting" width={50} height={50} />
        <Image src="/notifications.png" alt="setting" width={50} height={50} />
        <img src="/profile-pic.png" alt="Profile" className="profile-pic" />
      </div>
    </div>
  </header>
);

export default Navbar;
