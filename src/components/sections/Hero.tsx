import React from "react";
import { VortexDemoSecond } from "../ui/VortexDemoSecond";
import Baground from "./Baground";
import { BackgroundBeams } from "../ui/background-beams";
import { BackgroundBeamsDemo } from "../ui/ BackgroundBeamsDemo";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen w-full flex flex-col items-center justify-center py-20 px-4 md:px-10"
    >
      {/* First: Vortex animation */}
      <div className="w-screen">
        <BackgroundBeamsDemo />
      </div>

      {/* Second: Baground component */}
      
    </section>
  );
};

export default Hero;
