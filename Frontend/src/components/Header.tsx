import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Moon, Sun, MessageCircleHeart } from 'lucide-react';
import { useThemeStore } from '../store/theme';
import { motion } from 'framer-motion';

const navItems = [
  { label: 'Home', path: '/', description: 'Discover your perfect Valentine match!' },
  { label: 'Start Quiz', path: '/quiz', description: 'Start now to meet your perfect Valentine!' },
  { label: 'Gift Ideas', path: '/gifts', description: 'Find the perfect Valentine\'s gift!' },
  { label: 'Date Ideas', path: '/dates', description: 'Discover romantic date ideas!' },
  { label: 'Ask AI', path: '/chat', description: 'Get personalized recommendations!' },
];

export const Header: React.FC = () => {
  const { isDarkMode, toggleTheme } = useThemeStore();

  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Heart className="w-8 h-8 text-pink-500" />
            </motion.div>
            <span className="text-xl font-bold text-gray-800 dark:text-white">
              <img  alt="" className='h-20 w-72' src="/images/Logo2.webp" />
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-gray-600 hover:text-pink-500 dark:text-gray-300 dark:hover:text-pink-400 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <Link
              to="/chat"
              className="flex items-center space-x-2 px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors"
            >
              <MessageCircleHeart className="w-5 h-5" />
              <span>Ask AI</span>
            </Link>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600" />
              )}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};