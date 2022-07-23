import { Link, Route } from "react-router-dom";

import styles from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">MyReads</Link>
      </div>
      <nav>
        <div className={styles.icons}>
          <Route path="/" exact>
            <Link
              to="/search"
              className={`material-symbols-outlined ${styles.search}`}
            >
              search
            </Link>
          </Route>
          <Route path={["/search", "/books/:bookId"]} exact>
            <Link to="/" className={`material-symbols-outlined ${styles.home}`}>
              Home
            </Link>
          </Route>
        </div>
      </nav>
    </header>
  );
};

export default MainHeader;
