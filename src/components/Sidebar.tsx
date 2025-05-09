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

const Sidebar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "about", icon: User, label: "About" },
    { id: "education", icon: BookOpen, label: "Education" },
    { id: "experience", icon: Briefcase, label: "Experience" },
    { id: "skills", icon: Puzzle, label: "Skills" },
    { id: "projects", icon: Workflow, label: "Projects" },
    { id: "contact", icon: Mail, label: "Contact" },
  ];

  return (
    <div className="w-72 h-full bg-black  flex flex-col items-center py-8 px-6 font-dm">
      <div className="mb-12">
        <div className="flex items-center space-x-1 text-3xl font-bold text-orange-500 px-2 py-2 bg-black rounded-lg">
          <ChevronsRight className="w-6 h-6 text-orange-500" />
          <span>ROHIT</span>
        </div>
      </div>

      <nav className="flex flex-col space-y-4 w-full">
        {navItems.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className="flex items-center space-x-4 px-4 py-3 hover:font-medium rounded-lg hover:border-l border-orange-400 hover:bg-white/20 transition-all duration-300 group w-full"
          >
            <Icon className="h-5 w-5 text-gray-400 group-hover:text-orange-400" />
            <span className="text-gray-300 group-hover:text-white  transition-colors duration-300">
              {label}
            </span>
          </button>
        ))}
      </nav>

      <div className="mt-auto pt-8 border-t border-gray-900 w-full">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-stone-700 flex items-center justify-center">
            <span className="text-white font-bold">JD</span>
          </div>
          <div className="text-center">
            <h3 className="font-medium text-white">John Doe</h3>
            <p className="text-sm text-gray-400">Full Stack Developer</p>
          </div>
        </div>
      </div>
      <div className="flex space-x-4 mt-4">
        <a
          href="#"
          className="p-2 bg-gray-800 rounded-full text-gray-400 hover:text-white hover:bg-orange-900/50 transition-colors"
        >
          <Github className="h-5 w-5" />
        </a>
        <a
          href="#"
          className="p-2 bg-gray-800 rounded-full text-gray-400 hover:text-white hover:bg-orange-900/50 transition-colors"
        >
          <Twitter className="h-5 w-5" />
        </a>
        <a
          href="#"
          className="p-2 bg-gray-800 rounded-full text-gray-400 hover:text-white hover:bg-orange-900/50 transition-colors"
        >
          <Linkedin className="h-5 w-5" />
        </a>
        <a
          href="#"
          className="p-2 bg-gray-800 rounded-full text-gray-400 hover:text-white hover:bg-orange-900/50 transition-colors"
        >
          <Instagram className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
