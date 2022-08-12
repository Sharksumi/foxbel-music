import Nav from "../nav/Nav.js";
import Playbar from "../playbar/Playbar.js";
import Search from "../search/Search.js";
import styles from "../../styles/Home.module.css";

export default function Layout({ children }) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <Nav />
        </div>
        <main>
          <Search />
          {children}
        </main>
      </div>
      <footer>
        <Playbar />
      </footer>
    </>
  );
}
