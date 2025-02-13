import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';
import { Quiz } from './components/quiz/Quiz';
import { GiftIdeas } from './pages/GiftIdeas';
import { DateIdeas } from './pages/DateIdeas';
import { Chat } from './pages/Chat';
import { useThemeStore } from './store/theme';

function App() {
  const { isDarkMode } = useThemeStore();

  return (
    <Router>
      <div className={isDarkMode ? 'dark' : ''}>
        <div className="min-h-screen bg-white dark:bg-gray-900">
          <Header />
          <main className="pt-16">
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/gifts" element={<GiftIdeas />} />
              <Route path="/dates" element={<DateIdeas />} />
              <Route path="/chat" element={<Chat />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;