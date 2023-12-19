import styles from "./SectionQuestions.module.scss";
import data from "../../data/dataQuestions";
import Question from "../Question/Question";
import Button from "../Button";

export default function SectionQuestions() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h3 className={styles.title}>Frequently Asked Questions</h3>
          <p
            className={styles.text}
          >{`Here are some of our FAQs. If you have any other questions
          you'd like answered please feel free to email us.`}</p>
        </div>

        {data.map(({ question, id, answer }) => (
          <Question key={id} answer={answer}>
            {question}
          </Question>
        ))}
        <Button color={"blue"}>More Info</Button>
      </div>
    </section>
  );
}
