import React from 'react';
import { GraduationCap, BookOpen, Award, School, Users, Trophy } from 'lucide-react';

function Edu() {
  return (
    <div className="min-h-screen bg-red-50 relative overflow-hidden">

        
      {/* Background with curved border effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-black"></div>
      
      {/* Curved border frame - top and sides with glow */}
      <div className="absolute inset-0 border-2 border-blue-500/40 rounded-[3rem] m-4 shadow-[0_0_20px_rgba(59,130,246,0.3)] "></div>
      
      {/* Large curved bottom element with intense glow */}
      <div className="absolute bottom-0 left-1/2 mb-4 transform -translate-x-1/2 w-[90%] h-[60%] border-t-2 border-blue-500/50 rounded-t-full shadow-[0_-10px_40px_rgba(59,130,246,0.4)] "></div>
      
      {/* Inner curved element with softer glow */}
      <div className="absolute bottom-0 left-1/2 mb-4 transform -translate-x-1/2 w-[90%] h-[40%] border-t-2 border-blue-400/30 rounded-t-full shadow-[0_-5px_25px_rgba(96,165,250,0.3)] "></div>
      
      {/* Additional glowing curved lines for depth */}
      <div className="absolute bottom-0 left-1/2 mb-4 transform -translate-x-1/2 w-[80%] h-[25%] border-t border-blue-300/20 rounded-t-full shadow-[0_-3px_15px_rgba(147,197,253,0.2)]"></div>
      
      {/* Side accent curves with glow */}
      <div className="absolute top-1/4 left-0 w-24 ml-4 h-48 border-r border-blue-500/30 rounded-r-full shadow-[5px_0_15px_rgba(59,130,246,0.2)] "></div>
      <div className="absolute top-1/4 right-0 w-24 mr-5 h-48 border-l border-blue-400/25 rounded-l-full shadow-[-5px_0_12px_rgba(96,165,250,0.2)]"></div>

      <div className="relative z-10 min-h-screen flex flex-col justify-center px-8 py-20">
        <div className="max-w-7xl mx-auto w-full">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-blue-400 text-sm font-semibold tracking-wider uppercase mb-4 drop-shadow-[0_0_8px_rgba(96,165,250,0.5)]">
              MY EDUCATION JOURNEY
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
              Academic Excellence
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(96,165,250,0.5)]">
                Through Every Level
              </span>
            </h1>
          </div>

          {/* Education Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            
            {/* Secondary Education */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] group">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300">
                  <School className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Secondary Education</h3>
                <p className="text-blue-400 font-medium">Foundation Years</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between py-2 border-b border-slate-700/50">
                  <span className="text-gray-300">Mathematics</span>
                  <span className="text-green-400 text-sm">A+</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-slate-700/50">
                  <span className="text-gray-300">Physics</span>
                  <span className="text-green-400 text-sm">A</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-slate-700/50">
                  <span className="text-gray-300">Chemistry</span>
                  <span className="text-green-400 text-sm">A</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-slate-700/50">
                  <span className="text-gray-300">Computer Science</span>
                  <span className="text-green-400 text-sm">A+</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-gray-300">English</span>
                  <span className="text-green-400 text-sm">A</span>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-slate-700/50">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Overall Grade</span>
                  <span className="text-lg font-bold text-white">92%</span>
                </div>
              </div>
            </div>

            {/* Bachelor's Degree - Featured */}
            <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 backdrop-blur-sm border-2 border-blue-500/50 rounded-2xl p-8 hover:border-blue-400/70 transition-all duration-300 hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] group relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-blue-500 to-blue-400 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                  Current
                </span>
              </div>
              
              <div className="text-center mb-6 mt-2">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500/30 to-blue-600/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] transition-all duration-300">
                  <GraduationCap className="w-8 h-8 text-blue-300" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Bachelor's Degree</h3>
                <p className="text-blue-300 font-medium">Computer Science & Engineering</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between py-2 border-b border-blue-700/30">
                  <span className="text-gray-200">Data Structures & Algorithms</span>
                  <span className="text-green-400 text-sm">A+</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-blue-700/30">
                  <span className="text-gray-200">Web Development</span>
                  <span className="text-green-400 text-sm">A+</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-blue-700/30">
                  <span className="text-gray-200">Database Management</span>
                  <span className="text-green-400 text-sm">A</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-blue-700/30">
                  <span className="text-gray-200">Software Engineering</span>
                  <span className="text-green-400 text-sm">A+</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-gray-200">Machine Learning</span>
                  <span className="text-green-400 text-sm">A</span>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-blue-700/30">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-300">Current CGPA</span>
                  <span className="text-lg font-bold text-white">3.8/4.0</span>
                </div>
              </div>
            </div>

            {/* Certifications & Additional Learning */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] group">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-300">
                  <Award className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Certifications</h3>
                <p className="text-purple-400 font-medium">Professional Development</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between py-2 border-b border-slate-700/50">
                  <span className="text-gray-300">React.js Development</span>
                  <span className="text-green-400 text-sm">✓</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-slate-700/50">
                  <span className="text-gray-300">Node.js Backend</span>
                  <span className="text-green-400 text-sm">✓</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-slate-700/50">
                  <span className="text-gray-300">AWS Cloud Practitioner</span>
                  <span className="text-green-400 text-sm">✓</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-slate-700/50">
                  <span className="text-gray-300">Python Programming</span>
                  <span className="text-green-400 text-sm">✓</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-gray-300">Git & Version Control</span>
                  <span className="text-green-400 text-sm">✓</span>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-slate-700/50">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Total Certifications</span>
                  <span className="text-lg font-bold text-white">12+</span>
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

export default Edu;