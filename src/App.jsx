import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Accessories from './pages/Accessories';
import SimcardReg from './pages/simcardreg';

import Home from './pages/Homes';

import ErrorPage from './pages/ErrorPage';



function App() {
  return (
    <Router>
      <Header/>
      {/* All routes go here */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/simcardreg" element={<SimcardReg />} />
        {/* This route will catch any path that doesn't match the ones above */}
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
     <Footer/>
    </Router>
  );
}

export default App;