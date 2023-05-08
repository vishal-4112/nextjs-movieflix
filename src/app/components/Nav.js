import Link from "next/link";
import styles from "../styles/navbar.module.css";
const Nav = () => {
  return (
    <nav className={styles.navbar}>
      <div>
        <ul className={styles.navbarList}>
          <li className={styles.navbarItem}>
            <Link lassName={styles.navbarLink} href="/">
              Home
            </Link>
          </li>

          <li className={styles.navbarItem}>
            <Link lassName={styles.navbarLink} href="/about">
              About
            </Link>
          </li>

          <li className={styles.navbarItem}>
            <Link lassName={styles.navbarLink} href="/movie">
              Movies
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
