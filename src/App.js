import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import About from './pages/About';

function App() {
  return (
    <div className="text-primary bg-secondary flex gap-5 flex-col  min-h-screen transition duration-200 scroll-smooth antialiased ">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
