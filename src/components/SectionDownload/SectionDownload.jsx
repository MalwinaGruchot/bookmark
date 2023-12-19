import styles from "./SectionDownload.module.scss";

export default function SectionDownload() {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h3 className={styles.title}>Download the extension</h3>
          <p
            className={styles.text}
          >{`We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize.`}</p>
        </div>
      </div>
    </section>
  );
}
