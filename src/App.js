import './App.css';
import './pages/styles.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Slide from 'react-reveal/Slide';
import Home from './pages/home';
import Portfolio from './pages/portfolio';
import About from './pages/about';
import Skills from './pages/skills';
import Contact from './pages/contact';
import Blog from './pages/blog';
import Header from './pages/partials/header';
import Footer from './pages/partials/footer';
import {Nav} from 'react-bootstrap';

function MainPage() {
  return (
    <div className='Body-css'>
      <Header />
      
      <div className='sections' id="home"><Home /></div>

      <Slide left>
        <div className='sections' id="portfolio"><Portfolio /></div>
      </Slide>

      <Slide right>
        <div className='sections' id="about"><About /></div>
      </Slide>

      <Slide left>
        <div className='sections' id="skills"><Skills /></div>
      </Slide>

      <Slide right>
        <div className='sections' id="contact"><Contact /></div>
      </Slide>
      <Nav.Link href="/blog" >Home</Nav.Link>
        <Footer />
    </div>
  );
}

function BlogPage() {
  return (
    <div className='Body-css'>
      
      <div className='sections' id="blog"><Blog /></div>
      
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;