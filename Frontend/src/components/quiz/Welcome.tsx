import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { useQuizStore } from '../../store/quiz';

export const Welcome: React.FC = () => {
  const [name, setName] = useState('');
  const { setUserName, nextStep } = useQuizStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      setUserName(name);
      nextStep();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-lg mx-auto p-6 bg-white dark:bg-gray-800 rounded-xl shadow-xl"
    >
      <div className="text-center mb-8">
        <Sparkles className="w-12 h-12 text-pink-500 mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
          Let's find you someone who'll never ghost you...
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          (unless it's your WiFi! 👻)
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            First, what should we call you?
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            placeholder="Enter your name"
            required
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full py-3 px-6 text-white bg-pink-500 rounded-lg hover:bg-pink-600 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
        >
          Let's Begin! 💘
        </motion.button>
      </form>
    </motion.div>
  );
};