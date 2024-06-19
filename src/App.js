import './App.css';
import './pages/styles.css';
import { Route, Routes, Router } from 'react-router-dom'
import Blog from './pages/blog'
import Home from './pages/home';

function App() {
  return (
    <div className='Body-css'>
    <Router>
      <Routes>
        <Route path="/blog" element={<Blog />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;