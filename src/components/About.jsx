import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FcGraduationCap, FcGlobe, FcBriefcase, FcMindMap, FcCommandLine, FcDatabase, FcServices, FcElectronics } from 'react-icons/fc';
import resumeSvg from '../assets/resume/resume-not-css.svg?raw';
import '../assets/resume/resume-styles.css';

const About = () => {
  const sectionsRef = useRef([]);
  const aboutSectionRef = useRef(null);
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, amount: 0.2 });

  // Intersection Observer for scroll-triggered visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          } else {
            entry.target.classList.remove('active');
          }
        });
      },
      {
        threshold: 0.3, 
        rootMargin: '-10% 0px -10% 0px'
      }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  // 内容卡片数据
  const contentSections = [
    {
      id: 'intro',
      title: '👋 Hello',
      content: (
        <div className="space-y-4">
          <p className="text-xl text-gray-700 font-medium leading-relaxed">
            I am a Full Stack Developer and Master of IT candidate at UNSW, specializing in building modern, AI-integrated web applications.
          </p>
          <p className="text-gray-600">
            Passionate about delivering clean, maintainable code and architecting scalable solutions that solve real-world business challenges.
          </p>
        </div>
      )
    },
    {
      id: 'experience',
      title: '💼 Professional Experience',
      content: (
        <div className="space-y-6">
          {/* JobGen.AI */}
          <div className="p-6 bg-gradient-to-br from-kawaii-blue/10 to-kawaii-purple/10 rounded-kawaii border-l-4 border-kawaii-blue shadow-sm hover:shadow-kawaii-lg transition-all">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-kawaii bg-white flex items-center justify-center shadow-sm">
                  <FcBriefcase className="text-3xl" />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-gray-800">Full Stack Developer Intern</h4>
                  <span className="text-kawaii-blue-dark font-semibold">@ JobGen.AI</span>
                </div>
              </div>
              <div className="flex flex-col md:items-end">
                <span className="text-xs px-3 py-1 bg-green-100 text-green-700 font-bold rounded-full mb-1 w-fit">
                  Current • Sydney
                </span>
                <span className="text-xs text-gray-500 font-medium">02/2024 - Present</span>
              </div>
            </div>
            
            <ul className="space-y-3 text-gray-600 text-sm leading-relaxed">
              <li className="flex gap-2">
                <span className="text-kawaii-blue mt-1">▹</span>
                <span>
                  <strong>Core Architecture Migration:</strong> Spearheading the migration from a legacy No-Code prototype to a scalable <strong>React.js ecosystem</strong>, redesigning the UI/UX for enhanced user engagement.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-kawaii-blue mt-1">▹</span>
                <span>
                  <strong>AI Agent Engineering:</strong> Engineered autonomous web scraping agents using <strong>Playwright</strong> to handle dynamic content, increasing job data extraction accuracy by <strong>50%</strong>.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-kawaii-blue mt-1">▹</span>
                <span>
                  <strong>3D & Interactive Modules:</strong> Developed an immersive 3D Mock Interview environment using <strong>Three.js</strong> and Node.js, featuring real-time character interactions.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-kawaii-blue mt-1">▹</span>
                <span>
                  <strong>System Optimization:</strong> Redesigned RESTful APIs and implemented an SEO-friendly Blog module to drive organic traffic growth.
                </span>
              </li>
            </ul>
          </div>

          {/* Tianjin Fusionsoft */}
          <div className="p-6 bg-white/60 rounded-kawaii border-l-4 border-gray-300 hover:border-kawaii-mint transition-all">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-kawaii bg-white flex items-center justify-center shadow-sm">
                  <FcMindMap className="text-3xl" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-700">Web Developer Intern</h4>
                  <span className="text-gray-600 font-medium">@ Tianjin Fusionsoft</span>
                </div>
              </div>
              <span className="text-xs text-gray-500 font-medium">11/2024 - 03/2025</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Developed a city digitalization platform using <strong>Java Spring Boot</strong> and <strong>Vue3</strong>. 
              Optimized MySQL schemas and facilitated the migration to Alibaba Cloud, successfully reducing system downtime by <strong>30%</strong>.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'tech-stack',
      title: '🛠️ Technical Arsenal',
      content: (
        <div className="grid gap-6">
          {/* Languages & Frameworks */}
          <div>
            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3 flex items-center gap-2">
              <FcCommandLine /> Languages & Frameworks
            </h4>
            <div className="flex flex-wrap gap-2">
              {['JavaScript (ES6+)', 'TypeScript', 'Python', 'Java', 'C#', 'React', 'Next.js', 'Vue.js', 'TailwindCSS', 'Node.js', 'Express', '.NET Core', 'Spring Boot'].map(skill => (
                <span key={skill} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-xs font-semibold border border-blue-100">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* AI & Data */}
          <div>
            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3 flex items-center gap-2">
              <FcElectronics /> AI & Data Engineering
            </h4>
            <div className="flex flex-wrap gap-2">
              {['OpenAI API', 'LLM Integration', 'Playwright', 'Web Scraping', 'Three.js', 'WebGL', 'ECharts'].map(skill => (
                <span key={skill} className="px-3 py-1 bg-purple-50 text-purple-700 rounded-lg text-xs font-semibold border border-purple-100">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Infrastructure & Tools */}
          <div>
            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3 flex items-center gap-2">
              <FcServices /> Cloud & DevOps
            </h4>
            <div className="flex flex-wrap gap-2">
              {['AWS', 'Docker', 'Alibaba Cloud', 'Git', 'CI/CD', 'Redis', 'MySQL', 'PostgreSQL', 'MongoDB'].map(skill => (
                <span key={skill} className="px-3 py-1 bg-orange-50 text-orange-700 rounded-lg text-xs font-semibold border border-orange-100">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'education',
      title: '🎓 Education',
      content: (
        <div className="space-y-4">
          <div className="flex items-start gap-4 p-4 bg-white/50 rounded-kawaii hover:bg-white/80 transition-colors">
            <div className="w-12 h-12 rounded-kawaii bg-white shadow-sm flex items-center justify-center flex-shrink-0">
              <FcGraduationCap className="text-2xl" />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-lg text-gray-800">
                Master of Information Technology
              </h4>
              <p className="text-gray-600 font-medium text-sm">University of New South Wales (UNSW)</p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded">02/2024 - 01/2026</span>
                <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-700 font-bold rounded">Distinction</span>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-white/50 rounded-kawaii hover:bg-white/80 transition-colors">
            <div className="w-12 h-12 rounded-kawaii bg-white shadow-sm flex items-center justify-center flex-shrink-0">
              <FcGlobe className="text-2xl" />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-lg text-gray-800">
                Bachelor Degree
              </h4>
              <p className="text-gray-600 font-medium text-sm">Kunming University of Science & Technology</p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded">09/2018 - 07/2022</span>
                <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-700 font-bold rounded">Distinction</span>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section 
      id="about" 
      ref={aboutSectionRef}
      className="relative w-full"
    >
      {/* Title */}
      <motion.div
        ref={titleRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center py-12 md:py-16 px-6"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-kawaii-blue-dark via-kawaii-purple-dark to-kawaii-cyan-dark">
          Know better about me
        </h2>
      </motion.div>

      {/* 核心布局优化：Flex容器，align-items: start (默认不拉伸)，实现左侧sticky + 右侧滚动 */}
      <div className="w-full flex flex-col lg:flex-row lg:items-start lg:pl-20 reltive">
        
        {/* Left: Sticky Illustration */}
        <div className="hidden lg:block lg:w-2/5 lg:pr-12 sticky top-1/4 h-fit self-start z-10">
          <div className="w-full max-w-[480px] mx-auto px-10 py-16 flex items-center justify-center">
            <div 
              className="w-full drop-shadow-2xl"
              dangerouslySetInnerHTML={{ __html: resumeSvg }}
            />
          </div>
        </div>

        {/* Right: Content List */}
        <div className="w-full lg:w-3/5 py-20 px-6 lg:px-12">
          <ul className="space-y-0">
            {contentSections.map((section, index) => (
              <li 
                key={section.id}
                ref={(el) => (sectionsRef.current[index] = el)}
                className={`
                  flex flex-col scroll-section
                  ${index === 0 
                    ? 'pt-20 pb-20 justify-start'   // 第一张：顶部无留白，底部留点距离
                    : 'min-h-[60vh] justify-center py-10' // 后续：只占 60% 屏高，减少留白
                  }
                `}
              >
                <div className="w-full card-kawaii group hover:shadow-kawaii-lg transition-all duration-300">
                  <div className="flex items-center gap-3 mb-6">
                    <h3 className="text-3xl md:text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-kawaii-blue-dark via-kawaii-purple-dark to-kawaii-cyan-dark">
                      {section.title}
                    </h3>
                  </div>
                  <div>{section.content}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;