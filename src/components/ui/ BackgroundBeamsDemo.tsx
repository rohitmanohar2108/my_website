"use client";

import React from "react";
import { ArrowDown, ArrowRight } from "lucide-react";
import { BackgroundBeams } from "../ui/background-beams";
import { ContainerTextFlip } from "./container-text-flip";
import { CodeBlockDemo } from "./CodeBlockDemo";

export function BackgroundBeamsDemo() {
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
    <div className="w-full min-h-screen h-[100dvh] relative bg- overflow-hidden flex items-center justify-center px-4 sm:px-6 lg:px-8 font-sans -mt-28 lg:-mt-12">
      <div className="w-full max-w-[87.6%] h-[80%] relative grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 border rounded-lg border-zinc-800 shadow-2xl px-6 sm:px-8 py-8 z-10">
        {/* Vertical Dashed Divider Between Left & Right (only on large screens) */}
        <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 w-0.5 border-l-2 border-dashed border-zinc-700 opacity-80 pointer-events-none" />

        {/* LEFT COLUMN */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left justify-center space-y-6 px-2 sm:px-0">
          <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-600 leading-tight">
            <span className="text-white font-bold block mb-2">
              Hello, I am
            </span>
            <ContainerTextFlip
              className="mt-1"
              words={[
                "Rohit Manohar",
                "App Developer",
                "CSE Student @ NITK",
                "Tech Enthusiast",
              ]}
            />
          </h1>

          <h2 className="hidden sm:block  text-lg sm:text-2xl font-thin mb-4">
            About Me
          </h2>
          <p className="hidden sm:block text-sm sm:text-lg font-extralight max-w-5xl leading-relaxed">
            I'm a Full Stack Developer and a{" "}
            <span className="bg-green-950 text-lime-500 font-thin px-1 py ml-1">
              Computer Science undergraduate
            </span>{" "}
            at
            <span className="bg-emerald-950 text-teal-400 font-medium px-1 py ml-1">
              NITK Surathkal
            </span>
            , passionate about crafting{" "}
            <span className="bg-sky-950 text-sky-500 font-light px-1 py- ml-1">
              clean, efficient, and scalable software solutions
            </span>
            . I enjoy turning complex problems into simple, elegant code and
            continuously strive to expand my skill set across the software
            development spectrum. Whether it's building intuitive frontends or
            robust backend systems, I take pride in{" "}
            <span className="bg-yellow-950 text-yellow-500 font-medium px-1 py- ml-1">
              writing maintainable and high-quality code.
            </span>
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <button
              onClick={scrollToContact}
              className="px-1 py-2 lg:px-5 lg:py-3 bg-white border border-zinc-800 rounded-lg text-black flex items-center text-sm sm:text-lg transition"
            >
              Contact Me
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </button>

            <button
              onClick={scrollToWork}
              className="px-1 py-2  lg:px-5 lg:py-3 bg-black border border-zinc-700 hover:border-blue-500 transition duration-200 rounded-lg text-white hover:text-blue-500  flex items-center text-sm sm:text-lg "
            >
              View Projects
              <ArrowDown className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN – CODE BLOCK */}
        <div className="flex items-center justify-center px-2 sm:px-6 rounded-lg lg:bg-gradient-to-tl from-[#FFA45B] to-[#FFE2C1]">
          <div className="w-full max-w-md sm:max-w-lg">
            <CodeBlockDemo />
          </div>
        </div>
      </div>

      <BackgroundBeams />
    </div>
  );
}
