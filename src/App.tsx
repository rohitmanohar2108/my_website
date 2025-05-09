import { useState } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import MobileHeader from './components/MobileHeader';
import './index.css';


function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-black text-white">
      {/* Desktop sidebar */}
      <div className="hidden lg:block fixed h-full">
        <Sidebar />
      </div>

      {/* Mobile header and sidebar */}
      <div className="block lg:hidden">
        <MobileHeader toggleSidebar={toggleSidebar} />
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsSidebarOpen(false)}
          >
            <div 
              className="absolute left-0 h-full w-64 bg-gray-900 shadow-2xl z-50 transform transition-transform duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              <Sidebar />
            </div>
          </div>
        )}
      </div>

      {/* Main content */}
      <div className="flex-1 lg:ml-72">
        
        <MainContent />
      </div>
    </div>
  );
}

export default App;