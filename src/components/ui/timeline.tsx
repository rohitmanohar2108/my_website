"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { FaGithub } from "react-icons/fa";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

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
    image:
      "https://media.istockphoto.com/id/155439315/photo/passenger-airplane-flying-above-clouds-during-sunset.jpg?s=612x612&w=0&k=20&c=LJWadbs3B-jSGJBVy9s0f8gZMHi2NvWFXa3VJ2lFcL0=", // replace with real image
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
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/036/324/708/small/ai-generated-picture-of-a-tiger-walking-in-the-forest-photo.jpg",
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
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtnvAOajH9gS4C30cRF7rD_voaTAKly2Ntaw&s",
  },
];

export const Timeline = () => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  const timelineData: TimelineEntry[] = projectData.map((project) => ({
    title: project.title,
    content: (
      <div className="bg-white dark:bg-[#0b0f19] p-6 rounded-xl shadow-xl border border-neutral-800 font-sans ">
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
          {project.duration}
        </p>
        <p className="text-base text-black dark:text-white mb-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="bg-gray-200 dark:bg-[#111827] px-3 py-1 rounded-md border border-gray-600 text-xs text-black dark:text-white"
            >
              {tech}
            </span>
          ))}
        </div>
        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto rounded-lg mb-4"
          />
        )}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3 py-1 text-sm rounded-md bg-[#111827] border border-gray-600 text-white hover:bg-[#1a2332] hover:border-blue-500 transition duration-200"
        >
          <FaGithub /> GitHub
        </a>
      </div>
    ),
  }));

  return (
    <div
      id="projects"
      className="w-full bg-white dark:bg-gray-950 font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
          Projects Timeline
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
          Here's a chronological overview of my development journey.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {timelineData.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 ">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}

        <div
          style={{
            height: height + "px",
          }}
          className="hidden sm:block absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className=" absolute inset-x-0 top-0  w-[2px] hidden sm:block  lg:bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
