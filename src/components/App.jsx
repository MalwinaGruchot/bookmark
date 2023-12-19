import "./App.scss";
import Features from "./Features/Features";
import "./Header";
import Header from "./Header";
import SectionBookmarkMenager from "./SectionBookmarkMenager/SectionBookmarkMenager";
import SectionDownload from "./SectionDownload/SectionDownload";
import SectionQuestions from "./SectionQuestions";

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <SectionBookmarkMenager></SectionBookmarkMenager>
        <Features></Features>
        <SectionDownload></SectionDownload>
        <SectionQuestions></SectionQuestions>
      </main>
    </>
  );
}

export default App;
