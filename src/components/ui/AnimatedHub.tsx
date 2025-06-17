import React, { useState, useEffect } from "react";
import {
  Code2,
  Palette,
  Database,
  Smartphone,
  Globe,
  Zap,
  ChevronRight,
  ArrowRight,
  ChevronLeft,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { FaCircleArrowRight } from "react-icons/fa6";
import { Spotlight } from "./Spotlight";
import { cn } from "../lib/utils";
import { BackgroundBeams } from "./background-beams";
import { Parallax } from 'react-scroll-parallax';

interface HubNode {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  color: string;
  position: { x: number; y: number };
}

const AnimatedHub: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [animationPhase, setAnimationPhase] = useState(0);

  const centerPosition = { x: 50, y: 50 };

  const nodes: HubNode[] = [
    {
      id: "frontend",
      title: "Frontend Development",
      icon: <Code2 size={44} />,
      description: "React, TypeScript, Tailwind CSS",
      color: "from-blue-500 to-cyan-500",
      position: { x: 50, y: 0 },
    },
    {
      id: "design",
      title: "UI/UX Design",
      icon: <Palette size={44} />,
      description: "User Interface & Experience Design",
      color: "",
      position: { x: 100, y: 25 },
    },
    {
      id: "backend",
      title: "Backend Systems",
      icon: <Database size={44} />,
      description: "APIs, Databases, Cloud Architecture",
      color: "from-green-500 to-emerald-500",
      position: { x: 100, y: 75 },
    },
    {
      id: "mobile",
      title: "Mobile Development",
      icon: <Smartphone size={44} />,
      description: "iOS, Android, React Native",
      color: "from-orange-500 to-red-500",
      position: { x: 50, y: 100 },
    },
    {
      id: "web",
      title: "Web Applications",
      icon: <Globe size={44} />,
      description: "Full-stack Web Development",
      color: "from-teal-500 to-blue-500",
      position: { x: 0, y: 75 },
    },
    {
      id: "performance",
      title: "Performance Optimization",
      icon: <Zap size={44} />,
      description: "Speed, Efficiency, User Experience",
      color: "from-yellow-500 to-orange-500",
      position: { x: 0, y: 25 },
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationPhase((prev) => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const getConnectionPath = (
    start: { x: number; y: number },
    end: { x: number; y: number }
  ) => {
    const dx = end.x - start.x;
    const dy = end.y - start.y;
    const midX = start.x + dx * 0.5;
    const midY = start.y + dy * 0.5;

    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  const getAnimatedStrokeDasharray = (pathLength: number) => {
    const progress = (animationPhase % 50) / 50;
    const dashLength = pathLength * 0.3;
    const offset = pathLength * progress;
    return `${dashLength} ${pathLength - dashLength}`;
  };

  const getAnimatedStrokeDashoffset = (pathLength: number) => {
    const progress = (animationPhase % 50) / 50;
    return -pathLength * progress;
  };

  return (
    <Parallax speed={-15}>
    <div
      id="skills"
      className="hidden sm:block relative w-full h-screen bg-gradient-to-t from-black via-zinc-900 to-black  overflow-hidden my-24"
    >
 
      {/* Background Grid */}

      <div className="absolute top-20 left-64 w-2 h-2 bg-blue-400/40 rounded-full animate-pulse shadow-[0_0_8px_rgba(96,165,250,0.6)]"></div>
      <div className="absolute top-32 left-72 w-1 h-1 bg-blue-300/50 rounded-full animate-pulse delay-100 shadow-[0_0_6px_rgba(147,197,253,0.5)]"></div>
      <div className="absolute top-40 right-80 w-3 h-3 bg-blue-500/30 rounded-full animate-pulse delay-200 shadow-[0_0_10px_rgba(59,130,246,0.4)]"></div>
      <div className="absolute bottom-40 right-44 w-2 h-2 bg-blue-400/35 rounded-full animate-pulse delay-300 shadow-[0_0_8px_rgba(96,165,250,0.5)]"></div>

      <ChevronRight className="absolute top-[19%] left-[61%] text-neutral-800 h-6" />
      <ChevronLeft className="absolute top-[78.6%] left-[61%] text-neutral-800   w h-6" />
      <ChevronDown className="absolute top-[48%] left-[69.8%] text-neutral-800  w h-6" />
      <ChevronUp className="absolute top-[48%] left-[29%] text-neutral-800   w h-6" />
      <ChevronRight className="absolute top-[19%] left-[38%] text-neutral-800  w h-6" />
      <ChevronLeft className="absolute top-[78.6%] left-[38%] text-neutral-800   w h-6" />

      <div
        className="absolute top-96 left-0 w-32 h-64 border-r border-zinc-500/30 rounded-r-full shadow-[0_0_20px_rgba(113,113,122,0.3)]
 "
      ></div>

      <div
        className="absolute top-96 right-0 w-32 h-64 border-l border-zinc-400/25 rounded-l-full shadow-[0_0_20px_rgba(113,113,122,0.3)]
"
      ></div>

      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
            linear-gradient(rgba(148, 163, 184, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148, 163, 184, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>
      <div></div>
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="relative w-[800px] h-[600px]">
          {/* SVG for Connections */}
          <svg
            className="absolute inset-0 w-full h-full border border-neutral-800 rounded-3xl beam-border"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient
                id="connectionGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  stopColor="rgb(251, 146, 60)"
                  stopOpacity="0.6"
                />
                <stop
                  offset="50%"
                  stopColor="rgb(251, 146, 60)"
                  stopOpacity="0.8"
                />
                <stop
                  offset="100%"
                  stopColor="rgb(251, 146, 60)"
                  stopOpacity="0.6"
                />
              </linearGradient>

              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {nodes.map((node) => {
              const pathLength = Math.sqrt(
                Math.pow(node.position.x - centerPosition.x, 2) +
                  Math.pow(node.position.y - centerPosition.y, 2)
              );

              return (
                <path
                  key={node.id}
                  d={getConnectionPath(centerPosition, node.position)}
                  stroke="url(#connectionGradient)"
                  strokeWidth="0.3"
                  fill="none"
                  filter="url(#glow)"
                  strokeDasharray={"0.5 1.5"}
                  strokeDashoffset={getAnimatedStrokeDashoffset(pathLength)}
                  className="transition-all duration-300"
                  style={{
                    opacity: activeNode === node.id ? 1 : 0.6,
                  }}
                />
              );
            })}
          </svg>

         {/* <div className="">
            <Spotlight
              className="-top-40 left-0 md:-top-20 md:left-60"
              fill="white"
            />
          </div> */}
          <div className="absolute -top-16 left-[10%] w-32 h-px bg-gradient-to-l from-orange-400 to-transparent mt-4 ml-auto animate-pulse" />
          <div className="absolute -top-16 right-[10%] w-32 h-px bg-gradient-to-l from-orange-400 to-transparent mt-4 ml-auto animate-pulse" />
          <div className="absolute -bottom-16 right-[10%] w-32 h-px bg-gradient-to-r from-orange-400 to-transparent mt-4 ml-auto animate-pulse" />
           <div className="absolute -bottom-16 right-[73%] w-32 h-px bg-gradient-to-r from-orange-400 to-transparent mt-4 ml-auto animate-pulse" />
           <div className="absolute top-60 right-[120%] w-px h-32 bg-gradient-to-b from-orange-400 to-transparent animate-pulse" />
           <div className="absolute top-60 left-[120%] w-px h-32 bg-gradient-to-t from-orange-400 to-transparent animate-pulse" />


          {/* Central Hub */}
          <div
            className="absolute transform -translate-x-1/2 -translate-y-1/2 z-20"
            style={{
              left: `${centerPosition.x}%`,
              top: `${centerPosition.y}%`,
            }}
          >
            <div className="relative">
              <div className="w-44 h-44 bg-zinc-900 from-black via-white/5 to-black rounded-2xl border-2 border-orange-400 shadow-2xl flex items-center justify-center">
                {/* Outer Circle */}
                <div className="w-28 h-28 bg-gradient-to-br from-zinc-800 to-black rounded-full flex items-center justify-center shadow-lg animate-spin-slow">
                  {/* Inner Circle with Ring Effect */}
                  <div className="w-20 h-20 rounded-full border-[6px] border-white border-t-transparent border-b-transparent"></div>
                </div>
              </div>

              {/* Rotating Ring */}
              <div
                className="absolute inset-0 border-2 border-transparent rounded-2xl animate-spin"
                style={{ animationDuration: "8s" }}
              >
                <div
                  className="w-full h-full  border-2 border-zinc-700 rounded-2xl opacity-30"
                  style={{
                    background: `conic-gradient(from ${
                      animationPhase * 3.6
                    }deg, transparent 0deg, rgba(82, 82, 91, 0.5)) 90deg, transparent 180deg)`,
                  }}
                ></div>
              </div>

              {/* Pulse Effect */}
              <div
                className="absolute inset-0 rounded-2xl bg-zinc-400 opacity-20 animate-ping"
                style={{ animationDuration: "3s" }}
              ></div>
            </div>
          </div>

          <div className="absolute top-5 left-4 flex-col space-y-1">
            <div className="w-3 h-1 bg-zinc-700"></div>
            <div className="w-3 h-1 bg-zinc-700"></div>
            <div className="w-3 h-1 bg-orange-400 animate-pulse"></div>
            <div className="w-3 h-1 bg-orange-400 animate-pulse"></div>
          </div>

          <div className="absolute bottom-4 left-64 flex space-x-1">
            <div className="w-1 h-3 bg-zinc-700"></div>
            <div className="w-1 h-3 bg-zinc-700"></div>
            <div className="w-1 h-3 bg-orange-400 animate-pulse"></div>
            <div className="w-1 h-3 bg-orange-400 animate-pulse"></div>
          </div>

          <div className="absolute top-[42%] left-[97%] flex flex-col space-y-1">
            <div className="w-3 h-1 bg-orange-400 animate-pulse"></div>
            <div className="w-3 h-1 bg-orange-400 animate-pulse"></div>
            <div className="w-3 h-1 bg-zinc-700"></div>
            <div className="w-3 h-1 bg-zinc-700"></div>
          </div>

          <div className="absolute -top-20 left-[110%] flex space-x-1">
            <div className="w-1 h-4 bg-zinc-800"></div>
            <div className="w-1 h-4 bg-zinc-800"></div>
            <div className="w-1 h-4 bg-zinc-800"></div>
            <div className="w-1 h-4 bg-zinc-800"></div>
            <div className="w-1 h-4 bg-zinc-800"></div>
            <div className="w-1 h-4 bg-zinc-800"></div>
            <div className="w-1 h-4 bg-zinc-800"></div>
            <div className="w-1 h-4 bg-zinc-800"></div>
            <div className="w-1 h-4 bg-zinc-800"></div>
            <div className="w-1 h-4 bg-zinc-800"></div>
          </div>

          <div className="absolute -bottom-16 -left-[20%] flex space-x-1 bg-zinc-900 px-2 py-2 rounded-md">
            <div className="w-1 h-4 bg-orange-400"></div>
            <div className="w-1 h-4 bg-yellow-400"></div>
            <div className="w-1 h-4 bg-orange-400 animate-pulse"></div>
            <div className="w-1 h-4 bg-yellow-300 animate-pulse"></div>
            <div className="w-1 h-4 bg-orange-400 animate-pulse"></div>
            <div className="w-1 h-4 bg-zinc-800"></div>
            <div className="w-1 h-4 bg-zinc-800"></div>
            <div className="w-1 h-4 bg-zinc-800"></div>
            <div className="w-1 h-4 bg-zinc-800"></div>
            <div className="w-1 h-4 bg-zinc-800"></div>
            <div className="w-1 h-4 bg-zinc-800"></div>
            <div className="w-1 h-4 bg-zinc-800"></div>
            <div className="w-1 h-4 bg-zinc-800"></div>
            <div className="w-1 h-4 bg-zinc-800"></div>
          </div>

          <div className="absolute -top-6 left-[63%] flex flex-col space-y-1">
            {/* First row - 4 dots */}
            <div className="flex space-x-1">
              <div className="w-1 h-1 bg-orange-400 animate-pulse"></div>
              <div className="w-1 h-1 bg-orange-400 animate-pulse"></div>
              <div className="w-1 h-1 bg-orange-300 animate-pulse"></div>
              <div className="w-1 h-1 bg-zinc-700"></div>
            </div>

            {/* Second row - 6 dots */}
            <div className="flex space-x-1">
              <div className="w-1 h-1 bg-orange-400 animate-pulse"></div>
              <div className="w-1 h-1 bg-orange-400 animate-pulse"></div>
              <div className="w-1 h-1 bg-orange-300 animate-pulse"></div>
              <div className="w-1 h-1 bg-orange-300 animate-pulse"></div>
              <div className="w-1 h-1 bg-zinc-700"></div>
              <div className="w-1 h-1 bg-zinc-700"></div>
            </div>
          </div>

          <div className="absolute -bottom-10 left-[83%] flex flex-col space-y-1">
            {/* First row - 4 dots */}
            <div className="flex space-x-1">
              <div className="w-1.5 h-1.5 bg-zinc-800 "></div>
              <div className="w-1.5 h-1.5 bg-zinc-800"></div>
              <div className="w-1.5 h-1.5 bg-zinc-800 "></div>
              <div className="w-1.5 h-1.5 bg-zinc-800"></div>
            </div>

            {/* Second row - 6 dots */}
            <div className="flex space-x-1">
              <div className="w-1.5 h-1.5 bg-zinc-800 "></div>
              <div className="w-1.5 h-1.5 bg-zinc-800"></div>
              <div className="w-1.5 h-1.5 bg-zinc-800"></div>
              <div className="w-1.5 h-1.5 bg-zinc-800"></div>
              <div className="w-1.5 h-1.5 bg-zinc-800"></div>
              <div className="w-1.5 h-1.5 bg-zinc-800"></div>
            </div>
          </div>

          <div className="w-fit -my-36 bg-zinc-900 rounded-md ml-[45%] p-1.5 flex items-center space-x-2 shadow-lg">
            {/* Left Large Square */}
            <div className="w-5 h-5 bg-zinc-800 rounded-md shadow-inner"></div>

            {/* Center Grid (3x2) */}
            <div className="grid grid-cols-3 gap-1">
              <div className="w-1 h-1 bg-zinc-700"></div>
              <div className="w-1 h-1 bg-zinc-700"></div>
              <div className="w-1 h-1 bg-zinc-700"></div>
              <div className="w-1 h-1 bg-zinc-700"></div>
              <div className="w-1 h-1 bg-zinc-700"></div>
              <div className="w-1 h-1 bg-zinc-700"></div>
            </div>

            {/* Right Buttons */}
            <div className="flex flex-col space-y-1">
              <div className="w-2 h-1 bg-green-400 shadow-md"></div>
              <div className="w-2 h-1 bg-yellow-400 shadow-md"></div>
            </div>
          </div>

          {/* Moved BELOW the parent div */}
          <div className="absolute -top-[21%] left-[47.5%] flex space-x-4 z-0 mt-3.5">
            <div className="w-0.5 h-32 bg-zinc-900 rounded-full"></div>
            <div className="w-0.5 h-32 bg-zinc-900 rounded-full"></div>
            <div className="w-0.5 h-32 bg-zinc-900 rounded-full"></div>
          </div>

          <div className="flex items-start space-x mt-[85%] ml-[107%]">
            {/* Bars on the LEFT */}
            <div className="flex flex-col space-y-3 mt-3">
              <div className="w-14 h-0.5 bg-zinc-900 rounded-full"></div>
              <div className="w-14 h-0.5 bg-zinc-900 rounded-full"></div>
              <div className="w-14 h-0.5 bg-zinc-900 rounded-full"></div>
            </div>

            {/* Panel on the RIGHT */}
            <div className="bg-zinc-900 p-1.5 rounded-md shadow-lg flex flex-col items-center space-y-2 -my-3">
              {/* Top Large Square */}
              <div className="w-5 h-5 bg-zinc-800 rounded-md shadow-inner"></div>

              {/* Grid (3x2) */}
              <div className="grid grid-cols-2 gap-1">
                <div className="w-1 h-1 bg-zinc-700"></div>
                <div className="w-1 h-1 bg-zinc-700"></div>
                <div className="w-1 h-1 bg-zinc-700"></div>
                <div className="w-1 h-1 bg-zinc-700"></div>
                <div className="w-1 h-1 bg-zinc-700"></div>
                <div className="w-1 h-1 bg-zinc-700"></div>
              </div>

              {/* Buttons */}
              <div className="grid grid-cols-2 gap-1">
                <div className="w-1 h-2 bg-green-400 shadow-md"></div>
                <div className="w-1 h-2 bg-yellow-400 shadow-md"></div>
              </div>
            </div>
          </div>

          <div className="flex items-start space-x -mt-[6%] -ml-[18%]">
            {/* Panel on the LEFT */}
            <div className="bg-zinc-900 p-1.5 rounded-md shadow-lg flex flex-col items-center space-y-2 -my-3 ">
              {/* Top Large Square */}
              <div className="w-5 h-5 bg-zinc-800 rounded-md shadow-inner"></div>

              {/* Grid (3x2) */}
              <div className="grid grid-cols-2 gap-1">
                <div className="w-1 h-1 bg-zinc-700"></div>
                <div className="w-1 h-1 bg-zinc-700"></div>
                <div className="w-1 h-1 bg-zinc-700"></div>
                <div className="w-1 h-1 bg-zinc-700"></div>
                <div className="w-1 h-1 bg-zinc-700"></div>
                <div className="w-1 h-1 bg-zinc-700"></div>
              </div>

              {/* Buttons */}
              <div className="grid grid-cols-2 gap-1">
                <div className="w-1 h-2 bg-green-400 shadow-md"></div>
                <div className="w-1 h-2 bg-yellow-400 shadow-md"></div>
              </div>
            </div>

            {/* Bars on the RIGHT */}
            <div className="flex flex-col space-y-3 mt-3">
              <div className="w-14 h-0.5 bg-zinc-900 rounded-full"></div>
              <div className="w-14 h-0.5 bg-zinc-900 rounded-full"></div>
              <div className="w-14 h-0.5 bg-zinc-900 rounded-full"></div>
            </div>
          </div>

          <div className="flex flex-col items-center -ml-[132%] -my-[50%] space-y-1">
            {/* Top Pins */}
            <div className="flex space-x-1">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="w-1 h-3 bg-zinc-900 rounded"></div>
              ))}
            </div>

            {/* Central Chip Body */}
            <div className="w-12 h-6 bg-zinc-900 rounded-md shadow-inner"></div>

            {/* Bottom Pins */}
            <div className="flex space-x-1">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="w-1 h-3 bg-zinc-900 rounded"></div>
              ))}
            </div>
          </div>

          {/* Node Cards */}
          {nodes.map((node, index) => (
            <div
              key={node.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10 transition-all duration-500 hover:z-30"
              style={{
                left: `${node.position.x}%`,
                top: `${node.position.y}%`,
                animationDelay: `${index * 0.2}s`,
              }}
              onMouseEnter={() => setActiveNode(node.id)}
              onMouseLeave={() => setActiveNode(null)}
            >
              <div
                className={`
                relative group cursor-pointer transition-all duration-300 hover:scale-110 
                ${activeNode === node.id ? "scale-110" : "scale-100"}
              `}
              >
                <div className="">
                  <div
                    className={`
                  w-44 h-44 bg-gradient-to-tr from-black via-zinc-600 to-black/30 rounded-xl border border-neutral-800
                  shadow-xl  flex items-center justify-center backdrop-blur-sm
                  group-hover:shadow-2xl group-hover:border-slate-500 transition-all duration-300
                  ${activeNode === node.id ? "shadow-2xl border-slate-500" : ""}
                `}
                  >
                    <div
                      className={`
                    w-24 h-24   bg-zinc-950 border border-zinc-800 rounded-lg flex items-center justify-center text-white shadow-lg
                    group-hover:scale-110 transition-transform duration-300 
                  `}
                    >
                      {node.icon}
                    </div>
                  </div>
                </div>

                {/* Tooltip */}
                <div
                  className={`
                  absolute left-1/2 transform -translate-x-1/2 mt-3 transition-all duration-300 pointer-events-none
                  ${
                    activeNode === node.id
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-2"
                  }
                `}
                >
                  <div className="bg-black border border-slate-600 rounded-lg p-3 shadow-xl backdrop-blur-sm min-w-[300px]">
                    <h3 className="text-white font-semibold text-sm mb-1 flex items-center gap-2">
                      {node.title}
                      <ChevronRight size={14} className="text-cyan-400" />
                    </h3>
                    <p className="text-slate-300 text-xs">{node.description}</p>
                  </div>
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black border-l border-t border-slate-600 rotate-45"></div>
                </div>

                {/* Glow Effect */}
                <div
                  className={`
    absolute inset-0 rounded-xl transition-opacity duration-300 pointer-events-none
    ${activeNode === node.id ? "opacity-100" : "opacity-0"}
  `}
                >
                  <div
                    className="w-full h-full rounded-xl"
                    style={{
                      boxShadow: `
       0 0 8px 4px rgba(82, 82, 91, 0.4),
        0 0 16px 8px rgba(82, 82, 91, 0.3),
        0 0 32px 16px rgba(82, 82, 91, 0.2)
      `,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Title */}
    </div>
    </Parallax>
  );
};

export default AnimatedHub;
