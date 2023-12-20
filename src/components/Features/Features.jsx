import { useState } from "react";
import styles from "./Features.module.scss";
import ButtonFeatures from "../ButtonFeatures/ButtonFeatures";
import data from "../../data/data";
import FeaturesTab from "../FeaturesTab/FeaturesTab";
const features = [
  { title: "Simple Bookmarking", id: 0 },
  { title: "Speedy Searching", id: 1 },
  { title: "Easy Sharing", id: 2 },
];

export default function Features() {
  const [idPage, setIdPage] = useState(0);

  const filteredData = data.find((el) => el.id === idPage);

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
        <div className={styles.wrapp}>
          {features.map(({ id, title }) => (
            <ButtonFeatures
              key={id}
              id={id}
              idPage={idPage}
              setIdPage={setIdPage}
            >
              {title}
            </ButtonFeatures>
          ))}
        </div>
        {/* <FeaturesTab
          title={filteredData.title}
          img={filteredData.img}
          text={filteredData.text}
        ></FeaturesTab> */}
      </div>
    </section>
  );
}
