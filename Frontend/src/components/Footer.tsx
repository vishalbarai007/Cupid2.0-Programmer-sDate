import React from 'react';
import { Heart, Twitter, Facebook, Instagram, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Heart className="w-6 h-6 text-pink-500" />
              <span className="text-lg font-bold text-gray-800 dark:text-white">
                <img src="/images/logo.png" alt="" />
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400">
              Love isn't just about people – sometimes, it's pizza 🍕❤️
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/chat" className="text-gray-600 hover:text-pink-500 dark:text-gray-400 dark:hover:text-pink-400">
                  Ask Cupid 
                </Link>
              </li>
              <li>
                <Link to="/quiz" className="text-gray-600 hover:text-pink-500 dark:text-gray-400 dark:hover:text-pink-400">
                  Start Quiz
                </Link>
              </li>
              <li>
                <Link to="/gifts" className="text-gray-600 hover:text-pink-500 dark:text-gray-400 dark:hover:text-pink-400">
                  Gift idea
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 dark:text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-pink-500 dark:text-gray-400 dark:hover:text-pink-400">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-pink-500 dark:text-gray-400 dark:hover:text-pink-400">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-pink-500 dark:text-gray-400 dark:hover:text-pink-400">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 dark:text-white mb-4">Newsletter</h3>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-gray-600 dark:text-gray-400">
            © 2025 Cupid Code 💌 <b> by Yug and Vishal ft. Programmer's Date 3.0 </b> . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};