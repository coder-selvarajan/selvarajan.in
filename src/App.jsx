import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import TamilLit from './pages/TamilLit';
import BoardBrain from './pages/BoardBrain';
import VaiRajaVai from './pages/VaiRajaVai';
import VocabularyBuddy from './pages/VocabularyBuddy';
import Artfolio from './pages/Artfolio';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 text-gray-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tamil-lit" element={<TamilLit />} />
          <Route path="/board-brain" element={<BoardBrain />} />
          <Route path="/vai-raja-vai" element={<VaiRajaVai />} />
          <Route path="/vocabulary-buddy" element={<VocabularyBuddy />} />
          <Route path="/artfolio" element={<Artfolio />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
