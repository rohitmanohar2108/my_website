"use client";

import React from "react";
import { ArrowDown, ArrowRight } from "lucide-react";
import { BackgroundBeams } from "../ui/background-beams";
import CustomTypewriter from "./CustomTypewriter";
import { ContainerTextFlip } from "./container-text-flip";

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
    <div className="w-full min-h-screen h-[100dvh] relative bg-gray-950 overflow-hidden flex items-center justify-center px-4 font-sans -mt-16">
      <div className="">
        <div className="z-10 max-w-6xl w-full flex flex-col lg:flex-row justify-between border-2 border-dashed border-[#242436] shadow-2xl px-8 py-8 gap-12">
          {/* LEFT SECTION */}
          <div className="text-center lg:text-left max-w-xl flex flex-col items-center lg:items-start justify-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-600 leading-tight">
              <span className="text-white -mt-7">Hello, I am </span>
              <ContainerTextFlip
                className="mt-5"
                words={[
                  "Rohit Manohar",
                  "Developer",
                  "CSE Student @ NITK",
                  "Tech Enthusiast",
                ]}
              />
            </h1>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8">
              <button
                onClick={scrollToContact}
                className="px-4 py-3 bg-white  border border-zinc-800 transition duration-300 rounded-lg text-black flex items-center text-sm sm:text-base"
              >
                Contact Me
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </button>

              <button
                onClick={scrollToWork}
                className="px-4 py-2 bg-black  border border-zinc-700  transition duration-200 rounded-lg text-white flex items-center text-sm sm:text-base"
              >
                View Projects
                <ArrowDown className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </div>
          </div>

          {/* VERTICAL DIVIDER THAT CONNECTS TOP TO BOTTOM */}
          <div className="hidden lg:flex relative w-[1px] mx-4">
            <div className="absolute top-0 bottom-0 left-0 border  border-dashed border-gray-500 opacity-50" />
          </div>

          {/* RIGHT SECTION */}
          <div className="max-w-lg text-white text-sm sm:text-base md:text-lg flex items-center ">
            <p>
              I'm a passionate Full Stack Developer and Computer Science student
              at NITK Surathkal. I love building modern, responsive, and
              interactive web applications that solve real-world problems.
            </p>
          </div>
        </div>
      </div>

      <BackgroundBeams />
    </div>
  );
}
