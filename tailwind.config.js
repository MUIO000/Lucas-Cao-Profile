/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Kawaii Tech 配色方案 (优化版 - 减少粉色，增加科技感)
        kawaii: {
          pink: '#F472B6',      // 更成熟的粉色
          'pink-light': '#FBCFE8',
          'pink-dark': '#DB2777',
          purple: '#8B5CF6',    // 科技紫
          'purple-light': '#C4B5FD',
          'purple-dark': '#7C3AED',
          blue: '#3B82F6',      // 科技蓝
          'blue-light': '#93C5FD',
          'blue-dark': '#2563EB',
          cyan: '#06B6D4',      // 新增：科技青
          'cyan-light': '#67E8F9',
          'cyan-dark': '#0891B2',
          mint: '#34D399',      // 更鲜艳的薄荷绿
          'mint-light': '#A7F3D0',
          'mint-dark': '#059669',
          peach: '#FDBA74',     // 活力橙
          'peach-light': '#FED7AA',
          'peach-dark': '#EA580C',
          lavender: '#EEF2FF',  // 极淡的蓝紫背景
          dark: '#111827',      // 深色文字
        }
      },
      fontFamily: {
        sans: ['Quicksand', 'system-ui', 'sans-serif'],
        display: ['Quicksand', 'sans-serif'],
      },
      borderRadius: {
        'kawaii': '1.5rem',
        'kawaii-lg': '2rem',
        'kawaii-xl': '2.5rem',
      },
      boxShadow: {
        'kawaii': '0 8px 32px rgba(155, 159, 255, 0.15)',
        'kawaii-lg': '0 12px 48px rgba(155, 159, 255, 0.2)',
        'kawaii-glow': '0 0 20px rgba(255, 182, 217, 0.4)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
