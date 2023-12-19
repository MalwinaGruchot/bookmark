import { useState } from "react";
import styles from "./Question.module.scss";
import arrow from "../../assets/icon-arrow.svg";

export default function Question({ children, answer }) {
  const [active, setActive] = useState(false);
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapp}>
        <h4 className={styles.title}>{children}</h4>
        <img
          className={styles.icon}
          onClick={() => setActive(!active)}
          src={arrow}
          style={active ? { stroke: "red" } : {}}
        />
        {/* <svg
          width="20"
          height="10"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
        > */}
        {/* <polyline
            points="0 20 20 0 40 20"
            stroke="blue"
            fill="none"
            strokeWidth="4"
          /> */}
        {/* <polyline
            points="0 0 10 10 20 0 "
            stroke="blue"
            fill="none"
            strokeWidth="4"
            strokeLinejoin="miter"
          />
        </svg> */}
      </div>
      {active ? <p className={styles.text}>{answer}</p> : null}
    </div>
  );
}
