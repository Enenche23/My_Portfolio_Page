import { Mail } from 'lucide-react';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const Hero = ({ darkMode }) => {
  return (
    <section 
      id="home"
      className={`pt-24 pb-16 md:pt-32 md:pb-24 ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-indigo-100'}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hi, I'm <span className={`${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Christopher Ejeh Elias</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              A Full Stack Developer 
            </h2>
            <p className={`text-lg mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              I build responsive, user-friendly web applications with modern technologies. 
              Let's create something amazing together!
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className={`px-6 py-3 rounded-lg font-medium ${
                  darkMode 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                } transition-colors`}
              >
                Contact Me
              </a>
              <a 
                href="#projects" 
                className={`px-6 py-3 rounded-lg font-medium ${
                  darkMode 
                    ? 'bg-transparent border border-gray-600 hover:border-gray-500 text-gray-300' 
                    : 'bg-transparent border border-gray-300 hover:border-gray-400 text-gray-800'
                } transition-colors`}
              >
                View Work
              </a>
            </div>
            
            <div className="flex gap-4 mt-8">
              <a 
                href="https://github.com/Enenche23" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`p-2 rounded-full ${
                  darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-700 hover:text-blue-600'
                } transition-colors`}
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </a>
              <a 
                href="https://linkedin.com/in/christopherejehelias" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`p-2 rounded-full ${
                  darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-700 hover:text-blue-600'
                } transition-colors`}
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
              <a 
                href="mailto:christopherejehelias158353@gmail.com" 
                className={`p-2 rounded-full ${
                  darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-700 hover:text-blue-600'
                } transition-colors`}
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div className="md:w-2/5">
            <div className={`relative w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden border-4 ${
              darkMode ? 'border-blue-600' : 'border-blue-500'
            }`}>
              {/* Replace with your actual profile image */}
              <img 
                src="/Chris23.jpeg" 
                alt="Your Name" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;