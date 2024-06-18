import './App.css';
import './pages/styles.css';
import {useLocation} from 'react-router-dom';
import Slide from 'react-reveal/Slide';
import Home from './pages/home';
import Portfolio from './pages/portfolio';
import About from './pages/about';
import Skills from './pages/skills';
import Contact from './pages/contact';
import Blog from './pages/blog'
import Header from './pages/partials/header';
import Footer from './pages/partials/footer';


function MainPage() {
  return (
    <div className='Body-css'>
      <Header />
        
          <div className='sections' id="home"  > <Home /></div>
        
        <Slide left>
          <div className='sections' id="portfolio" > <Portfolio /> </div>
        </Slide>

        <Slide right>
          <div className='sections' id="about"> <About /> </div>
        </Slide>

        <Slide left>
          <div className='sections' id="skills"> <Skills /> </div>
        </Slide>

        <Slide right>
          <div className='sections' id="contact"> <Contact /> </div>
        </Slide>

        <Footer />
      </div>
  );
}

function App() {
  const location = useLocation();
  
  if (location.pathname === '/blog') {
    return <Blog />;
  }

  return <MainPage />;
}

export default App;