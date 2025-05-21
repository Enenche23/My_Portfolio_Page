import { Mail } from 'lucide-react';
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = ({ darkMode }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={`py-8 ${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-center md:text-left">
              © {currentYear} <span className="font-semibold">Chris Elias</span>. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://github.com/Enenche23" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`p-2 rounded-full ${
                darkMode ? 'hover:bg-gray-700 text-gray-400 hover:text-white' : 'hover:bg-gray-200 text-gray-600 hover:text-gray-900'
              } transition-colors`}
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/christopher-ejeh-elias" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`p-2 rounded-full ${
                darkMode ? 'hover:bg-gray-700 text-gray-400 hover:text-white' : 'hover:bg-gray-200 text-gray-600 hover:text-gray-900'
              } transition-colors`}
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a 
              href="https://twitter.com/Chris-Elias" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`p-2 rounded-full ${
                darkMode ? 'hover:bg-gray-700 text-gray-400 hover:text-white' : 'hover:bg-gray-200 text-gray-600 hover:text-gray-900'
              } transition-colors`}
              aria-label="Twitter"
            >
              <FaXTwitter size={20} />
            </a>
            <a 
              href="christopherejehelias158353@gmail.com" 
              className={`p-2 rounded-full ${
                darkMode ? 'hover:bg-gray-700 text-gray-400 hover:text-white' : 'hover:bg-gray-200 text-gray-600 hover:text-gray-900'
              } transition-colors`}
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;