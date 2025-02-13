import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useQuizStore } from '../../store/quiz';
import { questions } from '../../data/questions';

interface QuestionProps {
  questionIndex: number;
}

export const Question: React.FC<QuestionProps> = ({ questionIndex }) => {
  const { answers, setAnswer, nextStep, previousStep } = useQuizStore();
  const question = questions[questionIndex];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="bg-white max-w-2xl mx-auto p-6 dark:bg-gray-800 rounded-xl shadow-xl"
    >
      <div className="mb-8">
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-6">
          <div
            className="bg-pink-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((questionIndex + 1) / questions.length) * 100}%` }}
          />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
          {question.question}
        </h2>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 gap-4"
      >
        {question.options.map((option) => (
          <motion.button
            key={option.value}
            variants={item}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              setAnswer(question.id, option.value);
              nextStep();
            }}
            className={`p-4 rounded-lg border-2 transition-all ${
              answers[question.id] === option.value
                ? 'border-pink-500 bg-pink-50 dark:bg-pink-900'
                : 'border-gray-200 dark:border-gray-700 hover:border-pink-300 dark:hover:border-pink-700'
            }`}
          >
            <div className="flex items-center space-x-3">
              <span className="text-2xl">{option.emoji}</span>
              <span className="text-lg text-gray-800 dark:text-white">
                {option.label}
              </span>
            </div>
          </motion.button>
        ))}
      </motion.div>

      <div className="flex justify-between mt-8">
        <button
          onClick={previousStep}
          className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Previous</span>
        </button>
        <button
          onClick={nextStep}
          className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400"
        >
          <span>Skip</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
};