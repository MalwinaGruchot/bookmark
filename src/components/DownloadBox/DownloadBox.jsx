import img from "../../assets/bg-dots.svg";
import Button from "../Button";
import styles from "./DownloadBox.module.scss";

export default function DownloadBox({ icon, title, text, position }) {
  return (
    <div className={styles.wrapper} style={{ alignSelf: position }}>
      <img src={icon}></img>
      <h4>{title}</h4>
      <p>{text}</p>
      <img src={img} alt="" />
      <Button color={"blue"}>Add & Install Extension</Button>
    </div>
  );
}
