import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import TamilLit from './pages/TamilLit';
import BoardBrain from './pages/BoardBrain';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 text-gray-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tamil-lit" element={<TamilLit />} />
          <Route path="/board-brain" element={<BoardBrain />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
