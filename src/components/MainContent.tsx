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
import { RadarSkillsSection } from "./ui/RadarSkillsSection";
import { LampDemo } from "./ui/lamp";
import AnimatedNameTitle from "./ui/AnimatedNameTitle";

import EducationCard from "./sections/EducationCard";
import AnimatedHub from "./ui/AnimatedHub";
import FogUi from "./ui/FogUi";
import { BackgroundBeams } from "./ui/background-beams";
import { ParallaxProvider } from 'react-scroll-parallax';
import Skill from "./sections/Skill";
import { Grid, Layout } from "lucide-react";

const MainContent = () => {
  return (
    <ParallaxProvider>
    <div className="pt-16 lg:pt-0">
      
      
      <Hero />
    

      <GoogleGeminiEffectDemo />
      <div className="bg-gradient-to-t from-zinc-800/60 via-black to-black">
        <FeaturesSectionDemo />
        
      </div>
      <GlowingEffect />
      <div className="bg-gradient-to-b from-zinc-800/60 to-black
">
  
  
        <EducationCard />
      </div>

      <Skills />
      <Skill />
      

      <Timeline />
      <LampDemo />
      <Contact />

      <Footer />
    </div>
    </ParallaxProvider>
  );
};

export default MainContent;
