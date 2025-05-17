"use client";

import { Code, Database, Globe, PenTool, BarChart, Bot } from "lucide-react";
import { GlowingEffect } from "../ui/glowing-effect";

const Skills = () => {
  const skillsData = [
    {
      icon: <Code className="h-4 w-4 text-black dark:text-neutral-400" />,
      title: "Frontend Development",
      description:
        "HTML, CSS, JS, React, Vue.js – built 20+ responsive interfaces and mastered component-driven design.",
    },
    {
      icon: <Database className="h-4 w-4 text-black dark:text-neutral-400" />,
      title: "Backend & Database",
      description:
        "Proficient in Node.js, Python, Java, SQL. Experience designing REST APIs and backend logic.",
    },
    {
      icon: <Bot className="h-4 w-4 text-black dark:text-neutral-400" />,
      title: "Machine Learning & AI",
      description:
        "Worked with TensorFlow, PyTorch, Scikit-learn. Implemented ML models & basic NLP pipelines.",
    },
    {
      icon: <Globe className="h-4 w-4 text-black dark:text-neutral-400" />,
      title: "DevOps & Cloud",
      description:
        "Hands-on with Docker, Kubernetes, AWS, and CI/CD pipelines for scalable deployment.",
    },
    {
      icon: <BarChart className="h-4 w-4 text-black dark:text-neutral-400" />,
      title: "Data Analysis",
      description:
        "Analyzed datasets using Python, R, and SQL. Visualized insights using Tableau and Matplotlib.",
    },
    {
      icon: <PenTool className="h-4 w-4 text-black dark:text-neutral-400" />,
      title: "UI/UX Design",
      description:
        "Designed wireframes and prototypes in Figma, Adobe XD. Strong sense of user-centered design.",
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 md:px-10 bg-gray-950 font-dm">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <h6 className="text-orange-400 font-medium mb-2">SKILLS</h6>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Technical Expertise
          </h2>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {skillsData.map((item, index) => (
            <GridItem
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;

interface GridItemProps {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ icon, title, description }: GridItemProps) => {
  return (
    <li className="min-h-[14rem] list-none">
      <div className="relative h-full rounded-2xl border border-gray-800 p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 font-sans text-xl font-semibold text-black dark:text-white">
                {title}
              </h3>
              <p className="font-sans text-sm text-black dark:text-neutral-400">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
