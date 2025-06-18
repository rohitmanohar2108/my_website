import React, { useState } from "react";
import { ArrowUp, ChevronDown, MoveDown } from "lucide-react";
import { FaArrowDown } from "react-icons/fa";

function FogUi() {
  const [query, setQuery] = useState("");

  return (
    <div className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center border-b border-zinc-800">
      {/* Main fog effect positioned on the right */}
  
      <div className="absolute inset-0">
        {/* Primary fog layer - positioned on right side */}
        <div className="absolute top-0 right-0 w-full h-full">
          <div className="fog-main"></div>
        </div>

        {/* Secondary fog layers for depth */}
        <div className="absolute top-0 right-0 w-full h-full">
          <div className="fog-secondary"></div>
        </div>

        <div className="absolute top-0 right-0 w-full h-full">
          <div className="fog-tertiary"></div>
        </div>

        {/* Additional bright fog layer for more visibility */}
        <div className="absolute top-0 right-0 w-full h-full">
          <div className="fog-bright"></div>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl  px-6 lg:-ml-[44%]">
        {/* Grok title */}
        <h1 className="text-[8rem] md:text-[12rem] lg:text-[16rem] font-dm tracking-wider mb-4 ">
          <span className="bg-gradient-to-r from-zinc-500 to-white bg-clip-text text-transparent">
            ROHIT
          </span>
        </h1>
        <h2 className="text-[2rem] md:text-[12rem] lg:text-[2rem] font-bold tracking-wider absolute lg:-my-24 ml-4">
          M{"   "}A N O H A R
        </h2>
        {/* <div className="w-32 h-px bg-gradient-to-l from-white to-transparent mt--4 ml-auto animate-pulse" />*/}
        {/*<div className="w-32 h-px bg-gradient-to-r from-blue-400 to-transparent mt-4 animate-pulse" /> */}
        {/* Search interface */}
      </div>
      <div className=" text-white absolute bottom-[10%] left-44">
        <FaArrowDown size={28} />
      </div>
      

      <style jsx>{`
        .fog-main {
          position: absolute;
          top: -20%;
          right: -30%;
          width: 120%;
          height: 140%;
          background: radial-gradient(
            ellipse 80% 60% at 70% 50%,
            rgba(255, 255, 255, 0.8) 0%,
            rgba(219, 234, 254, 0.7) 15%,
            rgba(147, 197, 253, 0.6) 30%,
            rgba(59, 130, 246, 0.4) 50%,
            rgba(30, 64, 175, 0.2) 70%,
            transparent 85%
          );
          border-radius: 50%;
          animation: fogMove1 25s ease-in-out infinite;
          filter: blur(30px);
          opacity: 0.9;
        }

        .fog-secondary {
          position: absolute;
          top: -10%;
          right: -20%;
          width: 100%;
          height: 120%;
          background: radial-gradient(
            ellipse 70% 50% at 80% 40%,
            rgba(255, 255, 255, 0.6) 0%,
            rgba(219, 234, 254, 0.5) 20%,
            rgba(147, 197, 253, 0.4) 40%,
            rgba(59, 130, 246, 0.3) 60%,
            transparent 80%
          );
          border-radius: 50%;
          animation: fogMove2 30s ease-in-out infinite reverse;
          filter: blur(40px);
          opacity: 0.8;
        }

        .fog-tertiary {
          position: absolute;
          top: 0%;
          right: -40%;
          width: 140%;
          height: 100%;
          background: radial-gradient(
            ellipse 60% 40% at 75% 60%,
            rgba(255, 255, 255, 0.5) 0%,
            rgba(219, 234, 254, 0.4) 25%,
            rgba(147, 197, 253, 0.3) 50%,
            transparent 75%
          );
          border-radius: 50%;
          animation: fogMove3 35s ease-in-out infinite;
          filter: blur(50px);
          opacity: 0.7;
        }

        .fog-bright {
          position: absolute;
          top: 10%;
          right: -15%;
          width: 80%;
          height: 80%;
          background: radial-gradient(
            ellipse 50% 35% at 85% 50%,
            rgba(255, 255, 255, 0.9) 0%,
            rgba(240, 249, 255, 0.7) 20%,
            rgba(219, 234, 254, 0.5) 40%,
            rgba(147, 197, 253, 0.3) 60%,
            transparent 80%
          );
          border-radius: 50%;
          animation: fogMoveBright 20s ease-in-out infinite;
          filter: blur(25px);
          opacity: 1;
        }

        @keyframes fogMove1 {
          0%,
          100% {
            transform: translate(0%, 0%) rotate(0deg) scale(1);
          }
          25% {
            transform: translate(-5%, -8%) rotate(2deg) scale(1.1);
          }
          50% {
            transform: translate(3%, 5%) rotate(-1deg) scale(0.9);
          }
          75% {
            transform: translate(-2%, -3%) rotate(1deg) scale(1.05);
          }
        }

        @keyframes fogMove2 {
          0%,
          100% {
            transform: translate(0%, 0%) rotate(0deg) scale(1);
          }
          33% {
            transform: translate(8%, -5%) rotate(-3deg) scale(1.2);
          }
          66% {
            transform: translate(-4%, 7%) rotate(2deg) scale(0.8);
          }
        }

        @keyframes fogMove3 {
          0%,
          100% {
            transform: translate(0%, 0%) rotate(0deg) scale(1);
          }
          50% {
            transform: translate(-6%, 4%) rotate(1deg) scale(1.15);
          }
        }

        @keyframes fogMoveBright {
          0%,
          100% {
            transform: translate(0%, 0%) rotate(0deg) scale(1);
            opacity: 1;
          }
          25% {
            transform: translate(-3%, -5%) rotate(1deg) scale(1.1);
            opacity: 0.8;
          }
          50% {
            transform: translate(2%, 3%) rotate(-0.5deg) scale(0.95);
            opacity: 1;
          }
          75% {
            transform: translate(-1%, -2%) rotate(0.5deg) scale(1.05);
            opacity: 0.9;
          }
        }

        @media (max-width: 1024px) {
          .grok-text {
            font-size: 10rem;
          }
        }

        @media (max-width: 768px) {
          .grok-text {
            font-size: 6rem;
          }
        }

        @media (max-width: 480px) {
          .grok-text {
            font-size: 4rem;
          }
        }
      `}</style>
    </div>
  );
}

export default FogUi;
