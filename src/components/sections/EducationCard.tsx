import React from "react";
import { CheckCircle, BookOpen, Award, Users } from "lucide-react";

function EducationCard() {
  return (
    <div className="">
      <div
        id="education"
        className="min-h-screen bg-gradient-to-b from-zinc-900 to-black border-t border-zinc-800 rounded-t-full   text-white py-16 px-4 font-sans"
      >
        
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-xl text-orange-400  font-medium mb-2">
              EDUCATION
            </h1>
            <p className="text-3xl md:text-5xl font-medium text-white  mx-auto">
              Academic Background
            </p>
          </div>

  



          {/* Education Cards */}
          <div className="relative grid lg:grid-cols-3 gap-8 lg:gap-5 mt-44">
            {/* Bachelor's Degree Card */}
            <div className="bg-[#0b0f19] rounded-l-2xl p-8 border border-neutral-800  hover:border-zinc-700 transition-colors lg:mt-8">
              <div className="flex items-center mb-6">
                <Users className="w-6 h-6 text-orange-400 mr-3" />
                <h2 className="text-2xl font-medium">Higher Secondary</h2>
              </div>

              <div className="mb-8">
                <div className="text-2xl font-bold mb-2 ">
                  Higher Secondary Education
                </div>
                <div className="text-xl text-orange-400 mb-2">
                  Science Stream (PCM)
                </div>
                <div className="text-lg text-gray-300 mb-2">
                  Dharampeth Science College, Nagpur
                </div>
                <div className="text-gray-400">2020 - 2022</div>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">
                    Physics - Mechanics, Thermodynamics, Optics
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">
                    Chemistry - Organic, Inorganic, Physical
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">
                    Mathematics - Calculus, Algebra, Statistics
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">
                    Computer Science - Programming Fundamentals
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">
                    English Literature and Communication
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">
                    JEE Main & Advanced Preparation
                  </span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-700">
                <p className="text-sm text-gray-400">
                  Maharashtra State Board •{" "}
                  <span className="text-orange-400">Percentage: NA</span>
                </p>
              </div>
            </div>

            {/* Higher Secondary Education Card - Overlapping */}
            <div className="bg-[#0b0f19] rounded-2xl p-8 border border-orange-400  transition-colors relative  lg:scale-110 lg:z-10 lg:shadow-2xl lg:shadow-orange-500/20">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-orange-500 text-black px-4 py-1 rounded-full text-sm font-semibold">
                  PRESENTLY
                </span>
              </div>

              <div className="flex items-center mb-6">
                <BookOpen className="w-6 h-6 text-orange-400 mr-3" />
                <h2 className="text-2xl font-medium">Bachelor's Degree</h2>
              </div>

              <div className="mb-8">
                <div className="text-2xl font-bold mb-2">
                  Bachelor of Technology
                </div>
                <div className="text-xl text-orange-400 mb-2">
                  Computer Science and Engineering
                </div>
                <div className="text-lg text-gray-300 mb-2">
                  National Institute of Technology Karnataka
                </div>
                <div className="text-gray-400">2022 - 2026</div>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">
                    Data Structures and Algorithms
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">
                    Object-Oriented Programming (Java, C++)
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">
                    Database Management Systems
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">
                    Computer Networks and Security
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">
                    Software Engineering and Design Patterns
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">
                    Machine Learning and Artificial Intelligence
                  </span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-700">
                <p className="text-sm text-gray-400">
                  Currently pursuing •{" "}
                  <span className="text-orange-400">CGPA: NA</span>
                </p>
              </div>
            </div>

            {/* Secondary Education Card */}
            <div className="bg-[#0b0f19] rounded-r-2xl p-8 border border-neutral-800  hover:border-zinc-700 transition-colors lg:mt-8">
              <div className="flex items-center mb-6">
                <Award className="w-6 h-6 text-orange-400 mr-3" />
                <h2 className="text-2xl font-medium">Secondary School</h2>
              </div>

              <div className="mb-8">
                <div className="text-2xl font-bold mb-2">
                  Secondary School Certificate
                </div>
                <div className="text-xl text-orange-400 mb-2">
                  Science & Mathematics
                </div>
                <div className="text-lg text-gray-300 mb-2">
                  St. Xavier's High School, Nagpur
                </div>
                <div className="text-gray-400">2018 - 2020</div>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">
                    Mathematics - Algebra, Geometry, Trigonometry
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">
                    Science - Physics, Chemistry, Biology
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">
                    English Language and Literature
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">
                    Social Studies - History, Geography, Civics
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">
                    Hindi Language and Literature
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">
                    Information Technology Basics
                  </span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-700">
                <p className="text-sm text-gray-400">
                  Maharashtra State Board •{" "}
                  <span className="text-orange-400">Percentage: NA</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EducationCard;
