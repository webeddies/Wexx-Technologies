import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
};

export default App;
