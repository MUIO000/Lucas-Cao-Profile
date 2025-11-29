import { useEffect, useRef } from 'react';
import { FcAbout, FcGraduationCap, FcIdea, FcMindMap, FcSettings, FcStatistics, FcCheckmark, FcFlashOn, FcGlobe, FcBriefcase } from 'react-icons/fc';
import resumeSvg from '../assets/resume/resume-not-css.svg?raw';
import '../assets/resume/resume-styles.css';

const About = () => {
  const sectionsRef = useRef([]);
  const aboutSectionRef = useRef(null);

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
        threshold: 0.5, // 当元素50%可见时触发
        rootMargin: '-20% 0px -20% 0px' // 只有在视窗中心区域才高亮
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
            Full Stack Developer crafting AI-powered web experiences with modern technologies and creative solutions.
          </p>
        </div>
      )
    },
    {
      id: 'journey',
      title: '🎓 My Journey',
      content: (
        <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
          <p>
            Currently pursuing <strong className="text-kawaii-purple-dark">Master of IT at UNSW</strong> with Distinction, 
            I'm building the future of AI-powered applications at <strong className="text-kawaii-blue-dark">JobGen.AI</strong>.
          </p>
          <p>
            My journey started with Environmental Engineering, where I learned to approach 
            complex problems systematically. Now, I combine that analytical mindset with 
            modern web technologies to create solutions that matter.
          </p>
          <p>
            I specialize in <strong className="text-kawaii-cyan-dark">migrating legacy systems</strong> to modern architectures, 
            engineering autonomous AI agents, and building intuitive user experiences that drive engagement.
          </p>
          <div className="mt-6 p-5 bg-gradient-to-br from-kawaii-lavender/20 to-kawaii-mint/20 rounded-kawaii border-2 border-kawaii-purple/20">
            <div className="flex items-start gap-3">
              <span className="text-2xl">💡</span>
              <div>
                <p className="font-semibold text-gray-800 mb-1">Fun Fact</p>
                <p className="text-sm text-gray-700">
                  I increased job data extraction accuracy by <strong className="text-kawaii-purple-dark">50%</strong> by replacing 
                  static parsing with Playwright for dynamic content rendering!
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'achievements',
      title: '📊 Achievements',
      content: (
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="card-kawaii text-center hover:scale-105 transition-all duration-300 cursor-default">
            <div className="mb-3 flex justify-center"><FcStatistics className="text-4xl" /></div>
            <div className="text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-kawaii-blue-dark to-kawaii-purple-dark mb-2">50%</div>
            <div className="text-sm font-medium text-gray-600">Performance Boost</div>
          </div>
          <div className="card-kawaii text-center hover:scale-105 transition-all duration-300 cursor-default">
            <div className="mb-3 flex justify-center"><FcFlashOn className="text-4xl" /></div>
            <div className="text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-kawaii-blue-dark to-kawaii-purple-dark mb-2">30%</div>
            <div className="text-sm font-medium text-gray-600">Reduced Downtime</div>
          </div>
          <div className="card-kawaii text-center hover:scale-105 transition-all duration-300 cursor-default">
            <div className="mb-3 flex justify-center"><FcCheckmark className="text-4xl" /></div>
            <div className="text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-kawaii-blue-dark to-kawaii-purple-dark mb-2">100%</div>
            <div className="text-sm font-medium text-gray-600">Client Satisfaction</div>
          </div>
          <div className="card-kawaii text-center hover:scale-105 transition-all duration-300 cursor-default">
            <div className="mb-3 flex justify-center"><FcIdea className="text-4xl" /></div>
            <div className="text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-kawaii-blue-dark to-kawaii-purple-dark mb-2">15+</div>
            <div className="text-sm font-medium text-gray-600">Projects Delivered</div>
          </div>
        </div>
      )
    },
    {
      id: 'skills',
      title: '⚙️ Technical Skills',
      content: (
        <div className="space-y-6">
          {[
            { name: 'React/Next.js', level: 95, color: 'from-kawaii-blue to-kawaii-purple' },
            { name: 'Node.js/Express', level: 90, color: 'from-kawaii-mint to-kawaii-blue' },
            { name: 'Python/AI', level: 85, color: 'from-kawaii-purple to-kawaii-cyan' },
            { name: 'TypeScript', level: 88, color: 'from-kawaii-blue to-kawaii-purple' },
            { name: 'AWS/Docker', level: 80, color: 'from-kawaii-cyan to-kawaii-mint' },
          ].map((skill, index) => (
            <div key={skill.name} className="group">
              <div className="flex justify-between mb-3">
                <span className="font-semibold text-gray-800 group-hover:text-kawaii-purple-dark transition-colors">
                  {skill.name}
                </span>
                <span className="font-bold text-kawaii-purple-dark">
                  {skill.level}%
                </span>
              </div>
              <div className="h-3 bg-gray-200 rounded-full overflow-hidden shadow-inner">
                <div 
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out shadow-sm`}
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      )
    },
    {
      id: 'tools',
      title: '🛠️ Tools & Tech',
      content: (
        <div className="flex flex-wrap gap-3">
          {[
            'React', 'Vue.js', 'Three.js', 'TailwindCSS',
            'Node.js', 'Express', 'Spring Boot', '.NET Core',
            'MongoDB', 'PostgreSQL', 'Redis',
            'Docker', 'AWS', 'Git', 'Playwright'
          ].map((tool) => (
            <span
              key={tool}
              className="px-4 py-2 bg-white/90 rounded-kawaii text-sm font-medium text-gray-700 shadow-kawaii hover:shadow-kawaii-lg hover:scale-110 hover:-rotate-2 transition-all border border-kawaii-blue/30 cursor-default"
            >
              {tool}
            </span>
          ))}
        </div>
      )
    },
    {
      id: 'education',
      title: '🎓 Education',
      content: (
        <div className="space-y-5">
          <div className="group p-4 hover:bg-gradient-to-r hover:from-kawaii-purple/5 hover:to-transparent rounded-kawaii transition-all border-l-4 border-kawaii-purple/30 hover:border-kawaii-purple">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-kawaii bg-white shadow-kawaii flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <FcGraduationCap className="text-2xl" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-lg text-gray-800 group-hover:text-kawaii-purple-dark transition-colors">
                  Master of IT
                </h4>
                <p className="text-gray-600 font-medium">University of New South Wales (UNSW)</p>
                <div className="flex items-center gap-3 mt-2">
                  <span className="text-xs px-3 py-1 bg-kawaii-purple/20 text-kawaii-purple-dark font-semibold rounded-kawaii">
                    2024 - 2026
                  </span>
                  <span className="text-xs px-3 py-1 bg-kawaii-mint/20 text-kawaii-blue-dark font-semibold rounded-kawaii">
                    Distinction
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="group p-4 hover:bg-gradient-to-r hover:from-kawaii-mint/5 hover:to-transparent rounded-kawaii transition-all border-l-4 border-kawaii-mint/30 hover:border-kawaii-mint">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-kawaii bg-white shadow-kawaii flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <FcGlobe className="text-2xl" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-lg text-gray-800 group-hover:text-kawaii-blue-dark transition-colors">
                  B.Eng Environmental Engineering
                </h4>
                <p className="text-gray-600 font-medium">Kunming University of Science & Technology</p>
                <div className="flex items-center gap-3 mt-2">
                  <span className="text-xs px-3 py-1 bg-kawaii-blue/20 text-kawaii-blue-dark font-semibold rounded-kawaii">
                    2018 - 2022
                  </span>
                  <span className="text-xs px-3 py-1 bg-kawaii-cyan/20 text-kawaii-cyan-dark font-semibold rounded-kawaii">
                    Distinction
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'current',
      title: '💼 Current Role',
      content: (
        <div className="p-6 bg-gradient-to-br from-kawaii-blue/5 to-kawaii-purple/5 rounded-kawaii border-2 border-kawaii-purple/20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-kawaii bg-gradient-to-br from-kawaii-blue/30 to-kawaii-purple/30 flex items-center justify-center">
              <FcBriefcase className="text-3xl" />
            </div>
            <div>
              <h4 className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-kawaii-blue-dark to-kawaii-purple-dark">
                Full Stack Developer
              </h4>
              <span className="text-sm text-gray-500">@ JobGen.AI</span>
            </div>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Building AI-powered recruitment solutions, migrating legacy systems to modern React architecture, 
            and engineering autonomous agents for intelligent job matching.
          </p>
        </div>
      )
    },
  ];

  return (
    <section 
      id="about" 
      ref={aboutSectionRef}
      className="relative bg-gradient-to-br from-white via-kawaii-lavender/10 to-white w-full"
    >
      {/* 核心布局优化：Flex容器，align-items: start (默认不拉伸)，实现左侧sticky + 右侧滚动 */}
      <div className="w-full flex flex-col lg:flex-row lg:items-start lg:pl-20 reltive">
        
        {/* Left: Sticky Illustration */}
        <div className="hidden lg:block lg:w-2/5 lg:pr-12 sticky top-1/3 h-fit self-start z-10">
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
                className="min-h-screen flex items-center justify-center py-12 scroll-section"
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
