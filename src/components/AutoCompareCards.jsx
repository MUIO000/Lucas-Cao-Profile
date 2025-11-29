import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// === 导入对比图片 ===
// Batch 1
import was1 from '../assets/compareImage/was/1.png';
import now1 from '../assets/compareImage/now/1.png';
// Batch 2
import was2 from '../assets/compareImage/was/2.png';
import now2 from '../assets/compareImage/now/2.png';
// Batch 3
import was3 from '../assets/compareImage/was/3.png';
import now3 from '../assets/compareImage/now/3.png';
// Batch 4
import was4 from '../assets/compareImage/was/4.png';
import now4 from '../assets/compareImage/now/4.png';
// Batch 5
import was5 from '../assets/compareImage/was/5.png';
import now5 from '../assets/compareImage/now/5.png';
// Batch 6
import was6 from '../assets/compareImage/was/6.png';
import now6 from '../assets/compareImage/now/6.png';

// === 1. 数据配置 ===
const slides = [
  {
    id: 1,
    title: "Dashboard & Analytics",
    beforeImg: was1, 
    afterImg: now1,
  },
  {
    id: 2,
    title: "Job Board Interface",
    beforeImg: was2,
    afterImg: now2,
  },
  {
    id: 3,
    title: "AI Resume Builder",
    beforeImg: was3,
    afterImg: now3,
  },
  {
    id: 4,
    title: "User Profile Management",
    beforeImg: was4,
    afterImg: now4,
  },
  {
    id: 5,
    title: "Application Tracking",
    beforeImg: was5,
    afterImg: now5,
  },
  {
    id: 6,
    title: "Mobile Experience",
    beforeImg: was6,
    afterImg: now6,
  }
];

const AUTOPLAY_DELAY = 4000; // 4秒切换

export default function AutoCompareCards() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // === 2. 定时器逻辑 ===
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, AUTOPLAY_DELAY);

    return () => clearInterval(timer);
  }, []);

  return (
    // 容器宽度调整：与 Projects 网格保持一致 (max-w-[95rem])
    <section className="w-full max-w-[95rem] mx-auto p-4 md:p-8 mt-12">
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-800 mb-3">
            JobGen.AI 2.0 Upgrade
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
            A synchronized journey from legacy architecture to a modern, user-centric experience.
          </p>
        </motion.div>
      </div>

      {/* === 双卡并排容器 === */}
      {/* 移除固定高度，依靠子元素的 aspect-video 撑开高度 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        
        {/* --- 左侧卡片 (Before) --- */}
        <div className="w-full aspect-video">
          <CompareCard 
            type="before"
            data={slides[currentIndex]} 
            slideKey={currentIndex} 
          />
        </div>

        {/* --- 右侧卡片 (After) --- */}
        <div className="w-full aspect-video">
          <CompareCard 
            type="after" 
            data={slides[currentIndex]} 
            slideKey={currentIndex}
          />
        </div>
        
      </div>

      {/* 底部显示的当前主题文字 */}
      <div className="text-center mt-8">
         <motion.span 
           key={currentIndex}
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
           className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white shadow-kawaii text-gray-600 text-sm font-medium border border-gray-100"
         >
            <span className="w-2 h-2 rounded-full bg-kawaii-purple animate-pulse"></span>
            Now Viewing: <span className="font-bold text-kawaii-purple-dark">{slides[currentIndex].title}</span>
         </motion.span>
      </div>
    </section>
  );
}

// === 单个卡片组件 ===
const CompareCard = ({ type, data, slideKey }) => {
  const isAfter = type === 'after';
  
  return (
    <div className={`
      relative w-full h-full rounded-[2rem] overflow-hidden border-4 flex flex-col transition-all duration-500
      ${isAfter 
        ? 'border-white bg-white shadow-kawaii-lg scale-100 z-10 ring-4 ring-kawaii-purple/10' // After 样式
        : 'border-gray-100 bg-gray-50 grayscale-[0.8] opacity-90 shadow-inner'       // Before 样式
      }
    `}>
      {/* 1. 顶部标签 */}
      <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
        <span className={`
          px-4 py-1.5 rounded-xl text-xs font-bold tracking-wider backdrop-blur-md border shadow-sm
          ${isAfter 
            ? 'bg-kawaii-purple text-white border-white/20' 
            : 'bg-gray-200/80 text-gray-500 border-gray-300/50'
          }
        `}>
          {isAfter ? "✨ 2.0 NEW DESIGN" : "⏮️ LEGACY VERSION"}
        </span>
      </div>

      {/* 2. 图片切换区域 */}
      <div className="relative flex-1 overflow-hidden w-full h-full bg-gray-100">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.img
            key={slideKey} 
            src={isAfter ? data.afterImg : data.beforeImg}
            alt={type}
            className="absolute inset-0 w-full h-full object-cover object-top"
            // 动画：从下往上滑
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
          />
        </AnimatePresence>
        
        {/* 叠加层：让 Before 更暗淡一点 */}
        {!isAfter && <div className="absolute inset-0 bg-white/20 mix-blend-overlay pointer-events-none"></div>}
      </div>

      {/* 3. 底部进度条 */}
      <div className="absolute bottom-0 left-0 h-1.5 bg-gray-100 w-full z-20">
        <motion.div 
            key={slideKey}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: AUTOPLAY_DELAY / 1000, ease: "linear" }}
            className={`h-full ${isAfter ? 'bg-gradient-to-r from-kawaii-purple to-kawaii-pink' : 'bg-gray-300'}`}
        />
      </div>
    </div>
  );
};
