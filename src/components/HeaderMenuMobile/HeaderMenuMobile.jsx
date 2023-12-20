import Button from "../Button";
import styles from "./HeaderMenuMobile.module.scss";

const links = ["features", "pricing", "contact"];

export default function HeaderMenuMobile() {
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

            <li className={styles.btn}>
              <Button color={"transparent"}>login</Button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
