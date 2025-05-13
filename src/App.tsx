import { useState } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import MobileHeader from './components/MobileHeader';
import './index.css';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Desktop Top Navbar */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {/* Mobile Header */}
      <div className="block lg:hidden">
        <MobileHeader />
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsSidebarOpen(false)}
          >
            <div 
              className="absolute top-0 left-0 w-full bg-gray-900 shadow-2xl z-50 transition-transform duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              <Sidebar mobile />
            </div>
          </div>
        )}
      </div>

      {/* Main content */}
      <div className="flex-1">
        <MainContent />
      </div>
    </div>
  );
}

export default App;
