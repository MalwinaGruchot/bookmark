import { useState } from "react";
import styles from "./Question.module.scss";

export default function Question({ children, answer }) {
  const [active, setActive] = useState(false);
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapp} onClick={() => setActive(!active)}>
        <h4 className={styles.title}>{children}</h4>

        <svg
          width="20"
          height="10"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
        >
          {active ? (
            <polyline
              points="0,10 10,0 20,10"
              style={{
                stroke: "hsl(0, 94%, 66%)",
                fill: "none",
                strokeWidth: "2px",
              }}
            />
          ) : (
            <polyline
              points="0,0 10,10 20,0"
              style={{
                stroke: "hsl(231, 69%, 60%)",
                fill: "none",
                strokeWidth: "2px",
              }}
            />
          )}
        </svg>
      </div>
      {active ? <p className={styles.text}>{answer}</p> : null}
    </div>
  );
}
