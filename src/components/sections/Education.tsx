import { BookOpen, TimerIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { FaSchool, FaUniversity } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Technology in Computer Science",
      institution: "National Institute of Technology Karnataka",
      duration: "2022 - 2026",
      description:
        "Pursuing core courses in Computer Science with a strong foundation in algorithms, data structures, computer networks, and Artificial Intelligence.Engaged in project work across domain",
      color: "#111827",
      borderColor: "border-zinc-400",
      topics: "40+ Courses",
      problems: "4 Years",
      icon: <FaUniversity className="w-12 h-12 text-green-300" />,
      Status: "On Going",
    },
    {
      id: 2,
      degree: "Higher Secondary Education Maharashtra",
      institution: "Dharampeth Science College, Nagpur",
      duration: "2020 - 2022",
      description:
        "Achieved top ranks in SOF International Olympiads 2022 — Rank 1 in Mathematics and Science, and Rank 5 in English at the college level.Engaged in project work across domain  Olympiads 2022 — Rank 1 in Mathematics and Sci",
      color: "#111827",
      borderColor: "border-purple-100",
      topics: "12+ Courses",
      problems: "2 Years",
      icon: <FaSchool className="w-12 h-12 text-orange-300" />,
      Status: "Completed",
    },
     {
      id: 3,
      degree: "Higher Secondary Education Maharashtra",
      institution: "Dharampeth Science College, Nagpur",
      duration: "2020 - 2022",
      description:
        "Achieved top ranks in SOF International Olympiads 2022 — Rank 1 in Mathematics and Science, and Rank 5 in English at the college level.Engaged in project work across domain  Olympiads 2022 — Rank 1 in Mathematics and Sci",
      color: "#111827",
      borderColor: "border-purple-100",
      topics: "12+ Courses",
      problems: "2 Years",
      icon: <FaSchool className="w-12 h-12 text-orange-300" />,
      Status: "Completed",
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

    const section = document.getElementById("education");
    if (section) observer.observe(section);
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="education" className="py-20 px-4 md:px-10 bg-black font-sans">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <h6 className="text-orange-400 font-medium mb-2">EDUCATION</h6>
          <h2 className="text-3xl md:text-4xl font-bold">Academic Background</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {educationData.map((item, index) => (
            <div
              key={item.id}
              className="relative group block p-2 h-full w-full"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.span
                    className="absolute inset-0 h-full w-full  bg-neutral-200 dark:bg-[#111827]  block rounded-xl"
                    layoutId="hoverBackground"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.15 } }}
                    exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
                  />
                )}
              </AnimatePresence>

              <div
                className={`p-6 rounded-xl bg-gradient-to-br ${item.color}   border border-neutral-800 hover:border-zinc-700 relative overflow-hidden transform transition-all duration-500 z-20 ${
                  animateCards
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-white/5" />
                <div className="absolute -left-4 -bottom-4 w-20 h-20 rounded-full bg-white/5" />

                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{item.degree}</h3>
                    <p className="text-gray-300">{item.institution}</p>
                    <p className="text-gray-400 text-sm">{item.duration}</p>
                  </div>
                </div>

                <p className="text-gray-300 text-sm mb-6">{item.description}</p>

                <div className="flex items-center mb-4">
                  <BookOpen className="h-4 w-4 text-white mr-2" />
                  <span className="text-sm text-gray-300">{item.topics}</span>

                  <div className="mx-4 h-4 border-l border-white/20"></div>

                  <TimerIcon className="h-4 w-4 text-white mr-2" />
                  <span className="text-sm text-gray-300">{item.problems}</span>
                </div>

                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-300">{item.Status}</div>
                  <div className="p-2 bg-white/10 rounded-lg">{item.icon}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
