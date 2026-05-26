import { useEffect } from "react";
import Hero from "./sections/Hero/Hero"
import Navbar from "./components/Navbar"
import About from "./sections/About/About"
import Robot from "./components/Robot"
import Story from "./sections/Story/Story"
import Skills from "./sections/Skills/Skill"
import Projects from "./sections/Projects/Project"
import Contact from "./sections/Contact/Contact"
import Footer from "./sections/Footer/Footer"
import "./index.css";

export default function App() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add("visible")),
      {threshold: 0.1}
    );
    document.querySelectorAll(".section-reveal").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  },[]);

  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
       <Navbar/>
       <Robot/>
       <Hero/>
       <Story/>
       <Skills/>
       <Projects/>
       <About/>
       <Contact/>
       <Footer/>
    </div>
  );
}