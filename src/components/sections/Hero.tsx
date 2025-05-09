import { ArrowDown, ArrowRight } from "lucide-react";
import Scene from "../3D/Scene";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToWork = () => {
    const workSection = document.getElementById("projects"); // Use your section's id
    if (workSection) {
      workSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center py-20 px-4 md:px-10 relative overflow-hidden"
    >
      <div>
        <Scene />
      </div>
      <div className="absolute inset-0 bg-black z-10"></div>

      <div className="container mx-auto relative z-20">
        <div className="w-full lg:w-[100%]  px-12 py-12 rounded-xl shadow-lg backdrop-blur-none bg-black/70 lg:bg-black/40 border border-zinc-900">
          <div className="mb-8 inline-block">
            <div className="px-4 py-1 font-dm border border-orange-400 rounded-full text-orange-400 text-sm mb-6 opacity-0 animate-fadeIn">
              Full Stack Developer
            </div>
          </div>

          <h1 className="text-4xl font-dm lg:text-8xl font-bold mb-6 opacity-0 animate-slideUp">
            <span className="text-white">Hello, I'm </span>
            <span className="text-orange-400">
              <Typewriter
                words={[
                  "Rohit Manohar",

                  "Developer",
                  "CSE Student at NITK",
                  "Tech Enthusiast",
                ]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h1>
          <div className="text-lg lg:text-xl text-white">
            Want to become the best{"  "}
            <span className="inline-block px-3 lg:py-2 py-1 bg-zinc-900 border border-orange-400 rounded-full text-orange-400 transform -rotate-12">
              Top 1%
            </span>{"  "}
            software developer
          </div>

          <div className="flex space-x-6 opacity-0 animate-slideUp animation-delay-400">
            <button
              onClick={scrollToContact}
              className="px-6 py-3 mt-9 bg-black border border-white/50 text-white rounded-md flex items-center group hover:shadow-lg hover:border-white/30  transition-all duration-300"
            >
              Let's Talk
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300 hidden sm:inline" />
            </button>
            <button
              onClick={scrollToWork}
              className="px-6 py-3 lg:px-6 lg:py-3  mt-9  bg-black border border-white/50 text-white rounded-md flex items-center group hover:shadow-lg hover:border-white/30 transition-all duration-300"
            >
              View My Work
              <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform duration-300 hidden sm:inline" />
            </button>
          </div>
        </div>
        <div className="bg-gradient-to-b from-white blur-lg"></div>
      </div>
    </section>
  );
};

export default Hero;
