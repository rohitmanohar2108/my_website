"use client";

import { Briefcase } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Experience = () => {
  const experienceData = [
    {
      id: 1,
      role: "Senior Frontend Developer",
      company: "Alphabet Inc.",
      duration: "2020 - Present",
      description:
        "Lead a team of developers to create responsive and performant web applications. Implemented CI/CD pipelines and improved code quality standards.",
      technologies: ["React", "TypeScript", "GraphQL", "Jest"],
      color: "#111827",
      borderColor: "border-zinc-700",
      link: "#",
    },
    {
      id: 2,
      role: "Full Stack Developer",
      company: "Microsoft",
      duration: "2018 - 2020",
      description:
        "Developed and maintained cloud-based applications. Collaborated with product managers to define and implement new features.",
      technologies: ["Node.js", "React", "Azure", "MongoDB"],
      color: "#111827",
      borderColor: "border-zinc-700",
      link: "#",
    },
    {
      id: 3,
      role: "Web Developer",
      company: "Apple Inc.",
      duration: "2016 - 2018",
      description:
        "Created responsive web applications and implemented modern UI components. Optimized site performance and improved user experience.",
      technologies: ["JavaScript", "Vue.js", "CSS", "PHP"],
      color: "#111827",
      borderColor: "",
      link: "#",
    },
  ];

  const [animateCards, setAnimateCards] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimateCards(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("experience");
    if (section) observer.observe(section);
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="experience" className="py-20 px-4 md:px-10 bg-black font-sans">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <h6 className="text-orange-400 font-medium mb-2">EXPERIENCE</h6>
          <h2 className="text-3xl md:text-5xl font-medium">Work History</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experienceData.map((item, index) => (
            <div
              key={item.id}
              className="relative group block p-2 h-full w-full"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.span
                    className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-[#111827] block rounded-2xl"
                    layoutId="hoverBackground"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.15 } }}
                    exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
                  />
                )}
              </AnimatePresence>

              <motion.div
                className={`p-6 rounded-2xl bg-gradient-to-br ${item.color} border border-neutral-800  hover:border-zinc-700 relative overflow-hidden transform transition-all duration-500 z-20 flex flex-col`}
                initial={{ opacity: 0, y: 24 }}
                animate={animateCards ? { opacity: 1, y: 0, transition: { delay: index * 0.15 } } : {}}
              >
                {/* Decorative Blurs */}
                <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-white/5 pointer-events-none" />
                <div className="absolute -left-4 -bottom-4 w-20 h-20 rounded-full bg-white/5 pointer-events-none" />

                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-medium mb-1">{item.role}</h3>
                    <p className="text-gray-300">{item.company}</p>
                    <p className="text-gray-400 text-sm">{item.duration}</p>
                  </div>
                  <div className="p-2 bg-white/10 rounded-lg">
                    <Briefcase className="h-5 w-5 text-white" />
                  </div>
                </div>

                <p className="text-gray-300 text-base mb-6 flex-grow">{item.description}</p>

                <div className="mb-6">
                  <h4 className="text-sm text-gray-300 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech, i) => (
                      <div
                        key={i}
                        className="px-3 py-1 bg-white/10 rounded-full text-xs"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-auto">
                  <a
                    href={item.link}
                    className="text-sm font-medium text-white hover:text-purple-300 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Details →
                  </a>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

