import styles from "./SectionDownload.module.scss";
import icon_0 from "../../assets/logo-chrome.svg";
import icon_1 from "../../assets/logo-firefox.svg";
import icon_2 from "../../assets/logo-opera.svg";
import DownloadBox from "../DownloadBox/DownloadBox";
const data = [
  {
    icon: icon_0,
    title: "Add to Chrome",
    text: "Minimum version 62",
    position: "flex-start",
  },
  {
    icon: icon_1,
    title: "Add to Firefox",
    text: "Minimum version 55",
    position: "center",
  },
  {
    icon: icon_2,
    title: "Add to Opera",
    text: "Minimum version 46",
    position: "flex-end",
  },
];

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
        <div className={styles.wrapp}>
          {data.map(({ title, text, icon, position }) => (
            <DownloadBox
              key={text}
              text={text}
              icon={icon}
              title={title}
              position={position}
            ></DownloadBox>
          ))}
        </div>
      </div>
    </section>
  );
}
