import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ShoppingCart, ExternalLink } from 'lucide-react';

const gifts = [
  {
    id: 1,
    name: "Love Letter Writing Kit",
    price: 2999,
    description: "A beautiful vintage-style writing set with premium paper, envelopes, wax seals, and a fountain pen.",
    image: "https://images.unsplash.com/photo-1578070181910-f1e514afdd08?auto=format&fit=crop&w=800&q=80",
    category: "Romantic"
  },
  {
    id: 2,
    name: "Couple's Cooking Class Subscription",
    price: 8999,
    description: "Monthly online cooking classes for couples to learn new recipes and cook together.",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
    category: "Experience"
  },
  {
    id: 3,
    name: "Custom Star Map",
    price: 4999,
    description: "A personalized star map showing the night sky from any special date and location.",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
    category: "Personalized"
  },
  {
    id: 4,
    name: "Self-Care Gift Box",
    price: 6999,
    description: "Luxury bath bombs, candles, face masks, and chocolates for a perfect relaxation day.",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80",
    category: "Wellness"
  }
];

export const GiftIdeas: React.FC = () => {
  return (
    <div className="min-h-screen pt-20 pb-12 px-4 bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-900 dark:to-purple-900">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Valentine's Gift Ideas <Heart className="inline-block w-8 h-8 text-pink-500" />
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Find the perfect gift to express your love
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gifts.map((gift) => (
            <motion.div
              key={gift.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
            >
              <div className="relative h-48">
                <img
                  src={gift.image}
                  alt={gift.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-pink-500 text-white rounded-full text-sm">
                    {gift.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {gift.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {gift.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-pink-500">
                  ₹{gift.price}
                  </span>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors">
                    <ShoppingCart className="w-5 h-5" />
                    <span>Buy Now </span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};