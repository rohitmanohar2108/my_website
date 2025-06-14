// components/AnimatedNameTitle.tsx
"use client";

import React from "react";

const AnimatedNameTitle = () => {
  const fullName = "ROHIT MANOHAR".split("");

  return (
    <div className="text-center mb-16 relative">
      <h1
        className="flex flex-wrap justify-center gap-4 md:gap-6 text-[80px] md:text-[130px] lg:text-[160px] font-bold tracking-tighter text-transparent relative z-10"
        style={{
          WebkitTextStroke: "2px black",
          textShadow:
            "0 0 40px rgba(255,255,255,0.3), 0 0 80px rgba(168,85,247,0.3)",
        }}
      >
        {fullName.map((letter, index) => (
          <span key={index} className="relative group">
            <span className="relative inline-block transition-transform duration-300 group-hover:transform group-hover:scale-110 group-hover:text-purple-300">
              {letter}
            </span>
            {letter !== " " && (
              <>
               
                <span className="absolute inset-0 bg-white/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></span>
              </>
            )}
          </span>
        ))}
      </h1>

      {/* Animated dots under the name */}
     
    </div>
  );
};

export default AnimatedNameTitle;
