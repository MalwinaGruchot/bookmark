import "./App.scss";
import Features from "./Features/Features";
import "./Header";
import Header from "./Header";
import SectionBookmarkMenager from "./SectionBookmarkMenager/SectionBookmarkMenager";
import SectionDownload from "./SectionDownload/SectionDownload";
import SectionQuestions from "./SectionQuestions";
import Form from "./Form";
import Footer from "./Footer/Footer";
import { useEffect, useState } from "react";
import Modal from "./Modal/Modal";

function App() {
  const [number, setNumber] = useState(35000);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let id;
    if (number > 0) {
      id = setInterval(() => {
        setNumber((prev) => prev - 1750);
      }, 1000);
    }
    return () => clearInterval(id);
  }, [number]);

  useEffect(() => {
    const idTimeout = setTimeout(() => {
      setOpen(true);
    }, 30000);
    return () => clearTimeout(idTimeout);
  }, []);

  return (
    <>
      <div
        onMouseOver={() => setOpen(true)}
        style={{ width: "100%", height: "1px" }}
      ></div>
      <Header></Header>
      <main>
        <SectionBookmarkMenager></SectionBookmarkMenager>
        <Features></Features>
        <SectionDownload></SectionDownload>
        <SectionQuestions></SectionQuestions>
        <Form number={number}></Form>
      </main>
      <Footer></Footer>
      <Modal close={() => setOpen(false)} open={open}></Modal>
    </>
  );
}

export default App;
