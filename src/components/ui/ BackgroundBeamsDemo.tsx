"use client";

import React from "react";
import { ArrowDown, ArrowRight } from "lucide-react";
import { BackgroundBeams } from "../ui/background-beams";
import CustomTypewriter from "./CustomTypewriter";

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
    <div className="w-full min-h-screen h-[100dvh] relative lg:-mt-16 -mt-44 bg-gray-950 overflow-hidden flex items-center justify-center px-4 font-sans">
      <div className="z-10 text-center w-full max-w-3xl">
        <h1 className=" text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-600 leading-tight">
          <span className="text-white">Hello, I am </span>
          <CustomTypewriter />
        </h1>

        <p className="text-neutral-400 mt-4 text-sm sm:text-base md:text-lg max-w-xl mx-auto">
          I&apos;m a passionate Full Stack Developer and Computer Science student
        at NITK Surathkal. I love building modern, responsive, and interactive
        web applications that solve real-world problems.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <button
            onClick={scrollToContact}
            className="px-4 py-2 bg-black hover:bg-zinc-800 border border-zinc-800 transition duration-300 rounded-lg text-white  flex items-center text-sm sm:text-base"
          >
            Contact Me
            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </button>

          <button
            onClick={scrollToWork}
            className="px-4 py-2 bg-black hover:bg-zinc-800 border border-zinc-800 transition duration-200 rounded-lg text-white  flex items-center text-sm sm:text-base"
          >
            View Projects
            <ArrowDown className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </button>
        </div>
      </div>

      <BackgroundBeams />
    </div>
  );
}
