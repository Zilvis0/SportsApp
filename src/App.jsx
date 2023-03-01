import { useState } from "react";
import SectionNavigation from "./components/SectionNavigation";
import SectionHero from "./components/SectionHero";
import SectionExercises from "./components/SectionExercises";
import "./App.scss";

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  return (
    <div className="App">
      <SectionNavigation />
      <SectionHero setCategory={setCategory} setSearch={setSearch} />
      <SectionExercises category={category} search={search} />
    </div>
  );
}

export default App;
