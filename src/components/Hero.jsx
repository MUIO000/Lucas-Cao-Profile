import { motion } from 'framer-motion';
import { FcIdea } from 'react-icons/fc';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight } from 'react-icons/fa';
import Spline from '@splinetool/react-spline';
import '../assets/developer-activity/developer-activity-styles.css';
import Typewriter from './Typewriter';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-15 px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid md:grid-cols-2 gap-5 lg:gap-8 items-center">
          {/* Left: Text Content */}
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6 md:pl-4"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md rounded-kawaii text-kawaii-purple-dark font-bold mb-4 shadow-sm border border-white/50">
                <FcIdea className="text-xl" /> Hello, I'm
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight text-gray-900 drop-shadow-sm"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-kawaii-blue via-kawaii-purple to-kawaii-cyan">Lucas Cao</span>
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="text-2xl md:text-3xl lg:text-4xl font-display font-semibold text-gray-800"
            >
              Graduate Full Stack Developer
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-2xl text-blue-500 leading-relaxed font-bold whitespace-nowrap"
            >
              <Typewriter 
                text="I can craft modern, AI-integrated web applications!"
                staticPrefix="I "
                typingSpeed={50}
                deletingSpeed={50}
                pauseTime={2000}
              />
            </motion.p>

            {/* Tech Stack Pills */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3 pt-4"
            >
              {['React', 'TailwindCSS', 'Node.js', 'C#', 'Python', 'Java', 'SQL', 'Docker', 'AWS'].map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-kawaii text-sm font-medium text-gray-700 shadow-kawaii"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-6"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                className="btn-kawaii flex items-center gap-2 whitespace-nowrap"
              >
                My Projects <FaArrowRight />
              </motion.button>

              {/* Contact/Email Button */}
              <motion.a
                href="mailto:lucascao1018@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-kawaii-outline flex items-center gap-2 whitespace-nowrap"
              >
                <FaEnvelope /> lucascao1018@gmail.com
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex gap-4 pt-4"
            >
              {[
                { icon: <FaLinkedin />, label: 'LinkedIn', url: 'https://www.linkedin.com/in/lucas-cao-a08a6b332', color: 'text-blue-600' },
                { icon: <FaEnvelope />, label: 'Email', url: 'mailto:lucascao1018@gmail.com', color: 'text-red-500' },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target={social.label === 'LinkedIn' ? '_blank' : undefined}
                  rel={social.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-12 h-12 rounded-kawaii bg-white/80 backdrop-blur-sm flex items-center justify-center text-2xl shadow-kawaii hover:shadow-kawaii-lg transition-all ${social.color}`}
                  title={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: 3D Spline Illustration */}
          <div className="relative flex justify-center md:justify-end lg:scale-125">
            <motion.div
              initial={{ opacity: 0, scale: 0.7, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
              className="w-full aspect-square drop-shadow-2xl rounded-3xl overflow-hidden bg-transparent"
            >
              <Spline scene="https://prod.spline.design/9x3RXcbJvtWC8DmQ/scene.splinecode" />
            </motion.div>

            {/* Background Decorative Elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-kawaii-blue/20 via-kawaii-purple/20 to-kawaii-cyan/20 rounded-full blur-3xl animate-pulse-slow"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 border-2 border-kawaii-purple rounded-kawaii flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-kawaii-purple rounded-full mt-2"
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
