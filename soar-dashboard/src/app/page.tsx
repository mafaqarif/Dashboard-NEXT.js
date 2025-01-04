import styles from "./page.module.css";

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
