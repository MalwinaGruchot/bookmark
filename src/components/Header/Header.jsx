import logo from "../..//assets/logo-bookmark.svg";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.container}>
      <img src={logo} />
      <HeaderMenu></HeaderMenu>
    </header>
  );
}
