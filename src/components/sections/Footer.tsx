import { Github, Twitter, Linkedin, Instagram } from "lucide-react";
import { TextHoverEffect } from "../ui/TextHoverEffect";
import AnimatedNameTitle from "../ui/AnimatedNameTitle";

const Footer = () => {
  return (
    <footer className="dark:bg-black py-10 px-4 md:px-10 font-sans z-50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center -mx-24 border-t border-gray-800 pt-8">
          <div className="text-center md:text-left mb-6 md:mb-0 ml-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 text-white mb-2">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-full h-full"
                >
                  <path d="M12 2L8 7h8l-4-5zm0 20l4-5H8l4 5zM2 12l5-4v8l-5-4zm20 0l-5 4V8l5 4z" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-[#1FB8CD]/50 via-[#1FB8CD]/80 to-[#1FB8CD] mb-2">
                Rohit Manohar
              </div>
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
