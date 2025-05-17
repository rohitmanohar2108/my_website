import Hero from "./sections/Hero";
import About from "./sections/About";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Projects from "./sections/Projects";
import Baground from "./sections/Baground";
import { GlowingEffect } from "./ui/glowing-effect";
import { Timeline } from "./ui/timeline";

const MainContent = () => {
  return (
    <div className="pt-16 lg:pt-0">
      <Hero />
      <About />
      
      <GlowingEffect />
      <Education />
      <Experience />
      <Skills />
      <Timeline />
      <Footer />
    </div>
  );
};

export default MainContent;
