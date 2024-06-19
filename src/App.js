import './App.css';
import './pages/styles.css';
import React from "react";
import { Route, Routes } from 'react-router-dom';
import Blog from './pages/blog';
import Home from './pages/home';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
  );
}

export default App;