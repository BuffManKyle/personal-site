import './App.css';
import './pages/styles.css';
import { Route, Routes } from 'react-router-dom'
import Blog from './pages/blog'
import Home from './pages/home';

function App() {
  return (
      <Routes>
        <Route path="/blog" element={<Blog />} />
        <Route path="/" element={<Home />} />
      </Routes>
  );
}

export default App;