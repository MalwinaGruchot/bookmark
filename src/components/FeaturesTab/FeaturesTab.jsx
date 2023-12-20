import styles from "./FeaturesTab.module.scss";
import Button from "../Button";

export default function FeaturesTab({ id, title, text, img }) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.circle}>
          <div className={styles.img}>
            <img src={img} />
          </div>
        </div>
        <div className={styles.column}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.text}>{text}</p>
          <div className={styles.wrapper}>
            <Button color={"blue"}>More info</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
