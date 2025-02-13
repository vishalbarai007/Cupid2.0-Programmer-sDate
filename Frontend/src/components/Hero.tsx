import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-purple-100 dark:from-pink-900 dark:to-purple-900">
      <div className="container mx-auto px-4 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <img src="/images/PD3.jpeg " className='h-40 w-40 rounded-full absolute top-52 right-10' />
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6">
            Discover Your Unconventional Valentine!
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Find your perfect match in the most unexpected places. Because love isn't just about people – sometimes, it's about pizza! 🍕
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/quiz')}
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-pink-500 rounded-full hover:bg-pink-600 transition-colors"
          >
            <Sparkles className="w-5 h-5 mr-2" />
            Chat With Our Cupid 🤭 !
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12"
        >
          <img
            src="/images/Hero.webp"
            alt="Valentine's Day themed decorative image"
            className="rounded-lg shadow-xl mx-auto sm:max-w-xl md:max-w-2xl lg:max-w-2xl "
          />
          <img src="/images/PD1.jpeg " className='h-40 w-40 rounded-full absolute left-10 bottom-0' />

        </motion.div>
      </div>
    </div>
  );
};