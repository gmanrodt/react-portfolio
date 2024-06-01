import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

import Header from '../componets/Header';
import Footer from '../componets/Footer';
import Nav from '../componets/Nav';

export default function App() {
  const [currentSection, setCurrentSection] = useState('About Me')
  
  return (
    <>
      <Header />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}