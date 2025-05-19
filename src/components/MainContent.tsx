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
import { GoogleGeminiEffectDemo } from "./ui/GoogleGeminiEffectDemo";
import MobileHeader from "./MobileHeader";
import { FeaturesSectionDemo } from "./ui/FeaturesSectionDemo";

const MainContent = () => {
  return (
    <div className="pt-16 lg:pt-0">
      <Hero />

      <GoogleGeminiEffectDemo />
      <FeaturesSectionDemo />
      <GlowingEffect />
      <Education />
      <Experience />
      <Skills />
      <Timeline />
      <Contact />
      <Footer />
    </div>
  );
};

export default MainContent;
