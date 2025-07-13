"use client";

import React from "react";
import { ArrowDown, ArrowRight } from "lucide-react";
import { BackgroundBeams } from "../ui/background-beams";
import { ContainerTextFlip } from "./container-text-flip";
import { CodeBlockDemo } from "./CodeBlockDemo";
import { CardStack } from "./card-stack";
import { CardStackDemo } from "../sections/CardStackDemo";
import { PiDrone } from "react-icons/pi";

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
    <div className="w-full min-h-screen h-[100dvh] relative bg- overflow-hidden flex items-center justify-center px-4 sm:px-6 lg:px-8 font-sans -mt-28 lg:-mt-12 ">
      <div className="w-full max-w-[87.6%] h-[80%] [box-shadow:0_2px_20px_#1FB8CD80] relative grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16  border-2 border-neutral-800 px-6 sm:px-8 py-8 z-10 ">
        {/* Vertical Dashed Divider Between Left & Right (only on large screens) */}
        <div className="hidden lg:block absolute top-0 bottom-0 left-[49.9%] w-0.5 border-l-2 border-dashed border-neutral-800 opacity-80 pointer-events-none" />

        {/* LEFT COLUMN */}

        <div className="flex flex-col items-center lg:items-start text-center  lg:text-left justify-center space-y-6 px-2 sm:px-0">
          <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-600 leading-tight">
            <span className="text-white font-bold block mb-2">Hello, I am</span>
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
            <span className="hover:bg-green-950 border-b border-lime-500 text-lime-500 font-thin px-1 py-1 rounded-t-md ml-1 transition-transform scale-100">
              Computer Science undergraduate
            </span>{" "}
            at
            <span className="hover:bg-emerald-950 border-b border-teal-500 text-teal-400 font-medium px-1 py-1 ml-1  rounded-t-md transition-transform scale-100">
              NITK Surathkal
            </span>
            , passionate about crafting{" "}
            <span className="hover:bg-sky-950 border-b border-sky-500 text-sky-500  font-light px-1 py-1 ml-1 rounded-t-md transition-transform scale-100">
              clean, efficient, and scalable software solutions
            </span>
            . I enjoy turning complex problems into simple, elegant code and
            continuously strive to expand my skill set across the software
            development spectrum. Whether it's building intuitive frontends or
            robust backend systems, I take pride in{" "}
            <span className="hover:bg-yellow-950 border-b border-yellow-500 text-yellow-500 font-medium px-1 py-1 rounded-t-md ml-1 transition-transform scale-100">
              writing maintainable and high-quality code.
            </span>
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <button
              onClick={scrollToContact}
              className="px-1 py-2 lg:px-5 lg:py-3 bg-[#1FB8CD]  border border-zinc-800 rounded-lg text-black  flex items-center text-sm sm:text-lg transition"
            >
              Contact Me
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </button>

            <button
              onClick={scrollToWork}
              className="px-1 py-2  lg:px-5 lg:py-3 bg-black border border-zinc-700 hover:border-[#1FB8CD]  transition duration-200 rounded-lg text-white hover:text-[#1FB8CD]   flex items-center text-sm sm:text-lg "
            >
              View Projects
              <ArrowDown className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN – CODE BLOCK */}

        <div className="absolute top-[90%] right-12 text-[#1FB8CD]  text-2xl font-mono animate-spin animate-slide-x">
          <PiDrone className="w-8 h-8" />
        </div>

        <div className=" flex items-center justify-center px-2 sm:px-6  transition-transform scale-100 rounded-lg lg:mt-24">
          <div className="w-full max-w-md sm:max-w-lg ">
            <CardStackDemo />
          </div>
        </div>
      </div>

      <BackgroundBeams />
      <div className="absolute w-[84.4%] mb-[30%]">
        <div className="w-full h-52 grid grid-cols-8 gap-px bg-black relative">
          {/* Box 1 - Diagonal grid pattern */}
          <div className="bg-black relative overflow-hidden border border-zinc-800 ">
            <div className="absolute inset-0">
              {/* Primary diagonal lines */}
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={`diag1-${i}`}
                  className="absolute w-px h-full bg-neutral-400  opacity-40"
                  style={{
                    left: `${i * 20 + 10}%`,
                    transform: "rotate(45deg)",
                    transformOrigin: "top left",
                  }}
                />
              ))}
              {/* Secondary diagonal lines */}
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={`diag2-${i}`}
                  className="absolute w-px h-full bg-neutral-400  opacity-25"
                  style={{
                    left: `${i * 20 + 20}%`,
                    transform: "rotate(45deg)",
                    transformOrigin: "top left",
                  }}
                />
              ))}
              {/* Grid dots */}
              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={`dot-${i}`}
                  className="absolute w-1 h-1 bg-neutral-400  rounded-full opacity-30"
                  style={{
                    left: `${(i % 3) * 33 + 16}%`,
                    top: `${Math.floor(i / 3) * 33 + 16}%`,
                  }}
                />
              ))}
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-zinc-800/50 to-transparent blur-sm"></div>
          </div>

          {/* Box 2 - Reverse diagonal grid pattern */}
          <div className="bg-black relative overflow-hidden border border-zinc-800 ">
            <div className="absolute inset-0">
              {/* Primary reverse diagonal lines */}
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={`rev-diag1-${i}`}
                  className="absolute w-px h-full bg-neutral-400  opacity-40"
                  style={{
                    right: `${i * 20 + 10}%`,
                    transform: "rotate(-45deg)",
                    transformOrigin: "top right",
                  }}
                />
              ))}
              {/* Secondary reverse diagonal lines */}
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={`rev-diag2-${i}`}
                  className="absolute w-px h-full bg-neutral-400  opacity-25"
                  style={{
                    right: `${i * 20 + 20}%`,
                    transform: "rotate(-45deg)",
                    transformOrigin: "top right",
                  }}
                />
              ))}
              {/* Grid dots */}
              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={`rev-dot-${i}`}
                  className="absolute w-1 h-1 bg-neutral-400  rounded-full opacity-30"
                  style={{
                    left: `${(i % 3) * 33 + 16}%`,
                    top: `${Math.floor(i / 3) * 33 + 16}%`,
                  }}
                />
              ))}
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-zinc-800/50 to-transparent blur-sm"></div>
          </div>

          {/* Box 3 - Vertical grid pattern */}
          <div className="bg-black relative overflow-hidden border border-zinc-800 ">
            <div className="absolute inset-0">
              {/* Primary vertical lines */}
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={`vert1-${i}`}
                  className="absolute w-px h-full bg-neutral-400  opacity-40"
                  style={{ left: `${i * 20 + 10}%` }}
                />
              ))}
              {/* Secondary vertical lines */}
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={`vert2-${i}`}
                  className="absolute w-px h-full bg-neutral-400  opacity-25"
                  style={{ left: `${i * 20 + 20}%` }}
                />
              ))}
              {/* Grid dots */}
              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={`vert-dot-${i}`}
                  className="absolute w-1 h-1 bg-neutral-400  rounded-full opacity-30"
                  style={{
                    left: `${(i % 3) * 33 + 16}%`,
                    top: `${Math.floor(i / 3) * 33 + 16}%`,
                  }}
                />
              ))}
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-zinc-800/50 to-transparent blur-sm"></div>
          </div>

          {/* Box 4 - Horizontal grid pattern */}
          <div className="bg-black relative overflow-hidden border border-zinc-800 ">
            <div className="absolute inset-0">
              {/* Primary horizontal lines */}
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={`horiz1-${i}`}
                  className="absolute w-full h-px bg-neutral-400  opacity-40"
                  style={{ top: `${i * 20 + 10}%` }}
                />
              ))}
              {/* Secondary horizontal lines */}
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={`horiz2-${i}`}
                  className="absolute w-full h-px bg-neutral-400  opacity-25"
                  style={{ top: `${i * 20 + 20}%` }}
                />
              ))}
              {/* Grid dots */}
              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={`horiz-dot-${i}`}
                  className="absolute w-1 h-1 bg-neutral-400  rounded-full opacity-30"
                  style={{
                    left: `${(i % 3) * 33 + 16}%`,
                    top: `${Math.floor(i / 3) * 33 + 16}%`,
                  }}
                />
              ))}
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-zinc-800/50 to-transparent blur-sm"></div>
          </div>

          {/* Box 5 - Cross diagonal pattern */}
          <div className="bg-black relative overflow-hidden border border-zinc-800 ">
            <div className="absolute inset-0">
              {/* Diagonal lines (45deg) */}
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={`cross-diag1-${i}`}
                  className="absolute w-px h-full bg-neutral-400  opacity-40"
                  style={{
                    left: `${i * 33 + 16}%`,
                    transform: "rotate(45deg)",
                    transformOrigin: "top left",
                  }}
                />
              ))}
              {/* Reverse diagonal lines (-45deg) */}
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={`cross-diag2-${i}`}
                  className="absolute w-px h-full bg-neutral-400  opacity-25"
                  style={{
                    right: `${i * 33 + 16}%`,
                    transform: "rotate(-45deg)",
                    transformOrigin: "top right",
                  }}
                />
              ))}
              {/* Grid dots */}
              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={`cross-dot-${i}`}
                  className="absolute w-1 h-1 bg-neutral-400  rounded-full opacity-30"
                  style={{
                    left: `${(i % 3) * 33 + 16}%`,
                    top: `${Math.floor(i / 3) * 33 + 16}%`,
                  }}
                />
              ))}
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-zinc-800/50 to-transparent blur-sm"></div>
          </div>

          {/* Box 6 - Diagonal grid pattern (same as Box 1) */}
          <div className="bg-black relative overflow-hidden border border-zinc-800 ">
            <div className="absolute inset-0">
              {/* Primary diagonal lines */}
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={`diag1-b6-${i}`}
                  className="absolute w-px h-full bg-neutral-400  opacity-40"
                  style={{
                    left: `${i * 20 + 10}%`,
                    transform: "rotate(45deg)",
                    transformOrigin: "top left",
                  }}
                />
              ))}
              {/* Secondary diagonal lines */}
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={`diag2-b6-${i}`}
                  className="absolute w-px h-full bg-neutral-400  opacity-25"
                  style={{
                    left: `${i * 20 + 20}%`,
                    transform: "rotate(45deg)",
                    transformOrigin: "top left",
                  }}
                />
              ))}
              {/* Grid dots */}
              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={`dot-b6-${i}`}
                  className="absolute w-1 h-1 bg-neutral-400  rounded-full opacity-30"
                  style={{
                    left: `${(i % 3) * 33 + 16}%`,
                    top: `${Math.floor(i / 3) * 33 + 16}%`,
                  }}
                />
              ))}
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-zinc-800/50 to-transparent blur-sm"></div>
          </div>

          {/* Box 7 - Reverse diagonal grid pattern (same as Box 2) */}
          <div className="bg-black relative overflow-hidden border border-zinc-800 ">
            <div className="absolute inset-0">
              {/* Primary reverse diagonal lines */}
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={`rev-diag1-b7-${i}`}
                  className="absolute w-px h-full bg-neutral-400  opacity-40"
                  style={{
                    right: `${i * 20 + 10}%`,
                    transform: "rotate(-45deg)",
                    transformOrigin: "top right",
                  }}
                />
              ))}
              {/* Secondary reverse diagonal lines */}
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={`rev-diag2-b7-${i}`}
                  className="absolute w-px h-full bg-neutral-400  opacity-25"
                  style={{
                    right: `${i * 20 + 20}%`,
                    transform: "rotate(-45deg)",
                    transformOrigin: "top right",
                  }}
                />
              ))}
              {/* Grid dots */}
              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={`rev-dot-b7-${i}`}
                  className="absolute w-1 h-1 bg-neutral-400  rounded-full opacity-30"
                  style={{
                    left: `${(i % 3) * 33 + 16}%`,
                    top: `${Math.floor(i / 3) * 33 + 16}%`,
                  }}
                />
              ))}
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-zinc-800/50 to-transparent blur-sm"></div>
          </div>

          {/* Box 8 - Grid intersection pattern */}
          <div className="bg-black relative overflow-hidden border border-zinc-800 ">
            <div className="absolute inset-0">
              {/* Vertical lines */}
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={`grid-vert-${i}`}
                  className="absolute w-px h-full bg-neutral-400  opacity-40"
                  style={{ left: `${(i + 1) * 25}%` }}
                />
              ))}
              {/* Horizontal lines */}
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={`grid-horiz-${i}`}
                  className="absolute w-full h-px bg-neutral-400  opacity-25"
                  style={{ top: `${(i + 1) * 25}%` }}
                />
              ))}
              {/* Grid dots */}
              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={`grid-dot-${i}`}
                  className="absolute w-1 h-1 bg-neutral-400  rounded-full opacity-30"
                  style={{
                    left: `${(i % 3) * 33 + 16}%`,
                    top: `${Math.floor(i / 3) * 33 + 16}%`,
                  }}
                />
              ))}
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-zinc-800/50 to-transparent blur-sm"></div>
          </div>

          {/* Enhanced full-width blur overlay from bottom */}
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black via-black to-transparent blur-md pointer-events-none col-span-8"></div>

          {/* Additional atmospheric effects */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-black pointer-events-none col-span-8"></div>
        </div>
      </div>
      
    </div>
  );
}
