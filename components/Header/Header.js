import styles from "./header.module.css";


export default function Header() {

  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.menu}>
          <li className={styles.li}><a href="#home">Home</a></li>
          <li><a href="#profile">Profile</a></li>
        </ul>
      </nav>
    </header>
  );
}
