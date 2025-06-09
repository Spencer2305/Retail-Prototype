import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

const DarkModeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const isDarkMode = savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    setIsDark(isDarkMode);
    updateTheme(isDarkMode);
  }, []);

  const updateTheme = (dark: boolean) => {
    if (dark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const toggleTheme = () => {
    const newDarkMode = !isDark;
    setIsDark(newDarkMode);
    updateTheme(newDarkMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className={`
        relative p-3 rounded-xl transition-all duration-300 group
        ${isDark 
          ? 'bg-dark-card hover:bg-dark-cardHover border border-dark-border hover:border-cosmic-purple/40' 
          : 'bg-white/60 hover:bg-white/80 border border-gray-200/50 hover:border-cosmic-purple/30'
        }
        backdrop-blur-sm shadow-lg hover:shadow-xl transform hover:scale-105
      `}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <div className="relative w-5 h-5">
        <Sun 
          className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${
            isDark 
              ? 'rotate-90 scale-0 opacity-0' 
              : 'rotate-0 scale-100 opacity-100 text-cosmic-gold'
          }`}
        />
        <Moon 
          className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${
            isDark 
              ? 'rotate-0 scale-100 opacity-100 text-cosmic-lavender' 
              : '-rotate-90 scale-0 opacity-0'
          }`}
        />
      </div>
      
      {/* Glow effect */}
      <div className={`
        absolute inset-0 rounded-xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300
        ${isDark ? 'bg-cosmic-purple' : 'bg-cosmic-gold'}
      `} />
    </button>
  );
};

export default DarkModeToggle; 