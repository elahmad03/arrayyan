import { useState, useEffect } from "react";
import { FiMenu, FiX, FiMoon, FiSun } from "react-icons/fi";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import Logo from "/img/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const navItems = [
    { id: "home", label: "Home", type: "scroll" },
    { id: "about", label: "About", type: "scroll" },
    { id: "services", label: "Services", type: "scroll" },
    { id: "contact", label: "Contact", type: "scroll" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4 relative">
        
        {/* Logo */}
        <RouterLink to="/">
          <img src={Logo} alt="Logo" className="logo w-28 sm:w-36" />
        </RouterLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-4 lg:space-x-6">
          {navItems.map((item) =>
            item.type === "scroll" ? (
              location.pathname === "/" ? (
                <ScrollLink
                  key={item.id}
                  to={item.id}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="text-sm lg:text-base text-gray-700 dark:text-gray-200 hover:text-orange-500 cursor-pointer transition-colors"
                >
                  {item.label}
                </ScrollLink>
              ) : (
                <RouterLink
                  key={item.id}
                  to={`/#${item.id}`}
                  className="text-sm lg:text-base text-gray-700 dark:text-gray-200 hover:text-orange-500 transition-colors"
                >
                  {item.label}
                </RouterLink>
              )
            ) : (
              <RouterLink
                key={item.id}
                to={`/${item.id}`}
                className="text-sm lg:text-base text-gray-700 dark:text-gray-200 hover:text-orange-500 transition-colors"
              >
                {item.label}
              </RouterLink>
            )
          )}
        </nav>

        {/* Right Controls */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-md border text-gray-800 dark:text-white bg-white dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 border-blue-300 hover:border-blue-400 dark:border-gray-600 dark:hover:border-gray-500 transition"
          >
            {darkMode ? <FiSun size={16} /> : <FiMoon size={16} />}
          </button>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md bg-white text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 shadow-sm transition"
            >
              {isMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-4 py-4 border-t border-gray-200 dark:border-gray-700 space-y-4 transition-all duration-300 ease-in-out">
          {navItems.map((item) =>
            item.type === "scroll" ? (
              location.pathname === "/" ? (
                <ScrollLink
                  key={item.id}
                  to={item.id}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-gray-700 dark:text-gray-200 hover:text-orange-500 transition-colors"
                >
                  {item.label}
                </ScrollLink>
              ) : (
                <RouterLink
                  key={item.id}
                  to={`/#${item.id}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-gray-700 dark:text-gray-200 hover:text-orange-500 transition-colors"
                >
                  {item.label}
                </RouterLink>
              )
            ) : (
              <RouterLink
                key={item.id}
                to={`/${item.id}`}
                onClick={() => setIsMenuOpen(false)}
                className="block text-gray-700 dark:text-gray-200 hover:text-orange-500 transition-colors"
              >
                {item.label}
              </RouterLink>
            )
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
