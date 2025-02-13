import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Share2 } from 'lucide-react';
import { useQuizStore } from '../../store/quiz';
import { Link } from 'react-router-dom';

export const Results: React.FC = () => {
  const { userName, answers } = useQuizStore();

  // Simple matching logic based on answers
  const getMatch = () => {
    const matches = {
      sarcasm: {
        title: "Coffee ☕",
        description: "Like your humor, it's dark and bitter, yet somehow everyone loves it!",
        compatibility: 87,
      },
      snacks: {
        title: "Pizza 🍕",
        description: "Always there when you need comfort, never judges your Netflix choices.",
        compatibility: 92,
      },
      memes: {
        title: "Social Media Feed 📱",
        description: "Endless entertainment, occasionally profound, mostly ridiculous.",
        compatibility: 85,
      },
    };

    // Default match if no clear pattern
    return matches[answers['love-language'] as keyof typeof matches] || {
      title: "Weighted Blanket 🛏️",
      description: "Reliable, comforting, and won't ghost you unless you forget to wash it.",
      compatibility: 89,
    };
  };

  const match = getMatch();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto p-8 bg-white dark:bg-gray-800 rounded-xl shadow-xl"
    >
      <div className="text-center mb-8">
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="inline-block"
        >
          <Heart className="w-16 h-16 text-pink-500 mx-auto" />
        </motion.div>
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mt-4">
          {userName}, We Found Your Perfect Match!
        </h2>
      </div>

      <div className="bg-pink-50 dark:bg-pink-900/30 p-6 rounded-lg mb-8">
        <h3 className="text-2xl font-bold text-pink-600 dark:text-pink-400 mb-2">
          {match.title}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {match.description}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-semibold text-gray-700 dark:text-gray-300">
              Compatibility:
            </span>
            <span className="text-2xl font-bold text-pink-500">
              {match.compatibility}%
            </span>
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors">
            <Share2 className="w-5 h-5" />
            <span>Share Result</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link
          to="/gifts"
          className="p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors"
        >
          <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">
            Find the Perfect Gift
          </h4>
          <p className="text-gray-600 dark:text-gray-400">
            Discover unique gift ideas for your match
          </p>
        </Link>
        <Link
          to="/dates"
          className="p-4 bg-pink-50 dark:bg-pink-900/30 rounded-lg hover:bg-pink-100 dark:hover:bg-pink-900/50 transition-colors"
        >
          <h4 className="font-semibold text-pink-600 dark:text-pink-400 mb-2">
            Plan Your First Date
          </h4>
          <p className="text-gray-600 dark:text-gray-400">
            Browse romantic date ideas and activities
          </p>
        </Link>
      </div>

      <div className="mt-8 text-center">
        <Link
          to="/chat"
          className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full hover:from-pink-600 hover:to-purple-600 transition-colors"
        >
          <span>Get Personalized Advice</span>
          <Heart className="w-5 h-5" />
        </Link>
      </div>
    </motion.div>
  );
};