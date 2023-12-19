import "./App.scss";
import Features from "./Features/Features";
import "./Header";
import Header from "./Header";
import SectionBookmarkMenager from "./SectionBookmarkMenager/SectionBookmarkMenager";

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <SectionBookmarkMenager></SectionBookmarkMenager>
        <Features></Features>
      </main>
    </>
  );
}

export default App;
