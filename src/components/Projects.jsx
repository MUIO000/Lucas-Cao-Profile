import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Tilt from 'react-parallax-tilt';
import { FcBriefcase, FcVoicePresentation, FcElectronics, FcPuzzle, FcCalendar, FcBarChart, FcComments } from 'react-icons/fc';
import { FaGithub, FaLink } from 'react-icons/fa';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      id: 1,
      title: 'AI Interview Coach Platform',
      description: 'Full-stack AI-powered interview training platform with real-time voice interaction, 3D avatar rendering, and automated feedback using OpenAI.',
      image: <FcVoicePresentation className="text-9xl" />,
      tags: ['React', 'Node.js', 'Python', 'OpenAI', 'MongoDB', 'AWS'],
      color: 'from-kawaii-pink to-kawaii-purple',
      highlights: ['3D Avatar', 'Voice AI', 'Real-time Feedback'],
      github: '#',
      live: '#',
    },
    {
      id: 2,
      title: 'JobGen.AI Platform',
      description: 'Led migration from Bubble.io to React architecture. Built autonomous job application agent with Playwright, increasing data accuracy by 50%.',
      image: <FcElectronics className="text-9xl" />,
      tags: ['React', 'Three.js', 'Node.js', 'Playwright', 'Figma'],
      color: 'from-kawaii-blue to-kawaii-mint',
      highlights: ['50% Accuracy ↑', 'System Migration', 'Web Scraping'],
      github: '#',
      live: '#',
    },
    {
      id: 3,
      title: 'Wordbattle Game',
      description: 'Gamified vocabulary learning application combining tower defense strategy with interactive quizzes. Built with Unity and C#.',
      image: <FcPuzzle className="text-9xl" />,
      tags: ['C#', 'Unity', '.NET', 'RESTful API', 'JSON'],
      color: 'from-kawaii-purple to-kawaii-blue',
      highlights: ['Game Dev', 'OOP Architecture', 'Educational'],
      github: '#',
      live: '#',
    },
    {
      id: 4,
      title: 'Event Finder Platform',
      description: 'Full-stack event discovery platform with responsive design, JWT authentication, and location-based filtering.',
      image: <FcCalendar className="text-9xl" />,
      tags: ['React', '.NET 8', 'MySQL', 'Docker', 'TailwindCSS'],
      color: 'from-kawaii-peach to-kawaii-pink',
      highlights: ['Docker Ready', 'JWT Auth', 'EF Core'],
      github: '#',
      live: '#',
    },
    {
      id: 5,
      title: 'City Digitalization Platform',
      description: 'Real-time foot traffic visualization dashboard with ECharts. Migrated to Alibaba Cloud, reducing downtime by 30%.',
      image: <FcBarChart className="text-9xl" />,
      tags: ['Java', 'Spring Boot', 'Vue3', 'MySQL', 'Alibaba Cloud'],
      color: 'from-kawaii-mint to-kawaii-blue',
      highlights: ['30% Downtime ↓', 'Real-time Data', 'Cloud Migration'],
      github: '#',
      live: '#',
    },
    {
      id: 6,
      title: 'Mock Interview 3D Module',
      description: 'Immersive 3D virtual environment with real-time character interactions built for JobGen.AI using React and Node.js.',
      image: <FcComments className="text-9xl" />,
      tags: ['React', 'Node.js', 'Three.js', 'WebGL'],
      color: 'from-kawaii-purple to-kawaii-pink',
      highlights: ['3D Environment', 'Real-time', 'WebGL'],
      github: '#',
      live: '#',
    },
  ];

  return (
    <section id="projects" ref={ref} className="min-h-screen py-20 px-6">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-kawaii text-kawaii-purple-dark font-semibold mb-4">
            <FcBriefcase className="text-xl" /> My Projects
          </span>
          <h2 className="text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-kawaii-blue-dark to-kawaii-purple-dark mb-4">
            Featured Work
          </h2>
          <p className="text-gray-800 max-w-2xl mx-auto font-medium">
            A collection of projects showcasing my expertise in full-stack development, AI integration, and modern web technologies
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Tilt
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                scale={1.02}
                transitionSpeed={2000}
              >
                <div className="group relative h-full">
                  {/* Glow Effect */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.color} rounded-kawaii-lg blur opacity-30 group-hover:opacity-100 transition duration-500`}></div>

                  {/* Card Content */}
                  <div className="relative h-full card-kawaii flex flex-col">
                    {/* Project Icon/Preview */}
                    <div className={`h-48 rounded-kawaii bg-gradient-to-br ${project.color} flex items-center justify-center mb-4 overflow-hidden relative`}>
                      <div className="animate-float">{project.image}</div>
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                        <motion.a
                          href={project.github}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-12 h-12 bg-white rounded-kawaii flex items-center justify-center text-2xl text-gray-800"
                        >
                          <FaGithub />
                        </motion.a>
                        <motion.a
                          href={project.live}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-12 h-12 bg-white rounded-kawaii flex items-center justify-center text-2xl text-gray-800"
                        >
                          <FaLink />
                        </motion.a>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="flex-1 flex flex-col">
                      <h3 className="text-xl font-display font-bold text-gray-800 mb-2">
                        {project.title}
                      </h3>

                      <p className="text-sm text-gray-600 mb-4 flex-1">
                        {project.description}
                      </p>

                      {/* Highlights */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.highlights.map((highlight) => (
                          <span
                            key={highlight}
                            className="px-2 py-1 bg-kawaii-lavender/50 rounded-kawaii text-xs font-semibold text-kawaii-purple-dark"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>

                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-white/80 rounded-kawaii text-xs font-medium text-gray-700 border border-kawaii-blue/10"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 btn-kawaii-outline"
          >
            <FaGithub className="text-xl" />
            <span>View All on GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
