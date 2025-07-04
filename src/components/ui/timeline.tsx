"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { BackgroundBeams } from "./background-beams";
import { Parallax } from "react-scroll-parallax";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

const projectData = [
  {
    id: 1,
    title: "FilmNinja - Interactive Movie Browsing App",
    duration: "May 2024 - June 2024",
    description:
      "Developed a dynamic movie browsing application with a responsive design. Integrated TMDB API for real-time movie data and ChatGPT API for personalized recommendations. Enabled secure user authentication with Firebase.",
    technologies: [
      "ReactJs",
      "JavaScript",
      "Firebase",
      "TMDB API",
      "OpenAI API",
    ],
    color: "from-indigo-900 to-blue-900",
    link: "https://github.com/rohitmanohar2108/FilmNinja",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3YX7njxSTaToEKL9QNIC2ZVQvb27yzj_PIw&s", // replace with your image
  },
  {
    id: 2,
    title: "Image Upscaling using Deep Learning",
    duration: "July 2024 - Aug 2024",
    description:
      "Created a web app to upscale and enhance low-light images. Used a self-supervised CNN with Zero-DCE for brightness correction and GANs for super-resolution. Deployed backend with Flask and frontend using Bootstrap.",
    technologies: ["Python", "TensorFlow", "OpenCV", "Deep Learning", "Flask"],
    color: "from-gray-900 to-neutral-800",
    link: "https://github.com/rohitmanohar2108/image-resolution",
    image: "https://images.unsplash.com/photo-1612832020809-c9d453abece6", // replace with your image
  },
  {
    id: 3,
    title: "Crypto Trade Simulator",
    duration: "April 2025 – May 2025",
    description:
      "Built a crypto trading simulator using real-time Level-2 orderbook data from OKX via WebSocket. Modeled market behavior with quantile/logistic regression and the Almgren–Chriss framework to calculate net cost per trade.",
    technologies: ["Python", "WebSocket", "NumPy", "Scikit-learn", "Flask"],
    color: "from-yellow-900 to-orange-800",
    link: "https://github.com/rohitmanohar2108/Crypto-Trade-Simulator",
    image:
      "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/001/488/038/datas/original.png", // replace with your image
  },
  {
    id: 4,
    title: "Portfolio Website",
    duration: "May 2024 - Nov 2024",
    description:
      "Designed and developed a personal portfolio website using React and TailwindCSS. Added GSAP animations for dynamic transitions and optimized JavaScript for performance. Continually updated content to improve engagement.",
    technologies: ["ReactJs", "TailwindCSS", "GSAP", "JavaScript"],
    color: "from-purple-900 to-pink-900",
    link: "https://github.com/rohitmanohar2108/my_website", // replace with live link
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSID6Z86--oT3Rmdai617u6caujUHt7E2QsCw&s", // replace with your image
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
        <p className="text-sm text-[#1FB8CD] dark:text-gray-400 mb-2">
          {project.duration}
        </p>
        <p className="text-base text-black dark:text-white mb-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="bg-gray-200 dark:bg-[#1FB8CD]/30 px-3 py-1 rounded-md border border-[#1FB8CD]/60 text-xs text-black dark:text-white"
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
          className="inline-flex items-center gap-2 px-3 py-1 text-sm rounded-md text-black bg-[#1FB8CD] hover:bg-[#1FB8CD]/90 transition duration-200"
        >
          <FaGithub /> GitHub
        </a>
      </div>
    ),
  }));

  return (
    <div
      id="projects"
      className="w-full bg-white dark:bg-black font-sans md:px-10"
      ref={containerRef}
    >
     
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-3xl font-mono mb-4 text-[#1FB8CD]  max-w-4xl">
          [ PROJECTS ]
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
            className=" absolute inset-x-0 top-0  w-[2px] hidden sm:block  lg:bg-gradient-to-t from-[#1FB8CD] via-[#1FB8CD]/60 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
