import { motion } from 'framer-motion';
import { FcIdea } from 'react-icons/fc';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import softwareTestingSvg from '../assets/developer-activity/developer-activity-not-css.svg?raw';
import '../assets/developer-activity/developer-activity-styles.css';

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
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
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
              Full Stack Developer
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-800 leading-relaxed max-w-lg font-medium"
            >
              Crafting modern, AI-integrated web applications with{' '}
              <span className="font-bold text-kawaii-purple-dark">React</span>,{' '}
              <span className="font-bold text-kawaii-blue-dark">Node.js</span>, and{' '}
              <span className="font-bold text-kawaii-cyan-dark">clean code</span>. 
              Currently building the future at JobGen.AI 🚀
            </motion.p>

            {/* Tech Stack Pills */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3 pt-4"
            >
              {['React', 'TypeScript', 'Node.js', 'Python', 'AI/ML', 'AWS'].map((tech) => (
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
                className="btn-kawaii"
              >
                🚀 View My Work
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="btn-kawaii-outline"
              >
                💬 Let's Talk
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex gap-4 pt-4"
            >
              {[
                { icon: <FaLinkedin />, label: 'LinkedIn', url: '#', color: 'text-blue-600' },
                { icon: <FaGithub />, label: 'GitHub', url: '#', color: 'text-gray-800' },
                { icon: <FaEnvelope />, label: 'Email', url: 'mailto:lucascao1018@gmail.com', color: 'text-red-500' },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.url}
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

          {/* Right: Kawaii Illustration */}
          <div className="relative flex justify-center md:justify-end">
            <div 
              className="w-full max-w-[500px] h-auto drop-shadow-2xl"
              dangerouslySetInnerHTML={{ __html: softwareTestingSvg }}
            />

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
