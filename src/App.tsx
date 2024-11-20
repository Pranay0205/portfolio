import "./App.css";
import Experience from "./components/sections/Experience/experience";
import Hero from "./components/sections/Hero/hero";
import Project from "./components/sections/Projects/project";
import Skills from "./components/sections/Skills/skills";

function App() {
  return (
    <div>
      <Hero />
      <Skills />
      <Experience />
      <Project />
    </div>
  );
}

export default App;
