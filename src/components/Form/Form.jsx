import { useState } from "react";
import styles from "./Form.module.scss";
import { validateEmail } from "../../validate/validate";

export default function Form({ number }) {
  const [email, setEmail] = useState("");
  const [err, setErr] = useState({ email: false });

  const validate = () => {
    setErr({ email: false });
    let error = { email: !validateEmail(email) };
    setErr(error);

    for (const key in error) {
      if (error[key] === true) {
        return false;
      }
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("wiadomośc wysłana");
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.text}>
          {`${number > 0 ? number : 0}+ already joined`}{" "}
        </p>
        <h3 className={styles.title}>{`Stay up-to-date with what 
        we're doing`}</h3>
        <form noValidate onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputWrapp}>
            <input
              className={styles.input}
              type="email"
              placeholder="Enter your email adress"
              id="name"
              name="name"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={err.email ? { border: "2px solid red" } : null}
            />
            {err.email ? (
              <p className={styles.err}>{`Whoops,make sure it's an email`}</p>
            ) : null}
          </div>

          <button className={styles.btn} type="submit">
            Contact Us
          </button>
        </form>
      </div>
    </section>
  );
}
