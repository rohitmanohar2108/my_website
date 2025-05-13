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

const Sidebar = ({ mobile = false }: { mobile?: boolean }) => {
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
    <div
      className={`fixed top-0 z-[1000] ml-10 max-w-9xl w-[95%] px-6 py-4 mx-auto mt-2 bg-black/80 backdrop-blur-lg rounded-2xl shadow-lg border border-zinc-800 font-dm ${
        mobile ? "flex flex-col space-y-4" : "flex justify-between items-center"
      }`}
    >
      {/* Brand */}
      <div className="flex items-center space-x-2 text-2xl font-bold text-orange-500">
        <ChevronsRight className="w-6 h-6" />
        <span>ROHIT</span>
      </div>

      {/* Nav links */}
      <nav className={`flex ${mobile ? "flex-col space-y-2" : "space-x-6"} items-center ml-16`}>
        {navItems.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className={`flex items-center space-x-2 px-3 py-2 rounded-full hover:bg-orange-500/20 transition-colors`}
          >
            <Icon className="h-4 w-4 text-gray-400 group-hover:text-orange-400" />
            <span className="text-sm text-gray-300 group-hover:text-white">
              {label}
            </span>
          </button>
        ))}
      </nav>

      {/* Social icons (desktop only) */}
      {!mobile && (
        <div className="flex space-x-3">
          {[Github, Twitter, Linkedin, Instagram].map((Icon, index) => (
            <a
              key={index}
              href="#"
              className="p-2 bg-gray-800/60 rounded-full text-gray-300 hover:text-white hover:bg-orange-500/20 transition-colors"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
