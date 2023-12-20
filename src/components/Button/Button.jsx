import styles from "./Button.module.scss";

export default function Button({ children, color }) {
  if (color === "red") {
    return <div className={styles.red}>{children}</div>;
  } else if (color === "blue") {
    return <div className={styles.blue}>{children}</div>;
  } else if (color === "gray") {
    return <div className={styles.gray}>{children}</div>;
  } else if (color === "transparent") {
    return <div className={styles.transparent}>{children}</div>;
  }
}
