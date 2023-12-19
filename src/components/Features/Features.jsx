import styles from "./Features.module.scss";

export default function Features() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h3 className={styles.title}>Features</h3>
          <p className={styles.text}>
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
        </div>
      </div>
    </section>
  );
}
