import { ChevronsRight, Menu } from "lucide-react";

interface MobileHeaderProps {
  toggleSidebar: () => void;
}

const MobileHeader = ({ toggleSidebar }: MobileHeaderProps) => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-gray-950 z-30 px-6 py-4 flex items-center justify-between shadow-lg font-dm">
      <div className="flex items-center space-x-1 text-2xl font-bold text-white">
        <ChevronsRight className="w-6 h-6 text-orange-400" />
        <span>ROHIT</span>
      </div>

      <button
        onClick={toggleSidebar}
        className="p-2 rounded-lg hover:bg-purple-900/20 transition-all duration-300"
        aria-label="Toggle menu"
      >
        <Menu className="h-6 w-6 text-gray-400 hover:text-purple-500 transition-colors" />
      </button>
    </div>
  );
};

export default MobileHeader;
