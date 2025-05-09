import { ChevronsRight, Menu } from "lucide-react";
import { useEffect, useState } from "react";

interface MobileHeaderProps {
  toggleSidebar: () => void;
}

const MobileHeader = ({ toggleSidebar }: MobileHeaderProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
  className={`fixed z-30 px-6 py-4 flex items-center justify-between font-dm transition-all duration-300 ${
    scrolled
      ? "top-0 left-0 right-0 bg-gray-950 shadow-lg border-none"
      : "top-4 left-4 right-4 bg-gary-950 border border-white/20 bg-black/40 shadow-xl rounded-2xl "
  }`}
>

      <div className="flex items-center space-x-2 text-2xl font-bold text-white">
        <ChevronsRight className="w-6 h-6 text-orange-400" />
        <span>ROHIT</span>
      </div>

      <button
        onClick={toggleSidebar}
        className="p-2 rounded-full bg-gray-800 hover:bg-purple-900/40 transition-all duration-300"
        aria-label="Toggle menu"
      >
        <Menu className="h-6 w-6 text-gray-300 hover:text-purple-400 transition-colors" />
      </button>
    </div>
  );
};

export default MobileHeader;
