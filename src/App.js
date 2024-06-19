import './App.css';
import React from "react";
import { Route, Routes } from 'react-router-dom';
import Blog from './pages/blog';
import Home from './pages/home';


function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      </div>
  );
}

export default App;