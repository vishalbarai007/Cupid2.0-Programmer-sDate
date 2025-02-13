import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Clock, Star, Calendar } from 'lucide-react';

const dateIdeas = [
  {
    id: 1,
    title: "Stargazing Picnic",
    description: "Pack some snacks, grab blankets, and head to a quiet spot for a romantic evening under the stars.",
    duration: "2-3 hours",
    difficulty: "Easy",
    bestTime: "Evening",
    image: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Couples Cooking Adventure",
    description: "Choose a new recipe, shop for ingredients together, and create a delicious meal while enjoying some wine.",
    duration: "3-4 hours",
    difficulty: "Medium",
    bestTime: "Evening",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Art Gallery Hopping",
    description: "Visit local art galleries, discuss the artwork, and maybe end with a coffee at a cute café.",
    duration: "2-3 hours",
    difficulty: "Easy",
    bestTime: "Afternoon",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80"
  }
];

export const DateIdeas: React.FC = () => {
  return (
    <div className="min-h-screen pt-20 pb-12 px-4 bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-900 dark:to-purple-900">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Romantic Date Ideas <Heart className="inline-block w-8 h-8 text-pink-500" />
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Create unforgettable moments together
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dateIdeas.map((date) => (
            <motion.div
              key={date.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
            >
              <div className="relative h-48">
                <img
                  src={date.image}
                  alt={date.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {date.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {date.description}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                    <Clock className="w-4 h-4" />
                    <span>{date.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                    <Star className="w-4 h-4" />
                    <span>{date.difficulty}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                    <Calendar className="w-4 h-4" />
                    <span>{date.bestTime}</span>
                  </div>
                </div>
                <button className="mt-4 w-full py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors">
                  Save Idea
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};