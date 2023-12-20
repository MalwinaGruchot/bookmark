import logo from "../..//assets/logo-bookmark.svg";
import styles from "./Footer.module.scss";
import FooterMenu from "../FooterMenu";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <img src={logo} className={styles.img}></img>
        <FooterMenu></FooterMenu>
      </div>
    </footer>
  );
}
