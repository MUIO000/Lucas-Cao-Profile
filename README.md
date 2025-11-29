# 🎨 Lucas Cao - Kawaii Tech Portfolio

A modern, interactive personal portfolio website with a **Kawaii Tech aesthetic** - featuring soft pastel colors, playful animations, and 2.5D effects.

## ✨ Features

- **🎨 Kawaii Tech Design System**
  - Pastel color palette (pink, purple, blue, mint)
  - Glassmorphism effects
  - Rounded corners and soft shadows
  - Playful emoji accents

- **⚡ Modern Tech Stack**
  - React 18 + Vite
  - TailwindCSS for styling
  - Framer Motion for animations
  - React Parallax Tilt for 3D effects

- **📱 Fully Responsive**
  - Mobile-first design
  - Smooth animations
  - Optimized performance

- **🎭 Interactive Elements**
  - Parallax scrolling
  - 3D tilt effects on hover
  - Smooth page transitions
  - Animated skill bars

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

\`\`\`bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
\`\`\`

The site will be available at `http://localhost:3000`

## 📁 Project Structure

\`\`\`
lucas-portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Navigation bar
│   │   ├── Hero.jsx          # Hero section with workspace illustration
│   │   ├── About.jsx         # About me + skills
│   │   ├── Projects.jsx      # Project showcase cards
│   │   └── ...               # More components to add
│   ├── styles/
│   │   └── index.css         # Global styles + Kawaii design system
│   ├── App.jsx               # Main app component
│   └── main.jsx              # React entry point
├── public/                   # Static assets
├── index.html
├── package.json
├── tailwind.config.js        # Tailwind + Kawaii theme config
└── vite.config.js
\`\`\`

## 🎨 Design System

### Color Palette

\`\`\`css
/* Kawaii Tech Colors */
--kawaii-pink: #FFB6D9
--kawaii-purple: #9B9FFF
--kawaii-blue: #A8D8FF
--kawaii-mint: #B5EAD7
--kawaii-peach: #FFD4A3
--kawaii-lavender: #E6E6FA
\`\`\`

### Typography
- **Display Font**: Poppins (headings)
- **Body Font**: Inter (text)

### Components
- `btn-kawaii` - Primary gradient button
- `btn-kawaii-outline` - Outlined button
- `card-kawaii` - Glass effect card
- `glass-kawaii` - Glassmorphism container

## 📝 TODO: Next Steps

### 1. Add Kawaii Workspace Illustration
- [ ] Create or source kawaii-style workspace illustration
- [ ] Options:
  - Use Spline for 3D scene
  - Commission illustration from Fiverr/Upwork
  - Use AI generation (Midjourney/DALL-E)
  - Source from Storyset/Blush
- [ ] Replace placeholder in Hero.jsx

### 2. Complete Remaining Sections
- [ ] Skills Section (with 3D icons)
- [ ] Experience Timeline (fiber optic style?)
- [ ] Contact Form (with cute animations)
- [ ] Testimonials (if applicable)

### 3. Add Interactive Features
- [ ] Custom cursor effect
- [ ] Page transition animations
- [ ] Loading screen with logo animation
- [ ] Easter eggs (hidden terminal?)

### 4. Performance Optimization
- [ ] Image optimization
- [ ] Lazy loading
- [ ] Code splitting
- [ ] PWA support

### 5. Deployment
- [ ] Deploy to Vercel/Netlify
- [ ] Set up custom domain
- [ ] Add analytics
- [ ] SEO optimization

## 🎯 Customization Guide

### Update Personal Info
1. Edit `src/components/Hero.jsx` - Update name, title, bio
2. Edit `src/components/About.jsx` - Update education, skills, highlights
3. Edit `src/components/Projects.jsx` - Update projects array with your projects

### Change Colors
Edit `tailwind.config.js`:
\`\`\`js
colors: {
  kawaii: {
    pink: '#YOUR_COLOR',
    // ... customize all colors
  }
}
\`\`\`

### Add New Sections
1. Create component in `src/components/`
2. Import and add to `src/App.jsx`
3. Add navigation link in `src/components/Navbar.jsx`

## 🛠️ Technologies Used

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **3D Effects**: React Parallax Tilt
- **Icons**: Emoji (can switch to react-icons)

## 📦 Key Dependencies

\`\`\`json
{
  "react": "^18.2.0",
  "framer-motion": "^10.16.16",
  "react-parallax-tilt": "^1.7.181",
  "@splinetool/react-spline": "^2.2.6",
  "tailwindcss": "^3.3.6"
}
\`\`\`

## 🎨 Design Resources

### Illustration Sources
- [Storyset](https://storyset.com/) - Animated illustrations
- [Blush Design](https://blush.design/) - Customizable illustrations
- [3D Icons](https://3dicons.co/) - Free 3D icons
- [Spline](https://spline.design/) - 3D design tool

### Inspiration
- Lo-fi aesthetic
- Y2K design trends
- Soft/Pastel tech illustrations
- Modern glassmorphism

## 📧 Contact

- **Email**: lucascao1018@gmail.com
- **Phone**: +61 432906890
- **LinkedIn**: [Your LinkedIn]
- **GitHub**: [Your GitHub]

## 📄 License

MIT License - feel free to use this as a template for your own portfolio!

---

Made with 💜 by Lucas Cao
\`\`\`
