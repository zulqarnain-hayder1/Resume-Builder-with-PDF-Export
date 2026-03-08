import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Builder from './pages/Builder';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/builder" element={<Builder />} />
      </Routes>
    </div>
  );
}

export default App;
