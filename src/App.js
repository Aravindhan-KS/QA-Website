import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Events from './pages/Events';
import QuizSets from './pages/QuizSets';
import Articles from './pages/Articles';
import Gallery from './pages/Gallery';
import Team from './pages/Team';
import Contact from './pages/Contact';
import PageWrapper from './components/PageWrapper';
import './App.css';
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <Router>
      <SpeedInsights />
      <Analytics />
      <div className="App min-h-screen flex flex-col">
        <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
              <Route path="/events" element={<PageWrapper><Events /></PageWrapper>} />
              <Route path="/quiz-sets" element={<PageWrapper><QuizSets /></PageWrapper>} />
              <Route path="/articles" element={<PageWrapper><Articles /></PageWrapper>} />
              <Route path="/gallery" element={<PageWrapper><Gallery /></PageWrapper>} />
              <Route path="/team" element={<PageWrapper><Team /></PageWrapper>} />
              <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
            </Routes>
          </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;