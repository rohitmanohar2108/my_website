import {
  User,
  BookOpen,
  Briefcase,
  Puzzle,
  Mail,
  Home,
  Workflow,
  ChevronsRight,
  Github,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BsGithub, BsInstagram, BsLinkedin, BsTelephone, BsTwitterX } from "react-icons/bs";
import { BiBriefcase, BiHome } from "react-icons/bi";
import { GrProjects } from "react-icons/gr";
import { GiSkills } from "react-icons/gi";
import { SiEducative } from "react-icons/si";

const Sidebar = ({ mobile = false }: { mobile?: boolean }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "home", icon: BiHome, label: "HOME" },
    { id: "education", icon: SiEducative, label: "EDUCATION" },
//experience section
    { id: "skills", icon: GiSkills, label: "SKILLS" },
    { id: "projects", icon: GrProjects, label: "PROJECTS" },
    { id: "contact", icon: BsTelephone, label: "CONTACT" },
  ]; 

  return (
    <div
      className={`fixed top-0 z-[1000] ml-[5.5%] mt-6 max-w-8xl w-[89%] px-6 py-4 mx-auto  bg-gradient-to-b form-[#FFE2C1] to-[#FFA45B]  backdrop-blur-lg rounded-2xl shadow-lg border border-zinc-800 font-sans ${
        mobile ? "flex flex-col space-y-4" : "flex justify-between items-center"
      }`}
    >
      {/* Brand */}
      <div className="flex items-center space-x-2 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#1FB8CD]/10 via-[#1FB8CD]/70 to-[#1FB8CD]">
        <ChevronsRight className="w-6 h-6" />
        <span>ROHIT.</span>
      </div>

      {/* Nav links */}
      <nav
        className={`flex ${
          mobile ? "flex-col space-y-2" : "space-x-6"
        } items-center ml-16`}
      >
        {navItems.map(({ id, icon: Icon, label }, index) => (
          <div
            key={id}
            className="relative group"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === index && (
                <motion.span
                  layoutId="hoverBackground"
                  className="absolute inset-0 rounded-xl bg-zinc-900"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.15 } }}
                  exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
                />
              )}
            </AnimatePresence>

            <button
              onClick={() => scrollToSection(id)}
              className="relative z-10 group flex items-center space-x-2 px-3 py-2 font-mono rounded-full transition-all duration-300 "
            >
              
              <span className="text-lg font-medium text-gray-500 group-hover:text-[#1FB8CD] transition-all duration-500">
                {label}
              </span>
            </button>
          </div>
        ))}
      </nav>

      {/* Social icons */}
      {!mobile && (
        <div className="flex space-x-3">
          {[BsGithub, BsTwitterX, BsLinkedin, BsInstagram].map((Icon, index) => (
            <a
              key={index}
              href="#"
              className="p-3 bg-white rounded-full text-black hover:text-black/90  transition-colors 300"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
