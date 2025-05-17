"use client";

import React, { useEffect, useState } from "react";
import { Code } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

const Projects = () => {
  const projectData = [
    {
      id: 1,
      title: "Airline Booking System",
      duration: "March 2024 - April 2024",
      description:
        "Developed a full-stack airline booking system enabling users to search, book, and cancel flights with secure login and admin panel.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      color: "from-teal-900 to-emerald-900",
      link: "https://github.com/your-username/airline-booking-system",
    },
    {
      id: 2,
      title: "Portfolio Website",
      duration: "January 2024 - Present",
      description:
        "Built a fully responsive portfolio with smooth animations, dark/light mode toggle, and interactive UI components.",
      technologies: ["React", "TailwindCSS", "Framer Motion", "Lottie"],
      color: "from-purple-900 to-pink-900",
      link: "https://github.com/your-username/portfolio",
    },
    {
      id: 3,
      title: "News Aggregator",
      duration: "February 2024",
      description:
        "A React app fetching and displaying categorized news using an external API with shimmer loading and scroll-to-top feature.",
      technologies: ["React", "TypeScript", "NewsAPI", "GSAP"],
      color: "from-yellow-900 to-orange-900",
      link: "https://github.com/your-username/news-aggregator",
    },
  ];

  const [animateCards, setAnimateCards] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimateCards(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("projects");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="projects" className="py-20 px-4 md:px-10 bg-gray-950 font-dm">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <h6 className="text-green-400 font-medium mb-2">PROJECTS</h6>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Work</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projectData.map((item, index) => (
            <div
              key={item.id}
              className={`p-6 rounded-2xl bg-black relative overflow-hidden transform transition-all duration-500 hover:scale-[1.02] flex flex-col ${
                animateCards ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-white/5"></div>
              <div className="absolute -left-4 -bottom-4 w-20 h-20 rounded-full bg-white/5"></div>

              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-bold mb-1 text-white">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.duration}</p>
                </div>
                <div className="p-2 bg-white/10 rounded-lg">
                  <Code className="h-5 w-5 text-white" />
                </div>
              </div>

              <p className="text-gray-300 text-sm mb-6">{item.description}</p>

              <div className="mb-6">
                <h4 className="text-sm text-gray-300 mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech, i) => (
                    <div
                      key={i}
                      className="px-3 py-1 bg-white/10 rounded-full text-xs text-white"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-auto z-40">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white hover:text-green-300 transition-colors"
                >
                  <FaGithub size={20} title="View on GitHub" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
