import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FcHome, FcAbout, FcBriefcase, FcFlashOn, FcBusinessContact, FcCommandLine, FcDocument } from 'react-icons/fc';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home', icon: <FcHome className="text-xl" /> },
    { id: 'about', label: 'About', icon: <FcAbout className="text-xl" /> },
    { id: 'projects', label: 'Projects', icon: <FcBriefcase className="text-xl" /> },
    { id: 'skills', label: 'Skills', icon: <FcFlashOn className="text-xl" /> },
    { id: 'experience', label: 'Experience', icon: <FcBusinessContact className="text-xl" /> },
    { id: 'contact', label: 'Contact', icon: <FcBusinessContact className="text-xl" /> },
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
          <div className="w-12 h-12 rounded-kawaii bg-gradient-to-br from-kawaii-blue to-kawaii-purple flex items-center justify-center text-2xl shadow-kawaii border border-white/50">
            <FcCommandLine className="text-3xl" />
          </div>
          <span className="text-2xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-kawaii-blue-dark to-kawaii-purple-dark">
            Lucas.dev
          </span>
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
