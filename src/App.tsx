// App.tsx
import "./App.css";
import Experience from "./components/sections/Experience/experience";
import Hero from "./components/sections/Hero/hero";
import Project from "./components/sections/Projects/project";
import Skills from "./components/sections/Skills/skills";
import NavBar from "./components/sections/NavBar/navbar";
import Footer from "./components/sections/Footer/footer";
import Testimonials from "./components/sections/Testimonials/testimonials";
import About from "./components/sections/About/about";

function App() {
  return (
    <div>
      <NavBar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Testimonials />
        <Project />
      </main>
      <Footer />
    </div>
  );
}

export default App;
