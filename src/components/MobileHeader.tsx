import {
  ChevronsRight,
  ChevronDown,
  Github,
  Linkedin,
  Instagram,
  Twitter,
  User,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const MobileHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`fixed z-30 px-6 py-3 flex items-center justify-between font-dm transition-all duration-300 ${
        scrolled
          ? "top-0 left-0 right-0 bg-gray-950 shadow-lg"
          : "top-4 left-4 right-4 bg-black/40 border border-white/20 rounded-2xl shadow-xl"
      }`}
    >
      <div className="flex items-center space-x-2 text-2xl font-bold text-white">
        <ChevronsRight className="w-6 h-6 text-orange-400" />
        <span>ROHIT</span>
      </div>

      {/* Dropdown */}
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center space-x-1 px-3 py-2 bg-gray-800 text-gray-300 rounded-full hover:bg-orange-400/40 transition-all"
        >
          <div className="flex items-center space-x-2">
            <User className="h-4 w-4 text-orange-400" />
            <span>Socials</span>
          </div>

          <ChevronDown
            className={`h-4 w-4 transform transition-transform duration-300 ${
              dropdownOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Dropdown Menu */}
        <div
          className={`absolute right-0 mt-2 w-52 origin-top-right bg-black border border-gray-700 rounded-lg shadow-lg p-2 z-50 transition-all duration-300 ease-in-out transform ${
            dropdownOpen
              ? "opacity-100 scale-100 pointer-events-auto"
              : "opacity-0 scale-95 pointer-events-none"
          }`}
        >
          {[
            {
              name: "GitHub",
              icon: <Github className="h-4 w-4" />,
              url: "https://github.com/yourusername",
            },
            {
              name: "Twitter",
              icon: <Twitter className="h-4 w-4" />,
              url: "https://twitter.com/yourusername",
            },
            {
              name: "LinkedIn",
              icon: <Linkedin className="h-4 w-4" />,
              url: "https://linkedin.com/in/yourusername",
            },
            {
              name: "Instagram",
              icon: <Instagram className="h-4 w-4" />,
              url: "https://instagram.com/yourusername",
            },
          ].map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-3 py-2 space-x-2 text-sm text-gray-300 hover:text-white hover:bg-orange-900/30 rounded transition-colors duration-200"
            >
              {link.icon}
              <span>{link.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
