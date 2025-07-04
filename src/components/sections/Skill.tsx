import React from "react";
import {
  Code,
  Database,
  Globe,
  Server,
  Smartphone,
  Palette,
  GitBranch,
  Cloud,
  Terminal,
  Layers,
  CheckCircle,
} from "lucide-react";

function Skill() {
  return (
    <div id="skills" className="hidden sm:block lg:block min-h-screen bg-black relative overflow-hidden">
      {/* Background with curved border effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-black"></div>

      {/* Curved border frame - top and sides with glow */}

      {/* Large curved bottom element with intense glow */}

      {/* Inner curved element with softer glow */}
      <div
        className="absolute bottom-0 left-1/2 mb-2 bg-gradient-to-b from-zinc-900 to-black transform -translate-x-1/2 w-[90%] h-[40%] border-t border-zinc-400/30 rounded-t-full shadow-[0_0_20px_rgba(31,184,205,0.3)]
"
      ></div>

      {/* Additional glowing curved lines for depth */}
      <div
        className="absolute bottom-0 left-1/2 mb-2 bg-gradient-to-b from-zinc-900 to-black  transform -translate-x-1/2 w-[80%] h-[25%] border-t border-zinc-400/30 rounded-t-full 

"
      ></div>

      {/* Side accent curves with glow */}
      <div
        className="absolute top-1/4 left-0 w-32 h-64 border-r border-zinc-500/30 rounded-r-full shadow-[0_0_20px_rgba(31,184,205,0.3)]
 "
      ></div>
      <div
        className="absolute top-1/3 right-0 w-24 h-48 border-l border-zinc-400/25 rounded-l-full shadow-[0_0_20px_rgba(31,184,205,0.3)]
"
      ></div>

      <div className="relative z-10 min-h-screen flex flex-col justify-center px-8 py-20">
        <div className="max-w-7xl mx-auto w-full">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-[#1FB8CD] text-xl font-mono tracking-wider uppercase mb-4 drop-shadow-[0_0_8px_rgba(96,165,250,0.5)]">
             [ SKILLS ]
            </h2>
            <h1 className="text-3xl md:text-5xl font-medium text-white leading-tight mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
              TECHNICAL EXPERTISE
            </h1>
          </div>

          {/* Skills Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-12 mt-32">
            {/* Frontend Development */}
            <div className="bg-white/5 backdrop-blur-3xl border border-neutral-800  rounded-l-2xl p-8 hover:border-zinc-700 transition-all duration-300  group">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-zinc-900 rounded-full flex items-center justify-center mx-auto mb-4  transition-all duration-300">
                  <Globe className="w-8 h-8 text-[#1FB8CD]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Languages
                </h3>
                <p className="text-[#1FB8CD] font-medium">
                  Adapt & familiar with
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between py-2 border-b border-zinc-700">
                  <span className="text-gray-300">C/C++</span>
                  <CheckCircle className="w-5 h-5 text-[#1FB8CD]" />
                </div>
                <div className="flex items-center justify-between py-2 border-b border-zinc-700">
                  <span className="text-gray-300">Python</span>
                  <CheckCircle className="w-5 h-5 text-[#1FB8CD]" />
                </div>
                <div className="flex items-center justify-between py-2 border-b border-zinc-700">
                  <span className="text-gray-300">JavaScript</span>
                  <CheckCircle className="w-5 h-5 text-[#1FB8CD]" />
                </div>
                <div className="flex items-center justify-between py-2 border-b border-zinc-700">
                  <span className="text-gray-300">HTML/CSS</span>
                  <CheckCircle className="w-5 h-5 text-[#1FB8CD]" />
                </div>
                <div className="flex items-center justify-between py-2 border-b border-zinc-700">
                  <span className="text-gray-300">Verilog</span>
                  <CheckCircle className="w-5 h-5 text-[#1FB8CD]" />
                </div>
              </div>
            </div>

            {/* Backend Development - Featured */}
            <div
              className="bg-[#1FB8CD]/10  to-blue-800/20 scale-110 backdrop-blur-3xl border border-[#1FB8CD] rounded-2xl p-8  transition-all duration-300 shadow-[0_0_20px_rgba(31,184,205,0.3)]
 group relative"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-[#1FB8CD] text-black px-4 py-1 rounded-full text-sm font-semibold shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                  STRONGEST
                </span>
              </div>

              <div className="text-center mb-6 mt-2">
                <div className="w-16 h-16 bg-zinc-900 rounded-full flex items-center justify-center mx-auto mb-4  transition-all duration-300">
                  <Server className="w-8 h-8 text-[#1FB8CD]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Backend Development
                </h3>
                <p className="text-[#1FB8CD] font-medium">
                  Server & Database Management
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between py-2 border-b border-zinc-700">
                  <span className="text-gray-200">Node.js</span>
                  <CheckCircle className="w-5 h-5 text-[#1FB8CD]" />
                </div>
                <div className="flex items-center justify-between py-2 border-b border-zinc-700">
                  <span className="text-gray-200">Node.js</span>
                  <CheckCircle className="w-5 h-5 text-[#1FB8CD]" />
                </div>
                <div className="flex items-center justify-between py-2 border-b border-zinc-700">
                  <span className="text-gray-200">Node.js</span>
                  <CheckCircle className="w-5 h-5 text-[#1FB8CD]" />
                </div>
                <div className="flex items-center justify-between py-2 border-b border-zinc-700">
                  <span className="text-gray-200">Express.js</span>
                  <CheckCircle className="w-5 h-5 text-[#1FB8CD]" />
                </div>
                <div className="flex items-center justify-between py-2 border-b border-zinc-700">
                  <span className="text-gray-200">MongoDB</span>
                  <CheckCircle className="w-5 h-5 text-[#1FB8CD]" />
                </div>
                <div className="flex items-center justify-between py-2 border-b border-zinc-700">
                  <span className="text-gray-200">MongoDB</span>
                  <CheckCircle className="w-5 h-5 text-[#1FB8CD]" />
                </div>
                <div className="flex items-center justify-between py-2 border-b border-zinc-700">
                  <span className="text-gray-200">PostgreSQL</span>
                  <CheckCircle className="w-5 h-5 text-[#1FB8CD]" />
                </div>
                <div className="flex items-center justify-between py-2 ">
                  <span className="text-gray-200">Python/Django</span>
                  <CheckCircle className="w-5 h-5 text-[#1FB8CD]" />
                </div>
              </div>
            </div>

            {/* Tools & DevOps */}
            <div className="bg-white/5 backdrop-blur-3xl border border-neutral-800 rounded-r-2xl p-8 hover:border-zinc-700 transition-all duration-300 ">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-zinc-900 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-300">
                  <Terminal className="w-8 h-8 text-[#1FB8CD]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Tools & DevOps
                </h3>
                <p className="text-[#1FB8CD] font-medium">
                  Development & Deployment
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between py-2 border-b border-zinc-700">
                  <span className="text-gray-300">Git & GitHub</span>
                  <CheckCircle className="w-5 h-5 text-[#1FB8CD]" />
                </div>
                <div className="flex items-center justify-between py-2 border-b border-zinc-700">
                  <span className="text-gray-300">Docker</span>
                  <CheckCircle className="w-5 h-5 text-[#1FB8CD]" />
                </div>
                <div className="flex items-center justify-between py-2 border-b border-zinc-700">
                  <span className="text-gray-300">AWS</span>
                  <CheckCircle className="w-5 h-5 text-[#1FB8CD]" />
                </div>
                <div className="flex items-center justify-between py-2 border-b border-zinc-700">
                  <span className="text-gray-300">Linux/Ubuntu</span>
                  <CheckCircle className="w-5 h-5 text-[#1FB8CD]" />
                </div>

                <div className="flex items-center justify-between py-2 border-b border-zinc-700">
                  <span className="text-gray-300">Figma</span>
                  <CheckCircle className="w-5 h-5 text-[#1FB8CD]" />
                </div>
                <div className="flex items-center justify-between py-2 border-b border-zinc-700">
                  <span className="text-gray-300">Linux/Ubuntu</span>
                  <CheckCircle className="w-5 h-5 text-[#1FB8CD]" />
                </div>
                <div className="flex items-center justify-between py-2 border-b border-zinc-700">
                  <span className="text-gray-300">Linux/Ubuntu</span>
                  <CheckCircle className="w-5 h-5 text-[#1FB8CD]" />
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
        </div>
      </div>

      {/* Decorative glowing elements */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400/40 rounded-full animate-pulse shadow-[0_0_8px_rgba(96,165,250,0.6)]"></div>
      <div className="absolute top-32 left-32 w-1 h-1 bg-blue-300/50 rounded-full animate-pulse delay-100 shadow-[0_0_6px_rgba(147,197,253,0.5)]"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-blue-500/30 rounded-full animate-pulse delay-200 shadow-[0_0_10px_rgba(59,130,246,0.4)]"></div>
      <div className="absolute bottom-40 right-32 w-2 h-2 bg-blue-400/35 rounded-full animate-pulse delay-300 shadow-[0_0_8px_rgba(96,165,250,0.5)]"></div>

      {/* Additional floating glowing particles */}
      <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-blue-200/40 rounded-full animate-pulse delay-500 shadow-[0_0_4px_rgba(191,219,254,0.4)]"></div>
      <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-blue-300/30 rounded-full animate-pulse delay-700 shadow-[0_0_4px_rgba(147,197,253,0.3)]"></div>
    </div>
  );
}

export default Skill;
