import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FcHome, FcAbout, FcBriefcase } from 'react-icons/fc';
import { FaLinkedin } from 'react-icons/fa';
import logo from '../assets/Logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home', icon: <FcHome className="text-xl" /> },
    { id: 'about', label: 'About', icon: <FcAbout className="text-xl" /> },
    { id: 'projects', label: 'Projects', icon: <FcBriefcase className="text-xl" /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-kawaii shadow-kawaii py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center space-x-3 cursor-pointer"
          onClick={() => scrollToSection('home')}
        >
          <img src={logo} alt="Logo" className="w-30 h-16 rounded-kawaii" />
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-2 justify-center">
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection(item.id)}
              className={`px-4 py-2 rounded-kawaii font-medium transition-all duration-300 flex items-center ${
                activeSection === item.id
                  ? 'bg-gradient-to-r from-kawaii-blue to-kawaii-purple text-white shadow-kawaii'
                  : 'text-gray-700 hover:bg-white/60'
              }`}
            >
              <span className="mr-2">{item.icon}</span>
              {item.label}
            </motion.button>
          ))}
          
          {/* LinkedIn Link */}
          <motion.a
            href="https://www.linkedin.com/in/lucas-cao-a08a6b332"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 rounded-kawaii font-medium transition-all duration-300 flex items-center text-blue-600 hover:bg-blue-50 hover:shadow-kawaii"
          >
            <FaLinkedin className="text-xl mr-2" />
            LinkedIn
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="md:hidden w-10 h-10 rounded-kawaii bg-white/60 flex items-center justify-center text-2xl"
        >
          ☰
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
