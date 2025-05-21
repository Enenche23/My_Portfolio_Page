import { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Header = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed w-full z-10 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md transition-colors duration-300`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">
          <a href="#home" className={`${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
            Christopher Ejeh Elias
          </a>
        </div>
        
        <div className="flex items-center">
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={`hover:text-blue-500 transition-colors ${darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700'}`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className={`ml-6 p-1 rounded-full ${darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-700'}`}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="ml-4 md:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label="Open menu"
          >
            {isMenuOpen ? (
              <X size={24} className={darkMode ? 'text-white' : 'text-gray-900'} />
            ) : (
              <Menu size={24} className={darkMode ? 'text-white' : 'text-gray-900'} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className={`md:hidden ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <ul className="px-4 py-2">
            {navItems.map((item) => (
              <li key={item.name} className="py-2">
                <a
                  href={item.href}
                  className={`block ${darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-500'}`}
                  onClick={toggleMenu}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;