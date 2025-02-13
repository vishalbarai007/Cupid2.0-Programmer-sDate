import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { useQuizStore } from '../../store/quiz';
import { Welcome } from './Welcome';
import { Question } from './Question';
import { Results } from './Results';
import { questions } from '../../data/questions';

export const Quiz: React.FC = () => {
  const { currentStep } = useQuizStore();

  return (
    <div className="Quiz min-h-screen pt-20 pb-12 px-4 bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-900 dark:to-purple-900">

      <div className="container mx-auto">
        <AnimatePresence mode="wait">
          {currentStep === 0 ? (
            <Welcome key="welcome" />
          ) : currentStep <= questions.length ? (
            <Question key={`question-${currentStep}`} questionIndex={currentStep - 1} />
          ) : (
            <Results key="results" />
          )}
        </AnimatePresence>
      </div>
      <img src="/images/PD$.jpeg" alt="" className='rounded-full h-48 w-48' />
    </div>
  );
};