import styles from "./SectionBookmarkMenager.module.scss";
import hero from "../../assets/illustration-hero.svg";
import Button from "../Button";

export default function SectionBookmarkMenager() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.column}>
          <h2 className={styles.title}>A Simple Bookmark Menager</h2>
          <p className={styles.text}>
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly.Try it for
            free.
          </p>
          <div className={styles.wrapper}>
            <Button color={"blue"}>Get it on Chrome</Button>
            <Button color={"gray"}>Get it on Firefox</Button>
          </div>
        </div>
        <div className={styles.circle}>
          <div className={styles.img}>
            <img src={hero} />
          </div>
        </div>
      </div>
    </section>
  );
}
