import data from "../../data/data";
import FeaturesTab from "../FeaturesTab/FeaturesTab";
import styles from "./Modal.module.scss";

export default function Modal({ close, open }) {
  const filteredData = data.find((el) => el.id === 1);
  if (!open) return null;
  return (
    <div className={styles.modal}>
      <FeaturesTab
        title={filteredData.title}
        img={filteredData.img}
        text={filteredData.text}
      ></FeaturesTab>
      <svg
        onClick={close}
        className={styles.svg}
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="15"
      >
        <path
          fill="#000"
          fillRule="evenodd"
          d="M8 5.379L13.303.075l2.122 2.122L10.12 7.5l5.304 5.303-2.122 2.122L8 9.62l-5.303 5.304-2.122-2.122L5.88 7.5.575 2.197 2.697.075 8 5.38z"
        />
      </svg>
    </div>
  );
}
