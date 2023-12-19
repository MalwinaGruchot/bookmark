import "./App.scss";
import Features from "./Features/Features";
import "./Header";
import Header from "./Header";
import SectionBookmarkMenager from "./SectionBookmarkMenager/SectionBookmarkMenager";
import SectionDownload from "./SectionDownload/SectionDownload";
import SectionQuestions from "./SectionQuestions";
import Form from "./Form";

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <SectionBookmarkMenager></SectionBookmarkMenager>
        <Features></Features>
        <SectionDownload></SectionDownload>
        <SectionQuestions></SectionQuestions>
        <Form></Form>
      </main>
    </>
  );
}

export default App;
