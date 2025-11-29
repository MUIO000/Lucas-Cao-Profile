import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaArrowRight } from 'react-icons/fa'; // 引入图标
import AutoCompareCards from './AutoCompareCards';

// 导入项目资源
import aiInterviewVideo from '../assets/ProjectVedio/interview.webm';
import aiInterviewCover from '../assets/ProjectVedio/interview.png';
import wordbattleVideo from '../assets/ProjectVedio/WordBattle.webm';
import wordbattleCover from '../assets/ProjectVedio/WordBattle.png';
import eventVideo from '../assets/ProjectVedio/event.webm';
import eventCover from '../assets/ProjectVedio/event.png';
import jobgenVideo from '../assets/ProjectVedio/blog.webm';
import jobgenCover from '../assets/ProjectVedio/blog.png';

// === 数据配置区域 ===
const projects = [
  {
    id: 1,
    title: "AI Interview Coach Platform",
    category: "Full Stack & AI",
    tech: ["React", "Node.js", "OpenAI", "AWS S3", "Three.js", "Docker"],
    description: "Real-time voice interaction with 3D avatar & automated feedback.",
    // 布局：占据 3 列 (Grid 5列模式)
    className: "md:col-span-3", 
    videoSrc: aiInterviewVideo, 
    imageSrc: aiInterviewCover,
    // 浅色背景渐变
    bgColor: "bg-gradient-to-br from-kawaii-purple/30 to-kawaii-pink/30 border-kawaii-purple/20",
    // 错位偏移量 (px)
    offsetY: 0
  },
  {
    id: 4,
    title: "JobGen.AI Blog",
    category: "Content Platform",
    tech: ["React", "TailwindCSS", "MongoDB"],
    description: "SEO-optimized blog platform for AI career tools.",
    // 布局：占据 2 列 (Grid 5列模式)
    className: "md:col-span-2",
    videoSrc: jobgenVideo,
    imageSrc: jobgenCover,
    bgColor: "bg-gradient-to-br from-kawaii-pink/30 to-kawaii-peach/30 border-kawaii-pink/20",
    // 错位：下沉
    offsetY: 40,
    // 视频适配模式：窄卡片使用 contain 以显示完整内容
    videoFit: "object-contain bg-white/20"
  },
  {
    id: 3,
    title: "Event Finder Platform",
    category: "Web App",
    tech: [".NET 8", "React", "MySQL", "Docker"],
    description: "Full-stack event discovery with map filtering.",
    // 布局：占据 2 列 (Grid 5列模式)
    className: "md:col-span-2",
    videoSrc: eventVideo,
    imageSrc: eventCover,
    bgColor: "bg-gradient-to-br from-kawaii-blue/30 to-kawaii-purple/30 border-kawaii-blue/20",
    // 错位：无 (或者根据需要调整)
    offsetY: 0,
    // 视频适配模式
    videoFit: "object-contain bg-white/20"
  },
  {
    id: 2,
    title: "Wordbattle Game",
    category: "Game Dev",
    tech: ["Unity", "C#", ".NET", "RestAPI"],
    description: "Strategy RPG combining tower defense with vocabulary learning.",
    // 布局：占据 3 列 (Grid 5列模式)
    className: "md:col-span-3",
    videoSrc: wordbattleVideo,
    imageSrc: wordbattleCover,
    bgColor: "bg-gradient-to-br from-kawaii-mint/30 to-kawaii-blue/30 border-kawaii-mint/20",
    // 错位：下沉
    offsetY: 40,
    // 添加链接
    link: "https://github.com/MUIO000/WordBattle.git"
  }
];

// === 单个卡片组件 ===
const BentoItem = ({ project, index }) => {
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const hasLink = !!project.link;

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play().catch(e => console.log("Video play failed:", e));
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  // 根据是否有链接选择容器标签
  const Container = hasLink ? motion.a : motion.div;
  const containerProps = hasLink 
    ? { 
        href: project.link, 
        target: "_blank", 
        rel: "noopener noreferrer",
        className: `${project.className} h-72 md:h-96 block cursor-pointer relative z-10` // z-10 确保点击层级
      }
    : { 
        className: `${project.className} h-72 md:h-96` 
      };

  return (
    <Container
      {...containerProps}
      // Layer 1: Layout & Entry & Hover Scale
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.6, 
        ease: "easeOut",
        delay: index * 0.1 
      }}
      
      // 初始位置根据 offsetY 偏移
      style={{ marginTop: project.offsetY }}
      
      // 鼠标悬停时放大效果
      whileHover={{ 
        scale: 1.05,
        zIndex: 20,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        // Layer 2: Border & Floating & Content
        animate={{ y: [0, -10, 0] }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: project.id * 0.5 
        }}
        className={`w-full h-full relative overflow-hidden rounded-[2rem] border-2 backdrop-blur-md ${project.bgColor} shadow-kawaii hover:shadow-kawaii-lg transition-shadow duration-500`}
      >
        {/* 1. 视频层 */}
        <video
          ref={videoRef}
          src={project.videoSrc}
          className={`absolute inset-0 w-full h-full transition-opacity duration-500 rounded-[1.8rem] ${project.videoFit || 'object-cover'} ${isHovered ? 'opacity-100' : 'opacity-0'}`}
          loop
          muted
          playsInline
          preload="metadata"
        />

        {/* 2. 封面图片层 */}
        <img 
          src={project.imageSrc} 
          alt={project.title}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 rounded-[1.8rem] ${isHovered ? 'opacity-0' : 'opacity-100'}`}
        />

        {/* 3. 装饰性光晕 */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/40 rounded-full blur-3xl group-hover:bg-white/60 transition-colors duration-500"></div>
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/40 rounded-full blur-3xl group-hover:bg-white/60 transition-colors duration-500"></div>

        {/* 4. 文字内容层 */}
        <div className={`absolute bottom-4 left-4 right-4 flex flex-col gap-2 transition-all duration-500 ${isHovered ? 'opacity-0 translate-y-4 pointer-events-none' : 'opacity-100 translate-y-0'}`}>
          
          {/* 技术栈标签 */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="text-xs font-bold px-3 py-1 rounded-full bg-white/80 text-gray-700 shadow-sm backdrop-blur-md border border-white/60">
                {t}
              </span>
            ))}
          </div>

          {/* 标题与描述 */}
          <div className="flex justify-between items-center bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-sm border border-white/50">
            <div>
              <h3 className="text-xl font-display font-bold text-gray-800 mb-1 group-hover:text-kawaii-purple-dark transition-colors">
                {project.title}
              </h3>
              <p className="text-xs text-gray-600 font-medium line-clamp-2">
                {project.description}
              </p>
            </div>
            
            {/* 仅在有链接时显示按钮，并显示 "View My Code" */}
            {hasLink && (
              <div className="mb-1 shrink-0 ml-3">
                <div className="px-4 py-2 rounded-full bg-white shadow-kawaii text-kawaii-purple flex items-center gap-2 hover:bg-kawaii-purple hover:text-white transition-colors border border-kawaii-purple/20">
                  <span className="text-xs font-bold whitespace-nowrap">View My Code</span>
                  <FaGithub className="text-sm" />
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </Container>
  );
};

// === 主布局组件 ===
const Projects = () => {
  return (
    <section id="projects" className="w-full max-w-[95rem] mx-auto p-4 md:p-8 my-20">
      {/* 标题区域 */}
      <div className="mb-16 text-center">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm border border-white/60 text-kawaii-purple-dark font-bold text-sm mb-4 shadow-kawaii"
        >
          ✨ Featured Work
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-kawaii-blue-dark via-kawaii-purple-dark to-kawaii-pink-dark mb-2 leading-tight pb-2"
        >
          My Creative Playground
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 text-lg max-w-2xl mx-auto"
        >
          Hover over the cards to see them come alive with video previews.
        </motion.p>
      </div>

      {/* CSS Grid 核心布局: 移动端1列，PC端5列，增加 gap */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 auto-rows-auto">
        {projects.map((project, index) => (
          <BentoItem key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* 新增：UI/UX 升级对比展示 */}
      <AutoCompareCards />
    </section>
  );
}

export default Projects;