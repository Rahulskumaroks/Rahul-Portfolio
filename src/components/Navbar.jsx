import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('darkMode', !isDarkMode);
  };

  useEffect(() => {
    // Check stored preference first
    const storedDarkMode = localStorage.getItem('darkMode');
    
    if (storedDarkMode !== null) {
      const isDark = storedDarkMode === 'true';
      setIsDarkMode(isDark);
      if (isDark) document.documentElement.classList.add('dark');
      else document.documentElement.classList.remove('dark');
    } 
    // Fall back to system preference
    else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'py-3 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg' 
        : 'py-5 bg-transparent'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="group relative text-xl font-bold">
          <span className="bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400 bg-clip-text text-transparent">Rahul</span>
          <span className="text-gray-800 px-1 dark:text-white">Kumar</span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-violet-600 group-hover:w-full transition-all duration-300"></span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative py-2 transition-colors duration-300 text-sm font-medium ${
                  location.pathname === link.path
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400 rounded-full"></span>
                )}
              </Link>
            ))}
          </div>
          
          <div className="flex items-center space-x-4">
            <a 
              href="https://github.com/Rahulskumaroks" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-colors duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
              </svg>
            </a>
            
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            
            <Link
              to="/contact"
              className="px-5 py-2 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white rounded-lg font-medium text-sm shadow-md hover:shadow-lg transition-all duration-300"
            >
              Let's Talk
            </Link>
          </div>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden">
          <button
            onClick={toggleDarkMode}
            className="p-2 mr-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={toggleMenu}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-xl py-4 absolute w-full left-0 right-0 top-full border-t border-gray-200 dark:border-gray-800 animate-fadeDown">
          <div className="container mx-auto px-6 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`py-3 px-4 rounded-lg transition-colors duration-300 ${
                  location.pathname === link.path
                    ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2 border-t border-gray-200 dark:border-gray-800">
              <Link
                to="/contact"
                className="w-full inline-block text-center px-5 py-3 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Let's Talk
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
