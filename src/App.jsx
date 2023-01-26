import "./App.scss";
import SectionHero from "./components/SectionHero";
import SectionNavigation from "./components/SectionNavigation";

function App() {
  return (
    <div className="App">
      <SectionNavigation />
      <SectionHero />
    </div>
  );
}

export default App;
