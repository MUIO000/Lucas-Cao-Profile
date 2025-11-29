# 🎨 Kawaii Tech Design System

## 配色方案

### 主色调
```
🌸 kawaii-pink         #FFB6D9    RGB(255, 182, 217)
   用途: 主要强调色、CTA按钮、重要元素

💜 kawaii-purple       #9B9FFF    RGB(155, 159, 255)
   用途: 次要强调色、链接、技能标签

💙 kawaii-blue         #A8D8FF    RGB(168, 216, 255)
   用途: 冷色调、信息提示、装饰元素

🌿 kawaii-mint         #B5EAD7    RGB(181, 234, 215)
   用途: 成功状态、新鲜感、装饰元素

🍑 kawaii-peach        #FFD4A3    RGB(255, 212, 163)
   用途: 温暖色、警告提示、装饰元素

💐 kawaii-lavender     #E6E6FA    RGB(230, 230, 250)
   用途: 背景色、卡片背景、柔和区域
```

### 渐变组合
```css
/* 粉紫渐变 - 最常用 */
background: linear-gradient(135deg, #FFB6D9, #9B9FFF);

/* 蓝薄荷渐变 */
background: linear-gradient(135deg, #A8D8FF, #B5EAD7);

/* 紫蓝渐变 */
background: linear-gradient(135deg, #9B9FFF, #A8D8FF);

/* 桃粉渐变 */
background: linear-gradient(135deg, #FFD4A3, #FFB6D9);

/* 背景大渐变 */
background: linear-gradient(135deg, #C5C8FF, #D0EDFF, #FFD4E9);
```

---

## 字体系统

### 字体家族
```css
/* 标题字体 */
font-family: 'Poppins', sans-serif;
权重: 600 (SemiBold), 700 (Bold), 800 (ExtraBold)
用途: h1, h2, h3, 按钮文字

/* 正文字体 */
font-family: 'Inter', system-ui, sans-serif;
权重: 300 (Light), 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)
用途: 段落、描述、标签
```

### 字号规模
```css
text-xs     12px    0.75rem   /* 小标签 */
text-sm     14px    0.875rem  /* 辅助文字 */
text-base   16px    1rem      /* 正文 */
text-lg     18px    1.125rem  /* 大正文 */
text-xl     20px    1.25rem   /* 小标题 */
text-2xl    24px    1.5rem    /* 卡片标题 */
text-3xl    30px    1.875rem  /* Section副标题 */
text-4xl    36px    2.25rem   /* Section标题 */
text-5xl    48px    3rem      /* Hero副标题 */
text-6xl    60px    3.75rem   /* Hero主标题（桌面） */
text-7xl    72px    4.5rem    /* Hero主标题（大屏） */
```

---

## 圆角系统

```css
rounded-kawaii        1.5rem  (24px)    /* 标准圆角 */
rounded-kawaii-lg     2rem    (32px)    /* 大圆角 */
rounded-kawaii-xl     2.5rem  (40px)    /* 超大圆角 */

/* Tailwind默认 */
rounded-md            0.375rem (6px)    /* 小元素 */
rounded-lg            0.5rem   (8px)    /* 按钮 */
rounded-xl            0.75rem  (12px)   /* 卡片 */
rounded-full          9999px           /* 圆形 */
```

**使用指南:**
- 按钮/标签: `rounded-kawaii` 或 `rounded-lg`
- 卡片: `rounded-kawaii-lg`
- 大容器: `rounded-kawaii-xl`
- 头像/图标: `rounded-full`

---

## 阴影系统

```css
/* Kawaii风格阴影 */
shadow-kawaii
→ 0 8px 32px rgba(155, 159, 255, 0.15)
用途: 卡片、按钮默认状态

shadow-kawaii-lg
→ 0 12px 48px rgba(155, 159, 255, 0.2)
用途: 卡片hover状态、重要元素

shadow-kawaii-glow
→ 0 0 20px rgba(255, 182, 217, 0.4)
用途: 发光边框、特殊强调

/* Tailwind默认（辅助使用） */
shadow-sm    0 1px 2px 0 rgb(0 0 0 / 0.05)
shadow       0 1px 3px 0 rgb(0 0 0 / 0.1)
shadow-md    0 4px 6px -1px rgb(0 0 0 / 0.1)
shadow-lg    0 10px 15px -3px rgb(0 0 0 / 0.1)
shadow-xl    0 20px 25px -5px rgb(0 0 0 / 0.1)
shadow-2xl   0 25px 50px -12px rgb(0 0 0 / 0.25)
```

---

## Glassmorphism 效果

```css
.glass-kawaii {
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(32px);
  border: 1px solid rgba(255, 255, 255, 0.6);
  box-shadow: 0 8px 32px rgba(155, 159, 255, 0.15);
}

/* 变体 */
bg-white/40   /* 40% 不透明度 */
bg-white/60   /* 60% 不透明度 */
bg-white/80   /* 80% 不透明度 */

backdrop-blur-sm   /* 4px */
backdrop-blur-md   /* 12px */
backdrop-blur-lg   /* 16px */
backdrop-blur-xl   /* 24px */
backdrop-blur-2xl  /* 40px */
```

---

## 按钮样式

### Primary Button (主按钮)
```jsx
<button className="btn-kawaii">
  Click Me
</button>
```
```css
.btn-kawaii {
  padding: 1rem 2rem;
  border-radius: 1.5rem;
  font-weight: 600;
  background: linear-gradient(135deg, #FFB6D9, #9B9FFF);
  color: white;
  box-shadow: 0 8px 32px rgba(155, 159, 255, 0.15);
  transition: all 0.3s;
}
.btn-kawaii:hover {
  box-shadow: 0 12px 48px rgba(155, 159, 255, 0.2);
  transform: scale(1.05);
}
```

### Outline Button (描边按钮)
```jsx
<button className="btn-kawaii-outline">
  Learn More
</button>
```
```css
.btn-kawaii-outline {
  padding: 1rem 2rem;
  border-radius: 1.5rem;
  font-weight: 600;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(4px);
  border: 2px solid #9B9FFF;
  color: #9B9FFF;
  transition: all 0.3s;
}
.btn-kawaii-outline:hover {
  background: #9B9FFF;
  color: white;
}
```

---

## 卡片样式

### Basic Card
```jsx
<div className="card-kawaii">
  Content
</div>
```
```css
.card-kawaii {
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(48px);
  border-radius: 2rem;
  padding: 1.5rem;
  border: 2px solid rgba(255, 255, 255, 0.4);
  box-shadow: 0 8px 32px rgba(155, 159, 255, 0.15);
  transition: all 0.3s;
}
.card-kawaii:hover {
  box-shadow: 0 12px 48px rgba(155, 159, 255, 0.2);
  transform: scale(1.05);
  border-color: rgba(255, 182, 217, 0.4);
}
```

### Glass Card (更透明)
```jsx
<div className="glass-kawaii rounded-kawaii-lg p-6">
  Content
</div>
```

---

## 文字效果

### 渐变文字
```jsx
<h1 className="text-gradient-kawaii">
  Hello World
</h1>
```
```css
.text-gradient-kawaii {
  background: linear-gradient(135deg, #FFB6D9, #9B9FFF, #A8D8FF);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

### 发光文字
```jsx
<h1 className="text-glow">
  Glowing Text
</h1>
```
```css
.text-glow {
  text-shadow: 
    0 0 20px rgba(255, 182, 217, 0.6),
    0 0 40px rgba(155, 159, 255, 0.4);
}
```

---

## 动画系统

### Float Animation (浮动)
```jsx
<div className="animate-float">
  Floating Element
</div>
```
```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}
.animate-float {
  animation: float 3s ease-in-out infinite;
}
```

### Pulse Slow (慢脉冲)
```jsx
<div className="animate-pulse-slow">
  Pulsing Element
</div>
```
```css
.animate-pulse-slow {
  animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
```

### Bounce Slow (慢弹跳)
```jsx
<div className="animate-bounce-slow">
  Bouncing Element
</div>
```
```css
.animate-bounce-slow {
  animation: bounce 3s infinite;
}
```

### Framer Motion 常用动画
```jsx
// Fade In
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.6 }}
>

// Slide Up
<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>

// Scale + Rotate
<motion.div
  whileHover={{ scale: 1.1, rotate: 5 }}
  whileTap={{ scale: 0.95 }}
>

// Stagger Children
<motion.div
  variants={containerVariants}
  initial="hidden"
  animate="visible"
>
  {items.map(item => (
    <motion.div variants={itemVariants} />
  ))}
</motion.div>
```

---

## 间距系统

```css
/* Padding */
p-2   0.5rem   8px
p-4   1rem     16px
p-6   1.5rem   24px    /* 卡片内边距 */
p-8   2rem     32px    /* 大卡片内边距 */

/* Margin */
space-y-4   16px      /* 子元素垂直间距 */
space-y-6   24px
space-x-4   16px      /* 子元素水平间距 */

/* Gap (Grid/Flex) */
gap-4       16px
gap-6       24px
gap-8       32px      /* Section之间 */
gap-12      48px
```

---

## 响应式断点

```css
/* Tailwind默认 */
sm:   640px   @media (min-width: 640px)
md:   768px   @media (min-width: 768px)   /* 平板 */
lg:   1024px  @media (min-width: 1024px)  /* 笔记本 */
xl:   1280px  @media (min-width: 1280px)  /* 桌面 */
2xl:  1536px  @media (min-width: 1536px)  /* 大屏 */

/* 使用示例 */
<div className="text-2xl md:text-4xl lg:text-6xl">
  Responsive Text
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  Cards Grid
</div>
```

---

## 组件模式

### Section布局
```jsx
<section className="min-h-screen py-20 px-6">
  <div className="container mx-auto">
    {/* Section标题 */}
    <div className="text-center mb-16">
      <span className="inline-block px-4 py-2 bg-white/60 backdrop-blur-sm rounded-kawaii text-kawaii-purple font-semibold mb-4">
        🚀 Section Label
      </span>
      <h2 className="text-5xl font-display font-bold text-gradient-kawaii mb-4">
        Section Title
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Description
      </p>
    </div>
    
    {/* Section内容 */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* 内容 */}
    </div>
  </div>
</section>
```

### 卡片组件
```jsx
<div className="group relative">
  {/* 发光效果 */}
  <div className="absolute -inset-0.5 bg-gradient-to-r from-kawaii-pink to-kawaii-purple rounded-kawaii-lg blur opacity-30 group-hover:opacity-100 transition"></div>
  
  {/* 卡片主体 */}
  <div className="relative card-kawaii">
    <h3 className="text-xl font-display font-bold">Title</h3>
    <p className="text-gray-600">Description</p>
  </div>
</div>
```

---

## Emoji使用指南

### 导航/功能
```
🏠 Home         💼 Work          🚀 Projects
👨‍💻 About        ⚡ Skills        📬 Contact
📄 Resume       🐙 GitHub        💼 LinkedIn
📧 Email        🔗 Link          📱 Mobile
```

### 项目/技术
```
🎤 Voice        🤖 AI/ML         💻 Code
🎮 Game         🎨 Design        🌐 Web
📊 Data         🏗️ Build         ⚙️ Config
🔧 Tools        📦 Package       🎯 Focus
```

### 装饰/情感
```
✨ Sparkle      💡 Idea          🎉 Celebrate
💜 Love         🌸 Flower        ☕ Coffee
🌟 Star         💎 Gem           🔥 Hot
🎭 Creative     🎪 Fun           🎨 Art
```

---

## 最佳实践

### DO ✅
- 使用Kawaii配色方案保持一致性
- 给所有交互元素添加hover效果
- 使用圆角让界面更友好
- 添加适度的动画提升体验
- 保持足够的对比度（可访问性）
- 使用emoji增加趣味性

### DON'T ❌
- 不要使用太多颜色（坚持6种主色）
- 不要过度使用动画（会让人眩晕）
- 不要用太小的字号（最小12px）
- 不要忽略移动端适配
- 不要用太多不同的圆角尺寸
- 不要让glassmorphism太透明（影响可读性）

---

## 无障碍访问

### 对比度
```
确保文字与背景对比度 >= 4.5:1

✅ Good:
- 深灰文字 (#374151) on 白色背景
- 白色文字 on 紫色渐变 (#9B9FFF)

❌ Bad:
- 浅灰文字 (#E5E7EB) on 白色背景
- 粉色文字 (#FFB6D9) on 白色背景
```

### 焦点状态
```css
/* 键盘导航可见 */
button:focus-visible {
  outline: 2px solid #9B9FFF;
  outline-offset: 2px;
}
```

### Alt文本
```jsx
<img src="..." alt="Detailed description of image" />
```

---

## 性能优化

### 图片优化
```
- 使用 WebP 格式
- 提供多尺寸版本 (srcset)
- 懒加载非首屏图片
- 压缩到合理大小 (<200KB)
```

### 动画性能
```css
/* 使用 GPU 加速的属性 */
✅ transform: translateX/Y/Z, scale, rotate
✅ opacity

❌ left, top, width, height (会触发 reflow)
```

### 加载策略
```jsx
// 代码分割
const Component = lazy(() => import('./Component'));

// 图片懒加载
<img loading="lazy" src="..." />
```

---

制作于 2024
Kawaii Tech Design System v1.0
