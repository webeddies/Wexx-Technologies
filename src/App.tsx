import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import CloudServices from './CloudServices';
import ApplicationServices from './ApplicationServices';
import AdvisoryServices from './AdvisoryServices';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ScrollToTop from './ScrollToTop';


const App = () => {
  return (
    <>
      <ScrollToTop /> {/* ✅ this makes all navigations scroll to top */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services/0" element={<CloudServices />} />
        <Route path="/services/1" element={<ApplicationServices />} />
        <Route path="/services/2" element={<AdvisoryServices />} />
      </Routes>
    </>
  );
};

export default App;
