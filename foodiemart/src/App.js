import React from 'react';
import { Navbar } from './components/navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Features from './pages/Features';
import Products from './pages/Products';
import Footer from "./components/Footer";
import FooterApps from "./components/FooterApps";
import './App.css'



const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <div>
      <FooterApps />
      <Footer />
      </div>
    </div>
    
  )
}

export default App

