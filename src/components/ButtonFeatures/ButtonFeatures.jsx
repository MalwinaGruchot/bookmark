import styles from "./ButtonFeatures.module.scss";

export default function ButtonFeatures({ id, children, idPage, setIdPage }) {
  const handleClick = () => {
    setIdPage(id);
  };

  return (
    <div className={styles.wrapper}>
      <p
        onClick={handleClick}
        className={styles.text}
        style={
          id === idPage ? { borderBottom: "3px solid hsl(0, 94%, 66%)" } : {}
        }
      >
        {children}
      </p>
    </div>
  );
}
