import { FaBars, FaSearch } from "react-icons/fa";
import styles from "../styles/navbar.module.css";
import Image from "next/image";

const Navbar: React.FC = () => (
  <header className={`${styles.navbar} `}>
    <div className={styles.logo}>
      <Image
        className="mobile-hide"
        src="/logo.png"
        alt="Soar Logo"
        width={160}
        height={35}
      />
    </div>
    <div className={styles.headerRight}>
      <FaBars className={`mobile-show ${styles.menuBarsButton}`} />

      <div>
        <h2>Overview</h2>
      </div>
      {/* desktop */}
      <div className={styles.innerRight}>
        <div className={` mobile-hide ${styles.searchContainer}`}>
          <FaSearch className={styles.searchIcon} />
          <input type="text" placeholder="Search for something" />
        </div>
        <Image
          className="mobile-hide"
          src="/setting.png"
          alt="setting"
          width={50}
          height={50}
        />
        <Image
          className="mobile-hide"
          src="/notifications.png"
          alt="setting"
          width={50}
          height={50}
        />
        <img src="/profile-pic.png" alt="Profile" className="profile-pic" />
      </div>
    </div>
    <div className={styles.searchContainer2}>
      <FaSearch className={styles.searchIcon} />
      <input type="text" placeholder="Search for something" />
    </div>
  </header>
);

export default Navbar;
