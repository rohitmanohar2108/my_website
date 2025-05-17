import React from "react";
import { Vortex } from "../ui/vortex";
import { ArrowDown, ArrowRight } from "lucide-react";
import CustomTypewriter from "./CustomTypewriter";
import Baground from "../sections/Baground";

export function VortexDemoSecond() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToWork = () => {
    const workSection = document.getElementById("projects");
    if (workSection) {
      workSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full font-dm">
      {/* Hero Section with Vortex */}
      <div className="w-full h-screen overflow-hidden -mt-36 lg:-mt-12 mb-24 sm:mb-32">
        <Vortex
          backgroundColor="black"
          className="flex flex-col items-center justify-center px-4 md:px-10 py-8 w-full h-full"
        >
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6 text-center">
            <span className="text-white">Hello, I'm </span>
            <CustomTypewriter />
          </h1>

          <p className="text-white text-sm sm:text-base md:text-xl max-w-xl mt-4 text-center px-4">
            A passionate Full Stack Developer and Computer Science student at NITK
            Surathkal, building modern, responsive, and interactive web
            applications.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 mt-8 px-2">
            <button
              onClick={scrollToContact}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset] flex items-center"
            >
              Contact Me
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>

            <button
              onClick={scrollToWork}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset] flex items-center"
            >
              View Projects
              <ArrowDown className="ml-2 h-5 w-5" />
            </button>
          </div>
        </Vortex>
      </div>

      <div className="w-full">
        <Baground />
      </div>
    </div>
  );
}
