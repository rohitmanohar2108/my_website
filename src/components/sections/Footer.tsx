import { Github, Twitter, Linkedin, Instagram } from "lucide-react";
import { TextHoverEffect } from "../ui/TextHoverEffect";
import AnimatedNameTitle from "../ui/AnimatedNameTitle";

const Footer = () => {
  return (
    <footer className="dark:bg-black py-10 px-4 md:px-10 font-sans z-50">
      
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center -mx-24 border-t border-gray-800 pt-8">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 mb-2">
              Rohit Manohar
            </div>
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} All Rights Reserved
            </p>
          </div>
        </div>
      </div>

      {/* Animated Text */}
     
    </footer>
  );
};

export default Footer;
