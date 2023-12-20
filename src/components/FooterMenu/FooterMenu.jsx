import styles from "./Footermenu.module.scss";

const links = ["features", "pricing", "contact"];

export default function FooterMenu() {
  return (
    <div className={styles.menu}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {links.map((item) => (
              <li className={styles.itemList} key={item}>
                {item}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
